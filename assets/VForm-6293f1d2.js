import{p,m as v,g as b,r as F,u as V,c as y}from"./index-80be9044.js";import{d as h,e as R}from"./VTextField-2b3ade1b.js";import{f as P}from"./forwardRefs-e2994a01.js";const k=p({...v(),...h()},"VForm"),S=b()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=R(r),s=F();function u(t){t.preventDefault(),a.reset()}function l(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return V(()=>{var t;return y("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),P(a,s)}});export{S as V};