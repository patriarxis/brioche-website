<template>
  <footer>
      <div id="social">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Instagram />
          </a>
      </div>
      <div id="support">
            <div>
                <Phone />
                <span>303020202000</span>
            </div>
            <div>
                <Email />
                <span>example@email.com</span>
            </div>
      </div>
      <hr>
      <span id="copywrite">All rights reserved</span>
  </footer>
</template>

<script>
import Facebook from '../../../src/assets/items/Facebook.vue'
import Instagram from '../../../src/assets/items/Instagram.vue'
import Phone from '../../../src/assets/items/Phone.vue'
import Email from '../../../src/assets/items/Email.vue'

export default {
  name: 'AppFooter',
  components: {
    Facebook,
    Instagram,
    Phone,
    Email
  }
}
</script>

<style lang="scss">
@import "../../styles/_variables.scss";

footer {
  justify-self: center;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1px 1fr;
  align-items: center;

  width: 100% - 2 * $position;

  #social {
      justify-self: start;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5px;
      align-items: center;

      width: 10%;

      a {
        position: relative;
        padding: 8px 10px;
        border-radius: 7px;

        top: 0;
        transition: .2s ease;

        &:first-of-type {
            justify-self: end;
        }

        &:last-of-type {
            justify-self: start;
        }

        svg {
            height: 20px;
            width: 20px;

            pointer-events: none;

            transition: .2s ease;

            .st0 {
                transition: inherit;
            }
        }

        &:hover {
            box-shadow: 0 5px 10px rgba(black, 0.15);
            top: -5px;
            background-color: $primary-color;
        }

        &:hover > svg {
            height: 30px;
            width: 30px;
        }

        &:hover > svg > .st0 {
            fill: $secondary-color;
        }
      }
    }

  #support {
      justify-self: end;

      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 30px;

      font-size: $font-size * 0.8;
      letter-spacing: 2px;

      div {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px;
        align-items: center;

        svg {
          height: 20px;
          width: 20px;
        }

        span {
            user-select: text;
        }
      }
  }

  hr {
      grid-area: 2 / 1 / 2 / 3;

      border: none;
      border-top: 1px dashed $primary-color;
  }

  #copywrite {
      grid-area: 3 / 2 / 3 / 3;
      justify-self: end;

      font-size: $font-size * 0.7;
      letter-spacing: 3px;
  }
}

@media only screen and (max-width: 1050px) {
  footer {
    #social {
      a {
        svg {
          height: 15px;
          width: 15px;
        }

        &:hover > svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
}

</style>
