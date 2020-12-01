<template>
  <div>Button 实例</div>
  <h1>示例1</h1>
  <div>
    <Button>Hola</Button>
    <Button theme="button">Hola</Button>
    <Button theme="link">Hola</Button>
    <Button theme="text">Hola</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通通</Button>
    <Button size="small">小小小</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <dir>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </dir>
    <dir>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </dir>
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