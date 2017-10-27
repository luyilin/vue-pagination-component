# vue-pagination-component

A cute [Vue](https://vuefe.cn/) component for pagination.

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

<script>
import VPagination from 'vue-pagination-component'

export default {
  components: {
    VPagination
  }
}
</script>
```

## Props

### `total` : `number`
The total of the data.

### `limit` : `number`
The number of items per page.

## License

MIT &copy; [luyilin](https://github.com/luyilin)
