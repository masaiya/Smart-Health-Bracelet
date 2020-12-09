<template>
  <div class="home">
    <el-carousel indicator-position="outside" height="400px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="require('../assets/img/banner/'+item)" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="data-merge">
      <span class="intr-one">数据采集/<span class="intr-two">核心功能简介</span></span>
      <div class="merge-left">
        <div class="line-one"></div>
        <div class="line-two"></div>
        <div class="content">
          <h3>北斗数据采集</h3>
          <p>北斗定位系统是我国自主开发的全球定位系统，目前北斗定位系统在轨运行卫星已达16颗，截止2012年12月27日，我国的北斗定位系统空间信号接口控制文件正式版已公布，北斗定位导航业务正式对亚太地区提供无源定位、导航及授时服务。</p>
          <p>该系统可为汽车、客机和轮船等常用交通工具提供定位服务，为精确制导武器提供定位导航服务。</p>
          <p>其对我国军事国防事业摆脱对国外GPS系统依赖有着重要意义，另外对农牧业、渔业生产也有着重要意义。</p>
        </div>
      </div>
      <div class="merge-right">
        智能健康手环系统使用DSP+ARM双芯片结构，DSP主要负责接收北斗模块的定位信息和算法处理功能，ARM芯片负责与DSP芯片通信、控制TFT液晶屏的显示功能。硬件设计主要包括电源部分、ARM部分、DSP部分、网络部分、TFT液晶屏部分以及北斗模块多部分的设计。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      imgList: ['index_banner1.png', 'index_banner2.svg', 'index_banner1.png', 'index_banner2.svg']
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  padding-top: 55px;
}
.el-carousel__item{
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.data-merge {
  padding: 0 10%;
  .intr-one {
    font-size: 30px;
    .intr-two {
      font-size: 18px;
    }
  }
  .merge-left {
    margin-top: 30px;
    height: 520px;
    width: 480px;
    flex-basis: 480px;
    .line-one {
      width: 480px;
      height: 480px;
      border: 1px solid rgb(190, 0, 0);
      border-radius: 200px;
      box-sizing: border-box;
      transition: all 2s;
      display: inline-block;
      position: absolute;
      animation: turn 15s linear infinite;
    }
    .line-two {
      width: 480px;
      height: 480px;
      border: 1px solid rgb(190, 0, 0);
      border-radius: 200px;
      display: inline-block;
      position: absolute;
      animation: turn2 15s linear infinite;
    }
    .content {
      position: absolute;
      color: #262626;
      width: 480px;
      height: 480px;
      h3 {
        margin-top: 40px;
        color: rgb(190, 0, 0);
      }
      p {
        padding: 0 60px;
      }
    }
  }
}

@keyframes turn {
0%{-webkit-transform:rotate(0deg);}
25%{-webkit-transform:rotate(90deg);}
50%{-webkit-transform:rotate(180deg);}
75%{-webkit-transform:rotate(270deg);}
100%{-webkit-transform:rotate(360deg);}
}
@keyframes turn2 {
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(-90deg);}
  50%{-webkit-transform:rotate(-180deg);}
  75%{-webkit-transform:rotate(-270deg);}
  100%{-webkit-transform:rotate(-360deg);}
}
</style>
