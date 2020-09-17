<template>
  <div>
    <a-page-header class="a-page-header" title="疗程详情" />
    <a-form-model :model="regiment" :label-col="labelCol" :wrapper-col="wrapperCol">

      <a-form-model-item label="患者姓名">
        <div v-text='regiment.userName'></div>
      </a-form-model-item>

      <a-form-model-item label="患者CCID">
        <div v-text='regiment.CCID'></div>
      </a-form-model-item>

      <a-form-model-item label="患者出生日期">
        <div v-text='regiment.birthday'></div>
      </a-form-model-item>

      <a-form-model-item label="医生姓名">
        <div v-text='regiment.doctor'></div>
      </a-form-model-item>

      <a-form-model-item label="回输地点">
        <div v-text='regiment.apheresis_site'></div>
      </a-form-model-item>

      <a-form-model-item label="产品">
        <div v-text='regiment.product'></div>
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
      disabledFlag: true,
      regiment: {
        userName: 'XXXX',
        CCID: 'XXXXXX',
        birthday: '1990-01-01',
        doctor: 'XX',
        apheresis_site: '上海第一人民医院回输中心',
        product: 'Provenge'
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