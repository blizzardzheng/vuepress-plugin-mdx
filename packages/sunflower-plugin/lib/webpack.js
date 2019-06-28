const fs = require('fs');
const remarkDocz = require('remark-docz');
const rehypeDocz = require('rehype-docz');
const slug = require('rehype-slug');
const frontmatter = require('remark-frontmatter');
const root = fs.realpathSync(process.cwd());

function chainWebpack(config, isServer) {
  config.resolve.alias.set('@docz-mdx', __dirname);
  if (!isServer) {
    config.node.set('global', true);
    config.module.rule('jsx-transform')
    .test(/\.jsx/)
    .use('babel2')
      .loader('babel-loader')
      .options({
        "babelrc": false,
        "configFile": false,
        presets: [
          [
            "@babel/preset-react"
          ]
        ]
      })
      .end();
    config.module.rule('mdx-transform')
    .test(/\.mdx/)
    .use('babel2')
    .loader('babel-loader')
    .options({
      "babelrc": false,
      "configFile": false,
      presets: [
        [
          "@babel/preset-react"
        ]
      ],
      "plugins": [
        ["import", {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css" // `style: true` 会加载 less 文件
        }]
      ]
    })
    .end()
    .use('mdx')
      .loader('@mdx-js/loader')
      .options({
        remarkPlugins: [
          [frontmatter, { type: 'yaml', marker: '-' }],
          remarkDocz,
        ],
        rehypePlugins: [
          [rehypeDocz, { root, useCodeSandbox: true }],
          slug,
        ],
      })
      .end()
    
  }
}

module.exports = chainWebpack;
