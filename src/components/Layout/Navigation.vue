<template>
  <div class="q-pa-md">
    <q-toolbar class="shadow-2">
      <q-btn flat label="CodeBay" />
      <q-space />

      <!-- Standard navigation bar -->
      <div class="standard_nav" v-if="$q.platform.is.desktop">
        <q-tabs v-model="tab" shrink>
          <q-route-tab name="tab1" :label="$t('home')" to="/home" />
          <q-route-tab name="tab2" :label="$t('event')" to="/event" />
          <q-route-tab name="tab3" :label="$t('accesories')" to="/accesories" />
          <q-route-tab name="tab4" :label="$t('apparel')" to="/apparel" />
          <q-route-tab name="tab5" :label="$t('featured')" to="/featured" />
        </q-tabs>
      </div>

      <!-- Mobile navigation bar -->
      <div class="mobile_nav" v-if="$q.platform.is.mobile" >
        <q-select v-model="model" :options="tabs" />
      </div>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      tab: '',
      model: this.$t(this.$route.path.slice(1)),
      tabs: [
        this.$t('home'),
        this.$t('event'),
        this.$t('accesories'),
        this.$t('apparel'),
        this.$t('featured')
      ]
    }
  },
  watch: {
    '$i18n.locale' (val) {
      if (this.$q.platform.is.mobile) {
        this.model = this.$t(this.$route.path.slice(1))
        this.tabs = [this.$t('home'), this.$t('event'), this.$t('accesories'), this.$t('apparel'), this.$t('featured')]
      }
    }
  },
  updated () {
    if (this.$q.platform.is.mobile) {
      this.$router.push(this.transformModel(this.model))
    }
  },
  methods: {
    transformModel (model) {
      switch (model) {
        case this.$t('home'): return 'home'
        case this.$t('event'): return 'event'
        case this.$t('accesories'): return 'accesories'
        case this.$t('apparel'): return 'apparel'
        case this.$t('featured'): return 'featured'
      }
    }
  }
}
</script>
