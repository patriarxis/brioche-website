<template>
    <section id="info">
        <div id="start">
            <a class="info-element" :href="element.href" :target="element.target"
            v-bind:key="element.id"
            v-for="element in elements"
            @mouseover="hover = true"
            @mouseleave="hover = false" >
                <img src="" alt="">
                <h4>{{ element.title }}</h4>
                <span>{{ element.description }}</span>
            </a>

            <transition name="fade">
              <div id="background" v-if="hover"></div>
            </transition>
        </div>
        <img id="info-img" src="../assets/illustrations/info.svg" alt="">
    </section>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      hover: false,
      elements: [
        {
          id: 1,
          title: 'Address',
          description: 'Address',
          href: '#',
          target: '_blank'
        },
        {
          id: 2,
          title: 'Email',
          description: 'Email',
          href: '',
          target: ''
        },
        {
          id: 3,
          title: 'Phone number',
          description: 'Phone number',
          href: '',
          target: ''
        },
        {
          id: 4,
          title: 'Schedule',
          description: 'Schedule',
          href: '',
          target: ''
        },
        {
          id: 5,
          title: 'Facebook',
          description: 'Facebook',
          href: '#',
          target: '_blank'
        },
        {
          id: 6,
          title: 'Instagram',
          description: 'Instagram',
          href: '#',
          target: '_blank'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

#info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center start;
  height: 100%;

  #start {
    position: relative;
    left: $position * 2;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 50px;

    .info-element {
      display: grid;
      place-items: center;

      height: 150px;
      width: 200px;

      padding: 15px 0;

      cursor: pointer;

      border-radius: 10px;

      transition: .2s ease;

      img {
        height: 70px;
        width: 70px;
      }

      h4 {
        transition: inherit;
      }

      span {
        font-size: $font-size * 1;
        transition: inherit;
      }

      &:hover {
        background-color: $primary-color;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);

        z-index: 10;
      }

      &:hover > h4 {
        color: $secondary-color;
      }

      &:hover > span {
        color: $secondary-color;
      }
    }

    .fade-enter-active, .fade-leave-active {
      transition: .15s ease;
    }

    .fade-enter, .fade-leave-to {
      opacity: 0;
    }

    #background {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 5;

      height: 100vh;
      width: 100vw;

      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  #info-img {
    position: relative;
    top: -50px;
    place-self: center;
    width: 700px;
    height: 700px;
  }
}
</style>
