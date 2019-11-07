<template>
  <div>
    <Address v-if="id === 1" />
    <Email v-if="id === 2" />
    <Phone v-if="id === 3" />
    <Calendar v-if="id === 4" />
    <Facebook v-if="id === 5" />
    <Instagram v-if="id === 6" />
  </div>
</template>

<script>
import Address from '../../assets/items/Address.vue'
import Email from '../../assets/items/Email.vue'
import Phone from '../../assets/items/Phone.vue'
import Calendar from '../../assets/items/Calendar.vue'
import Facebook from '../../assets/items/Facebook.vue'
import Instagram from '../../assets/items/Instagram.vue'

export default {
  name: 'InfoElementImg',
  props: ['id'],
  components: {
    Address,
    Email,
    Phone,
    Calendar,
    Facebook,
    Instagram
  }
}
</script>

<style lang="scss" scoped>
</style>
