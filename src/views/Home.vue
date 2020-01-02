<template>
  <div class="container">
    <ly-head></ly-head>
    <ly-content></ly-content>
    <ly-foot></ly-foot>
  </div>
</template>

<script>
import LyHead from '@/layout/LyHead'
import LyContent from '@/layout/LyContent'
import LyFoot from '@/layout/LyFoot'

export default {
  name: 'Home',
  components: {
    LyHead,
    LyContent,
    LyFoot
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
  overflow: hidden;
  background-color: #f0f2f5;
  padding: 0 5px;
}
</style>
