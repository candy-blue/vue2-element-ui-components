# vue2-element-ui-components

基于 Vue 2 + Element UI 的可复用组件库，用于沉淀项目中常用的业务组件/基础组件，方便后续复用。

## 环境

- Vue: 2.6.x
- Element UI: 2.15.x

## 安装依赖

```bash
npm install
```

## 本地开发预览

```bash
npm run serve
```

示例入口在 `examples/`，组件库入口在 `src/index.js`。

## 构建组件库

```bash
npm run build
```

构建产物输出到 `dist/`（commonjs/umd/umd-min）。

## 使用方式（在你的 Vue2 项目中）

在项目里安装 Element UI 后，引入并注册组件库：

```js
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import ComponentLib from "vue2-element-ui-components";

Vue.use(ElementUI);
Vue.use(ComponentLib);
```

然后直接使用组件：

```vue
<template>
  <base-button @click="onClick">点我</base-button>
</template>
```

## 组件开发约定

- 组件放在 `src/components/`
- 在 `src/index.js` 里统一导出并在 `install()` 中注册
