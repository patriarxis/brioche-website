<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import "./styles/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: $primary-color;
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  background: none;
  border: none;
}

html, body {
  user-select: none;
  min-height: 920px;
  height: 100vh;
  max-width: 2000px;
}

body {
  background: url("./assets/backgrounds/home.svg") no-repeat center;
  background-size: cover;
}

#app {
  display: grid;
  grid-template-rows: 100px auto 100px;
  min-height: inherit;
  height: inherit;
  max-width: inherit;
  margin: auto;

  color: $primary-color;
}
</style>
