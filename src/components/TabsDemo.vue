<template>
<Tabs v-model:selected="x">
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
</Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/TabsProp.vue'
import Tab from '../lib/TabProp.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('导航1')
    return {
      x
    }
  }
}
</script>