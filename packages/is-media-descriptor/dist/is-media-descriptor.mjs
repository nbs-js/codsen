/**
 * is-media-descriptor
 * Is given string a valid media descriptor (including media query)?
 * Version: 3.0.6
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/is-media-descriptor/
 */

import e from"leven";import{processCommaSep as o}from"string-process-comma-separated";const t=["all","aural","braille","embossed","handheld","print","projection","screen","speech","tty","tv"],s=["width","min-width","max-width","height","min-height","max-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","orientation","resolution","min-resolution","max-resolution","scan","grid","update","overflow-block","overflow-inline","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","color-gamut","pointer","hover","any-pointer","any-hover"],i=/^\w+$/g;const f="3.0.6",n={offset:0};function r(f,r){const l={...n,...r};if(l.offset&&!Number.isInteger(l.offset))throw new Error(`is-media-descriptor: [THROW_ID_01] opts.offset must be an integer, it was given as ${l.offset} (type ${typeof l.offset})`);if(l.offset||(l.offset=0),"string"!=typeof f)return[];if(!f.trim())return[];const a=[];let m=0,d=f.length;const c=f.trim();if(f!==f.trim()){const e=[];if(!f[0].trim())for(let o=0,t=f.length;o<t;o++)if(f[o].trim()){e.push([0+l.offset,o+l.offset]),m=o;break}if(!f[f.length-1].trim())for(let o=f.length;o--;)if(f[o].trim()){e.push([o+1+l.offset,f.length+l.offset]),d=o+1;break}a.push({idxFrom:e[0][0],idxTo:e[e.length-1][1],message:"Remove whitespace.",fix:{ranges:e}})}if(t.includes(c))return a;if(["only","not"].includes(c))a.push({idxFrom:m+l.offset,idxTo:d+l.offset,message:"Missing media type or condition.",fix:null});else if(!c.match(i)||c.includes("(")||c.includes(")")){let e=!1;const[f,n]=Array.from(c).reduce(((o,t,s)=>")"===t?(!e&&o[1]+1>o[0]&&(e=!0),[o[0],o[1]+1]):"("===t?[o[0]+1,o[1]]:(";"===t&&a.push({idxFrom:s+l.offset,idxTo:s+1+l.offset,message:"Semicolon found!",fix:null}),o)),[0,0]);if(e&&f===n&&a.push({idxFrom:m+l.offset,idxTo:d+l.offset,message:"Some closing brackets are before their opening counterparts.",fix:null}),f>n?a.push({idxFrom:m+l.offset,idxTo:d+l.offset,message:"More opening brackets than closing.",fix:null}):n>f&&a.push({idxFrom:m+l.offset,idxTo:d+l.offset,message:"More closing brackets than opening.",fix:null}),!a.length&&c.match(/\(\s*\)/g)){let e,o=null;for(let t=0,s=c.length;t<s;t++)"("===c[t]?(o=t,e=!1):")"===c[t]&&o?e?e=!0:a.push({idxFrom:o+l.offset,idxTo:t+1+l.offset,message:"Empty bracket pair.",fix:null}):c[t].trim()&&(e=!0)}if(a.length)return a;o(c,{offset:l.offset,leadingWhitespaceOK:!1,trailingWhitespaceOK:!1,oneSpaceAfterCommaOK:!0,innerWhitespaceAllowed:!0,separator:",",cb:(e,o)=>{!function(e,o,f){let n=null;const r=[];let l=null,a=!0,m=!0,d=!0,c=!1;const u=[];for(let g=o.idxFrom;g<=o.idxTo;g++){if(")"===e[g]){const n=u.pop(),r=e.slice(n+1,g);r.includes("(")||r.includes(")")||r.match(i)&&(s.includes(r.toLowerCase().trim())||f.push({idxFrom:n+1+o.offset,idxTo:g+o.offset,message:`Unrecognised "${r.trim()}".`,fix:null}));const l=new RegExp(t.join("|"),"gi");(r.match(l)||[]).forEach((t=>{const s=e.indexOf(t);f.push({idxFrom:s+o.offset,idxTo:s+t.length+o.offset,message:`Media type "${t}" inside brackets.`,fix:null})}))}if("("===e[g]&&u.push(g),e[g]&&e[g].trim().length&&null!==l){if("("===e[l-1]||")"===e[g])f.push({idxFrom:l+o.offset,idxTo:g+o.offset,message:"Bad whitespace.",fix:{ranges:[[l+o.offset,g+o.offset]]}});else if(l<g-1||" "!==e[g-1]){let t=l+o.offset,s=g+o.offset,i=" ";l!==g-1&&(" "===e[l]?(t+=1,i=null):" "===e[g-1]&&(s-=1,i=null)),f.push({idxFrom:l+o.offset,idxTo:g+o.offset,message:"Bad whitespace.",fix:{ranges:[i?[t,s," "]:[t,s]]}})}l=null}if(e[g]&&!e[g].trim().length&&null===l&&(l=g),!(null===n||e[g]&&e[g].trim().length||u.length)){const i=e.slice(n,g);if(r.push(i.toLowerCase()),!c||(a||m)&&"and"!==i)if(d&&["not","only"].includes(i))d=!1,m=!1;else if(a||m){if(i.startsWith("("))if(m);else{let t=`Media condition "${e.slice(n,g)}" can't be here.`;"not"===r[r.length-2]&&(t='"not" can be only in front of media type.'),f.push({idxFrom:n+o.offset,idxTo:g+o.offset,message:t,fix:null})}else{if(!a){let r=`Expected brackets on "${i}".`,l=null,a=g+o.offset;if(["not","else","or"].includes(i.toLowerCase()))r=`"${i}" can't be here.`;else if(t.includes(i.toLowerCase()))r="Unexpected media type, try using a comma.";else if(s.includes(i.toLowerCase()))r="Missing brackets.",l={ranges:[[n+o.offset,n+o.offset,"("],[g+o.offset,g+o.offset,")"]]};else if(e.slice(g).trim().startsWith(":")){const e=i.slice(0,g).trim();r=`Expected brackets on "${e}" and its value.`,a=n+e.length+o.offset}f.push({idxFrom:n+o.offset,idxTo:a,message:r,fix:l});break}if(t.includes(i.toLowerCase()))a=!1,m=!1;else{let e=`Unrecognised "${i}".`;i.match(/\w/g)?["and","only","or","not"].includes(i.toLowerCase())&&(e=`"${i}" instead of a media type.`):e=`Strange symbol${1===i.trim().length?"":"s"} "${i}".`,f.push({idxFrom:n+o.offset,idxTo:g+o.offset,message:e,fix:null})}}c=!0}else f.push({idxFrom:n+o.offset,idxTo:g+o.offset,message:`Unrecognised media type "${e.slice(n,g)}".`,fix:null});else"and"!==i.toLowerCase()?f.push({idxFrom:n+o.offset,idxTo:g+o.offset,message:`Expected "and", found "${i}".`,fix:null}):e[g]||f.push({idxFrom:n+o.offset,idxTo:g+o.offset,message:`Dangling "${i}".`,fix:{ranges:[[e.slice(0,n).trim().length+o.offset,g+o.offset]]}}),c=!1,m=!0;n=null,d&&(d=!1)}null===n&&e[g]&&e[g].trim().length&&")"!==e[g]&&(n=g)}}(c,{...l,idxFrom:e-l.offset,idxTo:o-l.offset},a)},errCb:(e,o)=>{}})}else for(let o=0,s=t.length;o<s;o++){if(1===e(t[o],c)){a.push({idxFrom:m+l.offset,idxTo:d+l.offset,message:`Did you mean "${t[o]}"?`,fix:{ranges:[[m+l.offset,d+l.offset,t[o]]]}});break}o===s-1&&a.push({idxFrom:m+l.offset,idxTo:d+l.offset,message:`Unrecognised media type "${c}".`,fix:null})}return a}export{n as defaults,r as isMediaD,f as version};
