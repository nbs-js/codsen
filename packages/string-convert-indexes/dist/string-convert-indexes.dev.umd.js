/**
 * string-convert-indexes
 * Convert string character indexes from JS native index-based to Unicode character-count-based and backwards.
 * Version: 1.10.12
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-convert-indexes
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.stringConvertIndexes = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */
  /** Used for built-in method references. */


  var funcProto = Function.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /** Used to infer the `Object` constructor. */

  var objectCtorString = funcToString.call(Object);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var typeDetect = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
       module.exports = factory() ;
    })(commonjsGlobal, function () {
      /* !
       * type-detect
       * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
       * MIT Licensed
       */

      var promiseExists = typeof Promise === 'function';
      /* eslint-disable no-undef */

      var globalObject = typeof self === 'object' ? self : commonjsGlobal; // eslint-disable-line id-blacklist

      var symbolExists = typeof Symbol !== 'undefined';
      var mapExists = typeof Map !== 'undefined';
      var setExists = typeof Set !== 'undefined';
      var weakMapExists = typeof WeakMap !== 'undefined';
      var weakSetExists = typeof WeakSet !== 'undefined';
      var dataViewExists = typeof DataView !== 'undefined';
      var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
      var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
      var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
      var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
      var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf(new Set().entries());
      var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf(new Map().entries());
      var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
      var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
      var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === 'function';
      var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
      var toStringLeftSliceLength = 8;
      var toStringRightSliceLength = -1;
      /**
       * ### typeOf (obj)
       *
       * Uses `Object.prototype.toString` to determine the type of an object,
       * normalising behaviour across engine versions & well optimised.
       *
       * @param {Mixed} object
       * @return {String} object type
       * @api public
       */

      function typeDetect(obj) {
        /* ! Speed optimisation
         * Pre:
         *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
         *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
         *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
         *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
         *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
         * Post:
         *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
         *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
         *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
         *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
         *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
         */
        var typeofObj = typeof obj;

        if (typeofObj !== 'object') {
          return typeofObj;
        }
        /* ! Speed optimisation
         * Pre:
         *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
         * Post:
         *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
         */


        if (obj === null) {
          return 'null';
        }
        /* ! Spec Conformance
         * Test: `Object.prototype.toString.call(window)``
         *  - Node === "[object global]"
         *  - Chrome === "[object global]"
         *  - Firefox === "[object Window]"
         *  - PhantomJS === "[object Window]"
         *  - Safari === "[object Window]"
         *  - IE 11 === "[object Window]"
         *  - IE Edge === "[object Window]"
         * Test: `Object.prototype.toString.call(this)``
         *  - Chrome Worker === "[object global]"
         *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
         *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
         *  - IE 11 Worker === "[object WorkerGlobalScope]"
         *  - IE Edge Worker === "[object WorkerGlobalScope]"
         */


        if (obj === globalObject) {
          return 'global';
        }
        /* ! Speed optimisation
         * Pre:
         *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
         * Post:
         *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
         */


        if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
          return 'Array';
        } // Not caching existence of `window` and related properties due to potential
        // for `window` to be unset before tests in quasi-browser environments.


        if (typeof window === 'object' && window !== null) {
          /* ! Spec Conformance
           * (https://html.spec.whatwg.org/multipage/browsers.html#location)
           * WhatWG HTML$7.7.3 - The `Location` interface
           * Test: `Object.prototype.toString.call(window.location)``
           *  - IE <=11 === "[object Object]"
           *  - IE Edge <=13 === "[object Object]"
           */
          if (typeof window.location === 'object' && obj === window.location) {
            return 'Location';
          }
          /* ! Spec Conformance
           * (https://html.spec.whatwg.org/#document)
           * WhatWG HTML$3.1.1 - The `Document` object
           * Note: Most browsers currently adher to the W3C DOM Level 2 spec
           *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
           *       which suggests that browsers should use HTMLTableCellElement for
           *       both TD and TH elements. WhatWG separates these.
           *       WhatWG HTML states:
           *         > For historical reasons, Window objects must also have a
           *         > writable, configurable, non-enumerable property named
           *         > HTMLDocument whose value is the Document interface object.
           * Test: `Object.prototype.toString.call(document)``
           *  - Chrome === "[object HTMLDocument]"
           *  - Firefox === "[object HTMLDocument]"
           *  - Safari === "[object HTMLDocument]"
           *  - IE <=10 === "[object Document]"
           *  - IE 11 === "[object HTMLDocument]"
           *  - IE Edge <=13 === "[object HTMLDocument]"
           */


          if (typeof window.document === 'object' && obj === window.document) {
            return 'Document';
          }

          if (typeof window.navigator === 'object') {
            /* ! Spec Conformance
             * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
             * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
             * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
             *  - IE <=10 === "[object MSMimeTypesCollection]"
             */
            if (typeof window.navigator.mimeTypes === 'object' && obj === window.navigator.mimeTypes) {
              return 'MimeTypeArray';
            }
            /* ! Spec Conformance
             * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
             * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
             * Test: `Object.prototype.toString.call(navigator.plugins)``
             *  - IE <=10 === "[object MSPluginsCollection]"
             */


            if (typeof window.navigator.plugins === 'object' && obj === window.navigator.plugins) {
              return 'PluginArray';
            }
          }

          if ((typeof window.HTMLElement === 'function' || typeof window.HTMLElement === 'object') && obj instanceof window.HTMLElement) {
            /* ! Spec Conformance
            * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
            * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
            * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
            *  - IE <=10 === "[object HTMLBlockElement]"
            */
            if (obj.tagName === 'BLOCKQUOTE') {
              return 'HTMLQuoteElement';
            }
            /* ! Spec Conformance
             * (https://html.spec.whatwg.org/#htmltabledatacellelement)
             * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
             * Note: Most browsers currently adher to the W3C DOM Level 2 spec
             *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
             *       which suggests that browsers should use HTMLTableCellElement for
             *       both TD and TH elements. WhatWG separates these.
             * Test: Object.prototype.toString.call(document.createElement('td'))
             *  - Chrome === "[object HTMLTableCellElement]"
             *  - Firefox === "[object HTMLTableCellElement]"
             *  - Safari === "[object HTMLTableCellElement]"
             */


            if (obj.tagName === 'TD') {
              return 'HTMLTableDataCellElement';
            }
            /* ! Spec Conformance
             * (https://html.spec.whatwg.org/#htmltableheadercellelement)
             * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
             * Note: Most browsers currently adher to the W3C DOM Level 2 spec
             *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
             *       which suggests that browsers should use HTMLTableCellElement for
             *       both TD and TH elements. WhatWG separates these.
             * Test: Object.prototype.toString.call(document.createElement('th'))
             *  - Chrome === "[object HTMLTableCellElement]"
             *  - Firefox === "[object HTMLTableCellElement]"
             *  - Safari === "[object HTMLTableCellElement]"
             */


            if (obj.tagName === 'TH') {
              return 'HTMLTableHeaderCellElement';
            }
          }
        }
        /* ! Speed optimisation
        * Pre:
        *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
        *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
        *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
        *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
        *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
        *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
        *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
        *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
        *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
        * Post:
        *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
        *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
        *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
        *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
        *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
        *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
        *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
        *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
        *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
        */


        var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];

        if (typeof stringTag === 'string') {
          return stringTag;
        }

        var objPrototype = Object.getPrototypeOf(obj);
        /* ! Speed optimisation
        * Pre:
        *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
        *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
        * Post:
        *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
        *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
        */

        if (objPrototype === RegExp.prototype) {
          return 'RegExp';
        }
        /* ! Speed optimisation
        * Pre:
        *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
        * Post:
        *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
        */


        if (objPrototype === Date.prototype) {
          return 'Date';
        }
        /* ! Spec Conformance
         * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
         * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
         * Test: `Object.prototype.toString.call(Promise.resolve())``
         *  - Chrome <=47 === "[object Object]"
         *  - Edge <=20 === "[object Object]"
         *  - Firefox 29-Latest === "[object Promise]"
         *  - Safari 7.1-Latest === "[object Promise]"
         */


        if (promiseExists && objPrototype === Promise.prototype) {
          return 'Promise';
        }
        /* ! Speed optimisation
        * Pre:
        *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
        * Post:
        *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
        */


        if (setExists && objPrototype === Set.prototype) {
          return 'Set';
        }
        /* ! Speed optimisation
        * Pre:
        *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
        * Post:
        *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
        */


        if (mapExists && objPrototype === Map.prototype) {
          return 'Map';
        }
        /* ! Speed optimisation
        * Pre:
        *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
        * Post:
        *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
        */


        if (weakSetExists && objPrototype === WeakSet.prototype) {
          return 'WeakSet';
        }
        /* ! Speed optimisation
        * Pre:
        *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
        * Post:
        *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
        */


        if (weakMapExists && objPrototype === WeakMap.prototype) {
          return 'WeakMap';
        }
        /* ! Spec Conformance
         * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
         * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
         * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
         *  - Edge <=13 === "[object Object]"
         */


        if (dataViewExists && objPrototype === DataView.prototype) {
          return 'DataView';
        }
        /* ! Spec Conformance
         * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
         * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
         * Test: `Object.prototype.toString.call(new Map().entries())``
         *  - Edge <=13 === "[object Object]"
         */


        if (mapExists && objPrototype === mapIteratorPrototype) {
          return 'Map Iterator';
        }
        /* ! Spec Conformance
         * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
         * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
         * Test: `Object.prototype.toString.call(new Set().entries())``
         *  - Edge <=13 === "[object Object]"
         */


        if (setExists && objPrototype === setIteratorPrototype) {
          return 'Set Iterator';
        }
        /* ! Spec Conformance
         * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
         * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
         * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
         *  - Edge <=13 === "[object Object]"
         */


        if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
          return 'Array Iterator';
        }
        /* ! Spec Conformance
         * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
         * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
         * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
         *  - Edge <=13 === "[object Object]"
         */


        if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
          return 'String Iterator';
        }
        /* ! Speed optimisation
        * Pre:
        *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
        * Post:
        *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
        */


        if (objPrototype === null) {
          return 'Object';
        }

        return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
      }

      return typeDetect;
    });
  });

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }
  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return baseFindIndex(array, baseIsNaN, fromIndex);
    }

    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }

    return -1;
  }
  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */


  function baseIsNaN(value) {
    return value !== value;
  }
  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */


  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }
  /** Used for built-in method references. */


  var arrayProto = Array.prototype;
  /** Built-in value references. */

  var splice = arrayProto.splice;
  /**
   * The base implementation of `_.pullAllBy` without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   */

  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
        index = -1,
        length = values.length,
        seen = array;

    if (array === values) {
      values = copyArray(values);
    }

    if (iteratee) {
      seen = arrayMap(array, baseUnary(iteratee));
    }

    while (++index < length) {
      var fromIndex = 0,
          value = values[index],
          computed = iteratee ? iteratee(value) : value;

      while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
        if (seen !== array) {
          splice.call(seen, fromIndex, 1);
        }

        splice.call(array, fromIndex, 1);
      }
    }

    return array;
  }
  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */


  function copyArray(source, array) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));

    while (++index < length) {
      array[index] = source[index];
    }

    return array;
  }
  /**
   * This method is like `_.pull` except that it accepts an array of values to remove.
   *
   * **Note:** Unlike `_.difference`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
   *
   * _.pullAll(array, ['a', 'c']);
   * console.log(array);
   * // => ['b', 'b']
   */


  function pullAll(array, values) {
    return array && array.length && values && values.length ? basePullAll(array, values) : array;
  }

  var lodash_pullall = pullAll;

  var lodash_clonedeep = createCommonjsModule(function (module, exports) {
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;
    /** Used to stand-in for `undefined` hash values. */

    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /** Used as references for various `Number` constants. */

    var MAX_SAFE_INTEGER = 9007199254740991;
    /** `Object#toString` result references. */

    var argsTag = '[object Arguments]',
        arrayTag = '[object Array]',
        boolTag = '[object Boolean]',
        dateTag = '[object Date]',
        errorTag = '[object Error]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        mapTag = '[object Map]',
        numberTag = '[object Number]',
        objectTag = '[object Object]',
        promiseTag = '[object Promise]',
        regexpTag = '[object RegExp]',
        setTag = '[object Set]',
        stringTag = '[object String]',
        symbolTag = '[object Symbol]',
        weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]',
        dataViewTag = '[object DataView]',
        float32Tag = '[object Float32Array]',
        float64Tag = '[object Float64Array]',
        int8Tag = '[object Int8Array]',
        int16Tag = '[object Int16Array]',
        int32Tag = '[object Int32Array]',
        uint8Tag = '[object Uint8Array]',
        uint8ClampedTag = '[object Uint8ClampedArray]',
        uint16Tag = '[object Uint16Array]',
        uint32Tag = '[object Uint32Array]';
    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */

    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    /** Used to match `RegExp` flags from their coerced string values. */

    var reFlags = /\w*$/;
    /** Used to detect host constructors (Safari). */

    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Used to detect unsigned integer values. */

    var reIsUint = /^(?:0|[1-9]\d*)$/;
    /** Used to identify `toStringTag` values supported by `_.clone`. */

    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    /** Detect free variable `global` from Node.js. */

    var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    /** Detect free variable `self`. */

    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root = freeGlobal || freeSelf || Function('return this')();
    /** Detect free variable `exports`. */

    var freeExports =  exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /**
     * Adds the key-value `pair` to `map`.
     *
     * @private
     * @param {Object} map The map to modify.
     * @param {Array} pair The key-value pair to add.
     * @returns {Object} Returns `map`.
     */

    function addMapEntry(map, pair) {
      // Don't return `map.set` because it's not chainable in IE 11.
      map.set(pair[0], pair[1]);
      return map;
    }
    /**
     * Adds `value` to `set`.
     *
     * @private
     * @param {Object} set The set to modify.
     * @param {*} value The value to add.
     * @returns {Object} Returns `set`.
     */


    function addSetEntry(set, value) {
      // Don't return `set.add` because it's not chainable in IE 11.
      set.add(value);
      return set;
    }
    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */


    function arrayEach(array, iteratee) {
      var index = -1,
          length = array ? array.length : 0;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }

      return array;
    }
    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */


    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }

      return array;
    }
    /**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */


    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1,
          length = array ? array.length : 0;

      if (initAccum && length) {
        accumulator = array[++index];
      }

      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }

      return accumulator;
    }
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */


    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }

      return result;
    }
    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */


    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }
    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */


    function isHostObject(value) {
      // Many host objects are `Object` objects that can coerce to strings
      // despite having improperly defined `toString` methods.
      var result = false;

      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '');
        } catch (e) {}
      }

      return result;
    }
    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */


    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);
      map.forEach(function (value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */


    function overArg(func, transform) {
      return function (arg) {
        return func(transform(arg));
      };
    }
    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */


    function setToArray(set) {
      var index = -1,
          result = Array(set.size);
      set.forEach(function (value) {
        result[++index] = value;
      });
      return result;
    }
    /** Used for built-in method references. */


    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;
    /** Used to detect overreaching core-js shims. */

    var coreJsData = root['__core-js_shared__'];
    /** Used to detect methods masquerading as native. */

    var maskSrcKey = function () {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? 'Symbol(src)_1.' + uid : '';
    }();
    /** Used to resolve the decompiled source of functions. */


    var funcToString = funcProto.toString;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var objectToString = objectProto.toString;
    /** Used to detect if a method is native. */

    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    /** Built-in value references. */

    var Buffer = moduleExports ? root.Buffer : undefined,
        Symbol = root.Symbol,
        Uint8Array = root.Uint8Array,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeKeys = overArg(Object.keys, Object);
    /* Built-in method references that are verified to be native. */

    var DataView = getNative(root, 'DataView'),
        Map = getNative(root, 'Map'),
        Promise = getNative(root, 'Promise'),
        Set = getNative(root, 'Set'),
        WeakMap = getNative(root, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');
    /** Used to detect maps, sets, and weakmaps. */

    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);
    /** Used to convert symbols to primitives and strings. */

    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function Hash(entries) {
      var index = -1,
          length = entries ? entries.length : 0;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */


    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function hashGet(key) {
      var data = this.__data__;

      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }

      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }
    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }
    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */


    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
      return this;
    } // Add methods to `Hash`.


    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function ListCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */


    function listCacheClear() {
      this.__data__ = [];
    }
    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }

      var lastIndex = data.length - 1;

      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }

      return true;
    }
    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);
      return index < 0 ? undefined : data[index][1];
    }
    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */


    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }

      return this;
    } // Add methods to `ListCache`.


    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function MapCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */


    function mapCacheClear() {
      this.__data__ = {
        'hash': new Hash(),
        'map': new (Map || ListCache)(),
        'string': new Hash()
      };
    }
    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function mapCacheDelete(key) {
      return getMapData(this, key)['delete'](key);
    }
    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */


    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    } // Add methods to `MapCache`.


    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */


    function stackClear() {
      this.__data__ = new ListCache();
    }
    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function stackDelete(key) {
      return this.__data__['delete'](key);
    }
    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function stackGet(key) {
      return this.__data__.get(key);
    }
    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function stackHas(key) {
      return this.__data__.has(key);
    }
    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */


    function stackSet(key, value) {
      var cache = this.__data__;

      if (cache instanceof ListCache) {
        var pairs = cache.__data__;

        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }

        cache = this.__data__ = new MapCache(pairs);
      }

      cache.set(key, value);
      return this;
    } // Add methods to `Stack`.


    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */

    function arrayLikeKeys(value, inherited) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      // Safari 9 makes `arguments.length` enumerable in strict mode.
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length,
          skipIndexes = !!length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
          result.push(key);
        }
      }

      return result;
    }
    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */


    function assignValue(object, key, value) {
      var objValue = object[key];

      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
        object[key] = value;
      }
    }
    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */


    function assocIndexOf(array, key) {
      var length = array.length;

      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }

      return -1;
    }
    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */


    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {boolean} [isFull] Specify a clone including symbols.
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */


    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }

      if (result !== undefined) {
        return result;
      }

      if (!isObject(value)) {
        return value;
      }

      var isArr = isArray(value);

      if (isArr) {
        result = initCloneArray(value);

        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }

        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          if (isHostObject(value)) {
            return object ? value : {};
          }

          result = initCloneObject(isFunc ? {} : value);

          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }

          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      } // Check for circular references and return its corresponding clone.


      stack || (stack = new Stack());
      var stacked = stack.get(value);

      if (stacked) {
        return stacked;
      }

      stack.set(value, result);

      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }

      arrayEach(props || value, function (subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        } // Recursively populate clone (susceptible to call stack limits).


        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
      });
      return result;
    }
    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */


    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }
    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    /**
     * The base implementation of `getTag`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */


    function baseGetTag(value) {
      return objectToString.call(value);
    }
    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */


    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }

      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */


    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }

      var result = [];

      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }

      return result;
    }
    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */


    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }

      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */


    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */


    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */


    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor());
    }
    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */


    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */


    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor());
    }
    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */


    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */


    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */


    function copyArray(source, array) {
      var index = -1,
          length = source.length;
      array || (array = Array(length));

      while (++index < length) {
        array[index] = source[index];
      }

      return array;
    }
    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */


    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        assignValue(object, key, newValue === undefined ? source[key] : newValue);
      }

      return object;
    }
    /**
     * Copies own symbol properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */


    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */


    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
    }
    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */


    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }
    /**
     * Creates an array of the own enumerable symbol properties of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */


    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11,
    // for data views in Edge < 14, and promises in Node.js.

    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function (value) {
        var result = objectToString.call(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : undefined;

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;

            case mapCtorString:
              return mapTag;

            case promiseCtorString:
              return promiseTag;

            case setCtorString:
              return setTag;

            case weakMapCtorString:
              return weakMapTag;
          }
        }

        return result;
      };
    }
    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */


    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length); // Add properties assigned by `RegExp#exec`.

      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }

      return result;
    }
    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */


    function initCloneObject(object) {
      return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */


    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;

      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }
    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */


    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */


    function isKeyable(value) {
      var type = typeof value;
      return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
    }
    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */


    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */


    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
      return value === proto;
    }
    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to process.
     * @returns {string} Returns the source code.
     */


    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}

        try {
          return func + '';
        } catch (e) {}
      }

      return '';
    }
    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */


    function cloneDeep(value) {
      return baseClone(value, true, true);
    }
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */


    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */


    function isArguments(value) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
    }
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */


    var isArray = Array.isArray;
    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */

    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */


    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */


    var isBuffer = nativeIsBuffer || stubFalse;
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */

    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8-9 which returns 'object' for typed array and other constructors.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }
    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */


    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */


    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */


    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */


    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */


    function stubArray() {
      return [];
    }
    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */


    function stubFalse() {
      return false;
    }

    module.exports = cloneDeep;
  });

  /**
   * ast-monkey-traverse
   * Utility library to traverse parsed HTML (AST's) or anything nested (plain objects within arrays within plain objects)
   * Version: 1.12.13
   * Author: Roy Revelt, Codsen Ltd
   * License: MIT
   * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey-traverse
   */

  function trimFirstDot(str) {
    if (typeof str === "string" && str.length && str[0] === ".") {
      return str.slice(1);
    }

    return str;
  }

  function isObj(something) {
    return something && typeof something === "object" && !Array.isArray(something);
  }

  function astMonkeyTraverse(tree1, cb1) {
    const stop2 = {
      now: false
    };

    function traverseInner(treeOriginal, callback, originalInnerObj, stop) {
      const tree = lodash_clonedeep(treeOriginal);
      let i;
      let len;
      let res;
      const innerObj = {
        depth: -1,
        path: "",
        ...originalInnerObj
      };
      innerObj.depth += 1;

      if (Array.isArray(tree)) {
        for (i = 0, len = tree.length; i < len; i++) {
          if (stop.now) {
            break;
          }

          const path = `${innerObj.path}.${i}`;

          if (tree[i] !== undefined) {
            innerObj.parent = lodash_clonedeep(tree);
            innerObj.parentType = "array";
            res = traverseInner(callback(tree[i], undefined, { ...innerObj,
              path: trimFirstDot(path)
            }, stop), callback, { ...innerObj,
              path: trimFirstDot(path)
            }, stop);

            if (Number.isNaN(res) && i < tree.length) {
              tree.splice(i, 1);
              i -= 1;
            } else {
              tree[i] = res;
            }
          } else {
            tree.splice(i, 1);
          }
        }
      } else if (isObj(tree)) {
        for (const key in tree) {
          if (stop.now && key != null) {
            break;
          }

          const path = `${innerObj.path}.${key}`;

          if (innerObj.depth === 0 && key != null) {
            innerObj.topmostKey = key;
          }

          innerObj.parent = lodash_clonedeep(tree);
          innerObj.parentType = "object";
          res = traverseInner(callback(key, tree[key], { ...innerObj,
            path: trimFirstDot(path)
          }, stop), callback, { ...innerObj,
            path: trimFirstDot(path)
          }, stop);

          if (Number.isNaN(res)) {
            delete tree[key];
          } else {
            tree[key] = res;
          }
        }
      }

      return tree;
    }

    return traverseInner(tree1, cb1, {}, stop2);
  }

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991;
  /** `Object#toString` result references. */

  var funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]';
  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  /** Used to detect host constructors (Safari). */

  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  /** Detect free variable `global` from Node.js. */

  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  /** Detect free variable `self`. */

  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);

      case 1:
        return func.call(thisArg, args[0]);

      case 2:
        return func.call(thisArg, args[0], args[1]);

      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }

    return func.apply(thisArg, args);
  }
  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */


  function arrayIncludes(array, value) {
    var length = array ? array.length : 0;
    return !!length && baseIndexOf$1(array, value, 0) > -1;
  }
  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */


  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }

    return false;
  }
  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */


  function arrayMap$1(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }
  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseIndexOf$1(array, value, fromIndex) {
    if (value !== value) {
      return baseFindIndex$1(array, baseIsNaN$1, fromIndex);
    }

    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */


  function baseIsNaN$1(value) {
    return value !== value;
  }
  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */


  function baseUnary$1(func) {
    return function (value) {
      return func(value);
    };
  }
  /**
   * Checks if a cache value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */


  function cacheHas(cache, key) {
    return cache.has(key);
  }
  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */


  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }
  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */


  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;

    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }

    return result;
  }
  /** Used for built-in method references. */


  var arrayProto$1 = Array.prototype,
      funcProto$1 = Function.prototype,
      objectProto = Object.prototype;
  /** Used to detect overreaching core-js shims. */

  var coreJsData = root['__core-js_shared__'];
  /** Used to detect methods masquerading as native. */

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
  /** Used to resolve the decompiled source of functions. */


  var funcToString$1 = funcProto$1.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var objectToString = objectProto.toString;
  /** Used to detect if a method is native. */

  var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  /** Built-in value references. */

  var splice$1 = arrayProto$1.splice;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMax = Math.max,
      nativeMin = Math.min;
  /* Built-in method references that are verified to be native. */

  var Map$1 = getNative(root, 'Map'),
      nativeCreate = getNative(Object, 'create');
  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Hash(entries) {
    var index = -1,
        length = entries ? entries.length : 0;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */


  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }
  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */


  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }
  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */


  function hashGet(key) {
    var data = this.__data__;

    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }

    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }
  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */


  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }
  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */


  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  } // Add methods to `Hash`.


  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function ListCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */


  function listCacheClear() {
    this.__data__ = [];
  }
  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */


  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }

    var lastIndex = data.length - 1;

    if (index == lastIndex) {
      data.pop();
    } else {
      splice$1.call(data, index, 1);
    }

    return true;
  }
  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */


  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }
  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */


  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */


  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this;
  } // Add methods to `ListCache`.


  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function MapCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */


  function mapCacheClear() {
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map$1 || ListCache)(),
      'string': new Hash()
    };
  }
  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */


  function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
  }
  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */


  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */


  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */


  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  } // Add methods to `MapCache`.


  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */

  function SetCache(values) {
    var index = -1,
        length = values ? values.length : 0;
    this.__data__ = new MapCache();

    while (++index < length) {
      this.add(values[index]);
    }
  }
  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */


  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);

    return this;
  }
  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */


  function setCacheHas(value) {
    return this.__data__.has(value);
  } // Add methods to `SetCache`.


  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function assocIndexOf(array, key) {
    var length = array.length;

    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }

    return -1;
  }
  /**
   * The base implementation of methods like `_.intersection`, without support
   * for iteratee shorthands, that accepts an array of arrays to inspect.
   *
   * @private
   * @param {Array} arrays The arrays to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of shared values.
   */


  function baseIntersection(arrays, iteratee, comparator) {
    var includes = comparator ? arrayIncludesWith : arrayIncludes,
        length = arrays[0].length,
        othLength = arrays.length,
        othIndex = othLength,
        caches = Array(othLength),
        maxLength = Infinity,
        result = [];

    while (othIndex--) {
      var array = arrays[othIndex];

      if (othIndex && iteratee) {
        array = arrayMap$1(array, baseUnary$1(iteratee));
      }

      maxLength = nativeMin(array.length, maxLength);
      caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
    }

    array = arrays[0];
    var index = -1,
        seen = caches[0];

    outer: while (++index < length && result.length < maxLength) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;

      if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
        othIndex = othLength;

        while (--othIndex) {
          var cache = caches[othIndex];

          if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
            continue outer;
          }
        }

        if (seen) {
          seen.push(computed);
        }

        result.push(value);
      }
    }

    return result;
  }
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */


  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }

    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */


  function baseRest(func, start) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }

      index = -1;
      var otherArgs = Array(start + 1);

      while (++index < start) {
        otherArgs[index] = args[index];
      }

      otherArgs[start] = array;
      return apply(func, this, otherArgs);
    };
  }
  /**
   * Casts `value` to an empty array if it's not an array like object.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array|Object} Returns the cast array-like object.
   */


  function castArrayLikeObject(value) {
    return isArrayLikeObject(value) ? value : [];
  }
  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */


  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }
  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */


  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }
  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */


  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */


  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */


  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }
  /**
   * Creates an array of unique values that are included in all given arrays
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. The order of result values is determined by the
   * order they occur in the first array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * _.intersection([2, 1], [2, 3]);
   * // => [2]
   */


  var intersection = baseRest(function (arrays) {
    var mapped = arrayMap$1(arrays, castArrayLikeObject);
    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
  });
  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */

  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */


  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */


  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */


  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */


  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */


  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */


  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  var lodash_intersection = intersection;

  /**
   * arrayiffy-if-string
   * Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
   * Version: 3.11.32
   * Author: Roy Revelt, Codsen Ltd
   * License: MIT
   * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/arrayiffy-if-string
   */
  function arrayiffyString(something) {
    if (typeof something === "string") {
      if (something.length > 0) {
        return [something];
      }

      return [];
    }

    return something;
  }

  var objectPath = createCommonjsModule(function (module) {
    (function (root, factory) {
      /*istanbul ignore next:cant test*/

      {
        module.exports = factory();
      }
    })(commonjsGlobal, function () {

      var toStr = Object.prototype.toString;

      function hasOwnProperty(obj, prop) {
        if (obj == null) {
          return false;
        } //to handle objects with null prototypes (too edge case?)


        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isEmpty(value) {
        if (!value) {
          return true;
        }

        if (isArray(value) && value.length === 0) {
          return true;
        } else if (typeof value !== 'string') {
          for (var i in value) {
            if (hasOwnProperty(value, i)) {
              return false;
            }
          }

          return true;
        }

        return false;
      }

      function toString(type) {
        return toStr.call(type);
      }

      function isObject(obj) {
        return typeof obj === 'object' && toString(obj) === "[object Object]";
      }

      var isArray = Array.isArray || function (obj) {
        /*istanbul ignore next:cant test*/
        return toStr.call(obj) === '[object Array]';
      };

      function isBoolean(obj) {
        return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
      }

      function getKey(key) {
        var intKey = parseInt(key);

        if (intKey.toString() === key) {
          return intKey;
        }

        return key;
      }

      function factory(options) {
        options = options || {};

        var objectPath = function (obj) {
          return Object.keys(objectPath).reduce(function (proxy, prop) {
            if (prop === 'create') {
              return proxy;
            }
            /*istanbul ignore else*/


            if (typeof objectPath[prop] === 'function') {
              proxy[prop] = objectPath[prop].bind(objectPath, obj);
            }

            return proxy;
          }, {});
        };

        function hasShallowProperty(obj, prop) {
          return options.includeInheritedProps || typeof prop === 'number' && Array.isArray(obj) || hasOwnProperty(obj, prop);
        }

        function getShallowProperty(obj, prop) {
          if (hasShallowProperty(obj, prop)) {
            return obj[prop];
          }
        }

        function set(obj, path, value, doNotReplace) {
          if (typeof path === 'number') {
            path = [path];
          }

          if (!path || path.length === 0) {
            return obj;
          }

          if (typeof path === 'string') {
            return set(obj, path.split('.').map(getKey), value, doNotReplace);
          }

          var currentPath = path[0];
          var currentValue = getShallowProperty(obj, currentPath);

          if (path.length === 1) {
            if (currentValue === void 0 || !doNotReplace) {
              obj[currentPath] = value;
            }

            return currentValue;
          }

          if (currentValue === void 0) {
            //check if we assume an array
            if (typeof path[1] === 'number') {
              obj[currentPath] = [];
            } else {
              obj[currentPath] = {};
            }
          }

          return set(obj[currentPath], path.slice(1), value, doNotReplace);
        }

        objectPath.has = function (obj, path) {
          if (typeof path === 'number') {
            path = [path];
          } else if (typeof path === 'string') {
            path = path.split('.');
          }

          if (!path || path.length === 0) {
            return !!obj;
          }

          for (var i = 0; i < path.length; i++) {
            var j = getKey(path[i]);

            if (typeof j === 'number' && isArray(obj) && j < obj.length || (options.includeInheritedProps ? j in Object(obj) : hasOwnProperty(obj, j))) {
              obj = obj[j];
            } else {
              return false;
            }
          }

          return true;
        };

        objectPath.ensureExists = function (obj, path, value) {
          return set(obj, path, value, true);
        };

        objectPath.set = function (obj, path, value, doNotReplace) {
          return set(obj, path, value, doNotReplace);
        };

        objectPath.insert = function (obj, path, value, at) {
          var arr = objectPath.get(obj, path);
          at = ~~at;

          if (!isArray(arr)) {
            arr = [];
            objectPath.set(obj, path, arr);
          }

          arr.splice(at, 0, value);
        };

        objectPath.empty = function (obj, path) {
          if (isEmpty(path)) {
            return void 0;
          }

          if (obj == null) {
            return void 0;
          }

          var value, i;

          if (!(value = objectPath.get(obj, path))) {
            return void 0;
          }

          if (typeof value === 'string') {
            return objectPath.set(obj, path, '');
          } else if (isBoolean(value)) {
            return objectPath.set(obj, path, false);
          } else if (typeof value === 'number') {
            return objectPath.set(obj, path, 0);
          } else if (isArray(value)) {
            value.length = 0;
          } else if (isObject(value)) {
            for (i in value) {
              if (hasShallowProperty(value, i)) {
                delete value[i];
              }
            }
          } else {
            return objectPath.set(obj, path, null);
          }
        };

        objectPath.push = function (obj, path
        /*, values */
        ) {
          var arr = objectPath.get(obj, path);

          if (!isArray(arr)) {
            arr = [];
            objectPath.set(obj, path, arr);
          }

          arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
        };

        objectPath.coalesce = function (obj, paths, defaultValue) {
          var value;

          for (var i = 0, len = paths.length; i < len; i++) {
            if ((value = objectPath.get(obj, paths[i])) !== void 0) {
              return value;
            }
          }

          return defaultValue;
        };

        objectPath.get = function (obj, path, defaultValue) {
          if (typeof path === 'number') {
            path = [path];
          }

          if (!path || path.length === 0) {
            return obj;
          }

          if (obj == null) {
            return defaultValue;
          }

          if (typeof path === 'string') {
            return objectPath.get(obj, path.split('.'), defaultValue);
          }

          var currentPath = getKey(path[0]);
          var nextObj = getShallowProperty(obj, currentPath);

          if (nextObj === void 0) {
            return defaultValue;
          }

          if (path.length === 1) {
            return nextObj;
          }

          return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
        };

        objectPath.del = function del(obj, path) {
          if (typeof path === 'number') {
            path = [path];
          }

          if (obj == null) {
            return obj;
          }

          if (isEmpty(path)) {
            return obj;
          }

          if (typeof path === 'string') {
            return objectPath.del(obj, path.split('.'));
          }

          var currentPath = getKey(path[0]);

          if (!hasShallowProperty(obj, currentPath)) {
            return obj;
          }

          if (path.length === 1) {
            if (isArray(obj)) {
              obj.splice(currentPath, 1);
            } else {
              delete obj[currentPath];
            }
          } else {
            return objectPath.del(obj[currentPath], path.slice(1));
          }

          return obj;
        };

        return objectPath;
      }

      var mod = factory();
      mod.create = factory;
      mod.withInheritedProps = factory({
        includeInheritedProps: true
      });
      return mod;
    });
  });

  var escapeStringRegexp = string => {
    if (typeof string !== 'string') {
      throw new TypeError('Expected a string');
    } // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it’s always valid, and a \unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.


    return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
  };

  const regexpCache = new Map();

  function makeRegexp(pattern, options) {
    options = {
      caseSensitive: false,
      ...options
    };
    const cacheKey = pattern + JSON.stringify(options);

    if (regexpCache.has(cacheKey)) {
      return regexpCache.get(cacheKey);
    }

    const negated = pattern[0] === '!';

    if (negated) {
      pattern = pattern.slice(1);
    }

    pattern = escapeStringRegexp(pattern).replace(/\\\*/g, '[\\s\\S]*');
    const regexp = new RegExp(`^${pattern}$`, options.caseSensitive ? '' : 'i');
    regexp.negated = negated;
    regexpCache.set(cacheKey, regexp);
    return regexp;
  }

  var matcher = (inputs, patterns, options) => {
    if (!(Array.isArray(inputs) && Array.isArray(patterns))) {
      throw new TypeError(`Expected two arrays, got ${typeof inputs} ${typeof patterns}`);
    }

    if (patterns.length === 0) {
      return inputs;
    }

    const isFirstPatternNegated = patterns[0][0] === '!';
    patterns = patterns.map(pattern => makeRegexp(pattern, options));
    const result = [];

    for (const input of inputs) {
      // If first pattern is negated we include everything to match user expectation.
      let matches = isFirstPatternNegated;

      for (const pattern of patterns) {
        if (pattern.test(input)) {
          matches = !pattern.negated;
        }
      }

      if (matches) {
        result.push(input);
      }
    }

    return result;
  };

  var isMatch = (input, pattern, options) => {
    const inputArray = Array.isArray(input) ? input : [input];
    const patternArray = Array.isArray(pattern) ? pattern : [pattern];
    return inputArray.some(input => {
      return patternArray.every(pattern => {
        const regexp = makeRegexp(pattern, options);
        const matches = regexp.test(input);
        return regexp.negated ? !matches : matches;
      });
    });
  };
  matcher.isMatch = isMatch;

  /**
   * check-types-mini
   * Check the types of your options object's values after user has customised them
   * Version: 5.7.65
   * Author: Roy Revelt, Codsen Ltd
   * License: MIT
   * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/check-types-mini
   */

  function checkTypesMini(obj, ref, originalOptions, shouldWeCheckTheOpts = true) {
    const hasKey = Object.prototype.hasOwnProperty;

    function existy(something) {
      return something != null;
    }

    function isObj(something) {
      return typeDetect(something) === "Object";
    }

    function pullAllWithGlob(originalInput, toBeRemoved) {
      toBeRemoved = arrayiffyString(toBeRemoved);
      return Array.from(originalInput).filter(originalVal => !toBeRemoved.some(remVal => matcher.isMatch(originalVal, remVal, {
        caseSensitive: true
      })));
    }

    const NAMESFORANYTYPE = ["any", "anything", "every", "everything", "all", "whatever", "whatevs"];
    const isArr = Array.isArray;

    if (!existy(obj)) {
      throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");
    }

    const defaults = {
      ignoreKeys: [],
      ignorePaths: [],
      acceptArrays: false,
      acceptArraysIgnore: [],
      enforceStrictKeyset: true,
      schema: {},
      msg: "check-types-mini",
      optsVarName: "opts"
    };
    let opts;

    if (existy(originalOptions) && isObj(originalOptions)) {
      opts = { ...defaults,
        ...originalOptions
      };
    } else {
      opts = { ...defaults
      };
    }

    if (!existy(opts.ignoreKeys) || !opts.ignoreKeys) {
      opts.ignoreKeys = [];
    } else {
      opts.ignoreKeys = arrayiffyString(opts.ignoreKeys);
    }

    if (!existy(opts.ignorePaths) || !opts.ignorePaths) {
      opts.ignorePaths = [];
    } else {
      opts.ignorePaths = arrayiffyString(opts.ignorePaths);
    }

    if (!existy(opts.acceptArraysIgnore) || !opts.acceptArraysIgnore) {
      opts.acceptArraysIgnore = [];
    } else {
      opts.acceptArraysIgnore = arrayiffyString(opts.acceptArraysIgnore);
    }

    opts.msg = typeof opts.msg === "string" ? opts.msg.trim() : opts.msg;

    if (opts.msg[opts.msg.length - 1] === ":") {
      opts.msg = opts.msg.slice(0, opts.msg.length - 1).trim();
    }

    if (opts.schema) {
      Object.keys(opts.schema).forEach(oneKey => {
        if (isObj(opts.schema[oneKey])) {
          const tempObj = {};
          astMonkeyTraverse(opts.schema[oneKey], (key, val, innerObj) => {
            const current = val !== undefined ? val : key;

            if (!isArr(current) && !isObj(current)) {
              tempObj[`${oneKey}.${innerObj.path}`] = current;
            }

            return current;
          });
          delete opts.schema[oneKey];
          opts.schema = Object.assign(opts.schema, tempObj);
        }
      });
      Object.keys(opts.schema).forEach(oneKey => {
        if (!isArr(opts.schema[oneKey])) {
          opts.schema[oneKey] = [opts.schema[oneKey]];
        }

        opts.schema[oneKey] = opts.schema[oneKey].map(String).map(el => el.toLowerCase()).map(el => el.trim());
      });
    }

    if (!existy(ref)) {
      ref = {};
    }

    if (shouldWeCheckTheOpts) {
      checkTypesMini(opts, defaults, {
        enforceStrictKeyset: false
      }, false);
    }

    if (opts.enforceStrictKeyset) {
      if (existy(opts.schema) && Object.keys(opts.schema).length > 0) {
        if (pullAllWithGlob(lodash_pullall(Object.keys(obj), Object.keys(ref).concat(Object.keys(opts.schema))), opts.ignoreKeys).length !== 0) {
          const keys = lodash_pullall(Object.keys(obj), Object.keys(ref).concat(Object.keys(opts.schema)));
          throw new TypeError(`${opts.msg}: ${opts.optsVarName}.enforceStrictKeyset is on and the following key${keys.length > 1 ? "s" : ""} ${keys.length > 1 ? "are" : "is"} not covered by schema and/or reference objects: ${keys.join(", ")}`);
        }
      } else if (existy(ref) && Object.keys(ref).length > 0) {
        if (pullAllWithGlob(lodash_pullall(Object.keys(obj), Object.keys(ref)), opts.ignoreKeys).length !== 0) {
          const keys = lodash_pullall(Object.keys(obj), Object.keys(ref));
          throw new TypeError(`${opts.msg}: The input object has key${keys.length > 1 ? "s" : ""} which ${keys.length > 1 ? "are" : "is"} not covered by the reference object: ${keys.join(", ")}`);
        } else if (pullAllWithGlob(lodash_pullall(Object.keys(ref), Object.keys(obj)), opts.ignoreKeys).length !== 0) {
          const keys = lodash_pullall(Object.keys(ref), Object.keys(obj));
          throw new TypeError(`${opts.msg}: The reference object has key${keys.length > 1 ? "s" : ""} which ${keys.length > 1 ? "are" : "is"} not present in the input object: ${keys.join(", ")}`);
        }
      } else {
        throw new TypeError(`${opts.msg}: Both ${opts.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);
      }
    }

    const ignoredPathsArr = [];
    astMonkeyTraverse(obj, (key, val, innerObj) => {
      let current = val;
      let objKey = key;

      if (innerObj.parentType === "array") {
        objKey = undefined;
        current = key;
      }

      if (isArr(ignoredPathsArr) && ignoredPathsArr.length && ignoredPathsArr.some(path => innerObj.path.startsWith(path))) {
        return current;
      }

      if (objKey && opts.ignoreKeys.some(oneOfKeysToIgnore => matcher.isMatch(objKey, oneOfKeysToIgnore))) {
        return current;
      }

      if (opts.ignorePaths.some(oneOfPathsToIgnore => matcher.isMatch(innerObj.path, oneOfPathsToIgnore))) {
        return current;
      }

      const isNotAnArrayChild = !(!isObj(current) && !isArr(current) && isArr(innerObj.parent));
      let optsSchemaHasThisPathDefined = false;

      if (isObj(opts.schema) && hasKey.call(opts.schema, objectPath.get(innerObj.path))) {
        optsSchemaHasThisPathDefined = true;
      }

      let refHasThisPathDefined = false;

      if (isObj(ref) && objectPath.has(ref, objectPath.get(innerObj.path))) {
        refHasThisPathDefined = true;
      }

      if (opts.enforceStrictKeyset && isNotAnArrayChild && !optsSchemaHasThisPathDefined && !refHasThisPathDefined) {
        throw new TypeError(`${opts.msg}: ${opts.optsVarName}.${innerObj.path} is neither covered by reference object (second input argument), nor ${opts.optsVarName}.schema! To stop this error, turn off ${opts.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${opts.optsVarName}.schema).\n\nDebug info:\n
obj = ${JSON.stringify(obj, null, 4)}\n
ref = ${JSON.stringify(ref, null, 4)}\n
innerObj = ${JSON.stringify(innerObj, null, 4)}\n
opts = ${JSON.stringify(opts, null, 4)}\n
current = ${JSON.stringify(current, null, 4)}\n\n`);
      } else if (optsSchemaHasThisPathDefined) {
        const currentKeysSchema = arrayiffyString(opts.schema[innerObj.path]).map(String).map(el => el.toLowerCase());
        objectPath.set(opts.schema, innerObj.path, currentKeysSchema);

        if (!lodash_intersection(currentKeysSchema, NAMESFORANYTYPE).length) {
          if (current !== true && current !== false && !currentKeysSchema.includes(typeDetect(current).toLowerCase()) || (current === true || current === false) && !currentKeysSchema.includes(String(current)) && !currentKeysSchema.includes("boolean")) {
            if (isArr(current) && opts.acceptArrays) {
              for (let i = 0, len = current.length; i < len; i++) {
                if (!currentKeysSchema.includes(typeDetect(current[i]).toLowerCase())) {
                  throw new TypeError(`${opts.msg}: ${opts.optsVarName}.${innerObj.path}.${i}, the ${i}th element (equal to ${JSON.stringify(current[i], null, 0)}) is of a type ${typeDetect(current[i]).toLowerCase()}, but only the following are allowed by the ${opts.optsVarName}.schema: ${currentKeysSchema.join(", ")}`);
                }
              }
            } else {
              throw new TypeError(`${opts.msg}: ${opts.optsVarName}.${innerObj.path} was customised to ${typeDetect(current) !== "string" ? '"' : ""}${JSON.stringify(current, null, 0)}${typeDetect(current) !== "string" ? '"' : ""} (type: ${typeDetect(current).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(currentKeysSchema, null, 0)})`);
            }
          }
        } else {
          ignoredPathsArr.push(innerObj.path);
        }
      } else if (refHasThisPathDefined) {
        const compareTo = objectPath.get(ref, innerObj.path);

        if (opts.acceptArrays && isArr(current) && !opts.acceptArraysIgnore.includes(key)) {
          const allMatch = current.every(el => typeDetect(el).toLowerCase() === typeDetect(ref[key]).toLowerCase());

          if (!allMatch) {
            throw new TypeError(`${opts.msg}: ${opts.optsVarName}.${innerObj.path} was customised to be array, but not all of its elements are ${typeDetect(ref[key]).toLowerCase()}-type`);
          }
        } else if (typeDetect(current) !== typeDetect(compareTo)) {
          throw new TypeError(`${opts.msg}: ${opts.optsVarName}.${innerObj.path} was customised to ${typeDetect(current).toLowerCase() === "string" ? "" : '"'}${JSON.stringify(current, null, 0)}${typeDetect(current).toLowerCase() === "string" ? "" : '"'} which is not ${typeDetect(compareTo).toLowerCase()} but ${typeDetect(current).toLowerCase()}`);
        }
      }

      return current;
    });
  }

  function externalApi(obj, ref, originalOptions) {
    return checkTypesMini(obj, ref, originalOptions);
  }

  /**
   * ast-contains-only-empty-space
   * Returns Boolean depending if passed AST contain only empty space
   * Version: 1.9.9
   * Author: Roy Revelt, Codsen Ltd
   * License: MIT
   * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-contains-only-empty-space
   */

  function containsOnlyEmptySpace(input) {
    if (typeof input === "string") {
      return !input.trim();
    }

    if (!["object", "string"].includes(typeof input) || !input) {
      return false;
    }

    let found = true;
    input = astMonkeyTraverse(input, (key, val, innerObj, stop) => {
      const current = val !== undefined ? val : key;

      if (typeof current === "string" && current.trim()) {
        found = false;
        stop.now = true;
      }

      return current;
    });
    return found;
  }

  /**
   * ast-compare
   * Compare anything: AST, objects, arrays, strings and nested thereof
   * Version: 1.13.10
   * Author: Roy Revelt, Codsen Ltd
   * License: MIT
   * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-compare
   */
  const isArr = Array.isArray;

  function existy(x) {
    return x != null;
  }

  function isObj$1(something) {
    return something && typeof something === "object" && !Array.isArray(something);
  }

  function isStr(something) {
    return typeof something === "string";
  }

  function isNum(something) {
    return typeof something === "number";
  }

  function isBool(something) {
    return typeof something === "boolean";
  }

  function isNull(something) {
    return something === null;
  }

  function isBlank(something) {
    if (isObj$1(something)) {
      return Object.keys(something).length === 0;
    }

    if (isArr(something) || isStr(something)) {
      return something.length === 0;
    }

    return false;
  }

  function isTheTypeLegit(something) {
    return isObj$1(something) || isStr(something) || isNum(something) || isBool(something) || isArr(something) || isNull(something);
  }

  function compare(b, s, originalOpts) {
    if (b === undefined) {
      throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");
    }

    if (s === undefined) {
      throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");
    }

    if (existy(b) && !isTheTypeLegit(b)) {
      throw new TypeError(`ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ${typeDetect(b)}, equal to: ${JSON.stringify(b, null, 4)}`);
    }

    if (existy(s) && !isTheTypeLegit(s)) {
      throw new TypeError(`ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ${typeDetect(s)}, equal to: ${JSON.stringify(s, null, 4)}`);
    }

    if (existy(originalOpts) && !isObj$1(originalOpts)) {
      throw new TypeError(`ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ${typeDetect(originalOpts)} and equal to: ${JSON.stringify(originalOpts, null, 4)}`);
    }

    let sKeys;
    let bKeys;
    let found;
    let bOffset = 0;
    const defaults = {
      hungryForWhitespace: false,
      matchStrictly: false,
      verboseWhenMismatches: false,
      useWildcards: false
    };
    const opts = { ...defaults,
      ...originalOpts
    };

    if (opts.hungryForWhitespace && opts.matchStrictly && isObj$1(b) && containsOnlyEmptySpace(b) && isObj$1(s) && !Object.keys(s).length) {
      return true;
    }

    if ((!opts.hungryForWhitespace || opts.hungryForWhitespace && !containsOnlyEmptySpace(b) && containsOnlyEmptySpace(s)) && isObj$1(b) && Object.keys(b).length !== 0 && isObj$1(s) && Object.keys(s).length === 0 || typeDetect(b) !== typeDetect(s) && (!opts.hungryForWhitespace || opts.hungryForWhitespace && !containsOnlyEmptySpace(b))) {
      return false;
    }

    if (isStr(b) && isStr(s)) {
      if (opts.hungryForWhitespace && containsOnlyEmptySpace(b) && containsOnlyEmptySpace(s)) {
        return true;
      }

      if (opts.verboseWhenMismatches) {
        return b === s ? true : `Given string ${s} is not matched! We have ${b} on the other end.`;
      }

      return opts.useWildcards ? matcher.isMatch(b, s, {
        caseSensitive: true
      }) : b === s;
    }

    if (isArr(b) && isArr(s)) {
      if (opts.hungryForWhitespace && containsOnlyEmptySpace(s) && (!opts.matchStrictly || opts.matchStrictly && b.length === s.length)) {
        return true;
      }

      if (!opts.hungryForWhitespace && s.length > b.length || opts.matchStrictly && s.length !== b.length) {
        if (!opts.verboseWhenMismatches) {
          return false;
        }

        return `The length of a given array, ${JSON.stringify(s, null, 4)} is ${s.length} but the length of an array on the other end, ${JSON.stringify(b, null, 4)} is ${b.length}`;
      }

      if (s.length === 0) {
        if (b.length === 0) {
          return true;
        }

        if (opts.verboseWhenMismatches) {
          return `The given array has no elements, but the array on the other end, ${JSON.stringify(b, null, 4)} does have some`;
        }

        return false;
      }

      for (let i = 0, sLen = s.length; i < sLen; i++) {
        found = false;

        for (let j = bOffset, bLen = b.length; j < bLen; j++) {
          bOffset += 1;

          if (compare(b[j], s[i], opts) === true) {
            found = true;
            break;
          }
        }

        if (!found) {
          if (!opts.verboseWhenMismatches) {
            return false;
          }

          return `The given array ${JSON.stringify(s, null, 4)} is not a subset of an array on the other end, ${JSON.stringify(b, null, 4)}`;
        }
      }
    } else if (isObj$1(b) && isObj$1(s)) {
      sKeys = new Set(Object.keys(s));
      bKeys = new Set(Object.keys(b));

      if (opts.matchStrictly && sKeys.size !== bKeys.size) {
        if (!opts.verboseWhenMismatches) {
          return false;
        }

        const uniqueKeysOnS = new Set([...sKeys].filter(x => !bKeys.has(x)));
        const sMessage = uniqueKeysOnS.size ? ` First object has unique keys: ${JSON.stringify(uniqueKeysOnS, null, 4)}.` : "";
        const uniqueKeysOnB = new Set([...bKeys].filter(x => !sKeys.has(x)));
        const bMessage = uniqueKeysOnB.size ? ` Second object has unique keys:
        ${JSON.stringify(uniqueKeysOnB, null, 4)}.` : "";
        return `When matching strictly, we found that both objects have different amount of keys.${sMessage}${bMessage}`;
      }

      for (const sKey of sKeys) {
        if (!Object.prototype.hasOwnProperty.call(b, sKey)) {
          if (!opts.useWildcards || opts.useWildcards && !sKey.includes("*")) {
            if (!opts.verboseWhenMismatches) {
              return false;
            }

            return `The given object has key "${sKey}" which the other-one does not have.`;
          }

          if (Object.keys(b).some(bKey => matcher.isMatch(bKey, sKey, {
            caseSensitive: true
          }))) {
            return true;
          }

          if (!opts.verboseWhenMismatches) {
            return false;
          }

          return `The given object has key "${sKey}" which the other-one does not have.`;
        }

        if (existy(b[sKey]) && typeDetect(b[sKey]) !== typeDetect(s[sKey])) {
          if (!(containsOnlyEmptySpace(b[sKey]) && containsOnlyEmptySpace(s[sKey]) && opts.hungryForWhitespace)) {
            if (!opts.verboseWhenMismatches) {
              return false;
            }

            return `The given key ${sKey} is of a different type on both objects. On the first-one, it's ${typeDetect(s[sKey])}, on the second-one, it's ${typeDetect(b[sKey])}`;
          }
        } else if (compare(b[sKey], s[sKey], opts) !== true) {
          if (!opts.verboseWhenMismatches) {
            return false;
          }

          return `The given piece ${JSON.stringify(s[sKey], null, 4)} and ${JSON.stringify(b[sKey], null, 4)} don't match.`;
        }
      }
    } else {
      if (opts.hungryForWhitespace && containsOnlyEmptySpace(b) && containsOnlyEmptySpace(s) && (!opts.matchStrictly || opts.matchStrictly && isBlank(s))) {
        return true;
      }

      return b === s;
    }

    return true;
  }

  /**
   * ast-monkey
   * Traverse and edit AST's (like parsed HTML or anything nested)
   * Version: 7.11.13
   * Author: Roy Revelt, Codsen Ltd
   * License: MIT
   * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey
   */

  function existy$1(x) {
    return x != null;
  }

  function notUndef(x) {
    return x !== undefined;
  }

  function compareIsEqual(a, b) {
    if (typeof a !== typeof b) {
      return false;
    }

    return compare(a, b, {
      matchStrictly: true,
      useWildcards: true
    });
  }

  function isObj$2(something) {
    return something && typeof something === "object" && !Array.isArray(something);
  }

  function monkey(originalInput, originalOpts) {
    if (!existy$1(originalInput)) {
      throw new Error("ast-monkey/main.js/monkey(): [THROW_ID_01] Please provide an input");
    }

    const opts = {
      key: null,
      val: undefined,
      ...originalOpts
    };
    const data = {
      count: 0,
      gatherPath: [],
      finding: null
    };
    const findings = [];
    let ko = false;
    let vo = false;

    if (existy$1(opts.key) && !notUndef(opts.val)) {
      ko = true;
    }

    if (!existy$1(opts.key) && notUndef(opts.val)) {
      vo = true;
    }

    let input = originalInput;

    if (opts.mode === "arrayFirstOnly" && Array.isArray(input) && input.length > 0) {
      input = [input[0]];
    }

    input = astMonkeyTraverse(input, (key, val, innerObj) => {
      let temp;
      data.count += 1;
      data.gatherPath.length = innerObj.depth;
      data.gatherPath.push(data.count);

      if (opts.mode === "get") {
        if (data.count === opts.index) {
          if (notUndef(val)) {
            data.finding = {};
            data.finding[key] = val;
          } else {
            data.finding = key;
          }
        }
      } else if (opts.mode === "find" || opts.mode === "del") {
        if ((opts.only === "any" || opts.only === "array" && val === undefined || opts.only === "object" && val !== undefined) && (ko && compareIsEqual(key, opts.key) || vo && compareIsEqual(val, opts.val) || !ko && !vo && compareIsEqual(key, opts.key) && compareIsEqual(val, opts.val))) {
          if (opts.mode === "find") {
            temp = {};
            temp.index = data.count;
            temp.key = key;
            temp.val = val;
            temp.path = [...data.gatherPath];
            findings.push(temp);
          } else {
            return NaN;
          }
        } else {
          return val !== undefined ? val : key;
        }
      }

      if (opts.mode === "set" && data.count === opts.index) {
        return opts.val;
      }

      if (opts.mode === "drop" && data.count === opts.index) {
        return NaN;
      }

      if (opts.mode === "arrayFirstOnly") {
        if (notUndef(val) && Array.isArray(val)) {
          return [val[0]];
        }

        if (existy$1(key) && Array.isArray(key)) {
          return [key[0]];
        }

        return val !== undefined ? val : key;
      }

      return val !== undefined ? val : key;
    });

    if (opts.mode === "get") {
      return data.finding;
    }

    if (opts.mode === "find") {
      return findings.length > 0 ? findings : null;
    }

    return input;
  }

  function set(input, originalOpts) {
    if (!existy$1(input)) {
      throw new Error("ast-monkey/main.js/set(): [THROW_ID_12] Please provide the input");
    }

    if (!isObj$2(originalOpts)) {
      throw new Error("ast-monkey/main.js/set(): [THROW_ID_13] Please provide the input");
    }

    if (!existy$1(originalOpts.key) && !notUndef(originalOpts.val)) {
      throw new Error("ast-monkey/main.js/set(): [THROW_ID_14] Please provide opts.val");
    }

    if (!existy$1(originalOpts.index)) {
      throw new Error("ast-monkey/main.js/set(): [THROW_ID_15] Please provide opts.index");
    }

    const opts = { ...originalOpts
    };

    if (typeof opts.index === "string" && /^\d*$/.test(opts.index)) {
      opts.index = parseInt(opts.index, 10);
    } else if (!Number.isInteger(opts.index)) {
      throw new Error(`ast-monkey/main.js/set(): [THROW_ID_17] opts.index must be a natural number. It was given as: ${opts.index}`);
    }

    if (existy$1(opts.key) && !notUndef(opts.val)) {
      opts.val = opts.key;
    }

    externalApi(opts, null, {
      schema: {
        key: [null, "string"],
        val: "any",
        index: "number"
      },
      msg: "ast-monkey/set(): [THROW_ID_18*]"
    });
    return monkey(input, { ...opts,
      mode: "set"
    });
  }

  function isStr$1(something) {
    return typeof something === "string";
  }

  function mandatory(i) {
    throw new Error("string-convert-indexes: [THROW_ID_01*] Missing ".concat(i, "th parameter!"));
  }

  function prep(something) {
    if (typeof something === "string") {
      return parseInt(something, 10);
    }

    return something;
  }

  function customSort(arr) {
    return arr.sort(function (a, b) {
      if (prep(a.val) < prep(b.val)) {
        return -1;
      }

      if (prep(a.val) > prep(b.val)) {
        return 1;
      } // val's must be equal


      return 0;
    });
  } // inner function, common for both external API's methods that does the job:


  function strConvertIndexes(mode, str, indexes, originalOpts) {
    //
    // insurance
    // ---------
    if (!isStr$1(str) || str.length === 0) {
      throw new TypeError("string-convert-indexes: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(_typeof(str), ", equal to:\n").concat(str));
    }

    if (originalOpts && _typeof(originalOpts) !== "object") {
      throw new TypeError("string-convert-indexes: [THROW_ID_03] the third input argument, Optional Options Object, must be a plain object! Currently it's: ".concat(_typeof(originalOpts), ", equal to:\n").concat(originalOpts));
    } // prep the opts


    var defaults = {
      throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString: true
    };

    var opts = _objectSpread2(_objectSpread2({}, defaults), originalOpts); // this simple counter will later act as the "address" to each finding and will
    // be used in set() method to convert the value at this "address" within tree:


    var data = {
      id: 0
    }; // during the first traversal we'll gather the list of natural number values
    // and their "addresses", id numbers used internally within ast-monkey.

    var toDoList = []; // STEP 1.
    // ---------------------------------------------------------------------------
    // if it's a number, there's no need to traverse:

    if (Number.isInteger(indexes) && indexes >= 0 || /^\d*$/.test(indexes)) {
      toDoList = [{
        id: 1,
        val: indexes
      }];
    } else {
      // traverse the indexes and compile the sorted list of them, along with their "addresses",
      // or id numbers, by which they can later be called using "ast-monkey":
      // eslint-disable-next-line no-param-reassign
      indexes = astMonkeyTraverse(indexes, function (key, val) {
        data.id += 1;
        data.val = val !== undefined ? val : key;

        if (Number.isInteger(data.val) && data.val >= 0 || /^\d*$/.test(data.val)) {
          toDoList.push(_objectSpread2({}, data));
        }

        return data.val;
      });
    } // STEP 2.
    // ---------------------------------------------------------------------------
    // sort the toDoList by string indexes, that is, toDoList[?].val, and account
    // for cases when the value is numeric string:
    // if there's nothing to work upon, bail:


    if (toDoList.length === 0) {
      return indexes;
    }

    toDoList = customSort(toDoList); // STEP 3.
    // ---------------------------------------------------------------------------
    // traverse the input string and covert all indexes:
    //
    // astral chars have first character: from 55296 to 56319
    // and second character: from 56320 to 57343

    var unicodeIndex = -1;
    var surrogateDetected = false;

    for (var i = 0, len = str.length; i <= len; i++) {
      //
      //    PART 1. Bean-counting
      //    =====================
      //
      // so the JS native index is "i"
      // we just need to keep track of Unicode character count
      if (str[i] === undefined) {
        // this means it's the first character outside of the input characters.
        // we can convert it nonetheless.
        unicodeIndex += 1;
      } else if (str[i].charCodeAt(0) >= 55296 && str[i].charCodeAt(0) <= 57343) {
        // if it's one of surrogate pair characters:
        // if there is no preceding surrogate:
        if (surrogateDetected !== true) {
          unicodeIndex += 1;
          surrogateDetected = true;
        } else {
          // if there is preceding surrogate - don't bump the Unicode char counter
          // but reset the flag, because astral symbols come in pairs
          surrogateDetected = false;
        }
      } else {
        // not surrogate:
        // bump the counter:
        unicodeIndex += 1; // reset the flag:

        if (surrogateDetected === true) {
          surrogateDetected = false;
        }
      } //       PART 2. Action
      //       ==============
      //
      // take the first object from toDoList and convert its index


      if (mode === "n") {
        // native to Unicode conversion
        // there can be multiple values in the toDoList with the same index that
        // needs to be converting, thus we need to loop the toDoList
        for (var y = 0, leny = toDoList.length; y < leny; y++) {
          if (prep(toDoList[y].val) === i) {
            toDoList[y].res = isStr$1(toDoList[y].val) ? String(unicodeIndex) : unicodeIndex;
          } else if (prep(toDoList[y].val) > i) {
            break; // since toDoList is sorted, all other values will be not smaller too
          }
        }
      } else {
        // Unicode to native conversion
        // same start, loop the toDoList
        for (var _y = 0, _leny = toDoList.length; _y < _leny; _y++) {
          // this second condition prevents from the event happening twice, on
          // each of the surrogates, and on that second occurence overwriting the
          // index "i" with "i+1" which leads to an error. Astral character at
          // zero index position would get converted to index native index one.
          if (prep(toDoList[_y].val) === unicodeIndex && toDoList[_y].res === undefined) {
            toDoList[_y].res = isStr$1(toDoList[_y].val) ? String(i) : i;
          } else if (prep(toDoList[_y].val) > unicodeIndex) {
            break; // since toDoList is sorted, all other values will be not smaller too
          }
        }
      } // if it's the reference string's last character being traversed, check,
      // does its index cover the largest of the toDoList index (last element),
      // because if it does not, this means somebody is trying to convert the index
      // without giving enough characters in the reference string to calculate the
      // conversion:


      if (opts.throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString && i === len - 1 && (mode === "n" && prep(toDoList[toDoList.length - 1].val) > len || mode === "u" && prep(toDoList[toDoList.length - 1].val) > unicodeIndex + 1)) {
        if (mode === "n") {
          throw new Error("string-convert-indexes: [THROW_ID_05] the reference string has native JS string indexes going only upto ".concat(i, ", but you are trying to convert an index larger than that, ").concat(prep(toDoList[toDoList.length - 1].val)));
        } else {
          throw new Error("string-convert-indexes: [THROW_ID_06] the reference string has Unicode character count going only upto ".concat(unicodeIndex, ", but you are trying to convert an index larger than that, ").concat(prep(toDoList[toDoList.length - 1].val)));
        }
      }
    } //       PART 3. Result
    //       ==============


    if (Number.isInteger(indexes) && indexes >= 0 || /^\d*$/.test(indexes)) {
      return toDoList[0].res !== undefined ? toDoList[0].res : toDoList[0].val;
    } // The result's base is original indexes from the input. Clone it.


    var res = Array.from(indexes); // backwards-loop the toDoList for efficiency, mutate the res on each step:

    for (var z = toDoList.length; z--;) {
      // we will use the "set" method from ast-monkey, which sets the value by id number:
      res = set(res, {
        index: toDoList[z].id,
        val: toDoList[z].res !== undefined ? toDoList[z].res : toDoList[z].val
      });
    }

    return res;
  }

  function nativeToUnicode() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mandatory(1);
    var indexes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mandatory(2);
    var opts = arguments.length > 2 ? arguments[2] : undefined;
    return strConvertIndexes("n", str, indexes, opts);
  }

  function unicodeToNative() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mandatory(1);
    var indexes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mandatory(2);
    var opts = arguments.length > 2 ? arguments[2] : undefined;
    return strConvertIndexes("u", str, indexes, opts);
  }

  exports.nativeToUnicode = nativeToUnicode;
  exports.unicodeToNative = unicodeToNative;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
