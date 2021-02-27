/**
 * object-all-values-equal-to
 * Does the AST/nested-plain-object/array/whatever contain only one kind of value?
 * Version: 2.0.6
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/object-all-values-equal-to/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).objectAllValuesEqualTo={})}(this,(function(t){"use strict";function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o,i,u=Object.prototype,a=Function.prototype.toString,c=u.hasOwnProperty,f=a.call(Object),s=u.toString,l=(o=Object.getPrototypeOf,i=Object,function(t){return o(i(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=s.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var r=c.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&a.call(r)==f},h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var _=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,o="[object Arguments]",i="[object Array]",u="[object Boolean]",a="[object Date]",c="[object Error]",f="[object Function]",s="[object Map]",l="[object Number]",p="[object Object]",_="[object Promise]",y="[object RegExp]",b="[object Set]",v="[object String]",d="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",O="[object DataView]",w=/^\[object .+?Constructor\]$/,m=/^(?:0|[1-9]\d*)$/,A={};A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A[o]=A[i]=A[j]=A[u]=A[O]=A[a]=A[c]=A[f]=A[s]=A[l]=A[p]=A[y]=A[b]=A[v]=A[g]=!1;var z="object"==typeof h&&h&&h.Object===Object&&h,P="object"==typeof self&&self&&self.Object===Object&&self,S=z||P||Function("return this")(),T=e&&!e.nodeType&&e,E=T&&t&&!t.nodeType&&t,x=E&&E.exports===T,k=x&&z.process,D=function(){try{return k&&k.binding&&k.binding("util")}catch(t){}}(),F=D&&D.isTypedArray;function I(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function M(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function $(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var q,R=Array.prototype,U=Object.prototype,B=S["__core-js_shared__"],L=Function.prototype.toString,N=U.hasOwnProperty,W=(q=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",C=U.toString,H=RegExp("^"+L.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),V=x?S.Buffer:void 0,G=S.Symbol,J=S.Uint8Array,K=U.propertyIsEnumerable,Q=R.splice,X=G?G.toStringTag:void 0,Y=Object.getOwnPropertySymbols,Z=V?V.isBuffer:void 0,tt=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),et=Et(S,"DataView"),rt=Et(S,"Map"),nt=Et(S,"Promise"),ot=Et(S,"Set"),it=Et(S,"WeakMap"),ut=Et(Object,"create"),at=Ft(et),ct=Ft(rt),ft=Ft(nt),st=Ft(ot),lt=Ft(it),pt=G?G.prototype:void 0,ht=pt?pt.valueOf:void 0;function _t(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function yt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function bt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function vt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new bt;++e<r;)this.add(t[e])}function dt(t){var e=this.__data__=new yt(t);this.size=e.size}function gt(t,e){var r=$t(t),n=!r&&Mt(t),o=!r&&!n&&qt(t),i=!r&&!n&&!o&&Nt(t),u=r||n||o||i,a=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=a.length;for(var f in t)!e&&!N.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Dt(f,c))||a.push(f);return a}function jt(t,e){for(var r=t.length;r--;)if(It(t[r][0],e))return r;return-1}function Ot(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":X&&X in Object(t)?function(t){var e=N.call(t,X),r=t[X];try{t[X]=void 0;var n=!0}catch(t){}var o=C.call(t);n&&(e?t[X]=r:delete t[X]);return o}(t):function(t){return C.call(t)}(t)}function wt(t){return Lt(t)&&Ot(t)==o}function mt(t,e,r,n,f){return t===e||(null==t||null==e||!Lt(t)&&!Lt(e)?t!=t&&e!=e:function(t,e,r,n,f,h){var _=$t(t),g=$t(e),w=_?i:kt(t),m=g?i:kt(e),A=(w=w==o?p:w)==p,z=(m=m==o?p:m)==p,P=w==m;if(P&&qt(t)){if(!qt(e))return!1;_=!0,A=!1}if(P&&!A)return h||(h=new dt),_||Nt(t)?Pt(t,e,r,n,f,h):function(t,e,r,n,o,i,f){switch(r){case O:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j:return!(t.byteLength!=e.byteLength||!i(new J(t),new J(e)));case u:case a:case l:return It(+t,+e);case c:return t.name==e.name&&t.message==e.message;case y:case v:return t==e+"";case s:var p=M;case b:if(p||(p=$),t.size!=e.size&&!(1&n))return!1;var h=f.get(t);if(h)return h==e;n|=2,f.set(t,e);var _=Pt(p(t),p(e),n,o,i,f);return f.delete(t),_;case d:if(ht)return ht.call(t)==ht.call(e)}return!1}(t,e,w,r,n,f,h);if(!(1&r)){var S=A&&N.call(t,"__wrapped__"),T=z&&N.call(e,"__wrapped__");if(S||T){var E=S?t.value():t,x=T?e.value():e;return h||(h=new dt),f(E,x,r,n,h)}}if(!P)return!1;return h||(h=new dt),function(t,e,r,n,o,i){var u=1&r,a=St(t),c=a.length,f=St(e);if(c!=f.length&&!u)return!1;var s=c;for(;s--;){var l=a[s];if(!(u?l in e:N.call(e,l)))return!1}var p=i.get(t);if(p&&i.get(e))return p==e;var h=!0;i.set(t,e),i.set(e,t);var _=u;for(;++s<c;){var y=t[l=a[s]],b=e[l];if(n)var v=u?n(b,y,l,e,t,i):n(y,b,l,t,e,i);if(!(void 0===v?y===b||o(y,b,r,n,i):v)){h=!1;break}_||(_="constructor"==l)}if(h&&!_){var d=t.constructor,g=e.constructor;d==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof d&&d instanceof d&&"function"==typeof g&&g instanceof g||(h=!1)}return i.delete(t),i.delete(e),h}(t,e,r,n,f,h)}(t,e,r,n,mt,f))}function At(t){return!(!Bt(t)||function(t){return!!W&&W in t}(t))&&(Rt(t)?H:w).test(Ft(t))}function zt(t){if((e=t)!==("function"==typeof(r=e&&e.constructor)&&r.prototype||U))return tt(t);var e,r,n=[];for(var o in Object(t))N.call(t,o)&&"constructor"!=o&&n.push(o);return n}function Pt(t,e,r,n,o,i){var u=1&r,a=t.length,c=e.length;if(a!=c&&!(u&&c>a))return!1;var f=i.get(t);if(f&&i.get(e))return f==e;var s=-1,l=!0,p=2&r?new vt:void 0;for(i.set(t,e),i.set(e,t);++s<a;){var h=t[s],_=e[s];if(n)var y=u?n(_,h,s,e,t,i):n(h,_,s,t,e,i);if(void 0!==y){if(y)continue;l=!1;break}if(p){if(!I(e,(function(t,e){if(!p.has(e)&&(h===t||o(h,t,r,n,i)))return p.push(e)}))){l=!1;break}}else if(h!==_&&!o(h,_,r,n,i)){l=!1;break}}return i.delete(t),i.delete(e),l}function St(t){return function(t,e,r){var n=e(t);return $t(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Wt,xt)}function Tt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Et(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return At(r)?r:void 0}_t.prototype.clear=function(){this.__data__=ut?ut(null):{},this.size=0},_t.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},_t.prototype.get=function(t){var e=this.__data__;if(ut){var n=e[t];return n===r?void 0:n}return N.call(e,t)?e[t]:void 0},_t.prototype.has=function(t){var e=this.__data__;return ut?void 0!==e[t]:N.call(e,t)},_t.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ut&&void 0===e?r:e,this},yt.prototype.clear=function(){this.__data__=[],this.size=0},yt.prototype.delete=function(t){var e=this.__data__,r=jt(e,t);return!(r<0)&&(r==e.length-1?e.pop():Q.call(e,r,1),--this.size,!0)},yt.prototype.get=function(t){var e=this.__data__,r=jt(e,t);return r<0?void 0:e[r][1]},yt.prototype.has=function(t){return jt(this.__data__,t)>-1},yt.prototype.set=function(t,e){var r=this.__data__,n=jt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},bt.prototype.clear=function(){this.size=0,this.__data__={hash:new _t,map:new(rt||yt),string:new _t}},bt.prototype.delete=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},bt.prototype.get=function(t){return Tt(this,t).get(t)},bt.prototype.has=function(t){return Tt(this,t).has(t)},bt.prototype.set=function(t,e){var r=Tt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},vt.prototype.add=vt.prototype.push=function(t){return this.__data__.set(t,r),this},vt.prototype.has=function(t){return this.__data__.has(t)},dt.prototype.clear=function(){this.__data__=new yt,this.size=0},dt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},dt.prototype.get=function(t){return this.__data__.get(t)},dt.prototype.has=function(t){return this.__data__.has(t)},dt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof yt){var n=r.__data__;if(!rt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new bt(n)}return r.set(t,e),this.size=r.size,this};var xt=Y?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i}(Y(t),(function(e){return K.call(t,e)})))}:function(){return[]},kt=Ot;function Dt(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||m.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function It(t,e){return t===e||t!=t&&e!=e}(et&&kt(new et(new ArrayBuffer(1)))!=O||rt&&kt(new rt)!=s||nt&&kt(nt.resolve())!=_||ot&&kt(new ot)!=b||it&&kt(new it)!=g)&&(kt=function(t){var e=Ot(t),r=e==p?t.constructor:void 0,n=r?Ft(r):"";if(n)switch(n){case at:return O;case ct:return s;case ft:return _;case st:return b;case lt:return g}return e});var Mt=wt(function(){return arguments}())?wt:function(t){return Lt(t)&&N.call(t,"callee")&&!K.call(t,"callee")},$t=Array.isArray;var qt=Z||function(){return!1};function Rt(t){if(!Bt(t))return!1;var e=Ot(t);return e==f||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Ut(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}function Bt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Lt(t){return null!=t&&"object"==typeof t}var Nt=F?function(t){return function(e){return t(e)}}(F):function(t){return Lt(t)&&Ut(t.length)&&!!A[Ot(t)]};function Wt(t){return null!=(e=t)&&Ut(e.length)&&!Rt(e)?gt(t):zt(t);var e}t.exports=function(t,e){return mt(t,e)}}));function y(t,e,r){if(Array.isArray(t)){if(0===t.length)return!0;if(r.arraysMustNotContainPlaceholders&&t.length>0&&t.some((function(t){return _(t,e)})))return!1;for(var n=t.length;n--;)if(!y(t[n],e,r))return!1;return!0}if(p(t)){var o=Object.keys(t);if(0===o.length)return!0;for(var i=o.length;i--;)if(!y(t[o[i]],e,r))return!1;return!0}return _(t,e)}t.allEq=function(t,e,r){if(void 0===t)throw new Error("object-all-values-equal-to: [THROW_ID_01] The first input is undefined! Please provide the first argument.");if(void 0===e)throw new Error("object-all-values-equal-to: [THROW_ID_02] The second input is undefined! Please provide the second argument.");if(r&&!p(r))throw new Error("object-all-values-equal-to: [THROW_ID_03] The third argument, options object, was given not as a plain object but as a "+typeof r+", equal to:\n"+JSON.stringify(r,null,4));return y(t,e,n(n({},{arraysMustNotContainPlaceholders:!0}),r))},t.version="2.0.6",Object.defineProperty(t,"__esModule",{value:!0})}));
