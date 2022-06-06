<template>
  <navbar-vue/>
  <div>   </div>
  <router-view></router-view>

</template>

<script>

import navbarVue from './components/navbar.vue'

export default {
  name: 'App',
  components: {navbarVue,},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
