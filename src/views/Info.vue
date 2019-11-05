<template>
    <section id="info">
        <div id="start">
            <a class="info-element" :href="element.href" :target="element.target"
            v-bind:key="element.id"
            v-for="element in elements"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            v-on:click="activate(element)" >
                <img src="" alt="">
                <h4>{{ element.title }}</h4>
                <span>{{ element.description }}</span>

                <img src="" alt="" id="link" v-if="element.isLink">
            </a>

            <transition name="fade">
              <div id="background" v-if="hover || active" v-on:click="deactivate"></div>
            </transition>

            <transition name="fade">
              <div id="schedule-container" class="pop-up" v-if="elements[3].show">
                <div id="title">
                  <h2>Schedule</h2>
                  <span>{{ schedule.month }} {{ schedule.year }}</span>
                </div>
                <Schedule/>
                <img src="" alt="" class="close-container" v-on:click="deactivate">
              </div>
            </transition>

            <transition name="fade">
              <div id="contact" class="pop-up" v-if="elements[1].show || elements[2].show">
                <h2>Contact</h2>
                <div>
                  <img src="" alt="">
                  <span>{{ elements[1].description }}</span>
                </div>
                <div>
                  <img src="" alt="">
                  <span>{{ elements[2].description }}</span>
                </div>
                <img src="" alt="" class="close-container" v-on:click="deactivate">
              </div>
            </transition>
        </div>
        <img id="info-img" src="../assets/illustrations/info.svg" alt="">
    </section>
</template>

<script>
import Schedule from '../components/ui/Schedule.vue'

export default {
  name: 'Info',
  components: {
    Schedule
  },
  data () {
    return {
      hover: false,
      active: false,
      elements: [
        {
          id: 1,
          title: 'Address',
          description: 'Address',
          href: '#',
          target: '_blank',
          isLink: true
        },
        {
          id: 2,
          title: 'Email',
          description: 'Email',
          href: '#start',
          target: '',
          isLink: false,
          show: false
        },
        {
          id: 3,
          title: 'Phone number',
          description: 'Phone number',
          href: '#start',
          target: '',
          isLink: false,
          show: false
        },
        {
          id: 4,
          title: 'Schedule',
          description: 'Schedule',
          href: '#start',
          target: '',
          isLink: false,
          show: false
        },
        {
          id: 5,
          title: 'Facebook',
          description: 'Facebook',
          href: '#',
          target: '_blank',
          isLink: true
        },
        {
          id: 6,
          title: 'Instagram',
          description: 'Instagram',
          href: '#',
          target: '_blank',
          isLink: true
        }
      ],
      schedule: {
        month: getCurrentMonth(),
        year: date.getFullYear()
      }
    }
  },
  methods: {
    activate: function (element) {
      if (!element.isLink) {
        this.active = true
        element.show = true
      }
    },
    deactivate: function (event) {
      this.active = false
      this.elements[1].show = false
      this.elements[2].show = false
      this.elements[3].show = false
    }
  }
}

var date = new Date()

function getCurrentMonth () {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return monthNames[date.getMonth()]
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
      position: relative;
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

      #link {
        position: absolute;
        top: 10%;
        right: 10%;

        width: 20px;
        height: 20px;
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

    .pop-up {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;

      width: 600px;
      height: 400px;

      border-radius: 20px;

      background: $primary-color;

      color: $secondary-color;
    }

    #schedule-container {
      display: grid;
      place-items: center;

      #title {
        display: grid;
        grid-gap: 10px;
        place-items: center;
      }
    }

    #contact {
      display: grid;
      place-items: center;

      padding: 30px 100px 100px 100px;

      h2 {
        font-size: $font-size * 2;
      }

      div {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 20px;

        img {
          place-self: center;
          width: 20px;
          height: 20px;
        }
      }
    }

    .close-container {
        position: absolute;
        top: 20px;
        right: 20px;

        width: 30px;
        height: 30px;

        cursor: pointer;
      }
  }

  #info-img {
    position: relative;
    top: -50px;
    place-self: center;
    width: 70%;
    height: 70%;
  }
}
</style>
