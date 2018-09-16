<template>
  <div class="hello">
    <table class="table table-condensed">
      <tr>
        <th>#</th>
        <th>name</th>
        <th>age</th>
        <th>gender </th>
      </tr>
      <tr v-for="(r, index) in filteredRows.slice(pageStart, pageStart + countOfPage)">
        <td></td>
        <td>{{ (currPage-1) * countOfPage + index + 1 }}aa</td>
        <td>{{ r.name }}</td>
        <td>{{ r.age }}</td>
        <td>{{ r.gender }}</td>
      </tr>
    </table>
    <div class="pagination">
      <ul>
        <li v-bind:class="{'disabled': (currPage === 1)}" @click.prevent="setPage(currPage-1)">
          <a href="#">Prev</a>
        </li>
        <li v-for="n in totalPage" v-bind:class="{'active': (currPage === (n))}" @click.prevent="setPage(n)">
          <a href="#">{{n}}</a>
        </li>
        <li v-bind:class="{'disabled': (currPage === totalPage)}" @click.prevent="setPage(currPage+1)">
          <a href="#">Next</a>
        </li>
      </ul>
    </div>

    <div>Filter: <input type="text" v-model="filter_name"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      rows: [],
      countOfPage: 5,
      currPage: 1,
      filter_name: ""
    }
  },
  computed: {
    filteredRows: function() {
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 filter_name 與 rows[n].name 通通轉小寫方便比對。
      var filter_name = this.filter_name.toLowerCase()

      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 rows 回傳。
      return this.filter_name.trim() !== ""
        ? this.rows.filter(function(d) {
            return d.name.toLowerCase().indexOf(filter_name) > -1
          })
        : this.rows
    },
    pageStart: function() {
      return (this.currPage - 1) * this.countOfPage
    },
    totalPage: function() {
      return Math.ceil(this.filteredRows.length / this.countOfPage)
    }
  },
  methods: {
    setPage: function(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return
      }
      this.currPage = idx
    },
    getD() {
      this.$http.get("http://data.taipei/youbike").then(res => {
        console.log(res.data)
      })
    }
  },
  created: function() {
    this.getD()
    var self = this
    $.get(
      "http://www.json-generator.com/api/json/get/cknklDscqG?indent=2",
      function(data) {
        self.rows = data
      }
    )
  }
}
</script>


<style lang="scss" scoped>
</style>
