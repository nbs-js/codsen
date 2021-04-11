import { Linter, RuleObjType } from "../../linter";
import { isObj } from "../../util/util";
import { Obj, Attrib, Property } from "../../util/commonTypes";
import op from "object-path";
// import { AttribSupplementedWithParent } from "../../util/commonTypes";

// rule: css-required
// enforces CSS inline styles on HTML tags
// -----------------------------------------------------------------------------

interface Opts {
  [tagName: string]: {
    [propName: string]: undefined | null | number | string;
  };
}
interface CssRequired {
  (context: Linter, opts?: Opts): RuleObjType;
}
const cssRequired: CssRequired = (context, opts) => {
  return {
    tag(node) {
      console.log(
        `███████████████████████████████████████ cssRequired() ███████████████████████████████████████`
      );
      console.log(
        `026 cssRequired(): incoming ${`\u001b[${33}m${`node`}\u001b[${39}m`} = ${JSON.stringify(
          node,
          null,
          4
        )}`
      );

      const normalisedOpts: Obj = {};
      // normalise the opts
      if (opts && isObj(opts)) {
        Object.keys(opts).forEach((tagName) => {
          if (isObj(opts[tagName])) {
            Object.keys(opts[tagName]).forEach((prop) => {
              if (
                // string or bool true or numbers except zero
                opts[tagName][prop] ||
                // include zero
                opts[tagName][prop] === 0
              ) {
                op.set(
                  normalisedOpts,
                  `${tagName}.${prop}`,
                  opts[tagName][prop]
                );
              }
            });
          }
        });
      }

      if (
        Object.keys(normalisedOpts).includes(node.tagName) &&
        normalisedOpts[node.tagName] &&
        isObj(normalisedOpts[node.tagName]) &&
        Object.keys(normalisedOpts[node.tagName]).length
      ) {
        console.log(`062 attributeRequired(): check attrs`);

        // quick end - style attribute is missing
        let styleAttrib: undefined | Attrib;
        if (node.attribs.length) {
          for (let i = node.attribs.length; i--; ) {
            if (node.attribs[i].attribName === "style") {
              styleAttrib = node.attribs[i];
              break;
            }
          }
        }

        if (isObj(styleAttrib)) {
          console.log(
            `077 ${`\u001b[${32}m${`style attr is not missing`}\u001b[${39}m`}`
          );
          console.log(
            `080 FIY, ${`\u001b[${33}m${`styleAttrib`}\u001b[${39}m`} = ${JSON.stringify(
              styleAttrib,
              null,
              4
            )}`
          );
          Object.keys(normalisedOpts[node.tagName])
            // go through each settings object
            .forEach((rule) => {
              console.log(
                `090 checking ${`\u001b[${33}m${`rule`}\u001b[${39}m`} ${`\u001b[${35}m${rule}: ${
                  normalisedOpts[node.tagName][rule]
                }\u001b[${39}m`}`
              );
              // it depends, is it just bool true, a loose requirement, or strict,
              // a value being enforced, when coming as a string or a number
              if (
                ["number", "string"].includes(
                  typeof normalisedOpts[node.tagName][rule]
                )
              ) {
                console.log(
                  `102 ${`\u001b[${32}m${`strict value check`}\u001b[${39}m`}`
                );
                let propFound = false;
                // check all present properties (will include text whitespace nodes!)
                (styleAttrib as Attrib).attribValue.forEach((stylePropNode) => {
                  console.log(
                    `108 ███████████████████████████████████████ ${`\u001b[${33}m${`stylePropNode`}\u001b[${39}m`} = ${JSON.stringify(
                      stylePropNode,
                      null,
                      4
                    )}`
                  );
                  console.log(
                    `${`\u001b[${33}m${`rule`}\u001b[${39}m`} = ${JSON.stringify(
                      rule,
                      null,
                      4
                    )}`
                  );
                  console.log(
                    `${`\u001b[${33}m${`(stylePropNode as Property).property`}\u001b[${39}m`} = ${JSON.stringify(
                      (stylePropNode as Property).property,
                      null,
                      4
                    )}`
                  );
                  if ((stylePropNode as Property).property === rule) {
                    propFound = true;
                    console.log(`130 checking ${rule}`);
                    if (
                      (stylePropNode as Property).value !==
                      String(normalisedOpts[node.tagName][rule])
                    ) {
                      console.log(
                        `136 ${`\u001b[${31}m${rule} has wrong value!\u001b[${39}m`}`
                      );
                      const should = (stylePropNode as Property).valueStarts
                        ? `Should be`
                        : `Missing value`;
                      context.report({
                        ruleId: "css-required",
                        message: `"${should} "${
                          normalisedOpts[node.tagName][rule]
                        }".`,
                        idxFrom:
                          (stylePropNode as Property).valueStarts ||
                          (stylePropNode as Property).start, // mind the value-less broken properties
                        idxTo:
                          (stylePropNode as Property).valueEnds ||
                          (stylePropNode as Property).end,
                        fix: null,
                      });
                    }
                  }
                });

                if (!propFound) {
                  console.log(
                    `160 ${`\u001b[${31}m${rule} is missing!\u001b[${39}m`}`
                  );
                  context.report({
                    ruleId: "css-required",
                    message: `"${rule}: ${
                      normalisedOpts[node.tagName][rule]
                    }" is missing.`,
                    idxFrom: (styleAttrib as Attrib).attribStarts,
                    idxTo: (styleAttrib as Attrib).attribEnds,
                    fix: null,
                  });
                }
              } else {
                console.log(
                  `174 ${`\u001b[${32}m${`just check is rule present (any value OK)`}\u001b[${39}m`}`
                );
                if (
                  !(styleAttrib as Attrib).attribValue.some(
                    (ruleNode) => (ruleNode as Property).property === rule
                  )
                ) {
                  console.log(
                    `182 ${`\u001b[${31}m${rule} is missing!\u001b[${39}m`}`
                  );
                  context.report({
                    ruleId: "css-required",
                    message: `Property "${rule}" is missing.`,
                    idxFrom: (styleAttrib as Attrib).attribStarts,
                    idxTo: (styleAttrib as Attrib).attribEnds,
                    fix: null,
                  });
                }
              }
            });
        } else {
          console.log(
            `196 ${`\u001b[${31}m${`style attr is missing`}\u001b[${39}m`}`
          );
          context.report({
            ruleId: "css-required",
            message: `Attribute "style" is missing.`,
            idxFrom: node.start,
            idxTo: node.end,
            fix: null,
          });
        }
      }
    },
  };
};

export default cssRequired;