<template>
  <div>
    <a-row>
      <a-col :span="6">
        <regimentView class="regimentView"></regimentView>
      </a-col>
      <a-col :span="14">
        <schedulingFilter class="schedulingFilter"></schedulingFilter>
      </a-col>
      <a-col :span="3">
        <schedulingFunction class="schedulingFunction"></schedulingFunction>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="6">
        <schedulingCalendar class="schedulingCalendar"></schedulingCalendar>
      </a-col>
      <a-col :span="17">
        <schedulingList class="schedulingList"></schedulingList>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import regimentView from './RegimentView';
import schedulingFilter from './SchedulingFilter';
import schedulingCalendar from './SchedulingCalendar';
import schedulingFunction from './SchedulingFunction';
import schedulingList from './SchedulingList';

export default {
  components: {
    regimentView,
    schedulingFilter,
    schedulingCalendar,
    schedulingFunction,
    schedulingList,
  },

  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
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
  margin: 3px 3px;
}
.schedulingFilter {
  border: 1px solid;
  margin: 3px 3px;
}
.schedulingCalendar {
  border: 1px solid;
  margin: 3px 3px;
}
.schedulingFunction {
  /* border: 1px solid; */
  margin: 3px 3px;
}
.schedulingList {
  border: 1px solid;
  margin: 3px 3px;
}
</style>
