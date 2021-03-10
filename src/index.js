import Icon from './component/icon';

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  Icon.install(Vue);
  install.installed = true;
};
export default {
  Icon,
  install
};