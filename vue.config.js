<<<<<<< HEAD
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  lintOnSave: false,
  transpileDependencies: [],
  configureWebpack: config => {
    const plugins = []
    plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8
      })
    )
    config.plugins = [...config.plugins, ...plugins]
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('img-loader')
      .loader('img-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .use('image-webpack-loader')
  //     .loader('image-webpack-loader')
  //     .options({
  //       bypassOnDebug: true
  //     })
  //     .end()
  //     // mozjpeg: { progressive: true, quality: 65 },
  //     // optipng: { enabled: false },
  //     // pngquant: { quality: '65-90', speed: 4 },
  //     // gifsicle: { interlaced: false },
  //     // webp: { quality: 75 }

//   config.externals = {
//     'vue': 'Vue',
//     'element-ui': 'ELEMENT',
//     'vue-router': 'VueRouter',
//     'vuex': 'Vuex',
//     'axios': 'axios'
//   }
//   // 打包分析
//   if (process.env.IS_ANALYZ) {
//     config.plugin('webpack-report')
//       .use(BundleAnalyzerPlugin, [{
//         analyzerMode: 'static'
//       }])
//   }
// },
}
=======
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  lintOnSave: false,
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: config => {
    const plugins = []
    plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8
      })
    )
    config.plugins = [...config.plugins, ...plugins]
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('img-loader')
      .loader('img-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      navigateFallback: '/index.html'
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .use('image-webpack-loader')
  //     .loader('image-webpack-loader')
  //     .options({
  //       bypassOnDebug: true
  //     })
  //     .end()
  //     // mozjpeg: { progressive: true, quality: 65 },
  //     // optipng: { enabled: false },
  //     // pngquant: { quality: '65-90', speed: 4 },
  //     // gifsicle: { interlaced: false },
  //     // webp: { quality: 75 }

//   config.externals = {
//     'vue': 'Vue',
//     'element-ui': 'ELEMENT',
//     'vue-router': 'VueRouter',
//     'vuex': 'Vuex',
//     'axios': 'axios'
//   }
//   // 打包分析
//   if (process.env.IS_ANALYZ) {
//     config.plugin('webpack-report')
//       .use(BundleAnalyzerPlugin, [{
//         analyzerMode: 'static'
//       }])
//   }
// },
}
>>>>>>> 4203159... add
