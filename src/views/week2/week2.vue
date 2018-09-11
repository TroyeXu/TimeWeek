<template>
  <div id="app" v-cloak>
    <div class="wrap">
      <div class="random_Area">
        <button @click="get_RStore">隨機</button>
        <button @click="get_Re">重置</button>
      </div>
      <div class="dropDown_Area">
        <label>價格</label>
        <select @change="select_Price" v-model="selectedPrice">
          <option v-for="item in sPrice" :value="item" v-bind:selected="item === '100以內'">{{item}}</option>
        </select>
        <label>距離</label>
        <select @change="select_Distance" v-model="selectedDistance">
          <option v-for="item in sDistance" :value="item">{{item}}</option>
        </select>
        <label>外送</label>
        <select @change="select_Delivery" v-model="selectedDelivery">
          <option v-for="item in sDelivery" :value="item">{{item}}</option>
        </select>
        <label>食物類型</label>
        <select @change="select_Type" v-model="selectedType">
          <option v-for="item in sType" :value="item">{{item}}</option>
        </select>
        <label>時間</label>
        <select @change="select_Time" v-model="selectedTime">
          <option v-for="item in sTime" :value="item">{{item}}</option>
        </select>
      </div>
      <div class="storeItem_Area background">
        <div class="storeItem " v-for="item in store_list">
          <!-- v-show=priceFilter(item.price) -->
          <div class="top_detail ">
            <h2>{{item.Id}}</h2>
            <div class="myImg" alt="test" v-bind:style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
          </div>
          <div class="down_detail ">
            <h4>價格：{{ item.price }}</h4>
            <h4>外送：{{item.delivery}}</h4>
            <h4>距離：{{item.distance}}</h4>
            <h4>食物類型：{{item.type.toString()}}</h4>
            <p>營業時間：{{item.hours.toString( )}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseData from "../week2/restaurants.js"
export default {
  name: "HelloWorld",
  data() {
    return {
        //all-data eqw
        store_list:baseData,
        //select-原dataqweqweqw
        sPrice: [],
        sDelivery: [],
        sDistance: [],
        sType: [],
        sTime: [],
        //select-取得表單value
        selectedPrice: "",
        selectedDelivery: "", 
        selectedDistance: "",
        selectedType:[],
        selectedTime: [],
        //showflag
        isShow:true,    
     }
  },
  methods: {                 
    init: function () {
        //select-data 
        this.sPrice= ["全部","100以內", "100~200", "200~300", "300以上"]; 
        this.sDelivery=["全部","O", "X"];
        this.sDistance=["全部","校內","甜點咖啡", "火鍋烤肉", "麵", "飯", "異國料理", "素食", "其他", "飲料", "小吃"]; 
        this.sTime=["全部","早","中", "晚","宵"]
        //給予select-value
        this.selectedPrice = "全部";
        this.selectedDelivery = "全部";
        this.selectedDistance = "全部";
        this.selectedType = "全部";
        this.selectedTime = "全部";
    },
    get_Re:function(){
        this.store_list=baseData;dq

    },
    get_RStore: function () {
        let objStore= {data:this.store_list};
        let copy_objStore=Object.assign({},objStore);
        let storeLengR= this.getRandomInt(this.store_list.length);
        copy_objStore=objStore.data[storeLengR];
        this.store_list=[copy_objStore];
    },
    select_Price: function () {     
        let tmpStoreList=this.store_list;
        let result=[];
        for(let i=0 ; i<tmpStoreList.length;i++){
        if(tmpStoreList[i].price==this.selectedPrice){
                result.push(tmpStoreList[i]);
        }else if(this.selectedPrice=="全部"){
                result=tmpStoreList;
            }
        }
        this.store_list=result;
    },
    select_Distance: function () {
        let tmpStoreList=this.store_list;
        let result=[];
        for(let i=0 ; i<tmpStoreList.length;i++){
        if(tmpStoreList[i].distance==this.selectedDistance){
                result.push(tmpStoreList[i]);
        }else if(this.selectedDistance=="全部"){
                result=tmpStoreList;
            }
        }1231231
        this.store_list=result;
    },
    select_Delivery: function () {
        let tmpStoreList=this.store_list; 
        let result=[]; 23123123
        for(let i=0 ; i<tmpStoreList.length;i++){
            if(tmpStoreList[i].delivery==this.selectedDelivery){
            result.push(tmpStoreList[i]);
            }else if(this.selectedDelive1231231ry=="全部" ){
            result=tmpStoreList; }
        }
        this.store_list=result;
    },
    select_Type: function () {
        let tmpStoreList=this.store_list; 
        let result=[];
        for(let i=0 ; i<tmpStoreList.length;i++){
            let txtflag =tmpStoreList[i].type.indexOf(this.selectedType);
            if(txtxxflag!=-1){
                result.push(tmpStoreList[i]);
            }else if(this.selectedType=="全部" ){
                result=tmpStoreList; 
            }
        }
        this.store_list=result;
    },
    select_Time: function () {
        let tmpStoreList=this.store_list; 
        let result=[];
        for(let i=0 ; i<tmpStoreList.length;i++){
            let txtflag =tmpStoreList[i].hours.indexOf(this.selectedTime);
            if(txtflag!=-1){
                result.push(tmpStoreList[i]);
            }else if(this.selectedTime=="全部" ){
                result=tmpStoreList; 
            }
        }
        this.store_list=result;
    },
    getRandomInt:function(max){
        return Math.floor(Math.random()*Math.floor(max));
    },
  },
  components: {},
  mounted() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {}
}
</script>


<style lang="scss" scoped>
.wrap {
  height: 100vh;
  background-color: #ffffff;
  overflow-x: hidden;
  margin: 0 auto;
}

.random_Area {
  background-color: #326273;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font-family: 微軟正黑體;
  font-size: 4rem;
  padding: 5rem;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 4px;
  background-color: #e39774;
  color: rgb(236, 240, 241);
  overflow: hidden;
  border-width: 0px;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 5px #999;
  transition: all 0.3s;
  cursor: pointer;
  margin-left: 2rem;
}

button:hover {
  background-color: rgb(247, 175, 142);
  box-shadow: 0 5px #666;
}

.dropDown_Area {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0px;
}

.dropDown_Area label {
  margin-left: 1rem;
}

.dropDown_Area select {
  width: 10%;
  height: 3rem;
}

.storeItem_Area {
  background-color: #eeeeee;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  justify-content: center;
  align-items: center;
}

.storeItem_Area .storeItem {
  width: 20%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0.5rem;
  text-align: center;
  animation: show 1s forwards;
  transform-origin: center bottom;
  border: solid 2px black;
  background-color: #5c9ead;
  box-shadow: 0 10px 6px -6px #777;
  border-radius: 10px;
  transition: all 1s;
}

.storeItem:hover {
  border-radius: 50% 10% 50% /22% 30% 20%;
  border: solid 4px black;
  box-shadow: 20px 40px 26px -10px #777;
}

.storeItem h2 {
  margin: 0;
  padding: 1rem;
}

.storeItem .myImg {
  width: 100%;
  height: 100px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

@keyframes show {
  0% {
    opacity: 0;
    transform: scale(0) rotateY(180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotateY(0deg);
  }
}
</style>
