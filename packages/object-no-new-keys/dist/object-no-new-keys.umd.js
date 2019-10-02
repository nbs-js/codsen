/**
 * object-no-new-keys
 * Check, does a plain object (AST/JSON) has any unique keys, not present in a reference object (another AST/JSON)
 * Version: 2.8.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-no-new-keys
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).objectNoNewKeys=t()}(this,(function(){"use strict";var e="[object Object]";var t,o,n=Function.prototype,r=Object.prototype,c=n.toString,a=r.hasOwnProperty,s=c.call(Object),i=r.toString,u=(t=Object.getPrototypeOf,o=Object,function(e){return t(o(e))});var p=function(t){if(!function(e){return!!e&&"object"==typeof e}(t)||i.call(t)!=e||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(t))return!1;var o=u(t);if(null===o)return!0;var n=a.call(o,"constructor")&&o.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==s};return function(e,t,o){var n=Array.isArray;if(Number.isFinite(o))throw Number.isInteger(o)?new TypeError('object-no-new-keys/objectNoNewKeys(): [THROW_ID_02] Please pass a plain object with a key "mode" set to 1 or 2, not the number '.concat(o," directly! Computer doesn't like that.")):new TypeError("object-no-new-keys/objectNoNewKeys(): [THROW_ID_03] The third argument, options object, is not only not an object, it's not even an integer! It's currently: ".concat(o," and computer doesn't like it very much."));var r=Object.assign({},{mode:2},o);if("string"==typeof r.mode&&(r.mode=parseInt(r.mode,10)),1!==r.mode&&2!==r.mode)throw new TypeError('object-no-new-keys/objectNoNewKeys(): [THROW_ID_01] opts.mode was customised to be a wrong thing, "'.concat(r.mode,'" while it should be either natural number 1 or 2.'));return function e(t,o,r,c){var a;if(void 0===c&&(c={path:"",res:[]}),p(t))p(o)?Object.keys(t).forEach((function(s){Object.prototype.hasOwnProperty.call(o,s)?(p(t[s])||n(t[s]))&&(a={path:c.path.length>0?"".concat(c.path,".").concat(s):s,res:c.res},c.res=e(t[s],o[s],r,a).res):(a=c.path.length>0?"".concat(c.path,".").concat(s):s,c.res.push(a))})):c.res=c.res.concat(Object.keys(t).map((function(e){return c.path.length>0?"".concat(c.path,".").concat(e):e})));else if(n(t))if(n(o))for(var s=0,i=t.length;s<i;s++)a={path:"".concat(c.path.length>0?c.path:"","[").concat(s,"]"),res:c.res},2===r.mode?c.res=e(t[s],o[0],r,a).res:c.res=e(t[s],o[s],r,a).res;else c.res=c.res.concat(t.map((function(e,t){return"".concat(c.path.length>0?c.path:"","[").concat(t,"]")})));return c}(e,t,r).res}}));
