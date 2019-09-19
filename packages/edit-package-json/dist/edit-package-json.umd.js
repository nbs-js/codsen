/**
 * edit-package-json
 * Edit package.json without parsing, as string, keep indentation etc intact
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/edit-package-json
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).editPackageJson={})}(this,(function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=Array.isArray;function o(t){return"string"==typeof t}function i(t){return e(t)?t.join("."):o(t)?t:String(t)}function r(t,n){return"\\"!==n||"\\"===t[n-2]}t.set=function(t,e,c){if(!o(t)||!t.length)throw new Error("edit-package-json: [THROW_ID_01] first input argument must be a non-empty string. It was given as ".concat(JSON.stringify(t,null,4)," (type ").concat(n(t),")"));var l=["{","}","[","]",":"],u=c;!o(c)||c.startsWith('"')||c.startsWith("{")||(u='"'.concat(c,'"'));var s,f,p,a,y,g,h=!1,m=!1,d=!1;function b(){s=null,f=null,p=null,a=null,y=null,g=null}b();for(var j=[],S=t.length,v=0;v<S;v++)if("{"!==t[v]||"\\"===t[v-1]||h||d||(h=!0),"}"===t[v]&&"\\"!==t[v-1]&&h&&!d&&(h=!1),"["!==t[v]||"\\"===t[v-1]||m||d||(m=!0),"]"===t[v]&&"\\"!==t[v-1]&&m&&!d&&(m=!1,j.pop(),b()),d||p||!t[v].trim().length||l.includes(t[v])||!(m||!m&&y)||(m&&j.push(0),p=v,m&&(i(e)===j.join(".")||j.join(".").endsWith(".".concat(i(e))))&&(d=!0)),!d&&(m||!m&&y)&&p&&p<v&&!a&&('"'===t[p]&&'"'===t[v]&&"\\"!==t[v-1]||'"'!==t[p]&&!t[v].trim().length||["}",","].includes(t[v]))&&(g=t.slice(p,'"'===t[p]?v+1:v),a=v),d||m||'"'!==t[v]||"\\"===t[v-1]||y||s||f||!t[v+1]||(s=v+1),!d&&!m&&'"'===t[v]&&"\\"!==t[v-1]&&!f&&s&&!p&&s<v&&(f=v+1,y=t.slice(s,v),j.push(y),(i(e)===j.join(".")||j.join(".").endsWith(".".concat(i(e))))&&(d=!0)),!d&&a&&v>=a&&t[v].trim().length&&(","===t[v]?(m?j[j.length-1]=j[j.length-1]+1:j.pop(),b()):"}"===t[v]&&(b(),j.pop(),j.pop())),d||"{"!==t[v]||!o(y)||p||g||b(),t[v].trim().length&&d&&!p&&v>f&&![":"].includes(t[v])&&(p=v),d&&p&&v>p&&("["===t[p]&&"]"===t[v]||"{"===t[p]&&"}"===t[v]||'"'===t[p]&&'"'===t[v]||t[p].trim().length&&(!t[v].trim().length||l.includes(t[v])&&r(t,v-1))))return"".concat(t.slice(0,p)).concat(u).concat(t.slice(v+(t[v].trim().length?1:0)));return t},Object.defineProperty(t,"__esModule",{value:!0})}));
