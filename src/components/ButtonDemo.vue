<template>
  <div>
    <Button @click="onClick">按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/ButtonProp.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("w233");
    };
    return { onClick };
  },
};
</script>