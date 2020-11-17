/**
 * string-left-right
 * Looks up the first non-whitespace character to the left/right of a given index
 * Version: 2.3.32
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-left-right/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).stringLeftRight={})}(this,(function(t){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function n(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var c,a,f=Function.prototype,l=Object.prototype,s=f.toString,p=l.hasOwnProperty,h=s.call(Object),d=l.toString,y=(c=Object.getPrototypeOf,a=Object,function(t){return c(a(t))});var v=function(t){if(!function(t){return!!t&&"object"==r(t)}(t)||"[object Object]"!=d.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var e=y(t);if(null===e)return!0;var n=p.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==h},g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var b=function(t,r,e){return t(e={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&e.path)}},e.exports),e.exports}((function(t,e){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",a="[object Function]",f="[object GeneratorFunction]",l="[object Map]",s="[object Number]",p="[object Object]",h="[object Promise]",d="[object RegExp]",y="[object Set]",v="[object String]",b="[object Symbol]",m="[object WeakMap]",_="[object ArrayBuffer]",w="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",A="[object Int8Array]",S="[object Int16Array]",x="[object Int32Array]",P="[object Uint8Array]",I="[object Uint8ClampedArray]",N="[object Uint16Array]",E="[object Uint32Array]",R=/\w*$/,C=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,D={};D[i]=D["[object Array]"]=D[_]=D[w]=D[u]=D[c]=D[j]=D[O]=D[A]=D[S]=D[x]=D[l]=D[s]=D[p]=D[d]=D[y]=D[v]=D[b]=D[P]=D[I]=D[N]=D[E]=!0,D["[object Error]"]=D[a]=D[m]=!1;var T="object"==r(g)&&g&&g.Object===Object&&g,$="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,W=T||$||Function("return this")(),F=e&&!e.nodeType&&e,k=F&&t&&!t.nodeType&&t,M=k&&k.exports===F;function U(t,r){return t.set(r[0],r[1]),t}function B(t,r){return t.add(r),t}function q(t,r,e,n){var o=-1,i=t?t.length:0;for(n&&i&&(e=t[++o]);++o<i;)e=r(e,t[o],o,t);return e}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function H(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function V(t,r){return function(e){return t(r(e))}}function G(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var J,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=W["__core-js_shared__"],Z=(J=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",tt=Q.toString,rt=X.hasOwnProperty,et=X.toString,nt=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=M?W.Buffer:void 0,it=W.Symbol,ut=W.Uint8Array,ct=V(Object.getPrototypeOf,Object),at=Object.create,ft=X.propertyIsEnumerable,lt=K.splice,st=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,ht=V(Object.keys,Object),dt=kt(W,"DataView"),yt=kt(W,"Map"),vt=kt(W,"Promise"),gt=kt(W,"Set"),bt=kt(W,"WeakMap"),mt=kt(Object,"create"),_t=zt(dt),wt=zt(yt),jt=zt(vt),Ot=zt(gt),At=zt(bt),St=it?it.prototype:void 0,xt=St?St.valueOf:void 0;function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function It(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Nt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){this.__data__=new It(t)}function Rt(t,e){var n=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==r(t)}(t)&&Gt(t)}(t)&&rt.call(t,"callee")&&(!ft.call(t,"callee")||et.call(t)==i)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],o=n.length,u=!!o;for(var c in t)!e&&!rt.call(t,c)||u&&("length"==c||Bt(c,o))||n.push(c);return n}function Ct(t,r,e){var n=t[r];rt.call(t,r)&&Ht(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Lt(t,r){for(var e=t.length;e--;)if(Ht(t[e][0],r))return e;return-1}function Dt(t,r,e,n,o,h,g){var m;if(n&&(m=h?n(t,o,h,g):n(t)),void 0!==m)return m;if(!Qt(t))return t;var C=Vt(t);if(C){if(m=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,m)}else{var L=Ut(t),T=L==a||L==f;if(Jt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(L==p||L==i||T&&!h){if(z(t))return h?t:{};if(m=function(t){return"function"!=typeof t.constructor||qt(t)?{}:(r=ct(t),Qt(r)?at(r):{});var r}(T?{}:t),!r)return function(t,r){return Wt(t,Mt(t),r)}(t,function(t,r){return t&&Wt(r,Xt(r),t)}(m,t))}else{if(!D[L])return h?t:{};m=function(t,r,e,n){var o=t.constructor;switch(r){case _:return $t(t);case u:case c:return new o(+t);case w:return function(t,r){var e=r?$t(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case j:case O:case A:case S:case x:case P:case I:case N:case E:return function(t,r){var e=r?$t(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return q(r?e(H(t),!0):H(t),U,new t.constructor)}(t,n,e);case s:case v:return new o(t);case d:return function(t){var r=new t.constructor(t.source,R.exec(t));return r.lastIndex=t.lastIndex,r}(t);case y:return function(t,r,e){return q(r?e(G(t),!0):G(t),B,new t.constructor)}(t,n,e);case b:return i=t,xt?Object(xt.call(i)):{}}var i}(t,L,Dt,r)}}g||(g=new Et);var $=g.get(t);if($)return $;if(g.set(t,m),!C)var W=e?function(t){return function(t,r,e){var n=r(t);return Vt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Xt,Mt)}(t):Xt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(W||t,(function(o,i){W&&(o=t[i=o]),Ct(m,i,Dt(o,r,e,n,i,t,g))})),m}function Tt(t){return!(!Qt(t)||function(t){return!!Z&&Z in t}(t))&&(Kt(t)||z(t)?nt:C).test(zt(t))}function $t(t){var r=new t.constructor(t.byteLength);return new ut(r).set(new ut(t)),r}function Wt(t,r,e,n){e||(e={});for(var o=-1,i=r.length;++o<i;){var u=r[o],c=n?n(e[u],t[u],u,e,t):void 0;Ct(e,u,void 0===c?t[u]:c)}return e}function Ft(t,e){var n,o,i=t.__data__;return("string"==(o=r(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function kt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Tt(e)?e:void 0}Pt.prototype.clear=function(){this.__data__=mt?mt(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var r=this.__data__;if(mt){var e=r[t];return e===n?void 0:e}return rt.call(r,t)?r[t]:void 0},Pt.prototype.has=function(t){var r=this.__data__;return mt?void 0!==r[t]:rt.call(r,t)},Pt.prototype.set=function(t,r){return this.__data__[t]=mt&&void 0===r?n:r,this},It.prototype.clear=function(){this.__data__=[]},It.prototype.delete=function(t){var r=this.__data__,e=Lt(r,t);return!(e<0)&&(e==r.length-1?r.pop():lt.call(r,e,1),!0)},It.prototype.get=function(t){var r=this.__data__,e=Lt(r,t);return e<0?void 0:r[e][1]},It.prototype.has=function(t){return Lt(this.__data__,t)>-1},It.prototype.set=function(t,r){var e=this.__data__,n=Lt(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Nt.prototype.clear=function(){this.__data__={hash:new Pt,map:new(yt||It),string:new Pt}},Nt.prototype.delete=function(t){return Ft(this,t).delete(t)},Nt.prototype.get=function(t){return Ft(this,t).get(t)},Nt.prototype.has=function(t){return Ft(this,t).has(t)},Nt.prototype.set=function(t,r){return Ft(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new It},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof It){var n=e.__data__;if(!yt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Nt(n)}return e.set(t,r),this};var Mt=st?V(st,Object):function(){return[]},Ut=function(t){return et.call(t)};function Bt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||L.test(t))&&t>-1&&t%1==0&&t<r}function qt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||X)}function zt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ht(t,r){return t===r||t!=t&&r!=r}(dt&&Ut(new dt(new ArrayBuffer(1)))!=w||yt&&Ut(new yt)!=l||vt&&Ut(vt.resolve())!=h||gt&&Ut(new gt)!=y||bt&&Ut(new bt)!=m)&&(Ut=function(t){var r=et.call(t),e=r==p?t.constructor:void 0,n=e?zt(e):void 0;if(n)switch(n){case _t:return w;case wt:return l;case jt:return h;case Ot:return y;case At:return m}return r});var Vt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Kt(t)}var Jt=pt||function(){return!1};function Kt(t){var r=Qt(t)?et.call(t):"";return r==a||r==f}function Qt(t){var e=r(t);return!!t&&("object"==e||"function"==e)}function Xt(t){return Gt(t)?Rt(t):function(t){if(!qt(t))return ht(t);var r=[];for(var e in Object(t))rt.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return Dt(t,!0,!0)}}));function m(t){return"number"==typeof t}function _(t){return"string"==typeof t}function w(t){var r=t.str,e=t.idx,n=t.stopAtNewlines;if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),!r[e+1])return null;if(r[e+1]&&(!n&&r[e+1].trim()||n&&(r[e+1].trim()||"\n\r".includes(r[e+1]))))return e+1;if(r[e+2]&&(!n&&r[e+2].trim()||n&&(r[e+2].trim()||"\n\r".includes(r[e+2]))))return e+2;for(var o=e+1,i=r.length;o<i;o++)if(r[o]&&(!n&&r[o].trim()||n&&(r[o].trim()||"\n\r".includes(r[o]))))return o;return null}function j(t,r){return w({str:t,idx:r,stopAtNewlines:!1})}function O(t){var r=t.str,e=t.idx,n=t.stopAtNewlines,o=t.stopAtRawNbsp;if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(r[~-e]&&(r[~-e].trim()||n&&"\n\r".includes(r[~-e])||o&&" "===r[~-e]))return~-e;if(r[e-2]&&(r[e-2].trim()||n&&"\n\r".includes(r[e-2])||o&&" "===r[e-2]))return e-2;for(var i=e;i--;)if(r[i]&&(r[i].trim()||n&&"\n\r".includes(r[i])||o&&" "===r[i]))return i;return null}function A(t,r){return O({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}function S(t,r,e,n,o){if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!r[e+1]||"left"===t&&!r[~-e])return null;for(var i,u,c,a,f,l=e,s=[],p=0;p<o.length;)if(_(o[p])&&o[p].length){var h=(a=o[p],f=void 0,((f={value:a,hungry:!1,optional:!1}).value.endsWith("?*")||f.value.endsWith("*?"))&&f.value.length>2?(f.value=f.value.slice(0,f.value.length-2),f.optional=!0,f.hungry=!0):f.value.endsWith("?")&&f.value.length>1?(f.value=f.value.slice(0,~-f.value.length),f.optional=!0):f.value.endsWith("*")&&f.value.length>1&&(f.value=f.value.slice(0,~-f.value.length),f.hungry=!0),f),d=h.value,y=h.optional,v=h.hungry,g="right"===t?j(r,l):A(r,l);if(!(n.i&&r[g].toLowerCase()===d.toLowerCase()||!n.i&&r[g]===d)){if(y){p+=1;continue}if(c){p+=1,c=void 0;continue}return null}var b="right"===t?j(r,g):A(r,g);v&&(n.i&&r[b].toLowerCase()===d.toLowerCase()||!n.i&&r[b]===d)?c=!0:p+=1,"right"===t&&g>l+1?s.push([l+1,g]):"left"===t&&g<~-l&&s.unshift([g+1,l]),l=g,"right"===t?(void 0===i&&(i=g),u=g):(void 0===u&&(u=g),i=g)}else p+=1;return void 0===i?null:{gaps:s,leftmostChar:i,rightmostChar:u}}function x(t,r){for(var e=arguments.length,n=new Array(e>2?e-2:0),i=2;i<e;i++)n[i-2]=arguments[i];if(!n.length)return A(t,r);var u={i:!1};return S("left",t,r,v(n[0])?o(o({},u),n.shift()):u,Array.from(n).reverse())}function P(t,r){for(var e=arguments.length,n=new Array(e>2?e-2:0),i=2;i<e;i++)n[i-2]=arguments[i];if(!n.length)return j(t,r);var u={i:!1};return S("right",t,r,v(n[0])?o(o({},u),n.shift()):u,n)}function I(t,r,e,n,o){if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!r[e+1]||"left"===t&&(m(e)&&e<1||"0"===e))return null;var u=null,c=null;do{null!==(u="right"===t?P.apply(void 0,[r,m(c)?c:e].concat(i(o))):x.apply(void 0,[r,m(c)?c:e].concat(i(o))))&&(c="right"===t?u.rightmostChar:u.leftmostChar)}while(u);if(null!=c&&"right"===t&&(c+=1),null===c)return null;if("right"===t){if(r[c]&&r[c].trim())return c;var a=j(r,c);if(0===n.mode){if(a===c+1)return c;if(!(r.slice(c,a||r.length).trim()||r.slice(c,a||r.length).includes("\n")||r.slice(c,a||r.length).includes("\r")))return a?~-a:r.length;for(var f=c,l=r.length;f<l;f++)if("\n\r".includes(r[f]))return f}else{if(1===n.mode)return c;if(2===n.mode){var s=r.slice(c);if(s.trim()||s.includes("\n")||s.includes("\r"))for(var p=c,h=r.length;p<h;p++)if(r[p].trim()||"\n\r".includes(r[p]))return p;return r.length}}return a||r.length}if(r[c]&&r[~-c]&&r[~-c].trim())return c;var d=A(r,c);if(0===n.mode){if(d===c-2)return c;if(r.slice(0,c).trim()||r.slice(0,c).includes("\n")||r.slice(0,c).includes("\r"))for(var y=c;y--;)if("\n\r".includes(r[y])||r[y].trim())return y+1+(r[y].trim()?1:0);return 0}if(1===n.mode)return c;if(2===n.mode){var v=r.slice(0,c);if(v.trim()||v.includes("\n")||v.includes("\r"))for(var g=c;g--;)if(r[g].trim()||"\n\r".includes(r[g]))return g+1;return 0}return null!==d?d+1:0}t.chompLeft=function(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),u=2;u<n;u++)i[u-2]=arguments[u];if(!i.length||1===i.length&&v(i[0]))return null;var c={mode:0};if(v(i[0])){var a=o(o({},c),b(i[0]));if(a.mode){if(_(a.mode)&&"0123".includes(a.mode))a.mode=Number.parseInt(a.mode,10);else if(!m(a.mode))throw new Error("string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(a.mode," (type ").concat(r(a.mode),")"))}else a.mode=0;return I("left",t,e,a,b(i).slice(1))}return _(i[0])?I("left",t,e,c,b(i)):I("left",t,e,c,b(i).slice(1))},t.chompRight=function(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),u=2;u<n;u++)i[u-2]=arguments[u];if(!i.length||1===i.length&&v(i[0]))return null;var c={mode:0};if(v(i[0])){var a=o(o({},c),b(i[0]));if(a.mode){if(_(a.mode)&&"0123".includes(a.mode))a.mode=Number.parseInt(a.mode,10);else if(!m(a.mode))throw new Error("string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(a.mode," (type ").concat(r(a.mode),")"))}else a.mode=0;return I("right",t,e,a,b(i).slice(1))}return _(i[0])?I("right",t,e,c,b(i)):I("right",t,e,c,b(i).slice(1))},t.left=A,t.leftSeq=x,t.leftStopAtNewLines=function(t,r){return O({str:t,idx:r,stopAtNewlines:!0,stopAtRawNbsp:!1})},t.leftStopAtRawNbsp=function(t,r){return O({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!0})},t.right=j,t.rightSeq=P,t.rightStopAtNewLines=function(t,r){return w({str:t,idx:r,stopAtNewlines:!0})},Object.defineProperty(t,"__esModule",{value:!0})}));
