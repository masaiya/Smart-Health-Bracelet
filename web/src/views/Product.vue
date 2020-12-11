<template>
  <div class="product">
    <h2><span>智能穿戴系列</span></h2>
    <div class="wearable">
      <web-product class="list" img="watch1.png" text="S1 Plus"></web-product>
      <web-product class="list" img="watch2.jpg" text="S2 Pro"></web-product>
      <web-product class="list" img="watch3.png" text="S3"></web-product>
      <web-product class="list" img="watch4.png" text="S3 Plus"></web-product>
      <web-product class="list" img="watch5.png" text="S4 Mini"></web-product>
      <web-product class="list" img="watch3.png" text="S5 Young"></web-product>
      <web-product class="list" img="watch2.jpg" text="S5 Old"></web-product> 
      <web-product class="list" img="watch1.png" text="S6 无敌版"></web-product>
    </div>
    <h2><span>健康医疗系列</span></h2>
    <div class="health">
      <web-product class="list" img="other1.jpg" text="血压计"></web-product>
      <web-product class="list" img="other2.jpg" text="心率臂带"></web-product>
      <web-product class="list" img="other3.jpg" text="智能听诊器"></web-product>
      <web-product class="list" img="other4.jpg" text="睡眠监测带"></web-product>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data() {
    return {
    };
  },
  components: {
    webProduct: () => import(/* webpackChunkName: "webProduct" */ '../components/webProduct')
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped lang="less">
.product {
  padding-top: 55px;
  h2 {
    text-align: left;
    margin-left: 35px;
    span {
      border-bottom: 3px solid rgb(190, 0, 0);
    }
  }
  .wearable, .health{
    display: flex;
    flex-wrap: wrap;
    margin: 0 20px;
    margin-bottom: 15px;
    .list {
      flex: 20%;
    }
  }
}
</style>
