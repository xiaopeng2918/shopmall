module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/shopmall/'
  : '/'
}