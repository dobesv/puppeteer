"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55485],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||c[d]||l;return r?a.createElement(f,p(p({ref:t},m),{},{components:r})):a.createElement(f,p({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var u=2;u<l;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},13900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={},p="Frame.$eval() method",o={unversionedId:"api/puppeteer.frame._eval",id:"api/puppeteer.frame._eval",title:"Frame.$eval() method",description:"Signature:",source:"@site/../docs/api/puppeteer.frame._eval.md",sourceDirName:"api",slug:"/api/puppeteer.frame._eval",permalink:"/puppeteer/api/puppeteer.frame._eval",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Frame.$$eval() method",permalink:"/puppeteer/api/puppeteer.frame.__eval_1"},next:{title:"Frame.$eval() method",permalink:"/puppeteer/api/puppeteer.frame._eval_1"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frameeval-method"},"Frame.$eval() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"$eval<Selector extends keyof HTMLElementTagNameMap, Params extends unknown[], Func extends EvaluateFunc<[\n        HTMLElementTagNameMap[Selector],\n        ...Params\n    ]> = EvaluateFunc<[HTMLElementTagNameMap[Selector], ...Params]>>(selector: Selector, pageFunction: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"selector"),(0,n.kt)("td",{parentName:"tr",align:null},"Selector"),(0,n.kt)("td",{parentName:"tr",align:null},"the selector to query for")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,n.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,n.kt)("td",{parentName:"tr",align:null},"the function to be evaluated in the frame's context")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"args"),(0,n.kt)("td",{parentName:"tr",align:null},"Params"),(0,n.kt)("td",{parentName:"tr",align:null},"additional arguments to pass to ",(0,n.kt)("code",null,"pageFunction"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This method runs ",(0,n.kt)("inlineCode",{parentName:"p"},"document.querySelector")," within the frame and passes it as the first argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",(0,n.kt)("inlineCode",{parentName:"p"},"frame.$eval")," would wait for the promise to resolve and return its value."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const searchValue = await frame.$eval('#search', el => el.value);\n")))}c.isMDXComponent=!0}}]);