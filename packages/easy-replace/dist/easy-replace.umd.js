/**
 * easy-replace
 * Replace strings with optional lookarounds, but without regexes
 * Version: 3.7.44
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/easy-replace
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).easyReplace=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=9007199254740991,n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="[object Map]",u="[object Set]",c="[object String]",f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l="[\\ud800-\\udfff]",p="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",h="\\ud83c[\\udffb-\\udfff]",y="[^\\ud800-\\udfff]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",b="(?:"+p+"|"+h+")"+"?",v="[\\ufe0e\\ufe0f]?"+b+("(?:\\u200d(?:"+[y,g,d].join("|")+")[\\ufe0e\\ufe0f]?"+b+")*"),m="(?:"+[y+p+"?",p,g,d,l].join("|")+")",_=RegExp(h+"(?="+h+")|"+m+v,"g"),j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),w="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,$=w||O||Function("return this")();function S(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,(function(e){return t[e]}))}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function k(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}function M(t){return function(t){return j.test(t)}(t)?function(t){return t.match(_)||[]}(t):function(t){return t.split("")}(t)}var N,E,T,P=Function.prototype,L=Object.prototype,x=$["__core-js_shared__"],C=(N=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"",F=P.toString,I=L.hasOwnProperty,V=L.toString,K=RegExp("^"+F.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=$.Symbol,W=D?D.iterator:void 0,R=L.propertyIsEnumerable,J=(E=Object.keys,T=Object,function(t){return E(T(t))}),B=nt($,"DataView"),H=nt($,"Map"),U=nt($,"Promise"),z=nt($,"Set"),q=nt($,"WeakMap"),G=at(B),Q=at(H),X=at(U),Y=at(z),Z=at(q);function tt(t,e){var r=ut(t)||function(t){return function(t){return lt(t)&&ct(t)}(t)&&I.call(t,"callee")&&(!R.call(t,"callee")||V.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,i=!!o;for(var a in t)!e&&!I.call(t,a)||i&&("length"==a||it(a,o))||r.push(a);return r}function et(t){return!(!st(t)||function(t){return!!C&&C in t}(t))&&(ft(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?K:f).test(at(t))}function rt(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||L,e!==n)return J(t);var e,r,n,o=[];for(var i in Object(t))I.call(t,i)&&"constructor"!=i&&o.push(i);return o}function nt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return et(r)?r:void 0}var ot=function(t){return V.call(t)};function it(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function at(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(B&&"[object DataView]"!=ot(new B(new ArrayBuffer(1)))||H&&ot(new H)!=a||U&&"[object Promise]"!=ot(U.resolve())||z&&ot(new z)!=u||q&&"[object WeakMap]"!=ot(new q))&&(ot=function(t){var e=V.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?at(r):void 0;if(n)switch(n){case G:return"[object DataView]";case Q:return a;case X:return"[object Promise]";case Y:return u;case Z:return"[object WeakMap]"}return e});var ut=Array.isArray;function ct(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!ft(t)}function ft(t){var e=st(t)?V.call(t):"";return e==o||e==i}function st(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function lt(t){return!!t&&"object"==typeof t}function pt(t){return t?S(t,function(t){return ct(t)?tt(t):rt(t)}(t)):[]}var ht=function(t){if(!t)return[];if(ct(t))return function(t){return"string"==typeof t||!ut(t)&&lt(t)&&V.call(t)==c}(t)?M(t):function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(t);if(W&&t[W])return function(t){for(var e,r=[];!(e=t.next()).done;)r.push(e.value);return r}(t[W]());var e=ot(t);return(e==a?A:e==u?k:pt)(t)},yt=e((function(e,r){var n,o,i,a,u,c,f,s,l,p,h,y,g,d,b,v,m,_,j,w;e.exports=(n="function"==typeof Promise,o="object"==typeof self?self:t,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,u="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=u&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),j=8,w=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":u&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":f&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":s&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":u&&i===g?"Set Iterator":b&&i===v?"Array Iterator":m&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(j,w)})}));function gt(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,bt,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function dt(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function bt(t){return t!=t}var vt=Array.prototype.splice;function mt(t,e,r,n){var o=n?dt:gt,i=-1,a=e.length,u=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(u=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,function(t){return function(e){return t(e)}}(r)));++i<a;)for(var c=0,f=e[i],s=r?r(f):f;(c=o(u,s,c,n))>-1;)u!==t&&vt.call(u,c,1),vt.call(t,c,1);return t}var _t=function(t,e){return t&&t.length&&e&&e.length?mt(t,e):t},jt=e((function(e,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",u="[object Boolean]",c="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",v="[object ArrayBuffer]",m="[object DataView]",_="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",A="[object Uint8ClampedArray]",k="[object Uint16Array]",M="[object Uint32Array]",N=/\w*$/,E=/^\[object .+?Constructor\]$/,T=/^(?:0|[1-9]\d*)$/,P={};P[a]=P["[object Array]"]=P[v]=P[m]=P[u]=P[c]=P[_]=P[j]=P[w]=P[O]=P[$]=P[l]=P[p]=P[h]=P[y]=P[g]=P[d]=P[b]=P[S]=P[A]=P[k]=P[M]=!0,P["[object Error]"]=P[f]=P["[object WeakMap]"]=!1;var L="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,C=L||x||Function("return this")(),F=r&&!r.nodeType&&r,I=F&&e&&!e.nodeType&&e,V=I&&I.exports===F;function K(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function W(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function R(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function J(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function B(t,e){return function(r){return t(e(r))}}function H(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var U=Array.prototype,z=Function.prototype,q=Object.prototype,G=C["__core-js_shared__"],Q=function(){var t=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),X=z.toString,Y=q.hasOwnProperty,Z=q.toString,tt=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=V?C.Buffer:void 0,rt=C.Symbol,nt=C.Uint8Array,ot=B(Object.getPrototypeOf,Object),it=Object.create,at=q.propertyIsEnumerable,ut=U.splice,ct=Object.getOwnPropertySymbols,ft=et?et.isBuffer:void 0,st=B(Object.keys,Object),lt=Ft(C,"DataView"),pt=Ft(C,"Map"),ht=Ft(C,"Promise"),yt=Ft(C,"Set"),gt=Ft(C,"WeakMap"),dt=Ft(Object,"create"),bt=Wt(lt),vt=Wt(pt),mt=Wt(ht),_t=Wt(yt),jt=Wt(gt),wt=rt?rt.prototype:void 0,Ot=wt?wt.valueOf:void 0;function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new St(t)}function Mt(t,e){var r=Jt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Y.call(t,"callee")&&(!at.call(t,"callee")||Z.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Kt(i,n))||r.push(i);return r}function Nt(t,e,r){var n=t[e];Y.call(t,e)&&Rt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Et(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function Tt(t,e,r,n,o,i,E){var T;if(n&&(T=i?n(t,o,i,E):n(t)),void 0!==T)return T;if(!zt(t))return t;var L=Jt(t);if(L){if(T=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,T)}else{var x=Vt(t),C=x==f||x==s;if(Ht(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==h||x==a||C&&!i){if(R(t))return i?t:{};if(T=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:(e=ot(t),zt(e)?it(e):{});var e}(C?{}:t),!e)return function(t,e){return xt(t,It(t),e)}(t,function(t,e){return t&&xt(e,qt(e),t)}(T,t))}else{if(!P[x])return i?t:{};T=function(t,e,r,n){var o=t.constructor;switch(e){case v:return Lt(t);case u:case c:return new o(+t);case m:return function(t,e){var r=e?Lt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case j:case w:case O:case $:case S:case A:case k:case M:return function(t,e){var r=e?Lt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return W(e?r(J(t),!0):J(t),K,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(f=new(a=t).constructor(a.source,N.exec(a))).lastIndex=a.lastIndex,f;case g:return function(t,e,r){return W(e?r(H(t),!0):H(t),D,new t.constructor)}(t,n,r);case b:return i=t,Ot?Object(Ot.call(i)):{}}var i;var a,f}(t,x,Tt,e)}}E||(E=new kt);var F=E.get(t);if(F)return F;if(E.set(t,T),!L)var I=r?function(t){return function(t,e,r){var n=e(t);return Jt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,qt,It)}(t):qt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(I||t,(function(o,i){I&&(o=t[i=o]),Nt(T,i,Tt(o,e,r,n,i,t,E))})),T}function Pt(t){return!(!zt(t)||function(t){return!!Q&&Q in t}(t))&&(Ut(t)||R(t)?tt:E).test(Wt(t))}function Lt(t){var e=new t.constructor(t.byteLength);return new nt(e).set(new nt(t)),e}function xt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],u=n?n(r[a],t[a],a,r,t):void 0;Nt(r,a,void 0===u?t[a]:u)}return r}function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Pt(r)?r:void 0}$t.prototype.clear=function(){this.__data__=dt?dt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},$t.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Y.call(e,t)},$t.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?o:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Et(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Et(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Et(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new $t,map:new(pt||St),string:new $t}},At.prototype.delete=function(t){return Ct(this,t).delete(t)},At.prototype.get=function(t){return Ct(this,t).get(t)},At.prototype.has=function(t){return Ct(this,t).has(t)},At.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new St},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var o=r.__data__;if(!pt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new At(o)}return r.set(t,e),this};var It=ct?B(ct,Object):function(){return[]},Vt=function(t){return Z.call(t)};function Kt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||T.test(t))&&t>-1&&t%1==0&&t<e}function Dt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||q)}function Wt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,e){return t===e||t!=t&&e!=e}(lt&&Vt(new lt(new ArrayBuffer(1)))!=m||pt&&Vt(new pt)!=l||ht&&"[object Promise]"!=Vt(ht.resolve())||yt&&Vt(new yt)!=g||gt&&"[object WeakMap]"!=Vt(new gt))&&(Vt=function(t){var e=Z.call(t),r=e==h?t.constructor:void 0,n=r?Wt(r):void 0;if(n)switch(n){case bt:return m;case vt:return l;case mt:return"[object Promise]";case _t:return g;case jt:return"[object WeakMap]"}return e});var Jt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Ut(t)}var Ht=ft||function(){return!1};function Ut(t){var e=zt(t)?Z.call(t):"";return e==f||e==s}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function qt(t){return Bt(t)?Mt(t):function(t){if(!Dt(t))return st(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Tt(t,!0,!0)}})),wt="[object Object]";var Ot=Function.prototype,$t=Object.prototype,St=Ot.toString,At=$t.hasOwnProperty,kt=St.call(Object),Mt=$t.toString,Nt=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var Et=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||Mt.call(t)!=wt||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=Nt(t);if(null===e)return!0;var r=At.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&St.call(r)==kt};const Tt=Array.isArray;function Pt(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function Lt(t,e){return function t(e,r,n){const o=jt(e);let i,a,u,c,f;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,Tt(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=jt(o),n.parentType="array",u=t(r(o[i],void 0,Object.assign({},n,{path:Pt(e)})),r,Object.assign({},n,{path:Pt(e)})),Number.isNaN(u)&&i<o.length?(o.splice(i,1),i-=1):o[i]=u):o.splice(i,1)}else if(Et(o))for(i=0,a=(c=Object.keys(o)).length;i<a;i++){f=c[i];const e=`${n.path}.${f}`;0===n.depth&&null!=f&&(n.topmostKey=f),n.parent=jt(o),n.parentType="object",u=t(r(f,o[f],Object.assign({},n,{path:Pt(e)})),r,Object.assign({},n,{path:Pt(e)})),Number.isNaN(u)?delete o[f]:o[f]=u}return o}(t,e,{})}var xt="__lodash_hash_undefined__",Ct=9007199254740991,Ft="[object Function]",It="[object GeneratorFunction]",Vt=/^\[object .+?Constructor\]$/,Kt="object"==typeof t&&t&&t.Object===Object&&t,Dt="object"==typeof self&&self&&self.Object===Object&&self,Wt=Kt||Dt||Function("return this")();function Rt(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function Jt(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,Ut,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function Bt(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function Ht(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function Ut(t){return t!=t}function zt(t){return function(e){return t(e)}}function qt(t,e){return t.has(e)}var Gt=Array.prototype,Qt=Function.prototype,Xt=Object.prototype,Yt=Wt["__core-js_shared__"],Zt=function(){var t=/[^.]+$/.exec(Yt&&Yt.keys&&Yt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),te=Qt.toString,ee=Xt.hasOwnProperty,re=Xt.toString,ne=RegExp("^"+te.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),oe=Gt.splice,ie=Math.max,ae=Math.min,ue=be(Wt,"Map"),ce=be(Object,"create");function fe(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function se(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function le(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function pe(t){var e=-1,r=t?t.length:0;for(this.__data__=new le;++e<r;)this.add(t[e])}function he(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ye(t){return!(!me(t)||function(t){return!!Zt&&Zt in t}(t))&&(ve(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?ne:Vt).test(function(t){if(null!=t){try{return te.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ge(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Ct}(t.length)&&!ve(t)}(t)}(t)?t:[]}function de(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function be(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ye(r)?r:void 0}function ve(t){var e=me(t)?re.call(t):"";return e==Ft||e==It}function me(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}fe.prototype.clear=function(){this.__data__=ce?ce(null):{}},fe.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},fe.prototype.get=function(t){var e=this.__data__;if(ce){var r=e[t];return r===xt?void 0:r}return ee.call(e,t)?e[t]:void 0},fe.prototype.has=function(t){var e=this.__data__;return ce?void 0!==e[t]:ee.call(e,t)},fe.prototype.set=function(t,e){return this.__data__[t]=ce&&void 0===e?xt:e,this},se.prototype.clear=function(){this.__data__=[]},se.prototype.delete=function(t){var e=this.__data__,r=he(e,t);return!(r<0)&&(r==e.length-1?e.pop():oe.call(e,r,1),!0)},se.prototype.get=function(t){var e=this.__data__,r=he(e,t);return r<0?void 0:e[r][1]},se.prototype.has=function(t){return he(this.__data__,t)>-1},se.prototype.set=function(t,e){var r=this.__data__,n=he(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},le.prototype.clear=function(){this.__data__={hash:new fe,map:new(ue||se),string:new fe}},le.prototype.delete=function(t){return de(this,t).delete(t)},le.prototype.get=function(t){return de(this,t).get(t)},le.prototype.has=function(t){return de(this,t).has(t)},le.prototype.set=function(t,e){return de(this,t).set(t,e),this},pe.prototype.add=pe.prototype.push=function(t){return this.__data__.set(t,xt),this},pe.prototype.has=function(t){return this.__data__.has(t)};var _e=function(t,e){return e=ie(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=ie(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,Rt(t,this,a)}}((function(t){var e=Ht(t,ge);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?Bt:Jt,o=t[0].length,i=t.length,a=i,u=Array(i),c=1/0,f=[];a--;){var s=t[a];a&&e&&(s=Ht(s,zt(e))),c=ae(s.length,c),u[a]=!r&&(e||o>=120&&s.length>=120)?new pe(a&&s):void 0}s=t[0];var l=-1,p=u[0];t:for(;++l<o&&f.length<c;){var h=s[l],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?qt(p,y):n(f,y,r))){for(a=i;--a;){var g=u[a];if(!(g?qt(g,y):n(t[a],y,r)))continue t}p&&p.push(y),f.push(h)}}return f}(e):[]}));function je(t){return"string"==typeof t?t.length>0?[t]:[]:t}var we=e((function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce((function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)}),{})};function u(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function c(t,e){if(u(t,e))return t[e]}function f(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return f(t,e.split(".").map(i),r,n);var o=e[0],a=c(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),f(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var u=i(n[a]);if(!("number"==typeof u&&o(r)&&u<r.length||(t.includeInheritedProps?u in Object(r):e(r,u))))return!1;r=r[u]}return!0},a.ensureExists=function(t,e,r){return f(t,e,r,!0)},a.set=function(t,e,r,n){return f(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,c;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(c in i)u(i,c)&&delete i[c]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=c(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return u(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var u=a();return u.create=a,u.withInheritedProps=a({includeInheritedProps:!0}),u}()})),Oe=function(t){var e=(t=Math.abs(t))%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function $e(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return Number.isFinite(t)?t+Oe(t):t}$e.indicator=Oe;var Se=$e;const Ae=/[|\\{}()[\]^$+*?.-]/g;var ke=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(Ae,"\\$&")};const Me=new Map;function Ne(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(Me.has(r))return Me.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=ke(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,Me.set(r,o),o}var Ee=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>Ne(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function Te(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(t){return null!=t}function u(t){return"Object"===yt(t)}function c(t,e){return e=je(e),Array.from(t).filter(t=>!e.some(e=>Ee.isMatch(t,e,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],s=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const l={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let p;if(p=a(n)&&u(n)?Object.assign({},l,n):Object.assign({},l),a(p.ignoreKeys)&&p.ignoreKeys?p.ignoreKeys=je(p.ignoreKeys):p.ignoreKeys=[],a(p.ignorePaths)&&p.ignorePaths?p.ignorePaths=je(p.ignorePaths):p.ignorePaths=[],a(p.acceptArraysIgnore)&&p.acceptArraysIgnore?p.acceptArraysIgnore=je(p.acceptArraysIgnore):p.acceptArraysIgnore=[],p.msg="string"==typeof p.msg?p.msg.trim():p.msg,":"===p.msg[p.msg.length-1]&&(p.msg=p.msg.slice(0,p.msg.length-1).trim()),p.schema&&(Object.keys(p.schema).forEach(t=>{if(u(p.schema[t])){const e={};Lt(p.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return s(i)||u(i)||(e[`${t}.${o.path}`]=i),i}),delete p.schema[t],p.schema=Object.assign(p.schema,e)}}),Object.keys(p.schema).forEach(t=>{s(p.schema[t])||(p.schema[t]=[p.schema[t]]),p.schema[t]=p.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(p,l,{enforceStrictKeyset:!1},!1),p.enforceStrictKeyset)if(a(p.schema)&&Object.keys(p.schema).length>0){if(0!==c(_t(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema))),p.ignoreKeys).length){const t=_t(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema)));throw new TypeError(`${p.msg}: ${p.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${p.msg}: Both ${p.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==c(_t(Object.keys(e),Object.keys(r)),p.ignoreKeys).length){const t=_t(Object.keys(e),Object.keys(r));throw new TypeError(`${p.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==c(_t(Object.keys(r),Object.keys(e)),p.ignoreKeys).length){const t=_t(Object.keys(r),Object.keys(e));throw new TypeError(`${p.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const h=[];Lt(e,(t,n,o)=>{let a=n,c=t;if("array"===o.parentType&&(c=void 0,a=t),s(h)&&h.length&&h.some(t=>o.path.startsWith(t)))return a;if(c&&p.ignoreKeys.some(t=>Ee.isMatch(c,t)))return a;if(p.ignorePaths.some(t=>Ee.isMatch(o.path,t)))return a;const l=!(!u(a)&&!s(a)&&s(o.parent));let y=!1;u(p.schema)&&i.call(p.schema,we.get(o.path))&&(y=!0);let g=!1;if(u(r)&&we.has(r,we.get(o.path))&&(g=!0),p.enforceStrictKeyset&&l&&!y&&!g)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${p.optsVarName}.schema! To stop this error, turn off ${p.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${p.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(p,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(y){const t=je(p.schema[o.path]).map(String).map(t=>t.toLowerCase());if(we.set(p.schema,o.path,t),_e(t,f).length)h.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(yt(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!s(a)||!p.acceptArrays)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"!==yt(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==yt(a)?'"':""} (type: ${yt(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=a.length;e<r;e++)if(!t.includes(yt(a[e]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path}.${e}, the ${Se(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${yt(a[e]).toLowerCase()}, but only the following are allowed by the ${p.optsVarName}.schema: ${t.join(", ")}`)}}else if(g){const e=we.get(r,o.path);if(p.acceptArrays&&s(a)&&!p.acceptArraysIgnore.includes(t)){if(!a.every(e=>yt(e).toLowerCase()===yt(r[t]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${yt(r[t]).toLowerCase()}-type`)}else if(yt(a)!==yt(e))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"===yt(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===yt(a).toLowerCase()?"":'"'} which is not ${yt(e).toLowerCase()} but ${yt(a).toLowerCase()}`)}return a})}(t,e,r)}function Pe(t){return null!=t}function Le(t){return"boolean"==typeof t}function xe(t){return!Pe(t)||Le(t)?[""]:Array.isArray(t)?t.filter((function(t){return Pe(t)&&!Le(t)})).map((function(t){return String(t)})).filter((function(t){return t.length>0})):[String(t)]}function Ce(t,e,r,n){for(var o=!0,i=ht(t),a=0,u=i.length;a<u;a++)if(n){if(i[a].toLowerCase()!==e[r-ht(t).length+a].toLowerCase()){o=!1;break}}else if(i[a]!==e[r-ht(t).length+a]){o=!1;break}return o}function Fe(t,e,r,n){for(var o=!0,i=ht(t),a=0,u=i.length;a<u;a++)if(n){if(i[a].toLowerCase()!==e[r+a].toLowerCase()){o=!1;break}}else if(i[a]!==e[r+a]){o=!1;break}return o}return Ee.isMatch=(t,e,r)=>{const n=Ne(e,r),o=n.test(t);return n.negated?!o:o},function(t,e,r){var n={i:{leftOutsideNot:!1,leftOutside:!1,leftMaybe:!1,searchFor:!1,rightMaybe:!1,rightOutside:!1,rightOutsideNot:!1}},o=Object.assign({},n,e);Te(o,n,{schema:{leftOutsideNot:["string","number","null","undefined"],leftOutside:["string","number","null","undefined"],leftMaybe:["string","number","null","undefined"],searchFor:["string","number"],rightMaybe:["string","number","null","undefined"],rightOutside:["string","number","null","undefined"],rightOutsideNot:["string","number","null","undefined"]},msg:"easy-replace/module.exports():",optsVarName:"options",acceptArrays:!0,acceptArraysIgnore:["i"]});var i=xe(t);o.leftOutsideNot=xe(o.leftOutsideNot),o.leftOutside=xe(o.leftOutside),o.leftMaybe=xe(o.leftMaybe),o.searchFor=String(o.searchFor),o.rightMaybe=xe(o.rightMaybe),o.rightOutside=xe(o.rightOutside),o.rightOutsideNot=xe(o.rightOutsideNot);for(var a,u,c,f,s=xe(r),l=ht(i[0]),p=[],h="",y=function(t,e,r){if("string"!=typeof t||0===t.length||"string"!=typeof e||0===e.length)return[];for(var n,o=[],i=ht(t),a=ht(e),u=0;u<i.length;u++)if(r.i){if(i[u].toLowerCase()===a[0].toLowerCase()){n=!0;for(var c=0;c<a.length;c++)if(!Pe(i[u+c])||!Pe(a[c])||i[u+c].toLowerCase()!==a[c].toLowerCase()){n=!1;break}n&&o.push(u)}}else if(i[u]===a[0]){n=!0;for(var f=0;f<a.length;f++)if(i[u+f]!==a[f]){n=!1;break}n&&o.push(u)}return o}(i[0],o.searchFor,{i:o.i.searchFor}),g=0,d=y.length;g<d;g++){var b=y[g];if(a=b,u=b+ht(o.searchFor).length,o.leftMaybe.length>0)for(var v=0,m=o.leftMaybe.length;v<m;v++){c=!0;for(var _=ht(o.leftMaybe[v]),j=0,w=_.length;j<w;j++)if(o.i.leftMaybe){if(_[j].toLowerCase()!==l[b-_.length+j].toLowerCase()){c=!1;break}}else if(_[j]!==l[b-_.length+j]){c=!1;break}c&&b-_.length<a&&(a=b-_.length)}if(o.rightMaybe.length>0)for(var O=0,$=o.rightMaybe.length;O<$;O++){c=!0;for(var S=ht(o.rightMaybe[O]),A=0,k=S.length;A<k;A++)if(o.i.rightMaybe){if(S[A].toLowerCase()!==l[b+ht(o.searchFor).length+A].toLowerCase()){c=!1;break}}else if(S[A]!==l[b+ht(o.searchFor).length+A]){c=!1;break}c&&u<b+ht(o.searchFor).length+S.length&&(u=b+ht(o.searchFor).length+S.length)}if(""!==o.leftOutside[0]){f=!1;for(var M=0,N=o.leftOutside.length;M<N;M++)(c=Ce(o.leftOutside[M],l,a,o.i.leftOutside))&&(f=!0);if(!f)continue}if(""!==o.rightOutside[0]){f=!1;for(var E=0,T=o.rightOutside.length;E<T;E++)(c=Fe(o.rightOutside[E],l,u,o.i.rightOutside))&&(f=!0);if(!f)continue}if(""!==o.leftOutsideNot[0]){for(var P=0,L=o.leftOutsideNot.length;P<L;P++)if(c=Ce(o.leftOutsideNot[P],l,a,o.i.leftOutsideNot)){a=-1,u=-1;break}if(-1===a)continue}if(""!==o.rightOutsideNot[0]){for(var x=0,C=o.rightOutsideNot.length;x<C;x++)if(c=Fe(o.rightOutsideNot[x],l,u,o.i.rightOutsideNot)){a=-1,u=-1;break}if(-1===a)continue}p.push([a,u])}return p.length>0?(p.forEach((function(t,e){void 0!==p[e+1]&&p[e][1]>p[e+1][0]&&(p[e+1][0]=p[e][1])})),p.forEach((function(t,e){t[0]===t[1]&&p.splice(e,1)})),p.length>0&&0!==p[0][0]&&(h+=l.slice(0,p[0][0]).join("")),p.forEach((function(t,e){h+=s.join(""),void 0!==p[e+1]?h+=l.slice(p[e][1],p[e+1][0]).join(""):h+=l.slice(p[e][1]).join("")})),h):i.join("")}}));
