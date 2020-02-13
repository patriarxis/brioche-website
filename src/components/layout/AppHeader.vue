<template>
  <section id="header">
    <img src="" alt="" @click="showNav()">
    <span>BRIOCHE</span>
    <div :class="{ 'show': isVisible }">
      <nav>
        <router-link to="/">Home </router-link>
        <router-link to="/menu">Menu </router-link>
        <router-link to="/delivery">Delivery </router-link>
        <router-link to="/info">Info </router-link>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      isVisible: false
    }
  },
  method: {
    showNav: function () {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

#header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  img {
    display: none;
  }

  span {
    position: relative;
    justify-self: start;
    left: $position * 2;

    font-size: $font-size * 1.8;
    font-weight: 900;

    cursor: pointer;
  }

  div {
    position: relative;
    justify-self: end;
    right: $position * 2;

    nav {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 10px;
      place-items: center;

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
}

@media only screen and (max-width: 768px) {
  #header {
    display: block;

    img {
      position: relative;
      top: 50%;
      left: 18px;
      transform: translate(0, -50%);
      z-index: 10;

      display: block;
      height: 20px;
      width: 20px;
      background: $primary-color;

      cursor: pointer;
    }

    span {
      display: none;
    }

    div {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 5;

      display: none;
      place-items: center;

      background-color: $secondary-color;
      width: 100vw;
      height: 100vh;

      nav {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
        grid-gap: 40px;

        a {
          display: grid;
          place-items: center;

          font-size: $font-size * 1.8;
          padding: 0;
          width: 250px;
          height: 50px;

          &:hover {
            box-shadow: none;
            padding: 0;
            font-size: $font-size * 1.8;
          }

          &:active {
            opacity: 0.6;
          }

          &.router-link-exact-active {
            background-color: transparent;
            color: $primary-color;;
          }
        }
      }
    }

    .show {
      display: grid;
    }
  }
}
</style>
