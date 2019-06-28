export const imports = {
  'packages/Content.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "packages-content" */ 'packages/Content.mdx'
    ),
  'docs/guide/using-vue.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-guide-using-vue" */ 'docs/guide/using-vue.md'
    ),
  'docs/yizhanshi/AAA.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-yizhanshi-aaa" */ 'docs/yizhanshi/AAA.md'
    ),
  'docs/yizhanshi/test.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-yizhanshi-test" */ 'docs/yizhanshi/test.md'
    ),
}
