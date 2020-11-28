/**
 * string-remove-widows
 * Helps to prevent widow words in a text
 * Version: 1.7.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-remove-widows/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).stringRemoveWidows={})}(this,(function(t){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){n(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(t){return"string"==typeof t?t.length>0?[t]:[]:t}function c(t){return t&&"object"===r(t)&&!Array.isArray(t)}function f(t){return"string"==typeof t}function l(t,r,e,n,o,i){var a="function"==typeof e?e():e;if(r<0&&o&&"EOL"===a)return a;if(r>=t.length&&!o)return!1;for(var s=o?1:e.length,u=!1,c=!1,f=n.maxMismatches,l=r,g=!1,h=!1,p=!1;t[l];){var y=i(l);if(n.trimBeforeMatching&&""===t[l].trim()){if(!t[y]&&o&&"EOL"===e)return!0;l=i(l)}else if(!n.i&&n.trimCharsBeforeMatching.includes(t[l])||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[l].toLowerCase())){if(o&&"EOL"===e&&!t[y])return!0;l=i(l)}else{var d=y>l?e[e.length-s]:e[s-1];if(!n.i&&t[l]===d||n.i&&t[l].toLowerCase()===d.toLowerCase()){if(g||(g=!0),c||(c=!0),s===e.length?h=!0:1===s&&(p=!0),(s-=1)<1)return l}else{if(!(n.maxMismatches&&f&&l))return!(0!==l||1!==s||n.lastMustMatch||!c)&&0;f-=1;for(var m=0;m<=f;m++){var v=y>l?e[e.length-s+1+m]:e[s-2-m],b=t[i(l)];if(v&&(!n.i&&t[l]===v||n.i&&t[l].toLowerCase()===v.toLowerCase())&&(!n.firstMustMatch||s!==e.length)){s-=2,g=!0;break}if(b&&v&&(!n.i&&b===v||n.i&&b.toLowerCase()===v.toLowerCase())&&(!n.firstMustMatch||s!==e.length)){s-=1,g=!0;break}if(void 0===v&&f>=0&&g&&(!n.firstMustMatch||h)&&(!n.lastMustMatch||p))return l}g||(u=l)}if(!1!==u&&u!==l&&(u=!1),s<1)return l;l=i(l)}}return s>0?!(!o||"EOL"!==a)||!!(n.maxMismatches>=s&&c)&&(u||0):void 0}function g(t,e,n,o){return function(t,e,n,o,a){var s={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1};if(c(a)&&Object.prototype.hasOwnProperty.call(a,"trimBeforeMatching")&&"boolean"!=typeof a.trimBeforeMatching)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(a.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var g,h,p,y,d=i(i({},s),a);if(d.trimCharsBeforeMatching=u(d.trimCharsBeforeMatching),d.trimCharsBeforeMatching=d.trimCharsBeforeMatching.map((function(t){return f(t)?t:String(t)})),!f(e))return!1;if(!e.length)return!1;if(!Number.isInteger(n)||n<0)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(r(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(f(o))g=[o];else if(Array.isArray(o))g=o;else if(o){if("function"!=typeof o)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(r(o),", equal to:\n").concat(JSON.stringify(o,null,4)));(g=[]).push(o)}else g=o;if(a&&!c(a))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(r(a),'", and equal to:\n').concat(JSON.stringify(a,null,4)));if(d.trimCharsBeforeMatching.some((function(t,r){return t.length>1&&(p=r,y=t,!0)})))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(p," is longer than 1 character, ").concat(y.length," (equals to ").concat(y,"). Please split it into separate characters and put into array as separate elements."));if(!g||!Array.isArray(g)||Array.isArray(g)&&!g.length||Array.isArray(g)&&1===g.length&&f(g[0])&&!g[0].trim()){if("function"==typeof d.cb){var m,v=n;if("matchLeftIncl"!==t&&"matchRight"!==t||(v+=1),"L"===t[5])for(var b=v;b--;){var w=e[b];if((!d.trimBeforeMatching||d.trimBeforeMatching&&void 0!==w&&w.trim())&&(!d.trimCharsBeforeMatching.length||void 0!==w&&!d.trimCharsBeforeMatching.includes(w))){m=b;break}}else if(t.startsWith("matchRight"))for(var _=v;_<e.length;_++){var O=e[_];if((!d.trimBeforeMatching||d.trimBeforeMatching&&O.trim())&&(!d.trimCharsBeforeMatching.length||!d.trimCharsBeforeMatching.includes(O))){m=_;break}}if(void 0===m)return!1;var T=e[m],j=m+1,A="";return j&&j>0&&(A=e.slice(0,j)),"L"===t[5]||m&&m>0&&(A=e.slice(m)),d.cb(T,A,m)}var E="";throw a||(E=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(t,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(E))}for(var I=0,M=g.length;I<M;I++){h="function"==typeof g[I];var W=g[I],R=void 0,C=void 0,S="",F=n;"matchRight"===t?F+=1:"matchLeft"===t&&(F-=1);var N=l(e,F,W,d,h,(function(r){return"L"===t[5]?r-1:r+1}));if(N&&h&&"function"==typeof W&&"EOL"===W())return!(!W()||d.cb&&!d.cb(R,S,C))&&W();if(Number.isInteger(N)&&(C=t.startsWith("matchLeft")?N-1:N+1,S="L"===t[5]?e.slice(0,N):e.slice(C)),C<0&&(C=void 0),e[C]&&(R=e[C]),Number.isInteger(N)&&(!d.cb||d.cb(R,S,C)))return W}return!1}("matchRightIncl",t,e,n,o)}var h,p,y=Function.prototype,d=Object.prototype,m=y.toString,v=d.hasOwnProperty,b=m.call(Object),w=d.toString,_=(h=Object.getPrototypeOf,p=Object,function(t){return h(p(t))});var O=function(t){if(!function(t){return!!t&&"object"==r(t)}(t)||"[object Object]"!=w.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var e=_(t);if(null===e)return!0;var n=v.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&m.call(n)==b},T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,r,e){t(e={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&e.path)}},e.exports),e.exports}((function(t,e){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",s="[object Date]",u="[object Function]",c="[object GeneratorFunction]",f="[object Map]",l="[object Number]",g="[object Object]",h="[object Promise]",p="[object RegExp]",y="[object Set]",d="[object String]",m="[object Symbol]",v="[object WeakMap]",b="[object ArrayBuffer]",w="[object DataView]",_="[object Float32Array]",O="[object Float64Array]",j="[object Int8Array]",A="[object Int16Array]",E="[object Int32Array]",I="[object Uint8Array]",M="[object Uint8ClampedArray]",W="[object Uint16Array]",R="[object Uint32Array]",C=/\w*$/,S=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,N={};N[i]=N["[object Array]"]=N[b]=N[w]=N[a]=N[s]=N[_]=N[O]=N[j]=N[A]=N[E]=N[f]=N[l]=N[g]=N[p]=N[y]=N[d]=N[m]=N[I]=N[M]=N[W]=N[R]=!0,N["[object Error]"]=N[u]=N[v]=!1;var L="object"==r(T)&&T&&T.Object===Object&&T,P="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,D=L||P||Function("return this")(),k=e&&!e.nodeType&&e,x=k&&t&&!t.nodeType&&t,B=x&&x.exports===k;function H(t,r){return t.set(r[0],r[1]),t}function J(t,r){return t.add(r),t}function q(t,r,e,n){var o=-1,i=t?t.length:0;for(n&&i&&(e=t[++o]);++o<i;)e=r(e,t[o],o,t);return e}function $(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function U(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function z(t,r){return function(e){return t(r(e))}}function Z(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var K,V=Array.prototype,G=Function.prototype,Q=Object.prototype,X=D["__core-js_shared__"],Y=(K=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",tt=G.toString,rt=Q.hasOwnProperty,et=Q.toString,nt=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=B?D.Buffer:void 0,it=D.Symbol,at=D.Uint8Array,st=z(Object.getPrototypeOf,Object),ut=Object.create,ct=Q.propertyIsEnumerable,ft=V.splice,lt=Object.getOwnPropertySymbols,gt=ot?ot.isBuffer:void 0,ht=z(Object.keys,Object),pt=xt(D,"DataView"),yt=xt(D,"Map"),dt=xt(D,"Promise"),mt=xt(D,"Set"),vt=xt(D,"WeakMap"),bt=xt(Object,"create"),wt=$t(pt),_t=$t(yt),Ot=$t(dt),Tt=$t(mt),jt=$t(vt),At=it?it.prototype:void 0,Et=At?At.valueOf:void 0;function It(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Mt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Wt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Rt(t){this.__data__=new Mt(t)}function Ct(t,e){var n=zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==r(t)}(t)&&Zt(t)}(t)&&rt.call(t,"callee")&&(!ct.call(t,"callee")||et.call(t)==i)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],o=n.length,a=!!o;for(var s in t)!e&&!rt.call(t,s)||a&&("length"==s||Jt(s,o))||n.push(s);return n}function St(t,r,e){var n=t[r];rt.call(t,r)&&Ut(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ft(t,r){for(var e=t.length;e--;)if(Ut(t[e][0],r))return e;return-1}function Nt(t,r,e,n,o,h,v){var T;if(n&&(T=h?n(t,o,h,v):n(t)),void 0!==T)return T;if(!Gt(t))return t;var S=zt(t);if(S){if(T=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,T)}else{var F=Ht(t),L=F==u||F==c;if(Kt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(F==g||F==i||L&&!h){if($(t))return h?t:{};if(T=function(t){return"function"!=typeof t.constructor||qt(t)?{}:(r=st(t),Gt(r)?ut(r):{});var r}(L?{}:t),!r)return function(t,r){return Dt(t,Bt(t),r)}(t,function(t,r){return t&&Dt(r,Qt(r),t)}(T,t))}else{if(!N[F])return h?t:{};T=function(t,r,e,n){var o=t.constructor;switch(r){case b:return Pt(t);case a:case s:return new o(+t);case w:return function(t,r){var e=r?Pt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case _:case O:case j:case A:case E:case I:case M:case W:case R:return function(t,r){var e=r?Pt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case f:return function(t,r,e){return q(r?e(U(t),!0):U(t),H,new t.constructor)}(t,n,e);case l:case d:return new o(t);case p:return function(t){var r=new t.constructor(t.source,C.exec(t));return r.lastIndex=t.lastIndex,r}(t);case y:return function(t,r,e){return q(r?e(Z(t),!0):Z(t),J,new t.constructor)}(t,n,e);case m:return i=t,Et?Object(Et.call(i)):{}}var i}(t,F,Nt,r)}}v||(v=new Rt);var P=v.get(t);if(P)return P;if(v.set(t,T),!S)var D=e?function(t){return function(t,r,e){var n=r(t);return zt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Qt,Bt)}(t):Qt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(D||t,(function(o,i){D&&(o=t[i=o]),St(T,i,Nt(o,r,e,n,i,t,v))})),T}function Lt(t){return!(!Gt(t)||function(t){return!!Y&&Y in t}(t))&&(Vt(t)||$(t)?nt:S).test($t(t))}function Pt(t){var r=new t.constructor(t.byteLength);return new at(r).set(new at(t)),r}function Dt(t,r,e,n){e||(e={});for(var o=-1,i=r.length;++o<i;){var a=r[o],s=n?n(e[a],t[a],a,e,t):void 0;St(e,a,void 0===s?t[a]:s)}return e}function kt(t,e){var n,o,i=t.__data__;return("string"==(o=r(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function xt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Lt(e)?e:void 0}It.prototype.clear=function(){this.__data__=bt?bt(null):{}},It.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},It.prototype.get=function(t){var r=this.__data__;if(bt){var e=r[t];return e===n?void 0:e}return rt.call(r,t)?r[t]:void 0},It.prototype.has=function(t){var r=this.__data__;return bt?void 0!==r[t]:rt.call(r,t)},It.prototype.set=function(t,r){return this.__data__[t]=bt&&void 0===r?n:r,this},Mt.prototype.clear=function(){this.__data__=[]},Mt.prototype.delete=function(t){var r=this.__data__,e=Ft(r,t);return!(e<0)&&(e==r.length-1?r.pop():ft.call(r,e,1),!0)},Mt.prototype.get=function(t){var r=this.__data__,e=Ft(r,t);return e<0?void 0:r[e][1]},Mt.prototype.has=function(t){return Ft(this.__data__,t)>-1},Mt.prototype.set=function(t,r){var e=this.__data__,n=Ft(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Wt.prototype.clear=function(){this.__data__={hash:new It,map:new(yt||Mt),string:new It}},Wt.prototype.delete=function(t){return kt(this,t).delete(t)},Wt.prototype.get=function(t){return kt(this,t).get(t)},Wt.prototype.has=function(t){return kt(this,t).has(t)},Wt.prototype.set=function(t,r){return kt(this,t).set(t,r),this},Rt.prototype.clear=function(){this.__data__=new Mt},Rt.prototype.delete=function(t){return this.__data__.delete(t)},Rt.prototype.get=function(t){return this.__data__.get(t)},Rt.prototype.has=function(t){return this.__data__.has(t)},Rt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof Mt){var n=e.__data__;if(!yt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Wt(n)}return e.set(t,r),this};var Bt=lt?z(lt,Object):function(){return[]},Ht=function(t){return et.call(t)};function Jt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function qt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Q)}function $t(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,r){return t===r||t!=t&&r!=r}(pt&&Ht(new pt(new ArrayBuffer(1)))!=w||yt&&Ht(new yt)!=f||dt&&Ht(dt.resolve())!=h||mt&&Ht(new mt)!=y||vt&&Ht(new vt)!=v)&&(Ht=function(t){var r=et.call(t),e=r==g?t.constructor:void 0,n=e?$t(e):void 0;if(n)switch(n){case wt:return w;case _t:return f;case Ot:return h;case Tt:return y;case jt:return v}return r});var zt=Array.isArray;function Zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Vt(t)}var Kt=gt||function(){return!1};function Vt(t){var r=Gt(t)?et.call(t):"";return r==u||r==c}function Gt(t){var e=r(t);return!!t&&("object"==e||"function"==e)}function Qt(t){return Zt(t)?Ct(t):function(t){if(!qt(t))return ht(t);var r=[];for(var e in Object(t))rt.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return Nt(t,!0,!0)}}));var j=" ";function A(t,r){return function(t){var r=t.str,e=t.idx,n=t.stopAtNewlines,o=t.stopAtRawNbsp;if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),!r[e+1])return null;if(r[e+1]&&(r[e+1].trim()||n&&"\n\r".includes(r[e+1])||o&&r[e+1]===j))return e+1;if(r[e+2]&&(r[e+2].trim()||n&&"\n\r".includes(r[e+2])||o&&r[e+2]===j))return e+2;for(var i=e+1,a=r.length;i<a;i++)if(r[i].trim()||n&&"\n\r".includes(r[i])||o&&r[i]===j)return i;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}function E(t,r){return function(t){var r=t.str,e=t.idx,n=t.stopAtNewlines,o=t.stopAtRawNbsp;if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(r[~-e]&&(r[~-e].trim()||n&&"\n\r".includes(r[~-e])||o&&r[~-e]===j))return~-e;if(r[e-2]&&(r[e-2].trim()||n&&"\n\r".includes(r[e-2])||o&&r[e-2]===j))return e-2;for(var i=e;i--;)if(r[i]&&(r[i].trim()||n&&"\n\r".includes(r[i])||o&&r[i]===j))return i;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}var I=" ";function M(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;function e(t){return Array.from(t).reverse().join("")}function n(t,r,e){var n=e?"\n":"\r",o=e?"\r":"\n";if(!t)return t;for(var i=0,a="",s=0,u=t.length;s<u;s++)(t[s]===n||t[s]===o&&t[s-1]!==n)&&i++,"\r\n".includes(t[s])||t[s]===I?t[s]===I?a+=t[s]:t[s]===n?i<=r&&(a+=t[s],t[s+1]===o&&(a+=t[s+1],s++)):t[s]===o&&(!t[s-1]||t[s-1]!==n)&&i<=r&&(a+=t[s]):t[s+1]||i||(a+=" ");return a}if("string"==typeof t&&t.length){var o=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(o=+r);var i="",a="";if(t.trim()){if(!t[0].trim())for(var s=0,u=t.length;s<u;s++)if(t[s].trim()){i=t.slice(0,s);break}}else i=t;if(t.trim()&&(""===t.slice(-1).trim()||t.slice(-1)===I))for(var c=t.length;c--;)if(t[c].trim()){a=t.slice(c+1);break}return"".concat(n(i,o,!1)).concat(t.trim()).concat(e(n(e(a),o,!0)))}return t}function W(t,r){if(!Array.isArray(t)||!t.length)return t;var e,n,o=i(i({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(o.strictlyTwoElementsInRangeArrays&&!t.filter((function(t){return t})).every((function(t,r){return 2===t.length||(e=r,n=t.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(e,"th range (").concat(JSON.stringify(t[e],null,4),") has not two but ").concat(n," elements!"));if(!t.filter((function(t){return t})).every((function(t,r){return!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(e=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(e,"th range (").concat(JSON.stringify(t[e],null,4),") does not consist of only natural numbers!"));var a=Math.pow(t.filter((function(t){return t})).length,2),s=0;return Array.from(t).filter((function(t){return t})).sort((function(t,r){return o.progressFn&&(s+=1,o.progressFn(Math.floor(100*s/a))),t[0]===r[0]?t[1]<r[1]?-1:t[1]>r[1]?1:0:t[0]<r[0]?-1:1}))}function R(t,e){function n(t){return"string"==typeof t}function o(t){return t&&"object"===r(t)&&!Array.isArray(t)}if(!Array.isArray(t)||!t.length)return null;var s,u={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(e){if(!o(e))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(e,null,4)," (type ").concat(r(e),")"));if((s=i(i({},u),e)).progressFn&&o(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(r(s.progressFn),'", equal to ').concat(JSON.stringify(s.progressFn,null,4)));if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(n(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!n(s.mergeType)||"2"!==s.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(r(s.mergeType),'", equal to ').concat(JSON.stringify(s.mergeType,null,4)));s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(r(s.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges,null,4)))}else s=i({},u);for(var c,f,l,g=t.filter((function(t){return t})).map((function(t){return a(t)})).filter((function(t){return void 0!==t[2]||t[0]!==t[1]})),h=(c=s.progressFn?W(g,{progressFn:function(t){(l=Math.floor(t/5))!==f&&(f=l,s.progressFn(l))}}):W(g)).length-1,p=h;p>0;p--)s.progressFn&&(l=Math.floor(78*(1-p/h))+21)!==f&&l>f&&(f=l,s.progressFn(l)),(c[p][0]<=c[p-1][0]||!s.joinRangesThatTouchEdges&&c[p][0]<c[p-1][1]||s.joinRangesThatTouchEdges&&c[p][0]<=c[p-1][1])&&(c[p-1][0]=Math.min(c[p][0],c[p-1][0]),c[p-1][1]=Math.max(c[p][1],c[p-1][1]),void 0!==c[p][2]&&(c[p-1][0]>=c[p][0]||c[p-1][1]<=c[p][1])&&null!==c[p-1][2]&&(null===c[p][2]&&null!==c[p-1][2]?c[p-1][2]=null:void 0!==c[p-1][2]?2===s.mergeType&&c[p-1][0]===c[p][0]?c[p-1][2]=c[p][2]:c[p-1][2]+=c[p][2]:c[p-1][2]=c[p][2]),c.splice(p,1),p=c.length);return c.length?c:null}function C(t){return null!=t}function S(t){return Number.isInteger(t)&&t>=0}function F(t){return"string"==typeof t}function N(t){return/^\d*$/.test(t)?parseInt(t,10):t}var L=function(){function t(e){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n=i(i({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),e);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(F(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!F(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(r(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,o,s;return n=t,(o=[{key:"add",value:function(t,e,n){for(var o=this,i=arguments.length,s=new Array(i>3?i-3:0),u=3;u<i;u++)s[u-3]=arguments[u];if(s.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s,null,4)));if(C(t)||C(e)){if(C(t)&&!C(e)){if(Array.isArray(t)){if(t.length){if(t.some((function(t){return Array.isArray(t)})))return void t.forEach((function(t){Array.isArray(t)&&o.add.apply(o,a(t))}));t.length>1&&S(N(t[0]))&&S(N(t[1]))&&this.add.apply(this,a(t))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(t,null,0),') but second-one, "to" is not (').concat(JSON.stringify(e,null,0),")"))}if(!C(t)&&C(e))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(e,null,0),') but first-one, "from" is not (').concat(JSON.stringify(t,null,0),")"));var c=/^\d*$/.test(t)?parseInt(t,10):t,f=/^\d*$/.test(e)?parseInt(e,10):e;if(S(n)&&(n=String(n)),!S(c)||!S(f))throw S(c)&&c>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(r(f),'" equal to: ').concat(JSON.stringify(f,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(r(c),'" equal to: ').concat(JSON.stringify(c,null,4)));if(C(n)&&!F(n)&&!S(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(r(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(C(this.ranges)&&Array.isArray(this.last())&&c===this.last()[1]){if(this.last()[1]=f,this.last()[2],null!==this.last()[2]&&C(n)){var l=!(C(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(l=M(l,this.opts.limitLinebreaksCount)),F(l)&&!l.length||(this.last()[2]=l)}}else{this.ranges||(this.ranges=[]);var g=void 0===n||F(n)&&!n.length?[c,f]:[c,f,this.opts.limitToBeAddedWhitespace?M(n,this.opts.limitLinebreaksCount):n];this.ranges.push(g)}}}},{key:"push",value:function(t,r,e){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[t,r,e].concat(o))}},{key:"current",value:function(){var t=this;return null!=this.ranges?(this.ranges=R(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return C(r[2])?[r[0],r[1],M(r[2],t.opts.limitLinebreaksCount)]:r})):this.ranges):null}},{key:"wipe",value:function(){this.ranges=void 0}},{key:"replace",value:function(t){if(Array.isArray(t)&&t.length){if(!Array.isArray(t[0])||!S(t[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(t[0],null,4)," should be an array and its first element should be an integer, a string index."));this.ranges=Array.from(t)}else this.ranges=void 0}},{key:"last",value:function(){return void 0!==this.ranges&&Array.isArray(this.ranges)?this.ranges[this.ranges.length-1]:null}}])&&e(n.prototype,o),s&&e(n,s),t}();function P(t){return null!=t}function D(t){return"string"==typeof t}function k(t,e,n){var o,i=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!D(t))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(r(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(e&&!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(r(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(r(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(!e||!e.filter((function(t){return t})).length)return t;var s=(o=Array.isArray(e)&&(Number.isInteger(e[0])&&e[0]>=0||/^\d*$/.test(e[0]))&&(Number.isInteger(e[1])&&e[1]>=0||/^\d*$/.test(e[1]))?[Array.from(e)]:Array.from(e)).length,u=0;o.filter((function(t){return t})).forEach((function(t,e){if(n&&(i=Math.floor(u/s*10))!==a&&(a=i,n(i)),!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(e,"th element not an array: ").concat(JSON.stringify(t,null,4),", which is ").concat(r(t)));if(!Number.isInteger(t[0])||t[0]<0){if(!/^\d*$/.test(t[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(e,"th element, array [").concat(t[0],",").concat(t[1],"]. That array has first element not an integer, but ").concat(r(t[0]),", equal to: ").concat(JSON.stringify(t[0],null,4),". Computer doesn't like this."));o[e][0]=Number.parseInt(o[e][0],10)}if(!Number.isInteger(t[1])){if(!/^\d*$/.test(t[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(e,"th element, array [").concat(t[0],",").concat(t[1],"]. That array has second element not an integer, but ").concat(r(t[1]),", equal to: ").concat(JSON.stringify(t[1],null,4),". Computer doesn't like this."));o[e][1]=Number.parseInt(o[e][1],10)}u+=1}));var c=R(o,{progressFn:function(t){n&&(i=10+Math.floor(t/10))!==a&&(a=i,n(i))}});if(!c)return t;var f=c.length;if(f>0){var l=t.slice(c[f-1][1]);t=c.reduce((function(r,e,o,s){n&&(i=20+Math.floor(o/f*80))!==a&&(a=i,n(i));var u=0===o?0:s[o-1][1],c=s[o][0];return r+t.slice(u,c)+(P(s[o][2])?s[o][2]:"")}),""),t+=l}return t}var x=" ",B="&nbsp;",H="\\00A0",J="\\u00A0",q=[{heads:"{{",tails:"}}"},{heads:["{% if","{%- if"],tails:["{% endif","{%- endif"]},{heads:["{% for","{%- for"],tails:["{% endfor","{%- endfor"]},{heads:["{%","{%-"],tails:["%}","-%}"]},{heads:"{#",tails:"#}"}],$=[{heads:"{{",tails:"}}"}],U=[{heads:["<%","<%=","<%-"],tails:["%>","=%>","-%>"]}],z=["abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"],Z={removeWidowPreventionMeasures:!1,convertEntities:!0,targetLanguage:"html",UKPostcodes:!1,hyphens:!0,minWordCount:4,minCharCount:5,ignore:[],reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100,tagRanges:[]};t.defaultOpts=Z,t.removeWidows=function(t,e){function n(t){return"string"==typeof t}var o=Date.now();if(!n(t))throw void 0===t?new Error("string-remove-widows: [THROW_ID_01] the first input argument is completely missing! It should be given as string."):new Error('string-remove-widows: [THROW_ID_02] the first input argument must be string! It was given as "'.concat(r(t),'", equal to:\n').concat(JSON.stringify(t,null,4)));if(e&&!O(e))throw new Error("string-remove-widows: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type ".concat(r(e),", equal to ").concat(JSON.stringify(e,null,4)));var a,s,c,f,l,h,p,y,d,m,v,b,w=Array.isArray,_=t.length,T=new L({mergeType:2}),j=["."],I=/[A-Z]{1,2}[0-9][0-9A-Z]?$/,M=/^[0-9][A-Z]{2}/,W=.06,R=0,C=i(i({},Z),e),S={removeWidows:!1,convertEntities:!1};if(C.dashes&&(C.hyphens=!0,delete C.dashes),C.ignore&&(w(C.ignore)||n(C.ignore))){if(C.ignore=u(C.ignore),C.ignore.includes("all"))C.ignore=C.ignore.concat(q.concat(U));else if(C.ignore.some((function(t){return n(t)}))){var F=[];C.ignore=C.ignore.filter((function(t){return n(t)&&t.length?(["nunjucks","jinja","liquid"].includes(t.trim().toLowerCase())?F=F.concat(q):["hugo"].includes(t.trim().toLowerCase())?F=F.concat($):["hexo"].includes(t.trim().toLowerCase())&&(F=F.concat(U)),!1):"object"===r(t)||void 0})),F.length&&(C.ignore=C.ignore.concat(F))}}else C.ignore=[];function N(r,e){var o=x;C.removeWidowPreventionMeasures?o=" ":C.convertEntities&&(o=B,n(C.targetLanguage)&&("css"===C.targetLanguage.trim().toLowerCase()?o=H:"js"===C.targetLanguage.trim().toLowerCase()&&(o=J))),t.slice(r,e)!==o&&T.push(r,e,o)}function P(){s=0,c=0,f=void 0,l=void 0,h=void 0,p=void 0,y=void 0,d=void 0}C.reportProgressFunc&&(b=Math.floor(C.reportProgressFuncTo-(C.reportProgressFuncTo-C.reportProgressFuncFrom)*W-C.reportProgressFuncFrom)),P();for(var D=function(r){if(!m&&w(C.ignore)&&C.ignore.length&&C.ignore.some((function(e,o){if(w(e.heads)&&e.heads.some((function(e){return t.startsWith(e,r)}))||n(e.heads)&&t.startsWith(e.heads,r))return s+=1,m=C.ignore[o].tails,K=r,!0})),!m&&v&&v===r&&(s+=1,v=void 0),"function"==typeof C.reportProgressFunc&&(a=C.reportProgressFuncFrom+Math.floor(r/_*b))!==R&&(R=a,C.reportProgressFunc(a)),!m&&r&&t[r]&&t[r].trim()&&(!t[r-1]||t[r-1]&&!t[r-1].trim())&&(p=r),!m&&t[r]&&t[r].trim()&&(c+=1),m||!C.hyphens||!("-".concat("—").concat("–").includes(t[r])||t.startsWith("&ndash;",r)||t.startsWith("\\2013",r)||t.startsWith("\\u2013",r)||t.startsWith("&mdash;",r)||t.startsWith("\\2014",r)||t.startsWith("\\u2014",r))||!t[r+1]||t[r+1].trim()&&"&"!==t[r]||t[r-1]&&!t[r-1].trim()&&t[E(t,r)]&&(N(E(t,r)+1,r),S.removeWidows=!0),m||!t.startsWith("&nbsp;",r)&&!t.startsWith("&#160;",r)||(y=r,d=r+6,t[r+6]&&t[r+6].trim()&&(v=r+6),C.convertEntities?"css"!==C.targetLanguage&&"js"!==C.targetLanguage||(T.push(r,r+6,"css"===C.targetLanguage?H:J),S.convertEntities=!0):(T.push(r,r+6,x),S.convertEntities=!0)),!m&&t[r+4]&&"\\"===t[r]&&"0"===t[r+1]&&"0"===t[r+2]&&"A"===t[r+3].toUpperCase()&&"0"===t[r+4]&&(y=r,d=r+5,t[r+5]&&t[r+5].trim()&&(v=r+5),C.convertEntities?"html"!==C.targetLanguage&&"js"!==C.targetLanguage||(T.push(r,r+5,"html"===C.targetLanguage?B:J),S.convertEntities=!0):(T.push(r,r+5,x),S.convertEntities=!0)),!m&&"\\"===t[r]&&t[r+1]&&"u"===t[r+1].toLowerCase()&&"0"===t[r+2]&&"0"===t[r+3]&&t[r+4]&&"A"===t[r+4].toUpperCase()&&"0"===t[r+5]&&(y=r,d=r+6,t[r+6]&&t[r+6].trim()&&(v=r+6),C.convertEntities?"html"!==C.targetLanguage&&"css"!==C.targetLanguage||T.push(r,r+6,"html"===C.targetLanguage?B:H):T.push(r,r+6,x)),m||t[r]!==x||(y=r,d=r+1,C.convertEntities&&T.push(r,r+1,"css"===C.targetLanguage?H:"js"===C.targetLanguage?J:B)),m||!t[r]||!t[r].trim()||t[r-1]&&t[r-1].trim()||(s+=1),!m&&(!t[r]||"\r\n".includes(t[r])||("\n"===t[r]||"\r"===t[r]||"\r"===t[r]&&"\n"===t[r+1])&&t[r-1]&&j.includes(t[E(t,r)]))){var e,o;if((!C.minWordCount||s>=C.minWordCount)&&(!C.minCharCount||c>=C.minCharCount))void 0!==h&&void 0!==p&&void 0!==y&&void 0!==d?h>y?(e=h,o=p):(e=y,o=d):void 0!==h&&void 0!==p?(e=h,o=p):void 0!==y&&void 0!==d&&(e=y,o=d),e&&o||!f||!l||(e=f,o=l),e&&o&&(N(e,o),S.removeWidows=!0);P()}C.UKPostcodes&&t[r]&&!t[r].trim()&&t[r-1]&&t[r-1].trim()&&I.test(t.slice(0,r))&&t[A(t,r)]&&M.test(t.slice(A(t,r)))&&(N(r,A(t,r)),S.removeWidows=!0),m||!t[r]||t[r].trim()||!t[r-1]||!t[r-1].trim()||!(void 0===h||t[h-1]&&t[h-1].trim())||"/>".includes(t[A(t,r)])||t.slice(0,r).trim().endsWith("br")||t.slice(0,r).trim().endsWith("hr")||t.slice(0,r).endsWith("<")&&z.some((function(e){return t.startsWith(e,A(t,r))}))||(f=h,l=p,h=r,p=void 0,void 0===y&&void 0===d||(y=void 0,d=void 0));var i=void 0;m&&(!n(m)||m.length&&!t.startsWith(m,r)?!w(m)||m.length&&!m.some((function(e){if(t.startsWith(e,r))return i=e,K=r,!0}))||(m=void 0,r+=i.length,w(C.ignore)&&C.ignore.length&&t[r+1]&&C.ignore.some((function(e){return K=r,g(t,r,e.tails,{trimBeforeMatching:!0,cb:function(e,n,o){return o&&t[(r=o-1)+1]&&t[r+1].trim()&&(s+=1),K=r,!0}})}))):m=void 0),t[r]&&"\r\n".includes(t[r])&&(s=0,c=0),w(C.tagRanges)&&C.tagRanges.length&&C.tagRanges.some((function(t){if(r>=t[0]&&r<=t[1]&&t[1]-1>r)return r=t[1]-1,K=r,!0})),K=r},K=0;K<=_;K++)D(K);return k(t,T.current()).split("").forEach((function(t,r){})),{res:k(t,T.current(),C.reportProgressFunc?function(t){(a=Math.floor(.94*(C.reportProgressFuncTo-C.reportProgressFuncFrom)+t/100*(C.reportProgressFuncTo-C.reportProgressFuncFrom)*W))!==R&&(R=a,C.reportProgressFunc(a))}:null),ranges:T.current(),log:{timeTakenInMiliseconds:Date.now()-o},whatWasDone:S}},t.version="1.7.0",Object.defineProperty(t,"__esModule",{value:!0})}));
