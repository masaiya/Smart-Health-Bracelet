<template>
  <div class="location">
    <h3>当前地理位置</h3>
    <baidu-map class="mapDemo"
      :scroll-wheel-zoom="true"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      ak="your ak">
    </baidu-map>
  </div>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: 'Location',
  data() {
    return {
      center: {lng: 0, lat: 0},
      zoom: 15,
      position: null
    }
  },
  mounted() {
  },
  methods: {
    handler () {
      this.center.lng = parseFloat(this.position[1])
      this.center.lat = parseFloat(this.position[0])  
      this.zoom = 15
    }
  },
  components: {
    BaiduMap
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/iot/sel_new_positions',
      params: {
        userid: sessionStorage.user,
      },
      datatype: 'json',
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res.data.positionss);
      this.position = res.data.positionss.split('&');
      console.log(this.position);
    })
  }
}
</script>

<style scoped lang="less">
.location {
  height: 1000px;
  .mapDemo {
    width: 80%;
    height: 400px;
    margin-left: 10%;
  }
}
</style>