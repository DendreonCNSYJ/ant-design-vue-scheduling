<template>
  <div>
    <a-row>
      <a-col :span="9">
        <a-row>
          <a-col :span="24">
            <regimentView class="regimentView"></regimentView>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <div class="schedulingCalendar">
              <a-table ref="calendarViews" :data-source="this.calendarViews" :pagination="false" :bordered="true"
                :scroll="{y: 400}">
                <a-table-column key="weekOfYear" title="" data-index="weekOfYear" align="right" width="10%" />
                <a-table-column key="Mon" title="Mon" data-index="decription1" align="center">
                  <template slot-scope="text,record">
                    <!-- <span>{{text}}</span> -->
                    <div v-if='record.bgColor1=="calendar_green"'>
                      <a-popconfirm :title="record.dateStr1+'?'" @confirm="changeDate(record.dateStr1)">
                        <div :class="record.bgColor1">
                          <a>{{text}}</a>
                        </div>
                      </a-popconfirm>
                    </div>
                    <div v-else>
                      <div :class="record.bgColor1">
                        <span>{{text}}</span>
                      </div>
                    </div>
                  </template>
                </a-table-column>
                <a-table-column key="Tue" title="Tue" data-index="decription2" align="center">
                  <template slot-scope="text,record">
                    <div v-if='record.bgColor2=="calendar_green"'>
                      <a-popconfirm :title="record.dateStr2+'?'" @confirm="changeDate(record.dateStr2)">
                        <div :class="record.bgColor2">
                          <a>{{text}}</a>
                        </div>
                      </a-popconfirm>
                    </div>
                    <div v-else>
                      <div :class="record.bgColor2">
                        <span>{{text}}</span>
                      </div>
                    </div>
                  </template>
                </a-table-column>
                <a-table-column key="Wed" title="Wed" data-index="decription3" align="center">
                  <template slot-scope="text,record">
                    <div v-if='record.bgColor3=="calendar_green"'>
                      <a-popconfirm :title="record.dateStr3+'?'" @confirm="changeDate(record.dateStr3)">
                        <div :class="record.bgColor3">
                          <a>{{text}}</a>
                        </div>
                      </a-popconfirm>
                    </div>
                    <div v-else>
                      <div :class="record.bgColor3">
                        <span>{{text}}</span>
                      </div>
                    </div>
                  </template>
                </a-table-column>
                <a-table-column key="Thu" title="Thu" data-index="decription4" align="center">
                  <template slot-scope="text,record">
                    <div v-if='record.bgColor4=="calendar_green"'>
                      <a-popconfirm :title="record.dateStr4+'?'" @confirm="changeDate(record.dateStr4)">
                        <div :class="record.bgColor4">
                          <a>{{text}}</a>
                        </div>
                      </a-popconfirm>
                    </div>
                    <div v-else>
                      <div :class="record.bgColor4">
                        <span>{{text}}</span>
                      </div>
                    </div>
                  </template>
                </a-table-column>
                <a-table-column key="Fri" title="Fri" data-index="decription5" align="center">
                  <template slot-scope="text,record">
                    <div v-if='record.bgColor5=="calendar_green"'>
                      <a-popconfirm :title="record.dateStr5+'?'" @confirm="changeDate(record.dateStr5)">
                        <div :class="record.bgColor5">
                          <a>{{text}}</a>
                        </div>
                      </a-popconfirm>
                    </div>
                    <div v-else>
                      <div :class="record.bgColor5">
                        <span>{{text}}</span>
                      </div>
                    </div>
                  </template>
                </a-table-column>
                <a-table-column key="Sat" title="Sat" data-index="decription6" align="center">
                  <template slot-scope="text,record">
                    <div v-if='record.bgColor6=="calendar_green"'>
                      <a-popconfirm :title="record.dateStr6+'?'" @confirm="changeDate(record.dateStr6)">
                        <div :class="record.bgColor6">
                          <a>{{text}}</a>
                        </div>
                      </a-popconfirm>
                    </div>
                    <div v-else>
                      <div :class="record.bgColor6">
                        <span>{{text}}</span>
                      </div>
                    </div>
                  </template>
                </a-table-column>
                <a-table-column key="Sun" title="Sun" data-index="decription7" align="center">
                  <template slot-scope="text,record">
                    <div v-if='record.bgColor7=="calendar_green"'>
                      <a-popconfirm :title="record.dateStr7+'?'" @confirm="changeDate(record.dateStr7)">
                        <div :class="record.bgColor7">
                          <a>{{text}}</a>
                        </div>
                      </a-popconfirm>
                    </div>
                    <div v-else>
                      <div :class="record.bgColor7">
                        <span>{{text}}</span>
                      </div>
                    </div>
                  </template>
                </a-table-column>
              </a-table>
            </div>
          </a-col>
        </a-row>
      </a-col>

      <a-col :span="14">
        <a-row>
          <a-col :span="18">
            <schedulingFilter class="schedulingFilter"></schedulingFilter>
          </a-col>
          <a-col :span="6">
            <div class="schedulingFunction">
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
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-row>
              <a-col :span="24">
                <div class="schedulingList">
                  <a-page-header class="a-page-header" title="疗程" />
                  <a-table ref="SchedulingList" :row-key="record => record.id" :columns="columns" :data-source="data"
                    :rowSelection="this.rowSelection" :customRow="onClickRow" :pagination="false" :bordered="true">
                    <span slot="apheresisDate" slot-scope="apheresisDate">
                      {{ apheresisDate | dateFormat2 }}
                    </span>
                  </a-table>
                </div>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="24">
                <schedulingChooseItems ref="schedulingChooseItems" :items='this.items' @itemChanged="changeValue">
                </schedulingChooseItems>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
<script>
// import chooseItem from '../common/ChooseItem';
import regimentView from './RegimentView';
import schedulingChooseItems from './SchedulingChooseItems';
import schedulingFilter from './SchedulingFilter';
// import schedulingCalendar from './SchedulingCalendar';

const columns = [
  {
    title: '采血地点',
    dataIndex: 'apheresisSite',
  },
  {
    title: '采血日期',
    dataIndex: 'apheresisDate',
    scopedSlots: { customRender: "apheresisDate" },
  },
  {
    title: '采血时间',
    dataIndex: 'apheresisTime',
  },
  {
    title: '工厂',
    dataIndex: 'plant',
  },
  {
    title: '回输日期',
    dataIndex: 'infusionDate',
  },
  {
    title: '回输交货日期',
    dataIndex: 'infusionDeliveryTime',
  },
  {
    title: '间隔周期',
    dataIndex: 'intervalPeriod',
  },
];

export default {
  components: {
    schedulingChooseItems,
    regimentView,
    // schedulingCalendar,
    schedulingFilter,
  },
  data () {
    return {
      rowSelection: {
        type: "radio",
        columnWidth: '2%',
        selectedRows: [],
        selectedRowKeys: [],
        onChange: this.radionChange
      },
      data: [],

      calendarViews: [],
      index: -1,
      queryMap: {
        infusion_id: '',
        infusion_date: null,
        old_infusion_date: null,
        new_infusion_date: null,
        apheresis_id: '',
        facility_id: '',
        infusion_dates: [],
      },
      items: {
        aph_time: '',
        plant_id: '',
        infusion_delivery_time: '',
        infusionTimeList: [],
        aphTimeList: [],
        plantList: []
      },
      columns,
      // columnsCalendar,
    };
  },
  mounted () {
    //解析前台传过来的对象
    var list = decodeURIComponent(this.$route.params.data);
    var res = JSON.parse(list);
    // console.log("data:", res);
    this.data = res.resultInfo;
    const queryMap_x = res.queryMap;
    // console.log("data:", this.data);
    // console.log("queryMap_x:", queryMap_x);
    const infusion_dates_x = [];
    //从查询结果获取各种参数
    this.data.forEach(function (val) {
      infusion_dates_x.push(val.infusionDate);
    });

    this.queryMap.infusion_date = queryMap_x.infusion_date;
    this.queryMap.infusion_id = queryMap_x.infusion_id;
    this.queryMap.apheresis_id = queryMap_x.apheresis_id;
    this.queryMap.facility_id = queryMap_x.facility_id;
    this.queryMap.infusion_dates = infusion_dates_x;

    // console.log("queryMap:", this.queryMap);

    this.getCalendarViews();
    this.updateIntervalPeriod();
  },
  methods: {
    updateIntervalPeriod () {
      for (var i = 0; i < this.data.length; i++) {
        if (i == 0) {
          this.data[i].intervalPeriod = 0;
        } else {
          var at = this.moment(this.data[i - 1].infusionDate);
          var to = this.moment(this.data[i].infusionDate);
          this.data[i].intervalPeriod = this.moment(to).diff(at, 'day');
        }
      }
    },
    changeDate (str) {
      // this.$message.success(str);
      if (this.index < 0) {
        this.$message.error('请先选择疗程');
        return;
      }
      var old_date_str = this.data[this.index].infusionDate;
      var new_date_str = str;

      var at = this.moment(old_date_str);
      var to = this.moment(new_date_str);
      var _diff = this.moment(to).diff(at, 'day');
      if (_diff > 3 || _diff < -3) {
        this.$message.error('选择的回输日期与疗程中的日期差异不能超过3天');
        return;
      }

      this.queryMap.old_infusion_date = this.data[this.index].infusionDate;
      this.queryMap.new_infusion_date = str;
      this.getResource();
    },
    async getResource () {
      console.log("this.queryMap", this.queryMap);
      const res = await this.$http.post('/capacity/getResource', this.queryMap);
      if (res.code != "2000") {
        this.$message.error(res.message);
        return;
      }
      // console.log("res.resultInfo:", res.result.resultInfo);
      // console.log("res.queryMap:", res.result.queryMap);

      this.data[this.index] = res.result.resultInfo;
      this.calendarViews = res.result.calendarViews;

      this.queryMap.new_infusion_date = null;
      this.queryMap.old_infusion_date = null;
      this.rowSelection.selectedRows = [];
      this.rowSelection.selectedRowKeys = [];
      this.index = -1;
      this.items = {
        aph_time: '',
        plant_id: '',
        infusion_delivery_time: '',
        infusionTimeList: [],
        aphTimeList: [],
        plantList: []
      };

      this.updateIntervalPeriod();
    },
    async getCalendarViews () {
      const res = await this.$http.post('/capacity/getCalendarViews', this.queryMap);
      this.calendarViews = res.result;
    },
    changeValue (str, value, description) {
      // console.log(this.index);
      if (str == "aph_time") {
        this.data[this.index].apheresisTime = value;
      }
      if (str == "plant_id") {
        this.data[this.index].plantId = value;
        this.data[this.index].plant = description;
      }
      if (str == "infusion_delivery_time") {
        this.data[this.index].infusionDeliveryTime = value;
      }
    },
    radionChange (selectedRowKeys, selectedRows) {
      // console.log("数据1：", selectedRows);
      // console.log("数据2：", selectedRowKeys);
      this.rowSelection.selectedRows = [];
      this.rowSelection.selectedRowKeys = [];
      this.index = -1;
      this.rowSelection.selectedRows = selectedRows;
      this.rowSelection.selectedRowKeys = selectedRowKeys;
      this.index = Number(selectedRowKeys[0]);

      this.chooseItems(this.index);
    },
    chooseItems (_index) {
      console.log("_index:", _index);
      const items_x = {
        aph_time: this.data[_index].apheresisTime,
        plant_id: this.data[_index].plantId,
        infusion_delivery_time: this.data[_index].infusionDeliveryTime,

        infusionTimeList: this.data[_index].itemMap.infusionTimeList,
        aphTimeList: this.data[_index].itemMap.aphTimeList,
        plantList: this.data[_index].itemMap.plantList,
      };
      this.items = items_x;
    },
    onClickRow (record, index) {
      return {
        on: {
          click: () => {
            this.rowSelection.selectedRows = [];
            this.rowSelection.selectedRowKeys = [];
            this.index = -1;
            this.rowSelection.selectedRows.push(this.data[index]);
            this.rowSelection.selectedRowKeys.push(index);
            this.index = index;
            this.chooseItems(this.index);
          }
        }
      }

    }
  },
};
</script>
<style scoped>
.calendar_green {
  background-color: #00ffc0;
}
.calendar_red {
  background-color: #c00000;
}
.calendar_black {
  background-color: #cccccc;
}
.button {
  margin: 5px 10px;
}
.chooseItem {
  border: 1px solid;
  height: 30%;
  margin: 5px 5px;
}
.a-page-header {
  border: 1px solid;
  background: gray;
}
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
  margin: 80px 3px 3px 3px;
}
.schedulingList {
  border: 1px solid;
  margin: 3px 3px;
}
</style>