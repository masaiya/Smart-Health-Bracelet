<template>
  <div class="newHealth" v-if="new_health">
    <div class="protectid">
      <p>被保护人id：{{ new_health.userid }}</p>
      <p>时间：{{ time }}</p>
    </div>
    <hr>
    <div class="health">
      <div class="list">
        <p><span class="name">心率</span></p>
        <p>当前心率为：<span>{{ healthData.heartrate }} BPM</span></p>
        <p>您当前心率属于 <span class="conclusion">{{ heartAdvice }}</span></p>
      </div>
      <div class="list">
        <p><span class="name">体温</span></p>
        <p>当前体温为：<span>{{ healthData.temperature }} ℃</span></p>
        <p>您当前体温属于 <span class="conclusion">{{ temperature }}</span></p>
      </div>
      <div class="list">
        <p><span class="name">步数</span></p>
        <p>当前步数为：<span>{{ healthData.steps }} 步</span></p>
        <p class="conclusion">{{ stepsAdvice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newHealth',
  data() {
    return {
      new_health: {
        userid: 18,
        date: 2012-12-12
      },
      healthData: []
    }
  },
  components: {
  },
  computed:{
    time() {
      var timestamp4  = new Date(this.healthData.date);
      return timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8);
    },
    steps() {
      return parseFloat(this.healthData.steps) / 50;
    },
    temperature() {
      if(parseFloat(this.healthData.temperature) < 36) {
        return "低温";
      } else if(parseFloat(this.healthData.temperature) > 37) {
        return "高温";
      } else {
        return "正常体温";
      }
    },
    stepsAdvice() {
      if(this.healthData.steps < 1000) {
        return "运动量过低，多多运动有益于身体哦~";
      } else if(this.healthData.steps < 5000) {
        return "运动量还未达标，再加油哦~"
      } else {
        return "恭喜，已经完成今日运动~";
      }
    },
    heartAdvice() {
      if(this.healthData.heartrate < 60) {
        return "过低";
      } else if(this.healthData.heartrate > 100) {
        return "过高";
      } else {
        return "正常"; 
      }
    }
  },
  watch:{
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/iot/sel_new_health',
      params: {
        userid: sessionStorage.user,
      },
      datatype: 'json',
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.new_health = res.data;
      this.healthData = res.data;
      console.log(this.healthData);
    }).catch(err => {
      this.$message('服务器繁忙，请稍后再试！');
      console.log(err);
    }) 
  }
};
</script>
<style scoped lang="less">
.newHealth {
  height: 1000px;
  .protectid {
    line-height: 30px;
    display: flex;
    justify-content: center;
    p {
      flex: 1;
    }
  }
  .health {
    margin-left: 20px;
    .list {
      margin: 30px 0px;
      .name {
        font-size: 20px;
        color: #fff;
        background: rgb(190, 0, 0);
        padding: 5px 20px;
        border-radius: 10px;
      }
    }
  }
  .conclusion {
    color: rgb(190, 0, 0);
  }
}
</style>
