<template>
  <div class="app">
    <h1>報名驗證</h1>
    <h2>{{titleTime}}</h2>
    <div class="grid">
      <div class="fetch">
        <h2>Fetch</h2>
        <p> {{fetchStatus}}
        </p>
        <button class="submit" @click="submitFetch">Go</button>
      </div>
      <div class="xhr">
        <h2>XHR</h2>
        <p>{{userName}}</p>
        <p>{{userAge}}</p>
        <img :src="userImg">
        <button class="submit" @click="submitXhr">Go</button>
      </div>
      <div class="qs">
        <h2>AXIOS+QS</h2>
        <p>{{total}}</p>
        <p>{{signUpStatus}}</p>
        <input type="text" class="in-Text" v-model="inMail">
        <button class="submit" @click="submitQs">Go</button>
      </div>
      <div class="jq">
        <h2>jQuery</h2>
        <img :src="dogImg" alt="">
        <button class="submit" @click="submitJq">Go</button>
      </div>
    </div>
  </div>
</template>

<script >
import moment from 'moment'
export default {
  name: "HelloWorld",
  data() {
    return {
      inMail: "",
      signUpStatus: "",
      total: "",
      userName: "",
      userAge: "",
      userImg: "",
      dogImg: "",
      fetchStatus: "",
      titleTime:null,
    }
  },
  methods: {
    submitFetch() {
      let url = "https://hexschool-tutorial.herokuapp.com/api/signup"
      fetch(url, {
        method: "POST",
        mode: "cors",
        // credentials: "test", //網站依賴 session 會導致請求回傳未經認證，需要使用 cookies 必須額外設定 credentials。
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // data can be `string` or {object}!
          email: "lov123213ef1232e@hexschool.com",
          password: "12345678"
        })
      })
        .then(res => {
          //回傳的 response 需要透過 json() (在 Body 可以找到定義, Body 是用 Request 和 Response 實作出來的物件.)
          return res.json()
        })
        .then(data => {
          this.fetchStatus = data.message
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitXhr() {
      let xhr = new XMLHttpRequest()
      xhr.open("get", "https://randomuser.me/api/", true)
      xhr.send()
      xhr.onload = () => {
        let data = JSON.parse(xhr.response).results[0]
        this.userName = data.id.name
        this.userAge = data.dob.date
        this.userImg = data.picture.medium
      }
    },
    submitQs() {
      this.getSignUpTotal()
      let param = {
        email: this.inMail
      }
      this.$http
        .post("https://www.thef2e.com/api/isSignUp", this.Qs.stringify(param))
        .then(res => {
          if (res.success == true) {
            this.signUpStatus = res.data.message
          } else {
            this.signUpStatus = res.data.message
          }
        })
    },
    getSignUpTotal() {
      this.$http.get("https://www.thef2e.com/api/signUpTotal").then(res => {
        if (res.data.success == true) {
          this.total = res.data.total
        } else {
          console.log("error")
        }
      })
    },
    submitJq() {
      $.ajax({
        type: "GET",
        url: "https://dog.ceo/api/breeds/image/random",
        data: null,
        dataType: "json"
      }).done(res => {
        this.dogImg = res.message
      })
    }
  },
  components: {},
  mounted() {
    this.getSignUpTotal()
    this.titleTime=moment().format()
  },
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
$colorGreen: #a1c45a;
$colorWhite: #fff9e0;
$colorYellow: #f1c550;
$colorRed: #ea4c4c;
.app {
  margin: 0 auto;
  padding: 0;
}
.grid {
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-gap: 0.2rem;
}
.fetch {
  background-color: $colorGreen;
}
.jq {
  background-color: $colorWhite;
}
.qs {
  background-color: $colorYellow;
}
.xhr {
  background-color: $colorRed;
}
</style>
