const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
    red: './src/red.js',
    blue: './src/blue.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['zh-cn'],
    }),
    new CompressionPlugin(),
    new HtmlWebpackPlugin({
      filename: 'red.html',
      template: 'index.html',
      chunks: ['app', 'red']
    }),
    new HtmlWebpackPlugin({
      filename: 'blue.html',
      template: 'index.html',
      chunks: ['app', 'blue']
    }),
    new BundleAnalyzerPlugin()
  ]
}
