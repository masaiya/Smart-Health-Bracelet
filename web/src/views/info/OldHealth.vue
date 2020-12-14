<template>
  <div class="oldHealth" v-if="old_health">
    <div class="health">
      <div class="list">
        <p><span class="name">心率</span></p>
        <div class="main">
          <div id="myPressure" class="charts" :style="{width: '500px', height: '400px'}"></div>
          <div class="scribe">
            <p class="text">平均心率值：<span class="data">{{ pressureAverage }} BPM</span></p>
            <p class="text">最高心率值：<span class="data">{{ pressureMax }} BPM</span></p>
            <p class="text">最低心率值：<span class="data">{{ pressureMin }} BPM</span></p>
            <p class="text">上一周心率数据表明，您的心率值 <span class="data">{{ pressureStatus }}</span></p>
          </div>
        </div>
      </div>
      <div class="list">
        <p><span class="name">体温</span></p>
        <div class="main">
          <div id="myTemperature" class="charts" :style="{width: '500px', height: '400px'}"></div>
          <div class="scribe">
            <p class="text">平均体温值：<span class="data">{{ temperatureAverage }} ℃</span></p>
            <p class="text">最高体温值：<span class="data">{{ temperatureMax }} ℃</span></p>
            <p class="text">最低体温值：<span class="data">{{ temperatureMin }} ℃</span></p>
          </div>
        </div>
      </div>
      <div class="list">
        <p><span class="name">步数</span></p>
        <div class="main">
          <div id="mySteps" :style="{width: '500px', height: '400px'}"></div>
          <div class="scribe">
            <p class="text">平均步数：<span class="data">{{ stepsAverage }} 步</span></p>
            <p class="text">最高步数：<span class="data">{{ stepsMax }} 步</span></p>
            <p class="text">最低步数：<span class="data">{{ stepsMin }} 步</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'oldHealth',
  data() {
    return {
      old_health: null,
      healthDate: []
    }
  },
  components: {
  },
  computed:{
    pressureAverage() {
      var res = 0;
      this.healthDate.map(function(i) {
        res += parseFloat(i.heartrate);
      })
      return (res / this.healthDate.length).toFixed(2);
    },
    temperatureAverage() {
      var res = 0;
      this.healthDate.map(function(i) {
        res += parseFloat(i.temperature);
      })
      return (res / this.healthDate.length).toFixed(2);
    },
    stepsAverage() {
      var res = 0;
      this.healthDate.map(function(i) {
        res += parseFloat(i.steps);
      })
      return (res / this.healthDate.length).toFixed(0);
    },
    pressureMax() {
      var res = [];
      this.healthDate.map(function(i) {
        res.push(parseFloat(i.heartrate));
      })  
      return Math.max(...res);
    },
    stepsMax() {
      var res = [];
      this.healthDate.map(function(i) {
        res.push(parseFloat(i.steps));
      })  
      return Math.max(...res);
    },
    temperatureMax() {
      var res = [];
      this.healthDate.map(function(i) {
        res.push(parseFloat(i.temperature));
      })  
      return Math.max(...res);
    },
    pressureMin() {
      var res = [];
      this.healthDate.map(function(i) {
        res.push(parseFloat(i.heartrate));
      })  
      return Math.min(...res);  
    },
    stepsMin() {
      var res = [];
      this.healthDate.map(function(i) {
        res.push(parseFloat(i.steps));
      })  
      return Math.min(...res);
    },
    temperatureMin() {
      var res = [];
      this.healthDate.map(function(i) {
        res.push(parseFloat(i.temperature));
      })  
      return Math.min(...res);
    },
    pressureStatus() {
      if(this.pressureMin <= 90) {
        return "偏低";
      } else if(this.pressureMax >= 140) {
        return "偏高";
      } else {
        return "正常";
      }
    }
  },
  watch:{
  },
  created() {
    this.old_health = sessionStorage.user,
    this.$axios({
      method: 'get',
      url: '/iot/sel_all_health',
      params: {
        userid: sessionStorage.user,
      },
      datatype: 'json',
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.healthDate = res.data;
      console.log(this.healthDate);
      this.pressCharts();
      this.temperatureCharts();
      this.stepsCharts();
    }).catch(err => {
      this.$message('服务器繁忙，请稍后再试！');
      console.log(err);
    })
  },
  methods: {
    pressCharts() {
      let myChart = echarts.init(document.getElementById('myPressure'));
      myChart.setOption({
        title: { text: '上一周心率指标' },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['心率指标']
        },
        xAxis: {
          name: '日期',
          type: 'category',
          data: this.healthDate.map(function(i) {
            return i.date
          })
        },
        yAxis: {
          name: '心率值(BPM)',
          type: 'value'
        },
        series: [{
          name: '心率值',
          data: this.healthDate.map(function(i) {
            return i.heartrate
          }),
          type: 'line',
          smooth: true
        }]
      });
    },
    temperatureCharts() {
      let myChart = echarts.init(document.getElementById('myTemperature'));
      myChart.setOption({
        title: { text: '上一周体温指标' },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['体温指标']
        },
        xAxis: {
          name: '日期',
          type: 'category',
          data: this.healthDate.map(function(i) {
            return i.date
          })
        },
        yAxis: {
          name: '体温(℃)',
          type: 'value'
        },
        series: [{
          name: '体温',
          data: this.healthDate.map(function(i) {
            return i.temperature
          }),
          type: 'line',
          smooth: true
        }]
      });  
    },
    stepsCharts() {
      let myChart = echarts.init(document.getElementById('mySteps'));
      myChart.setOption({
        title: { text: '上一周步数指标' },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['步数指标']
        },
        xAxis: {
          name: '日期',
          type: 'category',
          data: this.healthDate.map(function(i) {
            return i.date  
          })
        },
        yAxis: {
          name: '步数(步)',
          type: 'value'
        },
        series: [{
          name: '步数',
          data: this.healthDate.map(function(i) {
            return i.steps
          }),
          type: 'line',
          smooth: true
        }]
      });  
    }
  }
};
</script>
<style scoped lang="less">
.oldHealth {
  .health {
    .list {
      margin: 30px 0px;
      .name {
        font-size: 20px;
        color: #fff;
        background: rgb(190, 0, 0);
        padding: 5px 20px;
        border-radius: 10px;
      }
      .main {
        display: flex;
        justify-content: center;
        .charts {
          flex-basis: 500px;
        }
        .scribe {
          margin-top: 20px;
          flex: 1;
          .text {
            margin: 15px 20px;
            padding: 5px 10px;
            .data {
              color: rgb(190, 0, 0)
            }
          }
        }
      }
    }
  }
}
</style>
