# How to Use ?

## Instantiation

```js
// import necessary dependency `@scaff/vue-cli-scaff`
import Scaff from "@scaff/vue-cli-scaff";

// export for `Vue Scaff`
export default App => new Scaff().then(
	// handler <=
	({ subscribe }, next) => {
		// example for `subscribe`
		subscribe(`<registry module>`, config => {
			// some coding ...
		});

		// runner
		return next(App);
	}
);
```

## `subscribe` in handler

> if need to do some configuration for the `extract`, you can use the method name `subscribe`.

### 1. util

```js
// in `scaff.js`
subscribe("util", config => {
	config.example = `halo`;
});
```

use in `.vue`

```js
console.log(this.$util.example); // halo
```

### 2. route

```js
subscribe("route", config => {
	// set mode to history
	config.mode = "history";
	// set baseRoute to config with `injection.json`
	config.baseRoute = process.env.publicPath;
});
```

### 3. componet

```js
subscribe("component", (config, model) => {
	// set prefix of components
	config.prefix = "x";
});
```

use in `template`

```html
<x-example />
```

### 4. request & response

based on `axios` package

```js
// request (interceptor)
subscribe("request", ({ data, headers }) => {
	// add global request data
	data.token = "wechat: kazami500";
});

// response (interceptor)
subscribe("response", config => {
	// Print response info
	console.log("HTTP Response : ", config);
});
```

use http in `.vue`

```js
const data = await this.$http(this.$api.mock).get({ name: `joenix` });
```

### 5. custom

```js
subscribe("custom", config => {
	return {
		author: "joenix"
	};
});
```

use in `.vue`

```js
console.log(this.custom.author); // joenix
```
