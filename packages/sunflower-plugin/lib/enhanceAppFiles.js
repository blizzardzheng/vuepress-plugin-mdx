const { fs, path, globby, datatypes: { isString }} = require('@vuepress/shared-utils')

async function resolveComponents (componentDir) {
  if (!fs.existsSync(componentDir)) {
    return
  }
  return (await globby(['**/*.mdx'], { cwd: componentDir }))
  .map(file => file.slice(0, -4))
}

function enhanceAppFiles() {
  const { componentsDir = [], components = [] } = this;
  // const baseDirs = Array.isArray(componentsDir) ? componentsDir : [componentsDir]
  console.log('baseDirs', componentsDir);
}

module.exports = enhanceAppFiles;
