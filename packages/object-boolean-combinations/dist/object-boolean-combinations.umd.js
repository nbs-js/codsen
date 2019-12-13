/**
 * object-boolean-combinations
 * Generate an array full of object copies, each containing a unique Boolean value combination. Includes overrides.
 * Version: 2.11.50
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-boolean-combinations
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).objectBooleanCombinations=r()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r="__lodash_hash_undefined__",n=9007199254740991,e="[object Function]",o="[object GeneratorFunction]",u=/^\[object .+?Constructor\]$/,c="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,i=c||a||Function("return this")();function f(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function s(t,r){return!!(t?t.length:0)&&function(t,r,n){if(r!=r)return function(t,r,n,e){var o=t.length,u=n+(e?1:-1);for(;e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,p,n);var e=n-1,o=t.length;for(;++e<o;)if(t[e]===r)return e;return-1}(t,r,0)>-1}function l(t,r,n){for(var e=-1,o=t?t.length:0;++e<o;)if(n(r,t[e]))return!0;return!1}function h(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}function p(t){return t!=t}function _(t){return function(r){return t(r)}}function y(t,r){return t.has(r)}var v,d,b,g=Array.prototype,j=Function.prototype,w=Object.prototype,O=i["__core-js_shared__"],m=(v=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+v:"",A=j.toString,x=w.hasOwnProperty,S=w.toString,E=RegExp("^"+A.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),k=g.splice,$=Math.max,P=Math.min,F=H(i,"Map"),I=H(Object,"create");function M(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function T(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function R(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function W(t){var r=-1,n=t?t.length:0;for(this.__data__=new R;++r<n;)this.add(t[r])}function B(t,r){for(var n,e,o=t.length;o--;)if((n=t[o][0])===(e=r)||n!=n&&e!=e)return o;return-1}function D(t){return!(!G(t)||(r=t,m&&m in r))&&(z(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?E:u).test(function(t){if(null!=t){try{return A.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r}function U(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!z(t)}(t)}(t)?t:[]}function C(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function H(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return D(n)?n:void 0}function z(t){var r=G(t)?S.call(t):"";return r==e||r==o}function G(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}M.prototype.clear=function(){this.__data__=I?I(null):{}},M.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},M.prototype.get=function(t){var n=this.__data__;if(I){var e=n[t];return e===r?void 0:e}return x.call(n,t)?n[t]:void 0},M.prototype.has=function(t){var r=this.__data__;return I?void 0!==r[t]:x.call(r,t)},M.prototype.set=function(t,n){return this.__data__[t]=I&&void 0===n?r:n,this},T.prototype.clear=function(){this.__data__=[]},T.prototype.delete=function(t){var r=this.__data__,n=B(r,t);return!(n<0)&&(n==r.length-1?r.pop():k.call(r,n,1),!0)},T.prototype.get=function(t){var r=this.__data__,n=B(r,t);return n<0?void 0:r[n][1]},T.prototype.has=function(t){return B(this.__data__,t)>-1},T.prototype.set=function(t,r){var n=this.__data__,e=B(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},R.prototype.clear=function(){this.__data__={hash:new M,map:new(F||T),string:new M}},R.prototype.delete=function(t){return C(this,t).delete(t)},R.prototype.get=function(t){return C(this,t).get(t)},R.prototype.has=function(t){return C(this,t).has(t)},R.prototype.set=function(t,r){return C(this,t).set(t,r),this},W.prototype.add=W.prototype.push=function(t){return this.__data__.set(t,r),this},W.prototype.has=function(t){return this.__data__.has(t)};var L=(d=function(t){var r=h(t,U);return r.length&&r[0]===t[0]?function(t,r,n){for(var e=n?l:s,o=t[0].length,u=t.length,c=u,a=Array(u),i=1/0,f=[];c--;){var p=t[c];c&&r&&(p=h(p,_(r))),i=P(p.length,i),a[c]=!n&&(r||o>=120&&p.length>=120)?new W(c&&p):void 0}p=t[0];var v=-1,d=a[0];t:for(;++v<o&&f.length<i;){var b=p[v],g=r?r(b):b;if(b=n||0!==b?b:0,!(d?y(d,g):e(f,g,n))){for(c=u;--c;){var j=a[c];if(!(j?y(j,g):e(t[c],g,n)))continue t}d&&d.push(g),f.push(b)}}return f}(r):[]},b=$(void 0===b?d.length-1:b,0),function(){for(var t=arguments,r=-1,n=$(t.length-b,0),e=Array(n);++r<n;)e[r]=t[b+r];r=-1;for(var o=Array(b+1);++r<b;)o[r]=t[r];return o[b]=e,f(d,this,o)});function V(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function N(t,r,n){if(r!=r)return function(t,r,n,e){for(var o=t.length,u=n+(e?1:-1);e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,J,n);for(var e=n-1,o=t.length;++e<o;)if(t[e]===r)return e;return-1}function q(t,r,n,e){for(var o=n-1,u=t.length;++o<u;)if(e(t[o],r))return o;return-1}function J(t){return t!=t}var K=Array.prototype.splice,Q=Math.max;function X(t,r,n,e){var o=e?q:N,u=-1,c=r.length,a=t;for(t===r&&(r=function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(r)),n&&(a=function(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}(t,function(t){return function(r){return t(r)}}(n)));++u<c;)for(var i=0,f=r[u],s=n?n(f):f;(i=o(a,s,i,e))>-1;)a!==t&&K.call(a,i,1),K.call(t,i,1);return t}var Y=function(t,r){return r=Q(void 0===r?t.length-1:r,0),function(){for(var n=arguments,e=-1,o=Q(n.length-r,0),u=Array(o);++e<o;)u[e]=n[r+e];e=-1;for(var c=Array(r+1);++e<r;)c[e]=n[e];return c[r]=u,V(t,this,c)}}((function(t,r){return t&&t.length&&r&&r.length?X(t,r):t})),Z="[object Object]";var tt=Function.prototype,rt=Object.prototype,nt=tt.toString,et=rt.hasOwnProperty,ot=nt.call(Object),ut=rt.toString,ct=function(t,r){return function(n){return t(r(n))}}(Object.getPrototypeOf,Object);var at=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||ut.call(t)!=Z||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=ct(t);if(null===r)return!0;var n=et.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&nt.call(n)==ot},it=function(t,r){return t(r={exports:{}},r.exports),r.exports}((function(r,n){var e=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",a="[object Boolean]",i="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",_="[object RegExp]",y="[object Set]",v="[object String]",d="[object Symbol]",b="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",m="[object Int16Array]",A="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",E="[object Uint16Array]",k="[object Uint32Array]",$=/\w*$/,P=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[b]=I[g]=I[a]=I[i]=I[j]=I[w]=I[O]=I[m]=I[A]=I[l]=I[h]=I[p]=I[_]=I[y]=I[v]=I[d]=I[x]=I[S]=I[E]=I[k]=!0,I["[object Error]"]=I[f]=I["[object WeakMap]"]=!1;var M="object"==typeof t&&t&&t.Object===Object&&t,T="object"==typeof self&&self&&self.Object===Object&&self,R=M||T||Function("return this")(),W=n&&!n.nodeType&&n,B=W&&r&&!r.nodeType&&r,D=B&&B.exports===W;function U(t,r){return t.set(r[0],r[1]),t}function C(t,r){return t.add(r),t}function H(t,r,n,e){var o=-1,u=t?t.length:0;for(e&&u&&(n=t[++o]);++o<u;)n=r(n,t[o],o,t);return n}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function G(t){var r=-1,n=Array(t.size);return t.forEach((function(t,e){n[++r]=[e,t]})),n}function L(t,r){return function(n){return t(r(n))}}function V(t){var r=-1,n=Array(t.size);return t.forEach((function(t){n[++r]=t})),n}var N=Array.prototype,q=Function.prototype,J=Object.prototype,K=R["__core-js_shared__"],Q=function(){var t=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),X=q.toString,Y=J.hasOwnProperty,Z=J.toString,tt=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?R.Buffer:void 0,nt=R.Symbol,et=R.Uint8Array,ot=L(Object.getPrototypeOf,Object),ut=Object.create,ct=J.propertyIsEnumerable,at=N.splice,it=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,st=L(Object.keys,Object),lt=Wt(R,"DataView"),ht=Wt(R,"Map"),pt=Wt(R,"Promise"),_t=Wt(R,"Set"),yt=Wt(R,"WeakMap"),vt=Wt(Object,"create"),dt=Ht(lt),bt=Ht(ht),gt=Ht(pt),jt=Ht(_t),wt=Ht(yt),Ot=nt?nt.prototype:void 0,mt=Ot?Ot.valueOf:void 0;function At(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function xt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function St(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Et(t){this.__data__=new xt(t)}function kt(t,r){var n=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Lt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||Z.call(t)==c)}(t)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(t.length,String):[],e=n.length,o=!!e;for(var u in t)!r&&!Y.call(t,u)||o&&("length"==u||Ut(u,e))||n.push(u);return n}function $t(t,r,n){var e=t[r];Y.call(t,r)&&zt(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function Pt(t,r){for(var n=t.length;n--;)if(zt(t[n][0],r))return n;return-1}function Ft(t,r,n,e,o,u,P){var F;if(e&&(F=u?e(t,o,u,P):e(t)),void 0!==F)return F;if(!qt(t))return t;var M=Gt(t);if(M){if(F=function(t){var r=t.length,n=t.constructor(r);r&&"string"==typeof t[0]&&Y.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!r)return function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(t,F)}else{var T=Dt(t),R=T==f||T==s;if(Vt(t))return function(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,r);if(T==p||T==c||R&&!u){if(z(t))return u?t:{};if(F=function(t){return"function"!=typeof t.constructor||Ct(t)?{}:(r=ot(t),qt(r)?ut(r):{});var r}(R?{}:t),!r)return function(t,r){return Tt(t,Bt(t),r)}(t,function(t,r){return t&&Tt(r,Jt(r),t)}(F,t))}else{if(!I[T])return u?t:{};F=function(t,r,n,e){var o=t.constructor;switch(r){case b:return Mt(t);case a:case i:return new o(+t);case g:return function(t,r){var n=r?Mt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,e);case j:case w:case O:case m:case A:case x:case S:case E:case k:return function(t,r){var n=r?Mt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,e);case l:return function(t,r,n){return H(r?n(G(t),!0):G(t),U,new t.constructor)}(t,e,n);case h:case v:return new o(t);case _:return function(t){var r=new t.constructor(t.source,$.exec(t));return r.lastIndex=t.lastIndex,r}(t);case y:return function(t,r,n){return H(r?n(V(t),!0):V(t),C,new t.constructor)}(t,e,n);case d:return u=t,mt?Object(mt.call(u)):{}}var u}(t,T,Ft,r)}}P||(P=new Et);var W=P.get(t);if(W)return W;if(P.set(t,F),!M)var B=n?function(t){return function(t,r,n){var e=r(t);return Gt(t)?e:function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}(e,n(t))}(t,Jt,Bt)}(t):Jt(t);return function(t,r){for(var n=-1,e=t?t.length:0;++n<e&&!1!==r(t[n],n,t););}(B||t,(function(o,u){B&&(o=t[u=o]),$t(F,u,Ft(o,r,n,e,u,t,P))})),F}function It(t){return!(!qt(t)||function(t){return!!Q&&Q in t}(t))&&(Nt(t)||z(t)?tt:P).test(Ht(t))}function Mt(t){var r=new t.constructor(t.byteLength);return new et(r).set(new et(t)),r}function Tt(t,r,n,e){n||(n={});for(var o=-1,u=r.length;++o<u;){var c=r[o],a=e?e(n[c],t[c],c,n,t):void 0;$t(n,c,void 0===a?t[c]:a)}return n}function Rt(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function Wt(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return It(n)?n:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var r=this.__data__;if(vt){var n=r[t];return n===o?void 0:n}return Y.call(r,t)?r[t]:void 0},At.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Y.call(r,t)},At.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?o:r,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var r=this.__data__,n=Pt(r,t);return!(n<0)&&(n==r.length-1?r.pop():at.call(r,n,1),!0)},xt.prototype.get=function(t){var r=this.__data__,n=Pt(r,t);return n<0?void 0:r[n][1]},xt.prototype.has=function(t){return Pt(this.__data__,t)>-1},xt.prototype.set=function(t,r){var n=this.__data__,e=Pt(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},St.prototype.clear=function(){this.__data__={hash:new At,map:new(ht||xt),string:new At}},St.prototype.delete=function(t){return Rt(this,t).delete(t)},St.prototype.get=function(t){return Rt(this,t).get(t)},St.prototype.has=function(t){return Rt(this,t).has(t)},St.prototype.set=function(t,r){return Rt(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new xt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var n=this.__data__;if(n instanceof xt){var o=n.__data__;if(!ht||o.length<e-1)return o.push([t,r]),this;n=this.__data__=new St(o)}return n.set(t,r),this};var Bt=it?L(it,Object):function(){return[]},Dt=function(t){return Z.call(t)};function Ut(t,r){return!!(r=null==r?u:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function Ct(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||J)}function Ht(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,r){return t===r||t!=t&&r!=r}(lt&&Dt(new lt(new ArrayBuffer(1)))!=g||ht&&Dt(new ht)!=l||pt&&"[object Promise]"!=Dt(pt.resolve())||_t&&Dt(new _t)!=y||yt&&"[object WeakMap]"!=Dt(new yt))&&(Dt=function(t){var r=Z.call(t),n=r==p?t.constructor:void 0,e=n?Ht(n):void 0;if(e)switch(e){case dt:return g;case bt:return l;case gt:return"[object Promise]";case jt:return y;case wt:return"[object WeakMap]"}return r});var Gt=Array.isArray;function Lt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Nt(t)}var Vt=ft||function(){return!1};function Nt(t){var r=qt(t)?Z.call(t):"";return r==f||r==s}function qt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Jt(t){return Lt(t)?kt(t):function(t){if(!Ct(t))return st(t);var r=[];for(var n in Object(t))Y.call(t,n)&&"constructor"!=n&&r.push(n);return r}(t)}r.exports=function(t){return Ft(t,!0,!0)}}));return function(t,r){function n(t){return null!=t}if(!n(t))throw new Error("[THROW_ID_01] missing input object");if(!at(t))throw new Error("[THROW_ID_02] the first input object must be a true object");if(n(r)&&!at(r))throw new Error("[THROW_ID_03] the second override object must be a true object");var e,o=it(t),u=it(r),c=Object.keys(o),a=[],i=!1;n(u)&&0!==Object.keys(u).length&&(i=!0),i&&(e=L(Object.keys(u),Object.keys(o))).forEach((function(t){return Y(c,t)}));var f=function(t){for(var r=[],n=0;n<1<<t;n++){for(var e=[],o=0;o<t;o++)e.push(n&1<<o?1:0);r.push(e)}return r}(Object.keys(c).length),s={};return f.forEach((function(t,r){s={},c.forEach((function(t,n){s[t]=1===f[r][n]?1:0})),a.push(s)})),i&&a.forEach((function(t){return e.forEach((function(r){t[r]=u[r]}))})),a}}));
