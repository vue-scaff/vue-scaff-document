# Mock Server

Every project created by `vue-scaff` will have a `mock-server` built in. Developers can open or close in `vuescaffrc.js`.

[Documentation of Mock](http://mockjs.com/examples.html)

## Structure

::: vue
.
├── src
│   └── `mock`
│ 
└── vuescaffrc.js
:::

## Configure

> in `vuescaffrc.js`

```js
{
  mock: true; // Boolean
}
```

## Mock Json

> filename: `hello.json`

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

## Use

::: tip

visit: [http://localhost:8080/mock/hello](http://localhost:8080/mock/hello)

:::
