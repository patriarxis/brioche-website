<template>
  <section id="menu">
    <div id="menu-container">
      <h1>Menu</h1>
      <div id="category">
        <ul>
          <li>
            <i class="material-icons">
              phone
            </i>
            <span>Coffee</span>
          </li>
          <li>
            <i class="material-icons">
              phone
            </i>
            <span>Coffee</span>
          </li>
          <li>
            <i class="material-icons">
              phone
            </i>
            <span>Coffee</span>
          </li>
          <li>
            <i class="material-icons">
              menu
            </i>
            <span>Coffee</span>
          </li>
          <li>
            <i class="material-icons">
              menu
            </i>
            <span>Coffee</span>
          </li>
          <li>
            <i class="material-icons">
              menu
            </i>
            <span>Coffee</span>
          </li>
        </ul>
        <div class="vl"></div>
      </div>
      <div id="menu-display">
        <ul>
          <li>skr</li>
          <li>skr</li>
          <li>skr</li>
          <li>skr</li>
          <li>skr</li>
          <li>skr</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

#menu {
  display: grid;
  place-items: center;

  #menu-container {
    display: grid;
    grid-template-rows: 15% 70% 15%;
    place-items: center;

    width: 100%;
    height: 100%;

    h1 {
      font-size: $font-size * 5;
    }

    #category {
      position: absolute;
      left: 10%;

      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 30px;
      place-items: center;

      ul {
        width: 13vw;

        li {
          display: grid;
          grid-template-columns: 25% 75%;
          place-items: center start;

          padding: 10px 0 10px 10px;
          border-radius: 5px;

          cursor: pointer;

          transition: .2s ease;

          i {
            font-size: $font-size * 1.6;

            transition: .2s ease;
          }

          &:hover {
            background-color: $primary-color;
            color: $secondary-color;

            padding: 15px 0 15px 30px;
          }

          &:hover img {
            width: 25px;
            height: 25px;
          }
        }
      }

      .vl {
        width: 1px;
        height: 300px;
        background-color: $primary-color;
      }
    }
  }
}
</style>
