const path = require("path");

module.exports = {
  publicPath: "./",
  chainWebpack: (config) => {
    config.resolve.alias // 为指定目录设置全局别名
      .set("@", path.join(__dirname, "src"))
      .set("@public", path.join(__dirname, "public"));

    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('style-resources-loader')
        .loader('style-resources-loader')
        .options({
          patterns: './src/style/var.less'
        })
        .end()
    })

    config.module
      .rule("svg")
      .exclude.add(path.join(__dirname, "src/icons"))
      .end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.join(__dirname, "src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
    // 对某个 库单独添加 babel 编译
    // config.module
    //   .rule("iview")
    //   .test(/\.js$/)
    //   .use("babel")
    //   .loader("babel-loader")
    //   .end();
    // 结束;
  },

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  configureWebpack: (config) => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
};
