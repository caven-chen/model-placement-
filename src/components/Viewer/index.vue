<template>
  <div class="viewer-container" :id="viewerId"></div>
</template>

<script>
export default {
  name: 'Viewer',
  props: {
    viewerId: {
      type: String,
      default: 'viewer-container'
    }
  },
  data() {
    return {}
  },
  methods: {
    initViewer() {
      let viewer = new DE.Viewer('viewer-container', {
        skyBox: false,
        orderIndependentTranslucency: false,
        contextOptions: {
          webgl: {
            alpha: true
          }
        }
      })
      viewer.scene.backgroundColor = new DE.Color(0.0, 0.0, 0.0, 0.0)
    }
  },
  mounted() {
    DE.init(this.initViewer)
  }
}
</script>
<style lang="scss" scoped>
.viewer-container {
  height: 100%;
}
</style>
