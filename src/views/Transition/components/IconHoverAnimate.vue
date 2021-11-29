<template>
  <section>
    <h5 class="sub-title">图标动效</h5>

    <div class="flex">
      <div class="prod-item">
        <div class="prod-icon" id="prod1" :style="{ 'background-image': 'url(' + require('../img/prod_icon_bg.png') + ')' }"></div>
      </div>
      <div class="prod-item">
        <div class="prod-icon" id="prod2" :style="{ 'background-image': 'url(' + require('../img/prod_icon_bg2.png') + ')' }"></div>
      </div>
      <div class="prod-item">
        <div class="prod-icon" id="prod3" :style="{ 'background-image': 'url(' + require('../img/prod_icon_bg.png') + ')' }"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      timerIn: {},
      timerOut: {},
    }
  },
  mounted() {
    const elements = document.querySelectorAll('.prod-item')
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index]
      element.addEventListener('mouseenter', this.prodMouseEnter)
      element.addEventListener('mouseleave', this.prodMouseLeave)
    }
  },
  unmounted() {
    this.timerIn = {}
    this.timerOut = {}
  },
  methods: {
    prodMouseEnter(event) {
      let ele = event.target.querySelector('.prod-icon')
      this.moveBgIntervalIn(ele)
    },
    prodMouseLeave(event) {
      let ele = event.target.querySelector('.prod-icon')
      this.moveBgIntervalOut(ele)
    },
    moveBgIntervalIn(ele) {
      this.timerOut[ele.id] && clearInterval(this.timerOut[ele.id])
      if (isNaN(parseInt(ele.style.backgroundPositionY))) {
        ele.style.backgroundPositionY = '-64px'
      } else {
        ele.style.backgroundPositionY = parseInt(ele.style.backgroundPositionY) - 64 + 'px'
      }
      this.timerIn[ele.id] = setInterval(() => {
        ele.style.backgroundPositionY = parseInt(ele.style.backgroundPositionY) - 64 + 'px'
        if (parseInt(ele.style.backgroundPositionY) <= -1280) {
          ele.style.backgroundPositionY = '-1280px'
          clearInterval(this.timerIn[ele.id])
        }
      }, 50)
    },
    moveBgIntervalOut(ele) {
      this.timerIn[ele.id] && clearInterval(this.timerIn[ele.id])
      if (isNaN(parseInt(ele.style.backgroundPositionY))) {
        ele.style.backgroundPositionY = '-1280px'
      } else {
        ele.style.backgroundPositionY = parseInt(ele.style.backgroundPositionY) + 64 + 'px'
      }
      this.timerOut[ele.id] = setInterval(() => {
        ele.style.backgroundPositionY = parseInt(ele.style.backgroundPositionY) + 64 + 'px'
        if (parseInt(ele.style.backgroundPositionY) >= 0) {
          clearInterval(this.timerOut[ele.id])
          ele.style.backgroundPositionY = '0'
        }
      }, 50)
    },
  },
}
</script>
<style lang="less" scoped>
.prod-item {
  padding: 20px;
  margin: 0 20px;
  cursor: pointer;
  transition: all linear 0.3s;
  border: 1px solid #fff;

  &:hover {
    border: 1px solid orange;
  }

  .prod-icon {
    margin: 0 auto;
    width: 64px;
    height: 64px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100%;
    background-position-y: 0;
  }
}
</style>
