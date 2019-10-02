/**
 * string-apostrophes
 * Comprehensive, HTML-entities-aware tool to typographically-correct the apostrophes and single/double quotes
 * Version: 1.2.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-apostrophes
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).stringApostrophes={})}(this,(function(e){"use strict";var t=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},r=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)};const n=Array.isArray;function o(e,r){if(!n(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},r);let s,u;if(o.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(s=t,u=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${u} elements!`);if(!e.every((e,r)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(s=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const i=e.length*e.length;let a=0;return Array.from(e).sort((e,t)=>(o.progressFn&&(a++,o.progressFn(Math.floor(100*a/i))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var u=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,u="[object Arguments]",i="[object Boolean]",a="[object Date]",c="[object Function]",l="[object GeneratorFunction]",f="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",_="[object Symbol]",b="[object ArrayBuffer]",w="[object DataView]",v="[object Float32Array]",m="[object Float64Array]",q="[object Int8Array]",j="[object Int16Array]",O="[object Int32Array]",T="[object Uint8Array]",$="[object Uint8ClampedArray]",A="[object Uint16Array]",C="[object Uint32Array]",E=/\w*$/,I=/^\[object .+?Constructor\]$/,S=/^(?:0|[1-9]\d*)$/,L={};L[u]=L["[object Array]"]=L[b]=L[w]=L[i]=L[a]=L[v]=L[m]=L[q]=L[j]=L[O]=L[f]=L[p]=L[h]=L[y]=L[g]=L[d]=L[_]=L[T]=L[$]=L[A]=L[C]=!0,L["[object Error]"]=L[c]=L["[object WeakMap]"]=!1;var R="object"==typeof s&&s&&s.Object===Object&&s,F="object"==typeof self&&self&&self.Object===Object&&self,x=R||F||Function("return this")(),Z=t&&!t.nodeType&&t,W=Z&&e&&!e.nodeType&&e,N=W&&W.exports===Z;function D(e,t){return e.set(t[0],t[1]),e}function H(e,t){return e.add(t),e}function M(e,t,r,n){var o=-1,s=e?e.length:0;for(n&&s&&(r=e[++o]);++o<s;)r=t(r,e[o],o,e);return r}function P(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function J(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function k(e,t){return function(r){return e(t(r))}}function B(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var U,z=Array.prototype,V=Function.prototype,G=Object.prototype,K=x["__core-js_shared__"],Q=(U=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",X=V.toString,Y=G.hasOwnProperty,ee=G.toString,te=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=N?x.Buffer:void 0,ne=x.Symbol,oe=x.Uint8Array,se=k(Object.getPrototypeOf,Object),ue=Object.create,ie=G.propertyIsEnumerable,ae=z.splice,ce=Object.getOwnPropertySymbols,le=re?re.isBuffer:void 0,fe=k(Object.keys,Object),pe=We(x,"DataView"),he=We(x,"Map"),ye=We(x,"Promise"),ge=We(x,"Set"),de=We(x,"WeakMap"),_e=We(Object,"create"),be=Pe(pe),we=Pe(he),ve=Pe(ye),me=Pe(ge),qe=Pe(de),je=ne?ne.prototype:void 0,Oe=je?je.valueOf:void 0;function Te(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ce(e){this.__data__=new $e(e)}function Ee(e,t){var r=ke(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Be(e)}(e)&&Y.call(e,"callee")&&(!ie.call(e,"callee")||ee.call(e)==u)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var s in e)!t&&!Y.call(e,s)||o&&("length"==s||He(s,n))||r.push(s);return r}function Ie(e,t,r){var n=e[t];Y.call(e,t)&&Je(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Se(e,t){for(var r=e.length;r--;)if(Je(e[r][0],t))return r;return-1}function Le(e,t,r,n,o,s,I){var S;if(n&&(S=s?n(e,o,s,I):n(e)),void 0!==S)return S;if(!Ve(e))return e;var R=ke(e);if(R){if(S=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Y.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,S)}else{var F=De(e),x=F==c||F==l;if(Ue(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(F==h||F==u||x&&!s){if(P(e))return s?e:{};if(S=function(e){return"function"!=typeof e.constructor||Me(e)?{}:(t=se(e),Ve(t)?ue(t):{});var t}(x?{}:e),!t)return function(e,t){return xe(e,Ne(e),t)}(e,function(e,t){return e&&xe(t,Ge(t),e)}(S,e))}else{if(!L[F])return s?e:{};S=function(e,t,r,n){var o=e.constructor;switch(t){case b:return Fe(e);case i:case a:return new o(+e);case w:return function(e,t){var r=t?Fe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case v:case m:case q:case j:case O:case T:case $:case A:case C:return function(e,t){var r=t?Fe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case f:return function(e,t,r){return M(t?r(J(e),!0):J(e),D,new e.constructor)}(e,n,r);case p:case d:return new o(e);case y:return(c=new(u=e).constructor(u.source,E.exec(u))).lastIndex=u.lastIndex,c;case g:return function(e,t,r){return M(t?r(B(e),!0):B(e),H,new e.constructor)}(e,n,r);case _:return s=e,Oe?Object(Oe.call(s)):{}}var s;var u,c}(e,F,Le,t)}}I||(I=new Ce);var Z=I.get(e);if(Z)return Z;if(I.set(e,S),!R)var W=r?function(e){return function(e,t,r){var n=t(e);return ke(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ge,Ne)}(e):Ge(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(W||e,(function(o,s){W&&(o=e[s=o]),Ie(S,s,Le(o,t,r,n,s,e,I))})),S}function Re(e){return!(!Ve(e)||(t=e,Q&&Q in t))&&(ze(e)||P(e)?te:I).test(Pe(e));var t}function Fe(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function xe(e,t,r,n){r||(r={});for(var o=-1,s=t.length;++o<s;){var u=t[o],i=n?n(r[u],e[u],u,r,e):void 0;Ie(r,u,void 0===i?e[u]:i)}return r}function Ze(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function We(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Re(r)?r:void 0}Te.prototype.clear=function(){this.__data__=_e?_e(null):{}},Te.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Te.prototype.get=function(e){var t=this.__data__;if(_e){var r=t[e];return r===n?void 0:r}return Y.call(t,e)?t[e]:void 0},Te.prototype.has=function(e){var t=this.__data__;return _e?void 0!==t[e]:Y.call(t,e)},Te.prototype.set=function(e,t){return this.__data__[e]=_e&&void 0===t?n:t,this},$e.prototype.clear=function(){this.__data__=[]},$e.prototype.delete=function(e){var t=this.__data__,r=Se(t,e);return!(r<0)&&(r==t.length-1?t.pop():ae.call(t,r,1),!0)},$e.prototype.get=function(e){var t=this.__data__,r=Se(t,e);return r<0?void 0:t[r][1]},$e.prototype.has=function(e){return Se(this.__data__,e)>-1},$e.prototype.set=function(e,t){var r=this.__data__,n=Se(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ae.prototype.clear=function(){this.__data__={hash:new Te,map:new(he||$e),string:new Te}},Ae.prototype.delete=function(e){return Ze(this,e).delete(e)},Ae.prototype.get=function(e){return Ze(this,e).get(e)},Ae.prototype.has=function(e){return Ze(this,e).has(e)},Ae.prototype.set=function(e,t){return Ze(this,e).set(e,t),this},Ce.prototype.clear=function(){this.__data__=new $e},Ce.prototype.delete=function(e){return this.__data__.delete(e)},Ce.prototype.get=function(e){return this.__data__.get(e)},Ce.prototype.has=function(e){return this.__data__.has(e)},Ce.prototype.set=function(e,t){var n=this.__data__;if(n instanceof $e){var o=n.__data__;if(!he||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Ae(o)}return n.set(e,t),this};var Ne=ce?k(ce,Object):function(){return[]},De=function(e){return ee.call(e)};function He(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||S.test(e))&&e>-1&&e%1==0&&e<t}function Me(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||G)}function Pe(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Je(e,t){return e===t||e!=e&&t!=t}(pe&&De(new pe(new ArrayBuffer(1)))!=w||he&&De(new he)!=f||ye&&"[object Promise]"!=De(ye.resolve())||ge&&De(new ge)!=g||de&&"[object WeakMap]"!=De(new de))&&(De=function(e){var t=ee.call(e),r=t==h?e.constructor:void 0,n=r?Pe(r):void 0;if(n)switch(n){case be:return w;case we:return f;case ve:return"[object Promise]";case me:return g;case qe:return"[object WeakMap]"}return t});var ke=Array.isArray;function Be(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!ze(e)}var Ue=le||function(){return!1};function ze(e){var t=Ve(e)?ee.call(e):"";return t==c||t==l}function Ve(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ge(e){return Be(e)?Ee(e):function(e){if(!Me(e))return fe(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Le(e,!0,!0)}})),i="[object Object]";var a,c,l=Function.prototype,f=Object.prototype,p=l.toString,h=f.hasOwnProperty,y=p.call(Object),g=f.toString,d=(a=Object.getPrototypeOf,c=Object,function(e){return a(c(e))});var _=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||g.call(e)!=i||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=d(e);if(null===t)return!0;var r=h.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&p.call(r)==y};const b=Array.isArray;function w(e,n,s){let i=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===n)return e;if(!b(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(s&&"function"!=typeof s)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof s}, equal to: ${JSON.stringify(s,null,4)}`);b(n)&&(t(n[0],{includeZero:!0})||r(n[0],{includeZero:!0}))&&(t(n[1],{includeZero:!0})||r(n[1],{includeZero:!0}))&&(n=[n]);const c=n.length;let l=0;n.forEach((e,o)=>{if(s&&(i=Math.floor(l/c*10))!==a&&(a=i,s(i)),!b(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${o}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!t(e[0],{includeZero:!0})){if(!r(e[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${o}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);n[o][0]=Number.parseInt(n[o][0],10)}if(!t(e[1],{includeZero:!0})){if(!r(e[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${o}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);n[o][1]=Number.parseInt(n[o][1],10)}l++});const f=function(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let s;if(t){if(!_(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if((s=Object.assign({},n,t)).progressFn&&_(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof s.progressFn}", equal to ${JSON.stringify(s.progressFn,null,4)}`);if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(r(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!r(s.mergeType)||"2"!==s.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof s.mergeType}", equal to ${JSON.stringify(s.mergeType,null,4)}`);s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof s.joinRangesThatTouchEdges}", equal to ${JSON.stringify(s.joinRangesThatTouchEdges,null,4)}`)}else s=u(n);const i=u(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let a,c,l;const f=(a=s.progressFn?o(i,{progressFn:e=>{(l=Math.floor(e/5))!==c&&(c=l,s.progressFn(l))}}):o(i)).length-1;for(let e=f;e>0;e--)s.progressFn&&(l=Math.floor(78*(1-e/f))+21)!==c&&l>c&&(c=l,s.progressFn(l)),(a[e][0]<=a[e-1][0]||!s.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||s.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:void 0!==a[e-1][2]?2===s.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a}(n,{progressFn:e=>{s&&(i=10+Math.floor(e/10))!==a&&(a=i,s(i))}}),p=f.length;if(p>0){const t=e.slice(f[p-1][1]);e=f.reduce((t,r,n,o)=>{s&&(i=20+Math.floor(n/p*80))!==a&&(a=i,s(i));const u=0===n?0:o[n-1][1],c=o[n][0];return t+e.slice(u,c)+(function(e){return null!=e}(o[n][2])?o[n][2]:"")},""),e+=t}return e}function v(e,t){var r=t.from,n=t.to,o=t.value,s=t.convertEntities,u=void 0===s||s,i=t.convertApostrophes,a=void 0===i||i,c=t.offsetBy;if(!Number.isInteger(n)){if(!Number.isInteger(r))throw new Error('string-apostrophes: [THROW_ID_01] options objects keys\' "to" and "from" values are not integers!');n=r+1}var l=[],f="‘",p="’",h="“",y="”",g="′",d="″",_=[".",",",";","!","?"];function b(e){return"string"==typeof e&&e.charCodeAt(0)>=48&&e.charCodeAt(0)<=57}function w(e){return"string"==typeof e&&1===e.length&&e.toUpperCase()!==e.toLowerCase()}return["'",f,p,g].includes(o)||n===r+1&&["'",f,p,g].includes(e[r])?e[r-1]&&e[n]&&b(e[r-1])&&!w(e[n])?a&&e.slice(r,n)!==(u?"&prime;":g)&&o!==(u?"&prime;":g)?l.push([r,n,u?"&prime;":g]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[n]&&e[n+1]&&"n"===e[n]&&e.slice(r,n)===e.slice(n+1,n+1+(n-r))?a&&e.slice(r,n+2)!==(u?"&rsquo;n&rsquo;":"".concat(p,"n").concat(p))&&o!==(u?"&rsquo;n&rsquo;":"".concat(p,"n").concat(p))?(l.push([r,n+2,u?"&rsquo;n&rsquo;":"".concat(p,"n").concat(p)]),"function"==typeof c&&c(2)):a||"'n'"===e.slice(r,n+2)||"'n'"===o||(l.push([r,n+2,"'n'"]),"function"==typeof c&&c(2)):e[n]&&"t"===e[n].toLowerCase()&&(!e[n+1]||0===e[n+1].trim().length||"i"===e[n+1].toLowerCase())||e[n]&&e[n+2]&&"t"===e[n].toLowerCase()&&"w"===e[n+1].toLowerCase()&&("a"===e[n+2].toLowerCase()||"e"===e[n+2].toLowerCase()||"i"===e[n+2].toLowerCase()||"o"===e[n+2].toLowerCase())||e[n]&&e[n+1]&&"e"===e[n].toLowerCase()&&"m"===e[n+1].toLowerCase()||e[n]&&e[n+4]&&"c"===e[n].toLowerCase()&&"a"===e[n+1].toLowerCase()&&"u"===e[n+2].toLowerCase()&&"s"===e[n+3].toLowerCase()&&"e"===e[n+4].toLowerCase()||e[n]&&b(e[n])?a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[r-1]&&e[n]&&_.includes(e[r-1])?0===e[n].trim().length?a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):34===e[n].charCodeAt(0)&&e[n+1]&&0===e[n+1].trim().length&&(a&&e.slice(r,n+1)!==(u?"&rsquo;&rdquo;":"".concat(p).concat(y))&&o!==(u?"&rsquo;&rdquo;":"".concat(p).concat(y))?(l.push([r,n+1,"".concat(u?"&rsquo;&rdquo;":"".concat(p).concat(y))]),"function"==typeof c&&c(1)):a||"'\""===e.slice(r,n+1)||"'\""===o||(l.push([r,n+1,"'\""]),"function"==typeof c&&c(1))):0===r&&e.slice(n).trim().length?a&&e.slice(r,n)!==(u?"&lsquo;":f)&&o!==(u?"&lsquo;":f)?l.push([r,n,u?"&lsquo;":f]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):!e[n]&&e.slice(0,r).trim().length?a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[r-1]&&e[n]&&(w(e[r-1])||b(e[r-1]))&&(w(e[n])||b(e[n]))?a?(e[n]&&e[r-5]&&"h"===e[r-5].toLowerCase()&&"a"===e[r-4].toLowerCase()&&"w"===e[r-3].toLowerCase()&&"a"===e[r-2].toLowerCase()&&"i"===e[r-1].toLowerCase()&&"i"===e[n].toLowerCase()||e[r-1]&&"o"===e[r-1].toLowerCase()&&e[n+2]&&"a"===e[n].toLowerCase()&&"h"===e[n+1].toLowerCase()&&"u"===e[n+2].toLowerCase())&&e.slice(r,n)!==(u?"&lsquo;":f)&&o!==(u?"&lsquo;":f)?l.push([r,n,u?"&lsquo;":f]):e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)&&l.push([r,n,u?"&rsquo;":p]):"'"!==e.slice(r,n)&&"'"!==o&&l.push([r,n,"'"]):e[n]&&(w(e[n])||b(e[n]))?a&&e.slice(r,n)!==(u?"&lsquo;":f)&&o!==(u?"&lsquo;":f)?l.push([r,n,u?"&lsquo;":f]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):w(e[r-1])||b(e[r-1])?a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[r-1]&&0===e[r-1].trim().length?a&&e.slice(r,n)!==(u?"&lsquo;":f)&&o!==(u?"&lsquo;":f)?l.push([r,n,u?"&lsquo;":f]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[n]&&0===e[n].trim().length&&(a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"])):(['"',h,y,d].includes(o)||n===r+1&&['"',h,y,d].includes(e[r]))&&(e[r-1]&&b(e[r-1])&&e[n]&&"'"!==e[n]&&'"'!==e[n]&&e[n]!==p&&e[n]!==y&&e[n]!==f&&e[n]!==h?a&&e.slice(r,n)!==(u?"&Prime;":d)&&o!==(u?"&Prime;":d)?l.push([r,n,u?"&Prime;":d]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[r-1]&&e[n]&&_.includes(e[r-1])?0===e[n].trim().length?a&&e.slice(r,n)!==(u?"&rdquo;":y)&&o!==(u?"&rdquo;":y)?l.push([r,n,u?"&rdquo;":y]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):39===e[n].charCodeAt(0)&&e[n+1]&&0===e[n+1].trim().length&&(a&&e.slice(r,n+1)!==(u?"&rdquo;&rsquo;":"".concat(y).concat(p))&&o!==(u?"&rdquo;&rsquo;":"".concat(y).concat(p))?(l.push([r,n+1,u?"&rdquo;&rsquo;":"".concat(y).concat(p)]),"function"==typeof c&&c(1)):a||"\"'"===e.slice(r,n+1)||"\"'"===o||(l.push([r,n+1,"\"'"]),"function"==typeof c&&c(1))):0===r&&e[n]&&e.slice(n).trim().length?a&&e.slice(r,n)!==(u?"&ldquo;":h)&&o!==(u?"&ldquo;":h)?l.push([r,n,u?"&ldquo;":h]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):!e[n]&&e.slice(0,r).trim().length?a&&e.slice(r,n)!==(u?"&rdquo;":y)&&o!==(u?"&rdquo;":y)?l.push([r,n,u?"&rdquo;":y]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[n]&&(w(e[n])||b(e[n]))?a&&e.slice(r,n)!==(u?"&ldquo;":h)&&o!==(u?"&ldquo;":h)?l.push([r,n,u?"&ldquo;":h]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[r-1]&&(w(e[r-1])||b(e[r-1]))?a&&e.slice(r,n)!==(u?"&rdquo;":y)&&o!==(u?"&rdquo;":y)?l.push([r,n,u?"&rdquo;":y]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[r-1]&&0===e[r-1].trim().length?a&&e.slice(r,n)!==(u?"&ldquo;":h)&&o!==(u?"&ldquo;":h)?l.push([r,n,u?"&ldquo;":h]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[n]&&0===e[n].trim().length&&(a&&e.slice(r,n)!==(u?"&rdquo;":y)&&o!==(u?"&rdquo;":y)?l.push([r,n,u?"&rdquo;":y]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']))),l}e.convertAll=function(e,t){for(var r=[],n=Object.assign({convertApostrophes:!0,convertEntities:!1},t),o=function(t,o){n.from=t,n.offsetBy=function(e){t+=e};var u=v(e,n);Array.isArray(u)&&u.length&&(r=r.concat(u)),s=t},s=0,u=e.length;s<u;s++)o(s);return{result:w(e,r),ranges:r}},e.convertOne=v,Object.defineProperty(e,"__esModule",{value:!0})}));
