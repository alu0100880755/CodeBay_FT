<template>
  <div class="account text-center">
    <q-item clickable v-ripple to="">

      <!-- External design for user account -->
      <q-item-section>
        <q-item-label>{{ $t("account") }}</q-item-label>
      </q-item-section>

    </q-item>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {}
  }
}
</script>
