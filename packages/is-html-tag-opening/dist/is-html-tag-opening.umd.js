/**
 * is-html-tag-opening
 * Is given opening bracket a beginning of a tag?
 * Version: 1.1.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-tag-opening
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).isHtmlTagOpening=e()}(this,(function(){"use strict";var t=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},e="[object Object]";var r,n,i=Function.prototype,o=Object.prototype,a=i.toString,c=o.hasOwnProperty,s=a.call(Object),l=o.toString,f=(r=Object.getPrototypeOf,n=Object,function(t){return r(n(t))});var h=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||l.call(t)!=e||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var r=f(t);if(null===r)return!0;var n=c.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==s},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g="[object AsyncFunction]",d="[object Function]",p="[object GeneratorFunction]",m="[object Null]",b="[object Proxy]",y="[object Undefined]",w="object"==typeof u&&u&&u.Object===Object&&u,O="object"==typeof self&&self&&self.Object===Object&&self,v=w||O||Function("return this")(),C=Object.prototype,j=C.hasOwnProperty,$=C.toString,M=v.Symbol,B=M?M.toStringTag:void 0;function E(t){return null==t?void 0===t?y:m:B&&B in Object(t)?function(t){var e=j.call(t,B),r=t[B];try{t[B]=void 0;var n=!0}catch(t){}var i=$.call(t);n&&(e?t[B]=r:delete t[B]);return i}(t):function(t){return $.call(t)}(t)}var L=function(t){if(!function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}(t))return!1;var e=E(t);return e==d||e==p||e==g||e==b};function T(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function _(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}const S=Array.isArray;function x(t){return null!=t}function A(t){return"string"==typeof t}function I(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function R(t,e,r,n,i){const o="function"==typeof r?r():r;if(e>=t.length&&i&&"EOL"===o)return o;if(!(e<=t.length)){if(n.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${e} beyond the input string length, ${t.length}.`)}{let a=i?1:r.length;for(let i=e,o=t.length;i<o;i++){let e=t[i];if(T(t[i])&&_(t[i+1])&&(e=t[i]+t[i+1]),_(t[i])&&T(t[i-1])&&(e=t[i-1]+t[i]),n.trimBeforeMatching&&""===t[i].trim())continue;if(!n.i&&n.trimCharsBeforeMatching.includes(e)||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){2===e.length&&(i+=1);continue}let o=r[r.length-a];if(T(o)&&x(r[r.length-a+1])&&_(r[r.length-a+1])&&(o=r[r.length-a]+r[r.length-a+1]),!(!n.i&&e===o||n.i&&e.toLowerCase()===o.toLowerCase()))return!1;if((a-=e.length)<1){let n=i-r.length+e.length;return n>=0&&_(t[n])&&x(t[n-1])&&T(t[n-1])&&(n-=1),n>=0?n:0}2===e.length&&T(t[i])&&(i+=1)}if(a>0)return!(!i||"EOL"!==o)}}function W(t,e,r,n,i){const o="function"==typeof r?r():r;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length){if(n.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${t.length} but the second argument is beyond it:\n${JSON.stringify(e,null,4)}`)}let a=i?1:r.length;for(let o=e+1;o--;){if(n.trimBeforeMatching&&""===t[o].trim()){if(0===o&&i&&"EOL"===r)return!0;continue}let e=t[o];if(_(t[o])&&T(t[o-1])?e=t[o-1]+t[o]:T(t[o])&&_(t[o+1])&&(e=t[o]+t[o+1]),!n.i&&n.trimCharsBeforeMatching.includes(e)||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){if(2===e.length&&(o-=1),i&&"EOL"===r&&0===o)return!0;continue}let c=r[a-1];if(_(c)&&(c=`${r[a-2]}${r[a-1]}`,a-=1,o-=1),!(!n.i&&e===c||n.i&&e.toLowerCase()===c.toLowerCase()))return!1;if((a-=1)<1)return o>=0?o:0}return a>0?!(!i||"EOL"!==o):void 0}function k(e,r,n,i){return function(e,r,n,i,o){const a=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},o);var c;let s,l,f,u;if(a.trimCharsBeforeMatching="string"==typeof(c=a.trimCharsBeforeMatching)?c.length>0?[c]:[]:c,a.trimCharsBeforeMatching=a.trimCharsBeforeMatching.map(t=>A(t)?t:String(t)),a.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!I(t)&&(s=e,l=t,!0)))throw new Error(`string-match-left-right/${e}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${s} is longer than 1 character, ${l.length} (equals to ${l}). Please split it into separate characters and put into array as separate elements.`);if(!A(r)){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/${e}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`)}if(0===r.length){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/${e}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!t(n,{includeZero:!0})){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/${e}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`)}if(A(i))f=[i];else if(S(i))f=i;else if(x(i)){if(!L(i))throw new Error(`string-match-left-right/${e}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof i}, equal to:\n${JSON.stringify(i,null,4)}`);(f=[]).push(i)}else f=i;if(x(o)&&!h(o))throw new Error(`string-match-left-right/${e}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof o}", and equal to:\n${JSON.stringify(o,null,4)}`);if(!x(f)||!S(f)||S(f)&&!f.length||S(f)&&1===f.length&&A(f[0])&&0===f[0].trim().length){if("function"==typeof a.cb){let t,i=n;if("matchRight"===e&&T(r[n])&&_(r[n+1])&&(i+=1),"matchLeftIncl"!==e&&"matchRight"!==e||(i+=1),e.startsWith("matchLeft"))for(let e=i;e--;){if(_(r[e])&&T(r[e-1]))continue;let n=r[e];if(T(r[e])&&_(r[e+1])&&(n=r[e]+r[e+1]),(!a.trimBeforeMatching||a.trimBeforeMatching&&void 0!==n&&""!==n.trim())&&(0===a.trimCharsBeforeMatching.length||void 0!==n&&!a.trimCharsBeforeMatching.includes(n))){t=e;break}_(r[e-1])&&T(r[e-2])&&(e-=1)}else if(e.startsWith("matchRight"))for(let e=i;e<r.length;e++){let n=r[e];if(T(r[e])&&_(r[e+1])&&(n=r[e]+r[e+1]),(!a.trimBeforeMatching||a.trimBeforeMatching&&""!==n.trim())&&(0===a.trimCharsBeforeMatching.length||!a.trimCharsBeforeMatching.includes(n))){t=e;break}T(r[e])&&_(r[e+1])&&(e+=1)}if(void 0===t)return!1;let o=r[t];T(r[t])&&_(r[t+1])&&(o=r[t]+r[t+1]),_(r[t])&&T(r[t-1])&&(o=r[t-1]+r[t],t-=1);let c,s=t+1;return T(r[t])&&_(r[t+1])&&(s+=1),s&&s>0&&(c=r.slice(0,s)),e.startsWith("matchLeft")?a.cb(o,c,t):(t&&t>0&&(c=r.slice(t)),a.cb(o,c,t))}let t="";throw x(o)||(t=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${e}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${t}`)}if(e.startsWith("matchLeft")){for(let t=0,i=f.length;t<i;t++){u="function"==typeof f[t];const i=f[t];let o=n;"matchLeft"===e&&(I(r[t-1])&&I(r[t-2])?o-=2:o-=1);const c=W(r,o,i,a,u);if(c&&u&&"function"==typeof i&&"EOL"===i())return!(!i()||a.cb&&!a.cb(l,h,s))&&i();let s,l,h="";if(x(c)&&c>0&&(l=r[s=c-1],h=r.slice(0,c)),_(r[s])&&x(r[s-1])&&T(r[s-1])&&(l=r[(s-=1)-1]+r[s]),T(r[s])&&x(r[s+1])&&_(r[s+1])&&(l=r[s]+r[s+1],h=r.slice(0,s+2)),!1!==c&&(!a.cb||a.cb(l,h,s)))return i}return!1}for(let t=0,i=f.length;t<i;t++){u="function"==typeof f[t];const i=f[t];let o=n+("matchRight"===e?1:0);"matchRight"===e&&T(r[o-1])&&_(r[o])&&(o+=1);const c=R(r,o,i,a,u);if(c&&u&&"function"==typeof i&&"EOL"===i()){let t,e,r;return!(!i()||a.cb&&!a.cb(t,e,r))&&i()}let s,l,h;if(x(c)&&x(r[c+i.length-1])&&(l=r[s=c+i.length],T(r[s])&&_(r[s+1])&&(l=r[s]+r[s+1])),x(s)&&s>=0&&(h=r.slice(s)),!1!==c&&(!a.cb||a.cb(l,h,s)))return i}return!1}("matchRight",e,r,n,i)}var H=["abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"];function D(t){return void 0===t||"string"==typeof t&&""===t.trim()}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e?t.slice(e):t,n=!1;return/^<\s*\w+\s*\/?\s*>/g.test(r)?n=!0:/^<\s*\w+\s+\w+\s*=\s*['"]/g.test(r)?n=!0:/^<\s*\/?\s*\w+\s*\/?\s*>/g.test(r)?n=!0:/^<\s*\w+(?:\s*\w+)*\s*\w+=['"]/g.test(r)?n=!0:"<"===t[e]&&t[e+1]&&t[e+1].trim().length&&k(t,e,H,{cb:D})&&(n=!0),"string"==typeof t&&e<t.length&&n}}));
