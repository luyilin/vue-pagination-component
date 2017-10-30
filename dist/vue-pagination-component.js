(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.vuePaginationComponent = factory());
}(this, (function () { 'use strict';

var vPagination = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrap"},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.prePage),expression:"prePage"}],staticClass:"li-page",on:{"click":_vm.goPrePage}},[_vm._v("上一页")]),_vm._v(" "),_c('ul',_vm._l((_vm.showPageBtn),function(i){return _c('li',{class:{active: i === _vm.currentPage, pointer: i, hover: i && i !== _vm.currentPage},on:{"click":function($event){_vm.goPage(i);}}},[(i)?_c('a',{staticClass:"notPointer"},[_vm._v(_vm._s(i))]):_c('a',[_vm._v("···")])])})),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.nextPage),expression:"nextPage"}],staticClass:"li-page",on:{"click":_vm.goNextPage}},[_vm._v("下一页")])])},staticRenderFns: [],
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
      default: function () {
        return []
      }
    }
  },

  data: function data () {
    return {
      offset: 0
    }
  },

  computed: {
    prePage: function prePage() {
      return this.offset !== 0 && this.total
    },
    nextPage: function nextPage() {
      return (this.offset + this.pageSize < this.total) && this.total
    },
    totalPage: function totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    currentPage: function currentPage() {
      return Math.ceil(this.offset / this.pageSize) + 1
    },
    showPageBtn: function showPageBtn() {
      var pageNum = this.totalPage,
          index = this.currentPage,
          arr = [];
      if (pageNum <= 5) {
        for(var i = 1; i <= pageNum; i++) {
          arr.push(i);
        }
        return arr
      }
      if (index <= 2) { return [1,2,3,0,pageNum] }
      if (index >= pageNum -1) { return [1,0, pageNum -2, pageNum -1, pageNum] }
      if (index === 3) { return [1,2,3,4,0,pageNum] }
      if (index === pageNum -2) { return [1,0, pageNum-3, pageNum-2, pageNum-1, pageNum] }
      return [1,0, index-1, index, index + 1, 0, pageNum]
    }
  },

  methods: {
    goPrePage: function goPrePage() {
      this.offset -= this.pageSize;
    },

    goNextPage: function goNextPage() {
      this.offset += this.pageSize;
    },

    goPage: function goPage(i) {
      if (i === 0 || i === this.currentPage) { return }
      this.offset = (i-1) * this.pageSize;
    }
  }
};

var install = function (Vue) {
  Vue.component('v-pagination', vPagination);
};

if ((typeof window !== 'undefined') && window.Vue) {
  install(window.Vue);
}

return install;

})));
