/**
 * string-extract-class-names
 * Extract class (or id) name from a string
 * Version: 5.9.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-extract-class-names
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).stringExtractClassNames=n()}(this,(function(){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}Function.prototype.toString.call(Object);var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,n){t(n={exports:{}},n.exports)}((function(t,r){var e=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",i="[object Boolean]",a="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",_="[object Set]",d="[object String]",b="[object Symbol]",v="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",m="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",E="[object Uint16Array]",I="[object Uint32Array]",T=/\w*$/,W=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,P={};P[c]=P["[object Array]"]=P[v]=P[g]=P[i]=P[a]=P[j]=P[m]=P[w]=P[O]=P[A]=P[l]=P[p]=P[h]=P[y]=P[_]=P[d]=P[b]=P[x]=P[S]=P[E]=P[I]=!0,P["[object Error]"]=P[f]=P["[object WeakMap]"]=!1;var k="object"==typeof n&&n&&n.Object===Object&&n,C="object"==typeof self&&self&&self.Object===Object&&self,F=k||C||Function("return this")(),B=r&&!r.nodeType&&r,D=B&&t&&!t.nodeType&&t,M=D&&D.exports===B;function R(t,n){return t.set(n[0],n[1]),t}function U(t,n){return t.add(n),t}function N(t,n,r,e){var o=-1,u=t?t.length:0;for(e&&u&&(r=t[++o]);++o<u;)r=n(r,t[o],o,t);return r}function H(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function q(t){var n=-1,r=Array(t.size);return t.forEach((function(t,e){r[++n]=[e,t]})),r}function z(t,n){return function(r){return t(n(r))}}function J(t){var n=-1,r=Array(t.size);return t.forEach((function(t){r[++n]=t})),r}var L,V=Array.prototype,G=Function.prototype,K=Object.prototype,Q=F["__core-js_shared__"],X=(L=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",Y=G.toString,Z=K.hasOwnProperty,tt=K.toString,nt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=M?F.Buffer:void 0,et=F.Symbol,ot=F.Uint8Array,ut=z(Object.getPrototypeOf,Object),ct=Object.create,it=K.propertyIsEnumerable,at=V.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=z(Object.keys,Object),pt=Dt(F,"DataView"),ht=Dt(F,"Map"),yt=Dt(F,"Promise"),_t=Dt(F,"Set"),dt=Dt(F,"WeakMap"),bt=Dt(Object,"create"),vt=Ht(pt),gt=Ht(ht),jt=Ht(yt),mt=Ht(_t),wt=Ht(dt),Ot=et?et.prototype:void 0,At=Ot?Ot.valueOf:void 0;function xt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function St(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Et(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function It(t){this.__data__=new St(t)}function Tt(t,n){var r=zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}(t.length,String):[],e=r.length,o=!!e;for(var u in t)!n&&!Z.call(t,u)||o&&("length"==u||Ut(u,e))||r.push(u);return r}function Wt(t,n,r){var e=t[n];Z.call(t,n)&&qt(e,r)&&(void 0!==r||n in t)||(t[n]=r)}function $t(t,n){for(var r=t.length;r--;)if(qt(t[r][0],n))return r;return-1}function Pt(t,n,r,e,o,u,W){var $;if(e&&($=u?e(t,o,u,W):e(t)),void 0!==$)return $;if(!Gt(t))return t;var k=zt(t);if(k){if($=function(t){var n=t.length,r=t.constructor(n);n&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!n)return function(t,n){var r=-1,e=t.length;n||(n=Array(e));for(;++r<e;)n[r]=t[r];return n}(t,$)}else{var C=Rt(t),F=C==f||C==s;if(Lt(t))return function(t,n){if(n)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,n);if(C==h||C==c||F&&!u){if(H(t))return u?t:{};if($=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:(n=ut(t),Gt(n)?ct(n):{});var n}(F?{}:t),!n)return function(t,n){return Ft(t,Mt(t),n)}(t,function(t,n){return t&&Ft(n,Kt(n),t)}($,t))}else{if(!P[C])return u?t:{};$=function(t,n,r,e){var o=t.constructor;switch(n){case v:return Ct(t);case i:case a:return new o(+t);case g:return function(t,n){var r=n?Ct(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,e);case j:case m:case w:case O:case A:case x:case S:case E:case I:return function(t,n){var r=n?Ct(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,e);case l:return function(t,n,r){return N(n?r(q(t),!0):q(t),R,new t.constructor)}(t,e,r);case p:case d:return new o(t);case y:return function(t){var n=new t.constructor(t.source,T.exec(t));return n.lastIndex=t.lastIndex,n}(t);case _:return function(t,n,r){return N(n?r(J(t),!0):J(t),U,new t.constructor)}(t,e,r);case b:return u=t,At?Object(At.call(u)):{}}var u}(t,C,Pt,n)}}W||(W=new It);var B=W.get(t);if(B)return B;if(W.set(t,$),!k)var D=r?function(t){return function(t,n,r){var e=n(t);return zt(t)?e:function(t,n){for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];return t}(e,r(t))}(t,Kt,Mt)}(t):Kt(t);return function(t,n){for(var r=-1,e=t?t.length:0;++r<e&&!1!==n(t[r],r,t););}(D||t,(function(o,u){D&&(o=t[u=o]),Wt($,u,Pt(o,n,r,e,u,t,W))})),$}function kt(t){return!(!Gt(t)||(n=t,X&&X in n))&&(Vt(t)||H(t)?nt:W).test(Ht(t));var n}function Ct(t){var n=new t.constructor(t.byteLength);return new ot(n).set(new ot(t)),n}function Ft(t,n,r,e){r||(r={});for(var o=-1,u=n.length;++o<u;){var c=n[o],i=e?e(r[c],t[c],c,r,t):void 0;Wt(r,c,void 0===i?t[c]:i)}return r}function Bt(t,n){var r,e,o=t.__data__;return("string"==(e=typeof(r=n))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?o["string"==typeof n?"string":"hash"]:o.map}function Dt(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return kt(r)?r:void 0}xt.prototype.clear=function(){this.__data__=bt?bt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var n=this.__data__;if(bt){var r=n[t];return r===o?void 0:r}return Z.call(n,t)?n[t]:void 0},xt.prototype.has=function(t){var n=this.__data__;return bt?void 0!==n[t]:Z.call(n,t)},xt.prototype.set=function(t,n){return this.__data__[t]=bt&&void 0===n?o:n,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var n=this.__data__,r=$t(n,t);return!(r<0)&&(r==n.length-1?n.pop():at.call(n,r,1),!0)},St.prototype.get=function(t){var n=this.__data__,r=$t(n,t);return r<0?void 0:n[r][1]},St.prototype.has=function(t){return $t(this.__data__,t)>-1},St.prototype.set=function(t,n){var r=this.__data__,e=$t(r,t);return e<0?r.push([t,n]):r[e][1]=n,this},Et.prototype.clear=function(){this.__data__={hash:new xt,map:new(ht||St),string:new xt}},Et.prototype.delete=function(t){return Bt(this,t).delete(t)},Et.prototype.get=function(t){return Bt(this,t).get(t)},Et.prototype.has=function(t){return Bt(this,t).has(t)},Et.prototype.set=function(t,n){return Bt(this,t).set(t,n),this},It.prototype.clear=function(){this.__data__=new St},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,n){var r=this.__data__;if(r instanceof St){var o=r.__data__;if(!ht||o.length<e-1)return o.push([t,n]),this;r=this.__data__=new Et(o)}return r.set(t,n),this};var Mt=ft?z(ft,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Ut(t,n){return!!(n=null==n?u:n)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<n}function Nt(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||K)}function Ht(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,n){return t===n||t!=t&&n!=n}(pt&&Rt(new pt(new ArrayBuffer(1)))!=g||ht&&Rt(new ht)!=l||yt&&"[object Promise]"!=Rt(yt.resolve())||_t&&Rt(new _t)!=_||dt&&"[object WeakMap]"!=Rt(new dt))&&(Rt=function(t){var n=tt.call(t),r=n==h?t.constructor:void 0,e=r?Ht(r):void 0;if(e)switch(e){case vt:return g;case gt:return l;case jt:return"[object Promise]";case mt:return _;case wt:return"[object WeakMap]"}return n});var zt=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Vt(t)}var Lt=st||function(){return!1};function Vt(t){var n=Gt(t)?tt.call(t):"";return n==f||n==s}function Gt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Kt(t){return Jt(t)?Tt(t):function(t){if(!Nt(t))return lt(t);var n=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&n.push(r);return n}(t)}t.exports=function(t){return Pt(t,!0,!0)}}));function r(t,n){return function(t,n,r){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),!t[n+1])return null;if(t[n+1]&&(!r&&t[n+1].trim().length||r&&(t[n+1].trim().length||"\n\r".includes(t[n+1]))))return n+1;if(t[n+2]&&(!r&&t[n+2].trim().length||r&&(t[n+2].trim().length||"\n\r".includes(t[n+2]))))return n+2;for(let e=n+1,o=t.length;e<o;e++)if(t[e]&&(!r&&t[e].trim().length||r&&(t[e].trim().length||"\n\r".includes(t[e]))))return e;return null}(t,n,!1)}function e(t,n){return function(t,n,r){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),n<1)return null;if(t[n-1]&&(!r&&t[n-1].trim().length||r&&(t[n-1].trim().length||"\n\r".includes(t[n-1]))))return n-1;if(t[n-2]&&(!r&&t[n-2].trim().length||r&&(t[n-2].trim().length||"\n\r".includes(t[n-2]))))return n-2;for(let e=n;e--;)if(t[e]&&(!r&&t[e].trim().length||r&&(t[e].trim().length||"\n\r".includes(t[e]))))return e;return null}(t,n,!1)}return function(n,o){if(void 0===n)throw new Error("string-extract-class-names: [THROW_ID_01] input must not be undefined!");if("string"!=typeof n)throw new TypeError("string-extract-class-names: [THROW_ID_02] first input should be string, not ".concat(t(n),", currently equal to ").concat(JSON.stringify(n,null,4)));if(null!=o&&o){if("boolean"!=typeof o)throw new TypeError("string-extract-class-names: [THROW_ID_03] second input argument should be a Boolean, not ".concat(t(n),", currently equal to ").concat(JSON.stringify(n,null,4)))}else o=!1;var u;function c(t){return"string"==typeof t&&1===t.length&&(t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>96&&t.charCodeAt(0)<123)}for(var i=null,a=[],f=0,s=n.length;f<s;f++)null!==i&&f>=i&&(".# ~\\!@$%^&*()+=,/';:\"?><[]{}|`".includes(n[f])||0===n[f].trim().length)&&(f>i+1&&(o?a.push([i,f]):a.push("".concat(u||"").concat(n.slice(i,f))),u&&(u=void 0)),i=null),null!==i||"."!==n[f]&&"#"!==n[f]||(i=f),n.startsWith("class",f)&&"["===n[e(n,f)]&&"="===n[r(n,f+4)]&&(c(n[r(n,r(n,f+4))])?i=r(n,r(n,f+4)):"'\"".includes(n[r(n,r(n,f+4))])&&c(n[r(n,r(n,r(n,f+4)))])&&(i=r(n,r(n,r(n,f+4)))),u="."),n.startsWith("id",f)&&"["===n[e(n,f)]&&"="===n[r(n,f+1)]&&(c(n[r(n,r(n,f+1))])?i=r(n,r(n,f+1)):"'\"".includes(n[r(n,r(n,f+1))])&&c(n[r(n,r(n,r(n,f+1)))])&&(i=r(n,r(n,r(n,f+1)))),u="#"),f+1===s&&null!==i&&f>i&&(o?a.push([i,s]):a.push(n.slice(i,s)));return a}}));
