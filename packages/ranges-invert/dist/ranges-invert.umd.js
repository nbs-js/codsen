/**
 * @name ranges-invert
 * @fileoverview Invert string index ranges
 * @version 4.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-invert/}
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangesInvert={})}(this,(function(e){"use strict";
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 4.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function n(e,n){if(!Array.isArray(e)||!e.length)return e;const t={...r,...n};let s,o;if(t.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(s=r,o=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${o} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(s=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let a=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(t.progressFn&&(a+=1,t.progressFn(Math.floor(100*a/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 7.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const t={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function s(e,r){function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let o;if(r){if(!s(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(o={...t,...r},o.progressFn&&s(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!=+o.mergeType&&2!=+o.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o={...t};const i=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let a,l,g;if(a=o.progressFn?n(i,{progressFn:e=>{g=Math.floor(e/5),g!==l&&(l=g,o.progressFn(g))}}):n(i),!a)return null;const u=a.length-1;for(let e=u;e>0;e--)o.progressFn&&(g=Math.floor(78*(1-e/u))+21,g!==l&&g>l&&(l=g,o.progressFn(g))),(a[e][0]<=a[e-1][0]||!o.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||o.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:null!=a[e-1][2]?2==+o.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a.length?a:null}
/**
 * @name ranges-crop
 * @fileoverview Crop array of ranges when they go beyond the reference string's length
 * @version 4.1.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-crop/}
 */e.rInvert=function(e,r,n){if(!Array.isArray(e)&&null!==e)throw new TypeError(`ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!Number.isInteger(r)||r<0)throw new TypeError(`ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError(`ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(e,null,0)}!`);if(!Array.isArray(e)||!e.filter((e=>Array.isArray(e)&&e[0]!==e[1])).length||!r)return r?[[0,r]]:null;const t={strictlyTwoElementsInRangeArrays:!1,skipChecks:!1,...n};let o,i,a=0;if(!t.skipChecks&&t.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(a=r,o=e.length,!1))))throw new TypeError(`ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ${a}th range (${JSON.stringify(e[a],null,0)}) has not two but ${o} elements!`);if(!t.skipChecks&&!e.every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(a=r,!1))))throw new TypeError(`ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${a+1}th range (${JSON.stringify(e[a],null,0)}) does not consist of only natural numbers!`);return i=t.skipChecks?e.filter((e=>e[0]!==e[1])):s(e.filter((e=>e[0]!==e[1]))),function(e,r){if(null===e)return null;if(!Array.isArray(e))throw new TypeError(`ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!Number.isInteger(r))throw new TypeError(`ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!e.filter((e=>e)).length)return e.filter((e=>e));let n=0;if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||!Number.isInteger(e[1]))||(n=r,!1)))){if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError(`ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(e,null,0)}!`);throw new TypeError(`ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${n}th range (${JSON.stringify(e[n],null,0)}) does not consist of only natural numbers!`)}if(!e.filter((e=>e)).every(((e,r)=>null==e[2]||"string"==typeof e[2]||(n=r,!1))))throw new TypeError(`ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ${n}th range ${JSON.stringify(e[n],null,0)} has a argument in the range of a type ${typeof e[n][2]}`);const t=(s(e)||[]).filter((e=>e[0]<=r&&(null!=e[2]||e[0]<r))).map((e=>e[1]>r?null!=e[2]?[e[0],r,e[2]]:[e[0],r]:e));return t===[]?null:t}(i.reduce(((e,n,s,o)=>{const i=[];0===s&&0!==o[0][0]&&i.push([0,o[0][0]]);const a=s<o.length-1?o[s+1][0]:r;if(n[1]!==a){if(t.skipChecks&&n[1]>a)throw new TypeError(`ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [${n[1]}, ${a}] which is backwards. For investigation, whole ranges array is:\n${JSON.stringify(o,null,0)}`);i.push([n[1],a])}return e.concat(i)}),[]),r)},e.version="4.1.0",Object.defineProperty(e,"__esModule",{value:!0})}));
