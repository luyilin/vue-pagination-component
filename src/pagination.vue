<template>
  <div class="page-wrap">
    <ul v-show="prePage" class="li-page" @click="goPrePage">上一页</ul>
    <ul>
      <li v-for="i in showPageBtn" :class="{active: i === currentPage, pointer: i, hover: i && i !== currentPage}" @click="goPage(i)">
        <a v-if="i" class="notPointer">{{i}}</a>
        <a v-else>···</a>
      </li>
    </ul>
    <ul v-show="nextPage" class="li-page" @click="goNextPage">下一页</ul>
  </div>
</template>

<script>
  export default {
    name: 'v-pagination',

    props: {
      total: {
        type: Number,
        required: true
      },
      pageSize: {
        type: Number,
        default: 10
      },
      pageSizeList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },

    data () {
      return {
        offset: 0
      }
    },

    computed: {
      prePage() {
        return this.offset !== 0 && this.total
      },
      nextPage() {
        return (this.offset + this.pageSize < this.total) && this.total
      },
      totalPage() {
        return Math.ceil(this.total / this.pageSize)
      },
      currentPage() {
        return Math.ceil(this.offset / this.pageSize) + 1
      },
      showPageBtn() {
        let pageNum = this.totalPage,
            index = this.currentPage,
            arr = []
        if (pageNum <= 5) {
          for(let i = 1; i <= pageNum; i++) {
            arr.push(i)
          }
          return arr
        }
        if (index <= 2) return [1,2,3,0,pageNum]
        if (index >= pageNum -1) return [1,0, pageNum -2, pageNum -1, pageNum]
        if (index === 3) return [1,2,3,4,0,pageNum]
        if (index === pageNum -2) return [1,0, pageNum-3, pageNum-2, pageNum-1, pageNum]
        return [1,0, index-1, index, index + 1, 0, pageNum]
      }
    },

    methods: {
      goPrePage() {
        this.offset -= this.pageSize
      },

      goNextPage() {
        this.offset += this.pageSize
      },

      goPage(i) {
        if (i === 0 || i === this.currentPage) return
        this.offset = (i-1) * this.pageSize
      }
    }
  }

</script>

<style lang="scss">
  .page-wrap {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 18px;
    margin-top: 180px;
    ul {
      display: inline-block;
      list-style: none;
      overflow: hidden;
      li {
        float: left;
        color: #1e5a6b;
        padding: 1px 10px;
        margin: 0 5px;
        border-radius: 50%;
        user-select: none;
        border: 1px solid transparent;
        &:hover {
          color: #7ba6b3;
        }
      }
    }
    .pointer {
      cursor: pointer;
    }
    .hover {
      &:hover {
        border-color: #7ba6b3;
      }
    }
    .li-page {
      line-height: 1.5;
      cursor: pointer;
      color: #1e5a6b;
      &:hover {
        color: #7ba6b3;
      }
    }
    .active {
      border-color: #246c81;
      &:hover{
        color: #1e5a6b
      }
    }
  }
</style>
