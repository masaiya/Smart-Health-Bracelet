<template>
  <div class="iot">
    <form action="/iot/sel_all_health" method="GET">
      <input type="number" name="userid">
      <button type="submit"></button>
    </form>
    <button @click="click()">按钮</button>
  </div>
</template>

<script>
// import Reg from './Reg.vue';
export default {
  name: 'iot',
  data() {
    return {
    };
  },
  components: {
    // Reg
  },
  computed:{
  },
  watch:{
  },
  methods: {
    click() {
      this.$axios({
        method: 'post',
        url: '/iot/reg',
        data: {
          username: "于皮皮",
          protectid: 1,
          phone: "15399274446",
          sex: '男',
          age: 18,
          address: "陕西省西安市",
          works: '程序员',
          passwords: '123456'
        },
        datatype: 'json',
        header: {
          'Content-Type': 'application/json'
        }
      })
    }
  },
};
</script>
<style scoped lang="less">
.iot {
  height: 1000px;
  padding-top: 135px;
}
</style>
