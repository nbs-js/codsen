/**
 * csv-split-easy
 * Splits the CSV string into array of arrays, each representing a row of columns
 * Version: 3.0.43
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/csv-split-easy
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).csvSplitEasy=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */var t=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},r=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)};
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */const n=Array.isArray;function o(e,r){if(!n(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},r);let i,s;if(o.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(i=t,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${i}th range (${JSON.stringify(e[i],null,4)}) has not two but ${s} elements!`);if(!e.every((e,r)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(i=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${i}th range (${JSON.stringify(e[i],null,4)}) does not consist of only natural numbers!`);const a=e.length*e.length;let u=0;return Array.from(e).sort((e,t)=>(o.progressFn&&(u++,o.progressFn(Math.floor(100*u/a))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e,t){return e(t={exports:{}},t.exports),t.exports}var a=s((function(e,t){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,s="[object Arguments]",a="[object Boolean]",u="[object Date]",l="[object Function]",c="[object GeneratorFunction]",f="[object Map]",p="[object Number]",h="[object Object]",g="[object RegExp]",y="[object Set]",d="[object String]",m="[object Symbol]",b="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",T="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",j="[object Int32Array]",S="[object Uint8Array]",$="[object Uint8ClampedArray]",N="[object Uint16Array]",E="[object Uint32Array]",I=/\w*$/,R=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,A={};A[s]=A["[object Array]"]=A[b]=A[v]=A[a]=A[u]=A[_]=A[T]=A[w]=A[O]=A[j]=A[f]=A[p]=A[h]=A[g]=A[y]=A[d]=A[m]=A[S]=A[$]=A[N]=A[E]=!0,A["[object Error]"]=A[l]=A["[object WeakMap]"]=!1;var D="object"==typeof i&&i&&i.Object===Object&&i,W="object"==typeof self&&self&&self.Object===Object&&self,x=D||W||Function("return this")(),H=t&&!t.nodeType&&t,J=H&&e&&!e.nodeType&&e,Z=J&&J.exports===H;function P(e,t){return e.set(t[0],t[1]),e}function k(e,t){return e.add(t),e}function C(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function q(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function U(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function M(e,t){return function(r){return e(t(r))}}function K(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var B,L=Array.prototype,z=Function.prototype,V=Object.prototype,G=x["__core-js_shared__"],Q=(B=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",X=z.toString,Y=V.hasOwnProperty,ee=V.toString,te=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=Z?x.Buffer:void 0,ne=x.Symbol,oe=x.Uint8Array,ie=M(Object.getPrototypeOf,Object),se=Object.create,ae=V.propertyIsEnumerable,ue=L.splice,le=Object.getOwnPropertySymbols,ce=re?re.isBuffer:void 0,fe=M(Object.keys,Object),pe=Je(x,"DataView"),he=Je(x,"Map"),ge=Je(x,"Promise"),ye=Je(x,"Set"),de=Je(x,"WeakMap"),me=Je(Object,"create"),be=qe(pe),ve=qe(he),_e=qe(ge),Te=qe(ye),we=qe(de),Oe=ne?ne.prototype:void 0,je=Oe?Oe.valueOf:void 0;function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ne(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ee(e){this.__data__=new $e(e)}function Ie(e,t){var r=Me(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ke(e)}(e)&&Y.call(e,"callee")&&(!ae.call(e,"callee")||ee.call(e)==s)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var i in e)!t&&!Y.call(e,i)||o&&("length"==i||ke(i,n))||r.push(i);return r}function Re(e,t,r){var n=e[t];Y.call(e,t)&&Ue(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Fe(e,t){for(var r=e.length;r--;)if(Ue(e[r][0],t))return r;return-1}function Ae(e,t,r,n,o,i,R){var F;if(n&&(F=i?n(e,o,i,R):n(e)),void 0!==F)return F;if(!ze(e))return e;var D=Me(e);if(D){if(F=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Y.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,F)}else{var W=Pe(e),x=W==l||W==c;if(Be(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(W==h||W==s||x&&!i){if(q(e))return i?e:{};if(F=function(e){return"function"!=typeof e.constructor||Ce(e)?{}:(t=ie(e),ze(t)?se(t):{});var t}(x?{}:e),!t)return function(e,t){return xe(e,Ze(e),t)}(e,function(e,t){return e&&xe(t,Ve(t),e)}(F,e))}else{if(!A[W])return i?e:{};F=function(e,t,r,n){var o=e.constructor;switch(t){case b:return We(e);case a:case u:return new o(+e);case v:return function(e,t){var r=t?We(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case _:case T:case w:case O:case j:case S:case $:case N:case E:return function(e,t){var r=t?We(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case f:return function(e,t,r){return C(t?r(U(e),!0):U(e),P,new e.constructor)}(e,n,r);case p:case d:return new o(e);case g:return function(e){var t=new e.constructor(e.source,I.exec(e));return t.lastIndex=e.lastIndex,t}(e);case y:return function(e,t,r){return C(t?r(K(e),!0):K(e),k,new e.constructor)}(e,n,r);case m:return i=e,je?Object(je.call(i)):{}}var i}(e,W,Ae,t)}}R||(R=new Ee);var H=R.get(e);if(H)return H;if(R.set(e,F),!D)var J=r?function(e){return function(e,t,r){var n=t(e);return Me(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ve,Ze)}(e):Ve(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(J||e,(function(o,i){J&&(o=e[i=o]),Re(F,i,Ae(o,t,r,n,i,e,R))})),F}function De(e){return!(!ze(e)||(t=e,Q&&Q in t))&&(Le(e)||q(e)?te:R).test(qe(e));var t}function We(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function xe(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],a=n?n(r[s],e[s],s,r,e):void 0;Re(r,s,void 0===a?e[s]:a)}return r}function He(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Je(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return De(r)?r:void 0}Se.prototype.clear=function(){this.__data__=me?me(null):{}},Se.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Se.prototype.get=function(e){var t=this.__data__;if(me){var r=t[e];return r===n?void 0:r}return Y.call(t,e)?t[e]:void 0},Se.prototype.has=function(e){var t=this.__data__;return me?void 0!==t[e]:Y.call(t,e)},Se.prototype.set=function(e,t){return this.__data__[e]=me&&void 0===t?n:t,this},$e.prototype.clear=function(){this.__data__=[]},$e.prototype.delete=function(e){var t=this.__data__,r=Fe(t,e);return!(r<0)&&(r==t.length-1?t.pop():ue.call(t,r,1),!0)},$e.prototype.get=function(e){var t=this.__data__,r=Fe(t,e);return r<0?void 0:t[r][1]},$e.prototype.has=function(e){return Fe(this.__data__,e)>-1},$e.prototype.set=function(e,t){var r=this.__data__,n=Fe(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ne.prototype.clear=function(){this.__data__={hash:new Se,map:new(he||$e),string:new Se}},Ne.prototype.delete=function(e){return He(this,e).delete(e)},Ne.prototype.get=function(e){return He(this,e).get(e)},Ne.prototype.has=function(e){return He(this,e).has(e)},Ne.prototype.set=function(e,t){return He(this,e).set(e,t),this},Ee.prototype.clear=function(){this.__data__=new $e},Ee.prototype.delete=function(e){return this.__data__.delete(e)},Ee.prototype.get=function(e){return this.__data__.get(e)},Ee.prototype.has=function(e){return this.__data__.has(e)},Ee.prototype.set=function(e,t){var n=this.__data__;if(n instanceof $e){var o=n.__data__;if(!he||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Ne(o)}return n.set(e,t),this};var Ze=le?M(le,Object):function(){return[]},Pe=function(e){return ee.call(e)};function ke(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||F.test(e))&&e>-1&&e%1==0&&e<t}function Ce(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||V)}function qe(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ue(e,t){return e===t||e!=e&&t!=t}(pe&&Pe(new pe(new ArrayBuffer(1)))!=v||he&&Pe(new he)!=f||ge&&"[object Promise]"!=Pe(ge.resolve())||ye&&Pe(new ye)!=y||de&&"[object WeakMap]"!=Pe(new de))&&(Pe=function(e){var t=ee.call(e),r=t==h?e.constructor:void 0,n=r?qe(r):void 0;if(n)switch(n){case be:return v;case ve:return f;case _e:return"[object Promise]";case Te:return y;case we:return"[object WeakMap]"}return t});var Me=Array.isArray;function Ke(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!Le(e)}var Be=ce||function(){return!1};function Le(e){var t=ze(e)?ee.call(e):"";return t==l||t==c}function ze(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ve(e){return Ke(e)?Ie(e):function(e){if(!Ce(e))return fe(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Ae(e,!0,!0)}})),u="[object Object]";var l,c,f=Function.prototype,p=Object.prototype,h=f.toString,g=p.hasOwnProperty,y=h.call(Object),d=p.toString,m=(l=Object.getPrototypeOf,c=Object,function(e){return l(c(e))});var b=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||d.call(e)!=u||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=m(e);if(null===t)return!0;var r=g.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&h.call(r)==y};function v(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(t){if(!b(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(i=Object.assign({},n,t),i.progressFn&&b(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=a(n);const s=a(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let u,l,c;u=i.progressFn?o(s,{progressFn:e=>{c=Math.floor(e/5),c!==l&&(l=c,i.progressFn(c))}}):o(s);const f=u.length-1;for(let e=f;e>0;e--)i.progressFn&&(c=Math.floor(78*(1-e/f))+21,c!==l&&c>l&&(l=c,i.progressFn(c))),(u[e][0]<=u[e-1][0]||!i.joinRangesThatTouchEdges&&u[e][0]<u[e-1][1]||i.joinRangesThatTouchEdges&&u[e][0]<=u[e-1][1])&&(u[e-1][0]=Math.min(u[e][0],u[e-1][0]),u[e-1][1]=Math.max(u[e][1],u[e-1][1]),void 0!==u[e][2]&&(u[e-1][0]>=u[e][0]||u[e-1][1]<=u[e][1])&&null!==u[e-1][2]&&(null===u[e][2]&&null!==u[e-1][2]?u[e-1][2]=null:void 0!==u[e-1][2]?2===i.mergeType&&u[e-1][0]===u[e][0]?u[e-1][2]=u[e][2]:u[e-1][2]+=u[e][2]:u[e-1][2]=u[e][2]),u.splice(e,1),e=u.length);return u}const _=Array.isArray;const T=" ";function w(e,t=!0,r){if(!(r.trim().length||e.length&&"\n"!==r&&r!==T&&" "===(t?e[e.length-1]:e[0])||e.length&&"\n"===(t?e[e.length-1]:e[0])&&"\n"!==r&&r!==T))if(t){if(("\n"===r||r===T)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(r===T||"\n"===r?r:" ")}else{if(("\n"===r||r===T)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(r===T||"\n"===r?r:" ")}}function O(e,t){if("string"==typeof e&&e.length){let r,n,o=!1;if(e.includes("\r\n")&&(o=!0),r=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(n=r,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&n--,w(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const i=[];if(n=r,""===e[0].trim())for(let t=0,r=e.length;t<r&&0===e[t].trim().length;t++)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,w(i,!0,e[t]));const s=[];if(n=r,""===e.slice(-1).trim())for(let t=e.length;t--&&0===e[t].trim().length;)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,w(s,!1,e[t]));return o?`${i.join("")}${e.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):i.join("")+e.trim()+s.join("")}return e}function j(e){return null!=e}const S=Array.isArray,$=Number.isInteger;function N(e){return"string"==typeof e}function E(e){return r(e,{includeZero:!0})?parseInt(e,10):e}class I{constructor(e){const t=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},e);if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if(N(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!N(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t}add(e,n,o,...i){if(i.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(i,null,4)}`);if(!j(e)&&!j(n))return;if(j(e)&&!j(n)){if(S(e)){if(e.length){if(e.some(e=>S(e)))return void e.forEach(e=>{S(e)&&this.add(...e)});e.length>1&&$(E(e[0]))&&$(E(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(n,null,0)})`)}if(!j(e)&&j(n))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(n,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const s=r(e,{includeZero:!0})?parseInt(e,10):e,a=r(n,{includeZero:!0})?parseInt(n,10):n;if($(o)&&(o=String(o)),!t(s,{includeZero:!0})||!t(a,{includeZero:!0}))throw t(s,{includeZero:!0})?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof a}" equal to: ${JSON.stringify(a,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(j(o)&&!N(o)&&!$(o))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);if(j(this.slices)&&S(this.last())&&s===this.last()[1]){if(this.last()[1]=a,this.last()[2],null!==this.last()[2]&&j(o)){let e=!(j(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?o:this.last()[2]+o;this.opts.limitToBeAddedWhitespace&&(e=O(e,this.opts.limitLinebreaksCount)),N(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===o||N(o)&&!o.length?[s,a]:[s,a,this.opts.limitToBeAddedWhitespace?O(o,this.opts.limitLinebreaksCount):o];this.slices.push(e)}}push(e,t,r,...n){this.add(e,t,r,...n)}current(){return null!=this.slices?(this.slices=v(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>j(e[2])?[e[0],e[1],O(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(S(e)&&e.length){if(!S(e[0])||!$(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=a(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}var R=s((function(e,t){!function(r){function n(e,t){return t instanceof Object||(t={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in t&&!t.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(t=e.exports=n),t.isNumeric=n}()})),F=(R.isNumeric,1/0),A="[object Symbol]",D=/^\s+|\s+$/g,W="[\\ud800-\\udfff]",x="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",H="\\ud83c[\\udffb-\\udfff]",J="[^\\ud800-\\udfff]",Z="(?:\\ud83c[\\udde6-\\uddff]){2}",P="[\\ud800-\\udbff][\\udc00-\\udfff]",k="(?:"+x+"|"+H+")"+"?",C="[\\ufe0e\\ufe0f]?"+k+("(?:\\u200d(?:"+[J,Z,P].join("|")+")[\\ufe0e\\ufe0f]?"+k+")*"),q="(?:"+[J+x+"?",x,Z,P,W].join("|")+")",U=RegExp(H+"(?="+H+")|"+q+C,"g"),M=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),K="object"==typeof i&&i&&i.Object===Object&&i,B="object"==typeof self&&self&&self.Object===Object&&self,L=K||B||Function("return this")();function z(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,V,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function V(e){return e!=e}function G(e){return function(e){return M.test(e)}(e)?function(e){return e.match(U)||[]}(e):function(e){return e.split("")}(e)}var Q=Object.prototype.toString,X=L.Symbol,Y=X?X.prototype:void 0,ee=Y?Y.toString:void 0;function te(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&Q.call(e)==A}(e))return ee?ee.call(e):"";var t=e+"";return"0"==t&&1/e==-F?"-0":t}function re(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}(e,t,r)}var ne=function(e,t,r){var n;if((e=null==(n=e)?"":te(n))&&(r||void 0===t))return e.replace(D,"");if(!e||!(t=te(t)))return e;var o=G(e),i=G(t);return re(o,function(e,t){for(var r=-1,n=e.length;++r<n&&z(t,e[r],0)>-1;);return r}(o,i),function(e,t){for(var r=e.length;r--&&z(t,e[r],0)>-1;);return r}(o,i)+1).join("")};function oe(e,n){let o=!0;const i=[".",",","'"," "];let s;if("string"!=typeof e)throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);if(null!=n&&!b(n))throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);const a=Object.assign({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},n),u=ne(e.trim(),'"');if(""===u)return u;const l=new I;for(let e=0,t=u.length;e<t;e++){if(a.removeThousandSeparatorsFromNumbers&&""===u[e].trim()&&l.add(e,e+1),a.removeThousandSeparatorsFromNumbers&&"'"===u[e]&&(l.add(e,e+1),"'"===u[e+1])){o=!1;break}if(i.includes(u[e])){if(void 0!==u[e+1]&&R(u[e+1]))if(void 0!==u[e+2]){if(!R(u[e+2])){o=!1;break}if(void 0!==u[e+3]){if(!R(u[e+3])){o=!1;break}if(void 0!==u[e+4]&&R(u[e+4])){o=!1;break}if(a.removeThousandSeparatorsFromNumbers&&l.add(e,e+1),s){if(u[e]!==s){o=!1;break}}else s=u[e]}else a.removeThousandSeparatorsFromNumbers&&a.forceUKStyle&&","===u[e]&&l.add(e,e+1,".")}else a.forceUKStyle&&","===u[e]&&l.add(e,e+1,"."),a.padSingleDecimalPlaceNumbers&&l.add(e+2,e+2,"0")}else if(!R(u[e])){o=!1;break}}return o&&l.current()?function(e,n,o){let i=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===n)return e;if(!_(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(o&&"function"!=typeof o)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof o}, equal to: ${JSON.stringify(o,null,4)}`);_(n)&&(t(n[0],{includeZero:!0})||r(n[0],{includeZero:!0}))&&(t(n[1],{includeZero:!0})||r(n[1],{includeZero:!0}))&&(n=[n]);const a=n.length;let u=0;n.forEach((e,l)=>{if(o&&(i=Math.floor(u/a*10),i!==s&&(s=i,o(i))),!_(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${l}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!t(e[0],{includeZero:!0})){if(!r(e[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${l}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);n[l][0]=Number.parseInt(n[l][0],10)}if(!t(e[1],{includeZero:!0})){if(!r(e[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${l}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);n[l][1]=Number.parseInt(n[l][1],10)}u++});const l=v(n,{progressFn:e=>{o&&(i=10+Math.floor(e/10),i!==s&&(s=i,o(i)))}}),c=l.length;if(c>0){const t=e.slice(l[c-1][1]);e=l.reduce((t,r,n,a)=>{o&&(i=20+Math.floor(n/c*80),i!==s&&(s=i,o(i)));const u=0===n?0:a[n-1][1],l=a[n][0];return t+e.slice(u,l)+(function(e){return null!=e}(a[n][2])?a[n][2]:"")},""),e+=t}return e}(u,l.current()):u}return function(t,r){var n=0,o=0,i=[],s=[],a=!1,u=!0;if(void 0!==r&&!b(r))throw new Error("csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type ".concat(e(r)," equal to:\n").concat(JSON.stringify(r,null,4)));var l=Object.assign({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},r);if("string"!=typeof t)throw new TypeError("csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(""===t)return[[""]];for(var c=0,f=(t=t.trim()).length;c<f;c++){if(u&&'"'!==t[c]&&","!==t[c]&&""!==t[c].trim()&&(u=!1),'"'===t[c])if(a&&'"'===t[c+1])c+=1;else if(a){a=!1;var p=t.slice(n,c);""!==p.trim()&&(u=!1);var h=/""/.test(p)?p.replace(/""/g,'"'):oe(p,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle});i.push(h)}else a=!0,n=c+1;else if(a||","!==t[c])if("\n"===t[c]||"\r"===t[c]){if(!o){if(o=c,!a&&'"'!==t[c-1]){var g=t.slice(n,c);""!==g.trim()&&(u=!1),i.push(oe(g,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle}))}u?i=[]:s.push(i),u=!0,i=[]}n=c+1}else o&&(o=0,n=c);else{if('"'!==t[c-1]&&!a){var y=t.slice(n,c);""!==y.trim()&&(u=!1),i.push(oe(y,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle}))}n=c+1,o&&(o=0)}if(c+1===f){if('"'!==t[c]){var d=t.slice(n,c+1);""!==d.trim()&&(u=!1),i.push(oe(d,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle}))}u?i=[]:s.push(i),u=!0}}return 0===s.length?[[""]]:s}}));
