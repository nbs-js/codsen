/**
 * ranges-iterate
 * Iterate a string and any changes within given string index ranges
 * Version: 1.2.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-iterate/
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).rangesIterate=n()}(this,(function(){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}var n=Array.isArray;return function(e,r,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if("string"!=typeof e)throw new TypeError("ranges-iterate: [THROW_ID_01] Input string must be a string! It was given as ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,0)));if(!e.length)throw new TypeError("ranges-iterate: [THROW_ID_02] Input string must be non-empty!");if(null!==r&&!n(r))throw new TypeError("ranges-iterate: [THROW_ID_03] Input ranges must be an array, consisting of zero or more arrays! Currently its type is: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,0)));if(!o)throw new TypeError("ranges-iterate: [THROW_ID_04] You should provide a callback function as third input argument!");if("function"!=typeof o)throw new TypeError("ranges-iterate: [THROW_ID_05] The calllback function (third input argument) must be a function. It was given as: ".concat(t(o),", equal to: ").concat(JSON.stringify(o,null,0)));if(null!==r&&r.length){var a=Array.from(r),f=i,u=i;if(u<a[0][0])for(;u<a[0][0]&&e[u];u++,f++)o({i:u,val:e[u]});a[0][0]<=f&&a.forEach((function(t,n){if(t[2])for(var r=0,i=t[2].length;r<i;r++)o({i:u,val:t[2][r]}),u+=1;for(;f<t[1];)f+=1;var l=e.length;for(a[n+1]&&(l=a[n+1][0]);f<l;u++,f++)o({i:u,val:e[f]})}))}else for(var l=0;l<e.length;l++)o({i:l,val:e[l]})}}));
