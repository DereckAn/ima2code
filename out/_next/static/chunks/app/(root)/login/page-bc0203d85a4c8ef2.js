(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{2601:function(e,r,t){"use strict";var n,s;e.exports=(null==(n=t.g.process)?void 0:n.env)&&"object"==typeof(null==(s=t.g.process)?void 0:s.env)?t.g.process:t(8960)},2860:function(e,r,t){Promise.resolve().then(t.bind(t,7849))},7849:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(7437),s=t(2265),o=e=>{let{label:r,type:t,name:s,placeholder:o,onChange:a,error:i}=e;return(0,n.jsxs)("label",{className:"block mb-4",children:[(0,n.jsxs)("span",{className:"text-white",children:[r,":"]}),(0,n.jsx)("input",{className:"mt-1 w-full rounded-md shadow-sm ".concat(i?"border-red-500":"border-gray-300"),type:t,name:s,placeholder:o,onChange:a})]})},a=()=>{let[e,r]=(0,s.useState)({email:"",pass:"",passConfirm:"",firstName:"",lastName:"",error:null}),[t,a]=(0,s.useState)(!1),i=t=>{r({...e,[t.target.name]:t.target.value})},l=async t=>{if(t.preventDefault(),a(!0),r({...e,error:null}),!e.email||!e.pass||!e.passConfirm||!e.firstName||!e.lastName){r({...e,error:"All fields must be filled out"});return}if(e.pass!==e.passConfirm){r({...e,error:"Password and password confirmation do not match"});return}let n=JSON.stringify({first_name:e.firstName,last_name:e.lastName,email:e.email,password:e.pass});try{let t=await fetch("http://localhost:8000/users/",{method:"POST",body:n,headers:{"Content-Type":"application/json"}});if(t.ok)r({email:"",pass:"",passConfirm:"",firstName:"",lastName:"",error:"Registered Successfully!"});else{let n=await t.json(),s=Object.values(n.errors).flat().join(" ");r({...e,error:s})}}catch(t){r({...e,error:"Error Registering - Check your information and try again"})}};return(0,n.jsxs)("form",{className:"p-6 bg-secondary rounded-xl shadow-md ",onSubmit:l,children:[(0,n.jsx)(o,{label:"Firstname",type:"text",name:"firstName",placeholder:"Firstname",error:t&&!e.firstName,onChange:i}),(0,n.jsx)(o,{label:"Lastname",type:"text",name:"lastName",placeholder:"Lastname",onChange:i,error:t&&!e.firstName}),(0,n.jsx)(o,{label:"Email",type:"email",name:"email",placeholder:"email@email.com",error:t&&!e.firstName,onChange:i}),(0,n.jsx)(o,{label:"Password",type:"password",name:"pass",placeholder:"Password",error:t&&!e.firstName,onChange:i}),(0,n.jsx)(o,{label:"Confirm Password",type:"password",name:"passConfirm",placeholder:"Confirm Password",error:t&&!e.firstName,onChange:i}),(0,n.jsx)("input",{className:"w-full px-3 py-2 text-white bg-tertiary  rounded hover:bg-blue-700",type:"submit",value:"Submit"})]})},i=()=>{let[e,r]=(0,s.useState)(""),[t,a]=(0,s.useState)(""),[i,l]=(0,s.useState)(null),[u,c]=(0,s.useState)(!1);return(0,n.jsxs)("form",{className:"p-6 bg-secondary rounded-xl shadow-md",onSubmit:n=>{n.preventDefault(),c(!0),l(null);let s=!0,o="",i=JSON.stringify({email:e,password:t});try{fetch("http://localhost:8000/login/",{method:"POST",body:i,headers:{"Content-Type":"application/json"}}).then(e=>(e.ok?s=!0:(o="Error: "+e.status+" - ",s=!1),e.json())).then(e=>{if(s)e.success&&(window.sessionStorage.setItem("auth","true"),window.sessionStorage.setItem("user_id",e.user_id),window.sessionStorage.setItem("token",e.token));else{for(let r in e.errors)for(let t in e.errors[r])o+=e.errors[r][t];console.log(o),l(o)}}).catch(e=>{s=!1,console.error(e)}),s?(r(""),a(""),l("Logged In Successfully!")):l(o)}catch(e){console.error(e),l("Error Registering - Check your information and try again")}},children:[(0,n.jsx)(o,{label:"Email",type:"email",name:"email",placeholder:"email@email.com",onChange:e=>r(e.target.value)}),(0,n.jsx)(o,{label:"Password",type:"password",name:"password",placeholder:"password",onChange:e=>a(e.target.value)}),(0,n.jsx)("input",{className:"w-full px-3 py-2 text-white bg-tertiary rounded hover:bg-blue-700",type:"submit",value:"Submit"})]})},l=t(2601),u=()=>{let[e,r]=(0,s.useState)(!1),t=async()=>{try{let e=await fetch(l.env.REACT_APP_API_URL_BASE+"/users"),r=await e.json();return console.log(r),{props:{userData:r}}}catch(e){return console.error("Error al obtener los datos:",e),{props:{userData:null}}}};return(0,n.jsxs)("section",{className:"flex flex-col items-center justify-center min-h-screen ",children:[(0,n.jsx)("h1",{className:"mb-6 text-5xl font-bold",children:e?"Login Page":"Create User Page"}),e?(0,n.jsx)(i,{}):(0,n.jsx)(a,{}),(0,n.jsx)("button",{onClick:()=>{r(!e)},className:"p-10",children:e?"Switch to Create User":"Switch to Login"}),(0,n.jsx)("button",{className:"p-10",onClick:t,children:"Fetch Data"})]})}},8960:function(e){!function(){var r={229:function(e){var r,t,n,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function i(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{t="function"==typeof clearTimeout?clearTimeout:a}catch(e){t=a}}();var l=[],u=!1,c=-1;function m(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&f())}function f(){if(!u){var e=i(m);u=!0;for(var r=l.length;r;){for(n=l,l=[];++c<r;)n&&n[c].run();c=-1,r=l.length}n=null,u=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===a||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function p(e,r){this.fun=e,this.array=r}function d(){}s.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];l.push(new p(e,r)),1!==l.length||u||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=d,s.addListener=d,s.once=d,s.off=d,s.removeListener=d,s.removeAllListeners=d,s.emit=d,s.prependListener=d,s.prependOnceListener=d,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},t={};function n(e){var s=t[e];if(void 0!==s)return s.exports;var o=t[e]={exports:{}},a=!0;try{r[e](o,o.exports,n),a=!1}finally{a&&delete t[e]}return o.exports}n.ab="//";var s=n(229);e.exports=s}()},622:function(e,r,t){"use strict";var n=t(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,o={},u=null,c=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:u,ref:c,props:o,_owner:i.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},7437:function(e,r,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=2860)}),_N_E=e.O()}]);