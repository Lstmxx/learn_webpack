// src/App.vue
<template>
  <div class="App">
    Hello World???????
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.App {
  color: skyblue;
}
</style>
