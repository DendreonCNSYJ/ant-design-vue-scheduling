<template>
  <div>
    <a-row>
      <a-col :span="7">
        <a-row class="regimentView">
          <regimentView></regimentView>
        </a-row>
        <a-row class="paymentChoose">
          <paymentChoose></paymentChoose>
        </a-row>
      </a-col>
      <a-col :span="16" class="schedulingChoose">
        <schedulingChoose></schedulingChoose>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import schedulingChoose from './SchedulingChoose';
import regimentView from './RegimentView';
import paymentChoose from './PaymentChoose';

export default {
  components: {
    schedulingChoose,
    regimentView,
    paymentChoose,
  },
  mounted () {

  },
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      size: 'large',
      form: {
        infusion_id: '',
        available_date: null,
        apheresis_ids: '',
        facility_ids: '',
      },
    };
  },

  methods: {
    onSubmitForm () {
      console.log('submit!', this.form);
    },
    onResetForm () {
      this.$refs.schedulingChooseForm.resetFields();
    },
  },

};
</script>

<style>
.regimentView {
  border: 1px solid;
  height: 60%;
  margin: 5px 5px;
}
.paymentChoose {
  border: 1px solid;
  height: 30%;
  margin: 5px 5px;
}
.schedulingChoose {
  border: 1px solid;
  margin: 5px 5px;
}
</style>
