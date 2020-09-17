<template>
  <div>
    <a-page-header class="a-page-header" title="筛选" />
    <a-form-model ref="schedulingFilterForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="采血地点">
        <a-checkbox-group v-model="form.apheresis_ids">
          <a-checkbox value="341">
            上海第一人民医院
          </a-checkbox>
        </a-checkbox-group>
      </a-form-model-item>

      <a-form-model-item label="采血时间">
        <a-checkbox-group v-model="form.apheresis_dates">
          <a-checkbox value="AM">
            AM
          </a-checkbox>
          <a-checkbox value="PM">
            PM
          </a-checkbox>
        </a-checkbox-group>
      </a-form-model-item>

      <a-form-model-item label="回输日期">
        <a-checkbox-group v-model="form.infusion_dates">
          <a-checkbox value="1">
            星期一
          </a-checkbox>
          <a-checkbox value="4">
            星期四
          </a-checkbox>
          <a-checkbox value="5">
            星期五
          </a-checkbox>
        </a-checkbox-group>
      </a-form-model-item>

      <a-form-model-item label="回输交货日期">
        <a-checkbox-group v-model="form.shipping_dates">
          <a-checkbox value="AM">
            AM
          </a-checkbox>
        </a-checkbox-group>
      </a-form-model-item>

      <a-form-model-item label="工厂">
        <a-checkbox-group v-model="form.facility_ids">
          <a-checkbox value="79">
            PVG1-1
          </a-checkbox>

          <a-checkbox value="80">
            PVG2-2
          </a-checkbox>

          <a-checkbox value="81">
            PVG3-1
          </a-checkbox>
        </a-checkbox-group>
      </a-form-model-item>

    </a-form-model>
  </div>
</template>
<script>
export default {
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      size: 'small',
      form: {
        apheresis_ids: [],
        apheresis_dates: [],

        infusion_dates: [],
        shipping_dates: [],

        facility_ids: [],
      },
    };
  },
  methods: {
    // onSubmitForm () {
    //   console.log('submit!', this.form);
    // },
    // onResetForm () {
    //   this.$refs.schedulingFilterForm.resetFields();
    // },
  },

};
</script>
<style scoped>
.a-page-header {
  border: 1px solid;
  background: gray;
}
</style>