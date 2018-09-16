<template>
  <div class="app">
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">我的任務</el-menu-item>
      <el-menu-item index="2">正在處理</el-menu-item>
      <el-menu-item index="3">已經完成</el-menu-item>
    </el-menu>
    <div class="todo">
      <ul>
        <li class="panel" v-for="item in todoList" :key="item.id" v-bind="{delText:item.complete}">
          <div class="panel-top">
            <div class="main">
              <div class="titletext df">
                <el-checkbox v-model="item.complete"></el-checkbox>
                <input class="intext" v-model="item.message">
              </div>
              <div class="titleicon df">
                <i class="el-icon-star-on" @click="item.stared=!item.stared" v-if="item.stared"></i>
                <i class="el-icon-star-off" @click="item.stared=!item.stared" v-if="!item.stared"></i>
                <i class="el-icon-edit" @click="open=!open" v-bind:class="{open:open}"></i>
              </div>
            </div>
            <div class="second">
              <i class="el-icon-date">{{ item.sDate }}</i>
              <i class="el-icon-message" v-if="item.comments"></i>
            </div>
          </div>
          <transition name="el-fade-in-linear">
            <div class="panel-bottom" v-show="open">
              <div class="main-control">
                <div class="text-width-mid">
                  <i class="el-icon-date">DeadLine</i>
                  <el-date-picker v-model="item.sDate" type="date" placeholder="Pick a day">
                  </el-date-picker>
                </div>
                <div class="text-width-mid">
                  <i class="el-icon-mobile-phone">Comment</i>
                  <el-input class="intext" placeholder="Please input " v-model="item.comment"></el-input>
                </div>
                <el-button calss="btn-check" type="primary" plai class="w100 btns">+ Add Task</el-button>
              </div>
            </div>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable"

export default {
  name: "HelloWorld",
  data() {
    return {
      open: false,
      checked: false,
      todoList: [],
      tmpTodoList: [],
      isStared: true,
      activeIndex2: "1"
    }
  },
  mounted() {
    this.getTodo()
  },
  methods: {
    getTodo() {
      this.$http.get("http://localhost:3000/todos").then(res => {
        if (res.status == 200) {
          this.todoList = res.data
          this.tmpTodoList = res.data
        }
      })
    },
    postTodo() {
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
    isShow(item, id) {
      this.show = !this.show
    },
    handleSelect(key) {
      let result = []
      switch (key) {
        case "1":
          this.todoList = this.tmpTodoList
          break
        case "2":
          this.tmpTodoList.map(x => {
            if (!x.completed) {
              result.push(x)
            }
          })
          this.todoList = result
          break
        case "3":
          this.tmpTodoList.map(x => {
            if (x.completed) {
              result.push(x)
            }
          })
          this.todoList = result
          break
      }
    }
  },
  components: {
    draggable
  }
}
</script>

<style  lang="sass" scoped>
@import "./week1.sass"
</style>
