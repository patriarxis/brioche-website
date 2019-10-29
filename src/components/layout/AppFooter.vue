<template>
  <footer>
      <div id="social">
          <img src="#" alt="">
          <img src="#" alt="">
      </div>
      <div id="support">
          <img src="#" alt="">
          <span>example@email.com</span>
      </div>
      <hr>
      <span id="copywrite">All rights reserved</span>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

footer {
  justify-self: center;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1px 1fr;

  width: 100% - 2 * $position;

  #social {
      justify-self: start;
  }

  #support {
      justify-self: end;
  }

  hr {
      grid-area: 2 / 1 / 2 / 3;

      border: none;
      border-top: 1px dashed $color;
  }

  #copywrite {
      grid-area: 3 / 2 / 3 / 3;
      justify-self: end;
  }
}
</style>
