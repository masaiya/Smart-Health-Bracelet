<template>
  <div class="webNews">
    <div class="news-left">
      <img :src="require('../assets/img/news/'+img)" alt="">
    </div>
    <div class="news-right">
      <p class="title">行业资讯 | {{ title }}</p>
      <p class="time">{{ time }}</p>
      <p class="describe">{{ describe }}</p>
      <a :href=url>查看更多</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'webNews',
  data() {
    return {
      
    };
  },
  props: {
    img: {
      type: String,
      default: 'news1.jpeg'
    },
    title: {
      type: String,
      default: '这是一条新闻的title'
    },
    time: {
      type: String,
      default: '2020-12-11'
    },
    describe: {
      type: String,
      default: '这是一条新闻的描述'
    },
    url: {
      type: String,
      default: 'javascript:;'
    }
  },
  methods: {
  }
};
</script>
<style scoped lang="less">
.webNews {
  padding-top: 30px;
  display: flex;
  margin: 0 10%;
  p {
    margin: 0;
    margin-bottom: 10px;
  }
  .news-left {
    flex-basis: 280px;
    img {
      margin-top: 5px;
      width: 250px;
    }
  }
  .news-right {
    flex: 1;
    .title {
      font-size: 26px;
    }
    .time {
      color: rgb(190, 0, 0);
    }
    a {
      color: #fff;
      padding: 8px 15px;
      background: rgb(190, 0, 0);
      font-size: 14px;
      border-radius: 6px;
    }
  }
}
</style>
