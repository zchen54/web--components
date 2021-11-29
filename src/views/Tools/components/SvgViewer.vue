<template>
  <section>
    <h5 class="sub-title">svg图标预览</h5>
    <div class="img-list flex flex-wrap align-center">
      <div v-for="(item, index) in assetsImages" :key="index" class="item" @click="copyName(item.fileName)">
        <img :size="100" :src="item.src" />
        <div class="item-name flex flex-center">{{ item.fileName }}</div>
      </div>
    </div>
  </section>
</template>

<script>
function copyToClip(content, callback = () => {}) {
  const aux = document.createElement('input')
  aux.setAttribute('value', content)
  document.body.appendChild(aux)
  aux.select()
  document.execCommand('copy')
  document.body.removeChild(aux)
  callback()
}

export default {
  layout: () => {
    return 'HomeLayout'
  },
  data() {
    const requireImgs = require.context('../img', true, /\.jpg|\.gif|\.png|\.svg$/)
    const assetsImages = []
    requireImgs.keys().forEach((fileName) => {
      const fullName = fileName.substr(fileName.lastIndexOf('/') + 1)
      const shortName = fullName.split('.')[0]
      assetsImages.push({ src: requireImgs(fileName), path: requireImgs(fileName), fileName: fullName, name: shortName })
    })
    return {
      assetsImages,
    }
  },
  methods: {
    copyName(name) {
      copyToClip(name, () => {
        this.$message.success('复制成功')
      })
    },
  },
}
</script>

<style scoped lang="less">
.img-list {
  padding: 15px;
  .item {
    width: 10%;
    cursor: pointer;
    img {
      display: block;
      width: 75%;
      margin: 10px auto;
    }
    .item-name {
      padding: 0 10px;
      height: 40px;
      line-height: 20px;
      text-align: center;
      word-break: break-all;
      word-wrap: break-word;
      font-size: 12px;
      color: #333;
    }

    &:hover {
      border: 1px solid fade(#2c6eff, 80%);
      .item-name {
        color: #fff;
        background: fade(#2c6eff, 80%);
      }
    }
  }
}
</style>
