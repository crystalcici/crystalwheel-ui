<template>
   <div>
   <Topnav/>
    <div class="banner">
      <h1>crystalUI</h1>
      <h2>一个基于TS+Vue3的轮子学习</h2>
      <p class="actions">
        <a>Github</a>
        <a>开始</a>
      </p>
    </div>
   </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav
  }
}
</script>
<style lang="scss" scoped>
</style>