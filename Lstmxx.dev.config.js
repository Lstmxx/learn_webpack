const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const base = require('./Lstmxx.base.config')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
  /*创建source-map，用来当代码出错的时候，定位问题所在*/
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: true,
    hot: true,
    inline: true
  },
  /*自动生成html文件*/
  plugins: [
    new htmlWebpackPlugin({
      title: 'Lstmxx-dev'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
