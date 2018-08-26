!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.stringFixBrokenNamedEntities=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),a=(o.suffix,n(function(t,e){var n,o,a,c,i,s,u,f,l,p,y,h,g,m,d,b,v,_,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,a="undefined"!=typeof Symbol,c="undefined"!=typeof Map,i="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=a&&void 0!==Symbol.iterator,p=a&&void 0!==Symbol.toStringTag,y=i&&"function"==typeof Set.prototype.entries,h=c&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),m=h&&Object.getPrototypeOf((new Map).entries()),d=l&&"function"==typeof Array.prototype[Symbol.iterator],b=d&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var a=Object.getPrototypeOf(t);return a===RegExp.prototype?"RegExp":a===Date.prototype?"Date":n&&a===Promise.prototype?"Promise":i&&a===Set.prototype?"Set":c&&a===Map.prototype?"Map":u&&a===WeakSet.prototype?"WeakSet":s&&a===WeakMap.prototype?"WeakMap":f&&a===DataView.prototype?"DataView":c&&a===m?"Map Iterator":i&&a===g?"Set Iterator":d&&a===b?"Array Iterator":v&&a===_?"String Iterator":null===a?"Object":Object.prototype.toString.call(t).slice(w,j)})}));function c(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,s,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function i(t,e,r,n){for(var o=r-1,a=t.length;++o<a;)if(n(t[o],e))return o;return-1}function s(t){return t!=t}var u=Array.prototype.splice;function f(t,e,r,n){var o,a=n?i:c,s=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++s<f;)for(var p=0,y=e[s],h=r?r(y):y;(p=a(l,h,p,n))>-1;)l!==t&&u.call(l,p,1),u.call(t,p,1);return t}var l=function(t,e){return t&&t.length&&e&&e.length?f(t,e):t},p=n(function(t,e){var n=200,o="__lodash_hash_undefined__",a=9007199254740991,c="[object Arguments]",i="[object Boolean]",s="[object Date]",u="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",g="[object Set]",m="[object String]",d="[object Symbol]",b="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",A="[object Uint8Array]",$="[object Uint8ClampedArray]",T="[object Uint16Array]",E="[object Uint32Array]",N=/\w*$/,k=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,x={};x[c]=x["[object Array]"]=x[b]=x[v]=x[i]=x[s]=x[_]=x[w]=x[j]=x[O]=x[S]=x[l]=x[p]=x[y]=x[h]=x[g]=x[m]=x[d]=x[A]=x[$]=x[T]=x[E]=!0,x["[object Error]"]=x[u]=x["[object WeakMap]"]=!1;var I="object"==typeof r&&r&&r.Object===Object&&r,M="object"==typeof self&&self&&self.Object===Object&&self,L=I||M||Function("return this")(),C=e&&!e.nodeType&&e,K=C&&t&&!t.nodeType&&t,W=K&&K.exports===C;function D(t,e){return t.set(e[0],e[1]),t}function H(t,e){return t.add(e),t}function V(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function B(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function R(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function F(t,e){return function(r){return t(e(r))}}function J(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var U,Z=Array.prototype,q=Function.prototype,G=Object.prototype,z=L["__core-js_shared__"],Q=(U=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",X=q.toString,Y=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=W?L.Buffer:void 0,nt=L.Symbol,ot=L.Uint8Array,at=F(Object.getPrototypeOf,Object),ct=Object.create,it=G.propertyIsEnumerable,st=Z.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=F(Object.keys,Object),pt=Kt(L,"DataView"),yt=Kt(L,"Map"),ht=Kt(L,"Promise"),gt=Kt(L,"Set"),mt=Kt(L,"WeakMap"),dt=Kt(Object,"create"),bt=Bt(pt),vt=Bt(yt),_t=Bt(ht),wt=Bt(gt),jt=Bt(mt),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new $t(t)}function Nt(t,e){var r=Ft(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&Y.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Y.call(t,a)||o&&("length"==a||Ht(a,n))||r.push(a);return r}function kt(t,e,r){var n=t[e];Y.call(t,e)&&Rt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Pt(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function xt(t,e,r,n,o,a,k){var P;if(n&&(P=a?n(t,o,a,k):n(t)),void 0!==P)return P;if(!qt(t))return t;var I=Ft(t);if(I){if(P=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,P)}else{var M=Dt(t),L=M==u||M==f;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(M==y||M==c||L&&!a){if(B(t))return a?t:{};if(P=function(t){return"function"!=typeof t.constructor||Vt(t)?{}:(e=at(t),qt(e)?ct(e):{});var e}(L?{}:t),!e)return function(t,e){return Lt(t,Wt(t),e)}(t,function(t,e){return t&&Lt(e,Gt(e),t)}(P,t))}else{if(!x[M])return a?t:{};P=function(t,e,r,n){var o=t.constructor;switch(e){case b:return Mt(t);case i:case s:return new o(+t);case v:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case S:case A:case $:case T:case E:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return V(e?r(R(t),!0):R(t),D,new t.constructor)}(t,n,r);case p:case m:return new o(t);case h:return(u=new(c=t).constructor(c.source,N.exec(c))).lastIndex=c.lastIndex,u;case g:return function(t,e,r){return V(e?r(J(t),!0):J(t),H,new t.constructor)}(t,n,r);case d:return a=t,St?Object(St.call(a)):{}}var a;var c,u}(t,M,xt,e)}}k||(k=new Et);var C=k.get(t);if(C)return C;if(k.set(t,P),!I)var K=r?function(t){return function(t,e,r){var n=e(t);return Ft(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Wt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(K||t,function(o,a){K&&(o=t[a=o]),kt(P,a,xt(o,e,r,n,a,t,k))}),P}function It(t){return!(!qt(t)||(e=t,Q&&Q in e))&&(Zt(t)||B(t)?et:k).test(Bt(t));var e}function Mt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Lt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var c=e[o],i=n?n(r[c],t[c],c,r,t):void 0;kt(r,c,void 0===i?t[c]:i)}return r}function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}At.prototype.clear=function(){this.__data__=dt?dt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Y.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?o:e,this},$t.prototype.clear=function(){this.__data__=[]},$t.prototype.delete=function(t){var e=this.__data__,r=Pt(e,t);return!(r<0||(r==e.length-1?e.pop():st.call(e,r,1),0))},$t.prototype.get=function(t){var e=this.__data__,r=Pt(e,t);return r<0?void 0:e[r][1]},$t.prototype.has=function(t){return Pt(this.__data__,t)>-1},$t.prototype.set=function(t,e){var r=this.__data__,n=Pt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new At,map:new(yt||$t),string:new At}},Tt.prototype.delete=function(t){return Ct(this,t).delete(t)},Tt.prototype.get=function(t){return Ct(this,t).get(t)},Tt.prototype.has=function(t){return Ct(this,t).has(t)},Tt.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new $t},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof $t){var o=r.__data__;if(!yt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Wt=ut?F(ut,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Ht(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<e}function Vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Bt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,e){return t===e||t!=t&&e!=e}(pt&&Dt(new pt(new ArrayBuffer(1)))!=v||yt&&Dt(new yt)!=l||ht&&"[object Promise]"!=Dt(ht.resolve())||gt&&Dt(new gt)!=g||mt&&"[object WeakMap]"!=Dt(new mt))&&(Dt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Bt(r):void 0;if(n)switch(n){case bt:return v;case vt:return l;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Ft=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!Zt(t)}var Ut=ft||function(){return!1};function Zt(t){var e=qt(t)?tt.call(t):"";return e==u||e==f}function qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Jt(t)?Nt(t):function(t){if(!Vt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return xt(t,!0,!0)}}),y="[object Object]";var h,g,m=Function.prototype,d=Object.prototype,b=m.toString,v=d.hasOwnProperty,_=b.call(Object),w=d.toString,j=(h=Object.getPrototypeOf,g=Object,function(t){return h(g(t))});var O=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||w.call(t)!=y||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=j(t);if(null===e)return!0;var r=v.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&b.call(r)==_};const S=Array.isArray;function A(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function $(t,e){return function t(e,r,n){const o=p(e);let a,c,i,s,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,S(o))for(a=0,c=o.length;a<c;a++){const e=`${n.path}.${a}`;void 0!==o[a]?(n.parent=p(o),i=t(r(o[a],void 0,Object.assign({},n,{path:A(e)})),r,Object.assign({},n,{path:A(e)})),Number.isNaN(i)&&a<o.length?(o.splice(a,1),a-=1):o[a]=i):o.splice(a,1)}else if(O(o))for(a=0,c=(s=Object.keys(o)).length;a<c;a++){u=s[a];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=p(o),i=t(r(u,o[u],Object.assign({},n,{path:A(e)})),r,Object.assign({},n,{path:A(e)})),Number.isNaN(i)?delete o[u]:o[u]=i}return o}(t,e,{})}var T="__lodash_hash_undefined__",E=9007199254740991,N="[object Function]",k="[object GeneratorFunction]",P=/^\[object .+?Constructor\]$/,x="object"==typeof r&&r&&r.Object===Object&&r,I="object"==typeof self&&self&&self.Object===Object&&self,M=x||I||Function("return this")();function L(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,W,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function C(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function K(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function W(t){return t!=t}function D(t){return function(e){return t(e)}}function H(t,e){return t.has(e)}var V,B=Array.prototype,R=Function.prototype,F=Object.prototype,J=M["__core-js_shared__"],U=(V=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Z=R.toString,q=F.hasOwnProperty,G=F.toString,z=RegExp("^"+Z.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=B.splice,X=Math.max,Y=Math.min,tt=ft(M,"Map"),et=ft(Object,"create");function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.__data__=new ot;++e<r;)this.add(t[e])}function ct(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function it(t){return!(!pt(t)||(e=t,U&&U in e))&&(lt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?z:P).test(function(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function st(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E}(t.length)&&!lt(t)}(t)}(t)?t:[]}function ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return it(r)?r:void 0}function lt(t){var e=pt(t)?G.call(t):"";return e==N||e==k}function pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}rt.prototype.clear=function(){this.__data__=et?et(null):{}},rt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},rt.prototype.get=function(t){var e=this.__data__;if(et){var r=e[t];return r===T?void 0:r}return q.call(e,t)?e[t]:void 0},rt.prototype.has=function(t){var e=this.__data__;return et?void 0!==e[t]:q.call(e,t)},rt.prototype.set=function(t,e){return this.__data__[t]=et&&void 0===e?T:e,this},nt.prototype.clear=function(){this.__data__=[]},nt.prototype.delete=function(t){var e=this.__data__,r=ct(e,t);return!(r<0||(r==e.length-1?e.pop():Q.call(e,r,1),0))},nt.prototype.get=function(t){var e=this.__data__,r=ct(e,t);return r<0?void 0:e[r][1]},nt.prototype.has=function(t){return ct(this.__data__,t)>-1},nt.prototype.set=function(t,e){var r=this.__data__,n=ct(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ot.prototype.clear=function(){this.__data__={hash:new rt,map:new(tt||nt),string:new rt}},ot.prototype.delete=function(t){return ut(this,t).delete(t)},ot.prototype.get=function(t){return ut(this,t).get(t)},ot.prototype.has=function(t){return ut(this,t).has(t)},ot.prototype.set=function(t,e){return ut(this,t).set(t,e),this},at.prototype.add=at.prototype.push=function(t){return this.__data__.set(t,T),this},at.prototype.has=function(t){return this.__data__.has(t)};var yt=function(t,e){return e=X(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=X(r.length-e,0),a=Array(o);++n<o;)a[n]=r[e+n];n=-1;for(var c=Array(e+1);++n<e;)c[n]=r[n];return c[e]=a,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,c)}}(function(t){var e=K(t,st);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?C:L,o=t[0].length,a=t.length,c=a,i=Array(a),s=1/0,u=[];c--;){var f=t[c];c&&e&&(f=K(f,D(e))),s=Y(f.length,s),i[c]=!r&&(e||o>=120&&f.length>=120)?new at(c&&f):void 0}f=t[0];var l=-1,p=i[0];t:for(;++l<o&&u.length<s;){var y=f[l],h=e?e(y):y;if(y=r||0!==y?y:0,!(p?H(p,h):n(u,h,r))){for(c=a;--c;){var g=i[c];if(!(g?H(g,h):n(t[c],h,r)))continue t}p&&p.push(h),u.push(y)}}return u}(e):[]});function ht(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=n(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function a(t){var e=parseInt(t);return e.toString()===t?e:t}function c(t){t=t||{};var c=function(t){return Object.keys(c).reduce(function(e,r){return"create"===r?e:("function"==typeof c[r]&&(e[r]=c[r].bind(c,t)),e)},{})};function i(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(i(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(a),r,n);var o=e[0],c=s(t,o);return 1===e.length?(void 0!==c&&n||(t[o]=r),c):(void 0===c&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return c.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var c=0;c<n.length;c++){var i=a(n[c]);if(!("number"==typeof i&&o(r)&&i<r.length||(t.includeInheritedProps?i in Object(r):e(r,i))))return!1;r=r[i]}return!0},c.ensureExists=function(t,e,r){return u(t,e,r,!0)},c.set=function(t,e,r,n){return u(t,e,r,n)},c.insert=function(t,e,r,n){var a=c.get(t,e);n=~~n,o(a)||(a=[],c.set(t,e,a)),a.splice(n,0,r)},c.empty=function(t,e){var a,s;if(!r(e)&&null!=t&&(a=c.get(t,e))){if("string"==typeof a)return c.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(a))return c.set(t,e,!1);if("number"==typeof a)return c.set(t,e,0);if(o(a))a.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(a))return c.set(t,e,null);for(s in a)i(a,s)&&delete a[s]}}},c.push=function(t,e){var r=c.get(t,e);o(r)||(r=[],c.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},c.coalesce=function(t,e,r){for(var n,o=0,a=e.length;o<a;o++)if(void 0!==(n=c.get(t,e[o])))return n;return r},c.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return c.get(t,e.split("."),r);var n=a(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:c.get(t[n],e.slice(1),r)},c.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return c.del(t,e.split("."));var n=a(e[0]);return i(t,n)?1!==e.length?c.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},c}var i=c();return i.create=c,i.withInheritedProps=c({includeInheritedProps:!0}),i}()}),mt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function dt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+mt(t)}dt.indicator=mt;var bt=dt,vt=/[|\\{}()[\]^$+*?.]/g,_t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(vt,"\\$&")};const wt=new Map;function jt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(wt.has(n))return wt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=_t(t).replace(/\\\*/g,".*");const a=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return a.negated=o,wt.set(n,a),a}var Ot=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>jt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function St(t,e,r){return function t(e,r,n,o=!0){function c(t){return null!=t}function i(t){return"Object"===a(t)}function s(t,e){return e=ht(e),Array.from(t).filter(t=>!e.some(e=>Ot.isMatch(t,e,{caseSensitive:!0})))}function u(t){if(t.includes(".")){const e=t.split(".");return e.pop(),e.join(".")}return t}const f=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!c(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let h;if(h=c(n)&&i(n)?Object.assign({},y,n):Object.assign({},y),c(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=ht(h.ignoreKeys):h.ignoreKeys=[],c(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=ht(h.ignorePaths):h.ignorePaths=[],c(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=ht(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&Object.keys(h.schema).forEach(t=>{p(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())}),c(r)||(r={}),o&&t(h,y,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(c(h.schema)&&Object.keys(h.schema).length>0){if(0!==s(l(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError(`${h.msg}: ${h.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(c(r)&&Object.keys(r).length>0))throw new TypeError(`${h.msg}: Both ${h.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==s(l(Object.keys(e),Object.keys(r)),h.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(r));throw new TypeError(`${h.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==s(l(Object.keys(r),Object.keys(e)),h.ignoreKeys).length){const t=l(Object.keys(r),Object.keys(e));throw new TypeError(`${h.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}$(e,(t,e,n)=>{const o=void 0!==e?e:t;if(!(!h.enforceStrictKeyset||!i(o)&&!p(o)&&p(n.parent)||c(h.schema)&&i(h.schema)&&(!i(h.schema)||Object.keys(h.schema).length&&(p(n.parent)||Object.prototype.hasOwnProperty.call(h.schema,n.path))&&(!p(n.parent)||gt.has(h.schema,u(n.path))))||c(r)&&i(r)&&(!i(r)||Object.keys(r).length&&(h.acceptArrays||gt.has(r,n.path))&&(!h.acceptArrays||(p(n.parent)||gt.has(r,n.path))&&(!p(n.parent)||gt.has(r,u(n.path)))))))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} is neither covered by reference object (second input argument), nor ${h.optsVarName}.schema! To stop this error, turn off ${h.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${h.optsVarName}.schema).`);if(i(h.schema)&&Object.keys(h.schema).length&&Object.prototype.hasOwnProperty.call(h.schema,n.path)){const t=ht(h.schema[n.path]).map(String).map(t=>t.toLowerCase());if(gt.set(h.schema,n.path,t),!(yt(t,f).length||(!0===o||!1===o||t.includes(a(o).toLowerCase()))&&(!0!==o&&!1!==o||t.includes(String(o))||t.includes("boolean")))){if(!p(o)||!h.acceptArrays)throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} was customised to ${"string"!==a(o)?'"':""}${JSON.stringify(o,null,0)}${"string"!==a(o)?'"':""} (${a(o).toLowerCase()}) which is not among the allowed types in schema (${t.join(", ")})`);for(let e=0,r=o.length;e<r;e++)if(!t.includes(a(o[e]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path}.${e}, the ${bt(e+1)} element (equal to ${JSON.stringify(o[e],null,0)}) is of a type ${a(o[e]).toLowerCase()}, but only the following are allowed by the ${h.optsVarName}.schema: ${t.join(", ")}`)}}else if(c(r)&&Object.keys(r).length&&gt.has(r,n.path)&&a(o)!==a(gt.get(r,n.path))&&(!h.ignoreKeys||!h.ignoreKeys.some(e=>Ot.isMatch(t,e)))&&(!h.ignorePaths||!h.ignorePaths.some(t=>Ot.isMatch(n.path,t)))){const e=gt.get(r,n.path);if(!h.acceptArrays||!p(o)||h.acceptArraysIgnore.includes(t))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} was customised to ${"string"===a(o).toLowerCase()?"":'"'}${JSON.stringify(o,null,0)}${"string"===a(o).toLowerCase()?"":'"'} which is not ${a(e).toLowerCase()} but ${a(o).toLowerCase()}`);if(!o.every(e=>a(e).toLowerCase()===a(r[t]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${n.path} was customised to be array, but not all of its elements are ${a(r[t]).toLowerCase()}-type`)}return o})}(t,e,r)}Ot.isMatch=((t,e,r)=>{const n=jt(e,r),o=n.test(t);return n.negated?!o:o});const At=Array.isArray;function $t(t){if(!Array.isArray(t))return t;const r=function(t,r){if(!At(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const n={strictlyTwoElementsInRangeArrays:!1},a=Object.assign({},n,r);let c,i;if(St(a,n,{msg:"ranges-sort: [THROW_ID_02*]"}),a.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(c=e,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${o(c)} range (${JSON.stringify(t[c],null,4)}) has not two but ${i} elements!`);if(!t.every((t,r)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(c=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${o(c)} range (${JSON.stringify(t[c],null,4)}) does not consist of only natural numbers!`);return Array.from(t).sort((t,e)=>t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1)}(p(t).filter(t=>void 0!==t[2]||t[0]!==t[1]));for(let t=r.length-1;t>0;t--)(r[t][0]<=r[t-1][0]||r[t][0]<=r[t-1][1])&&(r[t-1][0]=Math.min(r[t][0],r[t-1][0]),r[t-1][1]=Math.max(r[t][1],r[t-1][1]),void 0!==r[t][2]&&(r[t-1][0]>=r[t][0]||r[t-1][1]<=r[t][1])&&null!==r[t-1][2]&&(null===r[t][2]&&null!==r[t-1][2]?r[t-1][2]=null:void 0!==r[t-1][2]?r[t-1][2]+=r[t][2]:r[t-1][2]=r[t][2]),r.splice(t,1),t=r.length);return r}return function(e){var r=!1,n={nameStartsAt:null,ampersandNecessary:null,patience:1,matchedN:!1,matchedB:!1,matchedS:!1,matchedP:!1},o=p(n);if("string"!=typeof e)throw new Error("string-fix-broken-named-entities: [THROW_ID_01] the input must be string! Currently we've been given ".concat(t(e),", equal to:\n").concat(JSON.stringify(e,null,4)));var a=[];t:for(var c=0,i=e.length+1;c<i;c++){if(console.log("[".concat(36,"m","===============================","[",39,"m [",35,"m","str[ ".concat(c," ] = ","[".concat(31,"m",e[c]?""===e[c].trim()?null===e[c]?"null":"\n"===e[c]?"line break":"\t"===e[c]?"tab":" "===e[c]?"space":"???":e[c]:"undefined","[",39,"m")),"[",39,"m [",36,"m","===============================","[",39,"m")),null!==o.nameStartsAt&&o.matchedN&&o.matchedB&&o.matchedS&&o.matchedP&&";"!==e[c]&&(console.log("[".concat(32,"m","130 ENDING OF AN NBSP; PUSH [".concat(o.nameStartsAt,", ").concat(c,', "&nbsp;"]'),"[",39,"m")),a.push([o.nameStartsAt,c,"&nbsp;"]),o=p(n),console.log("137 WIPE ".concat("[".concat(33,"m","nbsp","[",39,"m"),", now = ",JSON.stringify(o,null,4)))),"&"===e[c]){if(console.log("159 & caught"),"a"===e[c+1]&&"m"===e[c+2]&&"p"===e[c+3]&&";"===e[c+4]){r=!0;for(var s=c+5;"a"===e[s]&&"m"===e[s+1]&&"p"===e[s+2]&&";"===e[s+3];)s+=4;a.push([c+1,s]),console.log("183 PUSH [".concat(33,"m","[".concat(c+1,", ").concat(s,"]"),"[",39,"m")),c=s-1;continue t}null===o.nameStartsAt&&null===o.ampersandNecessary&&(o.nameStartsAt=c,console.log("200 SET ".concat("[".concat(33,"m","nbsp.nameStartsAt","[",39,"m")," = ",o.nameStartsAt)),o.ampersandNecessary=!1,console.log("206 SET ".concat("[".concat(33,"m","nbsp.ampersandNecessary","[",39,"m")," = ",o.ampersandNecessary)))}e[c]&&"n"===e[c].toLowerCase()&&(console.log("216 n caught"),o.matchedN=!0,null===o.nameStartsAt&&(o.nameStartsAt=c,console.log("222 SET ".concat("[".concat(33,"m","nbsp.nameStartsAt","[",39,"m")," = ",o.nameStartsAt)),null!==o.ampersandNecessary||r||(o.ampersandNecessary=!0,console.log("231 SET ".concat("[".concat(33,"m","nbsp.ampersandNecessary","[",39,"m")," = ",o.ampersandNecessary))))),e[c]&&"b"===e[c].toLowerCase()&&(console.log("241 b caught"),null!==o.nameStartsAt&&(o.matchedB=!0,console.log("246 SET ".concat("[".concat(33,"m","nbsp.matchedB","[",39,"m")," = ",o.matchedB)))),e[c]&&"s"===e[c].toLowerCase()&&(console.log("255 s caught"),null!==o.nameStartsAt&&(o.matchedS=!0,console.log("260 SET ".concat("[".concat(33,"m","nbsp.matchedS","[",39,"m")," = ",o.matchedS)))),e[c]&&"p"===e[c].toLowerCase()&&(console.log("269 p caught"),null!==o.nameStartsAt&&(o.matchedP=!0,console.log("274 SET ".concat("[".concat(33,"m","nbsp.matchedP","[",39,"m")," = ",o.matchedP)))),r&&(r=!1,console.log("298 SET ".concat("[".concat(33,"m","state_AmpersandNotNeeded","[",39,"m")," = ",JSON.stringify(r,null,4)))),console.log("---------------"),console.log("state_AmpersandNotNeeded = ".concat(r)),console.log("".concat("[".concat(33,"m","nbsp","[",39,"m")," = ",JSON.stringify(o,null,4)))}return a.length?$t(a):null}});
