# 在 Markdown 中 使用 Vue

所有在 `.vuepress/components` 中找到的 `*.vue` 文件将会自动地被注册为全局的异步组件，如：

```
.
└─ .vuepress
   └─ components
      ├─ demo-component.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```

你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：

``` md
<demo-component/>
<OtherComponent/>
<Foo-Bar/>
```

<demo-component></demo-component>

<OtherComponent/>

<Foo-Bar/>

::: warning 重要！
请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个 `<p>` 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， `<p>` 标签中不允许放置任何块级元素。
:::

想了解更多，参考 [VuePress 官方文档](https://v1.vuepress.vuejs.org/zh/guide/using-vue.html)。
