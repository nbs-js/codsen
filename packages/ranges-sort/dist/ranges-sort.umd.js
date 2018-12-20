!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.rangesSort=e()}("undefined"!=typeof self?self:this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),a=(o.suffix,n(function(t,e){var n,o,a,i,c,s,u,f,p,l,y,h,g,d,b,v,m,_,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,a="undefined"!=typeof Symbol,i="undefined"!=typeof Map,c="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,p=a&&void 0!==Symbol.iterator,l=a&&void 0!==Symbol.toStringTag,y=c&&"function"==typeof Set.prototype.entries,h=i&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),d=h&&Object.getPrototypeOf((new Map).entries()),b=p&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),m=p&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=l&&t[Symbol.toStringTag];if("string"==typeof r)return r;var a=Object.getPrototypeOf(t);return a===RegExp.prototype?"RegExp":a===Date.prototype?"Date":n&&a===Promise.prototype?"Promise":c&&a===Set.prototype?"Set":i&&a===Map.prototype?"Map":u&&a===WeakSet.prototype?"WeakSet":s&&a===WeakMap.prototype?"WeakMap":f&&a===DataView.prototype?"DataView":i&&a===d?"Map Iterator":c&&a===g?"Set Iterator":b&&a===v?"Array Iterator":m&&a===_?"String Iterator":null===a?"Object":Object.prototype.toString.call(t).slice(w,j)})}));function i(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,s,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function c(t,e,r,n){for(var o=r-1,a=t.length;++o<a;)if(n(t[o],e))return o;return-1}function s(t){return t!=t}var u=Array.prototype.splice;function f(t,e,r,n){var o,a=n?c:i,s=-1,f=e.length,p=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(p=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++s<f;)for(var l=0,y=e[s],h=r?r(y):y;(l=a(p,h,l,n))>-1;)p!==t&&u.call(p,l,1),u.call(t,l,1);return t}var p=function(t,e){return t&&t.length&&e&&e.length?f(t,e):t},l=n(function(t,e){var n=200,o="__lodash_hash_undefined__",a=9007199254740991,i="[object Arguments]",c="[object Boolean]",s="[object Date]",u="[object Function]",f="[object GeneratorFunction]",p="[object Map]",l="[object Number]",y="[object Object]",h="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",v="[object ArrayBuffer]",m="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",A="[object Uint8ClampedArray]",T="[object Uint16Array]",E="[object Uint32Array]",k=/\w*$/,x=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,I={};I[i]=I["[object Array]"]=I[v]=I[m]=I[c]=I[s]=I[_]=I[w]=I[j]=I[O]=I[$]=I[p]=I[l]=I[y]=I[h]=I[g]=I[d]=I[b]=I[S]=I[A]=I[T]=I[E]=!0,I["[object Error]"]=I[u]=I["[object WeakMap]"]=!1;var M="object"==typeof r&&r&&r.Object===Object&&r,N="object"==typeof self&&self&&self.Object===Object&&self,L=M||N||Function("return this")(),C=e&&!e.nodeType&&e,K=C&&t&&!t.nodeType&&t,W=K&&K.exports===C;function V(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function F(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function H(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function R(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function B(t,e){return function(r){return t(e(r))}}function J(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var Z,U=Array.prototype,q=Function.prototype,z=Object.prototype,G=L["__core-js_shared__"],Q=(Z=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"",X=q.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=W?L.Buffer:void 0,nt=L.Symbol,ot=L.Uint8Array,at=B(Object.getPrototypeOf,Object),it=Object.create,ct=z.propertyIsEnumerable,st=U.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,pt=B(Object.keys,Object),lt=Kt(L,"DataView"),yt=Kt(L,"Map"),ht=Kt(L,"Promise"),gt=Kt(L,"Set"),dt=Kt(L,"WeakMap"),bt=Kt(Object,"create"),vt=Ht(lt),mt=Ht(yt),_t=Ht(ht),wt=Ht(gt),jt=Ht(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new At(t)}function kt(t,e){var r=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Y.call(t,a)||o&&("length"==a||Dt(a,n))||r.push(a);return r}function xt(t,e,r){var n=t[e];Y.call(t,e)&&Rt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Pt(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,a,x){var P;if(n&&(P=a?n(t,o,a,x):n(t)),void 0!==P)return P;if(!qt(t))return t;var M=Bt(t);if(M){if(P=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,P)}else{var N=Vt(t),L=N==u||N==f;if(Zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(N==y||N==i||L&&!a){if(H(t))return a?t:{};if(P=function(t){return"function"!=typeof t.constructor||Ft(t)?{}:(e=at(t),qt(e)?it(e):{});var e}(L?{}:t),!e)return function(t,e){return Lt(t,Wt(t),e)}(t,function(t,e){return t&&Lt(e,zt(e),t)}(P,t))}else{if(!I[N])return a?t:{};P=function(t,e,r,n){var o=t.constructor;switch(e){case v:return Nt(t);case c:case s:return new o(+t);case m:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case $:case S:case A:case T:case E:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case p:return function(t,e,r){return F(e?r(R(t),!0):R(t),V,new t.constructor)}(t,n,r);case l:case d:return new o(t);case h:return(u=new(i=t).constructor(i.source,k.exec(i))).lastIndex=i.lastIndex,u;case g:return function(t,e,r){return F(e?r(J(t),!0):J(t),D,new t.constructor)}(t,n,r);case b:return a=t,$t?Object($t.call(a)):{}}var a;var i,u}(t,N,It,e)}}x||(x=new Et);var C=x.get(t);if(C)return C;if(x.set(t,P),!M)var K=r?function(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Wt)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(K||t,function(o,a){K&&(o=t[a=o]),xt(P,a,It(o,e,r,n,a,t,x))}),P}function Mt(t){return!(!qt(t)||(e=t,Q&&Q in e))&&(Ut(t)||H(t)?et:x).test(Ht(t));var e}function Nt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Lt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var i=e[o],c=n?n(r[i],t[i],i,r,t):void 0;xt(r,i,void 0===c?t[i]:c)}return r}function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}St.prototype.clear=function(){this.__data__=bt?bt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Y.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Pt(e,t);return!(r<0||(r==e.length-1?e.pop():st.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Pt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Pt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Pt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||At),string:new St}},Tt.prototype.delete=function(t){return Ct(this,t).delete(t)},Tt.prototype.get=function(t){return Ct(this,t).get(t)},Tt.prototype.has=function(t){return Ct(this,t).has(t)},Tt.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new At},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof At){var o=r.__data__;if(!yt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Wt=ut?B(ut,Object):function(){return[]},Vt=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Ht(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,e){return t===e||t!=t&&e!=e}(lt&&Vt(new lt(new ArrayBuffer(1)))!=m||yt&&Vt(new yt)!=p||ht&&"[object Promise]"!=Vt(ht.resolve())||gt&&Vt(new gt)!=g||dt&&"[object WeakMap]"!=Vt(new dt))&&(Vt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Ht(r):void 0;if(n)switch(n){case vt:return m;case mt:return p;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Bt=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!Ut(t)}var Zt=ft||function(){return!1};function Ut(t){var e=qt(t)?tt.call(t):"";return e==u||e==f}function qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Jt(t)?kt(t):function(t){if(!Ft(t))return pt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return It(t,!0,!0)}}),y="[object Object]";var h,g,d=Function.prototype,b=Object.prototype,v=d.toString,m=b.hasOwnProperty,_=v.call(Object),w=b.toString,j=(h=Object.getPrototypeOf,g=Object,function(t){return h(g(t))});var O=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||w.call(t)!=y||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=j(t);if(null===e)return!0;var r=m.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&v.call(r)==_};const $=Array.isArray;function S(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function A(t,e){return function t(e,r,n){const o=l(e);let a,i,c,s,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,$(o))for(a=0,i=o.length;a<i;a++){const e=`${n.path}.${a}`;void 0!==o[a]?(n.parent=l(o),c=t(r(o[a],void 0,Object.assign({},n,{path:S(e)})),r,Object.assign({},n,{path:S(e)})),Number.isNaN(c)&&a<o.length?(o.splice(a,1),a-=1):o[a]=c):o.splice(a,1)}else if(O(o))for(a=0,i=(s=Object.keys(o)).length;a<i;a++){u=s[a];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=l(o),c=t(r(u,o[u],Object.assign({},n,{path:S(e)})),r,Object.assign({},n,{path:S(e)})),Number.isNaN(c)?delete o[u]:o[u]=c}return o}(t,e,{})}var T="__lodash_hash_undefined__",E=9007199254740991,k="[object Function]",x="[object GeneratorFunction]",P=/^\[object .+?Constructor\]$/,I="object"==typeof r&&r&&r.Object===Object&&r,M="object"==typeof self&&self&&self.Object===Object&&self,N=I||M||Function("return this")();function L(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,W,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function C(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function K(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function W(t){return t!=t}function V(t){return function(e){return t(e)}}function D(t,e){return t.has(e)}var F,H=Array.prototype,R=Function.prototype,B=Object.prototype,J=N["__core-js_shared__"],Z=(F=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"",U=R.toString,q=B.hasOwnProperty,z=B.toString,G=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=H.splice,X=Math.max,Y=Math.min,tt=ft(N,"Map"),et=ft(Object,"create");function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.__data__=new ot;++e<r;)this.add(t[e])}function it(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ct(t){return!(!lt(t)||(e=t,Z&&Z in e))&&(pt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?G:P).test(function(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function st(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E}(t.length)&&!pt(t)}(t)}(t)?t:[]}function ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ct(r)?r:void 0}function pt(t){var e=lt(t)?z.call(t):"";return e==k||e==x}function lt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}rt.prototype.clear=function(){this.__data__=et?et(null):{}},rt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},rt.prototype.get=function(t){var e=this.__data__;if(et){var r=e[t];return r===T?void 0:r}return q.call(e,t)?e[t]:void 0},rt.prototype.has=function(t){var e=this.__data__;return et?void 0!==e[t]:q.call(e,t)},rt.prototype.set=function(t,e){return this.__data__[t]=et&&void 0===e?T:e,this},nt.prototype.clear=function(){this.__data__=[]},nt.prototype.delete=function(t){var e=this.__data__,r=it(e,t);return!(r<0||(r==e.length-1?e.pop():Q.call(e,r,1),0))},nt.prototype.get=function(t){var e=this.__data__,r=it(e,t);return r<0?void 0:e[r][1]},nt.prototype.has=function(t){return it(this.__data__,t)>-1},nt.prototype.set=function(t,e){var r=this.__data__,n=it(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ot.prototype.clear=function(){this.__data__={hash:new rt,map:new(tt||nt),string:new rt}},ot.prototype.delete=function(t){return ut(this,t).delete(t)},ot.prototype.get=function(t){return ut(this,t).get(t)},ot.prototype.has=function(t){return ut(this,t).has(t)},ot.prototype.set=function(t,e){return ut(this,t).set(t,e),this},at.prototype.add=at.prototype.push=function(t){return this.__data__.set(t,T),this},at.prototype.has=function(t){return this.__data__.has(t)};var yt=function(t,e){return e=X(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=X(r.length-e,0),a=Array(o);++n<o;)a[n]=r[e+n];n=-1;for(var i=Array(e+1);++n<e;)i[n]=r[n];return i[e]=a,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,i)}}(function(t){var e=K(t,st);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?C:L,o=t[0].length,a=t.length,i=a,c=Array(a),s=1/0,u=[];i--;){var f=t[i];i&&e&&(f=K(f,V(e))),s=Y(f.length,s),c[i]=!r&&(e||o>=120&&f.length>=120)?new at(i&&f):void 0}f=t[0];var p=-1,l=c[0];t:for(;++p<o&&u.length<s;){var y=f[p],h=e?e(y):y;if(y=r||0!==y?y:0,!(l?D(l,h):n(u,h,r))){for(i=a;--i;){var g=c[i];if(!(g?D(g,h):n(t[i],h,r)))continue t}l&&l.push(h),u.push(y)}}return u}(e):[]});function ht(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=n(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function a(t){var e=parseInt(t);return e.toString()===t?e:t}function i(t){t=t||{};var i=function(t){return Object.keys(i).reduce(function(e,r){return"create"===r?e:("function"==typeof i[r]&&(e[r]=i[r].bind(i,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(c(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(a),r,n);var o=e[0],i=s(t,o);return 1===e.length?(void 0!==i&&n||(t[o]=r),i):(void 0===i&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return i.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var i=0;i<n.length;i++){var c=a(n[i]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},i.ensureExists=function(t,e,r){return u(t,e,r,!0)},i.set=function(t,e,r,n){return u(t,e,r,n)},i.insert=function(t,e,r,n){var a=i.get(t,e);n=~~n,o(a)||(a=[],i.set(t,e,a)),a.splice(n,0,r)},i.empty=function(t,e){var a,s;if(!r(e)&&null!=t&&(a=i.get(t,e))){if("string"==typeof a)return i.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(a))return i.set(t,e,!1);if("number"==typeof a)return i.set(t,e,0);if(o(a))a.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(a))return i.set(t,e,null);for(s in a)c(a,s)&&delete a[s]}}},i.push=function(t,e){var r=i.get(t,e);o(r)||(r=[],i.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},i.coalesce=function(t,e,r){for(var n,o=0,a=e.length;o<a;o++)if(void 0!==(n=i.get(t,e[o])))return n;return r},i.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return i.get(t,e.split("."),r);var n=a(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:i.get(t[n],e.slice(1),r)},i.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return i.del(t,e.split("."));var n=a(e[0]);return c(t,n)?1!==e.length?i.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},i}var c=i();return c.create=i,c.withInheritedProps=i({includeInheritedProps:!0}),c}()}),dt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function bt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+dt(t)}bt.indicator=dt;var vt=bt,mt=/[|\\{}()[\]^$+*?.]/g,_t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(mt,"\\$&")};const wt=new Map;function jt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(wt.has(n))return wt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=_t(t).replace(/\\\*/g,".*");const a=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return a.negated=o,wt.set(n,a),a}var Ot=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>jt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function $t(t,e,r){return function t(e,r,n,o=!0){function i(t){return null!=t}function c(t){return"Object"===a(t)}function s(t,e){return e=ht(e),Array.from(t).filter(t=>!e.some(e=>Ot.isMatch(t,e,{caseSensitive:!0})))}function u(t){if(t.includes(".")){const e=t.split(".");return e.pop(),e.join(".")}return t}const f=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!i(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let h;if(h=i(n)&&c(n)?Object.assign({},y,n):Object.assign({},y),i(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=ht(h.ignoreKeys):h.ignoreKeys=[],i(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=ht(h.ignorePaths):h.ignorePaths=[],i(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=ht(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach(t=>{if(c(h.schema[t])){const e={};A(h.schema[t],(r,n,o)=>{const a=void 0!==n?n:r;return l(a)||c(a)||(e[`${t}.${o.path}`]=a),a}),delete h.schema[t],h.schema=Object.assign(h.schema,e)}}),Object.keys(h.schema).forEach(t=>{l(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),i(r)||(r={}),o&&t(h,y,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(i(h.schema)&&Object.keys(h.schema).length>0){if(0!==s(p(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){const t=p(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError(`${h.msg}: ${h.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(i(r)&&Object.keys(r).length>0))throw new TypeError(`${h.msg}: Both ${h.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==s(p(Object.keys(e),Object.keys(r)),h.ignoreKeys).length){const t=p(Object.keys(e),Object.keys(r));throw new TypeError(`${h.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==s(p(Object.keys(r),Object.keys(e)),h.ignoreKeys).length){const t=p(Object.keys(r),Object.keys(e));throw new TypeError(`${h.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];A(e,(t,e,n)=>{const o=void 0!==e?e:t;if(l(g)&&g.length&&g.some(t=>n.path.startsWith(t)))return o;if(!(!h.enforceStrictKeyset||!c(o)&&!l(o)&&l(n.parent)||i(h.schema)&&c(h.schema)&&(!c(h.schema)||Object.keys(h.schema).length&&(l(n.parent)||Object.prototype.hasOwnProperty.call(h.schema,n.path))&&(!l(n.parent)||gt.has(h.schema,u(n.path))))||i(r)&&c(r)&&(!c(r)||Object.keys(r).length&&(h.acceptArrays||gt.has(r,n.path))&&(!h.acceptArrays||(l(n.parent)||gt.has(r,n.path))&&(!l(n.parent)||gt.has(r,u(n.path)))))))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} is neither covered by reference object (second input argument), nor ${h.optsVarName}.schema! To stop this error, turn off ${h.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${h.optsVarName}.schema).`);if(c(h.schema)&&Object.keys(h.schema).length&&Object.prototype.hasOwnProperty.call(h.schema,n.path)){const t=ht(h.schema[n.path]).map(String).map(t=>t.toLowerCase());if(gt.set(h.schema,n.path,t),yt(t,f).length)g.push(n.path);else if(!0!==o&&!1!==o&&!t.includes(a(o).toLowerCase())||(!0===o||!1===o)&&!t.includes(String(o))&&!t.includes("boolean")){if(!l(o)||!h.acceptArrays)throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} was customised to ${"string"!==a(o)?'"':""}${JSON.stringify(o,null,0)}${"string"!==a(o)?'"':""} (type: ${a(o).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=o.length;e<r;e++)if(!t.includes(a(o[e]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path}.${e}, the ${vt(e+1)} element (equal to ${JSON.stringify(o[e],null,0)}) is of a type ${a(o[e]).toLowerCase()}, but only the following are allowed by the ${h.optsVarName}.schema: ${t.join(", ")}`)}}else if(i(r)&&Object.keys(r).length&&gt.has(r,n.path)&&a(o)!==a(gt.get(r,n.path))&&(!h.ignoreKeys||!h.ignoreKeys.some(e=>Ot.isMatch(t,e)))&&(!h.ignorePaths||!h.ignorePaths.some(t=>Ot.isMatch(n.path,t)))){const e=gt.get(r,n.path);if(!h.acceptArrays||!l(o)||h.acceptArraysIgnore.includes(t))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} was customised to ${"string"===a(o).toLowerCase()?"":'"'}${JSON.stringify(o,null,0)}${"string"===a(o).toLowerCase()?"":'"'} which is not ${a(e).toLowerCase()} but ${a(o).toLowerCase()}`);if(!o.every(e=>a(e).toLowerCase()===a(r[t]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} was customised to be array, but not all of its elements are ${a(r[t]).toLowerCase()}-type`)}return o})}(t,e,r)}Ot.isMatch=((t,e,r)=>{const n=jt(e,r),o=n.test(t);return n.negated?!o:o});var St=Array.isArray;return function(r,n){if(!St(r))throw new TypeError("ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(0===r.length)return r;var a,i,c={strictlyTwoElementsInRangeArrays:!1,progressFn:null},s=Object.assign({},c,n);if($t(s,c,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),s.strictlyTwoElementsInRangeArrays&&!r.every(function(t,e){return 2===t.length||(a=e,i=t.length,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(o(a)," range (").concat(JSON.stringify(r[a],null,4),") has not two but ").concat(i," elements!"));if(!r.every(function(t,r){return!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(a=r,!1)}))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(o(a)," range (").concat(JSON.stringify(r[a],null,4),") does not consist of only natural numbers!"));var u=r.length*r.length,f=0;return Array.from(r).sort(function(t,e){return s.progressFn&&(f++,s.progressFn(Math.floor(100*f/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1})}});
