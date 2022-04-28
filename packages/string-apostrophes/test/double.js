import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { convertOne, convertAll } from "../dist/string-apostrophes.esm.js";

const leftSingleQuote = "\u2018";
const rightSingleQuote = "\u2019";
const leftDoubleQuote = "\u201C";
const rightDoubleQuote = "\u201D";
// const singlePrime = "\u2032";
// const doublePrime = "\u2033";

// DOUBLE APOSTROPHES
// -----------------------------------------------------------------------------

test(`01 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - converts quotation marks: +entities`, () => {
  let str = 'this is "citation"';
  let gatheredRes = []
    .concat(
      convertOne(str, {
        convertEntities: true,
        from: 8,
      })
    )
    .concat(
      convertOne(str, {
        convertEntities: true,
        from: 17,
      })
    );
  equal(
    gatheredRes,
    [
      [8, 9, "&ldquo;"],
      [17, 18, "&rdquo;"],
    ],
    "01"
  );
});

test(`02 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - converts quotation marks: -entities`, () => {
  let str = 'this is "citation"';
  let gatheredRes = []
    .concat(
      convertOne(str, {
        convertEntities: false,
        from: 8,
      })
    )
    .concat(
      convertOne(str, {
        convertEntities: false,
        from: 17,
      })
    );
  equal(
    gatheredRes,
    [
      [8, 9, `${leftDoubleQuote}`],
      [17, 18, `${rightDoubleQuote}`],
    ],
    "02"
  );
});

test(`03 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - converts quotation marks: killswitch`, () => {
  let str = 'this is "citation"';
  let gatheredRes = []
    .concat(
      convertOne(str, {
        from: 8,
        convertApostrophes: false,
      })
    )
    .concat(
      convertOne(str, {
        from: 17,
        convertApostrophes: false,
      })
    );
  equal(gatheredRes, [], "03");
});

test(`04 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - exclamation mark`, () => {
  equal(
    convertAll('"What!" he said', {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftDoubleQuote}What!${rightDoubleQuote} he said`,
    "04"
  );
});

test(`05 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - full stop`, () => {
  equal(
    convertAll('"What." he said', {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftDoubleQuote}What.${rightDoubleQuote} he said`,
    "05"
  );
});

test(`06 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - comma`, () => {
  equal(
    convertAll('"What," he said', {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftDoubleQuote}What,${rightDoubleQuote} he said`,
    "06"
  );
});

test(`07 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - semicolon`, () => {
  equal(
    convertAll('"What;" he said', {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftDoubleQuote}What;${rightDoubleQuote} he said`,
    "07"
  );
});

test(`08 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - question mark`, () => {
  equal(
    convertAll('"What?" he said', {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftDoubleQuote}What?${rightDoubleQuote} he said`,
    "08"
  );
});

test(`09 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - exclamation mark`, () => {
  equal(
    convertAll(`'"What!"' he said`, {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftSingleQuote}${leftDoubleQuote}What!${rightDoubleQuote}${rightSingleQuote} he said`,
    "09"
  );
});

test(`10 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - mix of quotes, full stop`, () => {
  equal(
    convertAll(`'"What."' he said`, {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftSingleQuote}${leftDoubleQuote}What.${rightDoubleQuote}${rightSingleQuote} he said`,
    "10"
  );
});

test(`11 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - mix of quotes, full stop`, () => {
  equal(
    convertAll(`'"What,"' he said`, {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftSingleQuote}${leftDoubleQuote}What,${rightDoubleQuote}${rightSingleQuote} he said`,
    "11"
  );
});

test(`12 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - mix of quotes, full stop`, () => {
  equal(
    convertAll(`'"What;"' he said`, {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftSingleQuote}${leftDoubleQuote}What;${rightDoubleQuote}${rightSingleQuote} he said`,
    "12"
  );
});

test(`13 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - mix of quotes, full stop`, () => {
  equal(
    convertAll(`'"What?"' he said`, {
      convertApostrophes: 1,
      convertEntities: 0,
    }).result,
    `${leftSingleQuote}${leftDoubleQuote}What?${rightDoubleQuote}${rightSingleQuote} he said`,
    "13"
  );
});

test(`14 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - with entities`, () => {
  equal(
    convertOne(`"`, {
      from: 0,
      convertApostrophes: 1,
      convertEntities: 1,
    }),
    [],
    "14"
  );
});

test(`15 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - one, off`, () => {
  equal(
    convertOne(`${leftDoubleQuote}developers${rightDoubleQuote}`, {
      from: 0,
      convertApostrophes: false,
      convertEntities: 1,
    }),
    [[0, 1, `"`]],
    "15"
  );
});

test(`16 - ${`\u001b[${36}m${`double apostrophes`}\u001b[${39}m`} - all, off`, () => {
  equal(
    convertAll(` ${leftDoubleQuote}developers${rightDoubleQuote} `, {
      convertApostrophes: false,
      convertEntities: 1,
    }),
    {
      result: ` "developers" `,
      ranges: [
        [1, 2, `"`],
        [12, 13, `"`],
      ],
    },
    "16"
  );
});

test.run();
