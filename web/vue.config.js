const path = require('path');
function resolve(dir) {
  return path.join(__dirname, './', dir);
}
/**
 * 从 vue-cli3 及以上版本后，没有build模块，也没有 webpack.config.js 配置。所有的配置都在 vue.config.js 中完成。
 */
module.exports = {
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? '/web' : '/',
  // 最终打包生成的文件目录
  outputDir: resolve('server/web'),
  // 放置生成的静态资源(js/css/img/fonts等)的(相对于 outputDir 的)目录
  assetsDir: 'static',
  // 指定生成的 index.html 的输出路径(相对于 outputDir )
  indexPath: 'index.html',
  // 生成的静态资源在他们的文件名中包含了 hash 以便更好地控制缓存
  filenameHashing: true,

  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: true,
  // 生产环境 sourceMap
  productionSourceMap: true,
  // configureWebpack 会通过 webpack-merge 合并到最终的配置中
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      return {
        // 生产环境去掉浏览器控制台console.log的痕迹
        optimization: {
          minimizer: [
            new TerserPlugin({
              sourceMap: true, // Must be set to true if using source-maps in production
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ],
        },
        plugins: [
          new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: new RegExp(`\\.(${productionGzipExtensions.join("|")})$`),
            threshold: 1024,
            minRatio: 0.8,
          }),
        ],
      };
    } else {
      // 为开发环境修改配置...
    }
  },
  // 更细粒度的控制 webpack 内部配置
  chainWebpack: config => {
    //最小化代码
    config.optimization.minimize(true);
    //分割代码
    config.optimization.splitChunks({
      chunks: "all",
    });
  },
  devServer: {
    public: '222.24.34.27',
    port: '8080',
    index: 'home',
    proxy: {
      '/iot': {    // 定义代理的名称
        changeOrigin: true,  // 是否启动代理
        target: 'http://130253w710.picp.vip', // 代理的域名  
        pathRewrite: {
          '^/iot': '/iot'
        }                                                                      // 如果你的真实的api路径中没有/API这一个路径，把这句加上，如果本来就有/API这一路径的话，这句一定要去掉，要不然会导致域名找不到的
      }
      // '/reg': {    // 定义代理的名称
      //   changeOrigin: true,  // 是否启动代理
      //   target: 'http://130253w710.picp.vip/iot', // 代理的域名  
      //   pathRewrite: {
      //     '^/reg': '/reg'
      //   }                                                                      // 如果你的真实的api路径中没有/API这一个路径，把这句加上，如果本来就有/API这一路径的话，这句一定要去掉，要不然会导致域名找不到的
      // }
    }
  }
}