const load = require('./load');
const path = require('path');

load.load(path.resolve(__dirname, '../../examples/src/assets/icons/svg/'), path.resolve(__dirname, '../../examples/icon.json'));