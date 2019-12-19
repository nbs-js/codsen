// rule: attribute-validate-border
// -----------------------------------------------------------------------------

import { validateDigitOnly } from "../../util/util";

function attributeValidateBorder(context, ...opts) {
  return {
    attribute: function(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateBorder() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      // console.log(
      //   `015 attributeValidateBorder(): node = ${JSON.stringify(node, null, 4)}`
      // );

      if (node.attribName === "border") {
        // validate the parent
        if (!["table", "img", "object"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-border",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have this attribute.`,
            fix: null
          });
        }

        const errorArr = validateDigitOnly(
          node.attribValue,
          node.attribValueStartAt,
          {
            type: "integer"
          }
        );
        console.log(
          `043 received errorArr = ${JSON.stringify(errorArr, null, 4)}`
        );

        errorArr.forEach(errorObj => {
          console.log(`047 RAISE ERROR`);
          context.report(
            Object.assign({}, errorObj, {
              ruleId: "attribute-validate-border"
            })
          );
        });
      }
    }
  };
}

export default attributeValidateBorder;