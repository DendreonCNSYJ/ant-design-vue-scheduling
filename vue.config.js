const proxy = require('http-proxy-middleware')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  devServer: {
    // development server port 8000
    port: 8000,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    // proxy: {
    //   '/': {
    //     target: '127.0.0.1:8088',
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
  },
}
