<template>
  <div>
    <a-page-header class="a-page-header" title="日历" />
    <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onPanelChange (value, mode) {
      console.log(value, mode);
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