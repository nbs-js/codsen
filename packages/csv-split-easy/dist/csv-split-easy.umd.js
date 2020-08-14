/**
 * csv-split-easy
 * Splits the CSV string into array of arrays, each representing a row of columns
 * Version: 3.0.65
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/csv-split-easy
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).csvSplitEasy=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){if(!Array.isArray(e)||!e.length)return e;var t,n,a=o(o({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(a.strictlyTwoElementsInRangeArrays&&!e.every((function(e,r){return 2===e.length||(t=r,n=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") has not two but ").concat(n," elements!"));if(!e.every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") does not consist of only natural numbers!"));var i=e.length*e.length,s=0;return Array.from(e).sort((function(e,r){return a.progressFn&&(s+=1,a.progressFn(Math.floor(100*s/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}function u(r,t){function n(e){return"string"==typeof e}function i(r){return r&&"object"===e(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return r;var u,l={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(t){if(!i(t))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(e(t),")"));if((u=o(o({},l),t)).progressFn&&i(u.progressFn)&&!Object.keys(u.progressFn).length)u.progressFn=null;else if(u.progressFn&&"function"!=typeof u.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(e(u.progressFn),'", equal to ').concat(JSON.stringify(u.progressFn,null,4)));if(u.mergeType&&1!==u.mergeType&&2!==u.mergeType)if(n(u.mergeType)&&"1"===u.mergeType.trim())u.mergeType=1;else{if(!n(u.mergeType)||"2"!==u.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(u.mergeType),'", equal to ').concat(JSON.stringify(u.mergeType,null,4)));u.mergeType=2}if("boolean"!=typeof u.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(e(u.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(u.joinRangesThatTouchEdges,null,4)))}else u=o({},l);for(var c,f,g,p=r.map((function(e){return a(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]})),y=(c=u.progressFn?s(p,{progressFn:function(e){(g=Math.floor(e/5))!==f&&(f=g,u.progressFn(g))}}):s(p)).length-1,h=y;h>0;h--)u.progressFn&&(g=Math.floor(78*(1-h/y))+21)!==f&&g>f&&(f=g,u.progressFn(g)),(c[h][0]<=c[h-1][0]||!u.joinRangesThatTouchEdges&&c[h][0]<c[h-1][1]||u.joinRangesThatTouchEdges&&c[h][0]<=c[h-1][1])&&(c[h-1][0]=Math.min(c[h][0],c[h-1][0]),c[h-1][1]=Math.max(c[h][1],c[h-1][1]),void 0!==c[h][2]&&(c[h-1][0]>=c[h][0]||c[h-1][1]<=c[h][1])&&null!==c[h-1][2]&&(null===c[h][2]&&null!==c[h-1][2]?c[h-1][2]=null:void 0!==c[h-1][2]?2===u.mergeType&&c[h-1][0]===c[h][0]?c[h-1][2]=c[h][2]:c[h-1][2]+=c[h][2]:c[h-1][2]=c[h][2]),c.splice(h,1),h=c.length);return c}function l(e){return null!=e}function c(e){return"string"==typeof e}function f(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2?arguments[2]:void 0;if(!(t.trim()||e.length&&"\n"!==t&&" "!==t&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==t&&" "!==t))if(r){if(("\n"===t||" "===t)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(" "===t||"\n"===t?t:" ")}else{if(("\n"===t||" "===t)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(" "===t||"\n"===t?t:" ")}}function g(e,r){if("string"==typeof e&&e.length){var t,n,o=!1;if(e.includes("\r\n")&&(o=!0),t=r&&"number"==typeof r?r:1,""===e.trim()){var a=[];for(n=t,Array.from(e).forEach((function(e){("\n"!==e||n)&&("\n"===e&&(n-=1),f(a,!0,e))}));a.length>1&&" "===a[a.length-1];)a.pop();return a.join("")}var i=[];if(n=t,""===e[0].trim())for(var s=0,u=e.length;s<u&&!e[s].trim();s++)("\n"!==e[s]||n)&&("\n"===e[s]&&(n-=1),f(i,!0,e[s]));var l=[];if(n=t,""===e.slice(-1).trim())for(var c=e.length;c--&&!e[c].trim();)("\n"!==e[c]||n)&&("\n"===e[c]&&(n-=1),f(l,!1,e[c]));return o?"".concat(i.join("")).concat(e.trim()).concat(l.join("")).replace(/\n/g,"\r\n"):i.join("")+e.trim()+l.join("")}return e}function p(e){return null!=e}function y(e){return Number.isInteger(e)&&e>=0}function h(e){return"string"==typeof e}function m(e){return/^\d*$/.test(e)?parseInt(e,10):e}var d=function(){function t(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n=o(o({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),r);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(h(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!h(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,i,s;return n=t,(i=[{key:"add",value:function(r,t,n){for(var o=this,i=arguments.length,s=new Array(i>3?i-3:0),u=3;u<i;u++)s[u-3]=arguments[u];if(s.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s,null,4)));if(p(r)||p(t)){if(p(r)&&!p(t)){if(Array.isArray(r)){if(r.length){if(r.some((function(e){return Array.isArray(e)})))return void r.forEach((function(e){Array.isArray(e)&&o.add.apply(o,a(e))}));r.length>1&&y(m(r[0]))&&y(m(r[1]))&&this.add.apply(this,a(r))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(r,null,0),') but second-one, "to" is not (').concat(JSON.stringify(t,null,0),")"))}if(!p(r)&&p(t))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(t,null,0),') but first-one, "from" is not (').concat(JSON.stringify(r,null,0),")"));var l=/^\d*$/.test(r)?parseInt(r,10):r,c=/^\d*$/.test(t)?parseInt(t,10):t;if(y(n)&&(n=String(n)),!y(l)||!y(c))throw y(l)&&l>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(c),'" equal to: ').concat(JSON.stringify(c,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(l),'" equal to: ').concat(JSON.stringify(l,null,4)));if(p(n)&&!h(n)&&!y(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(p(this.ranges)&&Array.isArray(this.last())&&l===this.last()[1]){if(this.last()[1]=c,this.last()[2],null!==this.last()[2]&&p(n)){var f=!(p(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(f=g(f,this.opts.limitLinebreaksCount)),h(f)&&!f.length||(this.last()[2]=f)}}else{this.ranges||(this.ranges=[]);var d=void 0===n||h(n)&&!n.length?[l,c]:[l,c,this.opts.limitToBeAddedWhitespace?g(n,this.opts.limitLinebreaksCount):n];this.ranges.push(d)}}}},{key:"push",value:function(e,r,t){for(var n=arguments.length,o=new Array(n>3?n-3:0),a=3;a<n;a++)o[a-3]=arguments[a];this.add.apply(this,[e,r,t].concat(o))}},{key:"current",value:function(){var e=this;return null!=this.ranges?(this.ranges=u(this.ranges,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return p(r[2])?[r[0],r[1],g(r[2],e.opts.limitLinebreaksCount)]:r})):this.ranges):null}},{key:"wipe",value:function(){this.ranges=void 0}},{key:"replace",value:function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!y(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.ranges=Array.from(e)}else this.ranges=void 0}},{key:"last",value:function(){return void 0!==this.ranges&&Array.isArray(this.ranges)?this.ranges[this.ranges.length-1]:null}}])&&r(n.prototype,i),s&&r(n,s),t}();var b,v,T=Function.prototype,w=Object.prototype,O=T.toString,S=w.hasOwnProperty,N=O.call(Object),j=w.toString,_=(b=Object.getPrototypeOf,v=Object,function(e){return b(v(e))});var I=function(r){if(!function(r){return!!r&&"object"==e(r)}(r)||"[object Object]"!=j.call(r)||function(e){var r=!1;if(null!=e&&"function"!=typeof e.toString)try{r=!!(e+"")}catch(e){}return r}(r))return!1;var t=_(r);if(null===t)return!0;var n=S.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&O.call(n)==N},A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var E=function(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&t.path)}},t.exports),t.exports}((function(e,r){!function(t){function n(e,r){return r instanceof Object||(r={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in r&&!r.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(r=e.exports=n),r.isNumeric=n}()})),R=/^\s+|\s+$/g,D="[\\ud800-\\udfff]",F="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",W="\\ud83c[\\udffb-\\udfff]",H="[^\\ud800-\\udfff]",J="(?:\\ud83c[\\udde6-\\uddff]){2}",P="[\\ud800-\\udbff][\\udc00-\\udfff]",k="(?:"+F+"|"+W+")"+"?",q="[\\ufe0e\\ufe0f]?"+k+("(?:\\u200d(?:"+[H,J,P].join("|")+")[\\ufe0e\\ufe0f]?"+k+")*"),C="(?:"+[H+F+"?",F,J,P,D].join("|")+")",x=RegExp(W+"(?="+W+")|"+C+q,"g"),U=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),K="object"==e(A)&&A&&A.Object===Object&&A,M="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,$=K||M||Function("return this")();function B(e,r,t){if(r!=r)return function(e,r,t,n){for(var o=e.length,a=t+(n?1:-1);n?a--:++a<o;)if(r(e[a],a,e))return a;return-1}(e,L,t);for(var n=t-1,o=e.length;++n<o;)if(e[n]===r)return n;return-1}function L(e){return e!=e}function z(e){return function(e){return U.test(e)}(e)?function(e){return e.match(x)||[]}(e):function(e){return e.split("")}(e)}var G=Object.prototype.toString,Q=$.Symbol,V=Q?Q.prototype:void 0,X=V?V.toString:void 0;function Y(r){if("string"==typeof r)return r;if(function(r){return"symbol"==e(r)||function(r){return!!r&&"object"==e(r)}(r)&&"[object Symbol]"==G.call(r)}(r))return X?X.call(r):"";var t=r+"";return"0"==t&&1/r==-Infinity?"-0":t}function Z(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,o=e.length;r<0&&(r=-r>o?0:o+r),(t=t>o?o:t)<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(o);++n<o;)a[n]=e[n+r];return a}(e,r,t)}var ee=function(e,r,t){var n;if((e=null==(n=e)?"":Y(n))&&(t||void 0===r))return e.replace(R,"");if(!e||!(r=Y(r)))return e;var o=z(e),a=z(r);return Z(o,function(e,r){for(var t=-1,n=e.length;++t<n&&B(r,e[t],0)>-1;);return t}(o,a),function(e,r){for(var t=e.length;t--&&B(r,e[t],0)>-1;);return t}(o,a)+1).join("")};function re(r,t){var n,a=!0,i=[".",",","'"," "];if("string"!=typeof r)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ".concat(e(r),", equal to:\n").concat(JSON.stringify(r,null,4)));if(null!=t&&!I(t))throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4)));var s=o(o({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1}),t),f=ee(r.trim(),'"');if(""===f)return f;for(var g=new d,p=0,y=f.length;p<y;p++){if(s.removeThousandSeparatorsFromNumbers&&""===f[p].trim()&&g.add(p,p+1),s.removeThousandSeparatorsFromNumbers&&"'"===f[p]&&(g.add(p,p+1),"'"===f[p+1])){a=!1;break}if(i.includes(f[p])){if(void 0!==f[p+1]&&E(f[p+1]))if(void 0!==f[p+2]){if(!E(f[p+2])){a=!1;break}if(void 0!==f[p+3]){if(!E(f[p+3])){a=!1;break}if(void 0!==f[p+4]&&E(f[p+4])){a=!1;break}if(s.removeThousandSeparatorsFromNumbers&&g.add(p,p+1),n){if(f[p]!==n){a=!1;break}}else n=f[p]}else s.removeThousandSeparatorsFromNumbers&&s.forceUKStyle&&","===f[p]&&g.add(p,p+1,".")}else s.forceUKStyle&&","===f[p]&&g.add(p,p+1,"."),s.padSingleDecimalPlaceNumbers&&g.add(p+2,p+2,"0")}else if(!E(f[p])){a=!1;break}}return a&&g.current()?function(r,t,n){var o,a=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!c(r))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(null===t)return r;if(!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));var s=(o=Array.isArray(t)&&(Number.isInteger(t[0])&&t[0]>=0||/^\d*$/.test(t[0]))&&(Number.isInteger(t[1])&&t[1]>=0||/^\d*$/.test(t[1]))?[Array.from(t)]:Array.from(t)).length,f=0;o.forEach((function(r,t){if(n&&(a=Math.floor(f/s*10))!==i&&(i=a,n(a)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(t,"th element not an array: ").concat(JSON.stringify(r,null,4),", which is ").concat(e(r)));if(!Number.isInteger(r[0])||r[0]<0){if(!/^\d*$/.test(r[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has first element not an integer, but ").concat(e(r[0]),", equal to: ").concat(JSON.stringify(r[0],null,4),". Computer doesn't like this."));o[t][0]=Number.parseInt(o[t][0],10)}if(!Number.isInteger(r[1])){if(!/^\d*$/.test(r[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has second element not an integer, but ").concat(e(r[1]),", equal to: ").concat(JSON.stringify(r[1],null,4),". Computer doesn't like this."));o[t][1]=Number.parseInt(o[t][1],10)}f+=1}));var g=u(o,{progressFn:function(e){n&&(a=10+Math.floor(e/10))!==i&&(i=a,n(a))}}),p=g.length;if(p>0){var y=r.slice(g[p-1][1]);r=g.reduce((function(e,t,o,s){n&&(a=20+Math.floor(o/p*80))!==i&&(i=a,n(a));var u=0===o?0:s[o-1][1],c=s[o][0];return e+r.slice(u,c)+(l(s[o][2])?s[o][2]:"")}),""),r+=y}return r}(f,g.current()):f}return function(r,t){var n=0,a=0,i=[],s=[],u=!1,l=!0;if(t&&"object"!==e(t))throw new Error("csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type ".concat(e(t)," equal to:\n").concat(JSON.stringify(t,null,4)));var c=o(o({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1}),t);if("string"!=typeof r)throw new TypeError("csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(""===r)return[[""]];for(var f=0,g=(r=r.trim()).length;f<g;f++){if(l&&'"'!==r[f]&&","!==r[f]&&""!==r[f].trim()&&(l=!1),'"'===r[f])if(u&&'"'===r[f+1])f+=1;else if(u){u=!1;var p=r.slice(n,f);""!==p.trim()&&(l=!1);var y=/""/.test(p)?p.replace(/""/g,'"'):re(p,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle});i.push(y)}else u=!0,n=f+1;else if(u||","!==r[f])if("\n"===r[f]||"\r"===r[f]){if(!a){if(a=f,!u&&'"'!==r[f-1]){var h=r.slice(n,f);""!==h.trim()&&(l=!1),i.push(re(h,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}l?i.length=0:s.push(i),l=!0,i=[]}n=f+1}else a&&(a=0,n=f);else{if('"'!==r[f-1]&&!u){var m=r.slice(n,f);""!==m.trim()&&(l=!1),i.push(re(m,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}n=f+1,a&&(a=0)}if(f+1===g){if('"'!==r[f]){var d=r.slice(n,f+1);d.trim()&&(l=!1),i.push(re(d,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}l?i=[]:s.push(i),l=!0}}return 0===s.length?[[""]]:s}}));
