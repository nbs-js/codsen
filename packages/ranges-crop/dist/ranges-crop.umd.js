/**
 * ranges-crop
 * Crop array of ranges when they go beyond the reference string's length
 * Version: 2.0.41
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-crop
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).rangesCrop=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};const r=Array.isArray;function n(t,n){if(!r(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},n);let a,i;if(o.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(a=e,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${a}th range (${JSON.stringify(t[a],null,4)}) has not two but ${i} elements!`);if(!t.every((t,r)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(a=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${a}th range (${JSON.stringify(t[a],null,4)}) does not consist of only natural numbers!`);const u=t.length*t.length;let c=0;return Array.from(t).sort((t,e)=>(o.progressFn&&(c++,o.progressFn(Math.floor(100*c/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r=200,n="__lodash_hash_undefined__",a=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",g="[object RegExp]",h="[object Set]",_="[object String]",b="[object Symbol]",d="[object ArrayBuffer]",v="[object DataView]",m="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",T="[object Int16Array]",O="[object Int32Array]",A="[object Uint8Array]",S="[object Uint8ClampedArray]",E="[object Uint16Array]",R="[object Uint32Array]",I=/\w*$/,F=/^\[object .+?Constructor\]$/,x=/^(?:0|[1-9]\d*)$/,$={};$[i]=$["[object Array]"]=$[d]=$[v]=$[u]=$[c]=$[m]=$[w]=$[j]=$[T]=$[O]=$[l]=$[p]=$[y]=$[g]=$[h]=$[_]=$[b]=$[A]=$[S]=$[E]=$[R]=!0,$["[object Error]"]=$[s]=$["[object WeakMap]"]=!1;var N="object"==typeof o&&o&&o.Object===Object&&o,W="object"==typeof self&&self&&self.Object===Object&&self,D=N||W||Function("return this")(),H=e&&!e.nodeType&&e,J=H&&t&&!t.nodeType&&t,M=J&&J.exports===H;function Z(t,e){return t.set(e[0],e[1]),t}function P(t,e){return t.add(e),t}function k(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function C(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function q(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function B(t,e){return function(r){return t(e(r))}}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z,Y=Array.prototype,G=Function.prototype,L=Object.prototype,V=D["__core-js_shared__"],K=(z=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Q=G.toString,X=L.hasOwnProperty,tt=L.toString,et=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=M?D.Buffer:void 0,nt=D.Symbol,ot=D.Uint8Array,at=B(Object.getPrototypeOf,Object),it=Object.create,ut=L.propertyIsEnumerable,ct=Y.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=B(Object.keys,Object),pt=Jt(D,"DataView"),yt=Jt(D,"Map"),gt=Jt(D,"Promise"),ht=Jt(D,"Set"),_t=Jt(D,"WeakMap"),bt=Jt(Object,"create"),dt=Ct(pt),vt=Ct(yt),mt=Ct(gt),wt=Ct(ht),jt=Ct(_t),Tt=nt?nt.prototype:void 0,Ot=Tt?Tt.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Rt(t){this.__data__=new St(t)}function It(t,e){var r=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&X.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!X.call(t,a)||o&&("length"==a||Pt(a,n))||r.push(a);return r}function Ft(t,e,r){var n=t[e];X.call(t,e)&&qt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function xt(t,e){for(var r=t.length;r--;)if(qt(t[r][0],e))return r;return-1}function $t(t,e,r,n,o,a,F){var x;if(n&&(x=a?n(t,o,a,F):n(t)),void 0!==x)return x;if(!Gt(t))return t;var N=Bt(t);if(N){if(x=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&X.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,x)}else{var W=Zt(t),D=W==s||W==f;if(zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(W==y||W==i||D&&!a){if(C(t))return a?t:{};if(x=function(t){return"function"!=typeof t.constructor||kt(t)?{}:(e=at(t),Gt(e)?it(e):{});var e}(D?{}:t),!e)return function(t,e){return Dt(t,Mt(t),e)}(t,function(t,e){return t&&Dt(e,Lt(e),t)}(x,t))}else{if(!$[W])return a?t:{};x=function(t,e,r,n){var o=t.constructor;switch(e){case d:return Wt(t);case u:case c:return new o(+t);case v:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case w:case j:case T:case O:case A:case S:case E:case R:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return k(e?r(q(t),!0):q(t),Z,new t.constructor)}(t,n,r);case p:case _:return new o(t);case g:return function(t){var e=new t.constructor(t.source,I.exec(t));return e.lastIndex=t.lastIndex,e}(t);case h:return function(t,e,r){return k(e?r(U(t),!0):U(t),P,new t.constructor)}(t,n,r);case b:return a=t,Ot?Object(Ot.call(a)):{}}var a}(t,W,$t,e)}}F||(F=new Rt);var H=F.get(t);if(H)return H;if(F.set(t,x),!N)var J=r?function(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Lt,Mt)}(t):Lt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(J||t,(function(o,a){J&&(o=t[a=o]),Ft(x,a,$t(o,e,r,n,a,t,F))})),x}function Nt(t){return!(!Gt(t)||(e=t,K&&K in e))&&(Yt(t)||C(t)?et:F).test(Ct(t));var e}function Wt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Dt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var i=e[o],u=n?n(r[i],t[i],i,r,t):void 0;Ft(r,i,void 0===u?t[i]:u)}return r}function Ht(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Jt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Nt(r)?r:void 0}At.prototype.clear=function(){this.__data__=bt?bt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return X.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:X.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=xt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ct.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=xt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return xt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=xt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new At,map:new(yt||St),string:new At}},Et.prototype.delete=function(t){return Ht(this,t).delete(t)},Et.prototype.get=function(t){return Ht(this,t).get(t)},Et.prototype.has=function(t){return Ht(this,t).has(t)},Et.prototype.set=function(t,e){return Ht(this,t).set(t,e),this},Rt.prototype.clear=function(){this.__data__=new St},Rt.prototype.delete=function(t){return this.__data__.delete(t)},Rt.prototype.get=function(t){return this.__data__.get(t)},Rt.prototype.has=function(t){return this.__data__.has(t)},Rt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof St){var o=n.__data__;if(!yt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Et(o)}return n.set(t,e),this};var Mt=st?B(st,Object):function(){return[]},Zt=function(t){return tt.call(t)};function Pt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||x.test(t))&&t>-1&&t%1==0&&t<e}function kt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||L)}function Ct(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,e){return t===e||t!=t&&e!=e}(pt&&Zt(new pt(new ArrayBuffer(1)))!=v||yt&&Zt(new yt)!=l||gt&&"[object Promise]"!=Zt(gt.resolve())||ht&&Zt(new ht)!=h||_t&&"[object WeakMap]"!=Zt(new _t))&&(Zt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Ct(r):void 0;if(n)switch(n){case dt:return v;case vt:return l;case mt:return"[object Promise]";case wt:return h;case jt:return"[object WeakMap]"}return e});var Bt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!Yt(t)}var zt=ft||function(){return!1};function Yt(t){var e=Gt(t)?tt.call(t):"";return e==s||e==f}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Lt(t){return Ut(t)?It(t):function(t){if(!kt(t))return lt(t);var e=[];for(var r in Object(t))X.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return $t(t,!0,!0)}})),i="[object Object]";var u,c,s=Function.prototype,f=Object.prototype,l=s.toString,p=f.hasOwnProperty,y=l.call(Object),g=f.toString,h=(u=Object.getPrototypeOf,c=Object,function(t){return u(c(t))});var _=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||g.call(t)!=i||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=h(t);if(null===e)return!0;var r=p.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==y};var b=Array.isArray;return function(r,o){if(!b(r))throw new TypeError("ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(!e(o,{includeZero:!0}))throw new TypeError("ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ".concat(t(o),", equal to: ").concat(JSON.stringify(o,null,4)));if(0===r.length)return r;var i;if(!r.every((function(t,r){return!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(i=r,!1)}))){if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])throw new TypeError("ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ".concat(JSON.stringify(r,null,0),"!"));throw new TypeError("ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ".concat(i+1,"th range (").concat(JSON.stringify(r[i],null,0),") does not consist of only natural numbers!"))}if(!r.every((function(t,e){return null==t[2]||"string"==typeof t[2]||(i=e,!1)})))throw new TypeError("ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ".concat(i,"th range ").concat(JSON.stringify(r[i],null,0)," has a argument in the range of a type ").concat(t(r[i][2])));return function(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(e){if(!_(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(i=Object.assign({},o,e),i.progressFn&&_(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=a(o);const u=a(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let c,s,f;c=i.progressFn?n(u,{progressFn:t=>{f=Math.floor(t/5),f!==s&&(s=f,i.progressFn(f))}}):n(u);const l=c.length-1;for(let t=l;t>0;t--)i.progressFn&&(f=Math.floor(78*(1-t/l))+21,f!==s&&f>s&&(s=f,i.progressFn(f))),(c[t][0]<=c[t-1][0]||!i.joinRangesThatTouchEdges&&c[t][0]<c[t-1][1]||i.joinRangesThatTouchEdges&&c[t][0]<=c[t-1][1])&&(c[t-1][0]=Math.min(c[t][0],c[t-1][0]),c[t-1][1]=Math.max(c[t][1],c[t-1][1]),void 0!==c[t][2]&&(c[t-1][0]>=c[t][0]||c[t-1][1]<=c[t][1])&&null!==c[t-1][2]&&(null===c[t][2]&&null!==c[t-1][2]?c[t-1][2]=null:void 0!==c[t-1][2]?2===i.mergeType&&c[t-1][0]===c[t][0]?c[t-1][2]=c[t][2]:c[t-1][2]+=c[t][2]:c[t-1][2]=c[t][2]),c.splice(t,1),t=c.length);return c}(r).filter((function(t){return t[0]<=o&&(void 0!==t[2]||t[0]<o)})).map((function(t){return t[1]>o?void 0!==t[2]?[t[0],o,t[2]]:[t[0],o]:t}))}}));
