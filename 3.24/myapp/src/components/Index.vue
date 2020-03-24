<template>
  <div class="">
      <p>index......</p>
      <p>vuex中数据是：{{ this.$store.state }}</p>
      <p>{{ this.$store.state.hello }}</p>

      <button @click="changeAdd()">点击修改count + 10</button>

      <button @click="changeHello()"> 点击修改hello的值</button>

        <button @click="changeUname()">   点击修改uname</button>

        <br>

        <p>这是计算属性：{{ this.$store.getters.getStateUname }}</p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
    }
  },
  methods: {
      changeAdd(){
          console.log(this.$store);
        //   调用vuex中方法 使用 commit
        this.$store.commit('changecount')
      },
      changeHello(){
        //   中当前组件中的方法 调用vuex中的方法
        this.$store.commit('changehello');
      },
      changeUname(){
        //   直接出发changeuname
        
        // commit 触发  mutations 当中方法
        //   this.$store.commit('changeuname')

        // dispatch 触发  actions 中方法 （vuex底层中 使用dispatch 方式触发方法，会对数据进行=监听）
        this.$store.dispatch('actionsChangeUname')
      }
  },
  components: {

  },
  mounted() {
      
  },
}
</script>

<style scoped>

</style>
