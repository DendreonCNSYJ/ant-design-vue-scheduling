<template>
  <a-form-model layout="inline" :model="queryMap" @submit="handleSubmit" @submit.native.prevent>
    <a-form-model-item>
      <a-input v-model="queryMap.user_code" label="人员名称" placeholder="请输入用户编号">
      </a-input>
    </a-form-model-item>

    <a-form-model-item>
      <a-input v-model="queryMap.user_name" label="人员名称" placeholder="请输入用户名称">
      </a-input>
    </a-form-model-item>

    <a-form-model-item>
      <a-button type="primary" html-type="submit" :disabled="queryMap.user_code === '' || queryMap.user_name === ''">
        Log in
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data () {
    return {
      queryMap: {
        user_code: '',
        user_name: '',
      },
    };
  },
  methods: {
    handleSubmit () {
      console.log(this.queryMap);
    },
  },
};
</script>


<style scoped>
</style>