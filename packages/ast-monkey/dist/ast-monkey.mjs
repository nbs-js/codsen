/**
 * ast-monkey
 * Traverse and edit AST
 * Version: 7.13.6
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-monkey/
 */

import{arrObjOrBoth as e}from"util-array-object-or-both";import{checkTypesMini as n}from"check-types-mini";import{compare as t}from"ast-compare";import{traverse as r}from"ast-monkey-traverse";export{traverse}from"ast-monkey-traverse";const o="7.13.6";function i(e){return null!=e}function s(e){return void 0!==e}function a(e,n){return typeof e==typeof n&&!!t(e,n,{matchStrictly:!0,useWildcards:!0})}function d(e){return e&&"object"==typeof e&&!Array.isArray(e)}function l(e,n){if(!i(e))throw new Error("ast-monkey/main.js/monkey(): [THROW_ID_01] Please provide an input");const t={...n},o={count:0,gatherPath:[],finding:null},d=[];let l=!1,m=!1;i(t.key)&&!s(t.val)&&(l=!0),!i(t.key)&&s(t.val)&&(m=!0);let y=e;return"arrayFirstOnly"===t.mode&&Array.isArray(y)&&y.length>0&&(y=[y[0]]),y=r(y,((e,n,r)=>{let y;if(o.count+=1,o.gatherPath.length=r.depth,o.gatherPath.push(o.count),"get"===t.mode)o.count===t.index&&(s(n)?(o.finding={},o.finding[e]=n):o.finding=e);else if("find"===t.mode||"del"===t.mode){if(!("any"===t.only||"array"===t.only&&void 0===n||"object"===t.only&&void 0!==n)||!(l&&a(e,t.key)||m&&a(n,t.val)||!l&&!m&&a(e,t.key)&&a(n,t.val)))return void 0!==n?n:e;if("find"!==t.mode)return NaN;y={index:o.count,key:e,val:n,path:[...o.gatherPath]},d.push(y)}return"set"===t.mode&&o.count===t.index?t.val:"drop"===t.mode&&o.count===t.index?NaN:"arrayFirstOnly"===t.mode?s(n)&&Array.isArray(n)?[n[0]]:i(e)&&Array.isArray(e)?[e[0]]:void 0!==n?n:e:void 0!==n?n:e})),"get"===t.mode?o.finding:"find"===t.mode?d:y}function m(t,r){if(!i(t))throw new Error("ast-monkey/main.js/find(): [THROW_ID_02] Please provide the input");if(!d(r)||void 0===r.key&&void 0===r.val)throw new Error("ast-monkey/main.js/find(): [THROW_ID_03] Please provide opts.key or opts.val");const o={...r};return n(o,null,{schema:{key:["null","string"],val:"any",only:["undefined","null","string"]},msg:"ast-monkey/get(): [THROW_ID_04*]"}),o.only="string"==typeof o.only&&o.only.length>0?e(o.only,{optsVarName:"opts.only",msg:"ast-monkey/find(): [THROW_ID_05*]"}):"any",l(t,{...o,mode:"find"})}function y(e,n){if(!i(e))throw new Error("ast-monkey/main.js/get(): [THROW_ID_06] Please provide the input");if(!d(n))throw new Error("ast-monkey/main.js/get(): [THROW_ID_07] Please provide the opts");if(!i(n.index))throw new Error("ast-monkey/main.js/get(): [THROW_ID_08] Please provide opts.index");const t={...n};if("string"==typeof t.index&&/^\d*$/.test(t.index))t.index=+t.index;else if(!Number.isInteger(t.index))throw new Error(`ast-monkey/main.js/get(): [THROW_ID_11] opts.index must be a natural number. It was given as: ${t.index} (type ${typeof t.index})`);return l(e,{...t,mode:"get"})}function p(e,t){if(!i(e))throw new Error("ast-monkey/main.js/set(): [THROW_ID_12] Please provide the input");if(!d(t))throw new Error("ast-monkey/main.js/set(): [THROW_ID_13] Please provide the input");if(!i(t.key)&&!s(t.val))throw new Error("ast-monkey/main.js/set(): [THROW_ID_14] Please provide opts.val");if(!i(t.index))throw new Error("ast-monkey/main.js/set(): [THROW_ID_15] Please provide opts.index");const r={...t};if("string"==typeof r.index&&/^\d*$/.test(r.index))r.index=+r.index;else if(!Number.isInteger(r.index))throw new Error(`ast-monkey/main.js/set(): [THROW_ID_17] opts.index must be a natural number. It was given as: ${r.index}`);return i(r.key)&&!s(r.val)&&(r.val=r.key),n(r,null,{schema:{key:[null,"string"],val:"any",index:"number"},msg:"ast-monkey/set(): [THROW_ID_18*]"}),l(e,{...r,mode:"set"})}function u(e,n){if(!i(e))throw new Error("ast-monkey/main.js/drop(): [THROW_ID_19] Please provide the input");if(!d(n))throw new Error("ast-monkey/main.js/drop(): [THROW_ID_20] Please provide the input");if(!i(n.index))throw new Error("ast-monkey/main.js/drop(): [THROW_ID_21] Please provide opts.index");const t={...n};if("string"==typeof t.index&&/^\d*$/.test(t.index))t.index=+t.index;else if(!Number.isInteger(t.index))throw new Error(`ast-monkey/main.js/drop(): [THROW_ID_23] opts.index must be a natural number. It was given as: ${t.index}`);return l(e,{...t,mode:"drop"})}function f(t,r){if(!i(t))throw new Error("ast-monkey/main.js/del(): [THROW_ID_26] Please provide the input");if(!d(r))throw new Error("ast-monkey/main.js/del(): [THROW_ID_27] Please provide the opts object");if(!i(r.key)&&!s(r.val))throw new Error("ast-monkey/main.js/del(): [THROW_ID_28] Please provide opts.key or opts.val");const o={...r};return n(o,null,{schema:{key:[null,"string"],val:"any",only:["undefined","null","string"]},msg:"ast-monkey/drop(): [THROW_ID_29*]"}),o.only="string"==typeof o.only&&o.only.length>0?e(o.only,{msg:"ast-monkey/del(): [THROW_ID_30*]",optsVarName:"opts.only"}):"any",l(t,{...o,mode:"del"})}function h(e){if(!i(e))throw new Error("ast-monkey/main.js/arrayFirstOnly(): [THROW_ID_31] Please provide the input");return l(e,{mode:"arrayFirstOnly"})}export{h as arrayFirstOnly,f as del,u as drop,m as find,y as get,p as set,o as version};
