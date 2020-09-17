<template>
  <div>
    <!-- <a-row>
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
    </a-row> -->
    <a-row>
      <a-col :span="6">
        <a-row>
          <a-col :span="24">
            <regimentView class="regimentView"></regimentView>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <schedulingCalendar class="schedulingCalendar"></schedulingCalendar>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="18">
        <a-row>
          <a-col :span="18">
            <schedulingFilter class="schedulingFilter"></schedulingFilter>
          </a-col>
          <a-col :span="6">
            <schedulingFunction class="schedulingFunction"></schedulingFunction>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <schedulingList class="schedulingList" :plans="plans"></schedulingList>
          </a-col>
        </a-row>
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
      plans: {},
    };
  },
  mounted () {

  },
  methods: {

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
