/**
 * ast-monkey-util
 * Utility library of AST helper functions
 * Version: 1.2.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-monkey-util/
 */

function pathNext(str) {
  if (typeof str !== "string" || !str.length) {
    return null;
  }
  if (str.includes(".") && /^\d*$/.test(str.slice(str.lastIndexOf(".") + 1))) {
    return `${str.slice(0, str.lastIndexOf(".") + 1)}${
      +str.slice(str.lastIndexOf(".") + 1) + 1
    }`;
  }
  if (/^\d*$/.test(str)) {
    return `${+str + 1}`;
  }
  return str;
}

function pathPrev(str) {
  if (typeof str !== "string" || !str.length) {
    return null;
  }
  const extractedValue = str.slice(str.lastIndexOf(".") + 1);
  if (extractedValue === "0") {
    return null;
  }
  if (str.includes(".") && /^\d*$/.test(extractedValue)) {
    return `${str.slice(0, str.lastIndexOf(".") + 1)}${
      +str.slice(str.lastIndexOf(".") + 1) - 1
    }`;
  }
  if (/^\d*$/.test(str)) {
    return `${+str - 1}`;
  }
  return null;
}

function pathUp(str) {
  if (typeof str === "string") {
    if (!str.includes(".") || !str.slice(str.indexOf(".") + 1).includes(".")) {
      return "0";
    }
    let dotsCount = 0;
    for (let i = str.length; i--; ) {
      if (str[i] === ".") {
        dotsCount += 1;
      }
      if (dotsCount === 2) {
        return str.slice(0, i);
      }
    }
  }
  return "0";
}

function parent(str) {
  if (typeof str === "string") {
    if (!str.includes(".")) {
      return null;
    }
    const lastDotAt = str.lastIndexOf(".");
    if (!str.slice(0, lastDotAt).includes(".")) {
      return str.slice(0, lastDotAt);
    }
    for (let i = lastDotAt - 1; i--; ) {
      if (str[i] === ".") {
        return str.slice(i + 1, lastDotAt);
      }
    }
  }
  return null;
}

export { parent, pathNext, pathPrev, pathUp };
