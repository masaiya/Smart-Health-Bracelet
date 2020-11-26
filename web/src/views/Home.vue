<template>
  <div class="home">
    <el-carousel indicator-position="outside" height="560px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="require('../assets/img/banner/'+item)" alt="">
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      imgList: ['index_banner1.png','index_banner2.svg','index_banner1.png','index_banner2.svg']
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 1000px;
  padding-top: 128px;
}
.el-carousel__item img {
  width: 1920px;
  height: 560px;
}
</style>
