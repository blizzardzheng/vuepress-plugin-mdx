const markdown = require('remark-parse');
const yamlTramsform = require('./yamlPlugin');
const frontmatter = require('remark-frontmatter');
const unified = require('unified')
const visit = require('unist-util-visit');

function getParsedRemarkObj(str) {
  return new Promise((resolve, reject) => {
    const processor = unified()
    .use(markdown)
    .use(frontmatter, ['yaml'])
    .use(yamlTramsform);
    let ast = processor.parse(str);
    ast = processor.runSync(ast);
    visit(ast, 'yaml', (node) => {
      if (node && node.data && node.data.parsedValue) {
        resolve(node.data.parsedValue);
      } else {
        reject()
      }
    })
  })
};

module.exports = getParsedRemarkObj;

