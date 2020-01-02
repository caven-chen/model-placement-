<template>
  <div class="map panel">
    <map-switch
      closeable
      editable
      @on-close="closePanel"
      @on-add="showDialog"
    />
    <map-dialog
      :visible.sync="dialogVisible"
      @on-close="closeDialog"
    ></map-dialog>
  </div>
</template>

<script>
import MapDialog from './MapDialog'
export default {
  name: 'Map',
  components: {
    MapDialog
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    closePanel() {
      this.$emit('on-close')
    },
    showDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  position: absolute;
  top: 4rem;
  left: 10px;
  width: 18%;
  height: 50%;
  box-shadow: 4px 4px 4px rgba(0, 21, 41, 0.08);
  background: #fff;
  overflow: hidden;
}
</style>
