!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.generateAst=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=(function(e,n){var o=200,u="__lodash_hash_undefined__",i=9007199254740991,c="[object Arguments]",a="[object Boolean]",f="[object Date]",s="[object Function]",l="[object GeneratorFunction]",y="[object Map]",p="[object Number]",d="[object Object]",b="[object RegExp]",h="[object Set]",_="[object String]",v="[object Symbol]",g="[object ArrayBuffer]",j="[object DataView]",m="[object Float32Array]",w="[object Float64Array]",S="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",x="[object Uint8Array]",E="[object Uint8ClampedArray]",Z="[object Uint16Array]",I="[object Uint32Array]",T=/\w*$/,$=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,P={};P[c]=P["[object Array]"]=P[g]=P[j]=P[a]=P[f]=P[m]=P[w]=P[S]=P[O]=P[A]=P[y]=P[p]=P[d]=P[b]=P[h]=P[_]=P[v]=P[x]=P[E]=P[Z]=P[I]=!0,P["[object Error]"]=P[s]=P["[object WeakMap]"]=!1;var k="object"==r(t)&&t&&t.Object===Object&&t,B="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,F=k||B||Function("return this")(),W=n&&!n.nodeType&&n,D=W&&e&&!e.nodeType&&e,R=D&&D.exports===W;function U(t,e){return t.set(e[0],e[1]),t}function N(t,e){return t.add(e),t}function z(t,e,r,n){var o=-1,u=t?t.length:0;for(n&&u&&(r=t[++o]);++o<u;)r=e(r,t[o],o,t);return r}function C(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function H(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function J(t,e){return function(r){return t(e(r))}}function L(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var V,q=Array.prototype,G=Function.prototype,K=Object.prototype,Q=F["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=G.toString,tt=K.hasOwnProperty,et=K.toString,rt=RegExp("^"+Y.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=R?F.Buffer:void 0,ot=F.Symbol,ut=F.Uint8Array,it=J(Object.getPrototypeOf,Object),ct=Object.create,at=K.propertyIsEnumerable,ft=q.splice,st=Object.getOwnPropertySymbols,lt=nt?nt.isBuffer:void 0,yt=J(Object.keys,Object),pt=Dt(F,"DataView"),dt=Dt(F,"Map"),bt=Dt(F,"Promise"),ht=Dt(F,"Set"),_t=Dt(F,"WeakMap"),vt=Dt(Object,"create"),gt=Ct(pt),jt=Ct(dt),mt=Ct(bt),wt=Ct(ht),St=Ct(_t),Ot=ot?ot.prototype:void 0,At=Ot?Ot.valueOf:void 0;function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Zt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){this.__data__=new Et(t)}function Tt(t,e){var n=Jt(t)||function(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":r(t))}(t)&&Lt(t)}(t)&&tt.call(t,"callee")&&(!at.call(t,"callee")||et.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,u=!!o;for(var i in t)!e&&!tt.call(t,i)||u&&("length"==i||Nt(i,o))||n.push(i);return n}function $t(t,e,r){var n=t[e];tt.call(t,e)&&Ht(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Mt(t,e){for(var r=t.length;r--;)if(Ht(t[r][0],e))return r;return-1}function Pt(t,e,r,n,o,u,i){var $;if(n&&($=u?n(t,o,u,i):n(t)),void 0!==$)return $;if(!Gt(t))return t;var M=Jt(t);if(M){if($=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&tt.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,$)}else{var k=Ut(t),B=k==s||k==l;if(Vt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(k==d||k==c||B&&!u){if(C(t))return u?t:{};if($=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=it(t),Gt(e)?ct(e):{});var e}(B?{}:t),!e)return function(t,e){return Ft(t,Rt(t),e)}(t,function(t,e){return t&&Ft(e,Kt(e),t)}($,t))}else{if(!P[k])return u?t:{};$=function(t,e,r,n){var o=t.constructor;switch(e){case g:return Bt(t);case a:case f:return new o(+t);case j:return function(t,e){var r=e?Bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case w:case S:case O:case A:case x:case E:case Z:case I:return function(t,e){var r=e?Bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case y:return function(t,e,r){return z(e?r(H(t),!0):H(t),U,new t.constructor)}(t,n,r);case p:case _:return new o(t);case b:return(c=new(i=t).constructor(i.source,T.exec(i))).lastIndex=i.lastIndex,c;case h:return function(t,e,r){return z(e?r(L(t),!0):L(t),N,new t.constructor)}(t,n,r);case v:return u=t,At?Object(At.call(u)):{}}var u;var i,c}(t,k,Pt,e)}}i||(i=new It);var F=i.get(t);if(F)return F;if(i.set(t,$),!M)var W=r?function(t){return function(t,e,r){var n=e(t);return Jt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Kt,Rt)}(t):Kt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(W||t,function(o,u){W&&(o=t[u=o]),$t($,u,Pt(o,e,r,n,u,t,i))}),$}function kt(t){return!(!Gt(t)||X&&X in t)&&(qt(t)||C(t)?rt:$).test(Ct(t))}function Bt(t){var e=new t.constructor(t.byteLength);return new ut(e).set(new ut(t)),e}function Ft(t,e,r,n){r||(r={});for(var o=-1,u=e.length;++o<u;){var i=e[o],c=n?n(r[i],t[i],i,r,t):void 0;$t(r,i,void 0===c?t[i]:c)}return r}function Wt(t,e){var n,o,u=t.__data__;return("string"==(o=void 0===(n=e)?"undefined":r(n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?u["string"==typeof e?"string":"hash"]:u.map}function Dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return kt(r)?r:void 0}xt.prototype.clear=function(){this.__data__=vt?vt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===u?void 0:r}return tt.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:tt.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?u:e,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var e=this.__data__,r=Mt(e,t);return!(r<0||(r==e.length-1?e.pop():ft.call(e,r,1),0))},Et.prototype.get=function(t){var e=this.__data__,r=Mt(e,t);return r<0?void 0:e[r][1]},Et.prototype.has=function(t){return Mt(this.__data__,t)>-1},Et.prototype.set=function(t,e){var r=this.__data__,n=Mt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Zt.prototype.clear=function(){this.__data__={hash:new xt,map:new(dt||Et),string:new xt}},Zt.prototype.delete=function(t){return Wt(this,t).delete(t)},Zt.prototype.get=function(t){return Wt(this,t).get(t)},Zt.prototype.has=function(t){return Wt(this,t).has(t)},Zt.prototype.set=function(t,e){return Wt(this,t).set(t,e),this},It.prototype.clear=function(){this.__data__=new Et},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Et){var n=r.__data__;if(!dt||n.length<o-1)return n.push([t,e]),this;r=this.__data__=new Zt(n)}return r.set(t,e),this};var Rt=st?J(st,Object):function(){return[]},Ut=function(t){return et.call(t)};function Nt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||M.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function Ct(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ht(t,e){return t===e||t!=t&&e!=e}(pt&&Ut(new pt(new ArrayBuffer(1)))!=j||dt&&Ut(new dt)!=y||bt&&"[object Promise]"!=Ut(bt.resolve())||ht&&Ut(new ht)!=h||_t&&"[object WeakMap]"!=Ut(new _t))&&(Ut=function(t){var e=et.call(t),r=e==d?t.constructor:void 0,n=r?Ct(r):void 0;if(n)switch(n){case gt:return j;case jt:return y;case mt:return"[object Promise]";case wt:return h;case St:return"[object WeakMap]"}return e});var Jt=Array.isArray;function Lt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!qt(t)}var Vt=lt||function(){return!1};function qt(t){var e=Gt(t)?et.call(t):"";return e==s||e==l}function Gt(t){var e=void 0===t?"undefined":r(t);return!!t&&("object"==e||"function"==e)}function Kt(t){return Lt(t)?Tt(t):function(t){if(!zt(t))return yt(t);var e=[];for(var r in Object(t))tt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Pt(t,!0,!0)}}(e={exports:{}},e.exports),e.exports),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e){if(e){if("object"!==(void 0===e?"undefined":o(e)))throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},i=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Array.isArray;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!a(t))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_01]: The first input argument was given not as array but as "+(void 0===t?"undefined":c(t))+", equal to:\n"+JSON.stringify(t,null,0));if(!u(e,{includeZero:!0})){if(!i(e,{includeZero:!0}))throw new Error("array-of-arrays-sort-by-col: [THROW_ID_02]: The second input argument, index of the column to sort by, is not integer (incl. zero)! It's currently given as:\n"+JSON.stringify(e,null,0));e=parseInt(e,10)}return n(t).sort(function(t,r){if(e<Math.max(t.length)||e<Math.max(r.length)){if(void 0===t[e]||null===t[e])return 1;if(void 0===r[e]||null===r[e])return-1;if(t[e]<r[e])return-1;if(t[e]>r[e])return 1}for(var n=0,o=Math.max(t.length,r.length);n<o;n++)if(n!==e){if(void 0===t[n]||null===t[n])return 1;if(void 0===r[n]||null===r[n])return-1;if(t[n]<r[n])return-1;if(t[n]>r[n])return 1}return 0})}});
