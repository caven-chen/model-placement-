<template>
  <div class="sidebar">
    <ul class="menu">
      <li v-for="menu in menuList" :key="menu.name">
        <el-tooltip effect="dark" :content="menu.label" placement="bottom">
          <div
            :class="{ 'svg-bg': true, active: activeItem.name === menu.name }"
          >
            <svg-icon
              :icon-class="menu.icon"
              class-name="menu-svg"
              @on-click="handleCommand(menu.command, menu)"
            />
          </div>
        </el-tooltip>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
    menuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeItem: ''
    }
  },
  methods: {
    handleCommand(command, item) {
      this.activeItem = item
      this.$emit('on-selected', command)
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  top: 0.5rem;
  left: 1rem;
  width: 20rem;
  display: flex;
  .menu {
    cursor: pointer;
    border-radius: 4px;
    li {
      display: inline-block;
      list-style-type: none;
      margin-left: 1rem;
    }
    .svg-bg {
      box-sizing: border-box;
      border: 1px solid #cecece;
      width: 2.2rem;
      height: 2.2rem;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 4px 4px 4px rgba(0, 21, 41, 0.08);
      border-radius: 4px;
      .menu-svg {
        color: #fff;
        width: 2rem;
        height: 2rem;
      }
    }
    .svg-bg.active {
      .menu-svg {
        color: rgb(49, 105, 226) !important;
      }
    }
  }
}
</style>
