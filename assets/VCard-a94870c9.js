import{g as b,m as f,k as w,u as y,c as n,p as A,R as u,as as H,b0 as N,a_ as Q,b as z,ao as G,a as J,d as K,h as U,at as W,b1 as X,a$ as Y,f as Z,aq as ee,j as I,P as ae,Q as te,b2 as ne}from"./index-80be9044.js";import{c as p,a as h,V as de}from"./VAvatar-a55e69c4.js";import{c as P,V as k,m as ie,a as se,d as le,R as ce,u as re,f as ue,e as oe,b as ve,g as me}from"./index-4dbf2435.js";import{m as ge,u as ke}from"./position-ba23dede.js";const be=b()({name:"VCardActions",props:f(),setup(e,i){let{slots:t}=i;return w({VBtn:{variant:"text"}}),y(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=p("v-card-subtitle"),ye=p("v-card-title"),pe=A({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...f(),...P()},"VCardItem"),Ce=b()({name:"VCardItem",props:pe(),setup(e,i){let{slots:t}=i;return y(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),v=!!(s||t.append),m=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(h,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(ye,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),g&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(h,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ve=p("v-card-text"),Ie=A({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...ie(),...f(),...P(),...H(),...se(),...N(),...Q(),...ge(),...z(),...G(),...J(),...K(),...le({variant:"elevated"})},"VCard"),xe=b()({name:"VCard",directives:{Ripple:ce},props:Ie(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:o}=U(e),{borderClasses:s}=re(e),{colorClasses:v,colorStyles:m,variantClasses:g}=ue(e),{densityClasses:l}=oe(e),{dimensionStyles:d}=W(e),{elevationClasses:S}=ve(e),{loaderClasses:x}=X(e),{locationStyles:T}=Y(e),{positionClasses:_}=ke(e),{roundedClasses:B}=Z(e),c=ee(e,t),D=I(()=>e.link!==!1&&c.isLink.value),r=I(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return y(()=>{const L=D.value?"a":e.tag,R=!!(a.title||e.title),j=!!(a.subtitle||e.subtitle),E=R||j,F=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),O=!!(a.image||e.image),$=E||M||F,q=!!(a.text||e.text);return ae(n(L,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},o.value,s.value,v.value,l.value,S.value,x.value,_.value,B.value,g.value,e.class],style:[m.value,d.value,T.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[O&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(de,{key:"image-img",cover:!0,src:e.image},null)]),n(ne,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),$&&n(Ce,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(Ve,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(be,null,{default:a.actions}),me(r.value,"v-card")]}}),[[te("ripple"),r.value&&e.ripple]])}),{}}});export{xe as V,Ve as a,ye as b,be as c,fe as d};
