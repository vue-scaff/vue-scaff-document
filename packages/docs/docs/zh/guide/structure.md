# 文档结构

Vue-Scaff 遵循 **"约定由于配置"** 公约，推荐如下文档结构：

<!-- 此处禁用专属文本术语 -->

::: vue
.
├── src
│   ├── `registry` _(**必要**)_
│   ├── `assests` _(**必要**)_
│   ├── `pages` _(**必要**)_
│   ├── `components` _(**可选**)_
│   ├── `i18n` _(**可选**)_
│   ├── `filters` _(**可选**)_
│   ├── `utils` _(**可选**)_
│   ├── `mock` _(**可选**)_
│   ├── `sheet` _(**必要**)_
│   │ 
│   ├── App.vue
│   └── main.js
│ 
├── dist
│   ├── `dev` _(**可选**)_
│   └── `build` _(**可选**)_
│
├── public
│   └── index.html _(**必要**)_
│
├── babel.config.js
├── postcss.config.js
├── vue.config.js _(**必要**)_
├── vuescaffrc.js _(**必要**)_
│
├── injection.json
└── package.json _(**必要**)_
:::

<!-- textlint-enable -->

::: warning Note
请注意区分相关目录大小写。
:::

- `src/registry`: 使用 Auto-Registry 方式的公共部分
- `src/assets`: 本地资源目录
- `src/pages`: 存放页面的目录，内置路由等可配置文件
- `src/components`: 可复用的组件
- `src/i18n`: 国际化语言包
- `src/filters`: 数据过滤公式
- `src/utils`: 工具类目录
- `src/mock`: 数据模拟（接口），默认访问路由 `/mock/*`
- `src/sheet`: 样式相关存储文件
- `injection.json`: 此文件中的配置，将合并至 `process.env`
- `vuescaffrc.js`: `vue-scaff` 的配置文件
