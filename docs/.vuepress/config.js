const { join } = require('path')
const { description } = require('../../package')
const fs = require('fs');

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
      text: '指南x',
      link: '/guide/',
    },
    {
      text: '一站式流程组件x',
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
        text: '一站式模板',
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
            'use'
          ]
        }
      ],
      '/yizhanshi/': [
        {
          title: '一站式模板',
          collapsable: false,
          children: [
            'form-table'
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
  },
}
