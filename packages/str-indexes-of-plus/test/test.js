import tap from "tap";
import { strIndexesOfPlus } from "../dist/str-indexes-of-plus.esm";

// -----------------------------------------------------------------------------
// group 01. various throws
// -----------------------------------------------------------------------------

tap.test("01 - throws when the first argument is not string", (t) => {
  t.throws(
    () => {
      strIndexesOfPlus(1);
    },
    /first input argument must be a string/,
    "01"
  );
  t.end();
});

tap.test("02 - throws when the second argument is not string", (t) => {
  t.throws(
    () => {
      strIndexesOfPlus("a", 1);
    },
    /second input argument/,
    "02"
  );
  t.end();
});

tap.test("03 - throws when the third argument is not natural number", (t) => {
  t.throws(
    () => {
      strIndexesOfPlus("a", "a", "a");
    },
    /third input argument must be a natural number/,
    "03.01"
  );
  t.doesNotThrow(() => {
    strIndexesOfPlus("a", "a", "1");
  }, "03.02");
  t.doesNotThrow(() => {
    strIndexesOfPlus("a", "a", 1);
  }, "03.03");
  t.end();
});

// -----------------------------------------------------------------------------
// 02. normal use, no third arg in the input
// -----------------------------------------------------------------------------

tap.test("05 - finds one char", (t) => {
  t.strictSame(strIndexesOfPlus("a", "a"), [0], "05.01");
  t.strictSame(strIndexesOfPlus("ab", "a"), [0], "05.02");
  t.strictSame(strIndexesOfPlus("ab", "b"), [1], "05.03");
  t.strictSame(strIndexesOfPlus("abc", "a"), [0], "05.04");
  t.strictSame(strIndexesOfPlus("abc", "b"), [1], "05.05");
  t.strictSame(strIndexesOfPlus("abc", "c"), [2], "05.06");
  t.strictSame(strIndexesOfPlus("aaa", "a"), [0, 1, 2], "05.07");
  t.strictSame(strIndexesOfPlus("a\u0000a", "a"), [0, 2], "05.08");
  t.end();
});

tap.test("06 - finds one emoji", (t) => {
  t.strictSame(strIndexesOfPlus("🦄", "🦄"), [0], "06.01");
  t.strictSame(strIndexesOfPlus("🦄b", "🦄"), [0], "06.02");
  t.strictSame(strIndexesOfPlus("a🦄", "🦄"), [1], "06.03");
  t.strictSame(strIndexesOfPlus("🦄bc", "🦄"), [0], "06.04");
  t.strictSame(strIndexesOfPlus("a🦄c", "🦄"), [1], "06.05");
  t.strictSame(strIndexesOfPlus("ab🦄", "🦄"), [2], "06.06");
  t.end();
});

tap.test("07 - does not find a char or emoji", (t) => {
  t.strictSame(strIndexesOfPlus("a", "z"), [], "07.01");
  t.strictSame(strIndexesOfPlus("abcdef", "z"), [], "07.02");
  t.strictSame(strIndexesOfPlus("🦄", "z"), [], "07.03");
  t.strictSame(strIndexesOfPlus("a", "🦄"), [], "07.04");
  t.strictSame(strIndexesOfPlus("abcd🦄f", "z"), [], "07.05");
  t.end();
});

tap.test("08 - finds multiple consecutive", (t) => {
  t.strictSame(strIndexesOfPlus("abcabc", "abc"), [0, 3], "08.01");
  t.strictSame(strIndexesOfPlus("🦄🐴🐎🦄🐴🐎", "🦄🐴🐎"), [0, 3], "08.02");
  t.end();
});

tap.test("09 - finds multiple with space in between, first char hit", (t) => {
  t.strictSame(strIndexesOfPlus("abczabc", "abc"), [0, 4], "09.01");
  t.strictSame(strIndexesOfPlus("🦄🐴🐎z🦄🐴🐎", "🦄🐴🐎"), [0, 4], "09.02");
  t.end();
});

tap.test(
  "10 - finds multiple with space in between, first char is not hit",
  (t) => {
    t.strictSame(strIndexesOfPlus("zabczabc", "abc"), [1, 5], "10.01");
    t.strictSame(strIndexesOfPlus("zabczabcyyyyy", "abc"), [1, 5], "10.02");
    t.strictSame(strIndexesOfPlus("z🦄🐴🐎z🦄🐴🐎", "🦄🐴🐎"), [1, 5], "10.03");
    t.strictSame(
      strIndexesOfPlus("z🦄🐴🐎z🦄🐴🐎yyyyy", "🦄🐴🐎"),
      [1, 5],
      "10.04"
    );
    t.end();
  }
);

// -----------------------------------------------------------------------------
// 03. padding offset
// -----------------------------------------------------------------------------

tap.test("11 - finds multiple consecutive, text, offset", (t) => {
  t.strictSame(strIndexesOfPlus("abcabc", "abc", 0), [0, 3], "11.01");
  t.strictSame(strIndexesOfPlus("abcabc", "abc", "0"), [0, 3], "11.02");
  t.strictSame(strIndexesOfPlus("abcabc", "abc", 1), [3], "11.03");
  t.strictSame(strIndexesOfPlus("abcabc", "abc", "1"), [3], "11.04");
  t.strictSame(strIndexesOfPlus("abcabc", "abc", 999), [], "11.05");
  t.strictSame(strIndexesOfPlus("abcabc", "abc", "999"), [], "11.06");
  t.end();
});

tap.test("12 - finds multiple consecutive, emoji, offset", (t) => {
  t.strictSame(strIndexesOfPlus("🦄🐴🐎🦄🐴🐎", "🦄🐴🐎", 0), [0, 3], "12.01");
  t.strictSame(
    strIndexesOfPlus("🦄🐴🐎🦄🐴🐎", "🦄🐴🐎", "0"),
    [0, 3],
    "12.02"
  );
  t.strictSame(strIndexesOfPlus("🦄🐴🐎🦄🐴🐎", "🦄🐴🐎", 1), [3], "12.03");
  t.strictSame(strIndexesOfPlus("🦄🐴🐎🦄🐴🐎", "🦄🐴🐎", "1"), [3], "12.04");
  t.strictSame(strIndexesOfPlus("🦄🐴🐎🦄🐴🐎", "🦄🐴🐎", 999), [], "12.05");
  t.strictSame(strIndexesOfPlus("🦄🐴🐎🦄🐴🐎", "🦄🐴🐎", "999"), [], "12.06");
  t.end();
});

tap.test(
  "13 - finds multiple with space in between, first char hit, offset",
  (t) => {
    t.strictSame(strIndexesOfPlus("abczabc", "abc", 0), [0, 4], "13.01");
    t.strictSame(strIndexesOfPlus("abczabc", "abc", 3), [4], "13.02");
    t.strictSame(strIndexesOfPlus("abczabc", "abc", 4), [4], "13.03");
    t.strictSame(strIndexesOfPlus("abczabc", "abc", 5), [], "13.04");
    t.strictSame(
      strIndexesOfPlus("🦄🐴🐎z🦄🐴🐎", "🦄🐴🐎", 0),
      [0, 4],
      "13.05"
    );
    t.strictSame(strIndexesOfPlus("🦄🐴🐎z🦄🐴🐎", "🦄🐴🐎", 3), [4], "13.06");
    t.strictSame(strIndexesOfPlus("🦄🐴🐎z🦄🐴🐎", "🦄🐴🐎", 4), [4], "13.07");
    t.strictSame(strIndexesOfPlus("🦄🐴🐎z🦄🐴🐎", "🦄🐴🐎", 5), [], "13.08");
    t.end();
  }
);

tap.test(
  "14 - finds multiple with space in between, first char is not hit, offset",
  (t) => {
    t.strictSame(strIndexesOfPlus("zabczabc", "abc", 0), [1, 5], "14.01");
    t.strictSame(strIndexesOfPlus("zabczabc", "abc", "0"), [1, 5], "14.02");
    t.strictSame(strIndexesOfPlus("zabczabc", "abc", 1), [1, 5], "14.03");
    t.strictSame(strIndexesOfPlus("zabczabc", "abc", "1"), [1, 5], "14.04");
    t.strictSame(strIndexesOfPlus("zabczabc", "abc", 2), [5], "14.05");
    t.strictSame(strIndexesOfPlus("zabczabc", "abc", "2"), [5], "14.06");
    t.strictSame(strIndexesOfPlus("babababa", "ab"), [1, 3, 5], "14.07");
    t.strictSame(strIndexesOfPlus("babababa", "ab", 2), [3, 5], "14.08");
    t.strictSame(strIndexesOfPlus("babababa", "ab", "2"), [3, 5], "14.09");
    t.end();
  }
);

// -----------------------------------------------------------------------------
// 04. real text with linebreaks etc
// -----------------------------------------------------------------------------

tap.test("15 - finds in real text, no offset", (t) => {
  const text =
    "This is cheeky sentence with a cheeky\nlinebreaks,\ttabs and some <code>HTML</code> tags. Also there's a cheeky emoji 🙊 and cheeky Unicode characters: \u0000\u0001. That's a very cheeky test sentence.";
  t.strictSame(
    strIndexesOfPlus(text, "cheeky"),
    [8, 31, 103, 122, 167],
    "15.01"
  );
  t.strictSame(text.charAt(8), "c", "15.02");
  t.strictSame(text.charAt(31), "c", "15.03");
  t.strictSame(text.charAt(103), "c", "15.04");
  // following two are offset by one, because emoji pushed them by one:
  t.strictSame(text.charAt(123), "c", "15.05");
  t.strictSame(text.charAt(168), "c", "15.06");
  t.end();
});
