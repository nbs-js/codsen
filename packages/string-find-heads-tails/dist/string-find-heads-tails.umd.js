/**
 * @name string-find-heads-tails
 * @fileoverview Finds where are arbitrary templating marker heads and tails located
 * @version 4.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-find-heads-tails/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).stringFindHeadsTails={})}(this,(function(t){"use strict";
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 3.14.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */function e(t){return"string"==typeof t?t.length?[t]:[]:t}
/**
 * @name string-match-left-right
 * @fileoverview Match substrings on the left or right of a given index, ignoring whitespace
 * @version 7.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-match-left-right/}
 */function r(t){return t&&"object"==typeof t&&!Array.isArray(t)}function n(t){return"string"==typeof t}const i={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},a=t=>t+1;function s(t,e,r,n,s=!1,o=a){const h="function"==typeof r?r():r;if(+e<0&&s&&"EOL"===h)return h;const l={...i,...n};if(e>=t.length&&!s)return!1;let f=s?1:r.length,u=0,c=!1,g=!1,d=!1,m=l.maxMismatches,y=e,p=!1,w=!1,$=!1;function b(){return 1===u&&m<l.maxMismatches-1}for(;t[y];){const e=o(y);if(l.trimBeforeMatching&&""===t[y].trim()){if(!t[e]&&s&&"EOL"===r)return!0;y=o(y);continue}if(l&&!l.i&&l.trimCharsBeforeMatching&&l.trimCharsBeforeMatching.includes(t[y])||l&&l.i&&l.trimCharsBeforeMatching&&l.trimCharsBeforeMatching.map((t=>t.toLowerCase())).includes(t[y].toLowerCase())){if(s&&"EOL"===r&&!t[e])return!0;y=o(y);continue}const n=e>y?r[r.length-f]:r[f-1];if(!l.i&&t[y]===n||l.i&&t[y].toLowerCase()===n.toLowerCase()){if(p||(p=!0),d||(d=!0),f===r.length){if(w=!0,m!==l.maxMismatches)return!1}else 1===f&&($=!0);if(f-=1,u++,b())return!1;if(!f)return(u!==r.length||m===l.maxMismatches||!c)&&y}else{if(c||u||(c=!0),!(l.maxMismatches&&m&&y))return!(0!==y||1!==f||l.lastMustMatch||!d)&&0;m-=1;for(let n=0;n<=m;n++){const i=e>y?r[r.length-f+1+n]:r[f-2-n],a=t[o(y)];if(i&&(!l.i&&t[y]===i||l.i&&t[y].toLowerCase()===i.toLowerCase())&&(!l.firstMustMatch||f!==r.length)){if(u++,b())return!1;f-=2,p=!0;break}if(a&&i&&(!l.i&&a===i||l.i&&a.toLowerCase()===i.toLowerCase())&&(!l.firstMustMatch||f!==r.length)){if(!u&&!l.hungry)return!1;f-=1,p=!0;break}if(void 0===i&&m>=0&&p&&(!l.firstMustMatch||w)&&(!l.lastMustMatch||$))return y}p||(g=y)}if(!1!==g&&g!==y&&(g=!1),f<1)return y;y=o(y)}return f>0?!(!s||"EOL"!==h)||!!(l&&l.maxMismatches>=f&&d)&&(g||0):void 0}function o(t,a,o,h){return function(t,a,o,h,l){if(r(l)&&Object.prototype.hasOwnProperty.call(l,"trimBeforeMatching")&&"boolean"!=typeof l.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(l.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const f={...i,...l};if("string"==typeof f.trimCharsBeforeMatching&&(f.trimCharsBeforeMatching=e(f.trimCharsBeforeMatching)),f.trimCharsBeforeMatching=f.trimCharsBeforeMatching.map((t=>n(t)?t:String(t))),!n(a))return!1;if(!a.length)return!1;if(!Number.isInteger(o)||o<0)throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);let u,c;if(n(h))u=[h];else if(Array.isArray(h))u=h;else if(h){if("function"!=typeof h)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof h}, equal to:\n${JSON.stringify(h,null,4)}`);u=[],u.push(h)}else u=h;if(l&&!r(l))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof l}", and equal to:\n${JSON.stringify(l,null,4)}`);let g=0,d="";if(f&&f.trimCharsBeforeMatching&&f.trimCharsBeforeMatching.some(((t,e)=>t.length>1&&(g=e,d=t,!0))))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${g} is longer than 1 character, ${d.length} (equals to ${d}). Please split it into separate characters and put into array as separate elements.`);if(!u||!Array.isArray(u)||Array.isArray(u)&&!u.length||Array.isArray(u)&&1===u.length&&n(u[0])&&!u[0].trim()){if("function"==typeof f.cb){let e,r=o;if("matchLeftIncl"!==t&&"matchRight"!==t||(r+=1),"L"===t[5])for(let t=r;t--;){const r=a[t];if((!f.trimBeforeMatching||f.trimBeforeMatching&&void 0!==r&&r.trim())&&(!f.trimCharsBeforeMatching||!f.trimCharsBeforeMatching.length||void 0!==r&&!f.trimCharsBeforeMatching.includes(r))){e=t;break}}else if(t.startsWith("matchRight"))for(let t=r;t<a.length;t++){const r=a[t];if((!f.trimBeforeMatching||f.trimBeforeMatching&&r.trim())&&(!f.trimCharsBeforeMatching||!f.trimCharsBeforeMatching.length||!f.trimCharsBeforeMatching.includes(r))){e=t;break}}if(void 0===e)return!1;const n=a[e],i=e+1;let s="";return i&&i>0&&(s=a.slice(0,i)),"L"===t[5]||e&&e>0&&(s=a.slice(e)),f.cb(n,s,e)}let e="";throw l||(e=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${e}`)}for(let e=0,r=u.length;e<r;e++){c="function"==typeof u[e];const r=u[e];let n,i,h="",l=o;"matchRight"===t?l+=1:"matchLeft"===t&&(l-=1);const g=s(a,l,r,f,c,(e=>"L"===t[5]?e-1:e+1));if(g&&c&&"function"==typeof r&&"EOL"===r())return!(!r()||f.cb&&!f.cb(n,h,i))&&r();if(Number.isInteger(g)&&(i=t.startsWith("matchLeft")?g-1:g+1,h="L"===t[5]?a.slice(0,g):a.slice(i)),i<0&&(i=void 0),a[i]&&(n=a[i]),Number.isInteger(g)&&(!f.cb||f.cb(n,h,i)))return r}return!1}("matchRightIncl",t,a,o,h)}function h(t){return"string"==typeof t}const l={fromIndex:0,throwWhenSomethingWrongIsDetected:!0,allowWholeValueToBeOnlyHeadsOrTails:!0,source:"string-find-heads-tails",matchHeadsAndTailsStrictlyInPairsByTheirOrder:!1,relaxedAPI:!1};t.defaults=l,t.strFindHeadsTails=function(t,r,n,i){if(i&&(!(a=i)||"object"!=typeof a||Array.isArray(a)))throw new TypeError(`string-find-heads-tails: [THROW_ID_01] the fourth input argument, an Optional Options Object, must be a plain object! Currently it's equal to: ${i} (type: ${typeof i})`);var a;const s={...l,...i};if("string"==typeof s.fromIndex&&/^\d*$/.test(s.fromIndex))s.fromIndex=Number(s.fromIndex);else if(!Number.isInteger(s.fromIndex)||s.fromIndex<0)throw new TypeError(`${s.source} [THROW_ID_18] the fourth input argument must be a natural number or zero! Currently it's: ${s.fromIndex}`);if(!h(t)||0===t.length){if(s.relaxedAPI)return[];throw new TypeError(`string-find-heads-tails: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ${typeof t}, equal to: ${t}`)}let f,u;if("string"!=typeof r&&!Array.isArray(r)){if(s.relaxedAPI)return[];throw new TypeError(`string-find-heads-tails: [THROW_ID_03] the second input argument, heads, must be either a string or an array of strings! Currently it's: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`)}if("string"==typeof r){if(0===r.length){if(s.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_04] the second input argument, heads, must be a non-empty string! Currently it's empty.")}r=e(r)}else if(Array.isArray(r)){if(0===r.length){if(s.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_05] the second input argument, heads, must be a non-empty array and contain at least one string! Currently it's empty.")}if(r.every(((t,e)=>(f=t,u=e,h(t))))){if(!r.every(((t,e)=>(u=e,h(t)&&t.length>0&&""!==t.trim())))){if(!s.relaxedAPI)throw new TypeError(`string-find-heads-tails: [THROW_ID_07] the second input argument, heads, should not contain empty strings! For example, there's one detected at index ${u} of heads array:\n${JSON.stringify(r,null,4)}.`);if(0===(r=r.filter((t=>h(t)&&t.length>0))).length)return[]}}else{if(!s.relaxedAPI)throw new TypeError(`string-find-heads-tails: [THROW_ID_06] the second input argument, heads, contains non-string elements! For example, element at ${u}th index is ${typeof f}, equal to:\n${JSON.stringify(f,null,4)}. Whole heads array looks like:\n${JSON.stringify(r,null,4)}`);if(0===(r=r.filter((t=>h(t)&&t.length>0))).length)return[]}}if(!h(n)&&!Array.isArray(n)){if(s.relaxedAPI)return[];throw new TypeError(`string-find-heads-tails: [THROW_ID_08] the third input argument, tails, must be either a string or an array of strings! Currently it's: ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`)}if(h(n)){if(0===n.length){if(s.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_09] the third input argument, tails, must be a non-empty string! Currently it's empty.")}n=e(n)}else if(Array.isArray(n)){if(0===n.length){if(s.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_10] the third input argument, tails, must be a non-empty array and contain at least one string! Currently it's empty.")}if(n.every(((t,e)=>(f=t,u=e,h(t))))){if(!n.every(((t,e)=>(u=e,h(t)&&t.length>0&&""!==t.trim())))){if(!s.relaxedAPI)throw new TypeError(`string-find-heads-tails: [THROW_ID_12] the third input argument, tails, should not contain empty strings! For example, there's one detected at index ${u}. Whole tails array is equal to:\n${JSON.stringify(n,null,4)}`);if(0===(n=n.filter((t=>h(t)&&t.length>0))).length)return[]}}else{if(!s.relaxedAPI)throw new TypeError(`string-find-heads-tails: [THROW_ID_11] the third input argument, tails, contains non-string elements! For example, element at ${u}th index is ${typeof f}, equal to:\n${JSON.stringify(f,null,4)}. Whole tails array is equal to:\n${JSON.stringify(n,null,4)}`);if(0===(n=n.filter((t=>h(t)&&t.length>0))).length)return[]}}const c=s.source===l.source;if(s.throwWhenSomethingWrongIsDetected&&!s.allowWholeValueToBeOnlyHeadsOrTails){if(e(r).includes(t))throw new Error(`${s.source}${c?": [THROW_ID_16]":""} the whole input string can't be equal to ${h(r)?"":"one of "}heads (${t})!`);if(e(n).includes(t))throw new Error(`${s.source}${c?": [THROW_ID_17]":""} the whole input string can't be equal to ${h(n)?"":"one of "}tails (${t})!`)}const g=r.concat(n).map((t=>t.charAt(0))).reduce(((t,e)=>e.charCodeAt(0)>t[1]?[t[0],e.charCodeAt(0)]:e.charCodeAt(0)<t[0]?[e.charCodeAt(0),t[1]]:t),[r[0].charCodeAt(0),r[0].charCodeAt(0)]),d=[];let m,y=!1,p={},w="";for(let e=s.fromIndex,i=t.length;e<i;e++){const a=t[e].charCodeAt(0);if(a<=g[1]&&a>=g[0]){const a=o(t,e,r);if(a&&s.matchHeadsAndTailsStrictlyInPairsByTheirOrder)for(let t=r.length;t--;)if(r[t]===a){m=t;break}if("string"==typeof a){if(!y){p={},p.headsStartAt=e,p.headsEndAt=e+a.length,y=!0,e+=a.length-1,w&&(w="");continue}if(s.throwWhenSomethingWrongIsDetected)throw new TypeError(`${s.source}${c?": [THROW_ID_19]":""} When processing "${t}", we found heads (${t.slice(e,e+a.length)}) starting at character with index number "${e}" and there was another set of heads before it! Generally speaking, there should be "heads-tails-heads-tails", not "heads-heads-tails"!\nWe're talking about the area of the code:\n\n\n--------------------------------------starts\n${t.slice(Math.max(e-200,0),e)}\n      [33m-------\x3e[39m [31m${t.slice(e,e+a.length)}[39m [33m<-------[39m\n${t.slice(e+a.length,Math.min(i,e+200))}\n--------------------------------------ends\n\n\nTo turn off this error being thrown, set opts.throwWhenSomethingWrongIsDetected to Boolean false.`)}const h=o(t,e,n);if(y&&h&&s.matchHeadsAndTailsStrictlyInPairsByTheirOrder&&void 0!==m&&void 0!==n[m]&&n[m]!==h){let e;for(let t=n.length;t--;)if(n[t]===h){e=t;break}throw new TypeError(`${s.source}${c?": [THROW_ID_20]":""} When processing "${t}", we had "opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder" on. We found heads (${r[m]}) but the tails the followed it were not of the same index, ${m} (${n[m]}) but ${e} (${h}).`)}if("string"==typeof h){if(y){p.tailsStartAt=e,p.tailsEndAt=e+h.length,d.push(p),p={},y=!1,e+=h.length-1;continue}s.throwWhenSomethingWrongIsDetected&&(w=`${s.source}${c?": [THROW_ID_21]":""} When processing "${t}", we found tails (${t.slice(e,e+h.length)}) starting at character with index number "${e}" but there were no heads preceding it. That's very naughty!`)}}if(s.throwWhenSomethingWrongIsDetected&&e===i-1){if(0!==Object.keys(p).length)throw new TypeError(`${s.source}${c?": [THROW_ID_22]":""} When processing "${t}", we reached the end of the string and yet didn't find any tails (${JSON.stringify(n,null,4)}) to match the last detected heads (${t.slice(p.headsStartAt,p.headsEndAt)})!`);if(w)throw new Error(w)}}return d},t.version="4.1.0",Object.defineProperty(t,"__esModule",{value:!0})}));
