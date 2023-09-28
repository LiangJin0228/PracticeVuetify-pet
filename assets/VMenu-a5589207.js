import{g as k,c as E,y as V,aG as b,p as F,aH as x,aI as K,aJ as C,aK as L,aL as B,am as I,aM as R,v as U,aN as q,a9 as j,j as A,r as N,U as H,aO as D,s as X,O as Y,w as G,u as J,aP as T,Z as Q,aQ as M,aR as W,aS as S}from"./index-80be9044.js";import{f as Z}from"./forwardRefs-e2994a01.js";import{V as z}from"./index-4dbf2435.js";const _=F({target:Object},"v-dialog-transition"),ee=k()({name:"VDialogTransition",props:_(),setup(i,m){let{slots:e}=m;const s={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,p){var v;await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>requestAnimationFrame(l)),t.style.visibility="";const{x:d,y:o,sx:n,sy:u,speed:f}=O(i.target,t),y=x(t,[{transform:`translate(${d}px, ${o}px) scale(${n}, ${u})`,opacity:0},{}],{duration:225*f,easing:K});(v=$(t))==null||v.forEach(l=>{x(l,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:C})}),y.finished.then(()=>p())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,p){var v;await new Promise(l=>requestAnimationFrame(l));const{x:d,y:o,sx:n,sy:u,speed:f}=O(i.target,t);x(t,[{},{transform:`translate(${d}px, ${o}px) scale(${n}, ${u})`,opacity:0}],{duration:125*f,easing:L}).finished.then(()=>p()),(v=$(t))==null||v.forEach(l=>{x(l,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:C})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>i.target?E(b,V({name:"dialog-transition"},s,{css:!1}),e):E(b,{name:"dialog-transition"},e)}});function $(i){var e;const m=(e=i.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return m&&[...m]}function O(i,m){const e=i.getBoundingClientRect(),s=B(m),[t,p]=getComputedStyle(m).transformOrigin.split(" ").map(c=>parseFloat(c)),[d,o]=getComputedStyle(m).getPropertyValue("--v-overlay-anchor-origin").split(" ");let n=e.left+e.width/2;d==="left"||o==="left"?n-=e.width/2:(d==="right"||o==="right")&&(n+=e.width/2);let u=e.top+e.height/2;d==="top"||o==="top"?u-=e.height/2:(d==="bottom"||o==="bottom")&&(u+=e.height/2);const f=e.width/s.width,y=e.height/s.height,v=Math.max(1,f,y),l=f/v||0,P=y/v||0,a=s.width*s.height/(window.innerWidth*window.innerHeight),r=a>.12?Math.min(1.5,(a-.12)*10+1):1;return{x:n-(t+s.left),y:u-(p+s.top),sx:l,sy:P,speed:r}}const te=F({id:String,...I(R({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:ee}}),["absolute"])},"VMenu"),ie=k()({name:"VMenu",props:te(),emits:{"update:modelValue":i=>!0},setup(i,m){let{slots:e}=m;const s=U(i,"modelValue"),{scopeId:t}=q(),p=j(),d=A(()=>i.id||`v-menu-${p}`),o=N(),n=H(D,null),u=X(0);Y(D,{register(){++u.value},unregister(){--u.value},closeParents(){setTimeout(()=>{u.value||(s.value=!1,n==null||n.closeParents())},40)}});async function f(a){var g,h,w;const r=a.relatedTarget,c=a.target;await Q(),s.value&&r!==c&&((g=o.value)!=null&&g.contentEl)&&((h=o.value)!=null&&h.globalTop)&&![document,o.value.contentEl].includes(c)&&!o.value.contentEl.contains(c)&&((w=M(o.value.contentEl)[0])==null||w.focus())}G(s,a=>{a?(n==null||n.register(),document.addEventListener("focusin",f,{once:!0})):(n==null||n.unregister(),document.removeEventListener("focusin",f))});function y(){n==null||n.closeParents()}function v(a){var r,c,g;i.disabled||a.key==="Tab"&&(W(M((r=o.value)==null?void 0:r.contentEl,!1),a.shiftKey?"prev":"next",w=>w.tabIndex>=0)||(s.value=!1,(g=(c=o.value)==null?void 0:c.activatorEl)==null||g.focus()))}function l(a){var c;if(i.disabled)return;const r=(c=o.value)==null?void 0:c.contentEl;r&&s.value?a.key==="ArrowDown"?(a.preventDefault(),S(r,"next")):a.key==="ArrowUp"&&(a.preventDefault(),S(r,"prev")):["ArrowDown","ArrowUp"].includes(a.key)&&(s.value=!0,a.preventDefault(),setTimeout(()=>setTimeout(()=>l(a))))}const P=A(()=>V({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":d.value,onKeydown:l},i.activatorProps));return J(()=>{const[a]=T.filterProps(i);return E(T,V({ref:o,class:["v-menu",i.class],style:i.style},a,{modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,absolute:!0,activatorProps:P.value,"onClick:outside":y,onKeydown:v},t),{activator:e.activator,default:function(){for(var r=arguments.length,c=new Array(r),g=0;g<r;g++)c[g]=arguments[g];return E(z,{root:"VMenu"},{default:()=>{var h;return[(h=e.default)==null?void 0:h.call(e,...c)]}})}})}),Z({id:d,ΨopenChildren:u},o)}});export{ie as V,ee as a};