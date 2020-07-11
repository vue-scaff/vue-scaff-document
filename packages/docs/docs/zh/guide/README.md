# 介绍

<Bit/>

<font color="#f63"><b>Vue Scaff</b></font> 旨在成为一个帮助开发者快速构建、部署应用的渐进式 Vue 工程化脚手架。它确保项目能以最佳实践稳健的运行，同时给予 Vuer 们舒适的开发体验。您只需专注编码，而不必花费数日绞尽脑汁于配置工作。同为开发者，所以更懂开发者。框架还为每个工具提供了调整配置的灵活性，更体贴开发者的习惯。免费且开源，vue-scaff 岂止于快。💯

[REPO on GITHUB](https://github.com/vue-scaff/vue-cli-scaff)

## 如何工作

Vue-Scaff 的设计基于 [Vue-Cli 技术生态](https://cli.vuejs.org/)。一个使用 Vue-Scaff 创建的项目，实际上是一个使用 [Vue](http://vuejs.org)、[Webpack](http://webpack.js.org/)、[Vue-Cli-Plugin](https://cli.vuejs.org/dev-guide/plugin-dev.html) 以及 `Auto-Registry` 等构建的 WEB 应用。

Vue-Scaff 项目中的每个页面，均为使用 [Vue](https://cli.vuejs.org/) 作为编程语汇。并使用自动方式注册如 [routes](https://router.vuejs.org/)、[modules](https://vuex.vuejs.org/)、[components](https://vuejs.org/v2/api/#Vue-component) 等作为基础库助力开发，并同时能享受生态配置 [vue.config.js](https://cli.vuejs.org/config/) 带来的便利。

## 历史更新

::: tip Version 0.4

- Canonical version output.
- Better performance.
- New approach syntax sugar of registry.
- Add configuration file.

:::

---

::: tip Version 0.3

- Rewrite `http` for `hybrid` compatibility.
- And methods of `utils` can be called in `store`.
- Add global registration.
- Add injection file.

:::

---

::: tip Version 0.2

- Simply directory structure.
- Auto registry mode to support `store`, `route`, `utils` and more.
- `http` apis, easily to use.
- Interceptor of `request` and `response`.

:::

---

::: tip Version 0.1

- New approach syntax sugar of `vue` instantiation.
- Preset to simply create project.

:::
