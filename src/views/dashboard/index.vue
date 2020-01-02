<template>
  <div class="dashboard">
    <div class="search-form">
      <el-input
        v-model="searchForm.name"
        placeholder="输入任务名称搜索"
        class="ipt"
      ></el-input>
      <el-button type="success" icon="el-icon-search" size="mini"
        >搜索</el-button
      >
      <el-button type="primary" icon="el-icon-plus" size="mini" @click="addTask"
        >添加</el-button
      >
      <el-button
        type="danger"
        icon="el-icon-delete"
        size="mini"
        :disabled="selectedItems.length === 0"
        >删除</el-button
      >
    </div>
    <div class="result-list">
      <el-row>
        <el-col :span="16">
          <el-table :data="dataList" size="small" :show-header="false">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table
                  :data="props.row.taskList"
                  :show-header="false"
                  size="small"
                >
                  <el-table-column>
                    <template slot-scope="scope">
                      <a class="name-link" herf="javascript:void(0)">{{
                        scope.row.name
                      }}</a>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="cratedTime"
                    align="center"
                  ></el-table-column>
                  <el-table-column align="center"></el-table-column>
                  <el-table-column align="center">
                    <template slot-scope="scope">
                      <el-button
                        type="warning"
                        icon="el-icon-view"
                        size="mini"
                        plain
                        @click="viewTask(scope.row.id)"
                      ></el-button>
                      <el-button
                        type="danger"
                        icon="el-icon-delete"
                        size="mini"
                        plain
                      ></el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column>
              <template slot-scope="props">
                <span class="name-label">{{ props.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200" align="center">
              <template>
                <el-button
                  type="primary"
                  icon="el-icon-plus"
                  size="mini"
                  plain
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6" :offset="2">
          <div class="layer-list">
            <p class="title">图层列表</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashBoard',
  data() {
    return {
      searchForm: {
        name: ''
      },
      dataList: [
        {
          id: '1',
          name: '苏州模型摆放',
          taskList: [
            {
              id: '1',
              name: '苏州中心模型摆放'
            },
            {
              id: '1',
              name: '苏州体育馆模型摆放'
            }
          ]
        },
        {
          id: '2',
          name: '郑州模型摆放',
          taskList: []
        }
      ],
      selectedItems: []
    }
  },
  methods: {
    addTask() {},
    viewTask(taskId) {
      this.$router.push('/task')
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 10px 10px;
  .result-list {
    margin-top: 50px;
    .name-label {
      font-size: 1rem;
    }
    .name-link {
      font-size: 0.875rem;
      color: #409eff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
