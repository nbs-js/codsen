!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.astContainsOnlyEmptySpace=e()}("undefined"!=typeof self?self:this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=1/0,r="[object Symbol]",n=/^\s+|\s+$/g,o="[\\ud800-\\udfff]",u="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",c="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+u+"|"+c+")"+"?",l="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[i,f,a].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),p="(?:"+[i+u+"?",u,f,a,o].join("|")+")",y=RegExp(c+"(?="+c+")|"+p+l,"g"),d=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),h="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,b=h||v||Function("return this")();function _(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,u=r+(n?1:-1);n?u--:++u<o;)if(e(t[u],u,t))return u;return-1}(t,j,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function j(t){return t!=t}function g(t){return function(t){return d.test(t)}(t)?function(t){return t.match(y)||[]}(t):function(t){return t.split("")}(t)}var O=Object.prototype.toString,w=b.Symbol,m=w?w.prototype:void 0,A=m?m.toString:void 0;function S(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&O.call(t)==r}(t))return A?A.call(t):"";var n=t+"";return"0"==n&&1/t==-e?"-0":n}function x(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+e];return u}(t,e,r)}var $=function(t,e,r){var o;if((t=null==(o=t)?"":S(o))&&(r||void 0===e))return t.replace(n,"");if(!t||!(e=S(e)))return t;var u=g(t),c=g(e);return x(u,function(t,e){for(var r=-1,n=t.length;++r<n&&_(e,t[r],0)>-1;);return r}(u,c),function(t,e){for(var r=t.length;r--&&_(e,t[r],0)>-1;);return r}(u,c)+1).join("")},E="[object Object]";var P,k,F=Function.prototype,I=Object.prototype,N=F.toString,M=I.hasOwnProperty,B=N.call(Object),R=I.toString,U=(P=Object.getPrototypeOf,k=Object,function(t){return P(k(t))});var W,C=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||R.call(t)!=E||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=U(t);if(null===e)return!0;var r=M.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&N.call(r)==B},D=(function(e,r){var n=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",i="[object Boolean]",f="[object Date]",a="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",d="[object RegExp]",h="[object Set]",v="[object String]",b="[object Symbol]",_="[object ArrayBuffer]",j="[object DataView]",g="[object Float32Array]",O="[object Float64Array]",w="[object Int8Array]",m="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",$="[object Uint16Array]",E="[object Uint32Array]",P=/\w*$/,k=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[_]=I[j]=I[i]=I[f]=I[g]=I[O]=I[w]=I[m]=I[A]=I[l]=I[p]=I[y]=I[d]=I[h]=I[v]=I[b]=I[S]=I[x]=I[$]=I[E]=!0,I["[object Error]"]=I[a]=I["[object WeakMap]"]=!1;var N="object"==typeof t&&t&&t.Object===Object&&t,M="object"==typeof self&&self&&self.Object===Object&&self,B=N||M||Function("return this")(),R=r&&!r.nodeType&&r,U=R&&e&&!e.nodeType&&e,W=U&&U.exports===R;function C(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function T(t,e,r,n){var o=-1,u=t?t.length:0;for(n&&u&&(r=t[++o]);++o<u;)r=e(r,t[o],o,t);return r}function z(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function V(t,e){return function(r){return t(e(r))}}function G(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var K,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=B["__core-js_shared__"],X=(K=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=W?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,ut=V(Object.getPrototypeOf,Object),ct=Object.create,it=J.propertyIsEnumerable,ft=q.splice,at=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Ut(B,"DataView"),yt=Ut(B,"Map"),dt=Ut(B,"Promise"),ht=Ut(B,"Set"),vt=Ut(B,"WeakMap"),bt=Ut(Object,"create"),_t=zt(pt),jt=zt(yt),gt=zt(dt),Ot=zt(ht),wt=zt(vt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new xt(t)}function Pt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Gt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Dt(u,n))||r.push(u);return r}function kt(t,e,r){var n=t[e];Z.call(t,e)&&Lt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Ft(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,u,k){var F;if(n&&(F=u?n(t,o,u,k):n(t)),void 0!==F)return F;if(!Ht(t))return t;var N=Vt(t);if(N){if(F=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,F)}else{var M=Ct(t),B=M==a||M==s;if(Kt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(M==y||M==c||B&&!u){if(z(t))return u?t:{};if(F=function(t){return"function"!=typeof t.constructor||Tt(t)?{}:(e=ut(t),Ht(e)?ct(e):{});var e}(B?{}:t),!e)return function(t,e){return Bt(t,Wt(t),e)}(t,function(t,e){return t&&Bt(e,Jt(e),t)}(F,t))}else{if(!I[M])return u?t:{};F=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Mt(t);case i:case f:return new o(+t);case j:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case g:case O:case w:case m:case A:case S:case x:case $:case E:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return T(e?r(L(t),!0):L(t),C,new t.constructor)}(t,n,r);case p:case v:return new o(t);case d:return(a=new(c=t).constructor(c.source,P.exec(c))).lastIndex=c.lastIndex,a;case h:return function(t,e,r){return T(e?r(G(t),!0):G(t),D,new t.constructor)}(t,n,r);case b:return u=t,At?Object(At.call(u)):{}}var u;var c,a}(t,M,It,e)}}k||(k=new Et);var R=k.get(t);if(R)return R;if(k.set(t,F),!N)var U=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Wt)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(U||t,function(o,u){U&&(o=t[u=o]),kt(F,u,It(o,e,r,n,u,t,k))}),F}function Nt(t){return!(!Ht(t)||(e=t,X&&X in e))&&(qt(t)||z(t)?et:k).test(zt(t));var e}function Mt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Bt(t,e,r,n){r||(r={});for(var o=-1,u=e.length;++o<u;){var c=e[o],i=n?n(r[c],t[c],c,r,t):void 0;kt(r,c,void 0===i?t[c]:i)}return r}function Rt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Nt(r)?r:void 0}St.prototype.clear=function(){this.__data__=bt?bt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===o?void 0:r}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,r=Ft(e,t);return!(r<0||(r==e.length-1?e.pop():ft.call(e,r,1),0))},xt.prototype.get=function(t){var e=this.__data__,r=Ft(e,t);return r<0?void 0:e[r][1]},xt.prototype.has=function(t){return Ft(this.__data__,t)>-1},xt.prototype.set=function(t,e){var r=this.__data__,n=Ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||xt),string:new St}},$t.prototype.delete=function(t){return Rt(this,t).delete(t)},$t.prototype.get=function(t){return Rt(this,t).get(t)},$t.prototype.has=function(t){return Rt(this,t).has(t)},$t.prototype.set=function(t,e){return Rt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new xt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof xt){var o=r.__data__;if(!yt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new $t(o)}return r.set(t,e),this};var Wt=at?V(at,Object):function(){return[]},Ct=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?u:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function Tt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(pt&&Ct(new pt(new ArrayBuffer(1)))!=j||yt&&Ct(new yt)!=l||dt&&"[object Promise]"!=Ct(dt.resolve())||ht&&Ct(new ht)!=h||vt&&"[object WeakMap]"!=Ct(new vt))&&(Ct=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?zt(r):void 0;if(n)switch(n){case _t:return j;case jt:return l;case gt:return"[object Promise]";case Ot:return h;case wt:return"[object WeakMap]"}return e});var Vt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!qt(t)}var Kt=st||function(){return!1};function qt(t){var e=Ht(t)?tt.call(t):"";return e==a||e==s}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Gt(t)?Pt(t):function(t){if(!Tt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return It(t,!0,!0)}}(W={exports:{}},W.exports),W.exports);const T=Array.isArray;function z(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function L(t,e){return function t(e,r,n){const o=D(e);let u,c,i,f,a;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,T(o))for(u=0,c=o.length;u<c;u++){const e=`${n.path}.${u}`;void 0!==o[u]?(n.parent=D(o),i=t(r(o[u],void 0,Object.assign({},n,{path:z(e)})),r,Object.assign({},n,{path:z(e)})),Number.isNaN(i)&&u<o.length?(o.splice(u,1),u-=1):o[u]=i):o.splice(u,1)}else if(C(o))for(u=0,c=(f=Object.keys(o)).length;u<c;u++){a=f[u];const e=`${n.path}.${a}`;0===n.depth&&null!=a&&(n.topmostKey=a),n.parent=D(o),i=t(r(a,o[a],Object.assign({},n,{path:z(e)})),r,Object.assign({},n,{path:z(e)})),Number.isNaN(i)?delete o[a]:o[a]=i}return o}(t,e,{})}return function(t){function e(t){return"string"==typeof t}var r=Array.isArray,n=!0;return!!(r(t)||C(t)||e(t))&&(e(t)?0===$(t).length:(t=L(t,function(t,r){var o=void 0!==r?r:t;return e(o)&&""!==$(o)&&(n=!1),o}),n))}});
