<template>
  <div>Button 实例</div>
  <h1>示例1</h1>
  <div>
    <Button>Hola</Button>
    <Button theme="button">Hola</Button>
    <Button theme="link">Hola</Button>
    <Button theme="text">Hola</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/ButtonProp.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style lang="scss" scoped>
</style>