import Icon from './src/Icon';

const request = require.context('@/assets/icons/svg', true, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(request);

/* istanbul ignore next */
Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;
