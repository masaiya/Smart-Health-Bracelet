<template>
  <div class="webHeader">
    <div class="flag">
      <span class="flag-left">欢迎进入智能健康手环官网！</span>
      <span class="flag-right"><i class="iconfont icon-dianhua"> </i> 400-123-000 <i class="iconfont icon-22"> </i> echo_msy@163.com </span>
    </div>
    <div class="nav">
      <div class="nav-logo">
        <img src="../assets/logo.jpg" alt="" class="logo">
        <span>智能健康手环</span>
      </div>
      <router-link to="/" class="nav-list"><a>首页</a></router-link>
      <router-link to="/product" class="nav-list"><a>产品中心</a></router-link>
      <router-link to="/news" class="nav-list"><a>新闻资讯</a></router-link>
      <router-link to="/about" class="nav-list"><a>关于我们</a></router-link>
      <router-link to="/iot" class="nav-list"><a>登录</a></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'webHeader',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
  },
};
</script>
<style scoped lang="less">
@import '../assets/iconfont/iconfont.css';
.webHeader {
  height: 42px;
  position: fixed;
  width: 100%;
  z-index: 10;
  .flag {
    padding: 0 10%;
    font-size: 12px;
    background-color: rgb(190, 0, 0);
    color: #fff;
    line-height: 30px;
    display: flex;
    justify-content: center;
    .iconfont {
      width: 12px;
    }
    .flag-left , .flag-right {
      flex: 1;
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    padding: 10px 10%;
    height: 86px;
    background-color: #fff;
    border-bottom: 1px solid #eaecef;
    .nav-logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 600;
      .logo {
        width: 65px;
        height: 65px;
        margin: 0 auto;
      }
    }
    .nav-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      a:link {
        color: #090329;
      }
      a:active {
        border-bottom: 3px solid rgb(190, 0, 0);
      }
      a:hover {
        border-bottom: 3px solid rgb(190, 0, 0);
      }
    }
  }
}
</style>
