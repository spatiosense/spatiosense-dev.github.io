import{r as o,M as W,j,w as q}from"./index-BGUfx8h9.js";import{a as A,i as P,b as S,P as Z,c as K,L as O,h as U,d as V,p as G}from"./settings-CJ0KCgWf.js";import{c as _}from"./createLucideIcon-BaeUqCJG.js";function H(t,i){if(typeof t=="function")return t(i);t!=null&&(t.current=i)}function T(...t){return i=>{let e=!1;const n=t.map(h=>{const a=H(h,i);return!e&&typeof a=="function"&&(e=!0),a});if(e)return()=>{for(let h=0;h<n.length;h++){const a=n[h];typeof a=="function"?a():H(t[h],null)}}}}function X(...t){return o.useCallback(T(...t),t)}const I=t=>{const{width:i,height:e}=(t==null?void 0:t.getBoundingClientRect())||{};return[i/(t==null?void 0:t.offsetWidth)||1,e/(t==null?void 0:t.offsetHeight)||1]},D=t=>{var u;let{left:i,top:e}=t.getBoundingClientRect(),n=t;for(;n=n.parentElement||((u=n.parentNode)==null?void 0:u.host);){const{scrollLeft:c,scrollTop:b}=n;if(c||b){const[k,d]=I(n);i+=c*k,e+=b*d}if(getComputedStyle(n).position==="fixed")break}const[h,a]=I(t.offsetParent);return[i/h,e/a]};class Y extends o.Component{getSnapshotBeforeUpdate(i){const e=this.props.getElement();if(P(e)&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const n=e.offsetParent,h=P(n)&&n.offsetWidth||0,a=P(n)&&n.offsetHeight||0,u=getComputedStyle(e),c=this.props.sizeRef.current;c.height=parseFloat(u.height),c.width=parseFloat(u.width),c.top=e.offsetTop,c.left=e.offsetLeft,c.right=h-c.width-c.left,c.bottom=a-c.height-c.top,c.direction=u.direction,c.point=D(e)}return null}componentDidUpdate(){}render(){return this.props.children}}function J({children:t,isPresent:i,anchorX:e,anchorY:n,root:h,pop:a,popNode:u}){var g;const c=o.useId(),b=o.useRef(null),k=o.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:d}=o.useContext(W),C=a!==!1?((g=t.props)==null?void 0:g.ref)??(t==null?void 0:t.ref):void 0,m=X(b,C),M=()=>{var p;return b.current||((p=u==null?void 0:u.current)==null?void 0:p.current)},$=p=>{const{width:R,height:l,top:f,left:y,right:x,bottom:w,direction:v}=k.current,s=v==="rtl",r=e==="left"?s?`right:${x}`:`left:${y}`:s?`left:${y}`:`right:${x}`,E=n==="bottom"?`bottom:${w}`:`top:${f}`;p==null||p.insertRule(`[data-motion-pop-id="${c}"]{position:absolute!important;width:${R}px!important;height:${l}px!important;${r}px!important;${E}px!important}`)};return o.useInsertionEffect(()=>{const{width:p,height:R}=k.current,l=M();if(i||a===!1||!l||!p||!R)return;l.dataset.motionPopId=c;const f=l.ownerDocument,y=f.createElement("style");d&&(y.nonce=d);const x=h??f.head;x.appendChild(y),$(y.sheet);let w=0,v=0;return A.setup(()=>{const[s,r]=D(l);w=k.current.point[0]-s,v=k.current.point[1]-r}),A.read(()=>{const{sheet:s}=y;if(!s||!w&&!v)return;const r=k.current;r.left+=w,r.right-=w,r.top+=v,r.bottom-=v,s.deleteRule(0),$(s)}),()=>{l.removeAttribute("data-motion-pop-id"),x.contains(y)&&x.removeChild(y)}},[i]),j.jsx(Y,{isPresent:i,getElement:M,sizeRef:k,pop:a,children:a===!1?t:o.cloneElement(t,{ref:m})})}const Q=({children:t,initial:i,isPresent:e,onExitComplete:n,custom:h,presenceAffectsLayout:a,mode:u,anchorX:c,anchorY:b,root:k})=>{const d=q(tt),C=o.useId(),m=o.useRef(),M=o.useRef(e),$=o.useRef(n);S(()=>{M.current=e,$.current=n});let g=!0,p=o.useMemo(()=>(g=!1,{id:C,initial:i,isPresent:e,custom:h,onExitComplete:R=>{d.set(R,!0);for(const l of d.values())if(!l)return;n&&n()},register:(R,l)=>{var f,y;return d.set(R,!1),l&&((y=(f=l.parent)==null?void 0:f.presenceContext)==null?void 0:y.id)!==C&&(m.current=l),()=>{var x;d.delete(R),!M.current&&!d.size&&((x=$.current)==null||x.call($))}}}),[e,d,n]);return a&&g&&(p={...p}),o.useMemo(()=>{d.forEach((R,l)=>d.set(l,!1))},[e]),o.useEffect(()=>{!e&&!d.size&&n&&n()},[e]),t=j.jsx(J,{pop:u==="popLayout",isPresent:e,anchorX:c,anchorY:b,root:k,popNode:m,children:t}),j.jsx(Z.Provider,{value:p,children:t})};function tt(){return new Map}const z=t=>t.key||"";function B(t){const i=[];return o.Children.forEach(t,e=>{o.isValidElement(e)&&i.push(e)}),i}const yt=({children:t,custom:i,initial:e=!0,onExitComplete:n,presenceAffectsLayout:h=!0,mode:a="sync",propagate:u=!1,anchorX:c="left",anchorY:b="top",root:k})=>{const[d,C]=K(u),m=o.useMemo(()=>B(t),[t]),M=u&&!d?[]:m.map(z),$=o.useRef(!0),g=q(()=>new Map),p=o.useRef(new Set),[R,l]=o.useState(m),[f,y]=o.useState(m);S(()=>{u&&!d&&!f.length&&(C==null||C())},[d,u,f.length,C]);const x=o.useRef();o.useEffect(()=>()=>{const s=x.current;x.current=void 0,s==null||s()},[f]),S(()=>{$.current=!1;for(let s=0;s<f.length;s++){const r=z(f[s]);M.includes(r)?(g.delete(r),p.current.delete(r)):g.get(r)!==!0&&g.set(r,!1)}},[f,M.length,M.join("-")]);const w=[];if(m!==R){let s=[...m],r=0;for(const E of f){const L=M.indexOf(z(E));L===-1?(s.splice(r++,0,E),w.push(E)):r=L+w.length+1}return w.every(E=>g.get(z(E)))?s=m:a==="wait"&&(s=w),y(B(s)),l(m),null}const{forceRender:v}=o.useContext(O);return j.jsx(j.Fragment,{children:f.map(s=>{const r=z(s),E=u&&!d?!1:m===f||M.includes(r),L=()=>{if(p.current.has(r))return;if(g.has(r))p.current.add(r),g.set(r,!0);else return;let N=!0;g.forEach(F=>{F||(N=!1)}),N&&(v==null||v(),l([]),u&&(C==null||C()),x.current=n)};return j.jsx(Q,{isPresent:E,initial:!$.current||e?void 0:!1,custom:i,presenceAffectsLayout:h,mode:a,root:k,onExitComplete:E?void 0:L,anchorX:c,anchorY:b,children:s},r)})})};function mt(){!U.current&&V();const[t]=o.useState(G.current);return t}/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],gt=_("bell",et);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],xt=_("chevron-down",nt);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],kt=_("house",ot);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ct=_("loader-circle",st);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Mt=_("log-out",rt);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Rt=_("menu",it);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],wt=_("monitor",ct);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],_t=_("moon",at);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],$t=_("search",ut);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],vt=_("sun",dt);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Et=_("zap",lt);export{yt as A,gt as B,xt as C,kt as H,Mt as L,Rt as M,vt as S,Et as Z,_t as a,wt as b,$t as c,Ct as d,mt as u};
