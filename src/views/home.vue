<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    const routers = ['action','setup','reactive','ref','computed','watch','provider','lifehooks'].map( item => {
      return {
        path: `/${item}`,
        name: item
      }
    })
    return {
      message:'这是一个 vue3 的测试小 demo',
      routers
    }
  }
}
</script>
<style lang="scss">
html,
body {
  margin: 0;
}
#app {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
