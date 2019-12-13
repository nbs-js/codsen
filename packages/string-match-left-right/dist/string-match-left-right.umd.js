/**
 * string-match-left-right
 * Do substrings match what's on the left or right of a given index?
 * Version: 3.11.15
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-match-left-right
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringMatchLeftRight={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */var r=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},n="[object Object]";var o,i,a=Function.prototype,c=Object.prototype,f=a.toString,h=c.hasOwnProperty,u=f.call(Object),s=c.toString,l=(o=Object.getPrototypeOf,i=Object,function(t){return o(i(t))});var g=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var r=h.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==u},m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p="[object AsyncFunction]",d="[object Function]",y="[object GeneratorFunction]",b="[object Null]",v="[object Proxy]",w="[object Undefined]",O="object"==typeof m&&m&&m.Object===Object&&m,C="object"==typeof self&&self&&self.Object===Object&&self,j=O||C||Function("return this")(),M=Object.prototype,B=M.hasOwnProperty,L=M.toString,E=j.Symbol,S=E?E.toStringTag:void 0;function _(t){return null==t?void 0===t?w:b:S&&S in Object(t)?function(t){var e=B.call(t,S),r=t[S];try{t[S]=void 0;var n=!0}catch(t){}var o=L.call(t);n&&(e?t[S]=r:delete t[S]);return o}(t):function(t){return L.call(t)}(t)}var T=function(t){if(!function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}(t))return!1;var e=_(t);return e==d||e==y||e==p||e==v};function I(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function R(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}var x=Array.isArray;function A(t){return null!=t}function W(t){return"string"==typeof t}function D(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function H(t,e,r,n,o){var i="function"==typeof r?r():r;if(e>=t.length&&o&&"EOL"===i)return i;if(!(e<=t.length)){if(n.relaxedApi)return!1;throw new Error("string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ".concat(e," beyond the input string length, ").concat(t.length,"."))}for(var a=o?1:r.length,c=e,f=t.length;c<f;c++){var h=t[c];if(I(t[c])&&R(t[c+1])&&(h=t[c]+t[c+1]),R(t[c])&&I(t[c-1])&&(h=t[c-1]+t[c]),!n.trimBeforeMatching||""!==t[c].trim())if(!n.i&&n.trimCharsBeforeMatching.includes(h)||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(h.toLowerCase()))2===h.length&&(c+=1);else{var u=r[r.length-a];if(I(u)&&A(r[r.length-a+1])&&R(r[r.length-a+1])&&(u=r[r.length-a]+r[r.length-a+1]),!(!n.i&&h===u||n.i&&h.toLowerCase()===u.toLowerCase()))return!1;if((a-=h.length)<1){var s=c-r.length+h.length;return s>=0&&R(t[s])&&A(t[s-1])&&I(t[s-1])&&(s-=1),s>=0?s:0}2===h.length&&I(t[c])&&(c+=1)}}return a>0?!(!o||"EOL"!==i):void 0}function N(t,e,r,n,o){var i="function"==typeof r?r():r;if(e<0&&o&&"EOL"===i)return i;if(e>=t.length){if(n.relaxedApi)return!1;throw new Error("string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ".concat(t.length," but the second argument is beyond it:\n").concat(JSON.stringify(e,null,4)))}for(var a=o?1:r.length,c=e+1;c--;)if(n.trimBeforeMatching&&""===t[c].trim()){if(0===c&&o&&"EOL"===r)return!0}else{var f=t[c];if(R(t[c])&&I(t[c-1])?f=t[c-1]+t[c]:I(t[c])&&R(t[c+1])&&(f=t[c]+t[c+1]),!n.i&&n.trimCharsBeforeMatching.includes(f)||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(f.toLowerCase())){if(2===f.length&&(c-=1),o&&"EOL"===r&&0===c)return!0}else{var h=r[a-1];if(R(h)&&(h="".concat(r[a-2]).concat(r[a-1]),a-=1,c-=1),!(!n.i&&f===h||n.i&&f.toLowerCase()===h.toLowerCase()))return!1;if((a-=1)<1)return c>=0?c:0}}return a>0?!(!o||"EOL"!==i):void 0}function P(t,n,o,i,a){if(g(a)&&Object.prototype.hasOwnProperty.call(a,"trimBeforeMatching")&&"boolean"!=typeof a.trimBeforeMatching)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(x(a.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var c,f,h,u,s,l=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},a);if(l.trimCharsBeforeMatching="string"==typeof(c=l.trimCharsBeforeMatching)?c.length>0?[c]:[]:c,l.trimCharsBeforeMatching=l.trimCharsBeforeMatching.map((function(t){return W(t)?t:String(t)})),l.trimCharsBeforeMatching.some((function(t,e){return t.length>1&&!D(t)&&(f=e,h=t,!0)})))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(f," is longer than 1 character, ").concat(h.length," (equals to ").concat(h,"). Please split it into separate characters and put into array as separate elements."));if(!W(n)){if(l.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ").concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)))}if(0===n.length){if(l.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!"))}if(!r(o,{includeZero:!0})){if(l.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(e(o),", equal to:\n").concat(JSON.stringify(o,null,4)))}if(W(i))u=[i];else if(x(i))u=i;else if(A(i)){if(!T(i))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(e(i),", equal to:\n").concat(JSON.stringify(i,null,4)));(u=[]).push(i)}else u=i;if(A(a)&&!g(a))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(e(a),'", and equal to:\n').concat(JSON.stringify(a,null,4)));if(!A(u)||!x(u)||x(u)&&!u.length||x(u)&&1===u.length&&W(u[0])&&0===u[0].trim().length){if("function"==typeof l.cb){var m,p=o;if("matchRight"===t&&I(n[o])&&R(n[o+1])&&(p+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(p+=1),t.startsWith("matchLeft")){for(var d=p;d--;)if(!R(n[d])||!I(n[d-1])){var y=n[d];if(I(n[d])&&R(n[d+1])&&(y=n[d]+n[d+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&void 0!==y&&""!==y.trim())&&(0===l.trimCharsBeforeMatching.length||void 0!==y&&!l.trimCharsBeforeMatching.includes(y))){m=d;break}R(n[d-1])&&I(n[d-2])&&(d-=1)}}else if(t.startsWith("matchRight"))for(var b=p;b<n.length;b++){var v=n[b];if(I(n[b])&&R(n[b+1])&&(v=n[b]+n[b+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&""!==v.trim())&&(0===l.trimCharsBeforeMatching.length||!l.trimCharsBeforeMatching.includes(v))){m=b;break}I(n[b])&&R(n[b+1])&&(b+=1)}if(void 0===m)return!1;var w=n[m];I(n[m])&&R(n[m+1])&&(w=n[m]+n[m+1]),R(n[m])&&I(n[m-1])&&(w=n[m-1]+n[m],m-=1);var O,C=m+1;return I(n[m])&&R(n[m+1])&&(C+=1),C&&C>0&&(O=n.slice(0,C)),t.startsWith("matchLeft")?l.cb(w,O,m):(m&&m>0&&(O=n.slice(m)),l.cb(w,O,m))}var j="";throw A(a)||(j=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(t,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(j))}if(t.startsWith("matchLeft")){for(var M=0,B=u.length;M<B;M++){s="function"==typeof u[M];var L=u[M],E=void 0,S=void 0,_="",P=o;"matchLeft"===t&&(D(n[M-1])&&D(n[M-2])?P-=2:P-=1);var Z=N(n,P,L,l,s);if(Z&&s&&"function"==typeof L&&"EOL"===L())return!(!L()||l.cb&&!l.cb(E,_,S))&&L();if(A(Z)&&Z>0&&(E=n[S=Z-1],_=n.slice(0,Z)),R(n[S])&&A(n[S-1])&&I(n[S-1])&&(E=n[(S-=1)-1]+n[S]),I(n[S])&&A(n[S+1])&&R(n[S+1])&&(E=n[S]+n[S+1],_=n.slice(0,S+2)),!1!==Z&&(!l.cb||l.cb(E,_,S)))return L}return!1}for(var k=0,F=u.length;k<F;k++){s="function"==typeof u[k];var q=u[k],J=o+("matchRight"===t?1:0);"matchRight"===t&&I(n[J-1])&&R(n[J])&&(J+=1);var $=H(n,J,q,l,s);if($&&s&&"function"==typeof q&&"EOL"===q()){return!(!q()||l.cb&&!l.cb(void 0,void 0,void 0))&&q()}var G=void 0,U=void 0;A($)&&A(n[$+q.length-1])&&(U=n[G=$+q.length],I(n[G])&&R(n[G+1])&&(U=n[G]+n[G+1]));var z=void 0;if(A(G)&&G>=0&&(z=n.slice(G)),!1!==$&&(!l.cb||l.cb(U,z,G)))return q}return!1}t.matchLeft=function(t,e,r,n){return P("matchLeft",t,e,r,n)},t.matchLeftIncl=function(t,e,r,n){return P("matchLeftIncl",t,e,r,n)},t.matchRight=function(t,e,r,n){return P("matchRight",t,e,r,n)},t.matchRightIncl=function(t,e,r,n){return P("matchRightIncl",t,e,r,n)},Object.defineProperty(t,"__esModule",{value:!0})}));
