export const interdeps = [
  {
    "name": "all-named-html-entities",
    "size": 176730,
    "imports": []
  },
  {
    "name": "array-group-str-omit-num-char",
    "size": 1440,
    "imports": [
      "ranges-apply"
    ]
  },
  {
    "name": "array-of-arrays-into-ast",
    "size": 844,
    "imports": [
      "check-types-mini",
      "object-merge-advanced"
    ]
  },
  {
    "name": "array-pull-all-with-glob",
    "size": 577,
    "imports": []
  },
  {
    "name": "arrayiffy-if-string",
    "size": 353,
    "imports": []
  },
  {
    "name": "ast-compare",
    "size": 3446,
    "imports": [
      "ast-contains-only-empty-space",
      "codsen-utils"
    ]
  },
  {
    "name": "ast-contains-only-empty-space",
    "size": 556,
    "imports": [
      "ast-monkey-traverse"
    ]
  },
  {
    "name": "ast-deep-contains",
    "size": 2087,
    "imports": [
      "ast-monkey-traverse"
    ]
  },
  {
    "name": "ast-delete-object",
    "size": 1256,
    "imports": [
      "ast-compare",
      "ast-monkey-traverse",
      "codsen-utils"
    ]
  },
  {
    "name": "ast-get-object",
    "size": 956,
    "imports": [
      "ast-compare",
      "codsen-utils"
    ]
  },
  {
    "name": "ast-get-values-by-key",
    "size": 680,
    "imports": [
      "ast-monkey-traverse"
    ]
  },
  {
    "name": "ast-is-empty",
    "size": 712,
    "imports": [
      "codsen-utils"
    ]
  },
  {
    "name": "ast-loose-compare",
    "size": 1285,
    "imports": [
      "ast-contains-only-empty-space",
      "codsen-utils"
    ]
  },
  {
    "name": "ast-monkey",
    "size": 5208,
    "imports": [
      "ast-compare",
      "ast-monkey-traverse",
      "check-types-mini",
      "util-array-object-or-both"
    ]
  },
  {
    "name": "ast-monkey-traverse",
    "size": 1064,
    "imports": [
      "ast-monkey-util",
      "codsen-utils"
    ]
  },
  {
    "name": "ast-monkey-traverse-with-lookahead",
    "size": 1187,
    "imports": [
      "codsen-utils"
    ]
  },
  {
    "name": "ast-monkey-util",
    "size": 1085,
    "imports": []
  },
  {
    "name": "charcode-is-valid-xml-name-character",
    "size": 1086,
    "imports": [
      "ranges-is-index-within"
    ]
  },
  {
    "name": "check-types-mini",
    "size": 5581,
    "imports": [
      "arrayiffy-if-string",
      "ast-monkey-traverse",
      "codsen-utils"
    ]
  },
  {
    "name": "codsen-parser",
    "size": 7136,
    "imports": [
      "ast-monkey-util",
      "codsen-tokenizer",
      "string-find-malformed",
      "string-left-right"
    ]
  },
  {
    "name": "codsen-tokenizer",
    "size": 39719,
    "imports": [
      "codsen-utils",
      "html-all-known-attributes",
      "is-char-suitable-for-html-attr-name",
      "is-html-attribute-closing",
      "is-html-tag-opening",
      "string-left-right",
      "string-match-left-right"
    ]
  },
  {
    "name": "codsen-utils",
    "size": 3203,
    "imports": []
  },
  {
    "name": "color-shorthand-hex-to-six-digit",
    "size": 833,
    "imports": [
      "codsen-utils"
    ]
  },
  {
    "name": "csv-sort",
    "size": 4879,
    "imports": [
      "csv-split-easy"
    ]
  },
  {
    "name": "csv-sort-cli",
    "size": 8880,
    "imports": [
      "csv-sort"
    ]
  },
  {
    "name": "csv-split-easy",
    "size": 2263,
    "imports": [
      "string-remove-thousand-separators"
    ]
  },
  {
    "name": "detect-templating-language",
    "size": 763,
    "imports": [
      "regex-is-jinja-nunjucks",
      "regex-is-jsp",
      "regex-jinja-specific"
    ]
  },
  {
    "name": "detergent",
    "size": 24154,
    "imports": [
      "all-named-html-entities",
      "codsen-utils",
      "html-entities-not-email-friendly",
      "ranges-apply",
      "ranges-invert",
      "ranges-process-outside",
      "ranges-push",
      "string-apostrophes",
      "string-collapse-white-space",
      "string-dashes",
      "string-fix-broken-named-entities",
      "string-left-right",
      "string-range-expander",
      "string-remove-widows",
      "string-strip-html",
      "string-trim-spaces-only"
    ]
  },
  {
    "name": "edit-package-json",
    "size": 10243,
    "imports": [
      "ranges-apply",
      "string-left-right"
    ]
  },
  {
    "name": "email-all-chars-within-ascii",
    "size": 1275,
    "imports": [
      "check-types-mini"
    ]
  },
  {
    "name": "email-all-chars-within-ascii-cli",
    "size": 8547,
    "imports": [
      "email-all-chars-within-ascii",
      "string-left-right"
    ]
  },
  {
    "name": "email-comb",
    "size": 20395,
    "imports": [
      "array-pull-all-with-glob",
      "codsen-utils",
      "html-crush",
      "ranges-apply",
      "ranges-push",
      "regex-empty-conditional-comments",
      "string-extract-class-names",
      "string-left-right",
      "string-match-left-right",
      "string-range-expander",
      "string-uglify"
    ]
  },
  {
    "name": "emlint",
    "size": 175823,
    "imports": [
      "ast-monkey-traverse",
      "ast-monkey-util",
      "codsen-parser",
      "codsen-utils",
      "html-all-known-attributes",
      "html-entities-not-email-friendly",
      "is-language-code",
      "is-media-descriptor",
      "is-relative-uri",
      "line-column-mini",
      "ranges-merge",
      "string-find-malformed",
      "string-fix-broken-named-entities",
      "string-left-right",
      "string-match-left-right",
      "string-process-comma-separated"
    ]
  },
  {
    "name": "eslint-plugin-row-num",
    "size": 0,
    "imports": [
      "js-row-num",
      "object-delete-key"
    ]
  },
  {
    "name": "eslint-plugin-test-num",
    "size": 0,
    "imports": [
      "object-delete-key",
      "string-left-right"
    ]
  },
  {
    "name": "extract-search-index",
    "size": 1223,
    "imports": [
      "string-strip-html",
      "string-unfancy"
    ]
  },
  {
    "name": "generate-atomic-css",
    "size": 8118,
    "imports": [
      "string-left-right"
    ]
  },
  {
    "name": "generate-atomic-css-cli",
    "size": 4714,
    "imports": [
      "generate-atomic-css"
    ]
  },
  {
    "name": "gulp-email-remove-unused-css",
    "size": 861,
    "imports": [
      "email-comb"
    ]
  },
  {
    "name": "html-all-known-attributes",
    "size": 13002,
    "imports": []
  },
  {
    "name": "html-crush",
    "size": 10984,
    "imports": [
      "ranges-apply",
      "ranges-push",
      "string-left-right",
      "string-match-left-right",
      "string-range-expander",
      "test-mixer"
    ]
  },
  {
    "name": "html-entities-not-email-friendly",
    "size": 65838,
    "imports": []
  },
  {
    "name": "html-img-alt",
    "size": 3106,
    "imports": [
      "check-types-mini",
      "ranges-apply",
      "ranges-push",
      "string-unfancy"
    ]
  },
  {
    "name": "html-table-patcher",
    "size": 2840,
    "imports": [
      "ast-monkey-traverse-with-lookahead",
      "codsen-parser",
      "ranges-apply",
      "ranges-push"
    ]
  },
  {
    "name": "is-char-suitable-for-html-attr-name",
    "size": 517,
    "imports": []
  },
  {
    "name": "is-html-attribute-closing",
    "size": 5147,
    "imports": [
      "html-all-known-attributes",
      "is-char-suitable-for-html-attr-name",
      "string-left-right",
      "string-match-left-right"
    ]
  },
  {
    "name": "is-html-tag-opening",
    "size": 3966,
    "imports": [
      "string-left-right",
      "string-match-left-right"
    ]
  },
  {
    "name": "is-language-code",
    "size": 58524,
    "imports": []
  },
  {
    "name": "is-media-descriptor",
    "size": 6049,
    "imports": [
      "string-process-comma-separated"
    ]
  },
  {
    "name": "is-relative-uri",
    "size": 5661,
    "imports": []
  },
  {
    "name": "js-row-num",
    "size": 3085,
    "imports": [
      "ranges-apply",
      "ranges-push"
    ]
  },
  {
    "name": "js-row-num-cli",
    "size": 5534,
    "imports": [
      "arrayiffy-if-string",
      "js-row-num"
    ]
  },
  {
    "name": "json-comb",
    "size": 6856,
    "imports": [
      "json-comb-core"
    ]
  },
  {
    "name": "json-comb-core",
    "size": 7282,
    "imports": [
      "object-fill-missing-keys",
      "object-flatten-all-arrays",
      "object-merge-advanced",
      "object-no-new-keys",
      "object-set-all-values-to"
    ]
  },
  {
    "name": "json-sort-cli",
    "size": 13176,
    "imports": [
      "ast-monkey-traverse",
      "codsen-utils"
    ]
  },
  {
    "name": "json-variables",
    "size": 10151,
    "imports": [
      "arrayiffy-if-string",
      "ast-get-values-by-key",
      "ast-monkey-traverse",
      "ranges-apply",
      "ranges-push",
      "string-find-heads-tails",
      "string-match-left-right",
      "string-remove-duplicate-heads-tails"
    ]
  },
  {
    "name": "lerna-clean-changelogs",
    "size": 1655,
    "imports": []
  },
  {
    "name": "lerna-clean-changelogs-cli",
    "size": 7536,
    "imports": [
      "lerna-clean-changelogs"
    ]
  },
  {
    "name": "line-column-mini",
    "size": 873,
    "imports": []
  },
  {
    "name": "object-all-values-equal-to",
    "size": 1318,
    "imports": [
      "codsen-utils"
    ]
  },
  {
    "name": "object-boolean-combinations",
    "size": 1167,
    "imports": [
      "codsen-utils"
    ]
  },
  {
    "name": "object-delete-key",
    "size": 1408,
    "imports": [
      "ast-is-empty",
      "ast-monkey",
      "util-array-object-or-both"
    ]
  },
  {
    "name": "object-fill-missing-keys",
    "size": 2812,
    "imports": [
      "arrayiffy-if-string",
      "codsen-utils",
      "object-all-values-equal-to",
      "object-merge-advanced"
    ]
  },
  {
    "name": "object-flatten-all-arrays",
    "size": 982,
    "imports": [
      "codsen-utils"
    ]
  },
  {
    "name": "object-flatten-referencing",
    "size": 4867,
    "imports": [
      "codsen-utils",
      "str-indexes-of-plus"
    ]
  },
  {
    "name": "object-merge-advanced",
    "size": 7054,
    "imports": [
      "codsen-utils",
      "util-nonempty"
    ]
  },
  {
    "name": "object-no-new-keys",
    "size": 1558,
    "imports": []
  },
  {
    "name": "object-set-all-values-to",
    "size": 678,
    "imports": [
      "codsen-utils"
    ]
  },
  {
    "name": "ranges-apply",
    "size": 2451,
    "imports": [
      "ranges-merge"
    ]
  },
  {
    "name": "ranges-crop",
    "size": 1898,
    "imports": [
      "ranges-merge"
    ]
  },
  {
    "name": "ranges-ent-decode",
    "size": 2095,
    "imports": [
      "codsen-utils",
      "ranges-merge"
    ]
  },
  {
    "name": "ranges-invert",
    "size": 2497,
    "imports": [
      "ranges-crop",
      "ranges-merge"
    ]
  },
  {
    "name": "ranges-is-index-within",
    "size": 811,
    "imports": []
  },
  {
    "name": "ranges-merge",
    "size": 2313,
    "imports": [
      "ranges-push",
      "ranges-sort"
    ]
  },
  {
    "name": "ranges-process-outside",
    "size": 1424,
    "imports": [
      "ranges-crop",
      "ranges-invert"
    ]
  },
  {
    "name": "ranges-push",
    "size": 6925,
    "imports": [
      "string-collapse-leading-whitespace",
      "string-trim-spaces-only"
    ]
  },
  {
    "name": "ranges-regex",
    "size": 1333,
    "imports": [
      "ranges-merge"
    ]
  },
  {
    "name": "ranges-sort",
    "size": 1335,
    "imports": []
  },
  {
    "name": "regex-empty-conditional-comments",
    "size": 404,
    "imports": []
  },
  {
    "name": "regex-is-jinja-nunjucks",
    "size": 346,
    "imports": []
  },
  {
    "name": "regex-is-jsp",
    "size": 344,
    "imports": []
  },
  {
    "name": "regex-jinja-specific",
    "size": 426,
    "imports": []
  },
  {
    "name": "remark-typography",
    "size": 1048,
    "imports": [
      "codsen-utils",
      "string-apostrophes",
      "string-dashes",
      "string-remove-widows"
    ]
  },
  {
    "name": "str-indexes-of-plus",
    "size": 1084,
    "imports": []
  },
  {
    "name": "string-apostrophes",
    "size": 7141,
    "imports": [
      "codsen-utils",
      "ranges-apply"
    ]
  },
  {
    "name": "string-character-is-astral-surrogate",
    "size": 849,
    "imports": []
  },
  {
    "name": "string-collapse-leading-whitespace",
    "size": 1143,
    "imports": []
  },
  {
    "name": "string-collapse-white-space",
    "size": 3559,
    "imports": [
      "ranges-apply",
      "ranges-push",
      "string-left-right"
    ]
  },
  {
    "name": "string-convert-indexes",
    "size": 2483,
    "imports": [
      "ast-monkey-traverse"
    ]
  },
  {
    "name": "string-dashes",
    "size": 2749,
    "imports": [
      "codsen-utils",
      "ranges-apply",
      "string-left-right"
    ]
  },
  {
    "name": "string-extract-class-names",
    "size": 1391,
    "imports": [
      "string-left-right"
    ]
  },
  {
    "name": "string-find-heads-tails",
    "size": 7402,
    "imports": [
      "arrayiffy-if-string",
      "string-match-left-right"
    ]
  },
  {
    "name": "string-find-malformed",
    "size": 2749,
    "imports": [
      "string-left-right"
    ]
  },
  {
    "name": "string-fix-broken-named-entities",
    "size": 11323,
    "imports": [
      "all-named-html-entities",
      "codsen-utils",
      "string-left-right"
    ]
  },
  {
    "name": "string-left-right",
    "size": 5949,
    "imports": [
      "codsen-utils"
    ]
  },
  {
    "name": "string-match-left-right",
    "size": 5779,
    "imports": [
      "arrayiffy-if-string",
      "codsen-utils",
      "string-character-is-astral-surrogate"
    ]
  },
  {
    "name": "string-process-comma-separated",
    "size": 2538,
    "imports": []
  },
  {
    "name": "string-range-expander",
    "size": 5209,
    "imports": []
  },
  {
    "name": "string-remove-duplicate-heads-tails",
    "size": 3062,
    "imports": [
      "arrayiffy-if-string",
      "codsen-utils",
      "ranges-apply",
      "ranges-push",
      "string-match-left-right",
      "string-trim-spaces-only"
    ]
  },
  {
    "name": "string-remove-thousand-separators",
    "size": 1894,
    "imports": [
      "ranges-apply",
      "ranges-push"
    ]
  },
  {
    "name": "string-remove-widows",
    "size": 7372,
    "imports": [
      "codsen-utils",
      "ranges-apply",
      "ranges-push",
      "string-left-right",
      "string-match-left-right"
    ]
  },
  {
    "name": "string-split-by-whitespace",
    "size": 1166,
    "imports": [
      "ranges-is-index-within"
    ]
  },
  {
    "name": "string-strip-html",
    "size": 19969,
    "imports": [
      "codsen-utils",
      "ranges-apply",
      "ranges-push",
      "string-left-right"
    ]
  },
  {
    "name": "string-trim-spaces-only",
    "size": 1117,
    "imports": []
  },
  {
    "name": "string-truncator",
    "size": 4704,
    "imports": [
      "string-left-right"
    ]
  },
  {
    "name": "string-uglify",
    "size": 2486,
    "imports": []
  },
  {
    "name": "string-unfancy",
    "size": 913,
    "imports": []
  },
  {
    "name": "stristri",
    "size": 2671,
    "imports": [
      "codsen-tokenizer",
      "detect-templating-language",
      "ranges-apply",
      "ranges-merge",
      "string-collapse-white-space"
    ]
  },
  {
    "name": "test-mixer",
    "size": 1158,
    "imports": [
      "object-boolean-combinations"
    ]
  },
  {
    "name": "tsd-extract",
    "size": 7583,
    "imports": [
      "string-left-right"
    ]
  },
  {
    "name": "update-versions",
    "size": 15772,
    "imports": [
      "codsen-utils",
      "edit-package-json"
    ]
  },
  {
    "name": "util-array-object-or-both",
    "size": 997,
    "imports": []
  },
  {
    "name": "util-nonempty",
    "size": 462,
    "imports": [
      "codsen-utils"
    ]
  }
];
