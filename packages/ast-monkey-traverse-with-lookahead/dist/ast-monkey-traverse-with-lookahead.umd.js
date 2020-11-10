/**
 * ast-monkey-traverse-with-lookahead
 * Utility library to traverse AST, reports upcoming values
 * Version: 1.1.13
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-monkey-traverse-with-lookahead/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).astMonkeyTraverseWithLookahead=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a=function(t,r,e){return t(e={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&e.path)}},e.exports),e.exports}((function(r,e){var n="__lodash_hash_undefined__",o=9007199254740991,c="[object Arguments]",a="[object Boolean]",i="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object Promise]",b="[object RegExp]",d="[object Set]",v="[object String]",_="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",w="[object DataView]",O="[object Float32Array]",m="[object Float64Array]",A="[object Int8Array]",S="[object Int16Array]",x="[object Int32Array]",P="[object Uint8Array]",E="[object Uint8ClampedArray]",T="[object Uint16Array]",I="[object Uint32Array]",k=/\w*$/,$=/^\[object .+?Constructor\]$/,D=/^(?:0|[1-9]\d*)$/,F={};F[c]=F["[object Array]"]=F[j]=F[w]=F[a]=F[i]=F[O]=F[m]=F[A]=F[S]=F[x]=F[l]=F[p]=F[y]=F[b]=F[d]=F[v]=F[_]=F[P]=F[E]=F[T]=F[I]=!0,F["[object Error]"]=F[f]=F[g]=!1;var M="object"==t(u)&&u&&u.Object===Object&&u,U="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,B=M||U||Function("return this")(),C=e&&!e.nodeType&&e,L=C&&r&&!r.nodeType&&r,R=L&&L.exports===C;function W(t,r){return t.set(r[0],r[1]),t}function q(t,r){return t.add(r),t}function z(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function V(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function G(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function K(t,r){return function(e){return t(r(e))}}function N(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var H,J=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=B["__core-js_shared__"],Z=(H=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",tt=Q.toString,rt=X.hasOwnProperty,et=X.toString,nt=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=R?B.Buffer:void 0,ct=B.Symbol,ut=B.Uint8Array,at=K(Object.getPrototypeOf,Object),it=Object.create,ft=X.propertyIsEnumerable,st=J.splice,lt=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,yt=K(Object.keys,Object),ht=Lt(B,"DataView"),bt=Lt(B,"Map"),dt=Lt(B,"Promise"),vt=Lt(B,"Set"),_t=Lt(B,"WeakMap"),gt=Lt(Object,"create"),jt=Vt(ht),wt=Vt(bt),Ot=Vt(dt),mt=Vt(vt),At=Vt(_t),St=ct?ct.prototype:void 0,xt=St?St.valueOf:void 0;function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Tt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function It(t){this.__data__=new Et(t)}function kt(r,e){var n=Kt(r)||function(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&Nt(r)}(r)&&rt.call(r,"callee")&&(!ft.call(r,"callee")||et.call(r)==c)}(r)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(r.length,String):[],o=n.length,u=!!o;for(var a in r)!e&&!rt.call(r,a)||u&&("length"==a||qt(a,o))||n.push(a);return n}function $t(t,r,e){var n=t[r];rt.call(t,r)&&Gt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Dt(t,r){for(var e=t.length;e--;)if(Gt(t[e][0],r))return e;return-1}function Ft(t,r,e,n,o,u,h){var g;if(n&&(g=u?n(t,o,u,h):n(t)),void 0!==g)return g;if(!Qt(t))return t;var $=Kt(t);if($){if(g=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,g)}else{var D=Wt(t),M=D==f||D==s;if(Ht(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(D==y||D==c||M&&!u){if(V(t))return u?t:{};if(g=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(r=at(t),Qt(r)?it(r):{});var r}(M?{}:t),!r)return function(t,r){return Bt(t,Rt(t),r)}(t,function(t,r){return t&&Bt(r,Xt(r),t)}(g,t))}else{if(!F[D])return u?t:{};g=function(t,r,e,n){var o=t.constructor;switch(r){case j:return Ut(t);case a:case i:return new o(+t);case w:return function(t,r){var e=r?Ut(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case O:case m:case A:case S:case x:case P:case E:case T:case I:return function(t,r){var e=r?Ut(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return z(r?e(G(t),!0):G(t),W,new t.constructor)}(t,n,e);case p:case v:return new o(t);case b:return function(t){var r=new t.constructor(t.source,k.exec(t));return r.lastIndex=t.lastIndex,r}(t);case d:return function(t,r,e){return z(r?e(N(t),!0):N(t),q,new t.constructor)}(t,n,e);case _:return c=t,xt?Object(xt.call(c)):{}}var c}(t,D,Ft,r)}}h||(h=new It);var U=h.get(t);if(U)return U;if(h.set(t,g),!$)var B=e?function(t){return function(t,r,e){var n=r(t);return Kt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Xt,Rt)}(t):Xt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(B||t,(function(o,c){B&&(o=t[c=o]),$t(g,c,Ft(o,r,e,n,c,t,h))})),g}function Mt(t){return!(!Qt(t)||(r=t,Z&&Z in r))&&(Jt(t)||V(t)?nt:$).test(Vt(t));var r}function Ut(t){var r=new t.constructor(t.byteLength);return new ut(r).set(new ut(t)),r}function Bt(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var u=r[o],a=n?n(e[u],t[u],u,e,t):void 0;$t(e,u,void 0===a?t[u]:a)}return e}function Ct(r,e){var n,o,c=r.__data__;return("string"==(o=t(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?c["string"==typeof e?"string":"hash"]:c.map}function Lt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Mt(e)?e:void 0}Pt.prototype.clear=function(){this.__data__=gt?gt(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var r=this.__data__;if(gt){var e=r[t];return e===n?void 0:e}return rt.call(r,t)?r[t]:void 0},Pt.prototype.has=function(t){var r=this.__data__;return gt?void 0!==r[t]:rt.call(r,t)},Pt.prototype.set=function(t,r){return this.__data__[t]=gt&&void 0===r?n:r,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var r=this.__data__,e=Dt(r,t);return!(e<0)&&(e==r.length-1?r.pop():st.call(r,e,1),!0)},Et.prototype.get=function(t){var r=this.__data__,e=Dt(r,t);return e<0?void 0:r[e][1]},Et.prototype.has=function(t){return Dt(this.__data__,t)>-1},Et.prototype.set=function(t,r){var e=this.__data__,n=Dt(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Tt.prototype.clear=function(){this.__data__={hash:new Pt,map:new(bt||Et),string:new Pt}},Tt.prototype.delete=function(t){return Ct(this,t).delete(t)},Tt.prototype.get=function(t){return Ct(this,t).get(t)},Tt.prototype.has=function(t){return Ct(this,t).has(t)},Tt.prototype.set=function(t,r){return Ct(this,t).set(t,r),this},It.prototype.clear=function(){this.__data__=new Et},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,r){var e=this.__data__;if(e instanceof Et){var n=e.__data__;if(!bt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Tt(n)}return e.set(t,r),this};var Rt=lt?K(lt,Object):function(){return[]},Wt=function(t){return et.call(t)};function qt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||D.test(t))&&t>-1&&t%1==0&&t<r}function zt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||X)}function Vt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Gt(t,r){return t===r||t!=t&&r!=r}(ht&&Wt(new ht(new ArrayBuffer(1)))!=w||bt&&Wt(new bt)!=l||dt&&Wt(dt.resolve())!=h||vt&&Wt(new vt)!=d||_t&&Wt(new _t)!=g)&&(Wt=function(t){var r=et.call(t),e=r==y?t.constructor:void 0,n=e?Vt(e):void 0;if(n)switch(n){case jt:return w;case wt:return l;case Ot:return h;case mt:return d;case At:return g}return r});var Kt=Array.isArray;function Nt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Jt(t)}var Ht=pt||function(){return!1};function Jt(t){var r=Qt(t)?et.call(t):"";return r==f||r==s}function Qt(r){var e=t(r);return!!r&&("object"==e||"function"==e)}function Xt(t){return Nt(t)?kt(t):function(t){if(!zt(t))return yt(t);var r=[];for(var e in Object(t))rt.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}r.exports=function(t){return Ft(t,!0,!0)}}));function i(t){return"string"==typeof t&&"."===t[0]?t.slice(1):t}function f(r){return r&&"object"===t(r)&&!Array.isArray(r)}return function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c={now:!1},u=[];function s(t,r,e,o){if((e=n({depth:-1,path:""},e)).depth+=1,Array.isArray(t))for(var c=0,u=t.length;c<u&&!o.now;c++){var l="".concat(e.path,".").concat(c);e.parent=a(t),e.parentType="array",r(t[c],void 0,n(n({},e),{},{path:i(l)}),o),s(t[c],r,n(n({},e),{},{path:i(l)}),o)}else if(f(t))for(var p in t){if(o.now&&null!=p)break;var y="".concat(e.path,".").concat(p);0===e.depth&&null!=p&&(e.topmostKey=p),e.parent=a(t),e.parentType="object",r(p,t[p],n(n({},e),{},{path:i(y)}),o),s(t[p],r,n(n({},e),{},{path:i(y)}),o)}return t}function l(){var t=u.shift();t[2].next=[];for(var n=0;n<e&&u[n];n++)t[2].next.push(a([u[n][0],u[n][1],u[n][2]]));r.apply(void 0,o(t))}function p(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];u.push([].concat(r)),u.length>e&&l()}if(s(t,p,{},c),u.length)for(var y=0,h=u.length;y<h;y++)l()}}));
