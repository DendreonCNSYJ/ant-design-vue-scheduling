<template>
  <div class="login-container">
    <h2 class="login-title">Dendreon Scheduling</h2>
    <a-form-model :model="user" class="login-form">
      <a-form-model-item placeholder="请输入账号" label="账号">
        <a-input v-model="user.userCode" />
      </a-form-model-item>

      <a-form-model-item label="密码">
        <a-input-password placeholder="请输入密码" v-model="user.password" />
      </a-form-model-item>

      <a-form-model-item>
        <a-button class="login-button" type="primary" @click="onSubmit">
          登录
        </a-button>
        <a-button class="login-button" @click="onReset">
          重置
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        userCode: '',
        password: '',
      },
      menuList: '',
    }
  },
  methods: {
    async onSubmit () {
      // console.log('submit!', this.user)
      const res = await this.$http.post('/user/login', this.user)
      window.sessionStorage.setItem('token', res.result)
      // console.log(res.code)
      // console.log(res.message)
      // console.log(res.result)
      if (res.code != "2000") {
        this.$message.error(res.message);
        this.onReset();
      } else {
        this.$router.push('/schedulingQuery')
      }
    },
    // async onSubmit1 () {
    //   // console.log('submit!', this.user)
    //   const res = await this.$http.get('/menu/queryMenus')
    //   console.log(res.code)
    //   console.log(res.message)
    //   console.log(res.result)
    // },
    onReset () {
      this.user.userCode = ''
      this.user.password = ''
    },
  },
}
</script>
<style scoped>
/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: cyan;
  /* background: url("../assets/login_bg.jpg"); */
}

/* Log */
.login-title {
  color: #fff;
  text-align: center;
  margin: 150px 0;
  font-size: 48px;
  font-family: Microsoft Yahei;
}

.login-form {
  width: 565px;
  height: 372px;
  margin: 0 auto;
  /* background: url("../assets/bg1.png"); */
  padding: 40px 90px;
  background-color: white;
}

.login-button {
  width: 40%;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
