<template>
  <section id="header">
      <span>BRIOCHE</span>
      <nav>
        <router-link to="/">Home </router-link>
        <router-link to="/delivery">Delivery </router-link>
        <router-link to="/menu">Menu </router-link>
        <router-link to="/info">Info </router-link>
      </nav>
    </section>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

#header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  span {
    position: relative;
    justify-self: start;
    left: $position * 2;

    font-size: $font-size * 2;
    font-weight: 900;

    cursor: pointer;
  }

  nav {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 90px;

    position: relative;
    justify-self: end;
    right: $position * 2;

    a {
      font-size: $font-size * 1.1;
      letter-spacing: 1px;
      &.router-link-exact-active {
        color: #df8715;
      }
    }
  }
}
</style>
