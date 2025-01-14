import { findMalformed } from "string-find-malformed";
import { matchRight } from "string-match-left-right";

import splitByWhitespace from "./splitByWhitespace";
import { CommentToken } from "../../../codsen-tokenizer/src/util/util";
import { ErrorObj } from "./commonTypes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare let DEV: boolean;

function validateCommentOpening(token: CommentToken): ErrorObj[] {
  let reference = {
    simple: /<!--/g,
    only: /<!--\[[^\]]+\]>/g,
    not: /<!--\[[^\]]+\]><!-->/g,
  };

  DEV &&
    console.log(
      `020 validateCommentOpening(): ${`\u001b[${33}m${`token`}\u001b[${39}m`} = ${JSON.stringify(
        token,
        null,
        4
      )}`
    );

  // if all is fine, end quick
  if (
    (token.kind === "simple" && reference.simple.test(token.value)) ||
    (token.kind === "only" && reference.only.test(token.value)) ||
    (token.kind === "not" && reference.not.test(token.value))
  ) {
    DEV &&
      console.log(`034 validateCommentOpening(): REGEX PASSES, EARLY EXIT`);
    return [];
  }

  let errorArr: ErrorObj[] = [];

  // assemble string without whitespace:
  let valueWithoutWhitespace = "";

  if (token.kind === "simple") {
    DEV && console.log(`044 validateCommentOpening(): simple comment clauses`);
    // first, tackle any inner whitespace
    splitByWhitespace(
      token.value,
      ([charFrom, charTo]) => {
        valueWithoutWhitespace = `${valueWithoutWhitespace}${token.value.slice(
          charFrom,
          charTo
        )}`;
      },
      ([whitespaceFrom, whitespaceTo]) => {
        errorArr.push({
          idxFrom: token.start,
          idxTo: token.end,
          message: "Remove whitespace.",
          fix: {
            ranges: [
              [whitespaceFrom + token.start, whitespaceTo + token.start],
            ],
          },
        });
      }
    );
  }

  DEV &&
    console.log(
      `071 ██ ${`\u001b[${33}m${`valueWithoutWhitespace`}\u001b[${39}m`} = ${JSON.stringify(
        valueWithoutWhitespace,
        null,
        4
      )}`
    );

  // if all it took was to remove some whitespace to get a correct value,
  // that's the end - return the "errorArr" with only whitespace ranges:
  if (
    (token.kind === "simple" &&
      reference.simple.test(valueWithoutWhitespace)) ||
    (token.kind === "only" && reference.only.test(valueWithoutWhitespace)) ||
    (token.kind === "not" && reference.not.test(valueWithoutWhitespace))
  ) {
    DEV && console.log(`086 ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`}`);
    return errorArr;
  }

  // if processing continues, it means something more is wrong
  DEV && console.log(`091 validateCommentOpening(): something is wrong`);
  DEV &&
    console.log(
      `094 validateCommentOpening(): errorArr so far: ${JSON.stringify(
        errorArr,
        null,
        4
      )}`
    );

  let wrongBracketType = false;

  // check the opening tag's beginning:
  if (["only", "not"].includes(token.kind)) {
    // if beginning is malformed:
    findMalformed(token.value, "<!--[", ({ idxFrom, idxTo }) => {
      let finalIdxTo = idxTo;
      // take precaution, "not" type openings have very similar
      // ending, <!--> which will get caught as well here!
      if (idxFrom === token.start) {
        DEV &&
          console.log(
            `113 validateCommentOpening(): DETECTED MALFORMED RANGE [${idxFrom}, ${idxTo}]`
          );
        DEV &&
          console.log(
            `117 ███████████████████████████████████████ ${`\u001b[${33}m${`token.value[idxFrom]`}\u001b[${39}m`} = ${JSON.stringify(
              token.value[idxFrom],
              null,
              4
            )}`
          );
        if (
          // imagine, we searched for "<!--[" in "<!--{if !mso}><!-->" -
          // the idxTo is currently at "{" - search stopped at "{" and caught
          // only "<!--", the frontal part.
          // We check, maybe there's wrong type opening bracket, followed by "if"
          "{(".includes(token.value[idxTo]) &&
          // and "if" follows
          matchRight(token.value, idxTo, "if", {
            trimBeforeMatching: true,
          })
        ) {
          wrongBracketType = true;
          finalIdxTo += 1;
          DEV &&
            console.log(
              `138 validateCommentOpening(): ${`\u001b[${32}m${`SET`}\u001b[${39}m`} finalIdxTo = ${finalIdxTo}`
            );
        }
        errorArr.push({
          idxFrom: token.start,
          idxTo: token.end,
          message: "Malformed opening comment tag.",
          fix: {
            ranges: [
              [idxFrom + token.start, finalIdxTo + token.start, "<!--["],
            ],
          },
        });
      }
    });
  }

  // check the ending part:
  if (token.kind === "not") {
    DEV &&
      console.log(`158 validateCommentOpening(): "not"-kind comment clauses`);
    // if ending of the opening is malformed:
    findMalformed(token.value, "]><!-->", ({ idxFrom, idxTo }) => {
      let finalIdxFrom = idxFrom;
      if (
        "})".includes(token.value[idxFrom - 1]) &&
        // also require that token would start with:
        // "<!--{if" or "<!--(if"
        wrongBracketType
      ) {
        finalIdxFrom -= 1;
      }

      DEV &&
        console.log(
          `173 validateCommentOpening(): DETECTED MALFORMED RANGE [${idxFrom}, ${idxTo}]`
        );
      errorArr.push({
        idxFrom: token.start,
        idxTo: token.end,
        message: "Malformed opening comment tag.",
        fix: {
          ranges: [
            [finalIdxFrom + token.start, idxTo + token.start, "]><!-->"],
          ],
        },
      });
    });
  } else if (token.kind === "only") {
    DEV &&
      console.log(`188 validateCommentOpening(): "only"-kind comment clauses`);
    // plan: take the value, chomp all ">" and "]" characters
    // from the end of it, then if anything's suspicious,
    // replace all that with tight "]>".

    for (let i = token.value.length; i--; ) {
      if (token.value[i].trim().length && !">]".includes(token.value[i])) {
        // if heads already report wrong bracket type, extend by one character
        // and remove that bracket too
        let rangeStart = i + 1;
        if ("})".includes(token.value[i]) && wrongBracketType) {
          rangeStart -= 1;
        }
        if (token.value.slice(i + 1) !== "]>") {
          errorArr.push({
            idxFrom: token.start,
            idxTo: token.end,
            message: "Malformed opening comment tag.",
            fix: {
              ranges: [[rangeStart + token.start, token.end, "]>"]],
            },
          });
        }
        break;
      }
    }
  }

  return errorArr;
}

export default validateCommentOpening;
