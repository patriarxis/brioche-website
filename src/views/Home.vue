<template>
  <section id="home">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ msg }}</p>
    </div>
    <img src="../assets/illustrations/home.svg" alt="">
  </section>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    title: 'Lorem ipsum',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel justo lectus. Quisque massa eros, feugiat vel iaculis a, interdum vitae enim. Sed quis neque at nisi scelerisque aliquam id eget quam. Aliquam aliquam eros vel libero vehicula dignissim. Proin id est quis ante tempor vehicula vitae ut dolor. Vestibulum elit dui, vulputate sit amet ullamcorper eget, iaculis fermentum urna.'
  })
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

  #home {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center start;
    height: 100%;
    div {
      position: relative;
      left: $position * 2;

      display: grid;
      grid-gap: 20px;
      width: 80%;

      h1 {
        font-size: $font-size * 5;
        font-weight: 900;
      }

      p {
        font-size: $font-size * 1.2;
      }
    }

    img {
      place-self: center;
      width: 70%;
      height: 70%;
    }
  }
</style>
