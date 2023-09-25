import{ay as M,p as y,g as w,a0 as Fe,ax as je,a1 as me,U as fe,r as N,a9 as ge,h as he,w as I,ak as te,al as Me,az as Xe,d as Ye,b as v,e as g,c as l,k as ye,ah as pe,aA as G,s as T,as as qe,N as be,I as ne,J as Ke,F as _e,M as Ue,Z as $,aB as D,ai as Se,aC as ae,aD as Ge,aE as Je,aa as se,K as Ce,m as J,a as Q,aF as Qe,t as we,aG as Ze,aH as et,u as ke,i as tt,aI as nt,aJ as re,a3 as at,aK as st,aL as ie}from"./index-b35c8b49.js";const xe=["top","bottom"],rt=["start","end","left","right"];function it(e,t){let[n,a]=e.split(" ");return a||(a=M(xe,n)?"start":M(rt,n)?"top":"center"),{side:oe(n,t),align:oe(a,t)}}function oe(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Dt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Ht(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Wt(e){return{side:e.align,align:e.side}}function Ft(e){return M(xe,e.side)?"y":"x"}const z=y({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return w()({name:n??Fe(je(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...z()},setup(a,r){let{slots:s}=r;return()=>{var i;return me(a.tag,{class:[e,a.class],style:a.style},(i=s.default)==null?void 0:i.call(s))}}})}function H(e){const t=fe("useRender");t.render=e}function Mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=N(),a=N();if(ge){const r=new ResizeObserver(s=>{e==null||e(s,r),s.length&&(t==="content"?a.value=s[0].contentRect:a.value=s[0].target.getBoundingClientRect())});he(()=>{r.disconnect()}),I(n,(s,i)=>{i&&(r.unobserve(te(i)),a.value=void 0),s&&r.observe(te(s))},{flush:"post"})}return{resizeRef:n,contentRect:Me(a)}}const Z=y({tag:{type:String,default:"div"}},"tag"),ot=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Xt=w(!1)({name:"VDefaultsProvider",props:ot(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:r,reset:s,root:i,scoped:o}=Xe(e);return Ye(a,{reset:s,root:i,scoped:o,disabled:r}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}});const lt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function ut(e){return{dimensionStyles:v(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}function ct(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Le=y({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...z(),...lt()},"VResponsive"),le=w()({name:"VResponsive",props:Le(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=ct(e),{dimensionStyles:r}=ut(e);return H(()=>{var s;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[l("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),dt=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),j=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:r,...s}=e,{component:i=pe,...o}=typeof a=="object"?a:{};return me(i,ye(typeof a=="string"?{name:r?"":a}:o,s,{disabled:r}),n)};function vt(e,t){if(!G)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var h;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(h=e._observe)==null?void 0:h[t.instance.$.uid];if(!c)return;const m=o.some(p=>p.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||m||c.init)&&r(m,o,u),m&&n.once?Ee(e,t):c.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Ee(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const mt={mounted:vt,unmounted:Ee},ft=mt,gt=y({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Le(),...z(),...dt()},"VImg"),ht=w()({name:"VImg",directives:{intersect:ft},props:gt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const r=T(""),s=N(),i=T(e.eager?"loading":"idle"),o=T(),u=T(),c=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=v(()=>c.value.aspect||o.value/u.value||0);I(()=>e.src,()=>{h(i.value!=="idle")}),I(m,(d,f)=>{!d&&f&&s.value&&x(s.value)}),qe(()=>h());function h(d){if(!(e.eager&&d)&&!(G&&!d&&!e.eager)){if(i.value="loading",c.value.lazySrc){const f=new Image;f.src=c.value.lazySrc,x(f,null)}c.value.src&&be(()=>{var f,S;if(n("loadstart",((f=s.value)==null?void 0:f.currentSrc)||c.value.src),(S=s.value)!=null&&S.complete){if(s.value.naturalWidth||b(),i.value==="error")return;m.value||x(s.value,null),p()}else m.value||x(s.value),W()})}}function p(){var d;W(),i.value="loaded",n("load",((d=s.value)==null?void 0:d.currentSrc)||c.value.src)}function b(){var d;i.value="error",n("error",((d=s.value)==null?void 0:d.currentSrc)||c.value.src)}function W(){const d=s.value;d&&(r.value=d.currentSrc||d.src)}let k=-1;function x(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout(k);const{naturalHeight:F,naturalWidth:R}=d;F||R?(o.value=R,u.value=F):!d.complete&&i.value==="loading"&&f!=null?k=window.setTimeout(S,f):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};S()}const L=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),C=()=>{var S;if(!c.value.src||i.value==="idle")return null;const d=l("img",{class:["v-img__img",L.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:p,onError:b},null),f=(S=a.sources)==null?void 0:S.call(a);return l(j,{transition:e.transition,appear:!0},{default:()=>[ne(f?l("picture",{class:"v-img__picture"},[f,d]):d,[[Ue,i.value==="loaded"]])]})},P=()=>l(j,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",L.value],src:c.value.lazySrc,alt:e.alt},null)]}),B=()=>a.placeholder?l(j,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!a.error)&&l("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,E=()=>a.error?l(j,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&l("div",{class:"v-img__error"},[a.error()])]}):null,Y=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=T(!1);{const d=I(m,f=>{f&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),d())})}return H(()=>{const[d]=le.filterProps(e);return ne(l(le,ye({class:["v-img",{"v-img--booting":!V.value},e.class],style:[{width:g(e.width==="auto"?o.value:e.width)},e.style]},d,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(_e,null,[l(C,null,null),l(P,null,null),l(Y,null,null),l(B,null,null),l(E,null,null)]),default:a.default}),[[Ke("intersect"),{handler:h,options:e.options},null,{once:!0}]])}),{currentSrc:r,image:s,state:i,naturalWidth:o,naturalHeight:u}}}),Yt=y({border:[Boolean,Number,String]},"border");function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{borderClasses:v(()=>{const a=D(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}function ee(e){return Se(()=>{const t=[],n={};if(e.value.background)if(ae(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text){const a=Ge(e.value.background);if(a.a==null||a.a===1){const r=Je(a);n.color=r,n.caretColor=r}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ae(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Re(e,t){const n=v(()=>({text:D(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=ee(n);return{textColorClasses:a,textColorStyles:r}}function ue(e,t){const n=v(()=>({background:D(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=ee(n);return{backgroundColorClasses:a,backgroundColorStyles:r}}const Kt=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ut(e){return{elevationClasses:v(()=>{const n=D(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const Te=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{roundedClasses:v(()=>{const a=D(e)?e.value:e.rounded,r=[];if(a===!0||a==="")r.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`rounded-${s}`);return r})}}const yt=[null,"default","comfortable","compact"],pt=y({density:{type:String,default:"default",validator:e=>yt.includes(e)}},"density");function bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const _t=["elevated","flat","tonal","outlined","text","plain"];function St(e,t){return l(_e,null,[e&&l("span",{key:"overlay",class:`${t}__overlay`},null),l("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ct=y({color:String,variant:{type:String,default:"elevated",validator:e=>_t.includes(e)}},"variant");function wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();const n=v(()=>{const{variant:s}=se(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=ee(v(()=>{const{variant:s,color:i}=se(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const kt=["x-small","small","default","large","x-large"],ze=y({size:{type:[String,Number],default:"default"}},"size");function Pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return Se(()=>{let n,a;return M(kt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:g(e.size),height:g(e.size)}),{sizeClasses:n,sizeStyles:a}})}const xt=y({color:String,start:Boolean,end:Boolean,icon:Ce,...z(),...ze(),...Z({tag:"i"}),...J()},"VIcon"),Lt=w()({name:"VIcon",props:xt(),setup(e,t){let{attrs:n,slots:a}=t;const r=N(),{themeClasses:s}=Q(e),{iconData:i}=Qe(v(()=>r.value||e.icon)),{sizeClasses:o}=Pe(e),{textColorClasses:u,textColorStyles:c}=Re(we(e,"color"));return H(()=>{var h,p;const m=(h=a.default)==null?void 0:h.call(a);return m&&(r.value=(p=Ze(m).filter(b=>b.type===et&&b.children&&typeof b.children=="string")[0])==null?void 0:p.children),l(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,o.value,u.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},c.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[m]})}),{}}});function Et(e,t){const n=N(),a=T(!1);if(G){const r=new IntersectionObserver(s=>{e==null||e(s,r),a.value=!!s.find(i=>i.isIntersecting)},t);he(()=>{r.disconnect()}),I(n,(s,i)=>{i&&(r.unobserve(i),a.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const ce={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Rt=y({location:String},"location");function Tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=ke();return{locationStyles:v(()=>{if(!e.location)return{};const{side:s,align:i}=it(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(c){return n?n(c):0}const u={};return s!=="center"&&(t?u[ce[s]]=`calc(100% - ${o(s)}px)`:u[s]=0),i!=="center"?t?u[ce[i]]=`calc(100% - ${o(i)}px)`:u[i]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const $t=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...z(),...Rt({location:"top"}),...Te(),...Z(),...J()},"VProgressLinear"),zt=w()({name:"VProgressLinear",props:$t(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=tt(e,"modelValue"),{isRtl:r,rtlClasses:s}=ke(),{themeClasses:i}=Q(e),{locationStyles:o}=Tt(e),{textColorClasses:u,textColorStyles:c}=Re(e,"color"),{backgroundColorClasses:m,backgroundColorStyles:h}=ue(v(()=>e.bgColor||e.color)),{backgroundColorClasses:p,backgroundColorStyles:b}=ue(e,"color"),{roundedClasses:W}=$e(e),{intersectionRef:k,isIntersecting:x}=Et(),L=v(()=>parseInt(e.max,10)),C=v(()=>parseInt(e.height,10)),P=v(()=>parseFloat(e.bufferValue)/L.value*100),B=v(()=>parseFloat(a.value)/L.value*100),E=v(()=>r.value!==e.reverse),Y=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),V=v(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function d(f){if(!k.value)return;const{left:S,right:F,width:R}=k.value.getBoundingClientRect(),We=E.value?R-f.clientX+(F-R):f.clientX-S;a.value=Math.round(We/R*L.value)}return H(()=>l(e.tag,{ref:k,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&x.value,"v-progress-linear--reverse":E.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},W.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?g(C.value):0,"--v-progress-linear-height":g(C.value),...o.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&d},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...c.value,[E.value?"left":"right"]:g(-C.value),borderTop:`${g(C.value/2)} dotted`,opacity:V.value,top:`calc(50% - ${g(C.value/4)})`,width:g(100-P.value,"%"),"--v-progress-linear-stream-to":g(C.value*(E.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",m.value],style:[h.value,{opacity:V.value,width:g(e.stream?P.value:100,"%")}]},null),l(pe,{name:Y.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(f=>l("div",{key:f,class:["v-progress-linear__indeterminate",f,p.value],style:b.value},null))]):l("div",{class:["v-progress-linear__determinate",p.value],style:[b.value,{width:g(B.value,"%")}]},null)]}),n.default&&l("div",{class:"v-progress-linear__content"},[n.default({value:B.value,buffer:P.value})])]})),{}}}),Gt=y({loading:[Boolean,String]},"loader");function Jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}function Qt(e,t){var a;let{slots:n}=t;return l("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||l(zt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}function Zt(){var e,t;return(t=(e=fe("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function en(e,t){const n=nt("RouterLink"),a=v(()=>!!(e.href||e.to)),r=v(()=>(a==null?void 0:a.value)||re(t,"click")||re(e,"click"));if(typeof n=="string")return{isLink:a,isClickable:r,href:we(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:a,isClickable:r,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&v(()=>{var i,o;return e.exact?(i=s.isExactActive)==null?void 0:i.value:(o=s.isActive)==null?void 0:o.value}),href:v(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const tn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let q=!1;function nn(e,t){let n=!1,a,r;ge&&(be(()=>{window.addEventListener("popstate",s),a=e==null?void 0:e.beforeEach((i,o,u)=>{q?n?t(u):u():setTimeout(()=>n?t(u):u()),q=!0}),r=e==null?void 0:e.afterEach(()=>{q=!1})}),at(()=>{window.removeEventListener("popstate",s),a==null||a(),r==null||r()}));function s(i){var o;(o=i.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}const K=Symbol("rippleStop"),Pt=80;function de(e,t){e.style.transform=t,e.style.webkitTransform=t}function U(e){return e.constructor.name==="TouchEvent"}function Be(e){return e.constructor.name==="KeyboardEvent"}const Bt=function(e,t){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!Be(e)){const p=t.getBoundingClientRect(),b=U(e)?e.touches[e.touches.length-1]:e;a=b.clientX-p.left,r=b.clientY-p.top}let s=0,i=.3;(h=t._ripple)!=null&&h.circle?(i=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,u=`${(t.clientHeight-s*2)/2}px`,c=n.center?o:`${a-s}px`,m=n.center?u:`${r-s}px`;return{radius:s,scale:i,x:c,y:m,centerX:o,centerY:u}},X={show(e,t){var b;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((b=t==null?void 0:t._ripple)!=null&&b.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:i,x:o,y:u,centerX:c,centerY:m}=Bt(e,t,n),h=`${s*2}px`;r.className="v-ripple__animation",r.style.width=h,r.style.height=h,t.appendChild(a);const p=window.getComputedStyle(t);p&&p.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),de(r,`translate(${o}, ${u}) scale3d(${i},${i},${i})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),de(r,`translate(${c}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function Ve(e){return typeof e>"u"||!!e}function O(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[K])){if(e[K]=!0,U(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Be(e),n._ripple.class&&(t.class=n._ripple.class),U(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{X.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Pt)}else X.show(e,n,t)}}function ve(e){e[K]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),X.hide(t)}}function Ie(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let A=!1;function Ne(e){!A&&(e.keyCode===ie.enter||e.keyCode===ie.space)&&(A=!0,O(e))}function Oe(e){A=!1,_(e)}function Ae(e){A&&(A=!1,_(e))}function De(e,t,n){const{value:a,modifiers:r}=t,s=Ve(a);if(s||X.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,st(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",ve,{passive:!0}),e.addEventListener("mousedown",ve);return}e.addEventListener("touchstart",O,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",Ie,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",O),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Ne),e.addEventListener("keyup",Oe),e.addEventListener("blur",Ae),e.addEventListener("dragstart",_,{passive:!0})}else!s&&n&&He(e)}function He(e){e.removeEventListener("mousedown",O),e.removeEventListener("touchstart",O),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",Ie),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Ne),e.removeEventListener("keyup",Oe),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Ae)}function Vt(e,t){De(e,t,!1)}function It(e){delete e._ripple,He(e)}function Nt(e,t){if(t.value===t.oldValue)return;const n=Ve(t.oldValue);De(e,t,n)}const an={mounted:Vt,unmounted:It,updated:Nt};const Ot=y({start:Boolean,end:Boolean,icon:Ce,image:String,...z(),...pt(),...Te(),...ze(),...Z(),...J(),...Ct({variant:"flat"})},"VAvatar"),sn=w()({name:"VAvatar",props:Ot(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=Q(e),{colorClasses:r,colorStyles:s,variantClasses:i}=wt(e),{densityClasses:o}=bt(e),{roundedClasses:u}=$e(e),{sizeClasses:c,sizeStyles:m}=Pe(e);return H(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,r.value,o.value,u.value,c.value,i.value,e.class],style:[s.value,m.value,e.style]},{default:()=>{var h;return[e.image?l(ht,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(Lt,{key:"icon",icon:e.icon},null):(h=n.default)==null?void 0:h.call(n),St(!1,"v-avatar")]}})),{}}});export{tn as A,wt as B,ut as C,Jt as D,Tt as E,en as F,St as G,Lt as H,dt as I,ft as J,it as K,Qt as L,j as M,Dt as N,Ht as O,Wt as P,Ft as Q,an as R,Zt as S,nn as T,ht as V,Z as a,Yt as b,Kt as c,Te as d,ue as e,qt as f,Ut as g,$e as h,Xt as i,jt as j,sn as k,Mt as l,z as m,zt as n,gt as o,pt as p,ze as q,Ct as r,bt as s,Pe as t,H as u,Re as v,Et as w,lt as x,Gt as y,Rt as z};