/**
 * array-group-str-omit-num-char
 * Groups array of strings by omitting number characters
 * Version: 2.1.49
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/array-group-str-omit-num-char/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).arrayGroupStrOmitNumChar=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s="__lodash_hash_undefined__",u="[object Function]",c="[object GeneratorFunction]",l=/^\[object .+?Constructor\]$/,f="object"==e(i)&&i&&i.Object===Object&&i,p="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,h=f||p||Function("return this")();function g(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(t(e[a],a,e))return a;return-1}(e,d,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function y(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function d(e){return e!=e}function m(e,t){return e.has(t)}function _(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var b,v=Array.prototype,w=Function.prototype,O=Object.prototype,T=h["__core-js_shared__"],W=(b=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"",j=w.toString,R=O.hasOwnProperty,E=O.toString,I=RegExp("^"+j.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),A=v.splice,S=q(h,"Map"),F=q(h,"Set"),N=q(Object,"create");function C(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function D(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function H(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function P(e){var t=-1,r=e?e.length:0;for(this.__data__=new H;++t<r;)this.add(e[t])}function J(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function M(e){return!(!k(e)||(t=e,W&&W in t))&&(function(e){var t=k(e)?E.call(e):"";return t==u||t==c}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?I:l).test(function(e){if(null!=e){try{return j.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}C.prototype.clear=function(){this.__data__=N?N(null):{}},C.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},C.prototype.get=function(e){var t=this.__data__;if(N){var r=t[e];return r===s?void 0:r}return R.call(t,e)?t[e]:void 0},C.prototype.has=function(e){var t=this.__data__;return N?void 0!==t[e]:R.call(t,e)},C.prototype.set=function(e,t){return this.__data__[e]=N&&void 0===t?s:t,this},D.prototype.clear=function(){this.__data__=[]},D.prototype.delete=function(e){var t=this.__data__,r=J(t,e);return!(r<0)&&(r==t.length-1?t.pop():A.call(t,r,1),!0)},D.prototype.get=function(e){var t=this.__data__,r=J(t,e);return r<0?void 0:t[r][1]},D.prototype.has=function(e){return J(this.__data__,e)>-1},D.prototype.set=function(e,t){var r=this.__data__,n=J(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},H.prototype.clear=function(){this.__data__={hash:new C,map:new(S||D),string:new C}},H.prototype.delete=function(e){return x(this,e).delete(e)},H.prototype.get=function(e){return x(this,e).get(e)},H.prototype.has=function(e){return x(this,e).has(e)},H.prototype.set=function(e,t){return x(this,e).set(e,t),this},P.prototype.add=P.prototype.push=function(e){return this.__data__.set(e,s),this},P.prototype.has=function(e){return this.__data__.has(e)};var $=F&&1/_(new F([,-0]))[1]==1/0?function(e){return new F(e)}:function(){};function x(t,r){var n,o,a=t.__data__;return("string"==(o=e(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?a["string"==typeof r?"string":"hash"]:a.map}function q(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return M(r)?r:void 0}function k(t){var r=e(t);return!!t&&("object"==r||"function"==r)}var G=function(e){return e&&e.length?function(e,t,r){var n=-1,o=g,a=e.length,i=!0,s=[],u=s;if(r)i=!1,o=y;else if(a>=200){var c=t?null:$(e);if(c)return _(c);i=!1,o=m,u=new P}else u=t?[]:s;e:for(;++n<a;){var l=e[n],f=t?t(l):l;if(l=r||0!==l?l:0,i&&f==f){for(var p=u.length;p--;)if(u[p]===f)continue e;t&&u.push(f),s.push(l)}else o(u,f,r)||(u!==s&&u.push(f),s.push(l))}return s}(e):[]};function z(e,t){if(!Array.isArray(e)||!e.length)return e;var r,o,a=n(n({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),t);if(a.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,t){return 2===e.length||(r=t,o=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(r,"th range (").concat(JSON.stringify(e[r],null,4),") has not two but ").concat(o," elements!"));if(!e.filter((function(e){return e})).every((function(e,t){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(r=t,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(r,"th range (").concat(JSON.stringify(e[r],null,4),") does not consist of only natural numbers!"));var i=Math.pow(e.filter((function(e){return e})).length,2),s=0;return Array.from(e).filter((function(e){return e})).sort((function(e,t){return a.progressFn&&(s+=1,a.progressFn(Math.floor(100*s/i))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1}))}function U(t,r){function a(e){return"string"==typeof e}function i(t){return t&&"object"===e(t)&&!Array.isArray(t)}if(!Array.isArray(t)||!t.length)return null;var s,u={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(r){if(!i(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(r,null,4)," (type ").concat(e(r),")"));if((s=n(n({},u),r)).progressFn&&i(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(e(s.progressFn),'", equal to ').concat(JSON.stringify(s.progressFn,null,4)));if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(a(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!a(s.mergeType)||"2"!==s.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(s.mergeType),'", equal to ').concat(JSON.stringify(s.mergeType,null,4)));s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(e(s.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges,null,4)))}else s=n({},u);for(var c,l,f,p=t.filter((function(e){return e})).map((function(e){return o(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]})),h=(c=s.progressFn?z(p,{progressFn:function(e){(f=Math.floor(e/5))!==l&&(l=f,s.progressFn(f))}}):z(p)).length-1,g=h;g>0;g--)s.progressFn&&(f=Math.floor(78*(1-g/h))+21)!==l&&f>l&&(l=f,s.progressFn(f)),(c[g][0]<=c[g-1][0]||!s.joinRangesThatTouchEdges&&c[g][0]<c[g-1][1]||s.joinRangesThatTouchEdges&&c[g][0]<=c[g-1][1])&&(c[g-1][0]=Math.min(c[g][0],c[g-1][0]),c[g-1][1]=Math.max(c[g][1],c[g-1][1]),void 0!==c[g][2]&&(c[g-1][0]>=c[g][0]||c[g-1][1]<=c[g][1])&&null!==c[g-1][2]&&(null===c[g][2]&&null!==c[g-1][2]?c[g-1][2]=null:void 0!==c[g-1][2]?2===s.mergeType&&c[g-1][0]===c[g][0]?c[g-1][2]=c[g][2]:c[g-1][2]+=c[g][2]:c[g-1][2]=c[g][2]),c.splice(g,1),g=c.length);return c.length?c:null}function B(e){return null!=e}function K(e){return"string"==typeof e}var L=Array.isArray;return function(t,r){if(!L(t))return t;if(!t.length)return{};var o,a,i={wildcard:"*",dedupePlease:!0};o=null!=r?n(n({},i),r):n({},i);for(var s=(a=o.dedupePlease?G(t):Array.from(t)).length,u={},c=0;c<s;c++){var l=a[c].match(/\d+/gm);l?function(){var e=a[c].replace(/\d+/gm,o.wildcard);Object.prototype.hasOwnProperty.call(u,e)?(l.forEach((function(t,r){u[e].elementsWhichWeCanReplaceWithWildcards[r]&&t!==u[e].elementsWhichWeCanReplaceWithWildcards[r]&&(u[e].elementsWhichWeCanReplaceWithWildcards[r]=!1)})),u[e].count+=1):u[e]={count:1,elementsWhichWeCanReplaceWithWildcards:Array.from(l)}}():u[a[c]]={count:1}}var f={};return Object.keys(u).forEach((function(t){var r=t;if(L(u[t].elementsWhichWeCanReplaceWithWildcards)&&u[t].elementsWhichWeCanReplaceWithWildcards.some((function(e){return!1!==e}))){for(var n=[],a=0,i=0;i<u[t].elementsWhichWeCanReplaceWithWildcards.length;i++)a=r.indexOf(o.wildcard,a+o.wildcard.length),!1!==u[t].elementsWhichWeCanReplaceWithWildcards[i]&&n.push([a,a+o.wildcard.length,u[t].elementsWhichWeCanReplaceWithWildcards[i]]);r=function(t,r,n){var o,a=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!K(t))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(r&&!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(!r||!r.filter((function(e){return e})).length)return t;var s=(o=Array.isArray(r)&&(Number.isInteger(r[0])&&r[0]>=0||/^\d*$/.test(r[0]))&&(Number.isInteger(r[1])&&r[1]>=0||/^\d*$/.test(r[1]))?[Array.from(r)]:Array.from(r)).length,u=0;o.filter((function(e){return e})).forEach((function(t,r){if(n&&(a=Math.floor(u/s*10))!==i&&(i=a,n(a)),!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(r,"th element not an array: ").concat(JSON.stringify(t,null,4),", which is ").concat(e(t)));if(!Number.isInteger(t[0])||t[0]<0){if(!/^\d*$/.test(t[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(r,"th element, array [").concat(t[0],",").concat(t[1],"]. That array has first element not an integer, but ").concat(e(t[0]),", equal to: ").concat(JSON.stringify(t[0],null,4),". Computer doesn't like this."));o[r][0]=Number.parseInt(o[r][0],10)}if(!Number.isInteger(t[1])){if(!/^\d*$/.test(t[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(r,"th element, array [").concat(t[0],",").concat(t[1],"]. That array has second element not an integer, but ").concat(e(t[1]),", equal to: ").concat(JSON.stringify(t[1],null,4),". Computer doesn't like this."));o[r][1]=Number.parseInt(o[r][1],10)}u+=1}));var c=U(o,{progressFn:function(e){n&&(a=10+Math.floor(e/10))!==i&&(i=a,n(a))}});if(!c)return t;var l=c.length;if(l>0){var f=t.slice(c[l-1][1]);t=c.reduce((function(e,r,o,s){n&&(a=20+Math.floor(o/l*80))!==i&&(i=a,n(a));var u=0===o?0:s[o-1][1],c=s[o][0];return e+t.slice(u,c)+(B(s[o][2])?s[o][2]:"")}),""),t+=f}return t}(r,n)}f[r]=u[t].count})),f}}));
