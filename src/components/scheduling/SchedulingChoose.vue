<template>
  <div>
    <a-page-header class="a-page-header" title="疗程计划选项" />
    <a-form-model ref="schedulingChooseForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="回输地点">
        <a-select v-model="form.infusion_id" placeholder="请选择回输地点">
          <a-select-option v-for="item in form.infusion" :key="item.description+item.value" :value="item.value ">
            {{item.description}}
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item label="目标回输日期">
        <a-date-picker v-model="form.available_date" placeholder="请选择回输日期" style="width: 100%;" />
      </a-form-model-item>

      <a-form-model-item label="采血地点">
        <a-radio-group v-model="form.apheresis_ids">
          <a-radio v-for="item in form.apheresis" :key="item.description+item.value" :value="item.value ">
            {{item.description}}
          </a-radio>
        </a-radio-group>
      </a-form-model-item>

      <a-form-model-item label="工厂">
        <a-radio-group v-model="form.facility_ids">
          <a-radio v-for="item in form.facility" :key="item.description+item.value" :value="item.value ">
            {{item.description}}
          </a-radio>
        </a-radio-group>
      </a-form-model-item>

      <!-- <a-form-model-item label="工厂">
        <a-checkbox-group v-model="form.facility_ids">
          <a-checkbox v-for="item in form.facility" :key="item.description+item.value" :value="item.value ">
            {{item.description}}
          </a-checkbox>
        </a-checkbox-group>
      </a-form-model-item> -->

      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmitForm">
          提交
        </a-button>

        <a-button style="margin-left: 10px;" @click="onResetForm">
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
      wrapperCol: { span: 14 },
      form: {
        infusion_id: '',
        available_date: null,
        apheresis_ids: [],
        facility_ids: [],
        facility: [],
        infusion: [],
        apheresis: [],
      },
    };
  },
  mounted () {
    this.getResources();
  },
  methods: {
    async getResources () {
      const res = await this.$http.get('/capacity/getAllResources');
      // console.log(res.result);
      this.form.infusion = res.result.infusion;
      this.form.facility = res.result.facility;
      this.form.apheresis = res.result.apheresis;
    },
    async onSubmitForm () {
      const parms = {
        infusion_id: this.form.infusion_id,
        infusion_date: this.moment(this.form.available_date).format('YYYY-MM-DD'),
        apheresis_id: this.form.apheresis_ids,
        facility_id: this.form.facility_ids,
      };
      const res = await this.$http.post('/capacity/getResources', parms);
      if (res.code != "2000") {
        this.$message.error(res.message);
      } else {
        var arr = JSON.stringify(res.result);
        this.$router.push('/schedulingList/' + encodeURIComponent(arr))
      }

    },
    onResetForm () {
      this.$refs.schedulingChooseForm.resetFields();
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