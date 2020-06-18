const path = require('path')
// 1. 拆分多页面 - 多皮肤
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 2. 清理dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 3. 压缩文件 gzip
const CompressionPlugin = require('compression-webpack-plugin')
// 4. 分析打包后的文件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// 5. 优化moment插件
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
    append: './src/append.js',
    red: './src/red.js',
    blue: './src/blue.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 6. 优化 chunks
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['zh-cn'],
    }),
    new HtmlWebpackPlugin({
      template: 'main.html',
      filename: 'red.html',
      chunks: ['app', 'red']
    }),
    new HtmlWebpackPlugin({
      template: 'main.html',
      filename: 'blue.html',
      chunks: ['app', 'blue']
    }),
    // new CompressionPlugin(),
    new BundleAnalyzerPlugin()
  ]
}
