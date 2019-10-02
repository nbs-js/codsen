/**
 * string-uglify
 * Uglify - generate unique short names for sets of strings
 * Version: 1.2.18
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-uglify
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).stringUglify={})}(this,(function(e){"use strict";var t=Array.isArray;function i(e,t){return e.codePointAt(t)}function r(e){var r="abcdefghijklmnopqrstuvwxyz",n="abcdefghijklmnopqrstuvwxyz0123456789",s={a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1},c={a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1},l={a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1},u=[];if(!t(e)||!e.length)return e;for(var f=0,o=e.length;f<o;f++)if(e.indexOf(e[f])<f)u.push(u[e.indexOf(e[f])]);else{var a=".#".includes(e[f][0])?e[f][0]:"",h=Array.from(e[f]).reduce((function(e,t){return e+i(t)}),0);if(".#".includes(e[f][0])&&e[f].length<4||!".#".includes(e[f][0])&&e[f].length<3){var d=e[f];if(!u.includes(d)){u.push(d),d.startsWith(".")&&2===d.length&&!s[d.slice(1)]?s[d.slice(1)]=!0:d.startsWith("#")&&2===d.length&&!c[d.slice(1)]?c[d.slice(1)]=!0:d.startsWith(".")||d.startsWith("#")||1!==d.length||l[d]||(l[d]=!0);continue}}var g="".concat(a).concat(r[h%r.length]).concat(n[h%n.length]);if(u.includes(g)){for(var p=g,y=0,v=Array.from(e[f]).reduce((function(e,t){return e<200?e+i(t):(e+i(t))%n.length}),0),m=Array.from(e[f]).map((function(e){return i(e)})).reduce((function(e,t){var i=e+t;do{i=String(i).split("").reduce((function(e,t){return e+Number.parseInt(t)}),0)}while(i>=10);return i}),0);u.includes(p);)p+=n[v*m*++y%n.length];g=p}u.push(g),g.startsWith(".")&&2===g.length&&!s[g.slice(1)]?s[g.slice(1)]=!0:g.startsWith("#")&&2===g.length&&!c[g.slice(1)]?c[g.slice(1)]=!0:g.startsWith(".")||g.startsWith("#")||1!==g.length||l[g]||(l[g]=!0)}for(var W=0,x=u.length;W<x;W++)u[W].startsWith(".")?s[u[W].slice(1,2)]?s[u[W].slice(1,2)]===u[W]&&(u[W]=u[W].slice(0,2)):(s[u[W].slice(1,2)]=u[W],u[W]=u[W].slice(0,2)):u[W].startsWith("#")?c[u[W].slice(1,2)]?c[u[W].slice(1,2)]===u[W]&&(u[W]=u[W].slice(0,2)):(c[u[W].slice(1,2)]=u[W],u[W]=u[W].slice(0,2)):u[W].startsWith(".")||u[W].startsWith("#")||(l[u[W].slice(0,1)]?l[u[W].slice(0,1)]===u[W]&&(u[W]=u[W].slice(0,1)):(l[u[W].slice(0,1)]=u[W],u[W]=u[W].slice(0,1)));return u}e.uglifyArr=r,e.uglifyById=function(e,t){return r(e)[t]},e.version="1.2.18",Object.defineProperty(e,"__esModule",{value:!0})}));
