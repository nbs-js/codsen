/**
 * string-remove-duplicate-heads-tails
 * Detect and (recursively) remove head and tail wrappings around the input string
 * Version: 3.0.40
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-remove-duplicate-heads-tails
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringRemoveDuplicateHeadsTails=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="[object Object]";var r,n,i=Function.prototype,o=Object.prototype,s=i.toString,a=o.hasOwnProperty,u=s.call(Object),c=o.toString,l=(r=Object.getPrototypeOf,n=Object,function(t){return r(n(t))});var f=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||c.call(t)!=e||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var r=l(t);if(null===r)return!0;var n=a.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==u};function h(t){return"string"==typeof t?t.length>0?[t]:[]:t}var g=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var y="[object AsyncFunction]",d="[object Function]",m="[object GeneratorFunction]",b="[object Null]",w="[object Proxy]",_="[object Undefined]",v="object"==typeof p&&p&&p.Object===Object&&p,T="object"==typeof self&&self&&self.Object===Object&&self,O=v||T||Function("return this")(),j=Object.prototype,$=j.hasOwnProperty,E=j.toString,I=O.Symbol,A=I?I.toStringTag:void 0;function R(t){return null==t?void 0===t?_:b:A&&A in Object(t)?function(t){var e=$.call(t,A),r=t[A];try{t[A]=void 0;var n=!0}catch(t){}var i=E.call(t);n&&(e?t[A]=r:delete t[A]);return i}(t):function(t){return E.call(t)}(t)}var S=function(t){if(!function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}(t))return!1;var e=R(t);return e==d||e==m||e==y||e==w};function W(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function C(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}const M=Array.isArray;function B(t){return null!=t}function x(t){return"string"==typeof t}function D(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function H(t,e,r,n,i){const o="function"==typeof r?r():r;if(e>=t.length&&i&&"EOL"===o)return o;if(!(e<=t.length)){if(n.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${e} beyond the input string length, ${t.length}.`)}{let s=i?1:r.length;for(let i=e,o=t.length;i<o;i++){let e=t[i];if(W(t[i])&&C(t[i+1])&&(e=t[i]+t[i+1]),C(t[i])&&W(t[i-1])&&(e=t[i-1]+t[i]),n.trimBeforeMatching&&""===t[i].trim())continue;if(!n.i&&n.trimCharsBeforeMatching.includes(e)||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){2===e.length&&(i+=1);continue}let o=r[r.length-s];if(W(o)&&B(r[r.length-s+1])&&C(r[r.length-s+1])&&(o=r[r.length-s]+r[r.length-s+1]),!(!n.i&&e===o||n.i&&e.toLowerCase()===o.toLowerCase()))return!1;if((s-=e.length)<1){let n=i-r.length+e.length;return n>=0&&C(t[n])&&B(t[n-1])&&W(t[n-1])&&(n-=1),n>=0?n:0}2===e.length&&W(t[i])&&(i+=1)}if(s>0)return!(!i||"EOL"!==o)}}function N(t,e,r,n,i){const o="function"==typeof r?r():r;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length){if(n.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${t.length} but the second argument is beyond it:\n${JSON.stringify(e,null,4)}`)}let s=i?1:r.length;for(let o=e+1;o--;){if(n.trimBeforeMatching&&""===t[o].trim()){if(0===o&&i&&"EOL"===r)return!0;continue}let e=t[o];if(C(t[o])&&W(t[o-1])?e=t[o-1]+t[o]:W(t[o])&&C(t[o+1])&&(e=t[o]+t[o+1]),!n.i&&n.trimCharsBeforeMatching.includes(e)||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){if(2===e.length&&(o-=1),i&&"EOL"===r&&0===o)return!0;continue}let a=r[s-1];if(C(a)&&(a=`${r[s-2]}${r[s-1]}`,s-=1,o-=1),!(!n.i&&e===a||n.i&&e.toLowerCase()===a.toLowerCase()))return!1;if((s-=1)<1)return o>=0?o:0}return s>0?!(!i||"EOL"!==o):void 0}function F(t,e,r,n,i){const o=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},i);let s,a,u,c;if(o.trimCharsBeforeMatching=h(o.trimCharsBeforeMatching),o.trimCharsBeforeMatching=o.trimCharsBeforeMatching.map(t=>x(t)?t:String(t)),o.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!D(t)&&(s=e,a=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${s} is longer than 1 character, ${a.length} (equals to ${a}). Please split it into separate characters and put into array as separate elements.`);if(!x(e)){if(o.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`)}if(0===e.length){if(o.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!g(r,{includeZero:!0})){if(o.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`)}if(x(n))u=[n];else if(M(n))u=n;else if(B(n)){if(!S(n))throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);(u=[]).push(n)}else u=n;if(B(i)&&!f(i))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof i}", and equal to:\n${JSON.stringify(i,null,4)}`);if(!B(u)||!M(u)||M(u)&&!u.length||M(u)&&1===u.length&&x(u[0])&&0===u[0].trim().length){if("function"==typeof o.cb){let n,i=r;if("matchRight"===t&&W(e[r])&&C(e[r+1])&&(i+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(i+=1),t.startsWith("matchLeft"))for(let t=i;t--;){if(C(e[t])&&W(e[t-1]))continue;let r=e[t];if(W(e[t])&&C(e[t+1])&&(r=e[t]+e[t+1]),(!o.trimBeforeMatching||o.trimBeforeMatching&&void 0!==r&&""!==r.trim())&&(0===o.trimCharsBeforeMatching.length||void 0!==r&&!o.trimCharsBeforeMatching.includes(r))){n=t;break}C(e[t-1])&&W(e[t-2])&&(t-=1)}else if(t.startsWith("matchRight"))for(let t=i;t<e.length;t++){let r=e[t];if(W(e[t])&&C(e[t+1])&&(r=e[t]+e[t+1]),(!o.trimBeforeMatching||o.trimBeforeMatching&&""!==r.trim())&&(0===o.trimCharsBeforeMatching.length||!o.trimCharsBeforeMatching.includes(r))){n=t;break}W(e[t])&&C(e[t+1])&&(t+=1)}if(void 0===n)return!1;let s=e[n];W(e[n])&&C(e[n+1])&&(s=e[n]+e[n+1]),C(e[n])&&W(e[n-1])&&(s=e[n-1]+e[n],n-=1);let a,u=n+1;return W(e[n])&&C(e[n+1])&&(u+=1),u&&u>0&&(a=e.slice(0,u)),t.startsWith("matchLeft")?o.cb(s,a,n):(n&&n>0&&(a=e.slice(n)),o.cb(s,a,n))}let n="";throw B(i)||(n=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${n}`)}if(t.startsWith("matchLeft")){for(let n=0,i=u.length;n<i;n++){c="function"==typeof u[n];const i=u[n];let s=r;"matchLeft"===t&&(D(e[n-1])&&D(e[n-2])?s-=2:s-=1);const a=N(e,s,i,o,c);if(a&&c&&"function"==typeof i&&"EOL"===i())return!(!i()||o.cb&&!o.cb(f,h,l))&&i();let l,f,h="";if(B(a)&&a>0&&(f=e[l=a-1],h=e.slice(0,a)),C(e[l])&&B(e[l-1])&&W(e[l-1])&&(f=e[(l-=1)-1]+e[l]),W(e[l])&&B(e[l+1])&&C(e[l+1])&&(f=e[l]+e[l+1],h=e.slice(0,l+2)),!1!==a&&(!o.cb||o.cb(f,h,l)))return i}return!1}for(let n=0,i=u.length;n<i;n++){c="function"==typeof u[n];const i=u[n];let s=r+("matchRight"===t?1:0);"matchRight"===t&&W(e[s-1])&&C(e[s])&&(s+=1);const a=H(e,s,i,o,c);if(a&&c&&"function"==typeof i&&"EOL"===i()){let t,e,r;return!(!i()||o.cb&&!o.cb(t,e,r))&&i()}let l,f,h;if(B(a)&&B(e[a+i.length-1])&&(f=e[l=a+i.length],W(e[l])&&C(e[l+1])&&(f=e[l]+e[l+1])),B(l)&&l>=0&&(h=e.slice(l)),!1!==a&&(!o.cb||o.cb(f,h,l)))return i}return!1}function J(t,e,r,n){return F("matchLeftIncl",t,e,r,n)}function L(t,e,r,n){return F("matchRightIncl",t,e,r,n)}const Z=" ";function k(t,e=!0,r){if(!(r.trim().length||t.length&&"\n"!==r&&r!==Z&&" "===(e?t[t.length-1]:t[0])||t.length&&"\n"===(e?t[t.length-1]:t[0])&&"\n"!==r&&r!==Z))if(e){if(("\n"===r||r===Z)&&t.length&&" "===t[t.length-1])for(;t.length&&" "===t[t.length-1];)t.pop();t.push(r===Z||"\n"===r?r:" ")}else{if(("\n"===r||r===Z)&&t.length&&" "===t[0])for(;t.length&&" "===t[0];)t.shift();t.unshift(r===Z||"\n"===r?r:" ")}}function q(t,e){if("string"==typeof t&&t.length){let r,n,i=!1;if(t.includes("\r\n")&&(i=!0),r=e&&"number"==typeof e?e:1,""===t.trim()){const e=[];for(n=r,Array.from(t).forEach(t=>{("\n"!==t||n)&&("\n"===t&&n--,k(e,!0,t))});e.length>1&&" "===e[e.length-1];)e.pop();return e.join("")}const o=[];if(n=r,""===t[0].trim())for(let e=0,r=t.length;e<r&&0===t[e].trim().length;e++)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,k(o,!0,t[e]));const s=[];if(n=r,""===t.slice(-1).trim())for(let e=t.length;e--&&0===t[e].trim().length;)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,k(s,!1,t[e]));return i?`${o.join("")}${t.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):o.join("")+t.trim()+s.join("")}return t}var P=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)};const U=Array.isArray;function z(t,e){if(!U(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},e);let n,i;if(r.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(n=e,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) has not two but ${i} elements!`);if(!t.every((t,e)=>!(!g(t[0],{includeZero:!0})||!g(t[1],{includeZero:!0}))||(n=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) does not consist of only natural numbers!`);const o=t.length*t.length;let s=0;return Array.from(t).sort((t,e)=>(r.progressFn&&(s++,r.progressFn(Math.floor(100*s/o))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var G=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r=200,n="__lodash_hash_undefined__",i=9007199254740991,o="[object Arguments]",s="[object Boolean]",a="[object Date]",u="[object Function]",c="[object GeneratorFunction]",l="[object Map]",f="[object Number]",h="[object Object]",g="[object RegExp]",y="[object Set]",d="[object String]",m="[object Symbol]",b="[object ArrayBuffer]",w="[object DataView]",_="[object Float32Array]",v="[object Float64Array]",T="[object Int8Array]",O="[object Int16Array]",j="[object Int32Array]",$="[object Uint8Array]",E="[object Uint8ClampedArray]",I="[object Uint16Array]",A="[object Uint32Array]",R=/\w*$/,S=/^\[object .+?Constructor\]$/,W=/^(?:0|[1-9]\d*)$/,C={};C[o]=C["[object Array]"]=C[b]=C[w]=C[s]=C[a]=C[_]=C[v]=C[T]=C[O]=C[j]=C[l]=C[f]=C[h]=C[g]=C[y]=C[d]=C[m]=C[$]=C[E]=C[I]=C[A]=!0,C["[object Error]"]=C[u]=C["[object WeakMap]"]=!1;var M="object"==typeof p&&p&&p.Object===Object&&p,B="object"==typeof self&&self&&self.Object===Object&&self,x=M||B||Function("return this")(),D=e&&!e.nodeType&&e,H=D&&t&&!t.nodeType&&t,N=H&&H.exports===D;function F(t,e){return t.set(e[0],e[1]),t}function J(t,e){return t.add(e),t}function L(t,e,r,n){var i=-1,o=t?t.length:0;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}function Z(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function k(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function q(t,e){return function(r){return t(e(r))}}function P(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var U,z=Array.prototype,G=Function.prototype,V=Object.prototype,K=x["__core-js_shared__"],Q=(U=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",X=G.toString,Y=V.hasOwnProperty,tt=V.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=N?x.Buffer:void 0,nt=x.Symbol,it=x.Uint8Array,ot=q(Object.getPrototypeOf,Object),st=Object.create,at=V.propertyIsEnumerable,ut=z.splice,ct=Object.getOwnPropertySymbols,lt=rt?rt.isBuffer:void 0,ft=q(Object.keys,Object),ht=Ht(x,"DataView"),gt=Ht(x,"Map"),pt=Ht(x,"Promise"),yt=Ht(x,"Set"),dt=Ht(x,"WeakMap"),mt=Ht(Object,"create"),bt=Zt(ht),wt=Zt(gt),_t=Zt(pt),vt=Zt(yt),Tt=Zt(dt),Ot=nt?nt.prototype:void 0,jt=Ot?Ot.valueOf:void 0;function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){this.__data__=new Et(t)}function Rt(t,e){var r=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Pt(t)}(t)&&Y.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==o)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,i=!!n;for(var s in t)!e&&!Y.call(t,s)||i&&("length"==s||Jt(s,n))||r.push(s);return r}function St(t,e,r){var n=t[e];Y.call(t,e)&&kt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Wt(t,e){for(var r=t.length;r--;)if(kt(t[r][0],e))return r;return-1}function Ct(t,e,r,n,i,p,S){var W;if(n&&(W=p?n(t,i,p,S):n(t)),void 0!==W)return W;if(!Gt(t))return t;var M=qt(t);if(M){if(W=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,W)}else{var B=Ft(t),x=B==u||B==c;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(B==h||B==o||x&&!p){if(Z(t))return p?t:{};if(W=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(e=ot(t),Gt(e)?st(e):{});var e}(x?{}:t),!e)return function(t,e){return xt(t,Nt(t),e)}(t,function(t,e){return t&&xt(e,Vt(e),t)}(W,t))}else{if(!C[B])return p?t:{};W=function(t,e,r,n){var i=t.constructor;switch(e){case b:return Bt(t);case s:case a:return new i(+t);case w:return function(t,e){var r=e?Bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case v:case T:case O:case j:case $:case E:case I:case A:return function(t,e){var r=e?Bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return L(e?r(k(t),!0):k(t),F,new t.constructor)}(t,n,r);case f:case d:return new i(t);case g:return(c=new(u=t).constructor(u.source,R.exec(u))).lastIndex=u.lastIndex,c;case y:return function(t,e,r){return L(e?r(P(t),!0):P(t),J,new t.constructor)}(t,n,r);case m:return o=t,jt?Object(jt.call(o)):{}}var o;var u,c}(t,B,Ct,e)}}S||(S=new At);var D=S.get(t);if(D)return D;if(S.set(t,W),!M)var H=r?function(t){return function(t,e,r){var n=e(t);return qt(t)?n:function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}(n,r(t))}(t,Vt,Nt)}(t):Vt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(H||t,(function(i,o){H&&(i=t[o=i]),St(W,o,Ct(i,e,r,n,o,t,S))})),W}function Mt(t){return!(!Gt(t)||function(t){return!!Q&&Q in t}(t))&&(zt(t)||Z(t)?et:S).test(Zt(t))}function Bt(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function xt(t,e,r,n){r||(r={});for(var i=-1,o=e.length;++i<o;){var s=e[i],a=n?n(r[s],t[s],s,r,t):void 0;St(r,s,void 0===a?t[s]:a)}return r}function Dt(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function Ht(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}$t.prototype.clear=function(){this.__data__=mt?mt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===n?void 0:r}return Y.call(e,t)?e[t]:void 0},$t.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:Y.call(e,t)},$t.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?n:e,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var e=this.__data__,r=Wt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},Et.prototype.get=function(t){var e=this.__data__,r=Wt(e,t);return r<0?void 0:e[r][1]},Et.prototype.has=function(t){return Wt(this.__data__,t)>-1},Et.prototype.set=function(t,e){var r=this.__data__,n=Wt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},It.prototype.clear=function(){this.__data__={hash:new $t,map:new(gt||Et),string:new $t}},It.prototype.delete=function(t){return Dt(this,t).delete(t)},It.prototype.get=function(t){return Dt(this,t).get(t)},It.prototype.has=function(t){return Dt(this,t).has(t)},It.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},At.prototype.clear=function(){this.__data__=new Et},At.prototype.delete=function(t){return this.__data__.delete(t)},At.prototype.get=function(t){return this.__data__.get(t)},At.prototype.has=function(t){return this.__data__.has(t)},At.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Et){var i=n.__data__;if(!gt||i.length<r-1)return i.push([t,e]),this;n=this.__data__=new It(i)}return n.set(t,e),this};var Nt=ct?q(ct,Object):function(){return[]},Ft=function(t){return tt.call(t)};function Jt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||W.test(t))&&t>-1&&t%1==0&&t<e}function Lt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||V)}function Zt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function kt(t,e){return t===e||t!=t&&e!=e}(ht&&Ft(new ht(new ArrayBuffer(1)))!=w||gt&&Ft(new gt)!=l||pt&&"[object Promise]"!=Ft(pt.resolve())||yt&&Ft(new yt)!=y||dt&&"[object WeakMap]"!=Ft(new dt))&&(Ft=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Zt(r):void 0;if(n)switch(n){case bt:return w;case wt:return l;case _t:return"[object Promise]";case vt:return y;case Tt:return"[object WeakMap]"}return e});var qt=Array.isArray;function Pt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!zt(t)}var Ut=lt||function(){return!1};function zt(t){var e=Gt(t)?tt.call(t):"";return e==u||e==c}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Vt(t){return Pt(t)?Rt(t):function(t){if(!Lt(t))return ft(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Ct(t,!0,!0)}}));function V(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(e){if(!f(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if((i=Object.assign({},n,e)).progressFn&&f(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=G(n);const o=G(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let s,a,u;const c=(s=i.progressFn?z(o,{progressFn:t=>{(u=Math.floor(t/5))!==a&&(a=u,i.progressFn(u))}}):z(o)).length-1;for(let t=c;t>0;t--)i.progressFn&&(u=Math.floor(78*(1-t/c))+21)!==a&&u>a&&(a=u,i.progressFn(u)),(s[t][0]<=s[t-1][0]||!i.joinRangesThatTouchEdges&&s[t][0]<s[t-1][1]||i.joinRangesThatTouchEdges&&s[t][0]<=s[t-1][1])&&(s[t-1][0]=Math.min(s[t][0],s[t-1][0]),s[t-1][1]=Math.max(s[t][1],s[t-1][1]),void 0!==s[t][2]&&(s[t-1][0]>=s[t][0]||s[t-1][1]<=s[t][1])&&null!==s[t-1][2]&&(null===s[t][2]&&null!==s[t-1][2]?s[t-1][2]=null:void 0!==s[t-1][2]?2===i.mergeType&&s[t-1][0]===s[t][0]?s[t-1][2]=s[t][2]:s[t-1][2]+=s[t][2]:s[t-1][2]=s[t][2]),s.splice(t,1),t=s.length);return s}function K(t){return null!=t}const Q=Array.isArray,X=Number.isInteger;function Y(t){return"string"==typeof t}function tt(t){return P(t,{includeZero:!0})?parseInt(t,10):t}class et{constructor(t){const e=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},t);if(e.mergeType&&1!==e.mergeType&&2!==e.mergeType)if(Y(e.mergeType)&&"1"===e.mergeType.trim())e.mergeType=1;else{if(!Y(e.mergeType)||"2"!==e.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof e.mergeType}", equal to ${JSON.stringify(e.mergeType,null,4)}`);e.mergeType=2}this.opts=e}add(t,e,r,...n){if(n.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(n,null,4)}`);if(!K(t)&&!K(e))return;if(K(t)&&!K(e)){if(Q(t)){if(t.length){if(t.some(t=>Q(t)))return void t.forEach(t=>{Q(t)&&this.add(...t)});t.length>1&&X(tt(t[0]))&&X(tt(t[1]))&&this.add(...t)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(t,null,0)}) but second-one, "to" is not (${JSON.stringify(e,null,0)})`)}if(!K(t)&&K(e))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(e,null,0)}) but first-one, "from" is not (${JSON.stringify(t,null,0)})`);const i=P(t,{includeZero:!0})?parseInt(t,10):t,o=P(e,{includeZero:!0})?parseInt(e,10):e;if(X(r)&&(r=String(r)),!g(i,{includeZero:!0})||!g(o,{includeZero:!0}))throw g(i,{includeZero:!0})?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`);if(K(r)&&!Y(r)&&!X(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(K(this.slices)&&Q(this.last())&&i===this.last()[1]){if(this.last()[1]=o,this.last()[2],null!==this.last()[2]&&K(r)){let t=!(K(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(t=q(t,this.opts.limitLinebreaksCount)),Y(t)&&!t.length||(this.last()[2]=t)}}else{this.slices||(this.slices=[]);const t=void 0===r||Y(r)&&!r.length?[i,o]:[i,o,this.opts.limitToBeAddedWhitespace?q(r,this.opts.limitLinebreaksCount):r];this.slices.push(t)}}push(t,e,r,...n){this.add(t,e,r,...n)}current(){return null!=this.slices?(this.slices=V(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(t=>K(t[2])?[t[0],t[1],q(t[2],this.opts.limitLinebreaksCount)]:t):this.slices):null}wipe(){this.slices=void 0}replace(t){if(Q(t)&&t.length){if(!Q(t[0])||!X(t[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(t[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=G(t)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}const rt=Array.isArray;function nt(t,e){if("string"!=typeof t)throw new Error(`string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as ${typeof t}, equal to:\n${JSON.stringify(t,null,4)}`);const r=Object.assign({},{classicTrim:!1,cr:!1,lf:!1,tab:!1,space:!0,nbsp:!1},e);function n(t){return r.classicTrim&&0===t.trim().length||!r.classicTrim&&(r.space&&" "===t||r.cr&&"\r"===t||r.lf&&"\n"===t||r.tab&&"\t"===t||r.nbsp&&" "===t)}let i,o;if(t.length>0){if(n(t[0]))for(let e=0,r=t.length;e<r;e++){if(!n(t[e])){i=e;break}if(e===t.length-1)return{res:"",ranges:[[0,t.length]]}}if(n(t[t.length-1]))for(let e=t.length;e--;)if(!n(t[e])){o=e+1;break}return i?o?{res:t.slice(i,o),ranges:[[0,i],[o,t.length]]}:{res:t.slice(i),ranges:[[0,i]]}:o?{res:t.slice(0,o),ranges:[[o,t.length]]}:{res:t,ranges:[]}}return{res:"",ranges:[]}}return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function n(t){return null!=t}var i=Object.prototype.hasOwnProperty;function o(t){return"string"==typeof t}if(void 0===e)throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_01] The input is missing!");if("string"!=typeof e)return e;if(n(r)&&!f(r))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_03] The given options are not a plain object but ".concat(t(r),"!"));if(n(r)&&i.call(r,"heads")){if(!h(r.heads).every((function(t){return o(t)})))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_04] The opts.heads contains elements which are not string-type!");o(r.heads)&&(r.heads=h(r.heads))}if(n(r)&&i.call(r,"tails")){if(!h(r.tails).every((function(t){return o(t)})))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_05] The opts.tails contains elements which are not string-type!");o(r.tails)&&(r.tails=h(r.tails))}var s=nt(e).res;if(0===s.length)return e;e=s;var a=Object.assign({},{heads:["{{"],tails:["}}"]},r);a.heads=a.heads.map((function(t){return t.trim()})),a.tails=a.tails.map((function(t){return t.trim()}));var u=!1,c=!1,l=new et({limitToBeAddedWhitespace:!0}),p=new et({limitToBeAddedWhitespace:!0}),y=!0,d=!0,m="";function b(t,e){var r;return L(t,0,e.heads,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0},relaxedApi:!0})&&L(t,r,e.tails,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0},relaxedApi:!0})?t.slice(r):t}for(;e!==b(e,a);)e=nt(b(e,a)).res;function w(t,e){var r;return J(t,t.length-1,e.tails,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0},relaxedApi:!0})&&J(t,r,e.heads,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0},relaxedApi:!0})?t.slice(0,r+1):t}for(;e!==w(e,a);)e=nt(w(e,a)).res;if(!(a.heads.length&&L(e,0,a.heads,{trimBeforeMatching:!0,relaxedApi:!0})&&a.tails.length&&J(e,e.length-1,a.tails,{trimBeforeMatching:!0,relaxedApi:!0})))return nt(e).res;for(var _=0,v=e.length;_<v;_++)if(""===e[_].trim());else{var T=void 0;if(L(e,_,a.heads,{trimBeforeMatching:!0,cb:function(t,e,r){return T=r,!0},relaxedApi:!0})){d=!0,y&&(y=!0);var O=void 0;L(e,T,a.tails,{trimBeforeMatching:!0,cb:function(t,e,r){return O=r,!0},relaxedApi:!0})&&l.push(_,O),p.current()&&u&&"tails"!==m&&l.push(p.current()),u?p.push(_,T):(p.current()&&(l.push(p.current()),p.wipe()),p.push(_,T)),m="heads",_=T-1;continue}if(L(e,_,a.tails,{trimBeforeMatching:!0,cb:function(t,r,i){return T=n(i)?i:e.length,!0},relaxedApi:!0})){d=!0,y?("heads"===m&&p.wipe(),y=!1):p.push(_,T),m="tails",_=T-1;continue}y&&(y=!0),d&&!u?(u=!0,d=!1):d&&!c?(c=!0,y=!0,d=!1,"heads"===m&&p.wipe()):d&&c&&p.wipe()}return p.current()&&l.push(p.current()),l.current()?function(t,e,r){let n=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===e)return t;if(!rt(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);rt(e)&&(g(e[0],{includeZero:!0})||P(e[0],{includeZero:!0}))&&(g(e[1],{includeZero:!0})||P(e[1],{includeZero:!0}))&&(e=[e]);const o=e.length;let s=0;e.forEach((t,a)=>{if(r&&(n=Math.floor(s/o*10))!==i&&(i=n,r(n)),!rt(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!g(t[0],{includeZero:!0})){if(!P(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);e[a][0]=Number.parseInt(e[a][0],10)}if(!g(t[1],{includeZero:!0})){if(!P(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);e[a][1]=Number.parseInt(e[a][1],10)}s++});const a=V(e,{progressFn:t=>{r&&(n=10+Math.floor(t/10))!==i&&(i=n,r(n))}}),u=a.length;if(u>0){const e=t.slice(a[u-1][1]);t=a.reduce((e,o,s,a)=>{r&&(n=20+Math.floor(s/u*80))!==i&&(i=n,r(n));const c=0===s?0:a[s-1][1],l=a[s][0];return e+t.slice(c,l)+(function(t){return null!=t}(a[s][2])?a[s][2]:"")},""),t+=e}return t}(e,l.current()).trim():e.trim()}}));
