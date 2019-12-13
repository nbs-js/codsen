/**
 * string-remove-thousand-separators
 * Detects and removes thousand separators (dot/comma/quote/space) from string-type digits
 * Version: 3.0.43
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-remove-thousand-separators
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).stringRemoveThousandSeparators=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */var t=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},r=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)};
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */const n=Array.isArray;function o(e,r){if(!n(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},r);let i,s;if(o.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(i=t,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${i}th range (${JSON.stringify(e[i],null,4)}) has not two but ${s} elements!`);if(!e.every((e,r)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(i=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${i}th range (${JSON.stringify(e[i],null,4)}) does not consist of only natural numbers!`);const u=e.length*e.length;let a=0;return Array.from(e).sort((e,t)=>(o.progressFn&&(a++,o.progressFn(Math.floor(100*a/u))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e,t){return e(t={exports:{}},t.exports),t.exports}var u=s((function(e,t){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,s="[object Arguments]",u="[object Boolean]",a="[object Date]",f="[object Function]",c="[object GeneratorFunction]",l="[object Map]",p="[object Number]",g="[object Object]",h="[object RegExp]",y="[object Set]",d="[object String]",m="[object Symbol]",b="[object ArrayBuffer]",_="[object DataView]",v="[object Float32Array]",w="[object Float64Array]",T="[object Int8Array]",j="[object Int16Array]",O="[object Int32Array]",S="[object Uint8Array]",$="[object Uint8ClampedArray]",E="[object Uint16Array]",I="[object Uint32Array]",R=/\w*$/,N=/^\[object .+?Constructor\]$/,A=/^(?:0|[1-9]\d*)$/,F={};F[s]=F["[object Array]"]=F[b]=F[_]=F[u]=F[a]=F[v]=F[w]=F[T]=F[j]=F[O]=F[l]=F[p]=F[g]=F[h]=F[y]=F[d]=F[m]=F[S]=F[$]=F[E]=F[I]=!0,F["[object Error]"]=F[f]=F["[object WeakMap]"]=!1;var W="object"==typeof i&&i&&i.Object===Object&&i,D="object"==typeof self&&self&&self.Object===Object&&self,x=W||D||Function("return this")(),Z=t&&!t.nodeType&&t,H=Z&&e&&!e.nodeType&&e,J=H&&H.exports===Z;function k(e,t){return e.set(t[0],t[1]),e}function C(e,t){return e.add(t),e}function q(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function M(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function P(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function B(e,t){return function(r){return e(t(r))}}function U(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var L,z=Array.prototype,K=Function.prototype,V=Object.prototype,G=x["__core-js_shared__"],Q=(L=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",X=K.toString,Y=V.hasOwnProperty,ee=V.toString,te=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=J?x.Buffer:void 0,ne=x.Symbol,oe=x.Uint8Array,ie=B(Object.getPrototypeOf,Object),se=Object.create,ue=V.propertyIsEnumerable,ae=z.splice,fe=Object.getOwnPropertySymbols,ce=re?re.isBuffer:void 0,le=B(Object.keys,Object),pe=He(x,"DataView"),ge=He(x,"Map"),he=He(x,"Promise"),ye=He(x,"Set"),de=He(x,"WeakMap"),me=He(Object,"create"),be=Me(pe),_e=Me(ge),ve=Me(he),we=Me(ye),Te=Me(de),je=ne?ne.prototype:void 0,Oe=je?je.valueOf:void 0;function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ee(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ie(e){this.__data__=new $e(e)}function Re(e,t){var r=Be(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ue(e)}(e)&&Y.call(e,"callee")&&(!ue.call(e,"callee")||ee.call(e)==s)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var i in e)!t&&!Y.call(e,i)||o&&("length"==i||Ce(i,n))||r.push(i);return r}function Ne(e,t,r){var n=e[t];Y.call(e,t)&&Pe(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Ae(e,t){for(var r=e.length;r--;)if(Pe(e[r][0],t))return r;return-1}function Fe(e,t,r,n,o,i,N){var A;if(n&&(A=i?n(e,o,i,N):n(e)),void 0!==A)return A;if(!Ke(e))return e;var W=Be(e);if(W){if(A=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Y.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,A)}else{var D=ke(e),x=D==f||D==c;if(Le(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(D==g||D==s||x&&!i){if(M(e))return i?e:{};if(A=function(e){return"function"!=typeof e.constructor||qe(e)?{}:(t=ie(e),Ke(t)?se(t):{});var t}(x?{}:e),!t)return function(e,t){return xe(e,Je(e),t)}(e,function(e,t){return e&&xe(t,Ve(t),e)}(A,e))}else{if(!F[D])return i?e:{};A=function(e,t,r,n){var o=e.constructor;switch(t){case b:return De(e);case u:case a:return new o(+e);case _:return function(e,t){var r=t?De(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case v:case w:case T:case j:case O:case S:case $:case E:case I:return function(e,t){var r=t?De(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case l:return function(e,t,r){return q(t?r(P(e),!0):P(e),k,new e.constructor)}(e,n,r);case p:case d:return new o(e);case h:return function(e){var t=new e.constructor(e.source,R.exec(e));return t.lastIndex=e.lastIndex,t}(e);case y:return function(e,t,r){return q(t?r(U(e),!0):U(e),C,new e.constructor)}(e,n,r);case m:return i=e,Oe?Object(Oe.call(i)):{}}var i}(e,D,Fe,t)}}N||(N=new Ie);var Z=N.get(e);if(Z)return Z;if(N.set(e,A),!W)var H=r?function(e){return function(e,t,r){var n=t(e);return Be(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ve,Je)}(e):Ve(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(H||e,(function(o,i){H&&(o=e[i=o]),Ne(A,i,Fe(o,t,r,n,i,e,N))})),A}function We(e){return!(!Ke(e)||(t=e,Q&&Q in t))&&(ze(e)||M(e)?te:N).test(Me(e));var t}function De(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function xe(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],u=n?n(r[s],e[s],s,r,e):void 0;Ne(r,s,void 0===u?e[s]:u)}return r}function Ze(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function He(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return We(r)?r:void 0}Se.prototype.clear=function(){this.__data__=me?me(null):{}},Se.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Se.prototype.get=function(e){var t=this.__data__;if(me){var r=t[e];return r===n?void 0:r}return Y.call(t,e)?t[e]:void 0},Se.prototype.has=function(e){var t=this.__data__;return me?void 0!==t[e]:Y.call(t,e)},Se.prototype.set=function(e,t){return this.__data__[e]=me&&void 0===t?n:t,this},$e.prototype.clear=function(){this.__data__=[]},$e.prototype.delete=function(e){var t=this.__data__,r=Ae(t,e);return!(r<0)&&(r==t.length-1?t.pop():ae.call(t,r,1),!0)},$e.prototype.get=function(e){var t=this.__data__,r=Ae(t,e);return r<0?void 0:t[r][1]},$e.prototype.has=function(e){return Ae(this.__data__,e)>-1},$e.prototype.set=function(e,t){var r=this.__data__,n=Ae(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ee.prototype.clear=function(){this.__data__={hash:new Se,map:new(ge||$e),string:new Se}},Ee.prototype.delete=function(e){return Ze(this,e).delete(e)},Ee.prototype.get=function(e){return Ze(this,e).get(e)},Ee.prototype.has=function(e){return Ze(this,e).has(e)},Ee.prototype.set=function(e,t){return Ze(this,e).set(e,t),this},Ie.prototype.clear=function(){this.__data__=new $e},Ie.prototype.delete=function(e){return this.__data__.delete(e)},Ie.prototype.get=function(e){return this.__data__.get(e)},Ie.prototype.has=function(e){return this.__data__.has(e)},Ie.prototype.set=function(e,t){var n=this.__data__;if(n instanceof $e){var o=n.__data__;if(!ge||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Ee(o)}return n.set(e,t),this};var Je=fe?B(fe,Object):function(){return[]},ke=function(e){return ee.call(e)};function Ce(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||A.test(e))&&e>-1&&e%1==0&&e<t}function qe(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||V)}function Me(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Pe(e,t){return e===t||e!=e&&t!=t}(pe&&ke(new pe(new ArrayBuffer(1)))!=_||ge&&ke(new ge)!=l||he&&"[object Promise]"!=ke(he.resolve())||ye&&ke(new ye)!=y||de&&"[object WeakMap]"!=ke(new de))&&(ke=function(e){var t=ee.call(e),r=t==g?e.constructor:void 0,n=r?Me(r):void 0;if(n)switch(n){case be:return _;case _e:return l;case ve:return"[object Promise]";case we:return y;case Te:return"[object WeakMap]"}return t});var Be=Array.isArray;function Ue(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!ze(e)}var Le=ce||function(){return!1};function ze(e){var t=Ke(e)?ee.call(e):"";return t==f||t==c}function Ke(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ve(e){return Ue(e)?Re(e):function(e){if(!qe(e))return le(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Fe(e,!0,!0)}})),a="[object Object]";var f,c,l=Function.prototype,p=Object.prototype,g=l.toString,h=p.hasOwnProperty,y=g.call(Object),d=p.toString,m=(f=Object.getPrototypeOf,c=Object,function(e){return f(c(e))});var b=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||d.call(e)!=a||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=m(e);if(null===t)return!0;var r=h.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&g.call(r)==y};function _(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(t){if(!b(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(i=Object.assign({},n,t),i.progressFn&&b(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=u(n);const s=u(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let a,f,c;a=i.progressFn?o(s,{progressFn:e=>{c=Math.floor(e/5),c!==f&&(f=c,i.progressFn(c))}}):o(s);const l=a.length-1;for(let e=l;e>0;e--)i.progressFn&&(c=Math.floor(78*(1-e/l))+21,c!==f&&c>f&&(f=c,i.progressFn(c))),(a[e][0]<=a[e-1][0]||!i.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||i.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:void 0!==a[e-1][2]?2===i.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a}const v=Array.isArray;const w=" ";function T(e,t=!0,r){if(!(r.trim().length||e.length&&"\n"!==r&&r!==w&&" "===(t?e[e.length-1]:e[0])||e.length&&"\n"===(t?e[e.length-1]:e[0])&&"\n"!==r&&r!==w))if(t){if(("\n"===r||r===w)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(r===w||"\n"===r?r:" ")}else{if(("\n"===r||r===w)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(r===w||"\n"===r?r:" ")}}function j(e,t){if("string"==typeof e&&e.length){let r,n,o=!1;if(e.includes("\r\n")&&(o=!0),r=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(n=r,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&n--,T(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const i=[];if(n=r,""===e[0].trim())for(let t=0,r=e.length;t<r&&0===e[t].trim().length;t++)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,T(i,!0,e[t]));const s=[];if(n=r,""===e.slice(-1).trim())for(let t=e.length;t--&&0===e[t].trim().length;)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,T(s,!1,e[t]));return o?`${i.join("")}${e.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):i.join("")+e.trim()+s.join("")}return e}function O(e){return null!=e}const S=Array.isArray,$=Number.isInteger;function E(e){return"string"==typeof e}function I(e){return r(e,{includeZero:!0})?parseInt(e,10):e}class R{constructor(e){const t=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},e);if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if(E(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!E(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t}add(e,n,o,...i){if(i.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(i,null,4)}`);if(!O(e)&&!O(n))return;if(O(e)&&!O(n)){if(S(e)){if(e.length){if(e.some(e=>S(e)))return void e.forEach(e=>{S(e)&&this.add(...e)});e.length>1&&$(I(e[0]))&&$(I(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(n,null,0)})`)}if(!O(e)&&O(n))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(n,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const s=r(e,{includeZero:!0})?parseInt(e,10):e,u=r(n,{includeZero:!0})?parseInt(n,10):n;if($(o)&&(o=String(o)),!t(s,{includeZero:!0})||!t(u,{includeZero:!0}))throw t(s,{includeZero:!0})?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof u}" equal to: ${JSON.stringify(u,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(O(o)&&!E(o)&&!$(o))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);if(O(this.slices)&&S(this.last())&&s===this.last()[1]){if(this.last()[1]=u,this.last()[2],null!==this.last()[2]&&O(o)){let e=!(O(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?o:this.last()[2]+o;this.opts.limitToBeAddedWhitespace&&(e=j(e,this.opts.limitLinebreaksCount)),E(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===o||E(o)&&!o.length?[s,u]:[s,u,this.opts.limitToBeAddedWhitespace?j(o,this.opts.limitLinebreaksCount):o];this.slices.push(e)}}push(e,t,r,...n){this.add(e,t,r,...n)}current(){return null!=this.slices?(this.slices=_(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>O(e[2])?[e[0],e[1],j(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(S(e)&&e.length){if(!S(e[0])||!$(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=u(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}var N=s((function(e,t){!function(r){function n(e,t){return t instanceof Object||(t={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in t&&!t.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(t=e.exports=n),t.isNumeric=n}()})),A=(N.isNumeric,1/0),F="[object Symbol]",W=/^\s+|\s+$/g,D="[\\ud800-\\udfff]",x="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",Z="\\ud83c[\\udffb-\\udfff]",H="[^\\ud800-\\udfff]",J="(?:\\ud83c[\\udde6-\\uddff]){2}",k="[\\ud800-\\udbff][\\udc00-\\udfff]",C="(?:"+x+"|"+Z+")"+"?",q="[\\ufe0e\\ufe0f]?"+C+("(?:\\u200d(?:"+[H,J,k].join("|")+")[\\ufe0e\\ufe0f]?"+C+")*"),M="(?:"+[H+x+"?",x,J,k,D].join("|")+")",P=RegExp(Z+"(?="+Z+")|"+M+q,"g"),B=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),U="object"==typeof i&&i&&i.Object===Object&&i,L="object"==typeof self&&self&&self.Object===Object&&self,z=U||L||Function("return this")();function K(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,V,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function V(e){return e!=e}function G(e){return function(e){return B.test(e)}(e)?function(e){return e.match(P)||[]}(e):function(e){return e.split("")}(e)}var Q=Object.prototype.toString,X=z.Symbol,Y=X?X.prototype:void 0,ee=Y?Y.toString:void 0;function te(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&Q.call(e)==F}(e))return ee?ee.call(e):"";var t=e+"";return"0"==t&&1/e==-A?"-0":t}function re(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}(e,t,r)}var ne=function(e,t,r){var n;if((e=null==(n=e)?"":te(n))&&(r||void 0===t))return e.replace(W,"");if(!e||!(t=te(t)))return e;var o=G(e),i=G(t);return re(o,function(e,t){for(var r=-1,n=e.length;++r<n&&K(t,e[r],0)>-1;);return r}(o,i),function(e,t){for(var r=e.length;r--&&K(t,e[r],0)>-1;);return r}(o,i)+1).join("")};return function(n,o){var i,s=!0,u=[".",",","'"," "];if("string"!=typeof n)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(null!=o&&!b(o))throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ".concat(e(o),", equal to:\n").concat(JSON.stringify(o,null,4)));var a=Object.assign({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},o),f=ne(n.trim(),'"');if(""===f)return f;for(var c=new R,l=0,p=f.length;l<p;l++){if(a.removeThousandSeparatorsFromNumbers&&""===f[l].trim()&&c.add(l,l+1),a.removeThousandSeparatorsFromNumbers&&"'"===f[l]&&(c.add(l,l+1),"'"===f[l+1])){s=!1;break}if(u.includes(f[l])){if(void 0!==f[l+1]&&N(f[l+1]))if(void 0!==f[l+2]){if(!N(f[l+2])){s=!1;break}if(void 0!==f[l+3]){if(!N(f[l+3])){s=!1;break}if(void 0!==f[l+4]&&N(f[l+4])){s=!1;break}if(a.removeThousandSeparatorsFromNumbers&&c.add(l,l+1),i){if(f[l]!==i){s=!1;break}}else i=f[l]}else a.removeThousandSeparatorsFromNumbers&&a.forceUKStyle&&","===f[l]&&c.add(l,l+1,".")}else a.forceUKStyle&&","===f[l]&&c.add(l,l+1,"."),a.padSingleDecimalPlaceNumbers&&c.add(l+2,l+2,"0")}else if(!N(f[l])){s=!1;break}}return s&&c.current()?function(e,n,o){let i=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===n)return e;if(!v(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(o&&"function"!=typeof o)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof o}, equal to: ${JSON.stringify(o,null,4)}`);v(n)&&(t(n[0],{includeZero:!0})||r(n[0],{includeZero:!0}))&&(t(n[1],{includeZero:!0})||r(n[1],{includeZero:!0}))&&(n=[n]);const u=n.length;let a=0;n.forEach((e,f)=>{if(o&&(i=Math.floor(a/u*10),i!==s&&(s=i,o(i))),!v(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${f}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!t(e[0],{includeZero:!0})){if(!r(e[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${f}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);n[f][0]=Number.parseInt(n[f][0],10)}if(!t(e[1],{includeZero:!0})){if(!r(e[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${f}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);n[f][1]=Number.parseInt(n[f][1],10)}a++});const f=_(n,{progressFn:e=>{o&&(i=10+Math.floor(e/10),i!==s&&(s=i,o(i)))}}),c=f.length;if(c>0){const t=e.slice(f[c-1][1]);e=f.reduce((t,r,n,u)=>{o&&(i=20+Math.floor(n/c*80),i!==s&&(s=i,o(i)));const a=0===n?0:u[n-1][1],f=u[n][0];return t+e.slice(a,f)+(function(e){return null!=e}(u[n][2])?u[n][2]:"")},""),e+=t}return e}(f,c.current()):f}}));
