<template>
  <div>导航栏 | <router-link to="/">wheel</router-link> | <router-link to="/wheel2">wheel2</router-link></div>
  <hr/>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
