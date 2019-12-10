const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  /*入口js*/
  entry: {
    app: './src/index.js',
    other: './src/print.js'
  },
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
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'Lstmxx'
    })
  ],
  /*根据入口js来生成对应的js，[name]对应entry的key名*/
  output: {
    filename: '[name].Lstmxx.js',
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
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}