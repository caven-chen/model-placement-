<template>
  <div class="layer panel">
    <layer-tree
      closeable
      editable
      filterable
      :tree-data="treeData"
      :checked-data="checkedData"
      @on-close="closePanel"
      @on-add="showDialog"
      @on-del="delLayer"
    />

    <layer-dialog
      :visible.sync="dialogVisible"
      @on-close="closeDialog"
    ></layer-dialog>
  </div>
</template>

<script>
import LayerDialog from './LayerDialog'
export default {
  name: 'Layer',
  components: {
    LayerDialog
  },
  data() {
    return {
      dialogVisible: false,
      currentLayer: null,
      treeData: [
        {
          pid: '1',
          id: 'layer',
          label: '图层结构',
          parentId: '',
          children: [
            {
              pid: '2',
              id: '1',
              label: '图层1',
              parentId: 'layer'
            },
            {
              pid: '3',
              id: '2',
              label: '图层2',
              parentId: 'layer'
            }
          ]
        }
      ],
      checkedData: ['2']
    }
  },
  methods: {
    closePanel() {
      this.$emit('on-close')
    },
    showDialog(data) {
      this.currentLayer = data
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    },
    delLayer(data) {}
  }
}
</script>

<style lang="scss" scoped>
.layer {
  position: absolute;
  top: 4rem;
  left: 10px;
  width: 18%;
  height: 60%;
  box-shadow: 4px 4px 4px rgba(0, 21, 41, 0.08);
  background: #fff;
}
</style>
