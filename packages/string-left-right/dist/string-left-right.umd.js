/**
 * string-left-right
 * Look what's to the left or the right of a given index within a string
 * Version: 2.3.4
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-left-right
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringLeftRight={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n="[object Object]";var o,i,u=Function.prototype,c=Object.prototype,a=u.toString,l=c.hasOwnProperty,f=a.call(Object),s=c.toString,h=(o=Object.getPrototypeOf,i=Object,function(t){return o(i(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=h(t);if(null===e)return!0;var r=l.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&a.call(r)==f},g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var d=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",a="[object Function]",l="[object GeneratorFunction]",f="[object Map]",s="[object Number]",h="[object Object]",p="[object RegExp]",d="[object Set]",y="[object String]",v="[object Symbol]",b="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",I="[object Uint16Array]",L="[object Uint32Array]",P=/\w*$/,C=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,W={};W[i]=W["[object Array]"]=W[b]=W[_]=W[u]=W[c]=W[m]=W[j]=W[w]=W[O]=W[A]=W[f]=W[s]=W[h]=W[p]=W[d]=W[y]=W[v]=W[S]=W[x]=W[I]=W[L]=!0,W["[object Error]"]=W[a]=W["[object WeakMap]"]=!1;var R="object"==typeof g&&g&&g.Object===Object&&g,T="object"==typeof self&&self&&self.Object===Object&&self,$=R||T||Function("return this")(),k=e&&!e.nodeType&&e,F=k&&t&&!t.nodeType&&t,M=F&&F.exports===k;function B(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function N(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function U(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function q(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function z(t,e){return function(r){return t(e(r))}}function H(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var V,G=Array.prototype,J=Function.prototype,K=Object.prototype,Q=$["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=M?$.Buffer:void 0,nt=$.Symbol,ot=$.Uint8Array,it=z(Object.getPrototypeOf,Object),ut=Object.create,ct=K.propertyIsEnumerable,at=G.splice,lt=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,st=z(Object.keys,Object),ht=Ft($,"DataView"),pt=Ft($,"Map"),gt=Ft($,"Promise"),dt=Ft($,"Set"),yt=Ft($,"WeakMap"),vt=Ft(Object,"create"),bt=Ut(ht),_t=Ut(pt),mt=Ut(gt),jt=Ut(dt),wt=Ut(yt),Ot=nt?nt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Lt(t){this.__data__=new xt(t)}function Pt(t,e){var r=zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ht(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Dt(u,n))||r.push(u);return r}function Ct(t,e,r){var n=t[e];Z.call(t,e)&&qt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Et(t,e){for(var r=t.length;r--;)if(qt(t[r][0],e))return r;return-1}function Wt(t,e,r,n,o,g,C){var E;if(n&&(E=g?n(t,o,g,C):n(t)),void 0!==E)return E;if(!Jt(t))return t;var R=zt(t);if(R){if(E=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,E)}else{var T=Bt(t),$=T==a||T==l;if(Vt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(T==h||T==i||$&&!g){if(U(t))return g?t:{};if(E=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:(e=it(t),Jt(e)?ut(e):{});var e}($?{}:t),!e)return function(t,e){return $t(t,Mt(t),e)}(t,function(t,e){return t&&$t(e,Kt(e),t)}(E,t))}else{if(!W[T])return g?t:{};E=function(t,e,r,n){var o=t.constructor;switch(e){case b:return Tt(t);case u:case c:return new o(+t);case _:return function(t,e){var r=e?Tt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case j:case w:case O:case A:case S:case x:case I:case L:return function(t,e){var r=e?Tt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return N(e?r(q(t),!0):q(t),B,new t.constructor)}(t,n,r);case s:case y:return new o(t);case p:return(l=new(a=t).constructor(a.source,P.exec(a))).lastIndex=a.lastIndex,l;case d:return function(t,e,r){return N(e?r(H(t),!0):H(t),D,new t.constructor)}(t,n,r);case v:return i=t,At?Object(At.call(i)):{}}var i;var a,l}(t,T,Wt,e)}}C||(C=new Lt);var k=C.get(t);if(k)return k;if(C.set(t,E),!R)var F=r?function(t){return function(t,e,r){var n=e(t);return zt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Kt,Mt)}(t):Kt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(F||t,(function(o,i){F&&(o=t[i=o]),Ct(E,i,Wt(o,e,r,n,i,t,C))})),E}function Rt(t){return!(!Jt(t)||function(t){return!!X&&X in t}(t))&&(Gt(t)||U(t)?et:C).test(Ut(t))}function Tt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function $t(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],c=n?n(r[u],t[u],u,r,t):void 0;Ct(r,u,void 0===c?t[u]:c)}return r}function kt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Rt(r)?r:void 0}St.prototype.clear=function(){this.__data__=vt?vt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?n:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,r=Et(e,t);return!(r<0)&&(r==e.length-1?e.pop():at.call(e,r,1),!0)},xt.prototype.get=function(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]},xt.prototype.has=function(t){return Et(this.__data__,t)>-1},xt.prototype.set=function(t,e){var r=this.__data__,n=Et(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},It.prototype.clear=function(){this.__data__={hash:new St,map:new(pt||xt),string:new St}},It.prototype.delete=function(t){return kt(this,t).delete(t)},It.prototype.get=function(t){return kt(this,t).get(t)},It.prototype.has=function(t){return kt(this,t).has(t)},It.prototype.set=function(t,e){return kt(this,t).set(t,e),this},Lt.prototype.clear=function(){this.__data__=new xt},Lt.prototype.delete=function(t){return this.__data__.delete(t)},Lt.prototype.get=function(t){return this.__data__.get(t)},Lt.prototype.has=function(t){return this.__data__.has(t)},Lt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof xt){var o=n.__data__;if(!pt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new It(o)}return n.set(t,e),this};var Mt=lt?z(lt,Object):function(){return[]},Bt=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Nt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function Ut(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,e){return t===e||t!=t&&e!=e}(ht&&Bt(new ht(new ArrayBuffer(1)))!=_||pt&&Bt(new pt)!=f||gt&&"[object Promise]"!=Bt(gt.resolve())||dt&&Bt(new dt)!=d||yt&&"[object WeakMap]"!=Bt(new yt))&&(Bt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Ut(r):void 0;if(n)switch(n){case bt:return _;case _t:return f;case mt:return"[object Promise]";case jt:return d;case wt:return"[object WeakMap]"}return e});var zt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Gt(t)}var Vt=ft||function(){return!1};function Gt(t){var e=Jt(t)?tt.call(t):"";return e==a||e==l}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return Ht(t)?Pt(t):function(t){if(!Nt(t))return st(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Wt(t,!0,!0)}}));function y(t){return"number"==typeof t}function v(t){return"string"==typeof t}function b(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!r&&t[e+1].trim().length||r&&(t[e+1].trim().length||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!r&&t[e+2].trim().length||r&&(t[e+2].trim().length||"\n\r".includes(t[e+2]))))return e+2;for(var n=e+1,o=t.length;n<o;n++)if(t[n]&&(!r&&t[n].trim().length||r&&(t[n].trim().length||"\n\r".includes(t[n]))))return n;return null}function _(t,e){return b(t,e,!1)}function m(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[e-1]&&(!r&&t[e-1].trim().length||r&&(t[e-1].trim().length||"\n\r".includes(t[e-1]))))return e-1;if(t[e-2]&&(!r&&t[e-2].trim().length||r&&(t[e-2].trim().length||"\n\r".includes(t[e-2]))))return e-2;for(var n=e;n--;)if(t[n]&&(!r&&t[n].trim().length||r&&(t[n].trim().length||"\n\r".includes(t[n]))))return n;return null}function j(t,e){return m(t,e,!1)}function w(t,e,r,n,o){if("string"!=typeof e||!e.length)return null;if(r&&"number"==typeof r||(r=0),"right"===t&&!e[r+1]||"left"===t&&!e[r-1])return null;for(var i,u,c,a,l,f=r,s=[],h=0;h<o.length;)if(v(o[h])&&o[h].length){var p=(a=o[h],l=void 0,((l={value:a,hungry:!1,optional:!1}).value.endsWith("?*")||l.value.endsWith("*?"))&&l.value.length>2?(l.value=l.value.slice(0,l.value.length-2),l.optional=!0,l.hungry=!0):l.value.endsWith("?")&&l.value.length>1?(l.value=l.value.slice(0,l.value.length-1),l.optional=!0):l.value.endsWith("*")&&l.value.length>1&&(l.value=l.value.slice(0,l.value.length-1),l.hungry=!0),l),g=p.value,d=p.optional,y=p.hungry,b="right"===t?_(e,f):j(e,f);if(!(n.i&&e[b].toLowerCase()===g.toLowerCase()||!n.i&&e[b]===g)){if(d){h++;continue}if(c){h++,c=void 0;continue}return null}var m="right"===t?_(e,b):j(e,b);y&&(n.i&&e[m].toLowerCase()===g.toLowerCase()||!n.i&&e[m]===g)?c=!0:h++,"right"===t&&b>f+1?s.push([f+1,b]):"left"===t&&b<f-1&&s.unshift([b+1,f]),f=b,"right"===t?(void 0===i&&(i=b),u=b):(void 0===u&&(u=b),i=b)}else h++;return void 0===i?null:{gaps:s,leftmostChar:i,rightmostChar:u}}function O(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];if(!n.length)return j(t,e);var i={i:!1};return w("left",t,e,p(n[0])?Object.assign({},i,n.shift()):i,Array.from(n).reverse())}function A(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];if(!n.length)return _(t,e);var i={i:!1};return w("right",t,e,p(n[0])?Object.assign({},i,n.shift()):i,n)}function S(t,e,n,o,i){if("string"!=typeof e||!e.length)return null;if(n&&"number"==typeof n||(n=0),"right"===t&&!e[n+1]||"left"===t&&(y(n)&&n<1||"0"===n))return null;var u=null,c=null;do{null!==(u="right"===t?A.apply(void 0,[e,y(c)?c:n].concat(r(i))):O.apply(void 0,[e,y(c)?c:n].concat(r(i))))&&(c="right"===t?u.rightmostChar:u.leftmostChar)}while(u);if(null!=c&&"right"===t&&c++,null===c)return null;if("right"===t){if(e[c]&&e[c].trim().length)return c;var a=_(e,c);if(0===o.mode){if(a===c+1)return c;if(!(e.slice(c,a||e.length).trim().length||e.slice(c,a||e.length).includes("\n")||e.slice(c,a||e.length).includes("\r")))return a?a-1:e.length;for(var l=c,f=e.length;l<f;l++)if("\n\r".includes(e[l]))return l}else{if(1===o.mode)return c;if(2===o.mode){var s=e.slice(c);if(s.trim().length||s.includes("\n")||s.includes("\r"))for(var h=c,p=e.length;h<p;h++)if(e[h].trim().length||"\n\r".includes(e[h]))return h;return e.length}}return a||e.length}if(e[c]&&e[c-1]&&e[c-1].trim().length)return c;var g=j(e,c);if(0===o.mode){if(g===c-2)return c;if(e.slice(0,c).trim().length||e.slice(0,c).includes("\n")||e.slice(0,c).includes("\r"))for(var d=c;d--;)if("\n\r".includes(e[d])||e[d].trim().length)return d+1+(e[d].trim().length?1:0);return 0}if(1===o.mode)return c;if(2===o.mode){var v=e.slice(0,c);if(v.trim().length||v.includes("\n")||v.includes("\r"))for(var b=c;b--;)if(e[b].trim().length||"\n\r".includes(e[b]))return b+1;return 0}return null!==g?g+1:0}t.chompLeft=function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];if(!o.length||1===o.length&&p(o[0]))return null;var u={mode:0};if(p(o[0])){var c=Object.assign({},u,d(o[0]));if(c.mode){if(v(c.mode)&&"0123".includes(c.mode))c.mode=Number.parseInt(c.mode,10);else if(!y(c.mode))throw new Error("string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(c.mode," (type ").concat(e(c.mode),")"))}else c.mode=0;return S("left",t,r,c,d(o).slice(1))}return v(o[0])?S("left",t,r,u,d(o)):S("left",t,r,u,d(o).slice(1))},t.chompRight=function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];if(!o.length||1===o.length&&p(o[0]))return null;var u={mode:0};if(p(o[0])){var c=Object.assign({},u,d(o[0]));if(c.mode){if(v(c.mode)&&"0123".includes(c.mode))c.mode=Number.parseInt(c.mode,10);else if(!y(c.mode))throw new Error("string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(c.mode," (type ").concat(e(c.mode),")"))}else c.mode=0;return S("right",t,r,c,d(o).slice(1))}return v(o[0])?S("right",t,r,u,d(o)):S("right",t,r,u,d(o).slice(1))},t.left=j,t.leftSeq=O,t.leftStopAtNewLines=function(t,e){return m(t,e,!0)},t.right=_,t.rightSeq=A,t.rightStopAtNewLines=function(t,e){return b(t,e,!0)},Object.defineProperty(t,"__esModule",{value:!0})}));
