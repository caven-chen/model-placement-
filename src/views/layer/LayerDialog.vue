<template>
  <el-dialog
    class="layer-dialog"
    title="添加图层"
    :visible.sync="dialogVisible"
    @closed="handleClosed"
    :close-on-click-modal="false"
    :append-to-body="true"
  >
    <el-form
      ref="layer-form"
      :model="layerForm"
      label-width="100px"
      class="layer-form"
    >
      <el-form-item prop="id" label="标识：">
        <el-input
          v-model="layerForm.id"
          placeholder="请输入标识"
          class="ipt"
        ></el-input>
      </el-form-item>
      <el-form-item prop="name" label="名称：">
        <el-input
          v-model="layerForm.name"
          placeholder="请输入名称"
          class="ipt"
        ></el-input>
      </el-form-item>
      <el-form-item prop="type" label="类型：">
        <el-select
          v-model="layerForm.type"
          placeholder="请选择图层类型"
          class="select"
        >
          <el-option
            v-for="item in layerTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        prop="url"
        label="地址："
        v-if="needUrlLayers.indexOf(layerForm.type) >= 0"
      >
        <el-input v-model="layerForm.url" class="ipt"></el-input>
      </el-form-item>
      <el-form-item prop="visible" label="默认显示：">
        <el-switch
          v-model="layerForm.visible"
          active-color="#13ce66"
          inactive-color="#ff4949"
          size="mini"
        >
        </el-switch
      ></el-form-item>
    </el-form>
    <div class="btns">
      <el-button type="primary" @click="handleSave">保存</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'MapDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    parentLayer: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {
    visible(val) {
      this.$nextTick(() => {
        this.dialogVisible = Boolean(val)
      })
    }
  },
  data() {
    return {
      dialogVisible: false,
      layerTypes: [],
      needUrlLayers: ['geojson', 'czml', 'kml'],
      layerForm: {
        id: '',
        name: '',
        type: '',
        visible: false
      }
    }
  },
  methods: {
    handleClosed() {
      this.$refs['layer-form'].resetFields()
      this.$emit('on-close')
    },
    handleSave() {}
  },
  mounted() {
    this.layerTypes = global.config.layerTypes
  }
}
</script>

<style lang="scss" scoped>
.layer-dialog {
  width: 50%;
  left: 25%;
  .layer-form {
    .ipt,
    .select {
      width: 80%;
    }
    border-bottom: 1px solid #cecece;
  }
  .btns {
    text-align: center;
    margin-top: 1.2rem;
  }
}
</style>
