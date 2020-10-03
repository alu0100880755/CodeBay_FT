<template>
  <div class="language">
    <q-select
      v-model="lang"
      :options="langOptions"
      :label="$t('language')"
      dense
      borderless
      emit-value
      map-options
      options-dense
      style="min-width: 150px"
    />
  </div>
</template>

<script>
export default {
  name: 'Language',
  data () {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'es-ES', label: 'Español' },
        { value: 'en-US', label: 'English' }
      ]
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style>

.language{
  color: white;
  font-weight: bold;
}

</style>
