var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  // devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
    red: './src/red.js',
    blue: './src/blue.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: '/Users/CodingNutsZac/Documents/github/webpack-examples-new/demo/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'red.html',
      template: './index.html',
      chunks: ['app', 'red']
    }),
    new HtmlWebpackPlugin({
      filename: 'blue.html',
      template: './index.html',
      chunks: ['app', 'blue']
    }),
    new CleanWebpackPlugin()
  ]
}
