<template>
  <div class="">
      <h1>lists.....</h1>
      <p>{{ this.$store.state.hello }}</p>

      <p>{{ mycount }}</p>
      <p>{{ myhello }}</p>

      <button @click="mychangecount()">点击修改数据 </button>
  </div>
</template>

<script>

// 快速导入vuex中 数据
import {mapState, mapMutations} from 'vuex'

export default {
  name: "",
  data() {
    return {

    }
  },
  methods: {
      ...mapMutations({
          mychangecount:'changecount'
      })
  },
  computed: {
      ...mapState({
          mycount:state=>state.count,
          myhello:state=>state.hello
      })
  },
  components: {

  }
}
</script>

<style scoped>

</style>
