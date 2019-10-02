/**
 * string-convert-indexes
 * Convert string character indexes from JS native index-based to Unicode character-count-based and backwards.
 * Version: 1.9.44
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-convert-indexes
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringConvertIndexes={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n((function(t,e){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",v="[object Symbol]",b="[object ArrayBuffer]",m="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",T="[object Uint8ClampedArray]",A="[object Uint16Array]",k="[object Uint32Array]",x=/\w*$/,E=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,W={};W[a]=W["[object Array]"]=W[b]=W[m]=W[c]=W[u]=W[_]=W[w]=W[j]=W[O]=W[$]=W[l]=W[h]=W[p]=W[y]=W[g]=W[d]=W[v]=W[S]=W[T]=W[A]=W[k]=!0,W["[object Error]"]=W[s]=W["[object WeakMap]"]=!1;var I="object"==typeof r&&r&&r.Object===Object&&r,M="object"==typeof self&&self&&self.Object===Object&&self,P=I||M||Function("return this")(),F=e&&!e.nodeType&&e,J=F&&t&&!t.nodeType&&t,D=J&&J.exports===F;function R(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function L(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function H(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function K(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function Z(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var q,B=Array.prototype,U=Function.prototype,z=Object.prototype,G=P["__core-js_shared__"],Q=(q=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=U.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?P.Buffer:void 0,nt=P.Symbol,ot=P.Uint8Array,it=Z(Object.getPrototypeOf,Object),at=Object.create,ct=z.propertyIsEnumerable,ut=B.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=Z(Object.keys,Object),ht=Jt(P,"DataView"),pt=Jt(P,"Map"),yt=Jt(P,"Promise"),gt=Jt(P,"Set"),dt=Jt(P,"WeakMap"),vt=Jt(Object,"create"),bt=Ht(ht),mt=Ht(pt),_t=Ht(yt),wt=Ht(gt),jt=Ht(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new Tt(t)}function xt(t,e){var r=Zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Ct(i,n))||r.push(i);return r}function Et(t,e,r){var n=t[e];Y.call(t,e)&&Kt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Kt(t[r][0],e))return r;return-1}function Wt(t,e,r,n,o,i,E){var N;if(n&&(N=i?n(t,o,i,E):n(t)),void 0!==N)return N;if(!Ut(t))return t;var I=Zt(t);if(I){if(N=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,N)}else{var M=Rt(t),P=M==s||M==f;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(M==p||M==a||P&&!i){if(H(t))return i?t:{};if(N=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(e=it(t),Ut(e)?at(e):{});var e}(P?{}:t),!e)return function(t,e){return Pt(t,Dt(t),e)}(t,function(t,e){return t&&Pt(e,zt(e),t)}(N,t))}else{if(!W[M])return i?t:{};N=function(t,e,r,n){var o=t.constructor;switch(e){case b:return Mt(t);case c:case u:return new o(+t);case m:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case $:case S:case T:case A:case k:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return L(e?r(K(t),!0):K(t),R,new t.constructor)}(t,n,r);case h:case d:return new o(t);case y:return(s=new(a=t).constructor(a.source,x.exec(a))).lastIndex=a.lastIndex,s;case g:return function(t,e,r){return L(e?r(V(t),!0):V(t),C,new t.constructor)}(t,n,r);case v:return i=t,$t?Object($t.call(i)):{}}var i;var a,s}(t,M,Wt,e)}}E||(E=new kt);var F=E.get(t);if(F)return F;if(E.set(t,N),!I)var J=r?function(t){return function(t,e,r){var n=e(t);return Zt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Dt)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(J||t,(function(o,i){J&&(o=t[i=o]),Et(N,i,Wt(o,e,r,n,i,t,E))})),N}function It(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(Bt(t)||H(t)?et:E).test(Ht(t));var e}function Mt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Et(r,a,void 0===c?t[a]:c)}return r}function Ft(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Jt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}St.prototype.clear=function(){this.__data__=vt?vt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Y.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?o:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},Tt.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},Tt.prototype.has=function(t){return Nt(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new St,map:new(pt||Tt),string:new St}},At.prototype.delete=function(t){return Ft(this,t).delete(t)},At.prototype.get=function(t){return Ft(this,t).get(t)},At.prototype.has=function(t){return Ft(this,t).has(t)},At.prototype.set=function(t,e){return Ft(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new Tt},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Tt){var o=r.__data__;if(!pt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new At(o)}return r.set(t,e),this};var Dt=st?Z(st,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Ct(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Lt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Ht(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Kt(t,e){return t===e||t!=t&&e!=e}(ht&&Rt(new ht(new ArrayBuffer(1)))!=m||pt&&Rt(new pt)!=l||yt&&"[object Promise]"!=Rt(yt.resolve())||gt&&Rt(new gt)!=g||dt&&"[object WeakMap]"!=Rt(new dt))&&(Rt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Ht(r):void 0;if(n)switch(n){case bt:return m;case mt:return l;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Zt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Bt(t)}var qt=ft||function(){return!1};function Bt(t){var e=Ut(t)?tt.call(t):"";return e==s||e==f}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Vt(t)?xt(t):function(t){if(!Lt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Wt(t,!0,!0)}})),i="[object Object]";var a,c,u=Function.prototype,s=Object.prototype,f=u.toString,l=s.hasOwnProperty,h=f.call(Object),p=s.toString,y=(a=Object.getPrototypeOf,c=Object,function(t){return a(c(t))});var g=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||p.call(t)!=i||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=y(t);if(null===e)return!0;var r=l.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==h},d=n((function(t,e){var n,o,i,a,c,u,s,f,l,h,p,y,g,d,v,b,m,_,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,h=i&&void 0!==Symbol.toStringTag,p=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=p&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),v=l&&"function"==typeof Array.prototype[Symbol.iterator],b=v&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===h||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=h&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":s&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":v&&i===b?"Array Iterator":m&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})}));function v(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,m,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function b(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function m(t){return t!=t}var _=Array.prototype.splice;function w(t,e,r,n){var o=n?b:v,i=-1,a=e.length,c=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(c=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,function(t){return function(e){return t(e)}}(r)));++i<a;)for(var u=0,s=e[i],f=r?r(s):s;(u=o(c,f,u,n))>-1;)c!==t&&_.call(c,u,1),_.call(t,u,1);return t}var j=function(t,e){return t&&t.length&&e&&e.length?w(t,e):t};const O=Array.isArray;function $(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function S(t,e){return function t(e,r,n){const i=o(e);let a,c,u,s,f;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,O(i))for(a=0,c=i.length;a<c;a++){const e=`${n.path}.${a}`;void 0!==i[a]?(n.parent=o(i),n.parentType="array",u=t(r(i[a],void 0,Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(u)&&a<i.length?(i.splice(a,1),a-=1):i[a]=u):i.splice(a,1)}else if(g(i))for(a=0,c=(s=Object.keys(i)).length;a<c;a++){f=s[a];const e=`${n.path}.${f}`;0===n.depth&&null!=f&&(n.topmostKey=f),n.parent=o(i),n.parentType="object",u=t(r(f,i[f],Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(u)?delete i[f]:i[f]=u}return i}(t,e,{})}var T="__lodash_hash_undefined__",A=9007199254740991,k="[object Function]",x="[object GeneratorFunction]",E=/^\[object .+?Constructor\]$/,N="object"==typeof r&&r&&r.Object===Object&&r,W="object"==typeof self&&self&&self.Object===Object&&self,I=N||W||Function("return this")();function M(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function P(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,D,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function F(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function J(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function D(t){return t!=t}function R(t){return function(e){return t(e)}}function C(t,e){return t.has(e)}var L,H=Array.prototype,K=Function.prototype,Z=Object.prototype,V=I["__core-js_shared__"],q=(L=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",B=K.toString,U=Z.hasOwnProperty,z=Z.toString,G=RegExp("^"+B.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=H.splice,X=Math.max,Y=Math.min,tt=ft(I,"Map"),et=ft(Object,"create");function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.__data__=new ot;++e<r;)this.add(t[e])}function at(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ct(t){return!(!ht(t)||function(t){return!!q&&q in t}(t))&&(lt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?G:E).test(function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ut(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}(t.length)&&!lt(t)}(t)}(t)?t:[]}function st(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ct(r)?r:void 0}function lt(t){var e=ht(t)?z.call(t):"";return e==k||e==x}function ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}rt.prototype.clear=function(){this.__data__=et?et(null):{}},rt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},rt.prototype.get=function(t){var e=this.__data__;if(et){var r=e[t];return r===T?void 0:r}return U.call(e,t)?e[t]:void 0},rt.prototype.has=function(t){var e=this.__data__;return et?void 0!==e[t]:U.call(e,t)},rt.prototype.set=function(t,e){return this.__data__[t]=et&&void 0===e?T:e,this},nt.prototype.clear=function(){this.__data__=[]},nt.prototype.delete=function(t){var e=this.__data__,r=at(e,t);return!(r<0)&&(r==e.length-1?e.pop():Q.call(e,r,1),!0)},nt.prototype.get=function(t){var e=this.__data__,r=at(e,t);return r<0?void 0:e[r][1]},nt.prototype.has=function(t){return at(this.__data__,t)>-1},nt.prototype.set=function(t,e){var r=this.__data__,n=at(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ot.prototype.clear=function(){this.__data__={hash:new rt,map:new(tt||nt),string:new rt}},ot.prototype.delete=function(t){return st(this,t).delete(t)},ot.prototype.get=function(t){return st(this,t).get(t)},ot.prototype.has=function(t){return st(this,t).has(t)},ot.prototype.set=function(t,e){return st(this,t).set(t,e),this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,T),this},it.prototype.has=function(t){return this.__data__.has(t)};var pt=function(t,e){return e=X(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=X(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,M(t,this,a)}}((function(t){var e=J(t,ut);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?F:P,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=J(f,R(e))),u=Y(f.length,u),c[a]=!r&&(e||o>=120&&f.length>=120)?new it(a&&f):void 0}f=t[0];var l=-1,h=c[0];t:for(;++l<o&&s.length<u;){var p=f[l],y=e?e(p):p;if(p=r||0!==p?p:0,!(h?C(h,y):n(s,y,r))){for(a=i;--a;){var g=c[a];if(!(g?C(g,y):n(t[a],y,r)))continue t}h&&h.push(y),s.push(p)}}return s}(e):[]}));function yt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=n((function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce((function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)}),{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(c(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(i),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(u in i)c(i,u)&&delete i[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()})),dt=function(t){var e=(t=Math.abs(t))%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function vt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return Number.isFinite(t)?t+dt(t):t}vt.indicator=dt;var bt=vt;const mt=/[|\\{}()[\]^$+*?.-]/g;var _t=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(mt,"\\$&")};const wt=new Map;function jt(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(wt.has(r))return wt.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=_t(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,wt.set(r,o),o}var Ot=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>jt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function $t(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(t){return null!=t}function c(t){return"Object"===d(t)}function u(t,e){return e=yt(e),Array.from(t).filter(t=>!e.some(e=>Ot.isMatch(t,e,{caseSensitive:!0})))}const s=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const l={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let h;if(h=a(n)&&c(n)?Object.assign({},l,n):Object.assign({},l),a(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=yt(h.ignoreKeys):h.ignoreKeys=[],a(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=yt(h.ignorePaths):h.ignorePaths=[],a(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=yt(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach(t=>{if(c(h.schema[t])){const e={};S(h.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return f(i)||c(i)||(e[`${t}.${o.path}`]=i),i}),delete h.schema[t],h.schema=Object.assign(h.schema,e)}}),Object.keys(h.schema).forEach(t=>{f(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(h,l,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(a(h.schema)&&Object.keys(h.schema).length>0){if(0!==u(j(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){const t=j(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError(`${h.msg}: ${h.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${h.msg}: Both ${h.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(j(Object.keys(e),Object.keys(r)),h.ignoreKeys).length){const t=j(Object.keys(e),Object.keys(r));throw new TypeError(`${h.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(j(Object.keys(r),Object.keys(e)),h.ignoreKeys).length){const t=j(Object.keys(r),Object.keys(e));throw new TypeError(`${h.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const p=[];S(e,(t,n,o)=>{let a=n,u=t;if("array"===o.parentType&&(u=void 0,a=t),f(p)&&p.length&&p.some(t=>o.path.startsWith(t)))return a;if(u&&h.ignoreKeys.some(t=>Ot.isMatch(u,t)))return a;if(h.ignorePaths.some(t=>Ot.isMatch(o.path,t)))return a;const l=!(!c(a)&&!f(a)&&f(o.parent));let y=!1;c(h.schema)&&i.call(h.schema,gt.get(o.path))&&(y=!0);let g=!1;if(c(r)&&gt.has(r,gt.get(o.path))&&(g=!0),h.enforceStrictKeyset&&l&&!y&&!g)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${h.optsVarName}.schema! To stop this error, turn off ${h.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${h.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(h,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(y){const t=yt(h.schema[o.path]).map(String).map(t=>t.toLowerCase());if(gt.set(h.schema,o.path,t),pt(t,s).length)p.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(d(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!f(a)||!h.acceptArrays)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"!==d(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==d(a)?'"':""} (type: ${d(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=a.length;e<r;e++)if(!t.includes(d(a[e]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path}.${e}, the ${bt(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${d(a[e]).toLowerCase()}, but only the following are allowed by the ${h.optsVarName}.schema: ${t.join(", ")}`)}}else if(g){const e=gt.get(r,o.path);if(h.acceptArrays&&f(a)&&!h.acceptArraysIgnore.includes(t)){if(!a.every(e=>d(e).toLowerCase()===d(r[t]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${d(r[t]).toLowerCase()}-type`)}else if(d(a)!==d(e))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"===d(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===d(a).toLowerCase()?"":'"'} which is not ${d(e).toLowerCase()} but ${d(a).toLowerCase()}`)}return a})}(t,e,r)}Ot.isMatch=(t,e,r)=>{const n=jt(e,r),o=n.test(t);return n.negated?!o:o};var St=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},Tt=1/0,At="[object Symbol]",kt=/^\s+|\s+$/g,xt="[\\ud800-\\udfff]",Et="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",Nt="\\ud83c[\\udffb-\\udfff]",Wt="[^\\ud800-\\udfff]",It="(?:\\ud83c[\\udde6-\\uddff]){2}",Mt="[\\ud800-\\udbff][\\udc00-\\udfff]",Pt="(?:"+Et+"|"+Nt+")"+"?",Ft="[\\ufe0e\\ufe0f]?"+Pt+("(?:\\u200d(?:"+[Wt,It,Mt].join("|")+")[\\ufe0e\\ufe0f]?"+Pt+")*"),Jt="(?:"+[Wt+Et+"?",Et,It,Mt,xt].join("|")+")",Dt=RegExp(Nt+"(?="+Nt+")|"+Jt+Ft,"g"),Rt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),Ct="object"==typeof r&&r&&r.Object===Object&&r,Lt="object"==typeof self&&self&&self.Object===Object&&self,Ht=Ct||Lt||Function("return this")();function Kt(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,Zt,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function Zt(t){return t!=t}function Vt(t){return function(t){return Rt.test(t)}(t)?function(t){return t.match(Dt)||[]}(t):function(t){return t.split("")}(t)}var qt=Object.prototype.toString,Bt=Ht.Symbol,Ut=Bt?Bt.prototype:void 0,zt=Ut?Ut.toString:void 0;function Gt(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&qt.call(t)==At}(t))return zt?zt.call(t):"";var e=t+"";return"0"==e&&1/t==-Tt?"-0":e}function Qt(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}(t,e,r)}var Xt=function(t,e,r){var n;if((t=null==(n=t)?"":Gt(n))&&(r||void 0===e))return t.replace(kt,"");if(!t||!(e=Gt(e)))return t;var o=Vt(t),i=Vt(e);return Qt(o,function(t,e){for(var r=-1,n=t.length;++r<n&&Kt(e,t[r],0)>-1;);return r}(o,i),function(t,e){for(var r=t.length;r--&&Kt(e,t[r],0)>-1;);return r}(o,i)+1).join("")};function Yt(t){function e(t){return"string"==typeof t}const r=Array.isArray;let n=!0;return!!(r(t)||g(t)||e(t))&&(e(t)?0===Xt(t).length:(t=S(t,(t,r)=>{const o=void 0!==r?r:t;return e(o)&&""!==Xt(o)&&(n=!1),o}),n))}const te=Array.isArray;function ee(t){return null!=t}function re(t){return"Object"===d(t)}function ne(t){return"string"===d(t)}function oe(t){return re(t)||ne(t)||function(t){return"number"===d(t)}(t)||function(t){return"boolean"===d(t)}(t)||te(t)||function(t){return null===t}(t)}const ie=Array.isArray;function ae(t,e,r){if(void 0===t)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===e)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(ee(t)&&!oe(t))throw new TypeError(`ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ${d(t)}, equal to: ${JSON.stringify(t,null,4)}`);if(ee(e)&&!oe(e))throw new TypeError(`ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ${d(e)}, equal to: ${JSON.stringify(e,null,4)}`);if(ee(r)&&!re(r))throw new TypeError(`ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ${d(r)} and equal to: ${JSON.stringify(r,null,4)}`);const n=o(e),i=o(t);let a,c,u,s=0;const f={hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1},l=Object.assign({},f,r);if($t(l,f,{msg:"ast-compare/compare(): [THROW_ID_06*]"}),l.hungryForWhitespace&&l.matchStrictly&&re(t)&&Yt(t)&&re(e)&&0===Object.keys(e).length)return!0;if((!l.hungryForWhitespace||l.hungryForWhitespace&&!Yt(t)&&Yt(e))&&re(t)&&0!==Object.keys(t).length&&re(e)&&0===Object.keys(e).length||d(t)!==d(e)&&(!l.hungryForWhitespace||l.hungryForWhitespace&&!Yt(t)))return!1;if(ne(i)&&ne(n))return!!(l.hungryForWhitespace&&Yt(i)&&Yt(n))||(l.verboseWhenMismatches?i===n||`Given string ${n} is not matched! We have ${i} on the other end.`:l.useWildcards?Ot.isMatch(i,n,{caseSensitive:!0}):i===n);if(ie(i)&&ie(n)){if(l.hungryForWhitespace&&Yt(n)&&(!l.matchStrictly||l.matchStrictly&&i.length===n.length))return!0;if(!l.hungryForWhitespace&&n.length>i.length||l.matchStrictly&&n.length!==i.length)return!!l.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(n,null,4)} is ${n.length} but the length of an array on the other end, ${JSON.stringify(i,null,4)} is ${i.length}`;if(0===n.length)return 0===i.length||!!l.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(i,null,4)} does have some`;for(let t=0,e=n.length;t<e;t++){u=!1;for(let e=s,r=i.length;e<r;e++)if(s+=1,!0===ae(i[e],n[t],l)){u=!0;break}if(!u)return!!l.verboseWhenMismatches&&`The given array ${JSON.stringify(n,null,4)} is not a subset of an array on the other end, ${JSON.stringify(i,null,4)}`}}else{if(!re(i)||!re(n))return!!(l.hungryForWhitespace&&Yt(i)&&Yt(n)&&(!l.matchStrictly||l.matchStrictly&&(h=n,re(h)?0===Object.keys(h).length:(te(h)||ne(h))&&0===h.length)))||i===n;if(a=Object.keys(n),c=Object.keys(i),l.matchStrictly&&a.length!==c.length){if(!l.verboseWhenMismatches)return!1;const t=j(o(a),o(c)),e=t.length>0?`First object has unique keys: ${JSON.stringify(t,null,4)}.`:"",r=j(o(c),o(a));return`When matching strictly, we found that both objects have different amount of keys. ${e} ${r.length>0?`Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(let t=0,e=a.length;t<e;t++){if(!ee(i[a[t]]))return!l.useWildcards||l.useWildcards&&!a[t].includes("*")?!!l.verboseWhenMismatches&&`The given object has key ${a[t]} which the other-one does not have.`:!!Object.keys(i).some(e=>Ot.isMatch(e,a[t],{caseSensitive:!0}))||!!l.verboseWhenMismatches&&`The given object has key ${a[t]} which the other-one does not have.`;if(void 0!==i[a[t]]&&!oe(i[a[t]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_07] The input ${JSON.stringify(i,null,4)} contains a value of a wrong type, ${d(i[a[t]])} at index ${t}, equal to: ${JSON.stringify(i[a[t]],null,4)}`);if(!oe(n[a[t]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_08] The input ${JSON.stringify(n,null,4)} contains a value of a wrong type, ${d(n[a[t]])} at index ${t}, equal to: ${JSON.stringify(n[a[t]],null,4)}`);if(ee(i[a[t]])&&d(i[a[t]])!==d(n[a[t]])){if(!(Yt(i[a[t]])&&Yt(n[a[t]])&&l.hungryForWhitespace))return!!l.verboseWhenMismatches&&`The given key ${a[t]} is of a different type on both objects. On the first-one, it's ${d(n[a[t]])}, on the second-one, it's ${d(i[a[t]])}`}else if(!0!==ae(i[a[t]],n[a[t]],l))return!!l.verboseWhenMismatches&&`The given piece ${JSON.stringify(n[a[t]],null,4)} and ${JSON.stringify(i[a[t]],null,4)} don't match.`}}var h;return!0}function ce(t){return null!=t}function ue(t){return void 0!==t}function se(t,e){return d(t)===d(e)&&ae(t,e,{matchStrictly:!0,useWildcards:!0})}function fe(t,e){if(!ce(e.key)&&!ue(e.val))throw new Error("ast-monkey/main.js/set(): Please provide opts.val");if(!ce(e.index))throw new Error("ast-monkey/main.js/set(): Please provide opts.index");if("string"==typeof e.index){if(!St(parseFloat(e.index,10),{includeZero:!0}))throw new Error(`ast-monkey/main.js/set(): opts.index must be a natural number. It was given as: ${e.index}`);e.index=parseInt(e.index,10)}else if(!St(e.index,{includeZero:!0}))throw new Error(`ast-monkey/main.js/get(): opts.index must be a natural number. It was given as: ${e.index}`);return ce(e.key)&&!ue(e.val)&&(e.val=e.key),$t(e,null,{schema:{key:[null,"string"],val:"any",index:"number"}}),function(t,e){if(!ce(t))throw new Error("ast-monkey/main.js/monkey(): Please provide an input");let r=o(t);(e=Object.assign({key:null,val:void 0},e)).mode;const n={count:0,gatherPath:[],finding:null},i=[];let a=!1,c=!1;return ce(e.key)&&!ue(e.val)&&(a=!0),!ce(e.key)&&ue(e.val)&&(c=!0),e.mode,e.mode,"arrayFirstOnly"===e.mode&&Array.isArray(r)&&r.length>0&&(r=[r[0]]),r=S(r,(t,r,u)=>{let s;if(n.count+=1,e.mode,e.mode,e.mode,n.gatherPath.length=u.depth,n.gatherPath.push(n.count),e.mode,"get"===e.mode)n.count===e.index&&(ue(r)?(n.finding={},n.finding[t]=r):n.finding=t);else if("find"===e.mode||"del"===e.mode){if(!("any"===e.only||"array"===e.only&&void 0===r||"object"===e.only&&void 0!==r)||!(a&&se(t,e.key)||c&&se(r,e.val)||!a&&!c&&se(t,e.key)&&se(r,e.val)))return void 0!==r?r:t;if("find"!==e.mode)return NaN;(s={}).index=n.count,s.key=t,s.val=r,s.path=o(n.gatherPath),i.push(s)}return e.mode,"set"===e.mode&&n.count===e.index?e.val:"drop"===e.mode&&n.count===e.index?NaN:"arrayFirstOnly"===e.mode?ue(r)&&Array.isArray(r)?[r[0]]:ce(t)&&Array.isArray(t)?[t[0]]:void 0!==r?r:t:void 0!==r?r:t}),"get"===e.mode?n.finding:"find"===e.mode?i.length>0?i:null:r}(t,Object.assign({},e,{mode:"set"}))}var le=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)};function he(t){return"string"==typeof t}function pe(t){throw new Error("string-convert-indexes: [THROW_ID_01*] Missing ".concat(t,"th parameter!"))}function ye(t){return"string"==typeof t?parseInt(t,10):t}function ge(t,r,n,i){if(!he(r)||0===r.length)throw new TypeError("string-convert-indexes: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(e(r),", equal to:\n").concat(r));if(null!=i&&!g(i))throw new TypeError("string-convert-indexes: [THROW_ID_03] the third input argument, Optional Options Object, must be a plain object! Currently it's: ".concat(e(i),", equal to:\n").concat(i));var a=Object.assign({},{throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString:!0},i),c={id:0},u=[];if(St(n,{includeZero:!0})||le(n,{includeZero:!0})?u=[{id:1,val:n}]:n=S(n,(function(t,e){return c.id+=1,c.val=void 0!==e?e:t,(St(c.val,{includeZero:!0})||le(c.val,{includeZero:!0}))&&u.push(o(c)),c.val})),0===u.length)return n;u=u.sort((function(t,e){return ye(t.val)<ye(e.val)?-1:ye(t.val)>ye(e.val)?1:0}));for(var s=-1,f=!1,l=0,h=r.length;l<=h;l++){if(void 0===r[l]?s+=1:r[l].charCodeAt(0)>=55296&&r[l].charCodeAt(0)<=57343?!0!==f?(s+=1,f=!0):f=!1:(s+=1,!0===f&&(f=!1)),"n"===t){for(var p=0,y=u.length;p<y;p++)if(ye(u[p].val)===l)u[p].res=he(u[p].val)?String(s):s;else if(ye(u[p].val)>l)break}else for(var d=0,v=u.length;d<v;d++)if(ye(u[d].val)===s&&void 0===u[d].res)u[d].res=he(u[d].val)?String(l):l;else if(ye(u[d].val)>s)break;if(a.throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString&&l===h-1&&("n"===t&&ye(u[u.length-1].val)>h||"u"===t&&ye(u[u.length-1].val)>s+1))throw"n"===t?new Error("string-convert-indexes: [THROW_ID_05] the reference string has native JS string indexes going only upto ".concat(l,", but you are trying to convert an index larger than that, ").concat(ye(u[u.length-1].val))):new Error("string-convert-indexes: [THROW_ID_06] the reference string has Unicode character count going only upto ".concat(s,", but you are trying to convert an index larger than that, ").concat(ye(u[u.length-1].val)))}if(St(n,{includeZero:!0})||le(n,{includeZero:!0}))return void 0!==u[0].res?u[0].res:u[0].val;for(var b=o(n),m=u.length;m--;)b=fe(b,{index:u[m].id,val:void 0!==u[m].res?u[m].res:u[m].val});return b}t.nativeToUnicode=function(){return ge("n",arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe(1),arguments.length>1&&void 0!==arguments[1]?arguments[1]:pe(2),arguments.length>2?arguments[2]:void 0)},t.unicodeToNative=function(){return ge("u",arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe(1),arguments.length>1&&void 0!==arguments[1]?arguments[1]:pe(2),arguments.length>2?arguments[2]:void 0)},Object.defineProperty(t,"__esModule",{value:!0})}));
