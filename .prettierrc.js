module.exports = {
    arrowParens: 'always',
    bracketSpacing: true,
    cursorOffset: -1,
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'strict',
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    parser: 'typescript',
    overrides: [
      {
        files: [
          '*.json',
          '.prettierrc',
          '.babelrc',
          '.editorconfig',
          '.gitignore',
          '.npmrc',
          '.env*'
        ],
        options: {
          parser: 'json',
          singleQuote: false,
          semi: false,
          jsxSingleQuote: false,
          jsxBracketSameLine: false
        }
      }
    ],
    printWidth: 130,
    proseWrap: 'always',
    quoteProps: 'consistent',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false
  };
  