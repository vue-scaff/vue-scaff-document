# 数据模拟

每一个由 `vue-scaff` 创建的应用都将内置一个 `mock-server`，开发人员可以在 `vuescaffrc.js` 中自由的开启或关闭它。

[Documentation of Mock](http://mockjs.com/examples.html)

## 目录结构

::: vue
.
├── src
│   └── `mock`
│ 
└── vuescaffrc.js
:::

## 配置说明

> 在 `vuescaffrc.js` 中

```js
{
  mock: true; // 布尔
}
```

## 使用 json 格式

> 例: `hello.json`

```json
{
  "object|2-4": {
    "10": "北京",
    "20": "上海",
    "30": "天津",
    "40": "重庆"
  }
}
```

## 如何使用

::: tip

访问: [http://localhost:8080/mock/hello](http://localhost:8080/mock/hello)

:::
