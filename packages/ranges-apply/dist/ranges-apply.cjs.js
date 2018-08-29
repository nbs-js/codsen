'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isInt = _interopDefault(require('is-natural-number'));
var isNumStr = _interopDefault(require('is-natural-number-string'));
var ordinal = _interopDefault(require('ordinal-number-suffix'));
var rangesMerge = _interopDefault(require('ranges-merge'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var isArr = Array.isArray;
function existy(x) {
  return x != null;
}
function isStr(something) {
  return typeof something === "string";
}
function replaceSlicesArr(str, rangesArr) {
  if (arguments.length === 0) {
    throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");
  }
  if (!isStr(str)) {
    throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(_typeof(str), ", equal to: ").concat(str));
  }
  if (rangesArr === null) {
    return str;
  } else if (!isArr(rangesArr)) {
    throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(_typeof(rangesArr), ", equal to: ").concat(rangesArr));
  }
  if (isArr(rangesArr) && (isInt(rangesArr[0], {
    includeZero: true
  }) || isNumStr(rangesArr[0], {
    includeZero: true
  })) && (isInt(rangesArr[1], {
    includeZero: true
  }) || isNumStr(rangesArr[1], {
    includeZero: true
  }))) {
    rangesArr = [rangesArr];
  }
  rangesArr.forEach(function (el, i) {
    if (!isArr(el)) {
      throw new TypeError("ranges-apply: [THROW_ID_04] ranges array, second input arg., has ".concat(ordinal(i), " element not an array: ").concat(JSON.stringify(el, null, 4), ", which is ").concat(_typeof(el)));
    }
    if (!isInt(el[0], {
      includeZero: true
    })) {
      if (isNumStr(el[0], {
        includeZero: true
      })) {
        rangesArr[i][0] = Number.parseInt(rangesArr[i][0], 10);
      } else {
        throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg. has ".concat(ordinal(i), " element, array [").concat(el[0], ",").concat(el[1], "]. That array has first element not an integer, but ").concat(_typeof(el[0]), ", equal to: ").concat(JSON.stringify(el[0], null, 4), ". Computer doesn't like this."));
      }
    }
    if (!isInt(el[1], {
      includeZero: true
    })) {
      if (isNumStr(el[1], {
        includeZero: true
      })) {
        rangesArr[i][1] = Number.parseInt(rangesArr[i][1], 10);
      } else {
        throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(ordinal(i), " element, array [").concat(el[0], ",").concat(el[1], "]. That array has second element not an integer, but ").concat(_typeof(el[1]), ", equal to: ").concat(JSON.stringify(el[1], null, 4), ". Computer doesn't like this."));
      }
    }
  });
  var workingRanges = rangesMerge(rangesArr);
  if (workingRanges.length > 0) {
    var tails = str.slice(workingRanges[workingRanges.length - 1][1]);
    str = workingRanges.reduce(function (acc, val, i, arr) {
      var beginning = i === 0 ? 0 : arr[i - 1][1];
      var ending = arr[i][0];
      return acc + str.slice(beginning, ending) + (existy(arr[i][2]) ? arr[i][2] : "");
    }, "");
    str += tails;
  }
  return str;
}

module.exports = replaceSlicesArr;
