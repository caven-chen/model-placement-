<template>
  <div class="ly-content">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'LyContent',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.ly-content {
  position: relative;
  background: #fff;
  margin: 10px 0;
  height: calc(100% - 120px);
}
</style>
