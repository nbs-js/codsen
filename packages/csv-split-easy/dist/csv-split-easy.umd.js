/**
 * csv-split-easy
 * Splits the CSV string into array of arrays, each representing a row of columns
 * Version: 3.1.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/csv-split-easy/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).csvSplitEasy=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){if(!Array.isArray(e)||!e.length)return e;var t,n,i=o(o({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(i.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(t=r,n=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") has not two but ").concat(n," elements!"));if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") does not consist of only natural numbers!"));var a=Math.pow(e.filter((function(e){return e})).length,2),s=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return i.progressFn&&(s+=1,i.progressFn(Math.floor(100*s/a))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}function u(r,t){function n(e){return"string"==typeof e}function a(r){return r&&"object"===e(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var u,l={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(t){if(!a(t))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(e(t),")"));if((u=o(o({},l),t)).progressFn&&a(u.progressFn)&&!Object.keys(u.progressFn).length)u.progressFn=null;else if(u.progressFn&&"function"!=typeof u.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(e(u.progressFn),'", equal to ').concat(JSON.stringify(u.progressFn,null,4)));if(u.mergeType&&1!==u.mergeType&&2!==u.mergeType)if(n(u.mergeType)&&"1"===u.mergeType.trim())u.mergeType=1;else{if(!n(u.mergeType)||"2"!==u.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(u.mergeType),'", equal to ').concat(JSON.stringify(u.mergeType,null,4)));u.mergeType=2}if("boolean"!=typeof u.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(e(u.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(u.joinRangesThatTouchEdges,null,4)))}else u=o({},l);for(var c,f,g,p=r.filter((function(e){return e})).map((function(e){return i(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]})),y=(c=u.progressFn?s(p,{progressFn:function(e){(g=Math.floor(e/5))!==f&&(f=g,u.progressFn(g))}}):s(p)).length-1,m=y;m>0;m--)u.progressFn&&(g=Math.floor(78*(1-m/y))+21)!==f&&g>f&&(f=g,u.progressFn(g)),(c[m][0]<=c[m-1][0]||!u.joinRangesThatTouchEdges&&c[m][0]<c[m-1][1]||u.joinRangesThatTouchEdges&&c[m][0]<=c[m-1][1])&&(c[m-1][0]=Math.min(c[m][0],c[m-1][0]),c[m-1][1]=Math.max(c[m][1],c[m-1][1]),void 0!==c[m][2]&&(c[m-1][0]>=c[m][0]||c[m-1][1]<=c[m][1])&&null!==c[m-1][2]&&(null===c[m][2]&&null!==c[m-1][2]?c[m-1][2]=null:void 0!==c[m-1][2]?2===u.mergeType&&c[m-1][0]===c[m][0]?c[m-1][2]=c[m][2]:c[m-1][2]+=c[m][2]:c[m-1][2]=c[m][2]),c.splice(m,1),m=c.length);return c.length?c:null}function l(e){return null!=e}function c(e){return"string"==typeof e}var f=" ";function g(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;function t(e){return Array.from(e).reverse().join("")}function n(e,r,t){var n=t?"\n":"\r",o=t?"\r":"\n";if(!e)return e;for(var i=0,a="",s=0,u=e.length;s<u;s++)(e[s]===n||e[s]===o&&e[s-1]!==n)&&i++,"\r\n".includes(e[s])||e[s]===f?e[s]===f?a+=e[s]:e[s]===n?i<=r&&(a+=e[s],e[s+1]===o&&(a+=e[s+1],s++)):e[s]===o&&(!e[s-1]||e[s-1]!==n)&&i<=r&&(a+=e[s]):e[s+1]||i||(a+=" ");return a}if("string"==typeof e&&e.length){var o=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(o=+r);var i="",a="";if(e.trim()){if(!e[0].trim())for(var s=0,u=e.length;s<u;s++)if(e[s].trim()){i=e.slice(0,s);break}}else i=e;if(e.trim()&&(""===e.slice(-1).trim()||e.slice(-1)===f))for(var l=e.length;l--;)if(e[l].trim()){a=e.slice(l+1);break}return"".concat(n(i,o,!1)).concat(e.trim()).concat(t(n(t(a),o,!0)))}return e}function p(e){return null!=e}function y(e){return Number.isInteger(e)&&e>=0}function m(e){return"string"==typeof e}function h(e){return/^\d*$/.test(e)?parseInt(e,10):e}var d=function(){function t(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n=o(o({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),r);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(m(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!m(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,a,s;return n=t,(a=[{key:"add",value:function(r,t,n){for(var o=this,a=arguments.length,s=new Array(a>3?a-3:0),u=3;u<a;u++)s[u-3]=arguments[u];if(s.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s,null,4)));if(p(r)||p(t)){if(p(r)&&!p(t)){if(Array.isArray(r)){if(r.length){if(r.some((function(e){return Array.isArray(e)})))return void r.forEach((function(e){Array.isArray(e)&&o.add.apply(o,i(e))}));r.length>1&&y(h(r[0]))&&y(h(r[1]))&&this.add.apply(this,i(r))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(r,null,0),') but second-one, "to" is not (').concat(JSON.stringify(t,null,0),")"))}if(!p(r)&&p(t))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(t,null,0),') but first-one, "from" is not (').concat(JSON.stringify(r,null,0),")"));var l=/^\d*$/.test(r)?parseInt(r,10):r,c=/^\d*$/.test(t)?parseInt(t,10):t;if(y(n)&&(n=String(n)),!y(l)||!y(c))throw y(l)&&l>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(c),'" equal to: ').concat(JSON.stringify(c,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(l),'" equal to: ').concat(JSON.stringify(l,null,4)));if(p(n)&&!m(n)&&!y(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(p(this.ranges)&&Array.isArray(this.last())&&l===this.last()[1]){if(this.last()[1]=c,this.last()[2],null!==this.last()[2]&&p(n)){var f=!(p(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(f=g(f,this.opts.limitLinebreaksCount)),m(f)&&!f.length||(this.last()[2]=f)}}else{this.ranges||(this.ranges=[]);var d=void 0===n||m(n)&&!n.length?[l,c]:[l,c,this.opts.limitToBeAddedWhitespace?g(n,this.opts.limitLinebreaksCount):n];this.ranges.push(d)}}}},{key:"push",value:function(e,r,t){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[e,r,t].concat(o))}},{key:"current",value:function(){var e=this;return null!=this.ranges?(this.ranges=u(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return p(r[2])?[r[0],r[1],g(r[2],e.opts.limitLinebreaksCount)]:r})):this.ranges):null}},{key:"wipe",value:function(){this.ranges=void 0}},{key:"replace",value:function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!y(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.ranges=Array.from(e)}else this.ranges=void 0}},{key:"last",value:function(){return void 0!==this.ranges&&Array.isArray(this.ranges)?this.ranges[this.ranges.length-1]:null}}])&&r(n.prototype,a),s&&r(n,s),t}();var b,v,T=Function.prototype,w=Object.prototype,O=T.toString,S=w.hasOwnProperty,N=O.call(Object),j=w.toString,I=(b=Object.getPrototypeOf,v=Object,function(e){return b(v(e))});var _=function(r){if(!function(r){return!!r&&"object"==e(r)}(r)||"[object Object]"!=j.call(r)||function(e){var r=!1;if(null!=e&&"function"!=typeof e.toString)try{r=!!(e+"")}catch(e){}return r}(r))return!1;var t=I(r);if(null===t)return!0;var n=S.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&O.call(n)==N},A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var E=function(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&t.path)}},t.exports),t.exports}((function(e,r){!function(t){function n(e,r){return r instanceof Object||(r={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in r&&!r.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(r=e.exports=n),r.isNumeric=n}()})),R="[object Symbol]",D=/^\s+|\s+$/g,F="\\u0300-\\u036f\\ufe20-\\ufe23",W="[\\ud800-\\udfff]",H="["+F+"\\u20d0-\\u20f0]",J="\\ud83c[\\udffb-\\udfff]",P="[^\\ud800-\\udfff]",k="(?:\\ud83c[\\udde6-\\uddff]){2}",q="[\\ud800-\\udbff][\\udc00-\\udfff]",C="(?:"+H+"|"+J+")"+"?",x="[\\ufe0e\\ufe0f]?",U=x+C+("(?:\\u200d(?:"+[P,k,q].join("|")+")"+x+C+")*"),K="(?:"+[P+H+"?",H,k,q,W].join("|")+")",M=RegExp(J+"(?="+J+")|"+K+U,"g"),$=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),B="object"==e(A)&&A&&A.Object===Object&&A,L="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,z=B||L||Function("return this")();function G(e,r,t){if(r!=r)return function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1}(e,Q,t);for(var n=t-1,o=e.length;++n<o;)if(e[n]===r)return n;return-1}function Q(e){return e!=e}function V(e){return function(e){return $.test(e)}(e)?function(e){return e.match(M)||[]}(e):function(e){return e.split("")}(e)}var X=Object.prototype.toString,Y=z.Symbol,Z=Y?Y.prototype:void 0,ee=Z?Z.toString:void 0;function re(r){if("string"==typeof r)return r;if(function(r){return"symbol"==e(r)||function(r){return!!r&&"object"==e(r)}(r)&&X.call(r)==R}(r))return ee?ee.call(r):"";var t=r+"";return"0"==t&&1/r==-Infinity?"-0":t}function te(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,o=e.length;r<0&&(r=-r>o?0:o+r),(t=t>o?o:t)<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+r];return i}(e,r,t)}var ne=function(e,r,t){var n;if((e=null==(n=e)?"":re(n))&&(t||void 0===r))return e.replace(D,"");if(!e||!(r=re(r)))return e;var o=V(e),i=V(r);return te(o,function(e,r){for(var t=-1,n=e.length;++t<n&&G(r,e[t],0)>-1;);return t}(o,i),function(e,r){for(var t=e.length;t--&&G(r,e[t],0)>-1;);return t}(o,i)+1).join("")};function oe(r,t){var n,i=!0,a=[".",",","'"," "];if("string"!=typeof r)throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ".concat(e(r),", equal to:\n").concat(JSON.stringify(r,null,4)));if(null!=t&&!_(t))throw new TypeError("string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4)));var s=o(o({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1}),t),f=ne(r.trim(),'"');if(""===f)return f;for(var g=new d,p=0,y=f.length;p<y;p++){if(s.removeThousandSeparatorsFromNumbers&&""===f[p].trim()&&g.add(p,p+1),s.removeThousandSeparatorsFromNumbers&&"'"===f[p]&&(g.add(p,p+1),"'"===f[p+1])){i=!1;break}if(a.includes(f[p])){if(void 0!==f[p+1]&&E(f[p+1]))if(void 0!==f[p+2]){if(!E(f[p+2])){i=!1;break}if(void 0!==f[p+3]){if(!E(f[p+3])){i=!1;break}if(void 0!==f[p+4]&&E(f[p+4])){i=!1;break}if(s.removeThousandSeparatorsFromNumbers&&g.add(p,p+1),n){if(f[p]!==n){i=!1;break}}else n=f[p]}else s.removeThousandSeparatorsFromNumbers&&s.forceUKStyle&&","===f[p]&&g.add(p,p+1,".")}else s.forceUKStyle&&","===f[p]&&g.add(p,p+1,"."),s.padSingleDecimalPlaceNumbers&&g.add(p+2,p+2,"0")}else if(!E(f[p])){i=!1;break}}return i&&g.current()?function(r,t,n){var o,i=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!c(r))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(t&&!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(!t||!t.filter((function(e){return e})).length)return r;var s=(o=Array.isArray(t)&&(Number.isInteger(t[0])&&t[0]>=0||/^\d*$/.test(t[0]))&&(Number.isInteger(t[1])&&t[1]>=0||/^\d*$/.test(t[1]))?[Array.from(t)]:Array.from(t)).length,f=0;o.filter((function(e){return e})).forEach((function(r,t){if(n&&(i=Math.floor(f/s*10))!==a&&(a=i,n(i)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(t,"th element not an array: ").concat(JSON.stringify(r,null,4),", which is ").concat(e(r)));if(!Number.isInteger(r[0])||r[0]<0){if(!/^\d*$/.test(r[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has first element not an integer, but ").concat(e(r[0]),", equal to: ").concat(JSON.stringify(r[0],null,4),". Computer doesn't like this."));o[t][0]=Number.parseInt(o[t][0],10)}if(!Number.isInteger(r[1])){if(!/^\d*$/.test(r[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has second element not an integer, but ").concat(e(r[1]),", equal to: ").concat(JSON.stringify(r[1],null,4),". Computer doesn't like this."));o[t][1]=Number.parseInt(o[t][1],10)}f+=1}));var g=u(o,{progressFn:function(e){n&&(i=10+Math.floor(e/10))!==a&&(a=i,n(i))}});if(!g)return r;var p=g.length;if(p>0){var y=r.slice(g[p-1][1]);r=g.reduce((function(e,t,o,s){n&&(i=20+Math.floor(o/p*80))!==a&&(a=i,n(i));var u=0===o?0:s[o-1][1],c=s[o][0];return e+r.slice(u,c)+(l(s[o][2])?s[o][2]:"")}),""),r+=y}return r}(f,g.current()):f}return function(r,t){var n=0,i=0,a=[],s=[],u=!1,l=!0;if(t&&"object"!==e(t))throw new Error("csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type ".concat(e(t)," equal to:\n").concat(JSON.stringify(t,null,4)));var c=o(o({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1}),t);if("string"!=typeof r)throw new TypeError("csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(""===r)return[[""]];for(var f=0,g=(r=r.trim()).length;f<g;f++){if(l&&'"'!==r[f]&&","!==r[f]&&""!==r[f].trim()&&(l=!1),'"'===r[f])if(u&&'"'===r[f+1])f+=1;else if(u){u=!1;var p=r.slice(n,f);""!==p.trim()&&(l=!1);var y=/""/.test(p)?p.replace(/""/g,'"'):oe(p,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle});a.push(y)}else u=!0,n=f+1;else if(u||","!==r[f])if("\n"===r[f]||"\r"===r[f]){if(!i){if(i=f,!u&&'"'!==r[f-1]){var m=r.slice(n,f);""!==m.trim()&&(l=!1),a.push(oe(m,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}l?a.length=0:s.push(a),l=!0,a=[]}n=f+1}else i&&(i=0,n=f);else{if('"'!==r[f-1]&&!u){var h=r.slice(n,f);""!==h.trim()&&(l=!1),a.push(oe(h,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}n=f+1,i&&(i=0)}if(f+1===g){if('"'!==r[f]){var d=r.slice(n,f+1);d.trim()&&(l=!1),a.push(oe(d,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}l?a=[]:s.push(a),l=!0}}return 0===s.length?[[""]]:s}}));
