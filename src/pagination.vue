<template>
  <div class="page-wrap">
    <ul v-show="prePage" class="li-page" @click="goPrePage">上一页</ul>
    <ul>
      <li v-for="i in showPageBtn" :class="{active: i === currentPage, pointer: i, hover: i && i !== currentPage}" @click="pageOffset(i)">
        <a v-if="i" class="notPointer">{{i}}</a>
        <a v-else>···</a>
      </li>
    </ul>
    <ul v-show="nextPage" class="li-page" @click="goNextPage">下一页</ul>
  </div>

</template>

<script>
  export default {
    name: 'vue-pagination',

    props: {
      count: {
        type: Number,
        required: true
      },
      limit: {
        type: Number,
        default: 10
      }
    },

    data () {
      return {
        offset: 0
      }
    },

    computed: {
      prePage() {
        return this.offset !== 0 && this.count
      },
      nextPage() {
        return (this.offset + this.limit < this.count) && this.count
      },
      totalPage() {
        return Math.ceil(this.count / this.limit)
      },
      currentPage() {
        return Math.ceil(this.offset / this.limit) + 1
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
      pageOffset(i) {
        if (i === 0 || i === this.currentPage) return
        this.offset -= (i-1) * this.limit
      },
      goPrePage() {
        this.offset += this.limit
      },
      goNextPage() {
        this.offset = this.limit
      }
    }
  }
</script>

<style lang="scss">
  .page-wrap {
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
    }
  }
</style>
