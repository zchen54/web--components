<template>
  <section>
    <h5 class="sub-title">标签页</h5>
    <div class="tabs flex relative">
      <div
        v-for="(item, index) in solutionList"
        class="tab-item"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ item }}
      </div>
      <div class="tab-active" :style="`left: calc(100px * ${activeTab});`"></div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      solutionList: ['Tab 1', 'Tab 2', 'Tab 3'],
      activeTab: 0,
    }
  },
  created() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.tabs {
  .tab-item {
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: #333;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    &:hover,
    &.active {
      color: @color_primary;
    }
  }
  .tab-active {
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 3px;
    transition: all 0.15s ease-in-out 0s;
    background-color: @color_primary;
  }
}
</style>
