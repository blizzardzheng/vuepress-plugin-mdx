const { fs, path, globby, datatypes: { isString }} = require('@vuepress/shared-utils')

async function extendPageData ($page) {
  console.log($page);
}

module.exports = extendPageData;
