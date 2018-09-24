<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/week0">報名驗證</router-link> |
      <router-link to="/week1">Todolist</router-link>
    </div> -->
    <!-- <button @click="websocketonsend(111)">send</button> -->
    <router-view/>
  </div>
</template>
<script>
    export default{
      data(){
        return {
          websock: null
        }
      },
      created(){
        //偵測視窗大小
      },
      watch :{
        '$route':function(){
          if(this.$route.params.uid){
            this.initWebpack();
          }
        }
      },
      mounted(){
        this.initWebpack()
    
      },
      destroyed(){
        this.websocketclose()
      },
      methods:{
        initWebpack(){
          const wsuri = "ws://59.126.75.203:9501";
          this.websock = new WebSocket(wsuri);
          console.log(this.websock)
          this.websock.onopen = this.websocketopen;
          this.websock.onmessage = this.websocketonmessage;
          this.websock.onsend = this.websocketonsend;
          this.websock.onclose = this.websocketclose;
          this.websock.onerror = this.websocketerror;
        },
        websocketopen(){//打開
          console.log("連接成功")
        },
        websocketclose(){//關閉
          this.websock=null
          console.log("關閉數據")
        },        
        websocketerror(){
          this.websock=null;
          console.log("連接失敗")
          
        },    
        websocketonsend(sendData){//傳送數據
          this.websock.send(sendData)          
            console.log("傳送數據sendata",sendData)
        },            
        websocketonmessage(){//數據接收
          //利用type去做溝通
    
        },
      }
    }
</script>

<style lang="sass">
#app 
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav 
  padding: 30px
  a 
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active 
      color: #42b983
    
  


</style>
