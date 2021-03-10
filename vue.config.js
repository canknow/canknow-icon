const path = require('path');
const configCanknowIconWebpack  = require('./build/configWebpack');
process.env.VUE_APP_NAME = require('./package.json').name;
process.env.VUE_APP_VERSION = require('./package.json').version;
process.env.VUE_APP_REPOSITORY = require('./package.json').repository.url;

function resolveExample(dir) {
  return path.join(__dirname, 'examples', dir);
}
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: '/',
  configureWebpack(config) {
    config.externals = {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    };
  },
  chainWebpack (config) {
    config.resolve.alias.set('@@', resolveExample('/src'));
    config.resolve.alias.set('@', resolve('/src'));

    configCanknowIconWebpack(config, resolve);
  }
};

