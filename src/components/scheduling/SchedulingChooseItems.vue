<template>
  <div class="a-radio-group">
    <a-row>
      <a-col :span="7" class="chooseItem">
        采血点
        <a-row>
          <a-radio-group v-model="items.aph_time" @change="onChange('aph_time',$event)">
            <a-radio v-for='(item) in items.aphTimeList' :style="radioStyle" :key='item.value' :value='item.value'>
              {{item.description}}
            </a-radio>
          </a-radio-group>
        </a-row>
      </a-col>

      <a-col :span="7" class="chooseItem">
        工厂
        <a-row>
          <a-radio-group v-model="items.plant_id" @change="onChange('plant_id',$event)">
            <a-radio v-for='(item) in items.plantList' :style="radioStyle" :key='item.value' :value='item.value'>
              {{item.description}}
            </a-radio>
          </a-radio-group>
        </a-row>
      </a-col>

      <a-col :span="7" class="chooseItem">
        回输交货时间
        <a-row>
          <a-radio-group v-model="items.infusion_delivery_time" @change="onChange('infusion_delivery_time',$event)">
            <a-radio v-for='(item) in items.infusionTimeList' :style="radioStyle" :key='item.value' :value='item.value'>
              {{item.description}}
            </a-radio>
          </a-radio-group>
        </a-row>
      </a-col>

    </a-row>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      aph_time: '',
      plant_id: '',
      infusion_delivery_time: '',

      aphTimeList: [],
      plantList: [],
      infusionTimeList: [],
    }
  },
  data () {
    return {
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
    };
  },
  methods: {
    onChange (str, e) {
      var _value = e.target.value;
      var _description;
      if (str == "aph_time") {
        this.items.aphTimeList.forEach(function (val) {
          if (val.value == _value) {
            _description = val.description;
          }
        });
      }
      if (str == "plant_id") {
        this.items.plantList.forEach(function (val) {
          if (val.value == _value) {
            _description = val.description;
          }
        });
      }
      if (str == "infusion_delivery_time") {
        this.items.infusionTimeList.forEach(function (val) {
          if (val.value == _value) {
            _description = val.description;
          }
        });
      }

      this.$emit('itemChanged', str, _value, _description);
    },
  },
};
</script>
<style scoped>
.a-radio-group {
  border: 0px;
  margin: 10px 10px;
}
.chooseItem {
  /* border: 1px solid; */
  height: 30%;
  margin: 5px 5px;
}
</style>