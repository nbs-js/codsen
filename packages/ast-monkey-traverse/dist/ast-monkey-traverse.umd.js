/**
 * ast-monkey-traverse
 * Utility library to traverse AST
 * Version: 1.12.16
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-monkey-traverse/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).astMonkeyTraverse=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e,r){var n="__lodash_hash_undefined__",c=9007199254740991,u="[object Arguments]",a="[object Boolean]",i="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object Promise]",b="[object RegExp]",_="[object Set]",d="[object String]",v="[object Symbol]",j="[object WeakMap]",g="[object ArrayBuffer]",w="[object DataView]",O="[object Float32Array]",m="[object Float64Array]",A="[object Int8Array]",S="[object Int16Array]",x="[object Int32Array]",P="[object Uint8Array]",E="[object Uint8ClampedArray]",T="[object Uint16Array]",k="[object Uint32Array]",D=/\w*$/,$=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,N={};N[u]=N["[object Array]"]=N[g]=N[w]=N[a]=N[i]=N[O]=N[m]=N[A]=N[S]=N[x]=N[l]=N[p]=N[y]=N[b]=N[_]=N[d]=N[v]=N[P]=N[E]=N[T]=N[k]=!0,N["[object Error]"]=N[f]=N[j]=!1;var F="object"==t(o)&&o&&o.Object===Object&&o,B="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,M=F||B||Function("return this")(),U=r&&!r.nodeType&&r,R=U&&e&&!e.nodeType&&e,q=R&&R.exports===U;function z(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function L(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function V(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function W(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function G(t,e){return function(r){return t(e(r))}}function K(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var H,J=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=M["__core-js_shared__"],Z=(H=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",tt=Q.toString,et=X.hasOwnProperty,rt=X.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=q?M.Buffer:void 0,ct=M.Symbol,ut=M.Uint8Array,at=G(Object.getPrototypeOf,Object),it=Object.create,ft=X.propertyIsEnumerable,st=J.splice,lt=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,yt=G(Object.keys,Object),ht=Rt(M,"DataView"),bt=Rt(M,"Map"),_t=Rt(M,"Promise"),dt=Rt(M,"Set"),vt=Rt(M,"WeakMap"),jt=Rt(Object,"create"),gt=Vt(ht),wt=Vt(bt),Ot=Vt(_t),mt=Vt(dt),At=Vt(vt),St=ct?ct.prototype:void 0,xt=St?St.valueOf:void 0;function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new Et(t)}function Dt(e,r){var n=Gt(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&Kt(e)}(e)&&et.call(e,"callee")&&(!ft.call(e,"callee")||rt.call(e)==u)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],o=n.length,c=!!o;for(var a in e)!r&&!et.call(e,a)||c&&("length"==a||Ct(a,o))||n.push(a);return n}function $t(t,e,r){var n=t[e];et.call(t,e)&&Wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function It(t,e){for(var r=t.length;r--;)if(Wt(t[r][0],e))return r;return-1}function Nt(t,e,r,n,o,c,h){var j;if(n&&(j=c?n(t,o,c,h):n(t)),void 0!==j)return j;if(!Qt(t))return t;var $=Gt(t);if($){if(j=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&et.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,j)}else{var I=zt(t),F=I==f||I==s;if(Ht(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(I==y||I==u||F&&!c){if(V(t))return c?t:{};if(j=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(e=at(t),Qt(e)?it(e):{});var e}(F?{}:t),!e)return function(t,e){return Mt(t,qt(t),e)}(t,function(t,e){return t&&Mt(e,Xt(e),t)}(j,t))}else{if(!N[I])return c?t:{};j=function(t,e,r,n){var o=t.constructor;switch(e){case g:return Bt(t);case a:case i:return new o(+t);case w:return function(t,e){var r=e?Bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case O:case m:case A:case S:case x:case P:case E:case T:case k:return function(t,e){var r=e?Bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return L(e?r(W(t),!0):W(t),z,new t.constructor)}(t,n,r);case p:case d:return new o(t);case b:return function(t){var e=new t.constructor(t.source,D.exec(t));return e.lastIndex=t.lastIndex,e}(t);case _:return function(t,e,r){return L(e?r(K(t),!0):K(t),C,new t.constructor)}(t,n,r);case v:return c=t,xt?Object(xt.call(c)):{}}var c}(t,I,Nt,e)}}h||(h=new kt);var B=h.get(t);if(B)return B;if(h.set(t,j),!$)var M=r?function(t){return function(t,e,r){var n=e(t);return Gt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Xt,qt)}(t):Xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(M||t,(function(o,c){M&&(o=t[c=o]),$t(j,c,Nt(o,e,r,n,c,t,h))})),j}function Ft(t){return!(!Qt(t)||(e=t,Z&&Z in e))&&(Jt(t)||V(t)?nt:$).test(Vt(t));var e}function Bt(t){var e=new t.constructor(t.byteLength);return new ut(e).set(new ut(t)),e}function Mt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],a=n?n(r[u],t[u],u,r,t):void 0;$t(r,u,void 0===a?t[u]:a)}return r}function Ut(e,r){var n,o,c=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?c["string"==typeof r?"string":"hash"]:c.map}function Rt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(r)?r:void 0}Pt.prototype.clear=function(){this.__data__=jt?jt(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var e=this.__data__;if(jt){var r=e[t];return r===n?void 0:r}return et.call(e,t)?e[t]:void 0},Pt.prototype.has=function(t){var e=this.__data__;return jt?void 0!==e[t]:et.call(e,t)},Pt.prototype.set=function(t,e){return this.__data__[t]=jt&&void 0===e?n:e,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var e=this.__data__,r=It(e,t);return!(r<0)&&(r==e.length-1?e.pop():st.call(e,r,1),!0)},Et.prototype.get=function(t){var e=this.__data__,r=It(e,t);return r<0?void 0:e[r][1]},Et.prototype.has=function(t){return It(this.__data__,t)>-1},Et.prototype.set=function(t,e){var r=this.__data__,n=It(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new Pt,map:new(bt||Et),string:new Pt}},Tt.prototype.delete=function(t){return Ut(this,t).delete(t)},Tt.prototype.get=function(t){return Ut(this,t).get(t)},Tt.prototype.has=function(t){return Ut(this,t).has(t)},Tt.prototype.set=function(t,e){return Ut(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new Et},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Et){var n=r.__data__;if(!bt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Tt(n)}return r.set(t,e),this};var qt=lt?G(lt,Object):function(){return[]},zt=function(t){return rt.call(t)};function Ct(t,e){return!!(e=null==e?c:e)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<e}function Lt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}function Vt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Wt(t,e){return t===e||t!=t&&e!=e}(ht&&zt(new ht(new ArrayBuffer(1)))!=w||bt&&zt(new bt)!=l||_t&&zt(_t.resolve())!=h||dt&&zt(new dt)!=_||vt&&zt(new vt)!=j)&&(zt=function(t){var e=rt.call(t),r=e==y?t.constructor:void 0,n=r?Vt(r):void 0;if(n)switch(n){case gt:return w;case wt:return l;case Ot:return h;case mt:return _;case At:return j}return e});var Gt=Array.isArray;function Kt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}(t.length)&&!Jt(t)}var Ht=pt||function(){return!1};function Jt(t){var e=Qt(t)?rt.call(t):"";return e==f||e==s}function Qt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function Xt(t){return Kt(t)?Dt(t):function(t){if(!Lt(t))return yt(t);var e=[];for(var r in Object(t))et.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Nt(t,!0,!0)}}));function u(t){return"string"==typeof t&&t.length&&"."===t[0]?t.slice(1):t}return function(e,r){return function e(r,o,a,i){var f,s,l,p,y=c(r),h=n({depth:-1,path:""},a);if(h.depth+=1,Array.isArray(y))for(f=0,s=y.length;f<s&&!i.now;f++){var b="".concat(h.path,".").concat(f);void 0!==y[f]?(h.parent=c(y),h.parentType="array",l=e(o(y[f],void 0,n(n({},h),{},{path:u(b)}),i),o,n(n({},h),{},{path:u(b)}),i),Number.isNaN(l)&&f<y.length?(y.splice(f,1),f-=1):y[f]=l):y.splice(f,1)}else if((p=y)&&"object"===t(p)&&!Array.isArray(p))for(var _ in y){if(i.now&&null!=_)break;var d="".concat(h.path,".").concat(_);0===h.depth&&null!=_&&(h.topmostKey=_),h.parent=c(y),h.parentType="object",l=e(o(_,y[_],n(n({},h),{},{path:u(d)}),i),o,n(n({},h),{},{path:u(d)}),i),Number.isNaN(l)?delete y[_]:y[_]=l}return y}(e,r,{},{now:!1})}}));
