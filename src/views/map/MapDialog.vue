<template>
  <el-dialog
    class="map-dialog"
    title="添加地图"
    :visible.sync="dialogVisible"
    @closed="handleClosed"
    :close-on-click-modal="false"
    :append-to-body="true"
  >
    <el-form
      ref="map-form"
      :model="mapForm"
      label-width="80px"
      class="map-form"
    >
      <el-form-item prop="name" label="名称：">
        <el-input
          v-model="mapForm.name"
          placeholder="请输入名称"
          class="ipt"
        ></el-input>
      </el-form-item>
      <el-form-item prop="type" label="供应商：">
        <el-select
          v-model="mapForm.type"
          placeholder="请选择供应商"
          class="select"
          @change="getStyleList"
        >
          <el-option
            v-for="item in mapList"
            :key="item.name"
            :label="item.label"
            :value="item.name"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="style" label="样式：">
        <el-radio v-model="mapForm.style" label="elec">
          <img src="/images/elec.png" title="电子图" />
        </el-radio>
        <el-radio v-model="mapForm.style" label="img">
          <img src="/images/img.png" title="影像图" />
        </el-radio>
        <el-radio
          v-model="mapForm.style"
          v-for="item in styleList"
          :key="item.value"
          :label="item.value"
        >
          <img :src="'/images/' + item.value + '.png'" :title="item.label" />
        </el-radio>
      </el-form-item>
      <el-form-item
        prop="url"
        label="地址："
        v-if="needUrlMaps.indexOf(mapForm.type) >= 0"
      >
        <el-input v-model="mapForm.url" class="ipt"></el-input>
      </el-form-item>

      <el-form-item prop="key" label="Key：" v-if="mapForm.type === 'tdt'">
        <el-input v-model="mapForm.key" class="ipt"></el-input>
      </el-form-item>
      <el-form-item
        prop="imgUrl"
        label="底部图片:"
        v-if="needImgUrl.indexOf(mapForm.type) >= 0"
      >
        <el-input v-model="mapForm.imgUrl" class="ipt"></el-input>
      </el-form-item>
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
      mapList: [],
      styleList: [],
      needUrlMaps: ['gaea', 'xyz', 'tdt', 'single', 'arcgis', 'mapbox'],
      needImgUrl: ['gaea', 'xyz', 'single'],
      mapForm: {
        type: '',
        style: '',
        name: '',
        url: '',
        key: '',
        imgUrl: ''
      }
    }
  },
  methods: {
    handleClosed() {
      this.$refs['map-form'].resetFields()
      this.$emit('on-close')
    },
    handleSave() {},

    getStyleList(val) {
      let filter = this.mapList.filter(item => item.name === val)
      if (filter && filter.length) {
        this.styleList = filter[0].styleList || []
      }
    }
  },
  mounted() {
    this.mapList = global.config.maps
  }
}
</script>

<style lang="scss" scoped>
.map-dialog {
  width: 50%;
  left: 25%;
  .map-form {
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
  img {
    width: 1.8rem;
    transform: translateY(25%);
  }
}
</style>
