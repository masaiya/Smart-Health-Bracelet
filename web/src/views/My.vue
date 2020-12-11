<template>
  <div class="my">
    <login v-if="!user"></login>
    <div v-else class="myContainer">
      <div class="aside">
        <router-link to="/my" class="nav_list">最新健康信息</router-link>
        <router-link to="/my/old_health" class="nav_list">历史健康信息</router-link>
        <router-link to="/my/new_danger" class="nav_list">最新危险信息</router-link>
        <router-link to="/my/old_danger" class="nav_list">历史危险信息</router-link>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue';
export default {
  name: 'my',
  data() {
    return {
      user: sessionStorage.user
    };
  },
  components: {
    Login
  },
  computed:{
  },
  watch:{
  },
  methods: {
  },
  mounted() {
    
  }
};
</script>
<style scoped lang="less">
.my {
  padding-top: 55px;
  .myContainer {
    display: flex;
    .aside {
      margin-top: 20px;
      margin-right: 20px;
      width: 50px;
      height: 240px;
      flex-basis: 110px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .nav_list {
        flex: 1;
        line-height: 60px;
        margin: 0 auto;
        border-bottom: 1px solid #eaecef;
        color: rgb(190, 0, 0);
      }
    }
    .main {
      flex: 1;
    }
  }
}
</style>
