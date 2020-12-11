<template>
  <div class="news">
    <h2>新闻咨询/行业资讯</h2>
    <web-news v-for="(item, index) in news" :key="index" :img=item.img
      :title=item.title :describe=item.describe :time=item.time :url=item.url>
    </web-news>
  </div>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
      news: [
        {
          img: 'news1.jpeg',
          title: '#虚拟养老院# 央视报道+政府牵头新型养老形式 助长者安度晚年',
          time: '2020-05-04',
          url: 'https://new.qq.com/rain/a/20201202a01qsn00',
          describe: '当老年人有服务需要时，拨一个电话给信息服务平台，平台就会按照老年人的要求，派服务员工上门为老年人提供服务，同时对服务质量进行监督。“虚拟养老院”实现了居家专业化养老，被称之为“没有围墙的养老院”。'
        },{
          img: 'news2.jpeg',
          title: '医疗级智能健康手环—有所不为，才能大有作为！',
          time: '2020-05-10',
          url: 'https://www.douban.com/group/topic/84691468/',
          describe: '初见Hesvitband S3 智能手环，便并她与众不同的惊艳外表所震撼。作为一款智能产品，居然没有同其他智能手表一样选择彩屏或OLED屏幕，而只选取了风格复古的LCD液晶屏幕，这让我想起小时候用过的电子表。'
        },{
          img: 'news3.png',
          title: '银发社会保障在运用智能技术方面遇到困难的老年人需求 ',
          time: '2020-06-10',
          url: 'https://www.sohu.com/a/434694873_462487',
          describe: '通知要求：在各类日常生活场景中，必须保留老年人熟悉的传统服务方式，保障在运用智能技术方面遇到困难的老年人的基本需求。紧贴老年人需求特点，加强创新，提供更多智能化适老产品和服务，让老年人能用、会用、敢用、想用。'
        },{
          img: 'news4.png',
          title: '最新！九部门联合印发《关于加快实施老年人居家适老化改造工程的指导意见》',
          time: '2020-06-10',
          url: 'https://www.sohu.com/a/434694873_462487',
          describe: '国家九部门《居家适老化改造意见》提出 从长者利益出发是福音呀。居家养老，是极大多数中国老人的现实选择，这种养老方式不去养老院，但也能让大家体体面面过好晚年。'
        },
        {
          img: 'news5.jpg',
          title: '最新！九部门联合印发《关于加快实施老年人居家适老化改造工程的指导意见》',
          time: '2020-06-10',
          url: 'http://shebao.southmoney.com/dongtai/202009/2475.html',
          describe: '近日，民政部发布新修订的《养老机构管理办法》(以下简称《办法》)，其中新增了很多对中国老人养老有利的政策，并且将于今年11月1日也就是明天正式实施。这个《办法》一经发布，就引爆了养老行业内外，今天给大家简单的解读一下。为居家养老的老人，提供上门做饭、洗澡、打扫等服务。'
        }
      ]
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
  components: {
    webNews: () => import(/* webpackChunkName: "webNews" */'../components/webNews')
  }
};
</script>

<style scoped lang="less">
.news {
  padding-top: 55px;
  padding-bottom: 50px;
  h2 {
    padding-top: 30px;
    margin: 0 10%;
    text-align: left;
  }
}
</style>
