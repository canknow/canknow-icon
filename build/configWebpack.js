function configWebpack(config, resolve) {
  // set svg-sprite-loader
  config.module
    .rule('svg')
    .exclude.add(resolve('src/assets/icons'))
    .end();

  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/assets/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end();
}

module.exports = configWebpack;
