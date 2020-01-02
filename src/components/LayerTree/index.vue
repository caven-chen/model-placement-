<template>
  <div class="layer-tree">
    <div class="close" v-if="closeable">
      <span @click.prevent="handleClose">X</span>
    </div>
    <div class="filter" v-if="filterable">
      <el-input
        placeholder="输入图层名称搜索"
        class="ipt"
        v-model="filterForm.name"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" size="mini" plain>
      </el-button>
    </div>
    <div class="tree">
      <el-tree
        :data="treeData"
        show-checkbox
        node-key="pid"
        :expand-on-click-node="false"
        :default-checked-keys="checkedData"
        @node-click="handleClick"
      >
        <span class="tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <el-dropdown
            @command="handleCommand"
            v-if="selectedItem.id === data.id"
          >
            <span class="ellipsis">...</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="addLayer">添加图层</el-dropdown-item>
              <el-dropdown-item command="delLayer">删除图层</el-dropdown-item>
              <el-dropdown-item command="editLayer"
                >编辑图层要素</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </el-tree>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayerTree',
  props: {
    treeData: {
      type: Array,
      default() {
        return []
      }
    },
    checkedData: {
      type: Array,
      default() {
        return []
      }
    },
    filterable: {
      type: Boolean,
      default: false
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
      selectedItem: {},
      filterForm: {
        name: ''
      },
      mesIns: null
    }
  },
  methods: {
    handleClose() {
      this.$emit('on-close')
    },
    handleClick(data) {
      this.selectedItem = data
    },
    handleAdd(data) {
      this.$emit('on-add', data)
    },
    handleDel(data) {
      this.$emit('on-del', data)
    },
    handleCommand(command) {
      if (command === 'addLayer') {
        //todo
      } else if (command === 'delLayer') {
        //todo
        this.$confirm('此操作将删除图层以及图层下所有要素, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {})
          .catch(() => {})
      } else if (command === 'editLayer') {
        if (!this.mesIns) {
          this.mesIns = this.$message({
            type: 'warning',
            customClass: 'current-layer',
            duration: false,
            showClose: false
          })
        }
        this.mesIns.message = '当前选择编辑的图层是: ' + this.selectedItem.label
      }
    }
  }
}
</script>
<style lang="scss">
.current-layer {
  top: 70px !important;
}
</style>
<style lang="scss" scoped>
.layer-tree {
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
  .filter {
    margin: 20px 0px 20px 10px;
    display: flex;
    align-items: center;
    .ipt {
      width: 70%;
      margin-right: 20px;
    }
  }
  .tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    padding-right: 1.5rem;
    padding-left: 0.5rem;

    .ellipsis {
      font-size: 1.3rem;
      font-weight: bold;
      transform: translateY(-20%);
      display: flex;
      align-items: center;
    }

    .selected {
      color: #f56c6c;
    }
  }
}
</style>
