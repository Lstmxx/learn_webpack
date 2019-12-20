module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ]
  ],
  /* 路由懒加载 */
  plugins: [
    '@babel/plugin-syntax-dynamic-import'
  ]
  // sourceType: "unambiguous"
}