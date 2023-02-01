// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,l=t.__lookupGetter__,i=t.__lookupSetter__;var u=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,u){var c,_,f,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof u||null===u||"[object Array]"===n.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((_="value"in u)&&(l.call(r,e)||i.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=u.value,r.__proto__=c):r[e]=u.value),f="get"in u,p="set"in u,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(r,e,u.get),p&&a&&a.call(r,e,u.set),r};function c(r,e,t){u(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(r,e,t,n,o,a,l,i){var u,c,_,f;if(r<=0)return n;for(u=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,f=0;f<r;f++)void 0!==(_=l.call(i,e[u],f,u,c,e,n))&&(n[c]=a(_)),u+=t,c+=o;return n}function f(r,e,t,n,o,a,l,i,u,c){var _,f,p,d;if(r<=0)return o;for(_=n,f=l,d=0;d<r;d++)void 0!==(p=u.call(c,e[_],d,_,f,e,o))&&(o[f]=i(p)),_+=t,f+=a;return o}c(_,"ndarray",f);var p=Math.sqrt;function d(r,e,t,n,o,a,l){return _(r,e,t,n,o,p,a,l)}function y(r,e,t,n,o,a,l,i,u){return f(r,e,t,n,o,a,l,p,i,u)}c(d,"ndarray",y);export{d as default,y as ndarray};
//# sourceMappingURL=mod.js.map
