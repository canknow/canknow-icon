const fs = require('fs');
const path = require('path');
const icons = [];

function readFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      readFiles(path.join(dir, item), filesList);
    }
    else {
      filesList.push(item);
    }
  });
  return filesList;
}

async function load (iconPath, target) {
  const packageNames = fs.readdirSync(iconPath);
  packageNames.forEach(packageName => {
    const files = readFiles(path.join(iconPath, packageName));
    icons.push({
      name: packageName,
      items: files.map(item => item.slice(0, item.lastIndexOf('.')))
    });
  });
  fs.writeFile(target, JSON.stringify(icons), () => {});
}

exports.load = load;