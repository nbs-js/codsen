/**
 * string-match-left-right
 * Match substrings on the left or right of a given index, ignoring whitespace
 * Version: 5.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-match-left-right/
 */

import{arrayiffy as t}from"arrayiffy-if-string";function r(t){return t&&"object"==typeof t&&!Array.isArray(t)}function e(t){return"string"==typeof t}const i={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1};function n(t,r,e,i,n,a){const o="function"==typeof e?e():e;if(0>r&&n&&"EOL"===o)return o;if(r>=t.length&&!n)return!1;let s=n?1:e.length,h=!1,c=!1,f=i.maxMismatches,l=r,g=!1,u=!1,m=!1;for(;t[l];){const r=a(l);if(i.trimBeforeMatching&&""===t[l].trim()){if(!t[r]&&n&&"EOL"===e)return!0;l=a(l);continue}if(i&&!i.i&&i.trimCharsBeforeMatching&&i.trimCharsBeforeMatching.includes(t[l])||i&&i.i&&i.trimCharsBeforeMatching&&i.trimCharsBeforeMatching.map((t=>t.toLowerCase())).includes(t[l].toLowerCase())){if(n&&"EOL"===e&&!t[r])return!0;l=a(l);continue}const o=r>l?e[e.length-s]:e[s-1];if(!i.i&&t[l]===o||i.i&&t[l].toLowerCase()===o.toLowerCase()){if(g||(g=!0),c||(c=!0),s===e.length?u=!0:1===s&&(m=!0),s-=1,1>s)return l}else{if(!(i.maxMismatches&&f&&l))return!(0!==l||1!==s||i.lastMustMatch||!c)&&0;f-=1;for(let n=0;f>=n;n++){const o=r>l?e[e.length-s+1+n]:e[s-2-n],h=t[a(l)];if(o&&(!i.i&&t[l]===o||i.i&&t[l].toLowerCase()===o.toLowerCase())&&(!i.firstMustMatch||s!==e.length)){s-=2,g=!0;break}if(h&&o&&(!i.i&&h===o||i.i&&h.toLowerCase()===o.toLowerCase())&&(!i.firstMustMatch||s!==e.length)){s-=1,g=!0;break}if(void 0===o&&f>=0&&g&&(!i.firstMustMatch||u)&&(!i.lastMustMatch||m))return l}g||(h=l)}if(!1!==h&&h!==l&&(h=!1),1>s)return l;l=a(l)}return s>0?!(!n||"EOL"!==o)||!(!i||s>i.maxMismatches||!c)&&(h||0):void 0}function a(a,o,s,h,c){if(r(c)&&Object.prototype.hasOwnProperty.call(c,"trimBeforeMatching")&&"boolean"!=typeof c.trimBeforeMatching)throw Error(`string-match-left-right/${a}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(c.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const f={...i,...c};if(f.trimCharsBeforeMatching=t(f.trimCharsBeforeMatching)||[],f.trimCharsBeforeMatching=f.trimCharsBeforeMatching.map((t=>e(t)?t:t+"")),!e(o))return!1;if(!o.length)return!1;if(!Number.isInteger(s)||0>s)throw Error(`string-match-left-right/${a}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`);let l,g;if(e(h))l=[h];else if(Array.isArray(h))l=h;else if(h){if("function"!=typeof h)throw Error(`string-match-left-right/${a}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof h}, equal to:\n${JSON.stringify(h,null,4)}`);l=[],l.push(h)}else l=h;if(c&&!r(c))throw Error(`string-match-left-right/${a}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof c}", and equal to:\n${JSON.stringify(c,null,4)}`);let u=0,m="";if(f&&f.trimCharsBeforeMatching&&f.trimCharsBeforeMatching.some(((t,r)=>t.length>1&&(u=r,m=t,!0))))throw Error(`string-match-left-right/${a}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${u} is longer than 1 character, ${m.length} (equals to ${m}). Please split it into separate characters and put into array as separate elements.`);if(!l||!Array.isArray(l)||Array.isArray(l)&&!l.length||Array.isArray(l)&&1===l.length&&e(l[0])&&!l[0].trim()){if("function"==typeof f.cb){let t,r=s;if("matchLeftIncl"!==a&&"matchRight"!==a||(r+=1),"L"===a[5])for(let e=r;e--;){const r=o[e];if((!f.trimBeforeMatching||f.trimBeforeMatching&&void 0!==r&&r.trim())&&(!f.trimCharsBeforeMatching||!f.trimCharsBeforeMatching.length||void 0!==r&&!f.trimCharsBeforeMatching.includes(r))){t=e;break}}else if(a.startsWith("matchRight"))for(let e=r;o.length>e;e++){const r=o[e];if((!f.trimBeforeMatching||f.trimBeforeMatching&&r.trim())&&(!f.trimCharsBeforeMatching||!f.trimCharsBeforeMatching.length||!f.trimCharsBeforeMatching.includes(r))){t=e;break}}if(void 0===t)return!1;const e=o[t],i=t+1;let n="";return i&&i>0&&(n=o.slice(0,i)),"L"===a[5]?f.cb(e,n,t):(t&&t>0&&(n=o.slice(t)),f.cb(e,n,t))}let t="";throw c||(t=" More so, the whole options object, the fourth input argument, is missing!"),Error(`string-match-left-right/${a}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${t}`)}for(let t=0,r=l.length;r>t;t++){g="function"==typeof l[t];const r=l[t];let e,i,h="",c=s;"matchRight"===a?c+=1:"matchLeft"===a&&(c-=1);const u=n(o,c,r,f,g,(t=>"L"===a[5]?t-1:t+1));if(u&&g&&"function"==typeof r&&"EOL"===r())return!(!r()||f.cb&&!f.cb(e,h,i))&&r();if(Number.isInteger(u)&&(i=a.startsWith("matchLeft")?u-1:u+1,h="L"===a[5]?o.slice(0,u):o.slice(i)),0>i&&(i=void 0),o[i]&&(e=o[i]),Number.isInteger(u)&&(!f.cb||f.cb(e,h,i)))return r}return!1}function o(t,r,e,i){return a("matchLeftIncl",t,r,e,i)}function s(t,r,e,i){return a("matchLeft",t,r,e,i)}function h(t,r,e,i){return a("matchRightIncl",t,r,e,i)}function c(t,r,e,i){return a("matchRight",t,r,e,i)}export{s as matchLeft,o as matchLeftIncl,c as matchRight,h as matchRightIncl};