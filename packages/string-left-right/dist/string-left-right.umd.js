/**
 * string-left-right
 * Look what's to the left or the right of a given index within a string
 * Version: 2.0.3
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-left-right
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).stringLeftRight={})}(this,function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(e){return"number"==typeof e}function i(e){return"string"==typeof e}function o(e,t){if("string"!=typeof e||!e.length)return null;if(t&&"number"==typeof t||(t=0),!e[t+1])return null;if(e[t+1]&&e[t+1].trim().length)return t+1;if(e[t+2]&&e[t+2].trim().length)return t+2;for(var r=t+1,n=e.length;r<n;r++)if(e[r].trim().length)return r;return null}function l(e,t){if("string"!=typeof e||!e.length)return null;if(t&&"number"==typeof t||(t=0),t<1)return null;if(e[t-1]&&e[t-1].trim().length)return t-1;if(e[t-2]&&e[t-2].trim().length)return t-2;for(var r=t;r--;)if(e[r]&&e[r].trim().length)return r;return null}function f(e,t,r,n){if("string"!=typeof t||!t.length)return null;if(r&&"number"==typeof r||(r=0),"right"===e&&!t[r+1]||"left"===e&&!t[r-1])return null;for(var i,f,u=r,h=[],g=0,s=n.length;g<s;g++)if(n[g].length){var c="right"===e?o(t,u):l(t,u);if("right"===e&&c>u+1?h.push([u+1,c]):"left"===e&&c<u-1&&h.unshift([c+1,u]),t[c]!==n[g])return null;u=c,"right"===e?(void 0===i&&(i=c),f=c):(void 0===f&&(f=c),i=c)}return void 0===i?null:{gaps:h,leftmostChar:i,rightmostChar:f}}function u(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return n.length?f("left",e,t,Array.from(n).reverse()):l(e,t)}function h(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return n.length?f("right",e,t,n):o(e,t)}function g(e,t,i,f,g){if("string"!=typeof t||!t.length)return null;if(i&&"number"==typeof i||(i=0),"right"===e&&!t[i+1]||"left"===e&&(n(i)&&i<1||"0"===i))return null;var s,c;do{(s="right"===e?h.apply(void 0,[t,n(c)?c:i].concat(r(g))):u.apply(void 0,[t,n(c)?c:i].concat(r(g))))&&(c="right"===e?s.rightmostChar+1:s.leftmostChar)}while(s);if(!c)return null;if("right"===e){if(t[c]&&t[c].trim().length)return c;var m=o(t,c);if(0===f.mode){if(m===c+1)return c;if(!(t.slice(c,m||t.length).trim().length||t.slice(c,m||t.length).includes("\n")||t.slice(c,m||t.length).includes("\r")))return m?m-1:t.length;for(var d=c,a=t.length;d<a;d++)if("\n\r".includes(t[d]))return d}else{if(1===f.mode)return c;if(2===f.mode){var p=t.slice(c);if(p.trim().length||p.includes("\n")||p.includes("\r"))for(var y=c,v=t.length;y<v;y++)if(t[y].trim().length||"\n\r".includes(t[y]))return y;return t.length}}return m||t.length}if(t[c]&&t[c-1].trim().length)return c;var b=l(t,c);if(0===f.mode){if(b===c-2)return c;if(t.slice(0,c).trim().length||t.slice(0,c).includes("\n")||t.slice(0,c).includes("\r"))for(var w=c;w--;)if("\n\r".includes(t[w])||t[w].trim().length)return w+1+(t[w].trim().length?1:0);return 0}if(1===f.mode)return c;if(2===f.mode){var j=t.slice(0,c);if(j.trim().length||j.includes("\n")||j.includes("\r"))for(var A=c;A--;)if(t[A].trim().length||"\n\r".includes(t[A]))return A+1;return 0}return null!==b?b+1:0}e.left=l,e.right=o,e.leftSeq=u,e.rightSeq=h,e.chompLeft=function(e,r){for(var o=arguments.length,l=new Array(o>2?o-2:0),f=2;f<o;f++)l[f-2]=arguments[f];if(!l.length||1===l.length&&"object"===t(l[0]))return null;var u,h={mode:0};if("object"===t(l[0]))if((u=Object.assign({},h,l.shift())).mode){if(i(u.mode)&&"0123".includes(u.mode))u.mode=Number.parseInt(u.mode,10);else if(!n(u.mode))throw new Error("string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(u.mode," (type ").concat(t(u.mode),")"))}else u.mode=0;else u=h;return g("left",e,r,u,l)},e.chompRight=function(e,r){for(var o=arguments.length,l=new Array(o>2?o-2:0),f=2;f<o;f++)l[f-2]=arguments[f];if(!l.length||1===l.length&&"object"===t(l[0]))return null;var u,h={mode:0};if("object"===t(l[0]))if((u=Object.assign({},h,l.shift())).mode){if(i(u.mode)&&"0123".includes(u.mode))u.mode=Number.parseInt(u.mode,10);else if(!n(u.mode))throw new Error("string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(u.mode," (type ").concat(t(u.mode),")"))}else u.mode=0;else u=h;return g("right",e,r,u,l)},Object.defineProperty(e,"__esModule",{value:!0})});
