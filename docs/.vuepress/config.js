const { join, resolve } = require('path')
const { description } = require('../../package')
const fs = require('fs');
const util = require('util')
const remarkDocz = require('remark-docz');
const rehypeDocz = require('rehype-docz');
const slug = require('rehype-slug');
const frontmatter = require('remark-frontmatter');
const root = fs.realpathSync(process.cwd());

module.exports = {
  /**
   * Build 输出目录夹，Basement 要求，不能修改。
   */
  dest: 'dist',
  /**
   * 网站的标题，ref：https://v1.vuepress.vuejs.org/zh/config/#title
   */
  title: 'sunflower',
  /**
   * 网站的描述，ref：https://v1.vuepress.vuejs.org/zh/config/#description
   */
  description: description,

  /**
   * 额外的要插入 HTML <head> 中的 tags，ref：https://vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * 注册全局 Stylus 文件，ref: https://v1.vuepress.vuejs.org/zh/config/#stylus
   */
  stylus: {
    import: [join(__dirname, './styles/global.styl')]
  },

  nav: [
    {
      text: '指南',
      link: '/guide/',
    },
    {
      text: '一站式流程组件',
      link: '/yizhanshi/'
    },
  ],

  /**
   * 主题配置，这里是 VuePress 默认主题的配置，ref：https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: '',
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '一站式组件池',
        link: '/yizhanshi/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/yizhanshi/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            'test'
          ]
        }
      ]
    }
  },

  /**
   * 应用插件，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    require('../../packages/sunflower-plugin'),
    '@alipay/vuepress-plugin-basement',
  ],
  configureWebpack(config) {
    const configStr = JSON.stringify(config, null, 4);
    fs.writeFileSync(resolve(__dirname, '../webpack'), (configStr), 'utf-8');
  },
  // chainWebpack(config, isServer) {
  //     if (!isServer) {
  //       config.node.set('global', true);
  //       config.module.rule('jsx-transform')
  //       .test(/\.jsx/)
  //       .use('babel2')
  //         .loader('babel-loader')
  //         .options({
  //           "babelrc": false,
  //           "configFile": false,
  //           presets: [
  //             [
  //               "@babel/preset-react"
  //             ]
  //           ]
  //         })
  //         .end();
  //       config.module.rule('mdx-transform')
  //       .test(/\.mdx/)
  //       .use('babel2')
  //       .loader('babel-loader')
  //       .options({
  //         "babelrc": false,
  //         "configFile": false,
  //         presets: [
  //           [
  //             "@babel/preset-react"
  //           ]
  //         ],
  //         "plugins": [
  //           ["import", {
  //             "libraryName": "antd",
  //             "libraryDirectory": "es",
  //             "style": "css" // `style: true` 会加载 less 文件
  //           }]
  //         ]
  //       })
  //       .end()
  //       .use('mdx')
  //         .loader('@mdx-js/loader')
  //         .options({
  //           remarkPlugins: [
  //             [frontmatter, { type: 'yaml', marker: '-' }],
  //             remarkDocz,
  //           ],
  //           rehypePlugins: [
  //             [rehypeDocz, { root, useCodeSandbox: true }],
  //             slug,
  //           ],
  //         })
  //         .end()
  //     }
  // }
}
