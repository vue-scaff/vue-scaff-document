# Configuration

## config in `vuescaffrc.js`

### `entry` of project

```js
{
  main: {
    app: `/App.vue`;
  }
}
```

### `registry` of project

```js
{
	registry: {
		// `host` used for `api`
	  host: true,
		// request addresses
	  api: true,
		// access routes for project
	  route: true,
		// store management based on `vuex`
	  store: true,
		// mixin file for `Auto Registry`
	  mixin: true
	}
}
```

::: tip
`Vue Scaff` will auto extract context from the corresponding directory according to the configuration, when certain configuration items are set to `true`.
:::

### `extract` of project

```js
{
	extract: {
		// General Utils
		util: {
			context: `@/utils`,
			suffix: /.js$/
		},

		// Access Routes
		route: {
			context: `@/pages`,
			suffix: /\S+\/route.js$/
		},

		// Store Management
		store: {
			context: `@/pages`,
			suffix: /\S+\/store.js$/
		},

		// Components
		component: {
			context: `@/components`,
			suffix: /.vue$/
		},

		// Global Stylesheet
		style: {
			context: `@/sheet`,
			suffix: /variables.scss$/
		},

		// Language Conf
		i18n: {
			context: `@/i18n`,
			suffix: /.js$/
		}
	}
}
```
