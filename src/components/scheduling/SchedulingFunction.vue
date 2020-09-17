<template>
  <div>
    <a-button type="primary" block class="button">
      排期
    </a-button>
    <a-button type="primary" block class="button">
      重新排期
    </a-button>
    <a-button type="primary" block class="button">
      再次重置
    </a-button>
    <a-button type="primary" block class="button">
      取消
    </a-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      size: 'large',
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
.button {
  margin: 5px 10px;
}
</style>

