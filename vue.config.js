module.exports = {
  // webpack-dev-server 相关配置
  devServer: {

    port: 1234,
    proxy: {
      "/": {
        // 测试环境
        target: "http://data.taipei/", // 接口域名https://web.api-bc-1.com //http://bcwab.lanrentool.com
        changeOrigin: true, //是否跨域
        secure: true,
        pathRewrite: {
          "^/": "" //需要rewrite重写的,
        }
      }
    }
    // proxyTable: {
    //   "/data": { // 自訂 local 端的位置
    //     target: "http://data.taipei/", // 遠端 URL Domain
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/data": ""
    //     }
    //   }
    // },
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}