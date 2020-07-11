# 使用 `vue-scaff` 的正确姿势？

## 介绍

> 先上代码

```js
// 导入必要的依赖 `@scaff/vue-cli-scaff`
import Scaff from "@scaff/vue-cli-scaff";

// 需要使用 `export` 导出实例
export default App =>
  new Scaff().then(
    // 这是个回调函数 <=
    ({ subscribe }, next) => {
      // 订阅的例子
      subscribe(`<registry module>`, config => {
        // 一些不可描述的代码
      });

      // 运行 `vue-scaff`
      return next(App);
    }
  );
```

## 在回调中订阅

> 如果需要对已配置的上下文提取内容做修改，你可以使用 `subscribe` 函数来完成。

### 1. 工具类 util

```js
// 在 `main.js` 中
subscribe("util", config => {
  config.example = `halo`;
});
```

在 `.vue` 中使用

```js
console.log(this.$util.example); // halo
```

### 2. 数据过滤 filter

```js
subscribe("filter", (config, model) => {
  model.combination = value => `${value} Vue Scaff`;
  return model;
});
```

在 `template` 中使用

```html
{{ 'Hello' | combination }}
```

### 3. 路由 route

```js
subscribe("route", config => {
  // 设置路由模式 `history`
  config.mode = "history";
  // 设置根目录，示例中使用了 `injection.json` 的配置项
  config.base = process.env.publicPath;
});
```

### 4. 复用组件 component

```js
subscribe("component", (config, model) => {
  // 设置组件的前缀，例：`<x-sample />`
  config.prefix = "x";
});
```

在 `template` 中使用

```html
<x-example />
```

### 5. 请求与响应 request & response

基于 `axios`

```js
// 请求订阅 request (interceptor)
subscribe("request", ({ data, headers }) => {
  // 添加全局参数
  data.token = "wechat: kazami500";
});

// 响应订阅 response (interceptor)
subscribe("response", config => {
  // 设置响应处理回调
  config.success = ({ data }) => data;
});
```

在 `.vue` 中使用

```js
const data = await this.$http(this.$api.mock).get({ name: `joenix` });
```

### 6. 自定义参数

```js
subscribe("custom", config => {
  return {
    author: "joenix"
  };
});
```

在 `.vue` 中使用

```js
console.log(this.custom.author); // joenix
```

## 一些代码演示

配置规则依据 `vuescaffrc.js`

### 1. 工具类 util

`@/utils/` 目录配置在 `rc` 中

```js
// 示例文件名: plus

export default (a, b) => {
  return a + b;
};
```

在 `.vue` 中使用

```js
this.$util.plus(1, 2); // 3
```

### 2. 数据过滤 filter

`@/filters` 目录配置在 `rc` 中

```js
// 示例文件名: upper

export default value => {
  return value.toUpperCase();
};
```

在 `.vue` 中使用

```html
{{ hello | upper }}
```

### 3. 路由 route

`@/pages/<name>/` 目录配置在 `rc` 中

```js
// 示例文件名: route.js

export default {
  name: `home`,
  path: `/home`,
  component: () => import(`@/pages/home`)
};
```

### 4. 数据存储 store

:::tip
`vue-scaff` will automatically add namespaces for each `store`
:::

`@/pages/<name>/` 目录配置在 `rc` 中

```js
// 示例文件名: store.js

export default ({ plus }) => {
  // set name
  const name = `example`;

  // set state
  const state = {
    author: null
  };

  // set mutations
  const mutations = {
    SET_NAME(state, value) {
      state.author = value;
    }
  };

  // set actions
  const actions = {
    setAuthor({ commit }, value) {
      commit("SET_NAME", value);
    }
  };
};
```

在 `.vue` 中使用

```js
this.$store.dispatch("setAuthor", "joenix");
```

### 5. 复用组件 component

:::tip
`vue-scaff` 会依据 `rc` 中的配置，将每个 `component` 注册到全局。
:::

`@/components/` 目录配置在 `rc` 中

```html
<template>
  <div>
    <h1>Hello</h1>
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: `example`,
    props: {
      message: {
        type: [String],
        default: ``
      }
    }
  };
</script>
```

在 `.vue` 中使用

```html
<x-example message="Kitty" />
```

:::tip
此处组件前缀，可于所订阅的 `component` 中设置。
:::
