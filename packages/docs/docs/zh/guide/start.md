# 新手上路

::: warning 兼容性说明

- 使用 vue-scaff 前，请确保您的 Node.js 版本 >= 10
- 建议使用 [Yarn](https://yarnpkg.com/en/) 代替 npm 指令
  :::

## 基础依赖

```sh
yarn global add @vue/cli
```

## 创建应用

```sh
vue create -p vue-scaff/vue-cli-preset --clone <project-name>
```

## 如何使用

```sh
# 开发模式
yarn serve

# 应用构建
yarn build
```

## 环境启动

```sh
# 使用 `模式指令` 启动服务
yarn serve --mode=development

# 使用 `模式指令` 构建应用
yarn build --mode=production

```
