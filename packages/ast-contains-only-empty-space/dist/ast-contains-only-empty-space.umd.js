/**
 * ast-contains-only-empty-space
 * Returns Boolean depending if passed AST contain only empty space
 * Version: 1.9.17
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-contains-only-empty-space/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).astContainsOnlyEmptySpace=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t,r,e){return t(e={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&e.path)}},e.exports),e.exports}((function(r,e){var n="__lodash_hash_undefined__",c=9007199254740991,u="[object Arguments]",i="[object Boolean]",a="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object Promise]",b="[object RegExp]",_="[object Set]",d="[object String]",v="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",w="[object DataView]",O="[object Float32Array]",m="[object Float64Array]",A="[object Int8Array]",S="[object Int16Array]",x="[object Int32Array]",P="[object Uint8Array]",E="[object Uint8ClampedArray]",T="[object Uint16Array]",D="[object Uint32Array]",$=/\w*$/,k=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,N={};N[u]=N["[object Array]"]=N[j]=N[w]=N[i]=N[a]=N[O]=N[m]=N[A]=N[S]=N[x]=N[l]=N[p]=N[y]=N[b]=N[_]=N[d]=N[v]=N[P]=N[E]=N[T]=N[D]=!0,N["[object Error]"]=N[f]=N[g]=!1;var F="object"==t(o)&&o&&o.Object===Object&&o,B="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,U=F||B||Function("return this")(),M=e&&!e.nodeType&&e,C=M&&r&&!r.nodeType&&r,R=C&&C.exports===M;function q(t,r){return t.set(r[0],r[1]),t}function z(t,r){return t.add(r),t}function L(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function V(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function W(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function G(t,r){return function(e){return t(r(e))}}function K(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var H,J=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=U["__core-js_shared__"],Z=(H=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",tt=Q.toString,rt=X.hasOwnProperty,et=X.toString,nt=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=R?U.Buffer:void 0,ct=U.Symbol,ut=U.Uint8Array,it=G(Object.getPrototypeOf,Object),at=Object.create,ft=X.propertyIsEnumerable,st=J.splice,lt=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,yt=G(Object.keys,Object),ht=Ct(U,"DataView"),bt=Ct(U,"Map"),_t=Ct(U,"Promise"),dt=Ct(U,"Set"),vt=Ct(U,"WeakMap"),gt=Ct(Object,"create"),jt=Vt(ht),wt=Vt(bt),Ot=Vt(_t),mt=Vt(dt),At=Vt(vt),St=ct?ct.prototype:void 0,xt=St?St.valueOf:void 0;function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Tt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Dt(t){this.__data__=new Et(t)}function $t(r,e){var n=Gt(r)||function(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&Kt(r)}(r)&&rt.call(r,"callee")&&(!ft.call(r,"callee")||et.call(r)==u)}(r)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(r.length,String):[],o=n.length,c=!!o;for(var i in r)!e&&!rt.call(r,i)||c&&("length"==i||zt(i,o))||n.push(i);return n}function kt(t,r,e){var n=t[r];rt.call(t,r)&&Wt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function It(t,r){for(var e=t.length;e--;)if(Wt(t[e][0],r))return e;return-1}function Nt(t,r,e,n,o,c,h){var g;if(n&&(g=c?n(t,o,c,h):n(t)),void 0!==g)return g;if(!Qt(t))return t;var k=Gt(t);if(k){if(g=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,g)}else{var I=qt(t),F=I==f||I==s;if(Ht(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(I==y||I==u||F&&!c){if(V(t))return c?t:{};if(g=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(r=it(t),Qt(r)?at(r):{});var r}(F?{}:t),!r)return function(t,r){return Ut(t,Rt(t),r)}(t,function(t,r){return t&&Ut(r,Xt(r),t)}(g,t))}else{if(!N[I])return c?t:{};g=function(t,r,e,n){var o=t.constructor;switch(r){case j:return Bt(t);case i:case a:return new o(+t);case w:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case O:case m:case A:case S:case x:case P:case E:case T:case D:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return L(r?e(W(t),!0):W(t),q,new t.constructor)}(t,n,e);case p:case d:return new o(t);case b:return function(t){var r=new t.constructor(t.source,$.exec(t));return r.lastIndex=t.lastIndex,r}(t);case _:return function(t,r,e){return L(r?e(K(t),!0):K(t),z,new t.constructor)}(t,n,e);case v:return c=t,xt?Object(xt.call(c)):{}}var c}(t,I,Nt,r)}}h||(h=new Dt);var B=h.get(t);if(B)return B;if(h.set(t,g),!k)var U=e?function(t){return function(t,r,e){var n=r(t);return Gt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Xt,Rt)}(t):Xt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(U||t,(function(o,c){U&&(o=t[c=o]),kt(g,c,Nt(o,r,e,n,c,t,h))})),g}function Ft(t){return!(!Qt(t)||(r=t,Z&&Z in r))&&(Jt(t)||V(t)?nt:k).test(Vt(t));var r}function Bt(t){var r=new t.constructor(t.byteLength);return new ut(r).set(new ut(t)),r}function Ut(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var u=r[o],i=n?n(e[u],t[u],u,e,t):void 0;kt(e,u,void 0===i?t[u]:i)}return e}function Mt(r,e){var n,o,c=r.__data__;return("string"==(o=t(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?c["string"==typeof e?"string":"hash"]:c.map}function Ct(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Ft(e)?e:void 0}Pt.prototype.clear=function(){this.__data__=gt?gt(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var r=this.__data__;if(gt){var e=r[t];return e===n?void 0:e}return rt.call(r,t)?r[t]:void 0},Pt.prototype.has=function(t){var r=this.__data__;return gt?void 0!==r[t]:rt.call(r,t)},Pt.prototype.set=function(t,r){return this.__data__[t]=gt&&void 0===r?n:r,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var r=this.__data__,e=It(r,t);return!(e<0)&&(e==r.length-1?r.pop():st.call(r,e,1),!0)},Et.prototype.get=function(t){var r=this.__data__,e=It(r,t);return e<0?void 0:r[e][1]},Et.prototype.has=function(t){return It(this.__data__,t)>-1},Et.prototype.set=function(t,r){var e=this.__data__,n=It(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Tt.prototype.clear=function(){this.__data__={hash:new Pt,map:new(bt||Et),string:new Pt}},Tt.prototype.delete=function(t){return Mt(this,t).delete(t)},Tt.prototype.get=function(t){return Mt(this,t).get(t)},Tt.prototype.has=function(t){return Mt(this,t).has(t)},Tt.prototype.set=function(t,r){return Mt(this,t).set(t,r),this},Dt.prototype.clear=function(){this.__data__=new Et},Dt.prototype.delete=function(t){return this.__data__.delete(t)},Dt.prototype.get=function(t){return this.__data__.get(t)},Dt.prototype.has=function(t){return this.__data__.has(t)},Dt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof Et){var n=e.__data__;if(!bt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Tt(n)}return e.set(t,r),this};var Rt=lt?G(lt,Object):function(){return[]},qt=function(t){return et.call(t)};function zt(t,r){return!!(r=null==r?c:r)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<r}function Lt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||X)}function Vt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Wt(t,r){return t===r||t!=t&&r!=r}(ht&&qt(new ht(new ArrayBuffer(1)))!=w||bt&&qt(new bt)!=l||_t&&qt(_t.resolve())!=h||dt&&qt(new dt)!=_||vt&&qt(new vt)!=g)&&(qt=function(t){var r=et.call(t),e=r==y?t.constructor:void 0,n=e?Vt(e):void 0;if(n)switch(n){case jt:return w;case wt:return l;case Ot:return h;case mt:return _;case At:return g}return r});var Gt=Array.isArray;function Kt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}(t.length)&&!Jt(t)}var Ht=pt||function(){return!1};function Jt(t){var r=Qt(t)?et.call(t):"";return r==f||r==s}function Qt(r){var e=t(r);return!!r&&("object"==e||"function"==e)}function Xt(t){return Kt(t)?$t(t):function(t){if(!Lt(t))return yt(t);var r=[];for(var e in Object(t))rt.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}r.exports=function(t){return Nt(t,!0,!0)}}));function u(t){return"string"==typeof t&&t.length&&"."===t[0]?t.slice(1):t}function i(r,e){return function r(e,o,i,a){var f,s,l,p,y=c(e),h=n({depth:-1,path:""},i);if(h.depth+=1,Array.isArray(y))for(f=0,s=y.length;f<s&&!a.now;f++){var b="".concat(h.path,".").concat(f);void 0!==y[f]?(h.parent=c(y),h.parentType="array",l=r(o(y[f],void 0,n(n({},h),{},{path:u(b)}),a),o,n(n({},h),{},{path:u(b)}),a),Number.isNaN(l)&&f<y.length?(y.splice(f,1),f-=1):y[f]=l):y.splice(f,1)}else if((p=y)&&"object"===t(p)&&!Array.isArray(p))for(var _ in y){if(a.now&&null!=_)break;var d="".concat(h.path,".").concat(_);0===h.depth&&null!=_&&(h.topmostKey=_),h.parent=c(y),h.parentType="object",l=r(o(_,y[_],n(n({},h),{},{path:u(d)}),a),o,n(n({},h),{},{path:u(d)}),a),Number.isNaN(l)?delete y[_]:y[_]=l}return y}(r,e,{},{now:!1})}return function(r){if("string"==typeof r)return!r.trim();if(!["object","string"].includes(t(r))||!r)return!1;var e=!0;return r=i(r,(function(t,r,n,o){var c=void 0!==r?r:t;return"string"==typeof c&&c.trim()&&(e=!1,o.now=!0),c})),e}}));
