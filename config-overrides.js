const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  console.log('Load customized theme overides...')
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  )
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@input-bg': '#F8F8F8',
      '@input-placeholder-color': '#BCBCBC',
      '@input-border-color': '#F8F8F8',
      '@input-hover-border-color': '#F8F8F8',
    },
    javascriptEnabled: true,
  })(config, env)
  return config
}
