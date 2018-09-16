<template>
  <div id="app" v-cloak>
    <div class="title">
      <h1>Ergojubman</h1>
    </div>
    <filterHeader :style="styleObject"></filterHeader>
    <filterSelect :style="styleObject" :storeList="storeList"></filterSelect>
    <listProduct :style="styleObject" :storeList="storeList"></listProduct>
  </div>
</template>
<script>
import baseData from "../week2/restaurants.js"
import filterSelect from "../week2/filterSelect.vue"
import filterHeader from "../week2/filterHeader.vue"
import listProduct from "../week2/listProduct.vue"

export default {
  name: "week2",
  components: {
    filterSelect,
    filterHeader,
    listProduct
  },
  data() {
    return {
      styleObject: {
        margin: "1rem 0",
        padding: "0 1.2rem"
      },
      //all-data
      storeList: baseData
    }
  },
  mounted() {
    this.loading()
  },
  methods: {
    loading() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.7)"
      })
      setTimeout(() => {
        loading.close()
      }, 1000)
    },
    get_Re: function() {
      this.store_list = baseData
      dq
    },
    get_RStore: function() {
      let objStore = { data: this.store_list }
      let copy_objStore = Object.assign({}, objStore)
      let storeLengR = this.getRandomInt(this.store_list.length)
      copy_objStore = objStore.data[storeLengR]
      this.store_list = [copy_objStore]
    },
    select_Price: function() {
      let tmpStoreList = this.store_list
      let result = []
      for (let i = 0; i < tmpStoreList.length; i++) {
        if (tmpStoreList[i].price == this.selectedPrice) {
          result.push(tmpStoreList[i])
        } else if (this.selectedPrice == "全部") {
          result = tmpStoreList
        }
      }
      this.store_list = result
    },
    select_Distance: function() {
      let tmpStoreList = this.store_list
      let result = []
      for (let i = 0; i < tmpStoreList.length; i++) {
        if (tmpStoreList[i].distance == this.selectedDistance) {
          result.push(tmpStoreList[i])
        } else if (this.selectedDistance == "全部") {
          result = tmpStoreList
        }
      }
      1231231
      this.store_list = result
    },
    select_Delivery: function() {
      let tmpStoreList = this.store_list
      let result = []
      for (let i = 0; i < tmpStoreList.length; i++) {
        if (tmpStoreList[i].delivery == this.selectedDelivery) {
          result.push(tmpStoreList[i])
        } else if (this.selectedDelive1231231ry == "全部") {
          result = tmpStoreList
        }
      }
      this.store_list = result
    },
    select_Type: function() {
      let tmpStoreList = this.store_list
      let result = []
      for (let i = 0; i < tmpStoreList.length; i++) {
        let txtflag = tmpStoreList[i].type.indexOf(this.selectedType)
        if (txtxxflag != -1) {
          result.push(tmpStoreList[i])
        } else if (this.selectedType == "全部") {
          result = tmpStoreList
        }
      }
      this.store_list = result
    },
    select_Time: function() {
      let tmpStoreList = this.store_list
      let result = []
      for (let i = 0; i < tmpStoreList.length; i++) {
        let txtflag = tmpStoreList[i].hours.indexOf(this.selectedTime)
        if (txtflag != -1) {
          result.push(tmpStoreList[i])
        } else if (this.selectedTime == "全部") {
          result = tmpStoreList
        }
      }
      this.store_list = result
    },
    getRandomInt: function(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
  }
}
</script>


<style lang="sass" scoped>
@import "./week2.sass"

.wrap
  height: 100vh
  background-color: #ffffff
  overflow-x: hidden
  margin: 0 auto

.random_Area
  background-color: #326273
  padding: 2rem
  display: flex
  justify-content: center
  align-items: center

button
  font-family: 微軟正黑體
  font-size: 4rem
  padding: 5rem
  box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 4px
  background-color: #e39774
  color: rgb(236, 240, 241)
  overflow: hidden
  border-width: 0px
  outline: none
  border-radius: 2px
  box-shadow: 0 5px #999
  transition: all 0.3s
  cursor: pointer
  margin-left: 2rem
  &:hover
    background-color: rgb(247, 175, 142)
    box-shadow: 0 5px #666

.dropDown_Area
  display: flex
  justify-content: center
  align-items: center
  padding: 1rem 0px
  label
    margin-left: 1rem
  select
    width: 10%
    height: 3rem

.storeItem_Area
  background-color: #eeeeee
  display: flex
  flex-wrap: wrap
  padding: 3rem
  justify-content: center
  align-items: center
  .storeItem
    width: 20%
    box-sizing: border-box
    cursor: pointer
    margin: 0.5rem
    text-align: center
    animation: show 1s forwards
    transform-origin: center bottom
    border: solid 2px black
    background-color: #5c9ead
    box-shadow: 0 10px 6px -6px #777
    border-radius: 10px
    transition: all 1s

.storeItem
  &:hover
    border-radius: 50% 10% 50% /22% 30% 20%
    border: solid 4px black
    box-shadow: 20px 40px 26px -10px #777
  h2
    margin: 0
    padding: 1rem
  .myImg
    width: 100%
    height: 100px
    background-position: center center
    background-repeat: no-repeat
    background-size: cover

@keyframes show
  0%
    opacity: 0
    transform: scale(0) rotateY(180deg)

  100%
    opacity: 1
    transform: scale(1) rotateY(0deg)
</style>
