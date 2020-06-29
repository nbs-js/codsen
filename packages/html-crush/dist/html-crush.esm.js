/**
 * html-crush
 * Minifies HTML/CSS: valid or broken, pure or mixed with other languages
 * Version: 1.9.35
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/html-crush
 */

import isObj from 'lodash.isplainobject';
import applyRanges from 'ranges-apply';
import Ranges from 'ranges-push';
import { matchRightIncl, matchRight, matchLeft } from 'string-match-left-right';
import expand from 'string-range-expander';
import { right, left } from 'string-left-right';

var version = "1.9.35";

const finalIndexesToDelete = new Ranges({ limitToBeAddedWhitespace: true });
const defaults = {
  lineLengthLimit: 500,
  removeIndentations: true,
  removeLineBreaks: false,
  removeHTMLComments: false,
  removeCSSComments: true,
  reportProgressFunc: null,
  reportProgressFuncFrom: 0,
  reportProgressFuncTo: 100,
  breakToTheLeftOf: [
    "</td",
    "<html",
    "</html",
    "<head",
    "</head",
    "<meta",
    "<link",
    "<table",
    "<script",
    "</script",
    "<!DOCTYPE",
    "<style",
    "</style",
    "<title",
    "<body",
    "@media",
    "</body",
    "<!--[if",
    "<!--<![endif",
    "<![endif]",
  ],
  mindTheInlineTags: [
    "a",
    "abbr",
    "acronym",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "br",
    "button",
    "canvas",
    "cite",
    "code",
    "data",
    "datalist",
    "del",
    "dfn",
    "em",
    "embed",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "map",
    "mark",
    "meter",
    "noscript",
    "object",
    "output",
    "picture",
    "progress",
    "q",
    "ruby",
    "s",
    "samp",
    "script",
    "select",
    "slot",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "svg",
    "template",
    "textarea",
    "time",
    "u",
    "tt",
    "var",
    "video",
    "wbr",
  ],
};
const applicableOpts = {
  removeHTMLComments: false,
  removeCSSComments: false,
};
function isStr(something) {
  return typeof something === "string";
}
function isLetter(something) {
  return (
    typeof something === "string" &&
    something.toUpperCase() !== something.toLowerCase()
  );
}
function crush(str, originalOpts) {
  const start = Date.now();
  if (!isStr(str)) {
    if (str === undefined) {
      throw new Error(
        "html-crush: [THROW_ID_01] the first input argument is completely missing! It should be given as string."
      );
    } else {
      throw new Error(
        `html-crush: [THROW_ID_02] the first input argument must be string! It was given as "${typeof str}", equal to:\n${JSON.stringify(
          str,
          null,
          4
        )}`
      );
    }
  }
  if (originalOpts && !isObj(originalOpts)) {
    throw new Error(
      `html-crush: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type ${typeof originalOpts}, equal to ${JSON.stringify(
        originalOpts,
        null,
        4
      )}`
    );
  }
  if (
    originalOpts &&
    Array.isArray(originalOpts.breakToTheLeftOf) &&
    originalOpts.breakToTheLeftOf.length
  ) {
    for (let z = 0, len = originalOpts.breakToTheLeftOf.length; z < len; z++) {
      if (!isStr(originalOpts.breakToTheLeftOf[z])) {
        throw new TypeError(
          `html-crush: [THROW_ID_05] the opts.breakToTheLeftOf array contains non-string elements! For example, element at index ${z} is of a type "${typeof originalOpts
            .breakToTheLeftOf[z]}" and is equal to:\n${JSON.stringify(
            originalOpts.breakToTheLeftOf[z],
            null,
            4
          )}`
        );
      }
    }
  }
  const opts = { ...defaults, ...originalOpts };
  if (opts.breakToTheLeftOf === false || opts.breakToTheLeftOf === null) {
    opts.breakToTheLeftOf = [];
  }
  if (typeof opts.removeHTMLComments === "boolean") {
    opts.removeHTMLComments = opts.removeHTMLComments ? 1 : 0;
  }
  let breakToTheLeftOfFirstLetters = "";
  if (Array.isArray(opts.breakToTheLeftOf) && opts.breakToTheLeftOf.length) {
    breakToTheLeftOfFirstLetters = [
      ...new Set(opts.breakToTheLeftOf.map((val) => val[0])),
    ].join("");
  }
  let lastLinebreak = null;
  let whitespaceStartedAt = null;
  let nonWhitespaceCharMet = false;
  let countCharactersPerLine = 0;
  let withinStyleTag = false;
  let withinHTMLConditional = false;
  let withinInlineStyle = null;
  let styleCommentStartedAt = null;
  let htmlCommentStartedAt = null;
  let scriptStartedAt = null;
  let doNothing;
  let stageFrom = null;
  let stageTo = null;
  let stageAdd = null;
  let tagName = null;
  let tagNameStartsAt = null;
  let leftTagName = null;
  const CHARS_BREAK_ON_THE_RIGHT_OF_THEM = `>};`;
  const CHARS_BREAK_ON_THE_LEFT_OF_THEM = `<`;
  const CHARS_DONT_BREAK_ON_THE_LEFT_OF_THEM = `!`;
  const DELETE_TIGHTLY_IF_ON_LEFT_IS = `>`;
  const DELETE_TIGHTLY_IF_ON_RIGHT_IS = `<`;
  const set = `{},:;<>~+`;
  const DELETE_IN_STYLE_TIGHTLY_IF_ON_LEFT_IS = set;
  const DELETE_IN_STYLE_TIGHTLY_IF_ON_RIGHT_IS = set;
  let beginningOfAFile = true;
  const len = str.length;
  const midLen = Math.floor(len / 2);
  const leavePercForLastStage = 0.01;
  let ceil;
  if (opts.reportProgressFunc) {
    ceil = Math.floor(
      opts.reportProgressFuncTo -
        (opts.reportProgressFuncTo - opts.reportProgressFuncFrom) *
          leavePercForLastStage -
        opts.reportProgressFuncFrom
    );
  }
  let currentPercentageDone;
  let lastPercentage = 0;
  if (len) {
    for (let i = 0; i < len; i++) {
      if (opts.reportProgressFunc) {
        if (len > 1000 && len < 2000) {
          if (i === midLen) {
            opts.reportProgressFunc(
              Math.floor(
                (opts.reportProgressFuncTo - opts.reportProgressFuncFrom) / 2
              )
            );
          }
        } else if (len >= 2000) {
          currentPercentageDone =
            opts.reportProgressFuncFrom + Math.floor((i / len) * ceil);
          if (currentPercentageDone !== lastPercentage) {
            lastPercentage = currentPercentageDone;
            opts.reportProgressFunc(currentPercentageDone);
          }
        }
      }
      if (doNothing && typeof doNothing === "number" && i >= doNothing) {
        doNothing = undefined;
      }
      if (
        scriptStartedAt !== null &&
        str.startsWith("</script", i) &&
        !isLetter(str[i + 8])
      ) {
        if (
          (opts.removeIndentations || opts.removeLineBreaks) &&
          i > 0 &&
          str[~-i] &&
          !str[~-i].trim()
        ) {
          for (let y = i; y--; ) {
            if (str[y] === "\n" || str[y] === "\r" || str[y].trim()) {
              if (y + 1 < i) {
                finalIndexesToDelete.push(y + 1, i);
              }
              break;
            }
          }
        }
        scriptStartedAt = null;
        doNothing = false;
        i += 8;
        continue;
      }
      if (
        !doNothing &&
        !withinStyleTag &&
        str.startsWith("<script", i) &&
        !isLetter(str[i + 7])
      ) {
        scriptStartedAt = i;
        doNothing = true;
        let whatToInsert = "";
        if (
          (opts.removeLineBreaks || opts.removeIndentations) &&
          whitespaceStartedAt !== null
        ) {
          if (whitespaceStartedAt > 0) {
            whatToInsert = "\n";
          }
          finalIndexesToDelete.push(whitespaceStartedAt, i, whatToInsert);
        }
        whitespaceStartedAt = null;
        lastLinebreak = null;
      }
      if (
        tagNameStartsAt !== null &&
        tagName === null &&
        !/\w/.test(str[i])
      ) {
        tagName = str.slice(tagNameStartsAt, i);
        const idxOnTheRight = right(str, ~-i);
        if (str[idxOnTheRight] === ">" && !str[i].trim()) {
          finalIndexesToDelete.push(i, right(str, i));
        } else if (
          str[idxOnTheRight] === "/" &&
          str[right(str, idxOnTheRight)] === ">"
        ) {
          if (!str[i].trim()) {
            finalIndexesToDelete.push(i, right(str, i));
          }
          if (str[idxOnTheRight + 1] !== ">") {
            finalIndexesToDelete.push(
              idxOnTheRight + 1,
              right(str, idxOnTheRight + 1)
            );
          }
        }
      }
      if (
        !doNothing &&
        !withinStyleTag &&
        !withinInlineStyle &&
        str[~-i] === "<" &&
        tagNameStartsAt === null
      ) {
        if (/\w/.test(str[i])) {
          tagNameStartsAt = i;
        } else if (
          str[right(str, ~-i)] === "/" &&
          /\w/.test(str[right(str, right(str, ~-i))])
        ) {
          tagNameStartsAt = right(str, right(str, ~-i));
        }
      }
      if (
        !doNothing &&
        (withinStyleTag || withinInlineStyle) &&
        styleCommentStartedAt !== null &&
        str[i] === "*" &&
        str[i + 1] === "/"
      ) {
        [stageFrom, stageTo] = expand({
          str,
          from: styleCommentStartedAt,
          to: i + 2,
          ifLeftSideIncludesThisThenCropTightly:
            DELETE_IN_STYLE_TIGHTLY_IF_ON_LEFT_IS ,
          ifRightSideIncludesThisThenCropTightly:
            DELETE_IN_STYLE_TIGHTLY_IF_ON_RIGHT_IS ,
        });
        styleCommentStartedAt = null;
        if (stageFrom != null) {
          finalIndexesToDelete.push(stageFrom, stageTo);
        } else {
          countCharactersPerLine += 1;
          i += 1;
        }
        doNothing = i + 2;
      }
      if (
        !doNothing &&
        (withinStyleTag || withinInlineStyle) &&
        styleCommentStartedAt === null &&
        str[i] === "/" &&
        str[i + 1] === "*"
      ) {
        if (!applicableOpts.removeCSSComments) {
          applicableOpts.removeCSSComments = true;
        }
        if (opts.removeCSSComments) {
          styleCommentStartedAt = i;
        }
      }
      if (withinHTMLConditional && str.startsWith("![endif", i + 1)) {
        withinHTMLConditional = false;
      }
      if (
        !doNothing &&
        !withinStyleTag &&
        !withinInlineStyle &&
        htmlCommentStartedAt !== null
      ) {
        let distanceFromHereToCommentEnding;
        if (str.startsWith("-->", i)) {
          distanceFromHereToCommentEnding = 3;
        } else if (str[i] === ">" && str[i - 1] === "]") {
          distanceFromHereToCommentEnding = 1;
        }
        if (distanceFromHereToCommentEnding) {
          [stageFrom, stageTo] = expand({
            str,
            from: htmlCommentStartedAt,
            to: i + distanceFromHereToCommentEnding,
          });
          htmlCommentStartedAt = null;
          if (stageFrom != null) {
            finalIndexesToDelete.push(stageFrom, stageTo);
          } else {
            countCharactersPerLine += distanceFromHereToCommentEnding - 1;
            i += distanceFromHereToCommentEnding - 1;
          }
          doNothing = i + distanceFromHereToCommentEnding;
        }
      }
      if (
        !doNothing &&
        !withinStyleTag &&
        !withinInlineStyle &&
        str.startsWith("<!--", i) &&
        htmlCommentStartedAt === null
      ) {
        if (str.startsWith("[if", i + 4)) {
          if (!withinHTMLConditional) {
            withinHTMLConditional = true;
          }
          if (opts.removeHTMLComments === 2) {
            htmlCommentStartedAt = i;
          }
        } else if (
          opts.removeHTMLComments &&
          (!withinHTMLConditional || opts.removeHTMLComments === 2)
        ) {
          htmlCommentStartedAt = i;
        }
        if (!applicableOpts.removeHTMLComments) {
          applicableOpts.removeHTMLComments = true;
        }
      }
      if (
        !doNothing &&
        withinStyleTag &&
        styleCommentStartedAt === null &&
        str.startsWith("</style", i) &&
        !isLetter(str[i + 7])
      ) {
        withinStyleTag = false;
      } else if (
        !doNothing &&
        !withinStyleTag &&
        styleCommentStartedAt === null &&
        str.startsWith("<style", i) &&
        !isLetter(str[i + 6])
      ) {
        withinStyleTag = true;
        if (
          (opts.removeLineBreaks || opts.removeIndentations) &&
          opts.breakToTheLeftOf.includes("<style") &&
          str.startsWith(` type="text/css">`, i + 6) &&
          str[i + 24]
        ) {
          finalIndexesToDelete.push(i + 23, i + 23, "\n");
        }
      }
      if (
        !doNothing &&
        !withinInlineStyle &&
        `"'`.includes(str[i]) &&
        str.endsWith("style=", i)
      ) {
        withinInlineStyle = i;
      }
      if (!doNothing && !str[i].trim()) {
        if (whitespaceStartedAt === null) {
          whitespaceStartedAt = i;
        }
      } else if (
        !doNothing &&
        !(
          (withinStyleTag || withinInlineStyle) &&
          styleCommentStartedAt !== null
        )
      ) {
        if (whitespaceStartedAt !== null) {
          if (opts.removeLineBreaks) {
            countCharactersPerLine += 1;
          }
          if (beginningOfAFile) {
            beginningOfAFile = false;
            if (opts.removeIndentations || opts.removeLineBreaks) {
              finalIndexesToDelete.push(0, i);
            }
          } else {
            if (opts.removeIndentations && !opts.removeLineBreaks) {
              if (
                !nonWhitespaceCharMet &&
                lastLinebreak !== null &&
                i > lastLinebreak
              ) {
                finalIndexesToDelete.push(lastLinebreak + 1, i);
              } else if (whitespaceStartedAt + 1 < i) {
                if (
                  str.endsWith("]>", whitespaceStartedAt) ||
                  str.endsWith("-->", whitespaceStartedAt) ||
                  str.startsWith("<![", i) ||
                  str.startsWith("<!--<![", i)
                ) {
                  finalIndexesToDelete.push(whitespaceStartedAt, i);
                } else if (str[whitespaceStartedAt] === " ") {
                  finalIndexesToDelete.push(whitespaceStartedAt + 1, i);
                } else if (str[~-i] === " ") {
                  finalIndexesToDelete.push(whitespaceStartedAt, ~-i);
                } else {
                  finalIndexesToDelete.push(whitespaceStartedAt, i, " ");
                }
              }
            }
            if (opts.removeLineBreaks || withinInlineStyle) {
              if (
                breakToTheLeftOfFirstLetters.includes(str[i]) &&
                matchRightIncl(str, i, opts.breakToTheLeftOf)
              ) {
                if (!(str[~-i] === "\n" && whitespaceStartedAt === ~-i)) {
                  finalIndexesToDelete.push(whitespaceStartedAt, i, "\n");
                }
                stageFrom = null;
                stageTo = null;
                stageAdd = null;
                whitespaceStartedAt = null;
                countCharactersPerLine = 1;
                continue;
              }
              let whatToAdd = " ";
              if (
                str[i] === "<" &&
                matchRight(str, i, opts.mindTheInlineTags, {
                  cb: (nextChar) => !nextChar || !/\w/.test(nextChar),
                })
              ) ; else if (
                (str[~-whitespaceStartedAt] &&
                  DELETE_TIGHTLY_IF_ON_LEFT_IS.includes(
                    str[~-whitespaceStartedAt]
                  ) &&
                  DELETE_TIGHTLY_IF_ON_RIGHT_IS.includes(str[i])) ||
                ((withinStyleTag || withinInlineStyle) &&
                  styleCommentStartedAt === null &&
                  (DELETE_IN_STYLE_TIGHTLY_IF_ON_LEFT_IS.includes(
                    str[~-whitespaceStartedAt]
                  ) ||
                    DELETE_IN_STYLE_TIGHTLY_IF_ON_RIGHT_IS.includes(str[i]))) ||
                (str.startsWith("!important", i) && !withinHTMLConditional) ||
                (withinInlineStyle &&
                  (str[~-whitespaceStartedAt] === "'" ||
                    str[~-whitespaceStartedAt] === '"')) ||
                (str[~-whitespaceStartedAt] === "}" &&
                  str.startsWith("</style", i)) ||
                (str[i] === ">" &&
                  (`'"`.includes(str[left(str, i)]) ||
                    str[right(str, i)] === "<")) ||
                (str[i] === "/" && str[right(str, i)] === ">")
              ) {
                whatToAdd = "";
                if (
                  str[i] === "/" &&
                  str[i + 1] === ">" &&
                  right(str, i) > i + 1
                ) {
                  finalIndexesToDelete.push(i + 1, right(str, i));
                  countCharactersPerLine -= right(str, i) - i + 1;
                }
              }
              if (whatToAdd && whatToAdd.length) {
                countCharactersPerLine += 1;
              }
              if (!opts.lineLengthLimit) {
                if (
                  !(
                    i === whitespaceStartedAt + 1 &&
                    whatToAdd === " "
                  )
                ) {
                  finalIndexesToDelete.push(whitespaceStartedAt, i, whatToAdd);
                }
              } else {
                if (
                  countCharactersPerLine >= opts.lineLengthLimit ||
                  !str[i + 1] ||
                  str[i] === ">" ||
                  (str[i] === "/" && str[i + 1] === ">")
                ) {
                  if (
                    countCharactersPerLine > opts.lineLengthLimit ||
                    (countCharactersPerLine === opts.lineLengthLimit &&
                      str[i + 1] &&
                      str[i + 1].trim() &&
                      !CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[i]) &&
                      !CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i + 1]))
                  ) {
                    whatToAdd = "\n";
                    countCharactersPerLine = 1;
                  }
                  if (
                    countCharactersPerLine > opts.lineLengthLimit ||
                    !(whatToAdd === " " && i === whitespaceStartedAt + 1)
                  ) {
                    finalIndexesToDelete.push(
                      whitespaceStartedAt,
                      i,
                      whatToAdd
                    );
                  }
                  stageFrom = null;
                  stageTo = null;
                  stageAdd = null;
                } else if (
                  stageFrom === null ||
                  whitespaceStartedAt < stageFrom
                ) {
                  stageFrom = whitespaceStartedAt;
                  stageTo = i;
                  stageAdd = whatToAdd;
                }
              }
            }
          }
          whitespaceStartedAt = null;
          if (!nonWhitespaceCharMet) {
            nonWhitespaceCharMet = true;
          }
        } else {
          if (beginningOfAFile) {
            beginningOfAFile = false;
          }
          if (opts.removeLineBreaks) {
            countCharactersPerLine += 1;
          }
        }
        if (!nonWhitespaceCharMet) {
          nonWhitespaceCharMet = true;
        }
      }
      if (
        !doNothing &&
        !beginningOfAFile &&
        i !== 0 &&
        opts.removeLineBreaks &&
        (opts.lineLengthLimit || breakToTheLeftOfFirstLetters) &&
        !str.startsWith("</a", i)
      ) {
        if (
          breakToTheLeftOfFirstLetters &&
          matchRightIncl(str, i, opts.breakToTheLeftOf) &&
          str.slice(0, i).trim() &&
          (!str.startsWith("<![endif]", i) || !matchLeft(str, i, "<!--"))
        ) {
          finalIndexesToDelete.push(i, i, "\n");
          stageFrom = null;
          stageTo = null;
          stageAdd = null;
          countCharactersPerLine = 1;
          continue;
        } else if (
          opts.lineLengthLimit &&
          countCharactersPerLine <= opts.lineLengthLimit
        ) {
          if (
            !str[i + 1] ||
            (CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i]) &&
              !CHARS_DONT_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i])) ||
            CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[i]) ||
            !str[i].trim()
          ) {
            if (
              stageFrom !== null &&
              stageTo !== null &&
              (stageFrom !== stageTo || (stageAdd && stageAdd.length))
            ) {
              let whatToAdd = stageAdd;
              if (
                str[i].trim() &&
                str[i + 1] &&
                str[i + 1].trim() &&
                countCharactersPerLine + (stageAdd ? stageAdd.length : 0) >
                  opts.lineLengthLimit
              ) {
                whatToAdd = "\n";
              }
              if (
                countCharactersPerLine + (whatToAdd ? whatToAdd.length : 0) >
                  opts.lineLengthLimit ||
                !(whatToAdd === " " && stageTo === stageFrom + 1)
              ) {
                if (!(str[~-stageFrom] === "}" && str[stageTo] === "{")) {
                  finalIndexesToDelete.push(stageFrom, stageTo, whatToAdd);
                }
              } else {
                countCharactersPerLine -= lastLinebreak;
              }
            }
            if (
              str[i].trim() &&
              (CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i]) ||
                (str[~-i] &&
                  CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[~-i]))) &&
              isStr(leftTagName) &&
              !opts.mindTheInlineTags.includes(tagName) &&
              !(
                str[i] === "<" &&
                matchRight(str, i, opts.mindTheInlineTags, {
                  cb: (nextChar) => !nextChar || !/\w/.test(nextChar),
                })
              ) &&
              !(
                str[i] === "<" &&
                matchRight(str, i, opts.mindTheInlineTags, {
                  trimCharsBeforeMatching: "/",
                  cb: (nextChar) => !nextChar || !/\w/.test(nextChar),
                })
              )
            ) {
              stageFrom = i;
              stageTo = i;
              stageAdd = null;
            } else if (
              styleCommentStartedAt === null &&
              stageFrom !== null &&
              (withinInlineStyle ||
                !opts.mindTheInlineTags ||
                !Array.isArray(opts.mindTheInlineTags) ||
                (Array.isArray(opts.mindTheInlineTags.length) &&
                  !opts.mindTheInlineTags.length) ||
                !isStr(tagName) ||
                (Array.isArray(opts.mindTheInlineTags) &&
                  opts.mindTheInlineTags.length &&
                  isStr(tagName) &&
                  !opts.mindTheInlineTags.includes(tagName))) &&
              !(
                str[i] === "<" &&
                matchRight(str, i, opts.mindTheInlineTags, {
                  trimCharsBeforeMatching: "/",
                  cb: (nextChar) => !nextChar || !/\w/.test(nextChar),
                })
              )
            ) {
              stageFrom = null;
              stageTo = null;
              stageAdd = null;
            }
          }
        } else if (opts.lineLengthLimit) {
          if (
            CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i]) &&
            !(
              str[i] === "<" &&
              matchRight(str, i, opts.mindTheInlineTags, {
                trimCharsBeforeMatching: "/",
                cb: (nextChar) => !nextChar || !/\w/.test(nextChar),
              })
            )
          ) {
            if (
              stageFrom !== null &&
              stageTo !== null &&
              (stageFrom !== stageTo || (stageAdd && stageAdd.length))
            ) {
              const whatToAddLength =
                stageAdd && stageAdd.length ? stageAdd.length : 0;
              if (
                countCharactersPerLine -
                  (stageTo - stageFrom - whatToAddLength) -
                  1 >
                opts.lineLengthLimit
              ) ; else {
                finalIndexesToDelete.push(stageFrom, stageTo, stageAdd);
                stageFrom = null;
                stageTo = null;
                stageAdd = null;
                if (
                  countCharactersPerLine -
                    (stageTo - stageFrom - whatToAddLength) -
                    1 ===
                  opts.lineLengthLimit
                ) {
                  finalIndexesToDelete.push(i, i, "\n");
                  countCharactersPerLine = 0;
                }
              }
            } else {
              finalIndexesToDelete.push(i, i, "\n");
              countCharactersPerLine = 0;
            }
          } else if (
            str[i + 1] &&
            CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[i]) &&
            isStr(tagName) &&
            Array.isArray(opts.mindTheInlineTags) &&
            opts.mindTheInlineTags.length &&
            !opts.mindTheInlineTags.includes(tagName)
          ) {
            if (
              stageFrom !== null &&
              stageTo !== null &&
              (stageFrom !== stageTo || (stageAdd && stageAdd.length))
            ) ; else {
              finalIndexesToDelete.push(i + 1, i + 1, "\n");
              countCharactersPerLine = 0;
            }
          } else if (!str[i].trim()) ; else if (!str[i + 1]) {
            if (
              stageFrom !== null &&
              stageTo !== null &&
              (stageFrom !== stageTo || (stageAdd && stageAdd.length))
            ) {
              finalIndexesToDelete.push(stageFrom, stageTo, "\n");
            }
          }
        }
      }
      if (
        !doNothing &&
        !beginningOfAFile &&
        opts.removeLineBreaks &&
        opts.lineLengthLimit &&
        countCharactersPerLine >= opts.lineLengthLimit &&
        stageFrom !== null &&
        stageTo !== null &&
        !CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[i]) &&
        !CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i]) &&
        !"/".includes(str[i])
      ) {
        if (
          !(
            countCharactersPerLine === opts.lineLengthLimit &&
            str[i + 1] &&
            !str[i + 1].trim()
          )
        ) {
          let whatToAdd = "\n";
          if (
            str[i + 1] &&
            !str[i + 1].trim() &&
            countCharactersPerLine === opts.lineLengthLimit
          ) {
            whatToAdd = stageAdd;
          }
          if (whatToAdd === "\n" && !str[~-stageFrom].trim()) {
            stageFrom = left(str, stageFrom) + 1;
          }
          finalIndexesToDelete.push(stageFrom, stageTo, whatToAdd);
          countCharactersPerLine = i - stageTo;
          if (str[i].length) {
            countCharactersPerLine += 1;
          }
          stageFrom = null;
          stageTo = null;
          stageAdd = null;
        }
      }
      if (
        (!doNothing && str[i] === "\n") ||
        (str[i] === "\r" &&
          (!str[i + 1] || (str[i + 1] && str[i + 1] !== "\n")))
      ) {
        lastLinebreak = i;
        if (nonWhitespaceCharMet) {
          nonWhitespaceCharMet = false;
        }
        if (
          !opts.removeLineBreaks &&
          whitespaceStartedAt !== null &&
          whitespaceStartedAt < i &&
          str[i + 1] &&
          str[i + 1] !== "\r" &&
          str[i + 1] !== "\n"
        ) {
          finalIndexesToDelete.push(whitespaceStartedAt, i);
        }
      }
      if (!str[i + 1]) {
        if (withinStyleTag && styleCommentStartedAt !== null) {
          finalIndexesToDelete.push(
            ...expand({
              str,
              from: styleCommentStartedAt,
              to: i,
              ifLeftSideIncludesThisThenCropTightly:
                DELETE_IN_STYLE_TIGHTLY_IF_ON_LEFT_IS ,
              ifRightSideIncludesThisThenCropTightly:
                DELETE_IN_STYLE_TIGHTLY_IF_ON_RIGHT_IS ,
            })
          );
        } else if (whitespaceStartedAt && str[i] !== "\n" && str[i] !== "\r") {
          finalIndexesToDelete.push(whitespaceStartedAt, i + 1);
        } else if (
          whitespaceStartedAt &&
          ((str[i] === "\r" && str[i + 1] === "\n") || str[i] === "\n")
        ) {
          finalIndexesToDelete.push(whitespaceStartedAt, i);
        }
      }
      if (
        !doNothing &&
        withinInlineStyle &&
        withinInlineStyle < i &&
        str[withinInlineStyle] === str[i]
      ) {
        withinInlineStyle = null;
      }
      if (
        !doNothing &&
        !withinStyleTag &&
        str.startsWith("<pre", i) &&
        !isLetter(str[i + 4])
      ) {
        const locationOfClosingPre = str.indexOf("</pre", i + 5);
        if (locationOfClosingPre > 0) {
          doNothing = locationOfClosingPre;
        }
      }
      if (
        !doNothing &&
        !withinStyleTag &&
        str.startsWith("<code", i) &&
        !isLetter(str[i + 5])
      ) {
        const locationOfClosingCode = str.indexOf("</code", i + 5);
        if (locationOfClosingCode > 0) {
          doNothing = locationOfClosingCode;
        }
      }
      if (!doNothing && str.startsWith("<![CDATA[", i)) {
        const locationOfClosingCData = str.indexOf("]]>", i + 9);
        if (locationOfClosingCData > 0) {
          doNothing = locationOfClosingCData;
        }
      }
      if (
        !doNothing &&
        !withinStyleTag &&
        !withinInlineStyle &&
        tagNameStartsAt !== null &&
        str[i] === ">"
      ) {
        if (str[right(str, i)] === "<") {
          leftTagName = tagName;
        }
        tagNameStartsAt = null;
        tagName = null;
      }
      if (str[i] === "<" && leftTagName !== null) {
        leftTagName = null;
      }
    }
    if (finalIndexesToDelete.current()) {
      const startingPercentageDone =
        opts.reportProgressFuncTo -
        (opts.reportProgressFuncTo - opts.reportProgressFuncFrom) *
          leavePercForLastStage;
      const res = applyRanges(
        str,
        finalIndexesToDelete.current(),
        (applyPercDone) => {
          if (opts.reportProgressFunc && len >= 2000) {
            currentPercentageDone = Math.floor(
              startingPercentageDone +
                (opts.reportProgressFuncTo - startingPercentageDone) *
                  (applyPercDone / 100)
            );
            if (currentPercentageDone !== lastPercentage) {
              lastPercentage = currentPercentageDone;
              opts.reportProgressFunc(currentPercentageDone);
            }
          }
        }
      );
      const rangesCopy = Array.from(finalIndexesToDelete.current());
      finalIndexesToDelete.wipe();
      const resLen = res.length;
      return {
        log: {
          timeTakenInMiliseconds: Date.now() - start,
          originalLength: len,
          cleanedLength: resLen,
          bytesSaved: Math.max(len - resLen, 0),
          percentageReducedOfOriginal: len
            ? Math.round((Math.max(len - resLen, 0) * 100) / len)
            : 0,
        },
        ranges: rangesCopy,
        applicableOpts,
        result: res,
      };
    }
  }
  return {
    log: {
      timeTakenInMilliseconds: Date.now() - start,
      originalLength: len,
      cleanedLength: len,
      bytesSaved: 0,
      percentageReducedOfOriginal: 0,
    },
    applicableOpts,
    ranges: [],
    result: str,
  };
}

export { crush, defaults, version };
