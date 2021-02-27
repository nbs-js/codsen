/**
 * ranges-process-outside
 * Iterate string considering ranges, as if they were already applied
 * Version: 4.0.6
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-process-outside/
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).rangesProcessOutside={})}(this,(function(r){"use strict";var e=55296,n=127995,t=127999,s=[776,2359,2359,2367,2367,2984,3007,3021,3633,3635,3648,3657,4352,4449,4520];function o(r){if("string"!=typeof r)throw new Error("string cannot be undefined or null");for(var e=[],n=0,t=0;n<r.length;)l(r[n+(t+=i(n+t,r))])&&t++,a(r[n+t])&&t++,f(r[n+t])&&t++,g(r[n+t])?t++:(e.push(r.substring(n,n+t)),n+=t,t=0);return e}function i(r,s){var o=s[r];if(!function(r){return r&&y(r[0].charCodeAt(0),e,56319)}(o)||r===s.length-1)return 1;var i=o+s[r+1],a=s.substring(r+2,r+5);return u(i)&&u(a)||function(r){return y(c(r),n,t)}(a)?4:2}function u(r){return y(c(r),127462,127487)}function a(r){return"string"==typeof r&&y(r.charCodeAt(0),65024,65039)}function f(r){return"string"==typeof r&&y(r.charCodeAt(0),8400,8447)}function l(r){return"string"==typeof r&&-1!==s.indexOf(r.charCodeAt(0))}function g(r){return"string"==typeof r&&8205===r.charCodeAt(0)}function c(r){return(r.charCodeAt(0)-e<<10)+(r.charCodeAt(1)-56320)+65536}function y(r,e,n){return r>=e&&r<=n}var p=o;function h(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function m(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function w(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){h(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}p.substr=function(r,e,n){var t=o(r);if(void 0===e)return r;if(e>=t.length)return"";var s=t.length-e,i=e+(void 0===n?s:n);return i>e+s&&(i=void 0),t.slice(e,i).join("")};var d={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function T(r,e){if(!Array.isArray(r)||!r.length)return r;var n,t,s=w(w({},d),e);if(s.strictlyTwoElementsInRangeArrays&&!r.filter((function(r){return r})).every((function(r,e){return 2===r.length||(n=e,t=r.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+n+"th range ("+JSON.stringify(r[n],null,4)+") has not two but "+t+" elements!");if(!r.filter((function(r){return r})).every((function(r,e){return!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(n=e,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+n+"th range ("+JSON.stringify(r[n],null,4)+") does not consist of only natural numbers!");var o=Math.pow(r.filter((function(r){return r})).length,2),i=0;return Array.from(r).filter((function(r){return r})).sort((function(r,e){return s.progressFn&&s.progressFn(Math.floor(100*(i+=1)/o)),r[0]===e[0]?r[1]<e[1]?-1:r[1]>e[1]?1:0:r[0]<e[0]?-1:1}))}var b={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function O(r,e){function n(r){return r&&"object"==typeof r&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var t;if(e){if(!n(e))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(e,null,4)+" (type "+typeof e+")");if((t=w(w({},b),e)).progressFn&&n(t.progressFn)&&!Object.keys(t.progressFn).length)t.progressFn=null;else if(t.progressFn&&"function"!=typeof t.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof t.progressFn+'", equal to '+JSON.stringify(t.progressFn,null,4));if(t.mergeType&&1!=+t.mergeType&&2!=+t.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof t.mergeType+'", equal to '+JSON.stringify(t.mergeType,null,4));if("boolean"!=typeof t.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof t.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(t.joinRangesThatTouchEdges,null,4))}else t=w({},b);var s,o,i,u=r.filter((function(r){return r})).map((function(r){return[].concat(r)})).filter((function(r){return void 0!==r[2]||r[0]!==r[1]}));if(!(s=t.progressFn?T(u,{progressFn:function(r){(i=Math.floor(r/5))!==o&&(o=i,t.progressFn(i))}}):T(u)))return null;for(var a=s.length-1,f=a;f>0;f--)t.progressFn&&(i=Math.floor(78*(1-f/a))+21)!==o&&i>o&&(o=i,t.progressFn(i)),(s[f][0]<=s[f-1][0]||!t.joinRangesThatTouchEdges&&s[f][0]<s[f-1][1]||t.joinRangesThatTouchEdges&&s[f][0]<=s[f-1][1])&&(s[f-1][0]=Math.min(s[f][0],s[f-1][0]),s[f-1][1]=Math.max(s[f][1],s[f-1][1]),void 0!==s[f][2]&&(s[f-1][0]>=s[f][0]||s[f-1][1]<=s[f][1])&&null!==s[f-1][2]&&(null===s[f][2]&&null!==s[f-1][2]?s[f-1][2]=null:null!=s[f-1][2]?2==+t.mergeType&&s[f-1][0]===s[f][0]?s[f-1][2]=s[f][2]:s[f-1][2]+=s[f][2]:s[f-1][2]=s[f][2]),s.splice(f,1),f=s.length);return s.length?s:null}function v(r,e){if(null===r)return null;if(!Array.isArray(r))throw new TypeError("ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(!Number.isInteger(e))throw new TypeError("ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(!r.filter((function(r){return r})).length)return r.filter((function(r){return r}));var n=0;if(!r.filter((function(r){return r})).every((function(r,e){return!(!Number.isInteger(r[0])||!Number.isInteger(r[1]))||(n=e,!1)}))){if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])throw new TypeError("ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = "+JSON.stringify(r,null,0)+"!");throw new TypeError("ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here "+n+"th range ("+JSON.stringify(r[n],null,0)+") does not consist of only natural numbers!")}if(!r.filter((function(r){return r})).every((function(r,e){return null==r[2]||"string"==typeof r[2]||(n=e,!1)})))throw new TypeError("ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the "+n+"th range "+JSON.stringify(r[n],null,0)+" has a argument in the range of a type "+typeof r[n][2]);var t=(O(r)||[]).filter((function(r){return r[0]<=e&&(null!=r[2]||r[0]<e)})).map((function(r){return r[1]>e?null!=r[2]?[r[0],e,r[2]]:[r[0],e]:r}));return t===[]?null:t}r.rProcessOutside=function(r,e,n,t){if(void 0===t&&(t=!1),"string"!=typeof r)throw void 0===r?new Error("ranges-process-outside: [THROW_ID_01] the first input argument must be string! It's missing currently (undefined)!"):new Error("ranges-process-outside: [THROW_ID_02] the first input argument must be string! It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if(e&&(!Array.isArray(e)||e.length&&!Array.isArray(e[0])))throw new Error("ranges-process-outside: [THROW_ID_03] the second input argument must be array of ranges or null! It was given as:\n"+JSON.stringify(e,null,4)+" (type "+typeof e+")");if("function"!=typeof n)throw new Error("ranges-process-outside: [THROW_ID_04] the third input argument must be a function! It was given as:\n"+JSON.stringify(n,null,4)+" (type "+typeof n+")");function s(r,e){(e||[]).forEach((function(e){for(var t=e[1],s=function(e){var t=p(r.slice(e))[0].length;n(e,e+t,(function(r){null!=r&&(e+=r)})),t&&t>1&&(e+=t-1),o=e},o=e[0];o<t;o++)s(o)}))}s(r,e&&e.length?v(function(r,e,n){if(!Array.isArray(r)&&null!==r)throw new TypeError("ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(!Number.isInteger(e)||e<0)throw new TypeError("ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])throw new TypeError("ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = "+JSON.stringify(r,null,0)+"!");if(!Array.isArray(r)||!r.filter((function(r){return Array.isArray(r)&&r[0]!==r[1]})).length||!e)return e?[[0,e]]:null;var t,s=w(w({},{strictlyTwoElementsInRangeArrays:!1,skipChecks:!1}),n),o=0;if(!s.skipChecks&&s.strictlyTwoElementsInRangeArrays&&!r.filter((function(r){return r})).every((function(r,e){return 2===r.length||(o=e,t=r.length,!1)})))throw new TypeError("ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the "+o+"th range ("+JSON.stringify(r[o],null,0)+") has not two but "+t+" elements!");if(!s.skipChecks&&!r.every((function(r,e){return!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(o=e,!1)})))throw new TypeError("ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here "+(o+1)+"th range ("+JSON.stringify(r[o],null,0)+") does not consist of only natural numbers!");return v((s.skipChecks?r.filter((function(r){return r[0]!==r[1]})):O(r.filter((function(r){return r[0]!==r[1]})))).reduce((function(r,n,t,o){var i=[];0===t&&0!==o[0][0]&&i.push([0,o[0][0]]);var u=t<o.length-1?o[t+1][0]:e;if(n[1]!==u){if(s.skipChecks&&n[1]>u)throw new TypeError("ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range ["+n[1]+", "+u+"] which is backwards. For investigation, whole ranges array is:\n"+JSON.stringify(o,null,0));i.push([n[1],u])}return r.concat(i)}),[]),e)}(e,r.length,{skipChecks:!!t}),r.length):[[0,r.length]])},r.version="4.0.6",Object.defineProperty(r,"__esModule",{value:!0})}));
