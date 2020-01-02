<template>
  <div class="task">
    <viewer></viewer>
    <sidebar
      class="panel"
      :menu-list="menuList"
      @on-selected="changePanel"
    ></sidebar>
    <keep-alive>
      <component :is="currentComp" @on-close="closePanel"></component>
    </keep-alive>
    <div class="panel search">
      <div class="search-form">
        <el-select v-model="searchForm.type" placeholder="类型" class="select">
          <el-option label="定位" value="location"> </el-option>
          <el-option label="要素" value="overlay"> </el-option>
        </el-select>
        <el-input
          placeholder="输入名称搜索"
          class="ipt"
          v-model="searchForm.name"
        ></el-input>
        <el-button type="primary" icon="el-icon-search" size="mini" plain>
        </el-button>
      </div>
      <div class="selected-item">
        <font color="red"
          >当前{{ searchForm.type === 'location' ? '定位' : '要素' }}:</font
        >
      </div>
      <div class="search-result"></div>
    </div>
    <div class="edit"></div>
  </div>
</template>

<script>
import Map from '../map'
import Layer from '../layer'
export default {
  name: 'Task',
  components: {
    Map,
    Layer
  },
  data() {
    return {
      menuList: [],
      currentComp: '',
      searchForm: {
        type: 'location',
        name: ''
      }
    }
  },
  methods: {
    changePanel(command, event) {
      if (command === 'goback') {
        this.$router.push('/')
      } else if (command === 'showMap') {
        this.currentComp = 'Map'
      } else if (command === 'showLayerTree') {
        this.currentComp = 'Layer'
      } else if (command === 'showModel') {
        this.currentComp = 'Model'
      } else if (command === 'showSettings') {
        this.currentComp = 'Settings'
      }
    },
    closePanel() {
      this.currentComp = null
    }
  },
  mounted() {
    this.menuList = global.config.menu
  }
}
</script>

<style lang="scss" scoped>
.task {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .panel {
    position: absolute;
    z-index: 1000;
    margin: 20px 0px;
    border-radius: 4px;
  }

  .search {
    top: 0;
    right: 10px;
    width: 20%;
    background: rgba(255, 255, 255, 0);
    .search-form {
      margin-top: 0px;
      padding-left: 10px;
      height: 50px;
      border-radius: 4px 4px 0px 0px;
      background: rgba(255, 255, 255, 1);
      .ipt {
        width: 150px;
      }
    }
    .selected-item {
      margin: -20px 10px 0 10px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      height: 40px;
      border-radius: 0px 0px 4px 4px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 4px 4px 4px rgba(0, 21, 41, 0.08);
    }
  }
}
</style>
