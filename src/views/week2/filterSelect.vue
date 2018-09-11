<template>
  <div class="app">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="價格" name="1">
        <el-select @change="select_Price" v-model="selectedPrice" clearable placeholder="请选择">
          <el-option v-for="item in sPrice" :value="item" :key="item.id" v-bind:selected="item === '100以內'">{{item}}</el-option>
        </el-select>
      </el-collapse-item>
      <el-collapse-item title="距離" name="2">
        <el-select @change="select_Distance" v-model="selectedDistance" clearable placeholder="请选择">
          <el-option v-for="item in sDistance" :key="item.id" :value="item">{{item}}</el-option>
        </el-select>
      </el-collapse-item>
      <el-collapse-item title="外送" name="3">
        <el-select @change="select_Delivery" v-model="selectedDelivery" clearable placeholder="请选择">
          <el-option v-for="item in sDelivery" :key="item.id" :value="item">{{item}}</el-option>
        </el-select>
      </el-collapse-item>
      <el-collapse-item title="食物類型" name="4">
        <el-select @change="select_Type" v-model="selectedType" clearable placeholder="请选择">
          <el-option v-for="item in sType" :key="item.id" :value="item">{{item}}</el-option>
        </el-select>
      </el-collapse-item>
      <el-collapse-item title="時間" name="5">
        <el-select @change="select_Time" v-model="selectedTime" clearable placeholder="请选择">
          <el-option v-for="item in sTime" :key="item.id" :value="item">{{item}}</el-option>
        </el-select>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: "filterSelect",
  props: ["storeList"],
  data() {
    return {
      activeName:"1",
      //select-value
      sPrice: [],
      sDelivery: [],
      sDistance: [],
      sType: [],
      sTime: [],
      selectedPrice: "",
      selectedDelivery: "",
      selectedDistance: "",
      selectedType: [],
      selectedTime: []
    }
  },
  mounted() {
    this.init()
  },  
  methods: {
    calcType(data){
      let result = []
      this.storeList.map((x)=>{
        let tmp= result.indexOf(x[data]);
        if(tmp==-1){
          result.push(x[data])
        }
      })
      return result
    },
    init() {
      this.sPrice=this.calcType("price")
      this.sDelivery = this.calcType("delivery")
      this.sType=this.calcType("type")
      this.sDistance =this.calcType("distance")    
      this.sTime = this.calcType("hours")  
      },
    // get_Re: function() {
    //   this.store_list = baseData
    // },
    // get_RStore: function() {
    //   let objStore = { data: this.store_list }
    //   let copy_objStore = Object.assign({}, objStore)
    //   let storeLengR = this.getRandomInt(this.store_list.length)
    //   copy_objStore = objStore.data[storeLengR]
    //   this.store_list = [copy_objStore]
    // },

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
      23123123
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
  },
  components: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {}
}
</script>


<style lang="scss" scoped>
</style>
