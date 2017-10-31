# vue-pagination-component

[![NPM version](https://img.shields.io/npm/v/vue-pagination-component.svg?style=flat)](https://npmjs.com/package/vue-pagination-component) [![NPM downloads](https://img.shields.io/npm/dm/vue-pagination-component.svg?style=flat)](https://npmjs.com/package/vue-pagination-component) [![CircleCI](https://circleci.com/gh/luyilin/vue-pagination-component/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/vue-pagination-component/tree/master)

A cute [Vue](https://vuefe.cn/) pagination component.

### [Demo](https://luyilin.github.io/vue-pagination-component/example/dist/index)

## Install

```bash
yarn add vue-pagination-component
```

CDN: [UNPKG](https://unpkg.com/vue-pagination-component/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-pagination-component/) (available as `window.VPagination`)

## Usage

```vue
<template>
  <v-pagination :count="100"></v-pagination>
</template>

<style src="vue-pagination-component/dist/vue-pagination-component.css"></style>
```

```js
import vPagination from 'vue-pagination-component'

Vue.use(vPagination)

```

## Props

### `total` : `number`
The total of the data.

### `pageSize` : `number`
The number of items per page.

## License

MIT &copy; [luyilin](https://github.com/luyilin)
