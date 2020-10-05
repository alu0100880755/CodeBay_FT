<template>
  <div class="language">

    <!-- External design for language selector -->
    <q-select
      v-model="lang"
      :options="langOptions"
      :label="$t('language')"
      dense
      borderless
      emit-value
      map-options
      options-dense
      style="min-width: 105%"
    >

      <!-- Language icon -->
      <template v-slot:before>
        <q-icon name="language" />
      </template>

    </q-select>
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
.language {
  color: white;
  font-weight: bold;
}
</style>
