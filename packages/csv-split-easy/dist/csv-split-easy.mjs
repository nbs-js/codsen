/**
 * csv-split-easy
 * Splits the CSV string into array of arrays, each representing a row of columns
 * Version: 4.0.3
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/csv-split-easy/
 */

import{remSep as e}from"string-remove-thousand-separators";var r="4.0.3";const s={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1};function o(r,o){let t=0,a=0,l=[];const i=[];let m=!1,n=!0;if(o&&"object"!=typeof o)throw Error(`csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type ${typeof o} equal to:\n${JSON.stringify(o,null,4)}`);const c={...s,...o};if("string"!=typeof r)throw new TypeError(`csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(""===r)return[[""]];for(let s=0,o=(r=r.trim()).length;o>s;s++){if(n&&'"'!==r[s]&&","!==r[s]&&""!==r[s].trim()&&(n=!1),'"'===r[s])if(m&&'"'===r[s+1])s+=1;else if(m){m=!1;const o=r.slice(t,s);""!==o.trim()&&(n=!1);const a=/""/.test(o)?o.replace(/""/g,'"'):e(o,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle});l.push(a)}else m=!0,t=s+1;else if(m||","!==r[s])if("\n"===r[s]||"\r"===r[s]){if(!a){if(a=s,!m&&'"'!==r[s-1]){const o=r.slice(t,s);""!==o.trim()&&(n=!1),l.push(e(o,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}n?l.length=0:i.push(l),n=!0,l=[]}t=s+1}else a&&(a=0,t=s);else{if('"'!==r[s-1]&&!m){const o=r.slice(t,s);""!==o.trim()&&(n=!1),l.push(e(o,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}t=s+1,a&&(a=0)}if(s+1===o){if('"'!==r[s]){const o=r.slice(t,s+1);o.trim()&&(n=!1),l.push(e(o,{removeThousandSeparatorsFromNumbers:c.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:c.padSingleDecimalPlaceNumbers,forceUKStyle:c.forceUKStyle}))}n?l=[]:i.push(l),n=!0}}return 0===i.length?[[""]]:i}export{s as defaults,o as splitEasy,r as version};