!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.objectBooleanCombinations=r()}(this,function(){"use strict";var At="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e="__lodash_hash_undefined__",u=9007199254740991,n="[object Function]",o="[object GeneratorFunction]",i=/^\[object .+?Constructor\]$/,t="object"==typeof At&&At&&At.Object===Object&&At,r="object"==typeof self&&self&&self.Object===Object&&self,a=t||r||Function("return this")();function y(t,r){return!!(t?t.length:0)&&-1<function(t,r,n){if(r!=r)return function(t,r,n,e){var o=t.length,u=n+(e?1:-1);for(;e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,c,n);var e=n-1,o=t.length;for(;++e<o;)if(t[e]===r)return e;return-1}(t,r,0)}function d(t,r,n){for(var e=-1,o=t?t.length:0;++e<o;)if(n(r,t[e]))return!0;return!1}function g(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}function c(t){return t!=t}function b(r){return function(t){return r(t)}}function j(t,r){return t.has(r)}var f,s,l,h=Array.prototype,p=Function.prototype,_=Object.prototype,v=a["__core-js_shared__"],O=(f=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+f:"",w=p.toString,m=_.hasOwnProperty,A=_.toString,x=RegExp("^"+w.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=h.splice,E=Math.max,k=Math.min,$=H(a,"Map"),P=H(Object,"create");function F(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function M(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function R(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function T(t){var r=-1,n=t?t.length:0;for(this.__data__=new R;++r<n;)this.add(t[r])}function I(t,r){for(var n,e,o=t.length;o--;)if((n=t[o][0])===(e=r)||n!=n&&e!=e)return o;return-1}function D(t){return!(!G(t)||(r=t,O&&O in r))&&(C(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?x:i).test(function(t){if(null!=t){try{return w.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r}function W(t){return(o=r=t)&&"object"==typeof o&&(null!=(n=r)&&("number"==typeof(e=n.length)&&-1<e&&e%1==0&&e<=u)&&!C(n))?t:[];var r,n,e,o}function B(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function H(t,r){var n,e,o=(e=r,null==(n=t)?void 0:n[e]);return D(o)?o:void 0}function C(t){var r=G(t)?A.call(t):"";return r==n||r==o}function G(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}F.prototype.clear=function(){this.__data__=P?P(null):{}},F.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},F.prototype.get=function(t){var r=this.__data__;if(P){var n=r[t];return n===e?void 0:n}return m.call(r,t)?r[t]:void 0},F.prototype.has=function(t){var r=this.__data__;return P?void 0!==r[t]:m.call(r,t)},F.prototype.set=function(t,r){return this.__data__[t]=P&&void 0===r?e:r,this},M.prototype.clear=function(){this.__data__=[]},M.prototype.delete=function(t){var r=this.__data__,n=I(r,t);return!(n<0||(n==r.length-1?r.pop():S.call(r,n,1),0))},M.prototype.get=function(t){var r=this.__data__,n=I(r,t);return n<0?void 0:r[n][1]},M.prototype.has=function(t){return-1<I(this.__data__,t)},M.prototype.set=function(t,r){var n=this.__data__,e=I(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},R.prototype.clear=function(){this.__data__={hash:new F,map:new($||M),string:new F}},R.prototype.delete=function(t){return B(this,t).delete(t)},R.prototype.get=function(t){return B(this,t).get(t)},R.prototype.has=function(t){return B(this,t).has(t)},R.prototype.set=function(t,r){return B(this,t).set(t,r),this},T.prototype.add=T.prototype.push=function(t){return this.__data__.set(t,e),this},T.prototype.has=function(t){return this.__data__.has(t)};var V=(s=function(t){var r=g(t,W);return r.length&&r[0]===t[0]?function(t,r,n){for(var e=n?d:y,o=t[0].length,u=t.length,i=u,a=Array(u),c=1/0,f=[];i--;){var s=t[i];i&&r&&(s=g(s,b(r))),c=k(s.length,c),a[i]=!n&&(r||120<=o&&120<=s.length)?new T(i&&s):void 0}s=t[0];var l=-1,h=a[0];t:for(;++l<o&&f.length<c;){var p=s[l],_=r?r(p):p;if(p=n||0!==p?p:0,!(h?j(h,_):e(f,_,n))){for(i=u;--i;){var v=a[i];if(!(v?j(v,_):e(t[i],_,n)))continue t}h&&h.push(_),f.push(p)}}return f}(r):[]},l=E(void 0===l?s.length-1:l,0),function(){for(var t=arguments,r=-1,n=E(t.length-l,0),e=Array(n);++r<n;)e[r]=t[l+r];r=-1;for(var o=Array(l+1);++r<l;)o[r]=t[r];return o[l]=e,function(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}(s,this,o)});function U(t,r,n){if(r!=r)return function(t,r,n,e){for(var o=t.length,u=n+(e?1:-1);e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,z,n);for(var e=n-1,o=t.length;++e<o;)if(t[e]===r)return e;return-1}function q(t,r,n,e){for(var o=n-1,u=t.length;++o<u;)if(e(t[o],r))return o;return-1}function z(t){return t!=t}var J,K,L=Array.prototype.splice,N=Math.max;function Q(t,r,n,e){var o,u=e?q:U,i=-1,a=r.length,c=t;for(t===r&&(r=function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(r)),n&&(c=function(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}(t,(o=n,function(t){return o(t)})));++i<a;)for(var f=0,s=r[i],l=n?n(s):s;-1<(f=u(c,l,f,e));)c!==t&&L.call(c,f,1),L.call(t,f,1);return t}var X=(J=function(t,r){return t&&t.length&&r&&r.length?Q(t,r):t},K=N(void 0===K?J.length-1:K,0),function(){for(var t=arguments,r=-1,n=N(t.length-K,0),e=Array(n);++r<n;)e[r]=t[K+r];r=-1;for(var o=Array(K+1);++r<K;)o[r]=t[r];return o[K]=e,function(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}(J,this,o)});var Y,Z,tt=Function.prototype,rt=Object.prototype,nt=tt.toString,et=rt.hasOwnProperty,ot=nt.call(Object),ut=rt.toString,it=(Y=Object.getPrototypeOf,Z=Object,function(t){return Y(Z(t))});var at,ct=function(t){if(!(r=t)||"object"!=typeof r||"[object Object]"!=ut.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r,n=it(t);if(null===n)return!0;var e=et.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&nt.call(e)==ot},ft=(function(t,r){var e="__lodash_hash_undefined__",n=9007199254740991,w="[object Arguments]",m="[object Function]",A="[object GeneratorFunction]",o="[object Map]",x="[object Object]",u="[object Promise]",i="[object Set]",a="[object WeakMap]",c="[object DataView]",f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l="object"==typeof At&&At&&At.Object===Object&&At,h="object"==typeof self&&self&&self.Object===Object&&self,p=l||h||Function("return this")(),_=r&&!r.nodeType&&r,v=_&&t&&!t.nodeType&&t,y=v&&v.exports===_;function S(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function d(r,n){return function(t){return r(n(t))}}var g,b=Array.prototype,j=Function.prototype,O=Object.prototype,E=p["__core-js_shared__"],k=(g=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+g:"",$=j.toString,P=O.hasOwnProperty,F=O.toString,M=RegExp("^"+$.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=y?p.Buffer:void 0,T=p.Symbol,I=(p.Uint8Array,d(Object.getPrototypeOf,Object)),D=Object.create,W=O.propertyIsEnumerable,B=b.splice,H=Object.getOwnPropertySymbols,C=R?R.isBuffer:void 0,G=d(Object.keys,Object),V=lt(p,"DataView"),U=lt(p,"Map"),q=lt(p,"Promise"),z=lt(p,"Set"),J=lt(p,"WeakMap"),K=lt(Object,"create"),L=yt(V),N=yt(U),Q=yt(q),X=yt(z),Y=yt(J),Z=T?T.prototype:void 0;Z&&Z.valueOf;function tt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function rt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function nt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function et(t){this.__data__=new rt(t)}function ot(t,r){var n,e,o,u=gt(t)||(o=e=n=t)&&"object"==typeof o&&bt(e)&&P.call(n,"callee")&&(!W.call(n,"callee")||F.call(n)==w)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(t.length,String):[],i=u.length,a=!!i;for(var c in t)!r&&!P.call(t,c)||a&&("length"==c||_t(c,i))||u.push(c);return u}function ut(t,r,n){var e=t[r];P.call(t,r)&&dt(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function it(t,r){for(var n=t.length;n--;)if(dt(t[n][0],r))return n;return-1}function at(n,e,o,u,t,r,i){var a;if(u&&(a=r?u(n,t,r,i):u(n)),void 0!==a)return a;if(!wt(n))return n;var c,f,s,l,h,p,_=gt(n);if(_){if(a=function(t){var r=t.length,n=t.constructor(r);r&&"string"==typeof t[0]&&P.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(n),!e)return function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(n,a)}else{var v=pt(n),y=v==m||v==A;if(jt(n))return function(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(n,e);if(v!=x&&v!=w&&(!y||r))return r?n:{};if(S(n))return r?n:{};if(a="function"!=typeof(h=y?{}:n).constructor||vt(h)?{}:wt(p=I(h))?D(p):{},!e)return l=c=n,f=(s=a)&&ft(l,mt(l),s),ft(c,ht(c),f)}i||(i=new et);var d,g,b,j=i.get(n);if(j)return j;if(i.set(n,a),!_)var O=o?(g=ht,b=mt(d=n),gt(d)?b:function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}(b,g(d))):mt(n);return function(t,r){for(var n=-1,e=t?t.length:0;++n<e&&!1!==r(t[n],n,t););}(O||n,function(t,r){O&&(t=n[r=t]),ut(a,r,at(t,e,o,u,r,n,i))}),a}function ct(t){return!(!wt(t)||(r=t,k&&k in r))&&(Ot(t)||S(t)?M:f).test(yt(t));var r}function ft(t,r,n,e){n||(n={});for(var o=-1,u=r.length;++o<u;){var i=r[o],a=e?e(n[i],t[i],i,n,t):void 0;ut(n,i,void 0===a?t[i]:a)}return n}function st(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function lt(t,r){var n,e,o=(e=r,null==(n=t)?void 0:n[e]);return ct(o)?o:void 0}tt.prototype.clear=function(){this.__data__=K?K(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var r=this.__data__;if(K){var n=r[t];return n===e?void 0:n}return P.call(r,t)?r[t]:void 0},tt.prototype.has=function(t){var r=this.__data__;return K?void 0!==r[t]:P.call(r,t)},tt.prototype.set=function(t,r){return this.__data__[t]=K&&void 0===r?e:r,this},rt.prototype.clear=function(){this.__data__=[]},rt.prototype.delete=function(t){var r=this.__data__,n=it(r,t);return!(n<0||(n==r.length-1?r.pop():B.call(r,n,1),0))},rt.prototype.get=function(t){var r=this.__data__,n=it(r,t);return n<0?void 0:r[n][1]},rt.prototype.has=function(t){return-1<it(this.__data__,t)},rt.prototype.set=function(t,r){var n=this.__data__,e=it(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},nt.prototype.clear=function(){this.__data__={hash:new tt,map:new(U||rt),string:new tt}},nt.prototype.delete=function(t){return st(this,t).delete(t)},nt.prototype.get=function(t){return st(this,t).get(t)},nt.prototype.has=function(t){return st(this,t).has(t)},nt.prototype.set=function(t,r){return st(this,t).set(t,r),this},et.prototype.clear=function(){this.__data__=new rt},et.prototype.delete=function(t){return this.__data__.delete(t)},et.prototype.get=function(t){return this.__data__.get(t)},et.prototype.has=function(t){return this.__data__.has(t)},et.prototype.set=function(t,r){var n=this.__data__;if(n instanceof rt){var e=n.__data__;if(!U||e.length<199)return e.push([t,r]),this;n=this.__data__=new nt(e)}return n.set(t,r),this};var ht=H?d(H,Object):function(){return[]},pt=function(t){return F.call(t)};function _t(t,r){return!!(r=null==r?n:r)&&("number"==typeof t||s.test(t))&&-1<t&&t%1==0&&t<r}function vt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||O)}function yt(t){if(null!=t){try{return $.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function dt(t,r){return t===r||t!=t&&r!=r}(V&&pt(new V(new ArrayBuffer(1)))!=c||U&&pt(new U)!=o||q&&pt(q.resolve())!=u||z&&pt(new z)!=i||J&&pt(new J)!=a)&&(pt=function(t){var r=F.call(t),n=r==x?t.constructor:void 0,e=n?yt(n):void 0;if(e)switch(e){case L:return c;case N:return o;case Q:return u;case X:return i;case Y:return a}return r});var gt=Array.isArray;function bt(t){return null!=t&&("number"==typeof(r=t.length)&&-1<r&&r%1==0&&r<=n)&&!Ot(t);var r}var jt=C||function(){return!1};function Ot(t){var r=wt(t)?F.call(t):"";return r==m||r==A}function wt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function mt(t){return bt(t)?ot(t):function(t){if(!vt(t))return G(t);var r=[];for(var n in Object(t))P.call(t,n)&&"constructor"!=n&&r.push(n);return r}(t)}t.exports=function(t){return at(t,!0,!0)}}(at={exports:{}},at.exports),at.exports);return function(t,r){function n(t){return null!=t}if(!n(t))throw new Error("[THROW_ID_01] missing input object");if(!ct(t))throw new Error("[THROW_ID_02] the first input object must be a true object");if(n(r)&&!ct(r))throw new Error("[THROW_ID_03] the second override object must be a true object");var e,o=ft(t),u=ft(r),i=Object.keys(o),a=[];n(u)&&ct(u)&&Object.keys(u).forEach(function(t){if(0!==u[t]&&1!==u[t]&&!0!==u[t]&&!1!==u[t])throw new Error("[THROW_ID_04] override object's values must contain only true/valse or 0/1")});var c=!1;n(u)&&0!==Object.keys(u).length&&(c=!0),c&&(e=V(Object.keys(u),Object.keys(o))).forEach(function(t){return X(i,t)});var f=function(t){for(var r=[],n=0;n<1<<t;n++){for(var e=[],o=0;o<t;o++)e.push(n&1<<o?1:0);r.push(e)}return r}(Object.keys(i).length),s={};return f.forEach(function(t,n){s={},i.forEach(function(t,r){s[t]=1===f[n][r]?1:0}),a.push(s)}),c&&a.forEach(function(r){return e.forEach(function(t){r[t]=u[t]})}),a}});
