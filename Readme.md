## Install
```shell
npm install canknow-icon -s
```

## Quick Start
vue.config.js
```
const configCanknowIconWebpack = require('canknow-icon/src/configWebpack.js');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack (config) {
    configCanknowIconWebpack(config, resolve);
  }
}
```

main.js
```
import Icon from 'canknow-icon/src/component/icon';
Vue.use(Icon);
```

App.vue
```
<style lang="scss">
  @import "~canknow-icon/src/component/icon/src/icon";
</style>
```

after install, generated folder like this:
```
/src/assets/icons/svg/canknow/filled
/src/assets/icons/svg/canknow/outlined
```
add your application icons to the folder like this which should create yourself:
```
/src/assets/icons/svg/application/filled
/src/assets/icons/svg/application/outlined
```
