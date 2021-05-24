/**
 * @name string-remove-duplicate-heads-tails
 * @fileoverview Detect and (recursively) remove head and tail wrappings around the input string
 * @version 5.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-remove-duplicate-heads-tails/}
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).stringRemoveDuplicateHeadsTails={})}(this,(function(e){"use strict";var t,r,n=Object.prototype,i=Function.prototype.toString,s=n.hasOwnProperty,a=i.call(Object),o=n.toString,l=(t=Object.getPrototypeOf,r=Object,function(e){return t(r(e))});var h=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=o.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=l(e);if(null===t)return!0;var r=s.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&i.call(r)==a};
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 3.14.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */function g(e){return"string"==typeof e?e.length?[e]:[]:e}
/**
 * @name string-match-left-right
 * @fileoverview Match substrings on the left or right of a given index, ignoring whitespace
 * @version 7.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-match-left-right/}
 */function f(e){return e&&"object"==typeof e&&!Array.isArray(e)}function u(e){return"string"==typeof e}const c={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},p=e=>e+1;function y(e,t,r,n,i=!1,s=p){const a="function"==typeof r?r():r;if(+t<0&&i&&"EOL"===a)return a;const o={...c,...n};if(t>=e.length&&!i)return!1;let l=i?1:r.length,h=0,g=!1,f=!1,u=!1,y=o.maxMismatches,m=t,d=!1,w=!1,T=!1;function b(){return 1===h&&y<o.maxMismatches-1}for(;e[m];){const t=s(m);if(o.trimBeforeMatching&&""===e[m].trim()){if(!e[t]&&i&&"EOL"===r)return!0;m=s(m);continue}if(o&&!o.i&&o.trimCharsBeforeMatching&&o.trimCharsBeforeMatching.includes(e[m])||o&&o.i&&o.trimCharsBeforeMatching&&o.trimCharsBeforeMatching.map((e=>e.toLowerCase())).includes(e[m].toLowerCase())){if(i&&"EOL"===r&&!e[t])return!0;m=s(m);continue}const n=t>m?r[r.length-l]:r[l-1];if(!o.i&&e[m]===n||o.i&&e[m].toLowerCase()===n.toLowerCase()){if(d||(d=!0),u||(u=!0),l===r.length){if(w=!0,y!==o.maxMismatches)return!1}else 1===l&&(T=!0);if(l-=1,h++,b())return!1;if(!l)return(h!==r.length||y===o.maxMismatches||!g)&&m}else{if(g||h||(g=!0),!(o.maxMismatches&&y&&m))return!(0!==m||1!==l||o.lastMustMatch||!u)&&0;y-=1;for(let n=0;n<=y;n++){const i=t>m?r[r.length-l+1+n]:r[l-2-n],a=e[s(m)];if(i&&(!o.i&&e[m]===i||o.i&&e[m].toLowerCase()===i.toLowerCase())&&(!o.firstMustMatch||l!==r.length)){if(h++,b())return!1;l-=2,d=!0;break}if(a&&i&&(!o.i&&a===i||o.i&&a.toLowerCase()===i.toLowerCase())&&(!o.firstMustMatch||l!==r.length)){if(!h&&!o.hungry)return!1;l-=1,d=!0;break}if(void 0===i&&y>=0&&d&&(!o.firstMustMatch||w)&&(!o.lastMustMatch||T))return m}d||(f=m)}if(!1!==f&&f!==m&&(f=!1),l<1)return m;m=s(m)}return l>0?!(!i||"EOL"!==a)||!!(o&&o.maxMismatches>=l&&u)&&(f||0):void 0}function m(e,t,r,n,i){if(f(i)&&Object.prototype.hasOwnProperty.call(i,"trimBeforeMatching")&&"boolean"!=typeof i.trimBeforeMatching)throw new Error(`string-match-left-right/${e}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(i.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const s={...c,...i};if("string"==typeof s.trimCharsBeforeMatching&&(s.trimCharsBeforeMatching=g(s.trimCharsBeforeMatching)),s.trimCharsBeforeMatching=s.trimCharsBeforeMatching.map((e=>u(e)?e:String(e))),!u(t))return!1;if(!t.length)return!1;if(!Number.isInteger(r)||r<0)throw new Error(`string-match-left-right/${e}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);let a,o;if(u(n))a=[n];else if(Array.isArray(n))a=n;else if(n){if("function"!=typeof n)throw new Error(`string-match-left-right/${e}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);a=[],a.push(n)}else a=n;if(i&&!f(i))throw new Error(`string-match-left-right/${e}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof i}", and equal to:\n${JSON.stringify(i,null,4)}`);let l=0,h="";if(s&&s.trimCharsBeforeMatching&&s.trimCharsBeforeMatching.some(((e,t)=>e.length>1&&(l=t,h=e,!0))))throw new Error(`string-match-left-right/${e}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${l} is longer than 1 character, ${h.length} (equals to ${h}). Please split it into separate characters and put into array as separate elements.`);if(!a||!Array.isArray(a)||Array.isArray(a)&&!a.length||Array.isArray(a)&&1===a.length&&u(a[0])&&!a[0].trim()){if("function"==typeof s.cb){let n,i=r;if("matchLeftIncl"!==e&&"matchRight"!==e||(i+=1),"L"===e[5])for(let e=i;e--;){const r=t[e];if((!s.trimBeforeMatching||s.trimBeforeMatching&&void 0!==r&&r.trim())&&(!s.trimCharsBeforeMatching||!s.trimCharsBeforeMatching.length||void 0!==r&&!s.trimCharsBeforeMatching.includes(r))){n=e;break}}else if(e.startsWith("matchRight"))for(let e=i;e<t.length;e++){const r=t[e];if((!s.trimBeforeMatching||s.trimBeforeMatching&&r.trim())&&(!s.trimCharsBeforeMatching||!s.trimCharsBeforeMatching.length||!s.trimCharsBeforeMatching.includes(r))){n=e;break}}if(void 0===n)return!1;const a=t[n],o=n+1;let l="";return o&&o>0&&(l=t.slice(0,o)),"L"===e[5]?s.cb(a,l,n):(n&&n>0&&(l=t.slice(n)),s.cb(a,l,n))}let n="";throw i||(n=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${e}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${n}`)}for(let n=0,i=a.length;n<i;n++){o="function"==typeof a[n];const i=a[n];let l,h,g="",f=r;"matchRight"===e?f+=1:"matchLeft"===e&&(f-=1);const u=y(t,f,i,s,o,(t=>"L"===e[5]?t-1:t+1));if(u&&o&&"function"==typeof i&&"EOL"===i())return!(!i()||s.cb&&!s.cb(l,g,h))&&i();if(Number.isInteger(u)&&(h=e.startsWith("matchLeft")?u-1:u+1,g="L"===e[5]?t.slice(0,u):t.slice(h)),h<0&&(h=void 0),t[h]&&(l=t[h]),Number.isInteger(u)&&(!s.cb||s.cb(l,g,h)))return i}return!1}function d(e,t,r,n){return m("matchLeftIncl",e,t,r,n)}function w(e,t,r,n){return m("matchRightIncl",e,t,r,n)}
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 5.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */function T(e,t=1){function r(e){return Array.from(e).reverse().join("")}function n(e,t,r){const n=r?"\n":"\r",i=r?"\r":"\n";if(!e)return e;let s=0,a="";for(let r=0,o=e.length;r<o;r++)(e[r]===n||e[r]===i&&e[r-1]!==n)&&s++,"\r\n".includes(e[r])||" "===e[r]?" "===e[r]?a+=e[r]:e[r]===n?s<=t&&(a+=e[r],e[r+1]===i&&(a+=e[r+1],r++)):e[r]===i&&(!e[r-1]||e[r-1]!==n)&&s<=t&&(a+=e[r]):e[r+1]||s||(a+=" ");return a}if("string"==typeof e&&e.length){let i=1;"number"==typeof+t&&Number.isInteger(+t)&&+t>=0&&(i=+t);let s="",a="";if(e.trim()){if(!e[0].trim())for(let t=0,r=e.length;t<r;t++)if(e[t].trim()){s=e.slice(0,t);break}}else s=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(let t=e.length;t--;)if(e[t].trim()){a=e.slice(t+1);break}return`${n(s,i,!1)}${e.trim()}${r(n(r(a),i,!0))}`}return e}
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 4.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const b={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function O(e,t){if(!Array.isArray(e)||!e.length)return e;const r={...b,...t};let n,i;if(r.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,t)=>2===e.length||(n=t,i=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${i} elements!`);if(!e.filter((e=>e)).every(((e,t)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=t,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const s=e.filter((e=>e)).length**2;let a=0;return Array.from(e).filter((e=>e)).sort(((e,t)=>(r.progressFn&&(a+=1,r.progressFn(Math.floor(100*a/s))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 7.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const M={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function $(e,t){function r(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let n;if(t){if(!r(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(n={...M,...t},n.progressFn&&r(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...M};const i=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let s,a,o;if(s=n.progressFn?O(i,{progressFn:e=>{o=Math.floor(e/5),o!==a&&(a=o,n.progressFn(o))}}):O(i),!s)return null;const l=s.length-1;for(let e=l;e>0;e--)n.progressFn&&(o=Math.floor(78*(1-e/l))+21,o!==a&&o>a&&(a=o,n.progressFn(o))),(s[e][0]<=s[e-1][0]||!n.joinRangesThatTouchEdges&&s[e][0]<s[e-1][1]||n.joinRangesThatTouchEdges&&s[e][0]<=s[e-1][1])&&(s[e-1][0]=Math.min(s[e][0],s[e-1][0]),s[e-1][1]=Math.max(s[e][1],s[e-1][1]),void 0!==s[e][2]&&(s[e-1][0]>=s[e][0]||s[e-1][1]<=s[e][1])&&null!==s[e-1][2]&&(null===s[e][2]&&null!==s[e-1][2]?s[e-1][2]=null:null!=s[e-1][2]?2==+n.mergeType&&s[e-1][0]===s[e][0]?s[e-1][2]=s[e][2]:s[e-1][2]+=s[e][2]:s[e-1][2]=s[e][2]),s.splice(e,1),e=s.length);return s.length?s:null}
/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 5.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */function _(e){return null!=e}function I(e){return Number.isInteger(e)&&e>=0}function A(e){return"string"==typeof e}const R={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1};class E{constructor(e){const t={...R,...e};if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if(A(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!A(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t,this.ranges=[]}add(e,t,r){if(null==e&&null==t)return;if(_(e)&&!_(t)){if(Array.isArray(e)){if(e.length){if(e.some((e=>Array.isArray(e))))return void e.forEach((e=>{Array.isArray(e)&&this.add(...e)}));e.length&&I(+e[0])&&I(+e[1])&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(t,null,0)})`)}if(!_(e)&&_(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const n=+e,i=+t;if(I(r)&&(r=String(r)),!I(n)||!I(i))throw I(n)&&n>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n,null,4)}`);if(_(r)&&!A(r)&&!I(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(_(this.ranges)&&Array.isArray(this.last())&&n===this.last()[1]){if(this.last()[1]=i,this.last(),null!==this.last()[2]&&_(r)){let e=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(e=T(e,this.opts.limitLinebreaksCount)),A(e)&&!e.length||(this.last()[2]=e)}}else{this.ranges||(this.ranges=[]);const e=void 0===r||A(r)&&!r.length?[n,i]:[n,i,r&&this.opts.limitToBeAddedWhitespace?T(r,this.opts.limitLinebreaksCount):r];this.ranges.push(e)}}push(e,t,r){this.add(e,t,r)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=$(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((e=>_(e[2])?[e[0],e[1],T(e[2],this.opts.limitLinebreaksCount)]:e)):this.ranges):null}wipe(){this.ranges=[]}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!I(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.ranges=Array.from(e)}else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}}
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 5.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */
/**
 * @name string-trim-spaces-only
 * @fileoverview Like String.trim() but you can choose granularly what to trim
 * @version 3.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-trim-spaces-only/}
 */
const B={classicTrim:!1,cr:!1,lf:!1,tab:!1,space:!0,nbsp:!1};function v(e,t){if("string"!=typeof e)throw new Error(`string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);const r={...B,...t};function n(e){return r.classicTrim&&!e.trim()||!r.classicTrim&&(r.space&&" "===e||r.cr&&"\r"===e||r.lf&&"\n"===e||r.tab&&"\t"===e||r.nbsp&&" "===e)}let i,s;if(e.length){if(n(e[0]))for(let t=0,r=e.length;t<r;t++){if(!n(e[t])){i=t;break}if(t===e.length-1)return{res:"",ranges:[[0,e.length]]}}if(n(e[e.length-1]))for(let t=e.length;t--;)if(!n(e[t])){s=t+1;break}return i?s?{res:e.slice(i,s),ranges:[[0,i],[s,e.length]]}:{res:e.slice(i),ranges:[[0,i]]}:s?{res:e.slice(0,s),ranges:[[s,e.length]]}:{res:e,ranges:[]}}return{res:"",ranges:[]}}e.defaults={heads:["{{"],tails:["}}"]},e.remDup=function(e,t){const r=Object.prototype.hasOwnProperty;if(void 0===e)throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_01] The input is missing!");if("string"!=typeof e)return e;if(t&&!h(t))throw new Error(`string-remove-duplicate-heads-tails: [THROW_ID_03] The given options are not a plain object but ${typeof t}!`);const n={...t};if(n&&r.call(n,"heads")){if(!g(n.heads).every((e=>"string"==typeof e||Array.isArray(e))))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_04] The opts.heads contains elements which are not string-type!");"string"==typeof n.heads&&(n.heads=g(n.heads))}if(n&&r.call(n,"tails")){if(!g(n.tails).every((e=>"string"==typeof e||Array.isArray(e))))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_05] The opts.tails contains elements which are not string-type!");"string"==typeof n.tails&&(n.tails=g(n.tails))}const i=v(e).res;if(0===i.length)return e;e=i;const s={heads:["{{"],tails:["}}"],...n};s.heads=s.heads.map((e=>e.trim())),s.tails=s.tails.map((e=>e.trim()));let a=!1,o=!1;const l=new E({limitToBeAddedWhitespace:!0}),f=new E({limitToBeAddedWhitespace:!0});let u=!0,c=!0,p="";function y(e,t){let r;if(!w(e,0,t.heads,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)}))return e;return w(e,r,t.tails,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)})?e.slice(r):e}for(;e!==y(e,s);)e=v(y(e,s)).res;function m(e,t){let r;if(!d(e,e.length-1,t.tails,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)})||!r)return e;return d(e,r,t.heads,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)})?e.slice(0,r+1):e}for(;e!==m(e,s);)e=v(m(e,s)).res;if(!(s.heads.length&&w(e,0,s.heads,{trimBeforeMatching:!0})&&s.tails.length&&d(e,e.length-1,s.tails,{trimBeforeMatching:!0})))return v(e).res;for(let t=0,r=e.length;t<r;t++)if(""===e[t].trim());else{let r;if(w(e,t,s.heads,{trimBeforeMatching:!0,cb:(e,t,n)=>(r=n,!0)})&&r){let n;c=!0,u&&(u=!0);w(e,r,s.tails,{trimBeforeMatching:!0,cb:(e,t,r)=>(n=r,!0)})&&l.push(t,n),f.current()&&a&&"tails"!==p&&l.push(f.current()),a||f.current()&&(l.push(f.current()),f.wipe()),f.push(t,r),p="heads",t=r-1;continue}if(w(e,t,s.tails,{trimBeforeMatching:!0,cb:(t,n,i)=>(r=Number.isInteger(i)?i:e.length,!0)})&&r){c=!0,u?("heads"===p&&f.wipe(),u=!1):f.push(t,r),p="tails",t=r-1;continue}u&&(u=!0),c&&!a?(a=!0,c=!1):c&&!o?(o=!0,u=!0,c=!1,"heads"===p&&f.wipe()):c&&o&&f.wipe()}return f.current()&&l.push(f.current()),l.current()?function(e,t,r){let n,i=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(t&&!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!t||!t.filter((e=>e)).length)return e;n=Array.isArray(t)&&Number.isInteger(t[0])&&Number.isInteger(t[1])?[Array.from(t)]:Array.from(t);const a=n.length;let o=0;n.filter((e=>e)).forEach(((e,t)=>{if(r&&(i=Math.floor(o/a*10),i!==s&&(s=i,r(i))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${t}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${t}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);n[t][0]=+n[t][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${t}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);n[t][1]=+n[t][1]}o+=1}));const l=$(n,{progressFn:e=>{r&&(i=10+Math.floor(e/10),i!==s&&(s=i,r(i)))}}),h=Array.isArray(l)?l.length:0;if(h>0){const t=e.slice(l[h-1][1]);e=l.reduce(((t,n,a,o)=>(r&&(i=20+Math.floor(a/h*80),i!==s&&(s=i,r(i))),t+e.slice(0===a?0:o[a-1][1],o[a][0])+(o[a][2]||""))),""),e+=t}return e}(e,l.current()).trim():e.trim()},e.version="5.1.0",Object.defineProperty(e,"__esModule",{value:!0})}));
