# Directory Structure

Vue-Scaff follows the principle of **"Convention over Configuration"**, the recommended document structure is as follows:

<!-- textlint-disable terminology -->

::: vue
.
├── src
│   ├── `registry` _(**Required**)_
│   ├── `assests` _(**Required**)_
│   ├── `pages` _(**Required**)_
│   ├── `components` _(**Optional**)_
│   ├── `i18n` _(**Optional**)_
│   ├── `utils` _(**Optional**)_
│   ├── `sheet` _(**Required**)_
│   │ 
│   ├── App.vue
│   ├── main.js
│   │ 
│   └── scaff.js
│ 
├── dist
│   ├── `dev` _(**Optional**)_
│   └── `build` _(**Optional**)_
│
├── public
│   └── index.html _(**Required**)_
│
├── babel.config.js
├── postcss.config.js
├── vue.config.js _(**Required**)_
├── vuescaffrc.js _(**Required**)_
│
├── injection.json
└── package.json _(**Required**)_
:::

<!-- textlint-enable -->

::: warning Note
Please note the capitalization of the directory name.
:::

- `src/registry`: Globally parts of registration.
- `src/assets`: Local resources directory.
- `src/pages`: Page directory. According with Routing-Configure.
- `src/components`: Components registered.
- `src/utils`: Tools files.
- `src/sheet`: Stores style related files.
- `injection.json`: The settings will be injected into `process.env`
- `vuescaffrc.js`: Configure of `vue-scaff`
