<template>
  <div class="login">
    <div class="wrapper">
      <div class="corner">
        <img src="../../assets/images/corner.png" class="topleft" />
        <img src="../../assets/images/corner.png" class="topright" />
        <img src="../../assets/images/corner.png" class="bottomleft" />
        <img src="../../assets/images/corner.png" class="bottomright" />
      </div>
      <div class="title">
        <label>用户登录</label>
      </div>
      <el-form
        ref="login-form"
        :model="loginForm"
        :rules="formRules"
        label-width="0"
      >
        <el-form-item prop="username">
          <el-input placeholder="用户名" v-model="loginForm.username">
            <i class="el-icon-user-solid" slot="prefix" style="width:20px"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="passworld">
          <el-input
            placeholder="密码"
            v-model="loginForm.passworld"
            type="password"
          >
            <i class="el-icon-lock" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            auto-complete="off"
            placeholder="验证码"
            style="width:60%"
          >
            <i class="el-icon-success" slot="prefix"></i>
          </el-input>
          <span class="code-img"></span>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="isLoading"
            type="primary"
            class="btn"
            @click="login"
          >
            <span v-if="isLoading">登录中</span>
            <span v-else>登录</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      isLoading: false,
      loginForm: {
        username: '',
        passworld: '',
        code: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'changed' }
        ],
        passworld: [
          { required: true, message: '请输入密码', trigger: 'changed' }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'changed' }]
      }
    }
  },
  methods: {
    login() {
      this.$refs['login-form'].validate(valid => {
        if (valid) {
          let menuList = []
          this.$router.push('/dashboard')
          this.loading = true
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
.login {
  .el-input {
    font-size: 1.2rem;
    color: #fff;
  }
  .el-input__inner {
    border-color: rgba(0, 144, 252, 0.5);
    border-width: 2px;
    background: rgba(25, 43, 123, 0.5);
    color: #fff;
  }
}
</style>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/images/bg.png') no-repeat fixed center;
  .wrapper {
    position: absolute;
    top: calc(calc(100% - 400px) / 2);
    left: calc(calc(100% - 300px) / 2);
    width: 300px;
    height: 400px;
    background: rgba(4, 27, 90, 0.1);
    border-radius: 4px;
    border: 1px solid rgba(92, 172, 247, 0.4);
    text-align: center;
    padding: 0 40px;

    img {
      width: 20px;
      position: absolute;
    }
    img.topleft {
      top: -2px;
      left: -2px;
      transform: rotate(-90deg);
    }
    img.topright {
      top: -2px;
      right: -2px;
    }
    img.bottomleft {
      bottom: -2px;
      left: -2px;
      transform: rotate(-180deg);
    }
    img.bottomright {
      bottom: -2px;
      right: -2px;
      transform: rotate(90deg);
    }

    .title {
      margin: 40px 0;
      color: #fff;
      font-size: 1.3rem;
    }

    .btn {
      margin-top: 15px;
      width: 100%;
      font-size: 1.2rem;
    }
    .code-img {
      width: 40%;
    }
  }
}
</style>
