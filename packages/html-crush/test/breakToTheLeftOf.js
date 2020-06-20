import tap from "tap";
import { crush as m } from "../dist/html-crush.esm";

// opts.breakToTheLeftOf
// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${34}m${`opts.breakToTheLeftOf`}\u001b[${39}m`} - breaks based on breakpoints (no whitespace involved)`,
  (t) => {
    t.same(
      m(`<m><n><o>`, {
        removeLineBreaks: false,
      }).result,
      `<m><n><o>`,
      "01.01 - no linebreak removal"
    );
    t.same(
      m(`<m><n><o>`, {
        removeLineBreaks: true,
      }).result,
      `<m><n><o>`,
      "01.02 - default line break removal"
    );
    t.same(
      m(`<m><n><o>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<n"],
      }).result,
      `<m>\n<n><o>`,
      "01.03 - break in the middle, once"
    );
    t.same(
      m(`<m><n><o>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<n", "<o"],
      }).result,
      `<m>\n<n>\n<o>`,
      "01.04 - break twice"
    );
    t.same(
      m(`<m><n><o>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<z", "<n", "<o"],
      }).result,
      `<m>\n<n>\n<o>`,
      "01.05 - don't break in front"
    );
    t.same(
      m(`\n   \t   \t   <m><n><o>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<m", "<n", "<o"],
      }).result,
      `<m>\n<n>\n<o>`,
      "01.06 - don't break in front"
    );
    t.same(
      m(`<m><n><o>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<x", "<y", "<z"],
      }).result,
      `<m><n><o>`,
      "01.07"
    );
    t.same(
      m(`<m><n><o>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: [],
      }).result,
      `<m><n><o>`,
      "01.08"
    );
    t.same(
      m(`\n<m>\n  <n>\n  <o>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<x", "<y", "<z"],
      }).result,
      `<m><n><o>`,
      "01.09"
    );
    t.same(
      m(`   \t\n  <m>   <n> \n\t     <o>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: [],
      }).result,
      `<m><n><o>`,
      "01.10"
    );
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${34}m${`opts.breakToTheLeftOf`}\u001b[${39}m`} - breaks based on breakpoints (whitespace involved)`,
  (t) => {
    t.same(
      m(`<a>\n<b><c>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<b"],
      }).result,
      `<a>\n<b><c>`,
      "02.01"
    );
    t.same(
      m(`<a> <b><c>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<b"],
      }).result,
      `<a>\n<b><c>`,
      "02.02"
    );
    t.same(
      m(`<a>  <b><c>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<b"],
      }).result,
      `<a>\n<b><c>`,
      "02.03"
    );
    t.same(
      m(`<a> \n   \t\t\t   \n <b><c>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<b"],
      }).result,
      `<a>\n<b><c>`,
      "02.04"
    );
    t.same(
      m(`<a>\n<b><c>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<b", "<c"],
      }).result,
      `<a>\n<b>\n<c>`,
      "02.05"
    );
    t.same(
      m(`<a> <b><c>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<b", "<c"],
      }).result,
      `<a>\n<b>\n<c>`,
      "02.06"
    );
    t.same(
      m(`<a>  <b><c>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<b", "<c"],
      }).result,
      `<a>\n<b>\n<c>`,
      "02.07"
    );
    t.same(
      m(`<a> \n   \t\t\t   \n <b><c>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<b", "<c"],
      }).result,
      `<a>\n<b>\n<c>`,
      "02.08"
    );
    t.same(
      m(`<a>\n<b><c>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<x", "y"],
      }).result,
      `<a>\n<b><c>`,
      "02.09 - nothing in given breakpoints is useful"
    );
    t.same(
      m(`<m>\n<n><o>`, {
        removeLineBreaks: true,
        breakToTheLeftOf: ["<x", "y"],
      }).result,
      `<m><n><o>`,
      "02.10"
    );
    t.end();
  }
);
