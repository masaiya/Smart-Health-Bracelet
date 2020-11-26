<template>
  <div class="home">
    <webHeader></webHeader>
    <webFooter></webFooter>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    webHeader: () => import(/* webpackChunkName: "webHeader" */ '../components/webHeader.vue'),
    webFooter: () => import(/* webpackChunkName: "webFooter" */ '../components/webFooter.vue')
  }
}
</script>
