# 配置说明

## 配置 `vuescaffrc.js`

### 项目入口 `entry`

```js
{
  main: {
    app: `/App.vue`;
  }
}
```

### 数据模拟 `mock`

```js
{
  mock: true;
}
```

### 像素转换 `px2rem`

```js
{
  px2rem: 10;
}
```

### 自动注册 `registry`

```js
{
  // 自动注册
	registry: {
		// 使用 Host 配置（应用于 api 配置）
	  host: true,
    // 使用 请求地址
	  api: true,
		// 使用 路由配置
	  route: true,
		// 使用 数据存储（基于 vuex）
	  store: true,
		// 数据存储中的 mixin 配置
	  mixin: true
	}
}
```

::: tip
当以上某配置项被设置为 `true` 时，`Vue Scaff` 会根据配置自动从相应目录提取上下文。（未完全实现）
:::

### 提取配置

```js
{
	extract: {
		// 通用工具类
		util: {
			context: `@/utils`,
			suffix: /.js$/
		},

		// 数据过滤
		filter: {
			context: `@/filters`,
			suffix: /.js$/
		},

		// 页面目录
		route: {
			context: `@/pages`,
			suffix: /\S+\/route.js$/
		},

		// 数据存储
		store: {
			context: `@/pages`,
			suffix: /\S+\/store.js$/
		},

		// 复用组件
		component: {
			context: `@/components`,
			suffix: /.vue$/
		},

		// 样式目录
		style: {
			context: `@/sheet`,
			suffix: /variables.scss$/
		},

		// 国际化
		i18n: {
			context: `@/i18n`,
			suffix: /.js$/
		}
	}
}
```
