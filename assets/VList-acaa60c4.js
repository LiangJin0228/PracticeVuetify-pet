import{p as A,m as D,d as Y,g as x,h as J,ak as fe,t as C,j as f,u as F,c as d,l as le,U as R,s as T,O as $,aT as _,r as P,v as se,q as me,a7 as He,a9 as We,aU as qe,R as O,a as j,Y as ze,V as Qe,P as ye,X as Xe,an as ie,as as ge,b as he,ao as Ye,aq as Je,w as Ze,at as Se,f as pe,aV as et,Q as tt,K as re,E as ue,y as oe,af as nt,ay as w,aW as be,e as at,k as lt,aS as st}from"./index-80be9044.js";import{u as it}from"./ssrBoot-9be2d897.js";import{V as z,m as Ce,c as ke,a as Ve,d as we,R as rt,u as Ie,f as ut,e as Pe,b as Ae,g as ot}from"./index-4dbf2435.js";import{c as Le,a as ce}from"./VAvatar-a55e69c4.js";const ct=A({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...D(),...Y()},"VDivider"),dt=x()({name:"VDivider",props:ct(),setup(e,l){let{attrs:t}=l;const{themeClasses:n}=J(e),{textColorClasses:s,textColorStyles:a}=fe(C(e,"color")),i=f(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=le(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=le(e.thickness)),r});return F(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,s.value,e.class],style:[i.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const Q=Symbol.for("vuetify:list");function Be(){const e=R(Q,{hasPrepend:T(!1),updateHasPrepend:()=>null}),l={hasPrepend:T(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return $(Q,l),e}function Oe(){return R(Q,null)}const vt={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},xe={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},ft={open:xe.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},Z=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=_(n),e&&!s){const i=Array.from(a.entries()).reduce((r,p)=>{let[S,m]=p;return m==="on"?[...r,S]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},_e=e=>{const l=Z(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=_(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},mt=e=>{const l=Z(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},yt=e=>{const l=_e(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},gt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=_(n);const p=new Map(a),S=[n];for(;S.length;){const u=S.shift();a.set(u,s?"on":"off"),i.has(u)&&S.push(...i.get(u))}let m=r.get(n);for(;m;){const u=i.get(m),o=u.every(v=>a.get(v)==="on"),c=u.every(v=>!a.has(v)||a.get(v)==="off");a.set(m,o?"on":c?"off":"indeterminate"),m=r.get(m)}return e&&!s&&Array.from(a.entries()).reduce((o,c)=>{let[v,y]=c;return y==="on"?[...o,v]:o},[]).length===0?p:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},M=Symbol.for("vuetify:nested"),Te={id:T(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},ht=A({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),St=e=>{let l=!1;const t=P(new Map),n=P(new Map),s=se(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return yt(e.mandatory);case"leaf":return mt(e.mandatory);case"independent":return Z(e.mandatory);case"single-independent":return _e(e.mandatory);case"classic":default:return gt(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ft;case"single":return vt;case"multiple":default:return xe}}),r=se(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));me(()=>{l=!0});function p(u){const o=[];let c=u;for(;c!=null;)o.unshift(c),c=n.value.get(c);return o}const S=He("nested"),m={id:T(),root:{opened:s,selected:r,selectedValues:f(()=>{const u=[];for(const[o,c]of r.value.entries())c==="on"&&u.push(o);return u}),register:(u,o,c)=>{o&&u!==o&&n.value.set(u,o),c&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const o=n.value.get(u);if(o){const c=t.value.get(o)??[];t.value.set(o,c.filter(v=>v!==u))}n.value.delete(u),s.value.delete(u)},open:(u,o,c)=>{S.emit("click:open",{id:u,value:o,path:p(u),event:c});const v=i.value.open({id:u,value:o,opened:new Set(s.value),children:t.value,parents:n.value,event:c});v&&(s.value=v)},openOnSelect:(u,o,c)=>{const v=i.value.select({id:u,value:o,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:c});v&&(s.value=v)},select:(u,o,c)=>{S.emit("click:select",{id:u,value:o,path:p(u),event:c});const v=a.value.select({id:u,value:o,selected:new Map(r.value),children:t.value,parents:n.value,event:c});v&&(r.value=v),m.root.openOnSelect(u,o,c)},children:t,parents:n}};return $(M,m),m.root},Me=(e,l)=>{const t=R(M,Te),n=Symbol(We()),s=f(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(_(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),me(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&$(M,a),a},pt=()=>{const e=R(M,Te);$(M,{...e,isGroupActivator:!0})},bt=qe({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return pt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Ct=A({activeColor:String,baseColor:String,color:String,collapseIcon:{type:O,default:"$collapse"},expandIcon:{type:O,default:"$expand"},prependIcon:O,appendIcon:O,fluid:Boolean,subgroup:Boolean,title:String,value:null,...D(),...j()},"VListGroup"),de=x()({name:"VListGroup",props:Ct(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=Me(C(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),r=Oe(),{isBooted:p}=it();function S(c){s(!n.value,c)}const m=f(()=>({onClick:S,class:"v-list-group__header",id:i.value})),u=f(()=>n.value?e.collapseIcon:e.expandIcon),o=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return F(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&d(z,{defaults:o.value},{default:()=>[d(bt,null,{default:()=>[t.activator({props:m.value,isOpen:n.value})]})]}),d(ze,{transition:{component:Qe},disabled:!p.value},{default:()=>{var c;return[ye(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(c=t.default)==null?void 0:c.call(t)]),[[Xe,n.value]])]}})]})),{}}});const kt=Le("v-list-item-subtitle"),Vt=Le("v-list-item-title"),wt=A({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:O,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:ie(),onClickOnce:ie(),...Ce(),...D(),...ke(),...ge(),...Ve(),...he(),...Ye(),...j(),...Y(),...we({variant:"text"})},"VListItem"),ve=x()({name:"VListItem",directives:{Ripple:rt},props:wt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=Je(e,t),i=f(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:p,isIndeterminate:S,isGroupActivator:m,root:u,parent:o,openOnSelect:c}=Me(i,!1),v=Oe(),y=f(()=>{var h;return e.active!==!1&&(e.active||((h=a.isActive)==null?void 0:h.value)||p.value)}),g=f(()=>e.link!==!1&&a.isLink.value),V=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!v)),B=f(()=>e.rounded||e.nav),L=f(()=>e.color??e.activeColor),E=f(()=>({color:y.value?L.value??e.baseColor:e.baseColor,variant:e.variant}));Ze(()=>{var h;return(h=a.isActive)==null?void 0:h.value},h=>{h&&o.value!=null&&u.open(o.value,!0),h&&c(h)},{immediate:!0});const{themeClasses:U}=J(e),{borderClasses:K}=Ie(e),{colorClasses:H,colorStyles:I,variantClasses:b}=ut(E),{densityClasses:G}=Pe(e),{dimensionStyles:Ne}=Se(e),{elevationClasses:Re}=Ae(e),{roundedClasses:$e}=pe(B),je=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),W=f(()=>({isActive:y.value,select:r,isSelected:p.value,isIndeterminate:S.value}));function ee(h){var N;s("click",h),!(m||!V.value)&&((N=a.navigate)==null||N.call(a,h),e.value!=null&&r(!p.value,h))}function Ee(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),ee(h))}return F(()=>{const h=g.value?"a":e.tag,N=n.title||e.title,Ue=n.subtitle||e.subtitle,te=!!(e.appendAvatar||e.appendIcon),Ke=!!(te||n.append),ne=!!(e.prependAvatar||e.prependIcon),q=!!(ne||n.prepend);return v==null||v.updateHasPrepend(q),e.activeColor&&et("active-color",["color","base-color"]),ye(d(h,{class:["v-list-item",{"v-list-item--active":y.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!q&&(v==null?void 0:v.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&y.value},U.value,K.value,H.value,G.value,Re.value,je.value,$e.value,b.value,e.class],style:[I.value,Ne.value,e.style],href:a.href.value,tabindex:V.value?v?-2:0:void 0,onClick:ee,onKeydown:V.value&&!g.value&&Ee},{default:()=>{var ae;return[ot(V.value||y.value,"v-list-item"),q&&d("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?d(z,{key:"prepend-defaults",disabled:!ne,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=n.prepend)==null?void 0:k.call(n,W.value)]}}):d(re,null,[e.prependAvatar&&d(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(ue,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[N&&d(Vt,{key:"title"},{default:()=>{var k;return[((k=n.title)==null?void 0:k.call(n,{title:e.title}))??e.title]}}),Ue&&d(kt,{key:"subtitle"},{default:()=>{var k;return[((k=n.subtitle)==null?void 0:k.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ae=n.default)==null?void 0:ae.call(n,W.value)]),Ke&&d("div",{key:"append",class:"v-list-item__append"},[n.append?d(z,{key:"append-defaults",disabled:!te,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=n.append)==null?void 0:k.call(n,W.value)]}}):d(re,null,[e.appendIcon&&d(ue,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[tt("ripple"),V.value&&e.ripple]])}),{}}}),It=A({color:String,inset:Boolean,sticky:Boolean,title:String,...D(),...j()},"VListSubheader"),Pt=x()({name:"VListSubheader",props:It(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=fe(C(e,"color"));return F(()=>{const a=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&d("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),At=A({items:Array},"VListChildren"),De=x()({name:"VListChildren",props:At(),setup(e,l){let{slots:t}=l;return Be(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var c,v;let{children:i,props:r,type:p,raw:S}=a;if(p==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:r}))??d(dt,r,null);if(p==="subheader")return((v=t.subheader)==null?void 0:v.call(t,{props:r}))??d(Pt,r,null);const m={subtitle:t.subtitle?y=>{var g;return(g=t.subtitle)==null?void 0:g.call(t,{...y,item:S})}:void 0,prepend:t.prepend?y=>{var g;return(g=t.prepend)==null?void 0:g.call(t,{...y,item:S})}:void 0,append:t.append?y=>{var g;return(g=t.append)==null?void 0:g.call(t,{...y,item:S})}:void 0,title:t.title?y=>{var g;return(g=t.title)==null?void 0:g.call(t,{...y,item:S})}:void 0},[u,o]=de.filterProps(r);return i?d(de,oe({value:r==null?void 0:r.value},u),{activator:y=>{let{props:g}=y;return t.header?t.header({props:{...r,...g}}):d(ve,oe(r,g),m)},default:()=>d(De,{items:i},t)}):t.item?t.item({props:r}):d(ve,r,m)}))}}}),Lt=A({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:nt}},"list-items");function X(e,l){const t=w(l,e.itemTitle,l),n=w(l,e.itemValue,t),s=w(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?be(l,["children"])[1]:l:void 0:w(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Fe(e,s):void 0,raw:l}}function Fe(e,l){const t=[];for(const n of l)t.push(X(e,n));return t}function Gt(e){const l=f(()=>Fe(e,e.items)),t=f(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?X(e,i):l.value.find(r=>e.valueComparator(i,r.value))||X(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:r}=i;return r}):a.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:n,transformOut:s}}function Bt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ot(e,l){const t=w(l,e.itemType,"item"),n=Bt(l)?l:w(l,e.itemTitle),s=w(l,e.itemValue,void 0),a=w(l,e.itemChildren),i=e.itemProps===!0?be(l,["children"])[1]:w(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?Ge(e,a):void 0,raw:l}}function Ge(e,l){const t=[];for(const n of l)t.push(Ot(e,n));return t}function xt(e){return{items:f(()=>Ge(e,e.items))}}const _t=A({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...ht({selectStrategy:"single-leaf",openStrategy:"list"}),...Ce(),...D(),...ke(),...ge(),...Ve(),itemType:{type:String,default:"type"},...Lt(),...he(),...j(),...Y(),...we({variant:"text"})},"VList"),Nt=x()({name:"VList",props:_t(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=xt(e),{themeClasses:s}=J(e),{backgroundColorClasses:a,backgroundColorStyles:i}=at(C(e,"bgColor")),{borderClasses:r}=Ie(e),{densityClasses:p}=Pe(e),{dimensionStyles:S}=Se(e),{elevationClasses:m}=Ae(e),{roundedClasses:u}=pe(e),{open:o,select:c}=St(e),v=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),y=C(e,"activeColor"),g=C(e,"baseColor"),V=C(e,"color");Be(),lt({VListGroup:{activeColor:y,baseColor:g,color:V},VListItem:{activeClass:C(e,"activeClass"),activeColor:y,baseColor:g,color:V,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),variant:C(e,"variant")}});const B=T(!1),L=P();function E(b){B.value=!0}function U(b){B.value=!1}function K(b){var G;!B.value&&!(b.relatedTarget&&((G=L.value)!=null&&G.contains(b.relatedTarget)))&&I()}function H(b){if(L.value){if(b.key==="ArrowDown")I("next");else if(b.key==="ArrowUp")I("prev");else if(b.key==="Home")I("first");else if(b.key==="End")I("last");else return;b.preventDefault()}}function I(b){if(L.value)return st(L.value,b)}return F(()=>d(e.tag,{ref:L,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,a.value,r.value,p.value,m.value,v.value,u.value,e.class],style:[i.value,S.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:E,onFocusout:U,onFocus:K,onKeydown:H},{default:()=>[d(De,{items:n.value},t)]})),{open:o,select:c,focus:I}}});export{dt as V,Nt as a,ve as b,Vt as c,Lt as m,Gt as u};
