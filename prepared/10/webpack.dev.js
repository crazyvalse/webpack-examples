const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'eval-source-map' // 'cheap-module-eval-source-map'
})
