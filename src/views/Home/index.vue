<template>
  <div class="home-container">
    <section id="Colors">
      <h3>Colors</h3>
      <Colors></Colors>
    </section>

    <section id="Elements">
      <h3>Elements</h3>
      <Elements></Elements>
    </section>

    <section id="Transition">
      <h3>Transition</h3>
      <Transition></Transition>
    </section>

    <section id="Tools">
      <h3>Tools</h3>
      <Tools></Tools>
    </section>
  </div>
</template>

<script>
import Colors from '../Colors'
import Elements from '../Elements'
import Tools from '../Tools'
import Transition from '../Transition'

export default {
  components: { Colors, Elements, Tools, Transition },
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.home-container {
  width: 100%;
  max-width: 1260px;
  padding: 0 30px;
  margin: 0 auto;
}
</style>
