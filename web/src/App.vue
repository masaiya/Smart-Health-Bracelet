<template>
  <div id="app">
    <webHeader></webHeader>
    <router-view/>
    <webFooter></webFooter>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    webHeader: () => import(/* webpackChunkName: "webHeader" */ './components/webHeader.vue'),
    webFooter: () => import(/* webpackChunkName: "webFooter" */ './components/webFooter.vue')
  }
}
</script>
<style lang="less">
</style>
