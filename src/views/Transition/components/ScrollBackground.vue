<template>
  <section>
    <h5 class="sub-title">滚动背景</h5>

    <section class="section-wrap">
      <div class="section-wrap-bg"></div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'ScrollBackground',
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.section-wrap {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #EBEFF6;
  .section-wrap-bg {
    position: absolute;
    z-index: 0;
    top:0;
    left:0;
    width: 100%;
    height: 1200px;
    background: url("../img/home_bg3.png") repeat-y;
    -webkit-animation: scoll 60s linear 0s infinite;
  }
  .section-content {
    position: relative;
    z-index: 1;
  }
}

@-webkit-keyframes scoll{
  from{
      top: 0;
  }
  to{
      top: -1080px;
  }
}
</style>
