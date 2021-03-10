const path = require('path')
const fs = require('fs')

function isSvg(filePath) {
  return path.extname(filePath) === '.svg';
}

function makeDirsSync(dir) {
  if (fs.existsSync(dir)) {
    return true;
  }

  if (makeDirsSync(path.dirname(dir))) {
    fs.mkdirSync(dir);
    return true;
  }
}

module.exports = {
  isSvg,
  makeDirsSync: makeDirsSync
}
