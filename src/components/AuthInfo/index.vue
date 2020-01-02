<template>
  <div class="auth-info">
    <el-dropdown trigger="click" size="small" @command="handleCommand">
      <el-avatar shape="square" size="medium" class="avatar"></el-avatar>
      <i class="el-icon-caret-bottom"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) in authOptions"
          :key="index"
          :command="item.command"
          :divided="item.divided"
          >{{ item.name }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'AuthInfo',
  props: {
    authData: {
      type: Object,
      default() {
        return {}
      }
    },
    authOptions: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    handleCommand(command) {
      this.$emit('on-command', command)
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-info {
  .avatar {
    cursor: pointer;
  }
}
</style>
