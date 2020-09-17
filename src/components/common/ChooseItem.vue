<template>
  <div class="a-radio-group">
    <a-radio-group v-model="value" @change="onChange">
      <a-radio :style="radioStyle" :key='item.value' :value='item.value' v-for='(item) in itemMap'>
        {{item.description}}
      </a-radio>

      <!-- <a-radio :style="radioStyle" :value="1">
      Option A
    </a-radio>
    <a-radio :style="radioStyle" :value="2">
      Option B
    </a-radio>
    <a-radio :style="radioStyle" :value="3">
      Option C
    </a-radio> -->
      <!-- <a-radio :style="radioStyle" :value="4">
      More...
      <a-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
    </a-radio> -->
    </a-radio-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: 1,
      itemMap: [{
        value: 1,
        description: "Option A"
      }, {
        value: 2,
        description: "Option B"
      }, {
        value: 3,
        description: "Option C"
      }],
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
    };
  },
  methods: {
    onChange (e) {
      console.log('radio checked', e.target.value);
    },
  },
};
</script>
<style scoped>
.a-radio-group {
  border: 0px;
  margin: 10px 10px;
}
</style>