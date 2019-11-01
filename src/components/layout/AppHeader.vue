<template>
  <section id="header">
      <span>BRIOCHE</span>
      <nav>
        <router-link to="/">Home </router-link>
        <router-link to="/menu">Menu </router-link>
        <router-link to="/delivery">Delivery </router-link>
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

    font-size: $font-size * 1.8;
    font-weight: 900;

    cursor: pointer;
  }

  nav {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    place-items: center;

    position: relative;
    justify-self: end;
    right: $position * 2;

    a {
      padding: 8px 15px;
      border-radius: 5px;

      font-size: $font-size * 1.1;
      letter-spacing: 1px;

      transition: .2s ease;

      &:hover {
        box-shadow: 0 5px 10px rgba(black, 0.15);
        padding: 13px 20px;
        font-size: $font-size * 1.3;
      }

      &.router-link-exact-active {
        background-color: $primary-color;
        color: $secondary-color;
      }
    }
  }
}
</style>
