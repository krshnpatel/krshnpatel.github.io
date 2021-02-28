const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/krshnpatel/krshnpatel.github.io/gh-pages/' : '',
  distDir: 'build'
}