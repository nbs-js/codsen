import checkTypes from "check-types-mini";
import { version } from "../package.json";
import isObj from "lodash.isplainobject";
import clone from "lodash.clonedeep";
import merge from "ranges-merge";
import * as util from "./util";
const errors = "./errors.json";
const isArr = Array.isArray;
const {
  isStr,
  log,
  withinTagInnerspace,
  firstOnTheRight,
  attributeOnTheRight,
  findClosingQuote
} = util;

function lint(str, originalOpts) {
  // Arg validation
  if (!isStr(str)) {
    throw new Error(
      `emlint: [THROW_ID_01] the first input argument must be a string. It was given as:\n${JSON.stringify(
        str,
        null,
        4
      )} (type ${typeof str})`
    );
  }

  // Prep the opts
  // ---------------------------------------------------------------------------

  const defaults = {
    rules: "recommended",
    style: {
      line_endings_CR_LF_CRLF: null
    }
  };

  let opts;
  if (originalOpts) {
    if (isObj(originalOpts)) {
      opts = Object.assign({}, defaults, originalOpts);
      checkTypes(opts, defaults, {
        msg: "emlint: [THROW_ID_03*]",
        schema: {
          rules: ["string", "object", "false", "null", "undefined"],
          style: ["object", "null", "undefined"],
          "style.line_endings_CR_LF_CRLF": ["string", "null", "undefined"]
        }
      });

      // normalise opts.style.line_endings_CR_LF_CRLF:
      if (opts.style && isStr(opts.style.line_endings_CR_LF_CRLF)) {
        if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "cr") {
          if (opts.style.line_endings_CR_LF_CRLF !== "CR") {
            // CR value is messed up
            opts.style.line_endings_CR_LF_CRLF === "CR";
          }
        } else if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "lf") {
          if (opts.style.line_endings_CR_LF_CRLF !== "LF") {
            // LF value is messed up
            opts.style.line_endings_CR_LF_CRLF === "LF";
          }
        } else if (
          opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "crlf"
        ) {
          if (opts.style.line_endings_CR_LF_CRLF !== "CRLF") {
            // CRLF value is messed up
            opts.style.line_endings_CR_LF_CRLF === "CRLF";
          }
        } else {
          throw new Error(
            `emlint: [THROW_ID_04] opts.style.line_endings_CR_LF_CRLF should be either falsey or string "CR" or "LF" or "CRLF". It was given as:\n${JSON.stringify(
              opts.style.line_endings_CR_LF_CRLF,
              null,
              4
            )} (type is string)`
          );
        }
      }
    } else {
      throw new Error(
        `emlint: [THROW_ID_02] the second input argument must be a plain object. It was given as:\n${JSON.stringify(
          originalOpts,
          null,
          4
        )} (type ${typeof originalOpts})`
      );
    }
  } else {
    opts = clone(defaults);
  }
  // TODO normalise (turn uppercase) opts.style.line_endings_CR_LF_CRLF and validate

  console.log(
    `097 USING ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
      opts,
      null,
      4
    )}`
  );

  // Define variables
  // ---------------------------------------------------------------------------

  let rawEnforcedEOLChar;
  if (opts.style && isStr(opts.style.line_endings_CR_LF_CRLF)) {
    if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "cr") {
      rawEnforcedEOLChar = "\r";
    } else if (opts.style.line_endings_CR_LF_CRLF.toLowerCase() === "crlf") {
      rawEnforcedEOLChar = "\r\n";
    } else {
      rawEnforcedEOLChar = "\n";
    }
  }

  // Tag tracking:
  let logTag;
  const defaultLogTag = {
    tagStartAt: null,
    tagNameStartAt: null,
    tagNameEndAt: null,
    tagName: null,
    recognised: null,
    pureHTML: true,
    attributes: []
  };
  function resetLogTag() {
    logTag = clone(defaultLogTag);
  }
  resetLogTag(); // initiate!

  // PS. we do this contraption above to make life easier when we want to reset
  // the marker object. Imagine, what happens if we add a new key we want to
  // keep record of. All resets, if they were hardcoded, would have to be manually
  // updated. Now, with above reset, there's single source of truth, single
  // reference of all keys. As a bonus, besides reset, we can always query deeper
  // keys, like "if obj.key1.key2". Without reset, "key1" would not exist and
  // we could not query.

  // ================

  // Attribute tracking:
  // Each object represents one attribute. Each will be pushed into logTag.attributes
  // array when assembled.
  let logAttr;
  const defaultLogAttr = {
    attrStartAt: null,
    attrEndAt: null,
    attrNameStartAt: null,
    attrNameEndAt: null,
    attrName: null,
    attrValue: null,
    attrValueStartAt: null,
    attrValueEndAt: null,
    attrEqualAt: null,
    attrOpeningQuote: { pos: null, val: null },
    attrClosingQuote: { pos: null, val: null },
    recognised: null,
    pureHTML: true
  };
  function resetLogAttr() {
    logAttr = clone(defaultLogAttr);
  }
  resetLogAttr(); // initiate!

  // ================

  let logWhitespace;
  const defaultLogWhitespace = {
    startAt: null,
    includesLinebreaks: false,
    lastLinebreakAt: null
  };
  function resetLogWhitespace() {
    logWhitespace = clone(defaultLogWhitespace);
  }
  resetLogWhitespace(); // initiate!

  // Return-related:
  const retObj = {
    issues: []
  };

  // ================

  // it's used only when opts.style.line_endings_CR_LF_CRLF is not set, to track
  // mixed line endings, calculate prevalent EOL type and set all others to that
  const logLineEndings = {
    cr: [],
    lf: [],
    crlf: []
  };

  // ---------------------------------------------------------------------------

  //                         L O O P     S T A R T S
  //                                  |
  //                                  |
  //                                  |
  //                                  |
  //                               \  |  /
  //                                \ | /
  //                                 \|/
  //                                  V
  for (let i = 0, len = str.length; i < len; i++) {
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //
    //                        RULES AT THE TOP
    //
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S

    const charcode = str[i].charCodeAt(0);
    console.log(
      `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`str[ ${i} ] = ${
        str[i].trim().length ? str[i] : JSON.stringify(str[i], null, 0)
      }`}\u001b[${39}m ${`\u001b[${90}m#${charcode}\u001b[${39}m`} \u001b[${36}m${`===============================`}\u001b[${39}m`
    );

    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //
    //                        RULES AT THE MIDDLE
    //
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S

    // catch the tag attributes
    if (logTag.tagNameEndAt !== null) {
      //               S
      //               S
      //               S
      //   logging tag attrs - START
      //               S
      //               S
      //               S
      //

      // 1. catch the ending of an attribute's name
      if (
        logAttr.attrNameStartAt !== null &&
        logAttr.attrName === null &&
        !util.isLatinLetter(str[i])
      ) {
        logAttr.attrNameEndAt = i;
        logAttr.attrName = str.slice(
          logAttr.attrNameStartAt,
          logAttr.attrNameEndAt
        );
        console.log(
          `278 ${log(
            "SET",
            "logAttr.attrNameEndAt",
            logAttr.attrNameEndAt,
            "logAttr.attrName",
            logAttr.attrName
          )}`
        );

        // if attribute ended on a character, different from "equal" and there
        // is no "equal" character to the right, terminate this attribute right
        // here. There can be attributes without values, for example, "nowrap".
        if (str[i] !== "=") {
          if (str[firstOnTheRight(str, i)] === "=") {
            // TODO - there's equal to the right
            console.log("293 equal to the right though");
          } else {
            // TODO - there's not equal to the right
            console.log("296 not equal, so terminate attr");
          }
        }
      }

      // 2. catch what follows the attribute's name
      if (
        logAttr.attrNameEndAt !== null &&
        logAttr.attrEqualAt === null &&
        i >= logAttr.attrNameEndAt &&
        str[i].trim().length
      ) {
        console.log("308 catch what follows the attribute's name");
        if (str[i] === "=") {
          logAttr.attrEqualAt = i;
          console.log(
            `312 ${log("SET", "logAttr.attrEqualAt", logAttr.attrEqualAt)}`
          );
        } else if (
          (str[i] === "'" || str[i] === '"') &&
          attributeOnTheRight(str, i)
        ) {
          console.log(
            `${`\u001b[${32}m${`\n██`}\u001b[${39}m`} util/attributeOnTheRight() ENDED ${`\u001b[${32}m${`██\n`}\u001b[${39}m`}`
          );
          console.log(
            "322 quoted attribute's value on the right, equal is indeed missing"
          );
          // 1. push the issue:
          retObj.issues.push({
            name: "tag-attribute-missing-equal",
            position: [[i, i, "="]]
          });
          console.log(
            `330 ${log(
              "push",
              "tag-attribute-missing-equal",
              `${`[[${i}, ${i}, "="]]`}`
            )}`
          );
          // 2. complete the marker records:
          logAttr.attrEqualAt = i;
          console.log(
            `339 ${log("SET", "logAttr.attrEqualAt", logAttr.attrEqualAt)}`
          );
          // 3. we need to mark where value starts too:
          logAttr.attrValueStartAt = i;
          console.log(
            `344 ${log(
              "SET",
              "logAttr.attrValueStartAt",
              logAttr.attrValueStartAt
            )}`
          );
          // 4. and quotes themselves:
          logAttr.attrOpeningQuote.pos = i;
          logAttr.attrOpeningQuote.val = str[i];
          console.log(
            `354 ${log(
              "SET",
              "logAttr.attrOpeningQuote",
              logAttr.attrOpeningQuote
            )}`
          );
        } else {
          console.log(
            `${`\u001b[${32}m${`\n██`}\u001b[${39}m`} util/attributeOnTheRight() ENDED ${`\u001b[${32}m${`██\n`}\u001b[${39}m`}`
          );
          // so if it's not equal and the code is not messed up, we have an attribute without a value,
          // for example, <td nowrap>.
          // Fine, push it to logTag, reset logAttr markers.

          // 1. push
          logTag.attributes.push(clone(logAttr));
          console.log(`370 ${log("PUSH, then RESET", "logAttr")}`);

          // 2. reset:
          resetLogAttr();
        }

        if (logWhitespace.startAt !== null) {
          // it depends, is it equal (value might follow), or is it a letter,
          // in which case, it's an attribute without a value:
          if (str[i] === "=") {
            retObj.issues.push({
              name: "tag-attribute-space-between-name-and-equals",
              position: [[logWhitespace.startAt, i]]
            });
            console.log(
              `385 ${log(
                "push",
                "tag-attribute-space-between-name-and-equals",
                `${`[[${logWhitespace.startAt}, ${i}]]`}`
              )}`
            );
          } else if (util.isLatinLetter(str[i])) {
            // it seems like a start of a new attribute. Push existing and reset
            logTag.attributes.push(clone(logAttr));
            console.log(`394 ${log("PUSH, then RESET", "logAttr")}`);

            // then, reset:
            resetLogAttr();

            // also, maybe there was an excessive whitespace?
            if (logWhitespace.startAt !== null) {
              if (str[logWhitespace.startAt] === " ") {
                if (logWhitespace.startAt + 1 < i) {
                  // retain that space, push the rest of the chunk
                  retObj.issues.push({
                    name: "tag-excessive-whitespace-inside-tag",
                    position: [[logWhitespace.startAt + 1, i]]
                  });
                  console.log(
                    `409 ${log(
                      "push",
                      "tag-excessive-whitespace-inside-tag",
                      `${`[[${logWhitespace.startAt + 1}, ${i}]]`}`
                    )}`
                  );
                }
                console.log("416 dead end of excessive whitespace check");
              } else {
                // replace whole chunk with a single space
                retObj.issues.push({
                  name: "tag-excessive-whitespace-inside-tag",
                  position: [[logWhitespace.startAt, i, " "]]
                });
                console.log(
                  `424 ${log(
                    "push",
                    "tag-excessive-whitespace-inside-tag",
                    `${`[[${logWhitespace.startAt}, ${i}, " "]]`}`
                  )}`
                );
              }
            }
          } else {
            // TODO - maybe it's some quote?
          }
        }
      }

      // 3. catch the begining of an attribute's name
      if (logAttr.attrStartAt === null && util.isLatinLetter(str[i])) {
        console.log("440 above catching the begining of an attribute's name");
        logAttr.attrStartAt = i;
        logAttr.attrNameStartAt = i;
        console.log(
          `444 ${log("SET", "logAttr.attrStartAt", logAttr.attrStartAt)}`
        );
        if (logWhitespace.startAt !== null && logWhitespace.startAt < i - 1) {
          // it depends, can we reuse the space at position str[logWhitespace.startAt],
          // that is, the first whitespace character of this chunk.
          // - If it's a space, keep it, just delete the rest of the chunk of
          // the characters
          // - If it's not a space, replace whole whitespace chunk with a single
          // space character.
          if (str[logWhitespace.startAt] === " ") {
            // keep first whitespace chunk's character, existing space
            retObj.issues.push({
              name: "tag-excessive-whitespace-inside-tag",
              position: [[logWhitespace.startAt + 1, i]]
            });
            console.log(
              `460 ${log(
                "push",
                "tag-excessive-whitespace-inside-tag",
                `${`[[${logWhitespace.startAt + 1}, ${i}]]`}`
              )}`
            );
          } else {
            // replace whole whitespace chunk with a single space
            retObj.issues.push({
              name: "tag-excessive-whitespace-inside-tag",
              position: [[logWhitespace.startAt, i, " "]]
            });
            console.log(
              `473 ${log(
                "push",
                "tag-excessive-whitespace-inside-tag",
                `${`[[${logWhitespace.startAt}, ${i}, " "]]`}`
              )}`
            );
          }
        }
      }

      // 4. catch what follows attribute's equal
      if (
        logAttr.attrEqualAt !== null &&
        logAttr.attrEqualAt < i &&
        logAttr.attrOpeningQuote.pos === null &&
        str[i].trim().length
      ) {
        console.log("490 rules above catching what follows attribute's equal");
        if (charcode === 34 || charcode === 39) {
          // it's single or double quote
          logAttr.attrOpeningQuote.pos = i;
          logAttr.attrOpeningQuote.val = str[i];

          const closingQuotePeek = findClosingQuote(str, i);
          console.log(
            `498 ${log("set", "closingQuotePeek", closingQuotePeek)}`
          );
          // if we found closing quote, set it right away:
          if (closingQuotePeek) {
            logAttr.attrClosingQuote.pos = closingQuotePeek;
            logAttr.attrClosingQuote.val = str[closingQuotePeek];
            logAttr.attrValue = str.slice(i + 1, closingQuotePeek);
            console.log(
              `506 ${log(
                "set",
                "logAttr.attrClosingQuote",
                logAttr.attrClosingQuote,
                "logAttr.attrValue",
                logAttr.attrValue
              )}`
            );
          }
        } else if (charcode === 8220 || charcode === 8221) {
          // left-double-quotation-mark
          // http://www.fileformat.info/info/unicode/char/201C/index.htm
          // right-double-quotation-mark
          // https://www.fileformat.info/info/unicode/char/201d/index.htm
          logAttr.attrOpeningQuote.pos = i;
          logAttr.attrOpeningQuote.val = `"`;
          console.log(
            `523 ${log(
              "set",
              "logAttr.attrOpeningQuote",
              logAttr.attrOpeningQuote
            )}`
          );

          // it's an error, so push right away:
          const name =
            charcode === 8220
              ? "tag-attribute-left-double-quotation-mark"
              : "tag-attribute-right-double-quotation-mark";
          retObj.issues.push({
            name,
            position: [[i, i + 1, `"`]]
          });
          console.log(
            `540 ${log("push", name, `${`[[${i}, ${i + 1}, '"']]`}`)}`
          );
        } else if (charcode === 8216 || charcode === 8217) {
          // left-single-quotation-mark
          // https://www.fileformat.info/info/unicode/char/2018/index.htm
          // right-single-quotation-mark
          // https://www.fileformat.info/info/unicode/char/2019/index.htm
          logAttr.attrOpeningQuote.pos = i;
          logAttr.attrOpeningQuote.val = `'`;
          console.log(
            `550 ${log(
              "set",
              "logAttr.attrOpeningQuote",
              logAttr.attrOpeningQuote
            )}`
          );

          // it's an error, so push right away:
          const name =
            charcode === 8216
              ? "tag-attribute-left-single-quotation-mark"
              : "tag-attribute-right-single-quotation-mark";
          retObj.issues.push({
            name,
            position: [[i, i + 1, `'`]]
          });
          console.log(
            `567 ${log("push", name, `${`[[${i}, ${i + 1}, '"']]`}`)}`
          );
        } else if (withinTagInnerspace(str, i)) {
          let start = logAttr.attrStartAt;
          if (str[i] === "/" || str[i] === ">") {
            // if we're removing a dud attribute at the end of the tag, let's
            // remove also all the whitespace in front of it:
            for (let y = logAttr.attrStartAt; y--; ) {
              if (str[y].trim().length) {
                start = y + 1;
                break;
              }
            }
          }
          retObj.issues.push({
            name: "tag-attribute-quote-and-onwards-missing",
            position: [[start, i]]
          });
          console.log(
            `586 ${log(
              "push",
              "tag-attribute-quote-and-onwards-missing",
              `${`[[${start}, ${i}]]`}`
            )}`
          );
          // reset logWhitespace because it might get reported as well:
          console.log(`593 ${log("reset", "logWhitespace")}`);
          resetLogWhitespace();
          console.log(`595 ${log("reset", "logAttr")}`);
          resetLogAttr();
        } else {
          // Insert missing quote then.
          // It's <img alt=zzz>
          //               ^ - we're standing upon a value which started
          const endingQuotesPos = findClosingQuote(str, i);
          if (endingQuotesPos !== null) {
            console.log(
              `604 ending quote found: ${log(
                "set",
                "endingQuotesPos",
                endingQuotesPos
              )}`
            );
            // 1. set the rule
            retObj.issues.push({
              name: "tag-attribute-opening-quotation-mark-missing",
              position: [[i, i, str[endingQuotesPos]]]
            });
            console.log(
              `616 ${log(
                "push",
                "tag-attribute-space-between-equals-and-opening-quotes",
                `${`[[${i}, ${i}, ${JSON.stringify(
                  str[endingQuotesPos],
                  null,
                  0
                )}]]`}`
              )}`
            );
            // 2. set the opening marker:
            logAttr.attrOpeningQuote.pos = i;
            logAttr.attrOpeningQuote.val = str[endingQuotesPos];
            logAttr.attrValueStartAt = i;
            // 3. set the closing quote marker too:
            logAttr.attrClosingQuote.pos = endingQuotesPos;
            logAttr.attrClosingQuote.val = str[endingQuotesPos];
            logAttr.attrValue = str.slice(i, endingQuotesPos);
            console.log(
              `635 ${log(
                "SET",
                "logAttr.attrOpeningQuote",
                logAttr.attrOpeningQuote,
                "logAttr.attrClosingQuote",
                logAttr.attrClosingQuote,
                "logAttr.attrValueStartAt",
                logAttr.attrValueStartAt,
                "logAttr.attrValue",
                logAttr.attrValue
              )}`
            );
          } else {
            console.log(
              `649 ${log("set", "endingQuotesPos", endingQuotesPos)}`
            );
            // TODO - cases where ending of a tag is ambiguous and tag is unclosed
          }
        }

        console.log(
          `656 ${log(
            "SET",
            "logAttr.attrOpeningQuote.pos",
            logAttr.attrOpeningQuote.pos,
            "logAttr.attrOpeningQuote.val",
            logAttr.attrOpeningQuote.val
          )}`
        );
        // tackle any whitespace between equal and quotes:
        if (logWhitespace.startAt !== null) {
          // 1. if it's single or double quote, this whitespace is probably
          // accidental:
          if (str[i] === "'" || str[i] === '"') {
            retObj.issues.push({
              name: "tag-attribute-space-between-equals-and-opening-quotes",
              position: [[logWhitespace.startAt, i]]
            });
            console.log(
              `674 ${log(
                "push",
                "tag-attribute-space-between-equals-and-opening-quotes",
                `${`[[${logWhitespace.startAt}, ${i}]]`}`
              )}`
            );
          } else if (withinTagInnerspace(str, i + 1)) {
            // Attribute's quotes and content was lost
            // for example, <aaa bbb="ccc" ddd= eee="fff"/>
            // tag-attribute-quote-and-onwards-missing
            retObj.issues.push({
              name: "tag-attribute-quote-and-onwards-missing",
              position: [[logAttr.attrStartAt, i]]
            });
            console.log(
              `689 ${log(
                "push",
                "tag-attribute-quote-and-onwards-missing",
                `${`[[${logAttr.attrStartAt}, ${i}]]`}`
              )}`
            );
            console.log(`695 ${log("reset", "logAttr")}`);
            resetLogAttr();
          }
        }
      }

      // 5. catch closing quote (single or double)
      if (
        logAttr.attrEqualAt !== null &&
        logAttr.attrOpeningQuote.pos !== null &&
        i > logAttr.attrOpeningQuote.pos &&
        (str[i] === logAttr.attrOpeningQuote.val ||
          withinTagInnerspace(str, i + 1))
      ) {
        console.log("709 above catching closing quote (single or double)");
        if (charcode === 34 || charcode === 39) {
          // if it's single or double quote

          // 1. check for quote mismatch
          if (str[i] !== logAttr.attrOpeningQuote.val) {
            const name = `tag-attribute-mismatching-quotes-is-${
              charcode === 34 ? "double" : "single"
            }`;
            retObj.issues.push({
              name: name,
              position: [[i, i + 1, `${charcode === 34 ? "'" : '"'}`]]
            });
            console.log(
              `723 ${log(
                "push",
                name,
                `${`[[${i}, ${i + 1}, ${charcode === 34 ? "'" : '"'}]]`}`
              )}`
            );
          }

          // 2. Set closing quote:
          logAttr.attrClosingQuote.pos = i;
          // For now it would be more efficient to assume the value is the same
          // and skip writing it. We know closing quotes are the same.. But only
          // for now.
          logAttr.attrClosingQuote.val = str[i];
          console.log(
            `738 ${log(
              "SET",
              "logAttr.attrClosingQuote.pos",
              logAttr.attrClosingQuote.pos,
              "logAttr.attrClosingQuote.val",
              logAttr.attrClosingQuote.val
            )}`
          );

          // 3. Set the attribute's value in the marker:

          // FIXME - +1 is wrong:
          if (logAttr.attrOpeningQuote.pos + 1 < i) {
            // it's non-empty string
            logAttr.attrValue = str.slice(logAttr.attrOpeningQuote.pos + 1, i);
          } else {
            // empty string, no need to slice
            logAttr.attrValue = "";
          }
          console.log(
            `758 ${log("SET", "logAttr.attrValue", logAttr.attrValue)}`
          );

          // 4. Set the attribute's ending index in the marker:
          logAttr.attrEndAt = i;
          logAttr.attrValueEndAt = i;
          console.log(
            `765 ${log(
              "SET",
              "logAttr.attrEndAt",
              logAttr.attrEndAt,
              "logAttr.attrValueEndAt",
              logAttr.attrValueEndAt
            )}`
          );

          // 5. Finally, push the attributes object into
          logTag.attributes.push(clone(logAttr));
          console.log(`776 ${log("PUSH, then RESET", "logAttr")}`);

          // then, reset:
          resetLogAttr();
        } else if (
          isStr(logAttr.attrOpeningQuote.val) &&
          (charcode === 8220 || charcode === 8221) // TODO - cleanup &&
          // ((firstOnTheRight(str, i) &&
          //   (str[firstOnTheRight(str, i)] === ">" ||
          //     str[firstOnTheRight(str, i)] === "/")) ||
          //   )
        ) {
          // 1. if curlies were used to open this and this is curlie
          const name =
            charcode === 8220
              ? "tag-attribute-left-double-quotation-mark"
              : "tag-attribute-right-double-quotation-mark";
          retObj.issues.push({
            name: name,
            position: [[i, i + 1, '"']]
          });
          console.log(
            `798 ${log("push", name, `${`[[${i}, ${i + 1}, '"']]`}`)}`
          );

          // 2. Set the attribute's ending index in the marker:
          logAttr.attrEndAt = i;
          logAttr.attrClosingQuote.pos = i;
          logAttr.attrClosingQuote.val = '"';
          console.log(
            `806 ${log(
              "SET",
              "logAttr.attrEndAt",
              logAttr.attrEndAt,
              "logAttr.attrClosingQuote",
              logAttr.attrClosingQuote
            )}`
          );

          // 3. Finally, push the attributes object into
          logTag.attributes.push(clone(logAttr));
          console.log(`817 ${log("PUSH, then RESET", "logAttr")}`);

          // then, reset:
          resetLogAttr();
        } else if (
          isStr(logAttr.attrOpeningQuote.val) &&
          (charcode === 8216 || charcode === 8217) &&
          ((firstOnTheRight(str, i) !== null &&
            (str[firstOnTheRight(str, i)] === ">" ||
              str[firstOnTheRight(str, i)] === "/")) ||
            withinTagInnerspace(str, i + 1))
        ) {
          // if curlies were used to open this and this is curlie
          const name =
            charcode === 8216
              ? "tag-attribute-left-single-quotation-mark"
              : "tag-attribute-right-single-quotation-mark";
          retObj.issues.push({
            name: name,
            position: [[i, i + 1, `'`]]
          });
          console.log(
            `839 ${log("push", name, `${`[[${i}, ${i + 1}, "'"]]`}`)}`
          );

          // 2. Set the attribute's ending index in the marker:
          logAttr.attrEndAt = i;
          logAttr.attrClosingQuote.pos = i;
          logAttr.attrClosingQuote.val = "'";
          console.log(
            `847 ${log(
              "SET",
              "logAttr.attrEndAt",
              logAttr.attrEndAt,
              "logAttr.attrClosingQuote",
              logAttr.attrClosingQuote
            )}`
          );

          // 3. Finally, push the attributes object into
          logTag.attributes.push(clone(logAttr));
          console.log(`858 ${log("PUSH, then RESET", "logAttr")}`);

          // then, reset:
          resetLogAttr();
        } else if (withinTagInnerspace(str, i)) {
          // unclosed attribute values, for example <img alt=">
          // 1. raise the issue
          let compensationSpace = " ";
          const whatsOnTheRight = str[firstOnTheRight(str, i - 1)];
          console.log(
            `868 ${`\u001b[${33}m${`whatsOnTheRight`}\u001b[${39}m`} = ${JSON.stringify(
              whatsOnTheRight,
              null,
              4
            )}`
          );
          if (
            !str[i].trim().length ||
            !whatsOnTheRight ||
            whatsOnTheRight === ">" ||
            whatsOnTheRight === "/"
          ) {
            compensationSpace = "";
            console.log("881 no compensation space");
          }

          console.log(
            `885 compensationSpace.length = ${compensationSpace.length}`
          );
          if (logAttr.attrOpeningQuote.val) {
            retObj.issues.push({
              name: "tag-attribute-closing-quotation-mark-missing",
              position: [
                [i, i, `${logAttr.attrOpeningQuote.val}${compensationSpace}`]
              ]
            });
            console.log(
              `895 ${log(
                "push",
                "tag-attribute-closing-quotation-mark-missing",
                `${`[[${i}, ${i}, ${`${
                  logAttr.attrOpeningQuote.val
                }${compensationSpace}`}]]`}`
              )}`
            );
          }

          // 2. set the attribute's markers we just added
          logAttr.attrEndAt = i;
          logAttr.attrClosingQuote.pos = i;
          logAttr.attrClosingQuote.val = logAttr.attrOpeningQuote.val;
          console.log(
            `910 ${log(
              "set",
              "logAttr.attrClosingQuote",
              logAttr.attrClosingQuote,
              "logAttr.attrEndAt",
              logAttr.attrEndAt
            )}`
          );

          // 3. since the attribute has been traversed, push it to logTag[]:
          logTag.attributes.push(clone(logAttr));
          console.log(`921 ${log("PUSH, then RESET", "logAttr")}`);

          // 4. finally, reset logAttr:
          resetLogAttr();
        }
      }

      // if reached this far, check error clauses.

      // unclosed attribute, followed by slash + closing bracket OR closing bracket
      if (
        logAttr.attrOpeningQuote.val &&
        logAttr.attrOpeningQuote.pos < i &&
        logAttr.attrClosingQuote.pos === null &&
        // !(logAttr.attrOpeningQuote.val && !logAttr.attrClosingQuote.val) &&
        ((str[i] === "/" &&
          firstOnTheRight(str, i) &&
          str[firstOnTheRight(str, i)] === ">") ||
          str[i] === ">")
      ) {
        console.log("941 inside error catch clauses");
        // 1. push the issue:
        retObj.issues.push({
          name: "tag-attribute-closing-quotation-mark-missing",
          position: [[i, i, logAttr.attrOpeningQuote.val]]
        });
        console.log(
          `948 ${log(
            "push",
            "tag-attribute-closing-quotation-mark-missing",
            `${`[[${i}, ${i}, ${logAttr.attrOpeningQuote.val}]]`}`
          )}`
        );
        // 2. complete the attribute's record:
        logAttr.attrClosingQuote.pos = i;
        logAttr.attrClosingQuote.val = logAttr.attrOpeningQuote.val;
        console.log(
          `958 ${log(
            "set",
            "logAttr.attrClosingQuote",
            logAttr.attrClosingQuote
          )}`
        );
        // 3. since attribute record is complete, push it to logTag
        logTag.attributes.push(clone(logAttr));
        console.log(`966 ${log("PUSH, then RESET", "logAttr")}`);

        // 4. reset logAttr:
        resetLogAttr();
      }

      //
      //               S
      //               S
      //               S
      //   logging tag attrs  -  END
      //               S
      //               S
      //               S
    }

    // catch unprintable, unencoded characters that don't belong to HTML:
    // match by UTF-16 (decimal) value of the character, equivalent to .charCodeAt(0)
    // for example, 32 is space character in ASCII
    if (charcode < 32) {
      const name = `bad-character-${util.lowAsciiCharacterNames[charcode]}`;
      if (charcode === 9) {
        // TODO - detect tabs as indentation vs. tabs in body
        // Replace all tabs, '\u0009', with double spaces:
        retObj.issues.push({
          name,
          position: [[i, i + 1, "  "]]
        });
        console.log(`994 PUSH "${name}", [[${i}, ${i + 1}, "  "]]`);
      } else if (charcode === 13) {
        // Catch CR line endings (\r)

        // 10 - "\u000A" - line feed
        // 13 - "\u000D" - carriage return
        if (isStr(str[i + 1]) && str[i + 1].charCodeAt(0) === 10) {
          // 1. LF follows, we've got CRLF
          if (
            opts.style &&
            opts.style.line_endings_CR_LF_CRLF &&
            opts.style.line_endings_CR_LF_CRLF !== "CRLF"
          ) {
            // 1.1. a different line ending is enforced via opts.style.line_endings_CR_LF_CRLF
            retObj.issues.push({
              name: "file-wrong-type-line-ending-CRLF",
              position: [[i, i + 2, rawEnforcedEOLChar]]
            });
            console.log(
              `1013 ${log(
                "push",
                "file-wrong-type-line-ending-CRLF",
                `${`[[${i}, ${i + 2}, ${JSON.stringify(
                  rawEnforcedEOLChar,
                  null,
                  0
                )}]]`}`
              )}`
            );
          } else {
            // 1.2. so line endings is not enforced. Make a note of this line ending.
            logLineEndings.crlf.push([i, i + 2]);
            console.log(
              `1027 ${log("logLineEndings.crlf push", `[${i}, ${i + 2}]`)}`
            );
          }
        } else {
          // 2. It's standalone CR
          if (
            opts.style &&
            opts.style.line_endings_CR_LF_CRLF &&
            opts.style.line_endings_CR_LF_CRLF !== "CR"
          ) {
            // 2.1. a different line ending is enforced via opts.style.line_endings_CR_LF_CRLF
            retObj.issues.push({
              name: "file-wrong-type-line-ending-CR",
              position: [[i, i + 1, rawEnforcedEOLChar]]
            });
            console.log(
              `1043 ${log(
                "push",
                "file-wrong-type-line-ending-CR",
                `${`[[${i}, ${i + 1}, ${JSON.stringify(
                  rawEnforcedEOLChar,
                  null,
                  0
                )}]]`}`
              )}`
            );
          } else {
            // 2.2. so line endings is not enforced. Make a note of this line ending.
            logLineEndings.cr.push([i, i + 1]);
            console.log(
              `1057 ${log("logLineEndings.cr push", `[${i}, ${i + 1}]`)}`
            );
          }
        }
      } else if (charcode === 10) {
        if (!(isStr(str[i - 1]) && str[i - 1].charCodeAt(0) === 13)) {
          // 3. Catch LF line endings (\n) (not second part of CRLF)
          // this double "IF" nesting allows to skip processing LF second time,
          // as standalone, in "CRLF" cases
          if (
            opts.style &&
            opts.style.line_endings_CR_LF_CRLF &&
            opts.style.line_endings_CR_LF_CRLF !== "LF"
          ) {
            // 3.1. a different line ending is enforced via opts.style.line_endings_CR_LF_CRLF
            retObj.issues.push({
              name: "file-wrong-type-line-ending-LF",
              position: [[i, i + 1, rawEnforcedEOLChar]]
            });
            console.log(
              `1077 ${log(
                "push",
                "file-wrong-type-line-ending-LF",
                `${`[[${i}, ${i + 1}, ${JSON.stringify(
                  rawEnforcedEOLChar,
                  null,
                  0
                )}]]`}`
              )}`
            );
          } else {
            // 3.2. so line endings is not enforced. Make a note of this line ending.
            logLineEndings.lf.push([i, i + 1]);
            console.log(
              `1091 ${log("logLineEndings.lf push", `[${i}, ${i + 1}]`)}`
            );
          }
        }
      } else {
        // remove them all:
        retObj.issues.push({
          name,
          position: [[i, i + 1]]
        });
        console.log(`1101 ${log("push", name, `${`[[${i}, ${i + 1}]]`}`)}`);
      }
    }

    // catch the ending of whitespace chunks:
    if (logWhitespace.startAt !== null && str[i].trim().length) {
      // 1. catch the whitespace before closing slash, within a tag
      if (
        logTag.tagNameStartAt !== null &&
        logAttr.attrStartAt === null &&
        (str[i] === ">" ||
          (str[i] === "/" &&
            (str[i + 1] === ">" ||
              str
                .slice(i + 1)
                .trim()
                .startsWith(">"))))
      ) {
        // we're within a tag but not within an attribute and this is whitespace
        // chunk before closing slash or closing bracket
        let name = "tag-excessive-whitespace-inside-tag";
        if (str[logWhitespace.startAt - 1] === "/") {
          name = "tag-whitespace-closing-slash-and-bracket";
        }

        retObj.issues.push({
          name: name,
          position: [[logWhitespace.startAt, i]]
        });
        console.log(
          `1131 ${log("push", name, `${`[[${logWhitespace.startAt}, ${i}]]`}`)}`
        );
      }

      // finally, reset the whitespace tracking marker:
      resetLogWhitespace();
      console.log(`1137 ${log("reset", "logWhitespace")}`);
    }

    // catch the start of whitespace chunks:
    if (!str[i].trim().length && logWhitespace.startAt === null) {
      logWhitespace.startAt = i;
      console.log(
        `1144 ${log("set", "logWhitespace.startAt", logWhitespace.startAt)}`
      );
    }

    // catch linebreaks within the whitespace chunks:
    if (str[i] === "\n" || str[i] === "\r") {
      if (logWhitespace.startAt !== null && !logWhitespace.includesLinebreaks) {
        logWhitespace.includesLinebreaks = true;
        console.log(
          `1153 ${log(
            "set",
            "logWhitespace.includesLinebreaks",
            logWhitespace.includesLinebreaks
          )}`
        );
      }
      logWhitespace.lastLinebreakAt = i;
      console.log(
        `1162 ${log(
          "set",
          "logWhitespace.lastLinebreakAt",
          logWhitespace.lastLinebreakAt
        )}`
      );
    }

    // catch the ending of the tag name:
    // PS. we deliberately allow capital Latin letters through the net, so that
    // later we could flag them up
    if (
      logTag.tagNameStartAt !== null &&
      logTag.tagNameEndAt === null &&
      !util.isLatinLetter(str[i])
    ) {
      console.log("1178 not a latin letter, thus we assume tag name ends here");
      logTag.tagNameEndAt = i;
      logTag.tagName = str.slice(logTag.tagNameStartAt, i);
      logTag.recognised = util.knownHTMLTags.includes(
        logTag.tagName.toLowerCase()
      );
      console.log(
        `1185 ${log(
          "set",
          "logTag.tagNameEndAt",
          logTag.tagNameEndAt,
          "logTag.tagName",
          logTag.tagName,
          "logTag.recognised",
          logTag.recognised
        )}`
      );
    }

    // catch the start of the tag name:
    if (
      logTag.tagStartAt !== null &&
      logTag.tagNameStartAt === null &&
      util.isLatinLetter(str[i]) &&
      logTag.tagStartAt < i
    ) {
      logTag.tagNameStartAt = i;
      console.log(
        `1206 ${log("set", "logTag.tagNameStartAt", logTag.tagNameStartAt)}`
      );

      // rule "space-between-opening-bracket-and-tag-name":
      if (logTag.tagStartAt < i - 1) {
        retObj.issues.push({
          name: "tag-space-after-opening-bracket",
          position: [[logTag.tagStartAt + 1, i]]
        });
        console.log(
          `1216 ${log(
            "push",
            "tag-space-after-opening-bracket",
            `${`[[${logTag.tagStartAt + 1}, ${i}]]`}`
          )}`
        );
      }
    }

    // catch uppercase characters in tag names:
    if (
      logTag.tagNameStartAt !== null &&
      logTag.tagNameEndAt === null &&
      util.isUppercaseLetter(str[i])
    ) {
      retObj.issues.push({
        name: "tag-name-lowercase",
        position: [[i, i + 1, str[i].toLowerCase()]]
      });
      console.log(
        `1236 ${log(
          "push",
          "tag-name-lowercase",
          `${`[[${i}, ${i + 1}, ${JSON.stringify(
            str[i].toLowerCase(),
            null,
            4
          )}]]`}`
        )}`
      );
    }

    // catch the beginning of a tag:
    if (str[i] === "<" && logTag.tagStartAt === null) {
      logTag.tagStartAt = i;
      console.log(`1251 ${log("set", "logTag.tagStartAt", logTag.tagStartAt)}`);
    }

    // catch the ending of a tag:
    if (str[i] === ">" && logTag.tagStartAt !== null) {
      resetLogTag();
      resetLogAttr();
      console.log(`1258 ${log("reset", "logTag & logAttr")}`);
    }

    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //
    //                        RULES AT THE BOTTOM
    //
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S

    const output = {
      logTag: true,
      logAttr: true,
      logWhitespace: true,
      logLineEndings: false,
      retObj: false
    };
    console.log(
      `${
        Object.keys(output).some(key => output[key])
          ? `${`\u001b[${31}m${`█ `}\u001b[${39}m`}`
          : ""
      }${
        output.logTag && logTag.tagStartAt !== null
          ? `${`\u001b[${33}m${`logTag`}\u001b[${39}m`} ${JSON.stringify(
              logTag,
              null,
              4
            )}; `
          : ""
      }${
        output.logAttr && logAttr.attrStartAt !== null
          ? `${`\u001b[${33}m${`logAttr`}\u001b[${39}m`} ${JSON.stringify(
              logAttr,
              null,
              4
            )}; `
          : ""
      }${
        output.logWhitespace && logWhitespace.startAt !== null
          ? `${`\u001b[${33}m${`logWhitespace`}\u001b[${39}m`} ${JSON.stringify(
              logWhitespace,
              null,
              0
            )}; `
          : ""
      }${
        output.logLineEndings
          ? `${`\u001b[${33}m${`logLineEndings`}\u001b[${39}m`} ${JSON.stringify(
              logLineEndings,
              null,
              0
            )}; `
          : ""
      }${
        output.retObj
          ? `${`\u001b[${33}m${`retObj`}\u001b[${39}m`} ${JSON.stringify(
              retObj,
              null,
              4
            )}; `
          : ""
      }`
    );

    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
    //                                S
  }
  //                                  ^
  //                                 /|\
  //                                / | \
  //                               /  |  \
  //                                  |
  //                                  |
  //                                  |
  //                                  |
  //                         L O O P     E N D S

  // tend the mismatching EOL's, if applicable. That's at least two
  // kinds of EOL's was recorded and no opts are enforcing a particular
  // style of EOL (opts.style.line_endings_CR_LF_CRLF).
  if (
    (!opts.style || !opts.style.line_endings_CR_LF_CRLF) &&
    ((logLineEndings.cr.length && logLineEndings.lf.length) ||
      (logLineEndings.lf.length && logLineEndings.crlf.length) ||
      (logLineEndings.cr.length && logLineEndings.crlf.length))
  ) {
    // so line endings are mixed up. Let's find which type is prevalent:
    if (
      logLineEndings.cr.length > logLineEndings.crlf.length &&
      logLineEndings.cr.length > logLineEndings.lf.length
    ) {
      console.log("1369 CR clearly prevalent");
      // replace all LF and CRLF with CR
      if (logLineEndings.crlf.length) {
        logLineEndings.crlf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CR-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r"]]
          });
        });
      }
      if (logLineEndings.lf.length) {
        logLineEndings.lf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CR-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r"]]
          });
        });
      }
    } else if (
      logLineEndings.lf.length > logLineEndings.crlf.length &&
      logLineEndings.lf.length > logLineEndings.cr.length
    ) {
      console.log("1391 LF clearly prevalent");
      // replace all CR and CRLF with LF
      if (logLineEndings.crlf.length) {
        logLineEndings.crlf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
    } else if (
      logLineEndings.crlf.length > logLineEndings.lf.length &&
      logLineEndings.crlf.length > logLineEndings.cr.length
    ) {
      console.log("1413 CRLF clearly prevalent");
      // replace all CR and LF with CRLF
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
      if (logLineEndings.lf.length) {
        logLineEndings.lf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
    } else if (
      logLineEndings.crlf.length === logLineEndings.lf.length &&
      logLineEndings.lf.length === logLineEndings.cr.length
    ) {
      console.log("1435 same amount of each type of EOL");
      // replace CR and CRLF with LF
      // no need for checking the existance (if logLineEndings.crlf.length ...):
      logLineEndings.crlf.forEach(eolEntryArr => {
        retObj.issues.push({
          name: "file-mixed-line-endings-file-is-LF-mainly",
          position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
        });
      });
      logLineEndings.cr.forEach(eolEntryArr => {
        retObj.issues.push({
          name: "file-mixed-line-endings-file-is-LF-mainly",
          position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
        });
      });
    } else if (
      logLineEndings.cr.length === logLineEndings.crlf.length &&
      logLineEndings.cr.length > logLineEndings.lf.length
    ) {
      console.log("1454 CR & CRLF are prevalent over LF");
      // replace CR and LF with CRLF
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
      if (logLineEndings.lf.length) {
        logLineEndings.lf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-CRLF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\r\n"]]
          });
        });
      }
    } else if (
      (logLineEndings.lf.length === logLineEndings.crlf.length &&
        logLineEndings.lf.length > logLineEndings.cr.length) ||
      (logLineEndings.cr.length === logLineEndings.lf.length &&
        logLineEndings.cr.length > logLineEndings.crlf.length)
    ) {
      console.log(
        "1479 LF && CRLF are prevalent over CR or CR & LF are prevalent over CRLF"
      );
      // replace CRLF and CR with LF
      if (logLineEndings.cr.length) {
        logLineEndings.cr.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
      if (logLineEndings.crlf.length) {
        logLineEndings.crlf.forEach(eolEntryArr => {
          retObj.issues.push({
            name: "file-mixed-line-endings-file-is-LF-mainly",
            position: [[eolEntryArr[0], eolEntryArr[1], "\n"]]
          });
        });
      }
    }
  }

  // merge all fixes into ranges-apply-ready array:
  console.log("1502 BEFORE FIX");
  console.log(
    `1504 ${`\u001b[${33}m${`retObj.issues`}\u001b[${39}m`} = ${JSON.stringify(
      retObj.issues,
      null,
      4
    )}`
  );

  retObj.fix =
    isArr(retObj.issues) && retObj.issues.length
      ? merge(
          retObj.issues.reduce((acc, obj) => {
            return acc.concat(obj.position);
          }, [])
        )
      : null;

  return retObj;
}

export { lint, version, errors };

// REF from https://steelbrain.me/linter/examples/standard-linter-v2.html
// {
//   severity: 'info',
//   location: {
//     file: editorPath,
//     position: [[0, 0], [0, 1]],
//   },
//   excerpt: `A random value is ${Math.random()}`,
//   description: `### What is this?\nThis is a randomly generated value`
// }

// -----------------------------------------------------------------------------
//
// Notes for self.

// ‘something’
// 8216 - 8217
// '\u2018something\u2019'
