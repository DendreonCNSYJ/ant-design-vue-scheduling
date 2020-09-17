<template>
  <div>
    <a-page-header class="a-page-header" title="支付详情" />
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="计划付款人">
        <a-select v-model="form.name" placeholder="请选择计划付款人">
          <a-select-option value="1">
            张三
          </a-select-option>
          <a-select-option value="2">
            李四
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item label="付款人编号">
        <a-input v-model="form.code" />
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      form: {
        code: '',
        name: '',
      },
    };
  },
  methods: {
    onSubmit () {
      console.log('submit!', this.form);
    },
  },
};
</script>
<style scoped>
.a-page-header {
  border: 1px solid;
  background: gray;
}
</style>