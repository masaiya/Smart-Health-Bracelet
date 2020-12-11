<template>
  <div class="webProduct" @mouseenter="show()" @mouseleave="hidden()">
    <img :src="require('../assets/img/products/'+img)" alt="">
    <div :class={wrapper:isWrapper}>
      <span class="text" v-if="isWrapper">{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'webProduct',
  data() {
    return {
      isWrapper: false
    };
  },
  props: {
    img: {
      type: String,
      default: 'watch1.png'
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    show() {
      this.isWrapper = true;
    },
    hidden() {
      this.isWrapper = false;
    }
  }
};
</script>
<style scoped lang="less">
.webProduct {
  height: 310px;
  background-color: #fff;
  box-shadow: #a9a9ab 1px 4px 14px -2px;
  align-items: center;
  margin: 1%;
  position: relative;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 185px;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.26);
    .text {
      color: #eee;
      font-size: 28px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
