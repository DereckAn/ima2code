(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{2860:function(e,s,t){Promise.resolve().then(t.bind(t,7849))},7849:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return i}});var r=t(7437),a=t(2265),o=e=>{let{label:s,type:t,name:a,placeholder:o,onChange:n,error:l}=e;return(0,r.jsxs)("label",{className:"block mb-4",children:[(0,r.jsxs)("span",{className:"text-white",children:[s,":"]}),(0,r.jsx)("input",{className:"text-black mt-1 w-full rounded-md shadow-sm ".concat(l?"border-red-500 bg-red-200":"border-gray-300"),type:t,name:a,placeholder:o,onChange:n})]})},n=e=>{let{setLoggedInUser:s}=e,[t,n]=(0,a.useState)({email:"",pass:"",passConfirm:"",firstName:"",lastName:"",error:null}),l=e=>{n({...t,[e.target.name]:e.target.value})},i=async e=>{if(!t.email||!t.pass||!t.passConfirm||!t.firstName||!t.lastName){n({...t,error:"All fields must be filled out"}),alert("All fields must be filled out");return}if(t.pass!==t.passConfirm){alert("Password and password confirmation do not match");return}let s=JSON.stringify({first_name:t.firstName,last_name:t.lastName,email:t.email,password:t.pass});try{let e=await fetch("http://34.230.221.137/users/",{method:"POST",body:s,headers:{"Content-Type":"application/json"}});if(e.ok)n({email:"",pass:"",passConfirm:"",firstName:"",lastName:"",error:"User created successfully!"}),alert("User created successfully!");else{let s=await e.json();alert("Error: "+s.message)}}catch(e){alert("Error Registering - Check your information and try again")}};return(0,r.jsxs)("form",{className:"p-6 bg-secondary rounded-xl shadow-md ",onSubmit:i,children:[(0,r.jsx)(o,{label:"Firstname",type:"text",name:"firstName",placeholder:"Firstname",error:!t.firstName,onChange:l}),(0,r.jsx)(o,{label:"Lastname",type:"text",name:"lastName",placeholder:"Lastname",onChange:l,error:!t.lastName}),(0,r.jsx)(o,{label:"Email",type:"email",name:"email",placeholder:"email@email.com",error:!t.email,onChange:l}),(0,r.jsx)(o,{label:"Password",type:"password",name:"pass",placeholder:"Password",error:!t.pass||t.pass!==t.passConfirm,onChange:l}),(0,r.jsx)(o,{label:"Confirm Password",type:"password",name:"passConfirm",placeholder:"Confirm Password",error:!t.passConfirm||t.pass!==t.passConfirm,onChange:l}),(0,r.jsx)("input",{className:"w-full px-3 py-2 text-white bg-tertiary  rounded hover:bg-blue-700",type:"submit",value:"Submit"})]})},l=e=>{let{setLoggedInUser:s}=e,[t,n]=(0,a.useState)(""),[l,i]=(0,a.useState)(""),m=!0;return(0,r.jsx)("div",{children:(0,r.jsxs)("form",{className:"p-6 bg-secondary rounded-xl shadow-md",onSubmit:e=>{e.preventDefault();let r="",a=JSON.stringify({email:t,password:l});try{fetch("http://34.230.221.137/login/",{method:"POST",body:a,headers:{"Content-Type":"application/json"}}).then(e=>(e.ok?m=!0:(r="Error: "+e.status,m=!1),e.json())).then(e=>{if(m)window.sessionStorage.setItem("auth","true"),window.sessionStorage.setItem("user_id",e.user_id),window.sessionStorage.setItem("token",e.token),window.sessionStorage.setItem("email",e.email),window.sessionStorage.setItem("first_name",e.first_name),s(e.first_name);else{for(let s in e.errors)for(let t in e.errors[s])r+=e.errors[s][t];console.log(r)}}).catch(e=>{m=!1,console.error(e)}),m?(n(""),i(""),alert("Logged In Successfully!")):alert(r)}catch(e){console.error(e)}},children:[(0,r.jsx)(o,{label:"Email",type:"email",name:"email",placeholder:"email@email.com",onChange:e=>n(e.target.value)}),(0,r.jsx)(o,{label:"Password",type:"password",name:"password",placeholder:"password",onChange:e=>i(e.target.value)}),(0,r.jsx)("input",{className:"w-full px-3 py-2 text-white bg-tertiary rounded hover:bg-blue-700",type:"submit",value:"Submit"})]})})},i=()=>{let[e,s]=(0,a.useState)(!1),[t,o]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=window.sessionStorage.getItem("first_name");e&&o(e)},[]),(0,r.jsx)("section",{className:"flex flex-col items-center justify-center min-h-screen ",children:t?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-5",children:[(0,r.jsxs)("h1",{className:"text-5xl flex flex-col ",children:["Hello!! ",(0,r.jsx)("span",{className:"text-fourth",children:t})," "]}),(0,r.jsx)("button",{onClick:()=>{window.sessionStorage.removeItem("auth"),window.sessionStorage.removeItem("user_id"),window.sessionStorage.removeItem("token"),window.sessionStorage.removeItem("email"),window.sessionStorage.removeItem("first_name"),o(null)},className:"w-full max-w-xl px-3 py-2 text-white bg-tertiary  rounded hover:bg-blue-700",children:"Logout"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"mb-6 text-5xl font-bold",children:e?"Login Page":"Create User Page"}),e?(0,r.jsx)(l,{setLoggedInUser:o}):(0,r.jsx)(n,{setLoggedInUser:o}),(0,r.jsx)("button",{onClick:()=>{s(!e)},className:"p-10",children:e?"Switch to Create User":"Switch to Login"})]})})}},622:function(e,s,t){"use strict";var r=t(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function m(e,s,t){var r,o={},m=null,d=null;for(r in void 0!==t&&(m=""+t),void 0!==s.key&&(m=""+s.key),void 0!==s.ref&&(d=s.ref),s)n.call(s,r)&&!i.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:m,ref:d,props:o,_owner:l.current}}s.Fragment=o,s.jsx=m,s.jsxs=m},7437:function(e,s,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=2860)}),_N_E=e.O()}]);