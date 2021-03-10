const gentlyCopy = require('gently-copy');
const path = require('path');
const fs = require('fs');

const sourcePath = './src/assets/icons/svg/canknow';
let userPath = process.env.INIT_CWD;
const examplesPath = path.join(userPath, 'examples');

if (fs.existsSync(examplesPath)) {
  userPath = examplesPath;
}

const targetPathParent = path.join(userPath, 'src/assets/icons/svg');
const targetPath = path.join(targetPathParent, 'canknow');

deleteDirectory(targetPath);
makeDirSync(targetPath);

gentlyCopy(sourcePath, targetPathParent);

function deleteDirectory(dirName) {

  if (fs.existsSync(dirName) === true) {
    const files = fs.readdirSync(dirName);

    files.forEach(function(item){
      const item_path = path.join(dirName, item);

      if (fs.statSync(item_path).isDirectory()) {
        deleteDirectory(item_path);
      }
      else {
        fs.unlinkSync(item_path);
      }
    });
    fs.rmdirSync(dirName);
  }
}

function makeDirSync(dirName) {
  if (fs.existsSync(dirName)) {
    return true;
  }
  else if (makeDirSync(path.dirname(dirName))) {
    fs.mkdirSync(dirName);
    return true;
  }
}