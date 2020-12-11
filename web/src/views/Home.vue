<template>
  <div class="home">
    <el-carousel indicator-position="outside" height="400px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="require('../assets/img/banner/'+item)" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="project-design">
      <div class="intr-one">项目设计/<span class="intr-two">硬件</span></div>
      <el-tabs tab-position="left" color="rgb(190,0,0)">
        <el-tab-pane label="体温" class="panel">
          <p>Texas Instrument 的 LMT70 是带有输出使能引脚的超小型、高精度、低功耗 CMOS 模拟温度传感器。 LMT70 适合几乎任何类型的要求性价比、高精度和低功耗的温度检测应用，如物联网 (IoT) 传感器节点、医疗温度计、高精度仪器仪表和电池供电型设备。 LMT70 也是 RTD 和精密 NTC/PTC 热敏电阻的理想替代。</p>
          <img src="../assets/img/hardware/pic1.png" alt="">
        </el-tab-pane>
        <el-tab-pane label="气压" class="panel">
          <p>BMP180不仅可以实时的测量大气压力，还能测量实时温度。同时它还具有IIC总线的接口，便于单片机进行访问，所需GPIO只有VCC、GND、SDA和SCL四个。BMP180的工作电压为1.8v~3.6v，典型工作电压为2.5v。</p>
          <img src="../assets/img/hardware/pic2.png" alt="">
        </el-tab-pane>
        <el-tab-pane label="心率" class="panel">
          <p>MAX30100是一款集成有脉搏血氧仪和心率监测传感器的模块。该模块集成有两个LED、一个光电探测器，经过优化的光学器件和低噪声模拟信号处理器，可检测脉搏血氧及心率信号。MAX30100采用1.8V和3.3V的电源电压。可通过软件来关断电源，待机模式下的电流消耗量可忽略不计，因而可以始终保持电源连接，典型应用有健身辅助设备、医疗监控设备和可穿戴设备。使用IIC协议和主控芯片进行通信。</p>
          <img src="../assets/img/hardware/pic3.png" alt="">
        </el-tab-pane>
        <el-tab-pane label="步数" class="panel">
          <p>MPU-6000(6050)为全球首例整合性6轴运动处理组件，相较于多组件方案，免除了组合陀螺仪与加速器时间轴之差的问题，减少了大量的封装空间。当连接到三轴磁强计时，MPU-60X0提供完整的9轴运动融合输出到其主I2C或SPI端口(SPI仅在MPU-6000上可用)。</p>
          <img src="../assets/img/hardware/pic4.png" alt="">
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="data-merge">
      <p class="intr-one">数据采集/<span class="intr-two">核心功能简介</span></p>
      <div class="merge">
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
          <p>智能健康手环系统使用DSP+ARM双芯片结构，DSP主要负责接收北斗模块的定位信息和算法处理功能，ARM芯片负责与DSP芯片通信、控制TFT液晶屏的显示功能。硬件设计主要包括电源部分、ARM部分、DSP部分、网络部分、TFT液晶屏部分以及北斗模块多部分的设计。</p>
          <p>系统硬件结构框图如下：</p>
          <img src="../assets/img/system-hardware.png" alt="" class="pic">
        </div>
      </div>
    </div>
    <div class="scene">
      <p class="intr-one">应用场景</p>
      <p>智能健康手环主要应用于人员健康与位置综合管理，适用于智慧校园、智慧医院、智慧养老、智慧工厂、智慧体训等各大场景。</p>
      <img src="../assets/img/scene.jpg" alt="" class="pic"> 
    </div>
    <div class="project-software">
      <p class="intr-one">软件定制</p>
      <img src="../assets/img/function.png" alt="" class="pic">
      <p></p>
    </div>
    <div class="solution">
      <p class="intr-one">解决方案/<span class="intr-two">云平台+应用+硬件</span></p>
      <div class="main">
        <div class="list">
          <img src="../assets/img/index-plan-img1.png" alt="">
          <h4>智慧康养解决方案</h4>
          <p>融合养老产业运营理念，专为中小型养老服务机构量身定做。</p>
        </div>
        <div class="list">
          <img src="../assets/img/index-plan-img2.png" alt="">
          <h4>智慧看护解决方案</h4>
          <p>帮助机构规避夜间管理风险实现一个人一台电脑管理全院老人。</p>
        </div>
        <div class="list">
          <img src="../assets/img/index-plan-img3.png" alt="">
          <h4>智慧医养解决方案</h4>
          <p>云平台+应用+硬件，实现与子女、服务中心、医护人员的信息交互。</p>
        </div>
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
.project-design {
  color: #333;
  background-color: #f5f5f7;
  margin: 10px 10%;
  padding: 15px 3%;
  margin-bottom: 30px;
  .intr-one {
    font-size: 30px;
    padding-bottom: 20px;
    .intr-two {
      font-size: 18px;
    }
  }
  h3 {
    margin: 0;
    font-weight: 300;
    font-size: 30px;
  }
  p {
    font-size: 16px;
    color: #333333;
    line-height: 24px;
    margin-bottom: 24px;
    font-weight: 300;
  }
  .about_pic {
    width: 100%;
    margin-top: 15px;
  }
}
.data-merge {
  margin: 0 10%;
  padding: 10px 3%;
  .intr-one {
    font-size: 30px;
    .intr-two {
      font-size: 18px;
    }
  } 
  .merge {
    display: flex;
  }
  .merge-left {
    margin-top: 40px;
    height: 520px;
    width: 480px;
    flex-basis: 480px;
    .line-one {
      width: 430px;
      height: 430px;
      border: 1px solid rgb(190, 0, 0);
      border-radius: 200px;
      box-sizing: border-box;
      transition: all 2s;
      display: inline-block;
      position: absolute;
      animation: turn 15s linear infinite;
    }
    .line-two {
      width: 430px;
      height: 430px;
      border: 1px solid rgb(190, 0, 0);
      border-radius: 200px;
      display: inline-block;
      position: absolute;
      animation: turn2 15s linear infinite;
    }
    .content {
      position: absolute;
      color: #262626;
      width: 430px;
      height: 430px;
      h3 {
        margin-top: 40px;
        color: rgb(190, 0, 0);
      }
      p {
        padding: 0 60px;
      }
    }
  }
  .merge-right {
    flex: 1;
    p {
      font-size: 16px;
      color: #333333;
      line-height: 24px;
      margin-bottom: 24px;
      font-weight: 300;
    }
    .pic {
      margin-left: 15px;
    }
  }
}
.project-software {
  margin: 0 10%;
  padding: 10px 3%;
  .intr-one {
    font-size: 30px;
  } 
  .pic {
    width: 100%;
  }
}
.scene {
  margin: 0 10%;
  padding: 10px 3%;
  margin-bottom: 30px;
  color: #333;
  background-color: #f5f5f7;
  .intr-one {
    font-size: 30px;
    margin: 0;
  }
  .pic {
    width: 100%;
  }
}
.solution {
  margin: 0 10%;
  padding: 10px 3%;
  margin-bottom: 30px;
  color: #333;
  background-color: #f5f5f7;
  .intr-one {
    font-size: 30px;
    margin: 0;
    .intr-two {
      font-size: 18px;
    }
  }
  .main {
    display: flex;
    .list {
      flex: 1;
      margin: 0 10px;
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
