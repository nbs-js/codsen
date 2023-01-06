interface UnknownValueObj {
  [key: string]: number;
}

interface DependencyStats {
  dependencies: UnknownValueObj;
  devDependencies: UnknownValueObj;
  top10ExternalDeps: UnknownValueObj[];
  top10OwnDeps: UnknownValueObj[];
  allExternalDeps: string[];
  allOwnDeps: string[];
}

export const dependencyStats: DependencyStats = {
  "allExternalDeps": [
    "@sindresorhus/is",
    "@types/hast",
    "@types/json-stringify-safe",
    "@types/lodash.iteratee",
    "ansi-diff-stream",
    "ansi-regex",
    "chalk",
    "currency.js",
    "define-lazy-prop",
    "execa",
    "fp-ts",
    "fs-extra",
    "globby",
    "grapheme-splitter",
    "hast-util-raw",
    "he",
    "hex-color-regex",
    "html-entities",
    "inquirer",
    "is-d",
    "is-online",
    "is-url-superb",
    "isstream",
    "json-stringify-safe",
    "leven",
    "lodash.clonedeep",
    "lodash.deburr",
    "lodash.includes",
    "lodash.intersection",
    "lodash.isdate",
    "lodash.isequal",
    "lodash.isfinite",
    "lodash.isregexp",
    "lodash.iteratee",
    "lodash.merge",
    "lodash.pull",
    "lodash.pullall",
    "lodash.trim",
    "lodash.without",
    "log-symbols",
    "log-update",
    "matcher",
    "meow",
    "mime-db",
    "minimist",
    "object-path",
    "p-filter",
    "p-map",
    "p-one",
    "p-progress",
    "p-reduce",
    "pacote",
    "plugin-error",
    "re2",
    "rgba-regex",
    "runes",
    "semver-compare",
    "semver-regex",
    "sort-keys",
    "sort-package-json",
    "split2",
    "through2",
    "tiny-invariant",
    "tiny-typed-emitter",
    "type-detect",
    "unified",
    "unist-builder",
    "unist-util-visit",
    "update-notifier",
    "url-regex-safe",
    "write-file-atomic"
  ],
  "allOwnDeps": [
    "all-named-html-entities",
    "array-pull-all-with-glob",
    "arrayiffy-if-string",
    "ast-compare",
    "ast-contains-only-empty-space",
    "ast-get-values-by-key",
    "ast-is-empty",
    "ast-monkey",
    "ast-monkey-traverse",
    "ast-monkey-traverse-with-lookahead",
    "ast-monkey-util",
    "check-types-mini",
    "codsen-parser",
    "codsen-tokenizer",
    "codsen-utils",
    "csv-sort",
    "csv-split-easy",
    "detect-templating-language",
    "edit-package-json",
    "email-all-chars-within-ascii",
    "email-comb",
    "generate-atomic-css",
    "html-all-known-attributes",
    "html-crush",
    "html-entities-not-email-friendly",
    "is-char-suitable-for-html-attr-name",
    "is-html-attribute-closing",
    "is-html-tag-opening",
    "is-language-code",
    "is-media-descriptor",
    "is-relative-uri",
    "js-row-num",
    "json-comb-core",
    "lerna-clean-changelogs",
    "line-column-mini",
    "object-all-values-equal-to",
    "object-boolean-combinations",
    "object-delete-key",
    "object-fill-missing-keys",
    "object-flatten-all-arrays",
    "object-merge-advanced",
    "object-no-new-keys",
    "object-set-all-values-to",
    "ranges-apply",
    "ranges-crop",
    "ranges-invert",
    "ranges-is-index-within",
    "ranges-merge",
    "ranges-process-outside",
    "ranges-push",
    "ranges-sort",
    "regex-empty-conditional-comments",
    "regex-is-jinja-nunjucks",
    "regex-is-jsp",
    "regex-jinja-specific",
    "str-indexes-of-plus",
    "string-apostrophes",
    "string-character-is-astral-surrogate",
    "string-collapse-leading-whitespace",
    "string-collapse-white-space",
    "string-dashes",
    "string-extract-class-names",
    "string-find-heads-tails",
    "string-find-malformed",
    "string-fix-broken-named-entities",
    "string-left-right",
    "string-match-left-right",
    "string-process-comma-separated",
    "string-range-expander",
    "string-remove-duplicate-heads-tails",
    "string-remove-thousand-separators",
    "string-remove-widows",
    "string-strip-html",
    "string-trim-spaces-only",
    "string-uglify",
    "string-unfancy",
    "test-mixer",
    "util-array-object-or-both",
    "util-nonempty"
  ],
  "dependencies": {
    "@sindresorhus/is": 1,
    "@types/hast": 3,
    "@types/json-stringify-safe": 2,
    "@types/lodash.iteratee": 1,
    "all-named-html-entities": 2,
    "ansi-diff-stream": 1,
    "ansi-regex": 1,
    "array-pull-all-with-glob": 1,
    "arrayiffy-if-string": 7,
    "ast-compare": 3,
    "ast-contains-only-empty-space": 2,
    "ast-get-values-by-key": 1,
    "ast-is-empty": 1,
    "ast-monkey": 1,
    "ast-monkey-traverse": 10,
    "ast-monkey-traverse-with-lookahead": 1,
    "ast-monkey-util": 3,
    "chalk": 5,
    "check-types-mini": 4,
    "codsen-parser": 2,
    "codsen-tokenizer": 2,
    "codsen-utils": 33,
    "csv-sort": 1,
    "csv-split-easy": 1,
    "currency.js": 1,
    "define-lazy-prop": 1,
    "detect-templating-language": 1,
    "edit-package-json": 1,
    "email-all-chars-within-ascii": 1,
    "email-comb": 1,
    "execa": 1,
    "fp-ts": 1,
    "fs-extra": 4,
    "generate-atomic-css": 1,
    "globby": 10,
    "grapheme-splitter": 1,
    "hast-util-raw": 1,
    "he": 4,
    "hex-color-regex": 1,
    "html-all-known-attributes": 3,
    "html-crush": 1,
    "html-entities": 1,
    "html-entities-not-email-friendly": 2,
    "inquirer": 2,
    "is-char-suitable-for-html-attr-name": 2,
    "is-d": 5,
    "is-html-attribute-closing": 1,
    "is-html-tag-opening": 1,
    "is-language-code": 1,
    "is-media-descriptor": 1,
    "is-online": 1,
    "is-relative-uri": 1,
    "is-url-superb": 1,
    "isstream": 1,
    "js-row-num": 2,
    "json-comb-core": 1,
    "json-stringify-safe": 2,
    "lerna-clean-changelogs": 1,
    "leven": 3,
    "line-column-mini": 1,
    "lodash.clonedeep": 19,
    "lodash.deburr": 2,
    "lodash.includes": 3,
    "lodash.intersection": 3,
    "lodash.isdate": 1,
    "lodash.isequal": 1,
    "lodash.isfinite": 1,
    "lodash.isregexp": 2,
    "lodash.iteratee": 1,
    "lodash.merge": 1,
    "lodash.pull": 2,
    "lodash.pullall": 4,
    "lodash.trim": 2,
    "lodash.without": 1,
    "log-symbols": 1,
    "log-update": 1,
    "matcher": 9,
    "meow": 11,
    "mime-db": 1,
    "minimist": 1,
    "object-all-values-equal-to": 1,
    "object-boolean-combinations": 1,
    "object-delete-key": 2,
    "object-fill-missing-keys": 1,
    "object-flatten-all-arrays": 1,
    "object-merge-advanced": 3,
    "object-no-new-keys": 1,
    "object-path": 7,
    "object-set-all-values-to": 1,
    "p-filter": 2,
    "p-map": 3,
    "p-one": 1,
    "p-progress": 1,
    "p-reduce": 8,
    "pacote": 1,
    "plugin-error": 1,
    "ranges-apply": 17,
    "ranges-crop": 2,
    "ranges-invert": 2,
    "ranges-is-index-within": 2,
    "ranges-merge": 7,
    "ranges-process-outside": 1,
    "ranges-push": 13,
    "ranges-sort": 1,
    "re2": 1,
    "regex-empty-conditional-comments": 1,
    "regex-is-jinja-nunjucks": 1,
    "regex-is-jsp": 1,
    "regex-jinja-specific": 1,
    "rgba-regex": 1,
    "runes": 1,
    "semver-compare": 1,
    "semver-regex": 1,
    "sort-keys": 1,
    "sort-package-json": 1,
    "split2": 1,
    "str-indexes-of-plus": 1,
    "string-apostrophes": 2,
    "string-character-is-astral-surrogate": 1,
    "string-collapse-leading-whitespace": 1,
    "string-collapse-white-space": 2,
    "string-dashes": 2,
    "string-extract-class-names": 1,
    "string-find-heads-tails": 1,
    "string-find-malformed": 2,
    "string-fix-broken-named-entities": 2,
    "string-left-right": 21,
    "string-match-left-right": 10,
    "string-process-comma-separated": 2,
    "string-range-expander": 3,
    "string-remove-duplicate-heads-tails": 1,
    "string-remove-thousand-separators": 1,
    "string-remove-widows": 2,
    "string-strip-html": 2,
    "string-trim-spaces-only": 3,
    "string-uglify": 1,
    "string-unfancy": 2,
    "test-mixer": 1,
    "through2": 1,
    "tiny-invariant": 1,
    "tiny-typed-emitter": 1,
    "type-detect": 3,
    "unified": 3,
    "unist-builder": 1,
    "unist-util-visit": 3,
    "update-notifier": 12,
    "url-regex-safe": 1,
    "util-array-object-or-both": 2,
    "util-nonempty": 1,
    "write-file-atomic": 4
  },
  "devDependencies": {
    "@types/he": 3,
    "@types/hex-color-regex": 1,
    "@types/isstream": 1,
    "@types/lodash.clonedeep": 19,
    "@types/lodash.deburr": 2,
    "@types/lodash.includes": 3,
    "@types/lodash.intersection": 3,
    "@types/lodash.isdate": 1,
    "@types/lodash.isequal": 1,
    "@types/lodash.isfinite": 1,
    "@types/lodash.isregexp": 2,
    "@types/lodash.merge": 1,
    "@types/lodash.pull": 2,
    "@types/lodash.pullall": 4,
    "@types/lodash.trim": 2,
    "@types/lodash.uniq": 1,
    "@types/lodash.without": 1,
    "@types/mime-db": 1,
    "@types/object-path": 1,
    "@types/runes": 1,
    "@types/semver-compare": 1,
    "@types/split2": 1,
    "@types/through2": 1,
    "@types/type-detect": 1,
    "@types/url-regex-safe": 1,
    "array-shuffle": 1,
    "ast-compare": 1,
    "ast-deep-contains": 1,
    "ast-monkey-traverse": 2,
    "color-shorthand-hex-to-six-digit": 1,
    "deep-equal": 1,
    "fs-extra": 2,
    "globby": 1,
    "lodash.clonedeep": 6,
    "lodash.isequal": 3,
    "map-stream": 1,
    "object-delete-key": 1,
    "p-map": 3,
    "ranges-apply": 6,
    "ranges-invert": 1,
    "ranges-merge": 1,
    "rehype": 1,
    "rehype-parse": 1,
    "remark": 2,
    "string-find-heads-tails": 1,
    "string-strip-html": 1,
    "test-mixer": 5,
    "title": 1,
    "type-fest": 1,
    "vinyl-string": 1
  },
  "top10ExternalDeps": [
    {
      "lodash.clonedeep": 19
    },
    {
      "update-notifier": 12
    },
    {
      "meow": 11
    },
    {
      "matcher": 9
    },
    {
      "object-path": 7
    },
    {
      "lodash.pullall": 4
    },
    {
      "type-detect": 3
    },
    {
      "lodash.intersection": 3
    },
    {
      "lodash.deburr": 2
    },
    {
      "@sindresorhus/is": 1
    }
  ],
  "top10OwnDeps": [
    {
      "codsen-utils": 33
    },
    {
      "ranges-apply": 17
    },
    {
      "ast-monkey-traverse": 10
    },
    {
      "check-types-mini": 4
    },
    {
      "object-merge-advanced": 3
    },
    {
      "ast-compare": 3
    },
    {
      "ast-monkey-util": 3
    },
    {
      "ast-contains-only-empty-space": 2
    },
    {
      "util-array-object-or-both": 2
    },
    {
      "ranges-is-index-within": 2
    }
  ]
};
