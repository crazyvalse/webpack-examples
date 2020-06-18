const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map'
})
