<template>
  <div class="app">
    <div class="card" v-for=" item in storeList" v-bind:key="item.id">
      <div class="card-title">
        <h2>{{item.Id}}</h2>
        <div class="myImg" alt="test"></div>
      </div>
      <div class="card-body">
        <p>{{item.price}}</p>
        <p>{{item.distance}}</p>
        <p>{{item.delivery}}</p>
        <p>{{item.type.toString()}}</p>
        <p>{{item.hours.toString()}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "listProduct",
  props: ["storeList"],
  data() {
    return {}
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


<style lang="sass" scoped>
p
  margin: 0
.app
  background: #EBF5EE
  display: flex
  flex-wrap: wrap  
  .card
    margin: 0.5rem
    padding: 0.1rem
    min-width: 40%
    flex: 1
    cursor: pointer
    animation: show 1s forwards
    transform-origin: center bottom
    border: solid 2px black
    background-color: lighten(#BFA89E,10%)
    box-shadow: 0 10px 6px -6px #777
    border-radius: 10px
    transition: all 1s
.card
  &:hover
    border-radius: 50% 10% 50% /22% 30% 20%
    border: solid 4px #283044
    box-shadow: 20px 40px 26px -10px #777
    background-color: lighten(#BFA89E,0%)
  h2
    margin: 0
    padding: 0.5rem 0
  .myImg
    width: 100%
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
