const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    red: './src/red.js',
    blue: './src/blue.js',
    app: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'red.html',
      chunks: ['app', 'red']
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'blue.html',
      chunks: ['app', 'blue']
    })
  ]
}


