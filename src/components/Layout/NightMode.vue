<template>
  <div class="nightmode text-center">
    <div class="col-3 col-sm-3 text-center">
      <q-btn size="100%" flat round>

        <!-- External design for nightmode -->
        <q-icon :color="color" name="brightness_4" @click="changeMode" />

      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NightMode',
  data () {
    return {
      color: ''
    }
  },
  mounted () {
    this.checkMode()
  },
  watch: {
    '$q.dark.isActive' (val) {
      this.checkMode()
    }
  },
  methods: {
    changeMode () {
      this.$q.dark.toggle()
      this.checkMode()
    },
    checkMode () {
      if (this.$q.dark.isActive) {
        this.color = 'white'
      } else {
        this.color = 'black'
      }
    }
  }
}
</script>
