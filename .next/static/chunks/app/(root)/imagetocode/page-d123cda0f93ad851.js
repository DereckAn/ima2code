(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[211],{1797:function(e,r,n){Promise.resolve().then(n.bind(n,5009))},5009:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return R}});var l=n(7437),t=n(1845),o=n(2265);let i=e=>{let{transformImage2Code:r}=e,[n,i]=(0,o.useState)([]);return(0,l.jsx)(t.fh,{accept:"image/*",label:"Drag and Drop you IMAGES",onDrop:console.log,onChange:e=>{let n=e[0].file;null!=n&&r(n),console.log(e),i(e)},header:!1,footer:!1,multiple:!1,maxFiles:1,children:n.map((e,r)=>(0,l.jsx)(t.Q$,{...e,preview:!0},r))})};function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}let s=(0,o.forwardRef)((e,r)=>{let{children:n,...l}=e,t=o.Children.toArray(n),i=t.find(c);if(i){let e=i.props.children,n=t.map(r=>r!==i?r:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(d,a({},l,{ref:r}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,n):null)}return(0,o.createElement)(d,a({},l,{ref:r}),n)});s.displayName="Slot";let d=(0,o.forwardRef)((e,r)=>{let{children:n,...l}=e;return(0,o.isValidElement)(n)?(0,o.cloneElement)(n,{...function(e,r){let n={...r};for(let l in r){let t=e[l],o=r[l],i=/^on[A-Z]/.test(l);i?t&&o?n[l]=(...e)=>{o(...e),t(...e)}:t&&(n[l]=t):"style"===l?n[l]={...t,...o}:"className"===l&&(n[l]=[t,o].filter(Boolean).join(" "))}return{...e,...n}}(l,n.props),ref:r?function(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}(r,n.ref):n.ref}):o.Children.count(n)>1?o.Children.only(null):null});d.displayName="SlotClone";let u=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function c(e){return(0,o.isValidElement)(e)&&e.type===u}var f=n(7042);let m=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,p=f.W,v=(e,r)=>n=>{var l;if((null==r?void 0:r.variants)==null)return p(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:t,defaultVariants:o}=r,i=Object.keys(t).map(e=>{let r=null==n?void 0:n[e],l=null==o?void 0:o[e];if(null===r)return null;let i=m(r)||m(l);return t[e][i]}),a=n&&Object.entries(n).reduce((e,r)=>{let[n,l]=r;return void 0===l||(e[n]=l),e},{}),s=null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:n,className:l,...t}=r;return Object.entries(t).every(e=>{let[r,n]=e;return Array.isArray(n)?n.includes({...o,...a}[r]):({...o,...a})[r]===n})?[...e,n,l]:e},[]);return p(e,i,s,null==n?void 0:n.class,null==n?void 0:n.className)};var h=n(1628);let g=v("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),x=o.forwardRef((e,r)=>{let{className:n,variant:t,size:o,asChild:i=!1,...a}=e,d=i?s:"button";return(0,l.jsx)(d,{className:(0,h.cn)(g({variant:t,size:o,className:n})),ref:r,...a})});x.displayName="Button";let b=o.forwardRef((e,r)=>{let{className:n,type:t,...o}=e;return(0,l.jsx)("input",{type:t,className:(0,h.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:r,...o})});b.displayName="Input",n(4887);let y=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let Node=(0,o.forwardRef)((e,n)=>{let{asChild:l,...t}=e,i=l?s:r;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(i,a({},t,{ref:n}))});return Node.displayName=`Primitive.${r}`,{...e,[r]:Node}},{}),C=(0,o.forwardRef)((e,r)=>(0,o.createElement)(y.label,a({},e,{ref:r,onMouseDown:r=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault()}}))),w=v("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),N=o.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,l.jsx)(C,{ref:r,className:(0,h.cn)(w(),n),...t})});N.displayName=C.displayName;var j=e=>{let{transformUrl2Code:r}=e;return(0,l.jsxs)("form",{className:"flex flex-col gap-4",onSubmit:e=>{e.preventDefault();let n=e.currentTarget,l=n.elements.namedItem("url");r(l.value)},children:[(0,l.jsx)(N,{htmlFor:"url",children:" Introduce tu URL de la imagen "}),(0,l.jsx)(b,{name:"url",id:"url",type:"text",placeholder:"https://miimagen.com"}),(0,l.jsx)(x,{children:" Convertir "})]})};let E={INITIAL:"INITIAL",LOADING:"LOADING",SUCCESS:"SUCCESS",ERROR:"ERROR"},S=e=>new Promise((r,n)=>{let l=new FileReader;l.readAsDataURL(e),l.onload=()=>r(l.result),l.onerror=e=>n(e)});async function*I(e){var r;let n=null===(r=e.body)||void 0===r?void 0:r.getReader(),l=new TextDecoder("utf-8");if(null!=n)for(;;){let{done:e,value:r}=await n.read(),t=l.decode(r);if(yield t,console.log(t),e)break;console.log(l.decode(r))}}function R(){let[e,r]=(0,o.useState)(""),[n,t]=(0,o.useState)(E.INITIAL),a=async e=>{t(E.LOADING);let n=await fetch("/api/generate-code",{method:"POST",body:e,headers:{"Content-Type":"application/json"}});if(!n.ok||null==n.body)throw t(E.ERROR),Error("Error al generar el codigo");for await(let e of(t(E.SUCCESS),I(n)))r(r=>r+e)},s=async e=>{let r=await S(e);await a(JSON.stringify({imag:r}))},d=async e=>{await a(JSON.stringify({url:e}))};return(0,l.jsx)("main",{className:"h-screen flex justify-center items-center",children:(0,l.jsxs)("section",{className:"max-w-5xl w-full mx-auto p-10 ",children:[n===E.LOADING&&(0,l.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,l.jsxs)("output",{children:[(0,l.jsxs)("svg",{"aria-hidden":"true",className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,l.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,l.jsx)("span",{className:"sr-only",children:"Loading..."})]})}),n===E.INITIAL&&(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)(i,{transformImage2Code:s}),(0,l.jsx)(j,{transformUrl2Code:d})]}),n===E.SUCCESS&&(0,l.jsxs)("div",{className:"rounded flex flex-col gap-4 ",children:[(0,l.jsx)("div",{children:(0,l.jsx)("iframe",{title:"My Unique Title",srcDoc:e,className:"w-full h-full border-4 rounded border-gray-700 aspect-video"})}),(0,l.jsx)("pre",{className:"",children:(0,l.jsx)("code",{children:e})})]})]})})}},1628:function(e,r,n){"use strict";n.d(r,{cn:function(){return o}});var l=n(7042),t=n(4769);function o(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,t.m6)((0,l.W)(r))}}},function(e){e.O(0,[219,895,971,472,744],function(){return e(e.s=1797)}),_N_E=e.O()}]);