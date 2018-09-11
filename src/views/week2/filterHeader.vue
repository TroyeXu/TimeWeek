<template>
  <div class="app">
    <el-row type="flex" align="middle">
      <el-col :span="20">
        <el-input placeholder="请输入内容" v-model="content">
          <i slot="prefix" class="el-input__iconicon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col v-bind:span="2"> 
        <i class="el-icon-refresh"></i>
      </el-col>
      <el-col v-bind:span="2" >
        <i class="el-icon-delete"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "filterHeader",
  data() {
    return {
      content: ""
    }
  },
  methods: {},
  components: {},
  mounted() {},
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
