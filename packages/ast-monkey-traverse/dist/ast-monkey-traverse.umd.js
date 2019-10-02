/**
 * ast-monkey-traverse
 * Utility library to traverse parsed HTML (AST's) or anything nested (plain objects within arrays within plain objects)
 * Version: 1.11.40
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey-traverse
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).astMonkeyTraverse=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(e,r){var n=200,o="__lodash_hash_undefined__",c=9007199254740991,a="[object Arguments]",u="[object Boolean]",i="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",_="[object Set]",b="[object String]",v="[object Symbol]",d="[object ArrayBuffer]",j="[object DataView]",g="[object Float32Array]",O="[object Float64Array]",w="[object Int8Array]",m="[object Int16Array]",A="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",P="[object Uint16Array]",k="[object Uint32Array]",T=/\w*$/,$=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,F={};F[a]=F["[object Array]"]=F[d]=F[j]=F[u]=F[i]=F[g]=F[O]=F[w]=F[m]=F[A]=F[l]=F[p]=F[y]=F[h]=F[_]=F[b]=F[v]=F[x]=F[S]=F[P]=F[k]=!0,F["[object Error]"]=F[f]=F["[object WeakMap]"]=!1;var I="object"==typeof t&&t&&t.Object===Object&&t,M="object"==typeof self&&self&&self.Object===Object&&self,N=I||M||Function("return this")(),B=r&&!r.nodeType&&r,U=B&&e&&!e.nodeType&&e,W=U&&U.exports===B;function D(t,e){return t.set(e[0],e[1]),t}function R(t,e){return t.add(e),t}function z(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function C(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function V(t,e){return function(r){return t(e(r))}}function G(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var K,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=N["__core-js_shared__"],X=(K=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=W?N.Buffer:void 0,nt=N.Symbol,ot=N.Uint8Array,ct=V(Object.getPrototypeOf,Object),at=Object.create,ut=J.propertyIsEnumerable,it=q.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Ut(N,"DataView"),yt=Ut(N,"Map"),ht=Ut(N,"Promise"),_t=Ut(N,"Set"),bt=Ut(N,"WeakMap"),vt=Ut(Object,"create"),dt=Ct(pt),jt=Ct(yt),gt=Ct(ht),Ot=Ct(_t),wt=Ct(bt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new St(t)}function Tt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Gt(t)}(t)&&Z.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var c in t)!e&&!Z.call(t,c)||o&&("length"==c||Rt(c,n))||r.push(c);return r}function $t(t,e,r){var n=t[e];Z.call(t,e)&&Lt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Et(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}function Ft(t,e,r,n,o,c,$){var E;if(n&&(E=c?n(t,o,c,$):n(t)),void 0!==E)return E;if(!Ht(t))return t;var I=Vt(t);if(I){if(E=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,E)}else{var M=Dt(t),N=M==f||M==s;if(Kt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(M==y||M==a||N&&!c){if(C(t))return c?t:{};if(E=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=ct(t),Ht(e)?at(e):{});var e}(N?{}:t),!e)return function(t,e){return Nt(t,Wt(t),e)}(t,function(t,e){return t&&Nt(e,Jt(e),t)}(E,t))}else{if(!F[M])return c?t:{};E=function(t,e,r,n){var o=t.constructor;switch(e){case d:return Mt(t);case u:case i:return new o(+t);case j:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case g:case O:case w:case m:case A:case x:case S:case P:case k:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return z(e?r(L(t),!0):L(t),D,new t.constructor)}(t,n,r);case p:case b:return new o(t);case h:return(f=new(a=t).constructor(a.source,T.exec(a))).lastIndex=a.lastIndex,f;case _:return function(t,e,r){return z(e?r(G(t),!0):G(t),R,new t.constructor)}(t,n,r);case v:return c=t,At?Object(At.call(c)):{}}var c;var a,f}(t,M,Ft,e)}}$||($=new kt);var B=$.get(t);if(B)return B;if($.set(t,E),!I)var U=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Wt)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(U||t,(function(o,c){U&&(o=t[c=o]),$t(E,c,Ft(o,e,r,n,c,t,$))})),E}function It(t){return!(!Ht(t)||(e=t,X&&X in e))&&(qt(t)||C(t)?et:$).test(Ct(t));var e}function Mt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Nt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var a=e[o],u=n?n(r[a],t[a],a,r,t):void 0;$t(r,a,void 0===u?t[a]:u)}return r}function Bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}xt.prototype.clear=function(){this.__data__=vt?vt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===o?void 0:r}return Z.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?o:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Et(e,t);return!(r<0)&&(r==e.length-1?e.pop():it.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Et(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Et(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Pt.prototype.clear=function(){this.__data__={hash:new xt,map:new(yt||St),string:new xt}},Pt.prototype.delete=function(t){return Bt(this,t).delete(t)},Pt.prototype.get=function(t){return Bt(this,t).get(t)},Pt.prototype.has=function(t){return Bt(this,t).has(t)},Pt.prototype.set=function(t,e){return Bt(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new St},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var o=r.__data__;if(!yt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Pt(o)}return r.set(t,e),this};var Wt=ft?V(ft,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Rt(t,e){return!!(e=null==e?c:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function Ct(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(pt&&Dt(new pt(new ArrayBuffer(1)))!=j||yt&&Dt(new yt)!=l||ht&&"[object Promise]"!=Dt(ht.resolve())||_t&&Dt(new _t)!=_||bt&&"[object WeakMap]"!=Dt(new bt))&&(Dt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Ct(r):void 0;if(n)switch(n){case dt:return j;case jt:return l;case gt:return"[object Promise]";case Ot:return _;case wt:return"[object WeakMap]"}return e});var Vt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}(t.length)&&!qt(t)}var Kt=st||function(){return!1};function qt(t){var e=Ht(t)?tt.call(t):"";return e==f||e==s}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Gt(t)?Tt(t):function(t){if(!zt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Ft(t,!0,!0)}})),r="[object Object]";var n,o,c=Function.prototype,a=Object.prototype,u=c.toString,i=a.hasOwnProperty,f=u.call(Object),s=a.toString,l=(n=Object.getPrototypeOf,o=Object,function(t){return n(o(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=r||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var n=i.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==f},y=Array.isArray;function h(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}return function(t,r){return function t(r,n,o){var c,a,u,i,f,s=e(r);if((o=Object.assign({depth:-1,path:""},o)).depth+=1,y(s))for(c=0,a=s.length;c<a;c++){var l="".concat(o.path,".").concat(c);void 0!==s[c]?(o.parent=e(s),o.parentType="array",u=t(n(s[c],void 0,Object.assign({},o,{path:h(l)})),n,Object.assign({},o,{path:h(l)})),Number.isNaN(u)&&c<s.length?(s.splice(c,1),c-=1):s[c]=u):s.splice(c,1)}else if(p(s))for(c=0,a=(i=Object.keys(s)).length;c<a;c++){f=i[c];var _="".concat(o.path,".").concat(f);0===o.depth&&null!=f&&(o.topmostKey=f),o.parent=e(s),o.parentType="object",u=t(n(f,s[f],Object.assign({},o,{path:h(_)})),n,Object.assign({},o,{path:h(_)})),Number.isNaN(u)?delete s[f]:s[f]=u}return s}(t,r,{})}}));
