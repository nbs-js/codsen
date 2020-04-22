/**
 * string-trim-spaces-only
 * Like String.trim() but you can choose granularly what to trim
 * Version: 2.8.15
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-trim-spaces-only
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).stringTrimSpacesOnly=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}return function(n,o){if("string"!=typeof n)throw new Error("string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));var i,c,s=function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},{classicTrim:!1,cr:!1,lf:!1,tab:!1,space:!0,nbsp:!1},{},o);function f(e){return s.classicTrim&&!e.trim()||!s.classicTrim&&(s.space&&" "===e||s.cr&&"\r"===e||s.lf&&"\n"===e||s.tab&&"\t"===e||s.nbsp&&" "===e)}if(n.length){if(f(n[0]))for(var l=0,u=n.length;l<u;l++){if(!f(n[l])){i=l;break}if(l===n.length-1)return{res:"",ranges:[[0,n.length]]}}if(f(n[n.length-1]))for(var a=n.length;a--;)if(!f(n[a])){c=a+1;break}return i?c?{res:n.slice(i,c),ranges:[[0,i],[c,n.length]]}:{res:n.slice(i),ranges:[[0,i]]}:c?{res:n.slice(0,c),ranges:[[c,n.length]]}:{res:n,ranges:[]}}return{res:"",ranges:[]}}}));
