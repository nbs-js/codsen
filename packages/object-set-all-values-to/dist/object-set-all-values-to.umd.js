/**
 * object-set-all-values-to
 * Recursively walk the input and set all found values in plain objects to something
 * Version: 3.9.50
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-set-all-values-to
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).objectSetAllValuesTo=r()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(t,r){return t(r={exports:{}},r.exports),r.exports}((function(r,e){var n=200,o="__lodash_hash_undefined__",c=9007199254740991,u="[object Arguments]",a="[object Boolean]",i="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",_="[object RegExp]",h="[object Set]",v="[object String]",b="[object Symbol]",d="[object ArrayBuffer]",j="[object DataView]",g="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",A="[object Int16Array]",m="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",P="[object Uint16Array]",E="[object Uint32Array]",k=/\w*$/,$=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[u]=I["[object Array]"]=I[d]=I[j]=I[a]=I[i]=I[g]=I[w]=I[O]=I[A]=I[m]=I[l]=I[p]=I[y]=I[_]=I[h]=I[v]=I[b]=I[x]=I[S]=I[P]=I[E]=!0,I["[object Error]"]=I[f]=I["[object WeakMap]"]=!1;var M="object"==typeof t&&t&&t.Object===Object&&t,T="object"==typeof self&&self&&self.Object===Object&&self,B=M||T||Function("return this")(),U=e&&!e.nodeType&&e,W=U&&r&&!r.nodeType&&r,D=W&&W.exports===U;function R(t,r){return t.set(r[0],r[1]),t}function V(t,r){return t.add(r),t}function z(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function C(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function L(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function G(t,r){return function(e){return t(r(e))}}function N(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var q,H=Array.prototype,J=Function.prototype,K=Object.prototype,Q=B["__core-js_shared__"],X=(q=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=D?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,ct=G(Object.getPrototypeOf,Object),ut=Object.create,at=K.propertyIsEnumerable,it=H.splice,ft=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=G(Object.keys,Object),pt=Wt(B,"DataView"),yt=Wt(B,"Map"),_t=Wt(B,"Promise"),ht=Wt(B,"Set"),vt=Wt(B,"WeakMap"),bt=Wt(Object,"create"),dt=Ct(pt),jt=Ct(yt),gt=Ct(_t),wt=Ct(ht),Ot=Ct(vt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){this.__data__=new St(t)}function kt(t,r){var e=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Nt(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==u)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var c in t)!r&&!Z.call(t,c)||o&&("length"==c||Vt(c,n))||e.push(c);return e}function $t(t,r,e){var n=t[r];Z.call(t,r)&&Lt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ft(t,r){for(var e=t.length;e--;)if(Lt(t[e][0],r))return e;return-1}function It(t,r,e,n,o,c,$){var F;if(n&&(F=c?n(t,o,c,$):n(t)),void 0!==F)return F;if(!Jt(t))return t;var M=Gt(t);if(M){if(F=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,F)}else{var T=Rt(t),B=T==f||T==s;if(qt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(T==y||T==u||B&&!c){if(C(t))return c?t:{};if(F=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(r=ct(t),Jt(r)?ut(r):{});var r}(B?{}:t),!r)return function(t,r){return Bt(t,Dt(t),r)}(t,function(t,r){return t&&Bt(r,Kt(r),t)}(F,t))}else{if(!I[T])return c?t:{};F=function(t,r,e,n){var o=t.constructor;switch(r){case d:return Tt(t);case a:case i:return new o(+t);case j:return function(t,r){var e=r?Tt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case g:case w:case O:case A:case m:case x:case S:case P:case E:return function(t,r){var e=r?Tt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return z(r?e(L(t),!0):L(t),R,new t.constructor)}(t,n,e);case p:case v:return new o(t);case _:return function(t){var r=new t.constructor(t.source,k.exec(t));return r.lastIndex=t.lastIndex,r}(t);case h:return function(t,r,e){return z(r?e(N(t),!0):N(t),V,new t.constructor)}(t,n,e);case b:return c=t,mt?Object(mt.call(c)):{}}var c}(t,T,It,r)}}$||($=new Et);var U=$.get(t);if(U)return U;if($.set(t,F),!M)var W=e?function(t){return function(t,r,e){var n=r(t);return Gt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Kt,Dt)}(t):Kt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(W||t,(function(o,c){W&&(o=t[c=o]),$t(F,c,It(o,r,e,n,c,t,$))})),F}function Mt(t){return!(!Jt(t)||(r=t,X&&X in r))&&(Ht(t)||C(t)?rt:$).test(Ct(t));var r}function Tt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Bt(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var u=r[o],a=n?n(e[u],t[u],u,e,t):void 0;$t(e,u,void 0===a?t[u]:a)}return e}function Ut(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Wt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Mt(e)?e:void 0}xt.prototype.clear=function(){this.__data__=bt?bt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var r=this.__data__;if(bt){var e=r[t];return e===o?void 0:e}return Z.call(r,t)?r[t]:void 0},xt.prototype.has=function(t){var r=this.__data__;return bt?void 0!==r[t]:Z.call(r,t)},xt.prototype.set=function(t,r){return this.__data__[t]=bt&&void 0===r?o:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,e=Ft(r,t);return!(e<0)&&(e==r.length-1?r.pop():it.call(r,e,1),!0)},St.prototype.get=function(t){var r=this.__data__,e=Ft(r,t);return e<0?void 0:r[e][1]},St.prototype.has=function(t){return Ft(this.__data__,t)>-1},St.prototype.set=function(t,r){var e=this.__data__,n=Ft(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Pt.prototype.clear=function(){this.__data__={hash:new xt,map:new(yt||St),string:new xt}},Pt.prototype.delete=function(t){return Ut(this,t).delete(t)},Pt.prototype.get=function(t){return Ut(this,t).get(t)},Pt.prototype.has=function(t){return Ut(this,t).has(t)},Pt.prototype.set=function(t,r){return Ut(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof St){var o=e.__data__;if(!yt||o.length<n-1)return o.push([t,r]),this;e=this.__data__=new Pt(o)}return e.set(t,r),this};var Dt=ft?G(ft,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Vt(t,r){return!!(r=null==r?c:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function zt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||K)}function Ct(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,r){return t===r||t!=t&&r!=r}(pt&&Rt(new pt(new ArrayBuffer(1)))!=j||yt&&Rt(new yt)!=l||_t&&"[object Promise]"!=Rt(_t.resolve())||ht&&Rt(new ht)!=h||vt&&"[object WeakMap]"!=Rt(new vt))&&(Rt=function(t){var r=tt.call(t),e=r==y?t.constructor:void 0,n=e?Ct(e):void 0;if(n)switch(n){case dt:return j;case jt:return l;case gt:return"[object Promise]";case wt:return h;case Ot:return"[object WeakMap]"}return r});var Gt=Array.isArray;function Nt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}(t.length)&&!Ht(t)}var qt=st||function(){return!1};function Ht(t){var r=Jt(t)?tt.call(t):"";return r==f||r==s}function Jt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Kt(t){return Nt(t)?kt(t):function(t){if(!zt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}r.exports=function(t){return It(t,!0,!0)}})),e="[object Object]";var n,o,c=Function.prototype,u=Object.prototype,a=c.toString,i=u.hasOwnProperty,f=a.call(Object),s=u.toString,l=(n=Object.getPrototypeOf,o=Object,function(t){return n(o(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=e||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=l(t);if(null===r)return!0;var n=i.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==f},y=Array.isArray;return function t(e,n){var o,c=r(e);return o=!(arguments.length<2)&&(p(n)||y(n)?r(n):n),y(c)?c.forEach((function(r,e){(p(c[e])||y(c[e]))&&(c[e]=t(c[e],o))})):p(c)&&Object.keys(c).forEach((function(r){y(c[r])||p(c[r])?c[r]=t(c[r],o):c[r]=o})),c}}));
