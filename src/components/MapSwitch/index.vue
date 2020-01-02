<template>
  <div class="map-switch">
    <div class="close" v-if="closeable">
      <span @click.prevent="handleClose">X</span>
    </div>
    <div class="title">
      <span>{{ title }}</span>
      <div class="tools">
        <label>地形：</label>
        <el-switch
          v-model="enableTerrain"
          active-color="#13ce66"
          inactive-color="#ff4949"
          size="mini"
        >
        </el-switch>
      </div>
    </div>
    <div class="map-list"></div>
    <div class="btns" v-if="editable">
      <el-button
        type="primary"
        icon="el-icon-plus"
        size="mini"
        @click="handleAdd"
        >添加</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapSwitch',
  props: {
    title: {
      type: String,
      default: '地图'
    },
    mapList: {
      type: Array,
      default() {
        return []
      }
    },
    defaultMap: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      enableTerrain: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('on-close')
    },
    handleAdd() {
      this.$emit('on-add')
    }
  }
}
</script>

<style lang="scss" scoped>
.map-switch {
  position: relative;
  width: 100%;
  height: 100%;
  .close {
    text-align: right;
    padding-top: 0.3rem;
    span {
      cursor: pointer;
      color: #cecece;
      margin-right: 0.5rem;
      &:hover {
        color: #000;
      }
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    margin-top: 0.5rem;
    span {
      font-size: 1.2rem;
    }
    .tools {
      label {
        font-size: 0.875rem;
        color: #cecece;
      }
    }
  }
  .map-list {
    height: calc(100% - 7rem);
    overflow: hidden;
    overflow-y: auto;
    border: 1px solid #cecece;
  }
  .btns {
    margin-top: 0.5rem;
    height: 2rem;
    text-align: center;
  }
}
</style>
