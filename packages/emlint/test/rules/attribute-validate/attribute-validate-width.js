const t = require("tap");
const { Linter } = require("../../../dist/emlint.cjs");
const { applyFixes } = require("../../../t-util/util");

// 01. validation
// -----------------------------------------------------------------------------

t.test(
  `01.01 - ${`\u001b[${36}m${`validation`}\u001b[${39}m`} - no width`,
  t => {
    const str = `<table>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    t.equal(applyFixes(str, messages), str);
    t.same(messages, []);
    t.end();
  }
);

t.test(
  `01.02 - ${`\u001b[${36}m${`validation`}\u001b[${39}m`} - width in px`,
  t => {
    const str = `<table width="600px">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // t.equal(applyFixes(str, messages), `<table width="600">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 17,
        idxTo: 19,
        message: `Remove px.`,
        fix: {
          ranges: [[17, 19]]
        }
      }
    ]);
    t.end();
  }
);

// 02. rogue whitespace
// -----------------------------------------------------------------------------

t.test(
  `02.01 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - space in front`,
  t => {
    const str = `<table width=" 600">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    t.equal(applyFixes(str, messages), `<table width="600">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 14,
        idxTo: 15,
        message: `Remove whitespace.`,
        fix: {
          ranges: [[14, 15]]
        }
      }
    ]);
    t.end();
  }
);

t.test(`02.02 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - space after`, t => {
  const str = `<table width="600 ">`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-width": 2
    }
  });
  t.equal(applyFixes(str, messages), `<table width="600">`);
  t.match(messages, [
    {
      ruleId: "attribute-validate-width",
      idxFrom: 17,
      idxTo: 18,
      message: `Remove whitespace.`,
      fix: {
        ranges: [[17, 18]]
      }
    }
  ]);
  t.end();
});

t.test(
  `02.03 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - copious whitespace around`,
  t => {
    const str = `<table width="  600  ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    t.equal(applyFixes(str, messages), `<table width="600">`);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 14,
        idxTo: 21,
        message: `Remove whitespace.`,
        fix: {
          ranges: [
            [14, 16],
            [19, 21]
          ]
        }
      }
    ]);
    t.end();
  }
);

t.test(
  `02.04 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - between number and px`,
  t => {
    const str = `<table width="50\tpx">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 16,
        idxTo: 19,
        message: `Rogue whitespace.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `02.05 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - between number and %`,
  t => {
    const str = `<table width="50\t%">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 16,
        idxTo: 18,
        message: `Rogue whitespace.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `02.06 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - only trimmable whitespace as a value`,
  t => {
    const str = `<table width="  \t">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 14,
        idxTo: 17,
        message: `Missing value.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(`02.07 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - unit only`, t => {
  const str = `<table width="px">`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-width": 2
    }
  });
  // can't fix:
  t.equal(applyFixes(str, messages), str);
  t.match(messages, [
    {
      ruleId: "attribute-validate-width",
      idxFrom: 14,
      idxTo: 16,
      message: `Digits missing.`,
      fix: null
    }
  ]);
  t.end();
});

t.test(`02.08 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - unit only`, t => {
  const str = `<table width="%">`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-width": 2
    }
  });
  // can't fix:
  t.equal(applyFixes(str, messages), str);
  t.match(messages, [
    {
      ruleId: "attribute-validate-width",
      idxFrom: 14,
      idxTo: 15,
      message: `Digits missing.`,
      fix: null
    }
  ]);
  t.end();
});

t.test(`02.09 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - unit only`, t => {
  const str = `<table width="px">`;
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "attribute-validate-width": 2
    }
  });
  // can't fix:
  t.equal(applyFixes(str, messages), str);
  t.match(messages, [
    {
      ruleId: "attribute-validate-width",
      idxFrom: 14,
      idxTo: 16,
      message: `Digits missing.`,
      fix: null
    }
  ]);
  t.end();
});

t.test(
  `02.10 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - unrecognised unit`,
  t => {
    const str = `<table width="6z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 15,
        idxTo: 16,
        message: `Unrecognised unit.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `02.11 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - unrecognised unit`,
  t => {
    const str = `<table width="6 a z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 15,
        idxTo: 19,
        message: `Unrecognised unit.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `02.12 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - letter in the middle of digits, legit unit`,
  t => {
    const str = `<table width="1a0%">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 15,
        idxTo: 18,
        message: `Messy value.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `02.13 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - letter in the middle of digits, bad unit`,
  t => {
    const str = `<table width="1a0z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 15,
        idxTo: 18,
        message: `Messy value.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `02.14 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - duplicate units, %`,
  t => {
    const str = `<table width="100%%">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 17,
        idxTo: 19,
        message: `Unrecognised unit.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `02.15 - ${`\u001b[${36}m${`messy`}\u001b[${39}m`} - duplicate units, px`,
  t => {
    const str = `<table width="100pxpx">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 17,
        idxTo: 21,
        message: `Unrecognised unit.`,
        fix: null
      }
    ]);
    t.end();
  }
);

// 03. wrong parent tag
// -----------------------------------------------------------------------------

t.test(
  `03.01 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - recognised tag`,
  t => {
    const str = `<br width="100">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 4,
        idxTo: 15,
        message: `Tag "br" can't have this attribute.`,
        fix: null
      }
    ]);
    t.end();
  }
);

t.test(
  `03.02 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - unrecognised tag`,
  t => {
    const str = `<zzz width="100">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-width": 2
      }
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str);
    t.match(messages, [
      {
        ruleId: "attribute-validate-width",
        idxFrom: 5,
        idxTo: 16,
        message: `Tag "zzz" can't have this attribute.`,
        fix: null
      }
    ]);
    t.end();
  }
);