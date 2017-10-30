# vue-pagination-component

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
