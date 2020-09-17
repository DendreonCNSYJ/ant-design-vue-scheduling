<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="less"></style>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      message: 'hello world',
    }
  },
  methods: {
    test (val) {
      // eslint-disable-next-line no-console
      console.log('handleDelete', val)
    },
  },
}
</script>
