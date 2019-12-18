// rule: attribute-validate-width
// -----------------------------------------------------------------------------

import { validateDigitAndUnit } from "../../util";

// it flags up malformed HTML attributes

function attributeValidateWidth(context, ...opts) {
  return {
    attribute: function(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateWidth() ███████████████████████████████████████`
      );
      console.log(
        `015 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      // console.log(
      //   `015 attributeValidateWidth(): node = ${JSON.stringify(node, null, 4)}`
      // );

      const errorArr = validateDigitAndUnit(
        node.attribValue,
        node.attribValueStartAt,
        {
          badUnits: ["px"],
          noUnitsIsFine: true
        }
      );
      console.log(
        `034 received errorArr = ${JSON.stringify(errorArr, null, 4)}`
      );

      errorArr.forEach(errorObj => {
        console.log(`038 RAISE ERROR`);
        context.report(
          Object.assign({}, errorObj, {
            ruleId: "attribute-validate-width"
          })
        );
      });
    }
  };
}

export default attributeValidateWidth;