// This endpoint accepts only the embedding document (or the direct-mount host).
// Rust owns the protocol and command dispatch; this layer only bounds transport work.
export function createEndpoint(window, wake) {
  const origin = window.location.origin;
  const host = window.parent;
  const viewerId = window.crypto.randomUUID();
  let queue = [];
  const receive = (event) => {
    if (
      event.origin !== origin ||
      event.source !== host ||
      event.data?.type !== "spatiosense:viewer:request"
    )
      return;
    let json;
    try {
      json = JSON.stringify(event.data.payload);
    } catch {
      return;
    }
    if (!json || json.length > 16384) return;
    if (queue.length >= 32) {
      const request = event.data.payload;
      if (
        typeof request?.channelId === "string" &&
        typeof request?.requestId === "string"
      ) {
        host.postMessage(
          {
            type: "spatiosense:viewer:output",
            payload: {
              protocolVersion: 1,
              channelId: request.channelId,
              viewerId,
              sceneEpoch: request.sceneEpoch ?? 0,
              body: {
                op: "error",
                requestId: request.requestId,
                error: {
                  code: "busy",
                  message: "Viewer request queue is full",
                },
              },
            },
          },
          origin,
        );
      }
      return;
    }
    queue.push(json);
    wake();
  };
  window.addEventListener("message", receive);
  host.postMessage({ type: "spatiosense:viewer:available", viewerId }, origin);
  return {
    viewerId,
    drain() {
      const result = queue;
      queue = [];
      return JSON.stringify(result);
    },
    send(json) {
      host.postMessage(
        { type: "spatiosense:viewer:output", payload: JSON.parse(json) },
        origin,
      );
    },
    dispose() {
      window.removeEventListener("message", receive);
      queue = [];
    },
  };
}
let endpoint;
export function installViewerBridge(wake) {
  endpoint?.dispose();
  endpoint = createEndpoint(window, wake);
  return endpoint.viewerId;
}
export function drainViewerRequests() {
  return endpoint?.drain() ?? "[]";
}
export function sendViewerOutput(json) {
  endpoint?.send(json);
}
