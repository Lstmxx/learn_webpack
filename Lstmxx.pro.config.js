const path = require('path')
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./Lstmxx.base.config');
module.exports = merge(common, {
  mode: 'production'
})