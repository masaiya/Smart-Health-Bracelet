<template>
  <div class="about">
    <img src="../assets/img/about-banner.png" alt="" class="about-banner">
    <div class="about-orign">
      <h3>项目起源</h3>
      <p>随着人们生活水平的提高，人们对于健康的重视程度逐日提高。</p>

      <p>2018年9月，《关于进一步推进以电子病历为核心的的医疗机构信息化建设工作的通知》明确三级医院电子病历建设问题，并就互联互通标准化成熟度测评设立指标，要求“到2020年，三级医院要求实现院内各诊疗环节信息互联互通标准化成熟度测评4级水平”。随着“健康中国2030”规划的不断推进，使得健康医疗大数据作为国家基础性战略资源的重要地位被不断凸现出来。</p>

      <p>在实际生活中，我们大部分人由于工作的繁忙，而疏忽了对于家里老人身体的监护。所以需要设计出一款使用方便，检测能力可靠的健康监测设备，来让人们对于自己及家人身体健康情况能够及时了解的需求。</p>
      
      <p>我们希望设计一款可以监测老人的心率、体温和是否摔倒等功能的智能监测手环，包括根据采集到的心率和体温数据来分析老人的身体素质，根据采集到的运动姿态和气压数据来分析老人是否摔倒等功能。</p>
    </div>
    <div class="about-design">
      <h3>项目设计</h3>
      <el-tabs tab-position="left" style="height: 200px;" color="rgb(190,0,0)">
        <el-tab-pane label="体温">BMP180不仅可以实时的测量大气压力，还能测量实时温度。</el-tab-pane>
        <el-tab-pane label="气压">BMP180不仅可以实时的测量大气压力，还能测量实时温度。</el-tab-pane>
        <el-tab-pane label="心率">MAX30100是一款集成有脉搏血氧仪和心率监测传感器的模块,经过优化的光学器件和低噪声模拟信号处理器，可检测脉搏血氧及心率信号。</el-tab-pane>
        <el-tab-pane label="步数">MPU-60X0对陀螺仪和加速计分别用了三个16位的ADC，将其测量的模拟量转化为可输出的数字量。</el-tab-pane>
      </el-tabs>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'about',
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
.about {
  padding-top: 135px;
  .about-banner {
    width: 100%;
  }
  .about-orign, .about-design {
    color: #333;
    background-color: #f5f5f7;
    padding: 30px 10%;
    margin-bottom: 30px;
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
  }
}
</style>
