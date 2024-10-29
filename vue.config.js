// gzip压缩
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'
module.exports = {
  publicPath: BASE_URL, // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  // assetsDir: "public", //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    // pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      // 除了 entry 之外都是可选的
      entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: '杭州重鼎智能设备有限公司' // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
    }
  },
  transpileDependencies: ['element-ui', 'core-js', 'crypto-js'],
  lintOnSave: 'error', // 是否在保存的时候检查
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack配置
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 1
      }))
    config.plugin('CompressionPlugin').use(new CompressionPlugin({
      // filename: "[path].gz[query]",
      algorithm: 'gzip',
      test: productionGzipExtensions,
      // 只处理大于xx字节 的文件，默认：0
      threshold: 102400,
      // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
      minRatio: 0.5, // 默认: 0.8
      // 是否删除源文件，默认: false
      deleteOriginalAssets: false
    }))
  },
  configureWebpack: (config) => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@v': path.resolve(__dirname, './src/views'),
          '@a': path.resolve(__dirname, './src/assets'),
          '@u': path.resolve(__dirname, './src/utils'),
          '@m': path.resolve(__dirname, './src/mixins')
        } // 别名配置
      }
    })
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  css: {
    extract: false, // 是否使用css分离插件 ExtractTextPlugin(跟热加载冲突)
    sourceMap: true, // 开启 CSS source maps
    loaderOptions: {
    }, // css预设器配置项
    requireModuleExtension: true // 启用 CSS modules for all css / pre-processor files.
  },
  // 反向代理
  devServer: {
    // 环境配置
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    open: false, // 配置自动启动浏览器
    proxy: {
      "/szzlApi": {
        target: "http://172.16.25.125:82",
        changeOrigin: true,
      },
    }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  }
}
