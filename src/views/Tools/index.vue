<template>
  <div>
    <template v-for="item in components">
      <component :is="item" :key="item" />
    </template>
  </div>
</template>
<script>
import Components from './components'

export default {
  components: { ...Components },
  data() {
    return {
      components: Object.keys(Components),
    }
  },
  created() {},
  methods: {},
}
</script>
<style lang="less" scoped></style>
