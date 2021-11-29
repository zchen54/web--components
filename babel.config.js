module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "useBuiltIns": "usage",
        "corejs": "3",
        'targets': {
          'browsers': ["ie >= 8", "iOS 7"] // 支持ie8，直接使用iOS浏览器版本7
        }
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2
      }
    ]
  ]
}