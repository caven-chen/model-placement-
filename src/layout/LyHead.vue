<template>
  <div class="ly-head">
    <div class="logo">
      <svg-icon icon-class="logo" class-name="logo-svg" />
      <label class="logo-label">模型摆放工具 <sub>V1.0</sub></label>
    </div>
    <auth-info :auth-options="authOptions"></auth-info>
  </div>
</template>
<script>
export default {
  name: 'LyHead',
  data() {
    return {
      authOptions: [
        { name: '密码修改', command: 'changePassword', divided: false },
        { name: '使用手册', command: 'showDocs', divided: false },
        { name: '退出登录', command: 'logout', divided: true }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.ly-head {
  position: relative;
  height: 50px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    .logo-svg {
      width: 2rem;
      height: 2rem;
      color: rgba(11, 86, 156, 0.733);
      cursor: pointer;
    }
    .logo-label {
      margin-left: 10px;
      font-size: 1.3rem;
      sub {
        font-size: 0.3rem;
        color: #c1c1c1;
      }
    }
  }
}
</style>
