/**
 * ranges-apply
 * Take an array of string index ranges, delete/replace the string according to them
 * Version: 4.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-apply/
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).rangesApply=e()}(this,(function(){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function e(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function n(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function t(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){e(r,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function o(r){return function(r){if(Array.isArray(r))return a(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,e){if(!r)return;if("string"==typeof r)return a(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(r,e)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function i(r,e){if(!Array.isArray(r)||!r.length)return r;var n,o,a=t(t({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),e);if(a.strictlyTwoElementsInRangeArrays&&!r.filter((function(r){return r})).every((function(r,e){return 2===r.length||(n=e,o=r.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(n,"th range (").concat(JSON.stringify(r[n],null,4),") has not two but ").concat(o," elements!"));if(!r.filter((function(r){return r})).every((function(r,e){return!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(n=e,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(n,"th range (").concat(JSON.stringify(r[n],null,4),") does not consist of only natural numbers!"));var i=Math.pow(r.filter((function(r){return r})).length,2),s=0;return Array.from(r).filter((function(r){return r})).sort((function(r,e){return a.progressFn&&(s+=1,a.progressFn(Math.floor(100*s/i))),r[0]===e[0]?r[1]<e[1]?-1:r[1]>e[1]?1:0:r[0]<e[0]?-1:1}))}function s(e,n){function a(r){return"string"==typeof r}function s(e){return e&&"object"===r(e)&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;var u,c={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(n){if(!s(n))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(n,null,4)," (type ").concat(r(n),")"));if((u=t(t({},c),n)).progressFn&&s(u.progressFn)&&!Object.keys(u.progressFn).length)u.progressFn=null;else if(u.progressFn&&"function"!=typeof u.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(r(u.progressFn),'", equal to ').concat(JSON.stringify(u.progressFn,null,4)));if(u.mergeType&&1!==u.mergeType&&2!==u.mergeType)if(a(u.mergeType)&&"1"===u.mergeType.trim())u.mergeType=1;else{if(!a(u.mergeType)||"2"!==u.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(r(u.mergeType),'", equal to ').concat(JSON.stringify(u.mergeType,null,4)));u.mergeType=2}if("boolean"!=typeof u.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(r(u.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(u.joinRangesThatTouchEdges,null,4)))}else u=t({},c);for(var l,f,g,y=e.filter((function(r){return r})).map((function(r){return o(r)})).filter((function(r){return void 0!==r[2]||r[0]!==r[1]})),p=(l=u.progressFn?i(y,{progressFn:function(r){(g=Math.floor(r/5))!==f&&(f=g,u.progressFn(g))}}):i(y)).length-1,h=p;h>0;h--)u.progressFn&&(g=Math.floor(78*(1-h/p))+21)!==f&&g>f&&(f=g,u.progressFn(g)),(l[h][0]<=l[h-1][0]||!u.joinRangesThatTouchEdges&&l[h][0]<l[h-1][1]||u.joinRangesThatTouchEdges&&l[h][0]<=l[h-1][1])&&(l[h-1][0]=Math.min(l[h][0],l[h-1][0]),l[h-1][1]=Math.max(l[h][1],l[h-1][1]),void 0!==l[h][2]&&(l[h-1][0]>=l[h][0]||l[h-1][1]<=l[h][1])&&null!==l[h-1][2]&&(null===l[h][2]&&null!==l[h-1][2]?l[h-1][2]=null:void 0!==l[h-1][2]?2===u.mergeType&&l[h-1][0]===l[h][0]?l[h-1][2]=l[h][2]:l[h-1][2]+=l[h][2]:l[h-1][2]=l[h][2]),l.splice(h,1),h=l.length);return l.length?l:null}function u(r){return null!=r}function c(r){return"string"==typeof r}return function(e,n,t){var o,a=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!c(e))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(r(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(n&&!Array.isArray(n))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(r(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(t&&"function"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(r(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(!n||!n.filter((function(r){return r})).length)return e;var l=(o=Array.isArray(n)&&(Number.isInteger(n[0])&&n[0]>=0||/^\d*$/.test(n[0]))&&(Number.isInteger(n[1])&&n[1]>=0||/^\d*$/.test(n[1]))?[Array.from(n)]:Array.from(n)).length,f=0;o.filter((function(r){return r})).forEach((function(e,n){if(t&&(a=Math.floor(f/l*10))!==i&&(i=a,t(a)),!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(n,"th element not an array: ").concat(JSON.stringify(e,null,4),", which is ").concat(r(e)));if(!Number.isInteger(e[0])||e[0]<0){if(!/^\d*$/.test(e[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(n,"th element, array [").concat(e[0],",").concat(e[1],"]. That array has first element not an integer, but ").concat(r(e[0]),", equal to: ").concat(JSON.stringify(e[0],null,4),". Computer doesn't like this."));o[n][0]=Number.parseInt(o[n][0],10)}if(!Number.isInteger(e[1])){if(!/^\d*$/.test(e[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(n,"th element, array [").concat(e[0],",").concat(e[1],"]. That array has second element not an integer, but ").concat(r(e[1]),", equal to: ").concat(JSON.stringify(e[1],null,4),". Computer doesn't like this."));o[n][1]=Number.parseInt(o[n][1],10)}f+=1}));var g=s(o,{progressFn:function(r){t&&(a=10+Math.floor(r/10))!==i&&(i=a,t(a))}});if(!g)return e;var y=g.length;if(y>0){var p=e.slice(g[y-1][1]);e=g.reduce((function(r,n,o,s){t&&(a=20+Math.floor(o/y*80))!==i&&(i=a,t(a));var c=0===o?0:s[o-1][1],l=s[o][0];return r+e.slice(c,l)+(u(s[o][2])?s[o][2]:"")}),""),e+=p}return e}}));
