<template>
  <div>
    <!-- <a-button type="primary" @click="showModal">
      添加
    </a-button> -->
    <a-form-model ref="ruleForm" :model="user" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item ref="userCode" label="人员编号" prop="userCode">
        <a-input v-model="user.userCode" />
      </a-form-model-item>

      <a-form-model-item ref="userName" label="人员名称" prop="userName">
        <a-input v-model="user.userName" />
      </a-form-model-item>

      <a-form-model-item ref="password" label="密码" prop="password">
        <a-input-password placeholder="请输入密码" v-model="user.password" />
      </a-form-model-item>

      <!-- 下拉列表 :label-col="{ span: 8, offset: 1 } :wrapper-col="{ span: 8, offset: 1 }" -->
      <a-form-model-item ref="gender" label="性别" prop="gender">
        <a-select v-model="user.gender" placeholder="请选择你的性别">
          <a-select-option value="0">
            女
          </a-select-option>
          <a-select-option value="1">
            男
          </a-select-option>
          <a-select-option value="2">
            其他
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item ref="birthday" label="出生日期" prop="birthday">
        <a-date-picker v-model="user.birthday" placeholder="请选择出生日期" style="width: 100%;" />
      </a-form-model-item>

      <a-form-model-item ref="address" label="地址" prop="address">
        <a-input v-model="user.address" />
      </a-form-model-item>

      <a-form-model-item ref="email" label="邮箱" prop="email">
        <a-input v-model="user.email" />
      </a-form-model-item>

      <a-form-model-item ref="phone" label="电话" prop="phone">
        <a-input v-model="user.phone" />
      </a-form-model-item>

      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmitForm">
          提交
        </a-button>
        <a-button style="margin-left: 10px;" @click="resetForm">
          重置
        </a-button>
        <!-- <a-button @click="resetForm">
          重置
        </a-button> -->
      </a-form-model-item>
    </a-form-model>

  </div>
</template>
<script>
export default {
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 19 },
      visible: false,
      user: {
        userCode: '',
        userName: '',
        password: '',
        gender: null,
        birthday: null,
        address: '',
        phone: '',
        email: '',
        status: 0
      },
      rules: {
        userCode: [{ required: true, message: '请输入人员账号', trigger: 'blur' }, { min: 1, max: 10, message: '人员账号长度必须在1~10之间', trigger: 'blur' }],
        userName: [{ required: true, message: '请输入人员名称', trigger: 'blur' }, { min: 1, max: 20, message: '人员姓名长度必须在1~10之间', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 1, max: 50, message: '密码长度必须在1~25之间', trigger: 'blur' }],

        gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
        birthday: [{ required: true, message: '请输入出生日期', trigger: 'change' }],

        address: [{ min: 0, max: 200, message: '联系长度必须在1~100之间', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }, { min: 1, max: 100, message: '邮箱长度必须在1~100之间', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入电话', trigger: 'blur' }, { min: 1, max: 100, message: '电话长度必须在1~100之间', trigger: 'blur' }],
      },
    };
  },
  methods: {
    onSubmitForm () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.addUser();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async addUser () {
      // console.log('submit!', this.user)
      console.log(this.user)
      const res = await this.$http.post('/user/addUser', this.user)
      window.sessionStorage.setItem('token', res.result)
      console.log(res.code)
      console.log(res.message)
      console.log(res.result)
      this.resetForm();
      this.visible = false;
    },
    // showModal () {
    //   this.visible = true;
    // },
    // handleOk (e) {
    //   console.log(e);
    //   onSubmit();
    // },
    resetForm () {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
