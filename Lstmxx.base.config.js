const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  /*入口js*/
  entry: {
    app: './src/index.js'
    // other: './src/print.js'
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    /*自动生成html文件*/
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
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     'babel-loader'
      //   ]
      // }
    ]
  }
}