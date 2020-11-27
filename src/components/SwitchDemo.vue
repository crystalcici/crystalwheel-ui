<template>
  <div>
    <Switch :value="y" @input="y = $event" />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/SwitchProp.vue";

export default {
  components: { Switch },
  setup() {
    const y = ref(true);
    return { y };
  },
};
</script>
