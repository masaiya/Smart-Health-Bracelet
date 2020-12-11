<template>
  <div class="webFooter">
    <div class="main">
      <div class="main-left">
        <a href="/" class="main-name">智能健康手环</a>
        <a href="javascript:;">咨询热线 > </a>
        <span>地址：陕西省西安市长安区</span>
        <ul class="media-list">
          <li class="item-list">
            <img src="../assets/img/wx.png" alt="健康智能手环微信">
            <div class="footer-icon">
              <img src="../assets/img/weixin.png">
            </div>
          </li>
          <li class="item-list">
            <img src="../assets/img/douyin.png" alt="健康智能手环抖音">
            <div class="footer-icon">
              <img src="../assets/img/qq.png">
            </div>
          </li>
          <li class="item-list">
            <img src="../assets/img/zhihu.png" alt="健康智能手环知乎">
            <div class="footer-icon">
              <img src="../assets/img/weixin.png">
            </div>
          </li>
          <li class="item-list">
            <img src="../assets/img/weibo.png" alt="健康智能手环微博">
            <div class="footer-icon">
              <img src="../assets/img/qq.png">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <span>Copyright 2020-2021 智能健康手环 版权所有</span>
      <span> 京ICP备xxxxxxxx号-1 京B1-20201126</span>
      <span><a href="">用户授权协议</a></span>
      <span>网站支持IPv6</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'webFooter',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped lang="less">
.webFooter {
  color: #ffffffa6;
  background: #00041a;
  flex-direction: column;
  padding: 0 10%;
  .main {
    padding-top: 52px;
    border-bottom: 1px solid #918d8da6;
    .main-left {
      width: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      a {
        margin-bottom: 12px;
      }
      .main-name {
        font-weight: 600;
        color: #ffffffdc;
      }
      .media-list {
        display: flex;
        justify-content: space-around;
        padding: 0;
        .item-list {
          flex: 1;
          &:hover {
            .footer-icon {
              opacity: 100%;
            }
          }
          img {
            width: 50px;
            height: 50px;
          }
          .footer-icon {
            position: relative;
            padding: 10px 0 0;
            transition: .3s ease;
            opacity: 0;
            img {
              position: absolute;
              top: -155px;
              left: 0;
              width: 100px;
              height: 100px;
            }
          }
        }
      }
    }
  }
  .footer {
    color: #ffffffa6;
    height: 75px;
    padding: 24px 0 32px 0;
    box-sizing: border-box;
    span {
      margin: 0 5px;
    }
  }
}
</style>
