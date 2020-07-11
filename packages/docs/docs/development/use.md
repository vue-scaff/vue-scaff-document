# How to Use ?

## Instantiation

```js
// import necessary dependency `@scaff/vue-cli-scaff`
import Scaff from "@scaff/vue-cli-scaff";

// export for `Vue Scaff`
export default App =>
  new Scaff().then(
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

## Subscribe in Handler

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

### 2. filter

```js
subscribe("filter", (config, model) => {
  model.combination = value => `${value} Vue Scaff`;
  return model;
});
```

use in `template`

```html
{{ 'Hello' | combination }}
```

### 3. route

```js
subscribe("route", config => {
  // set mode to history
  config.mode = "history";
  // set baseRoute to config with `injection.json`
  config.baseRoute = process.env.publicPath;
});
```

### 4. component

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

### 5. request & response

based on `axios` package

```js
// request (interceptor)
subscribe("request", ({ data, headers }) => {
  // add global request data
  data.token = "wechat: kazami500";
});

// response (interceptor)
subscribe("response", config => {
  // get data from response
  config.success = ({ data }) => data;
});
```

use http in `.vue`

```js
const data = await this.$http(this.$api.mock).get({ name: `joenix` });
```

### 6. custom

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

## Code of Various

configuration rules in `vuescaffrc.js`

### 1. util

example: `@/utils/` in rc

```js
// filename: plus

export default (a, b) => {
  return a + b;
};
```

use in `.vue`

```js
this.$util.plus(1, 2); // 3
```

### 2. filter

example: `@/filters` in rc

```js
// filename: upper

export default value => {
  return value.toUpperCase();
};
```

use in `.vue`

```html
{{ hello | upper }}
```

### 3. route

example: config `@/pages/<name>/` in `rc`

```js
// filename: route.js

export default {
  name: `home`,
  path: `/home`,
  component: () => import(`@/pages/home`)
};
```

### 4. store

:::tip
`vue-scaff` will automatically add namespaces for each `store`
:::

example: config `@/pages/<name>/` in `rc`

```js
// filename: store.js

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

use in `.vue`

```js
this.$store.dispatch("setAuthor", "joenix");
```

### 5. component

:::tip
`vue-scaff` will automatically register each `component` to the global
:::

example: `@/components/` in `rc`

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

use in `.vue`

```html
<x-example message="Kitty" />
```

:::tip
set prefix in `subscribe` of `component`
:::
