module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eol-last': 0,
    'space-before-function-paren': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: 0,
    // 一个promise reject的时候应当传入error对象（包含了具体的错误信息），如 new Error('请求失败') // 项目中已关闭
    'prefer-promise-reject-errors': 0,
    // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    // @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
    'block-spacing': ['error', 'always'],
    // @fixable 逗号前禁止有空格，逗号后必须要有空格
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'no-console': 1,
    'no-constant-condition': 2,
    'no-unreachable': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'use-isnan': 2,
    'default-case': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
