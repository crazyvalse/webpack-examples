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

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
  },
  // 6. 优化 chunks
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       },
  //       commons: {
  //         name: 'commons',
  //         chunks: 'all',
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
      filename: 'bundle.html'
    }),
    // new CompressionPlugin(),
    // new BundleAnalyzerPlugin()
  ]
}
