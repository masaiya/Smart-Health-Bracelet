<template>
  <div class="newDanger">
    <h2 class="text">跌倒预警</h2>
    <div class="protect">
      <p>您所保护的用户姓名 <span>{{ dangerData.username }}</span>, 于 <span>{{ dangerData.time }}</span> 摔倒了。</p>
      <p>请您速度前去查看！！！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newDanger',
  data() {
    return {
      new_danger: null,
      dangerData: []
    }
  },
  components: {
  },
  computed: {
  },
  watch: {
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/iot/sel_new_denger',
      params: {
        userid: sessionStorage.user,
      },
      datatype: 'json',
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res);
      this.dangerData = res.data;
      console.log(this.dangerData);
    }).catch(err => {
      this.$message('服务器繁忙，请稍后再试！');
      console.log(err);
    }) 
  }
};
</script>
<style scoped lang="less">
.newDanger {
  height: 1000px;
  .text {
    text-align: left;
    color: rgb(190,0,0);
    font-size: 25px;
  }
  span {
    color: rgb(190, 0, 0);
    font-weight: 500;
  }
}
</style>
