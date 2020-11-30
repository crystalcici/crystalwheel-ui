<template>
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