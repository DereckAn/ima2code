(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{431:function(e,t,r){Promise.resolve().then(r.bind(r,8879))},8879:function(e,t,r){"use strict";r.r(t);var s=r(7437),a=r(2265);t.default=()=>{let[e,t]=(0,a.useState)(null),r=async()=>{try{let e=await fetch("http://34.230.221.137/users/"),r=await e.json();t(r.users)}catch(e){console.error("Error al obtener los datos:",e)}};return(0,a.useEffect)(()=>{r()},[]),(0,s.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,s.jsx)("thead",{className:"bg-secondary",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider",children:"User ID"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider",children:"First Name"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider",children:"Last Name"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider",children:"Email"}),(0,s.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider",children:"Password"})]})}),(0,s.jsx)("tbody",{className:"bg-tertiary divide-y divide-gray-200",children:null==e?void 0:e.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-6 whitespace-nowrap",children:(null==e?void 0:e.user_id)||"-----"}),(0,s.jsx)("td",{className:"px-6 whitespace-nowrap",children:(null==e?void 0:e.first_name)||"-----"}),(0,s.jsx)("td",{className:"px-6 whitespace-nowrap",children:(null==e?void 0:e.last_name)||"-----"}),(0,s.jsx)("td",{className:"px-6 whitespace-nowrap",children:(null==e?void 0:e.email)||"-----"}),(0,s.jsx)("td",{className:"px-6 whitespace-nowrap",children:(null==e?void 0:e.password)||"-----"})]},null==e?void 0:e.user_id))})]})}},622:function(e,t,r){"use strict";var s=r(2265),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var s,n={},d=null,o=null;for(s in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(o=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:a,type:e,key:d,ref:o,props:n,_owner:l.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=431)}),_N_E=e.O()}]);