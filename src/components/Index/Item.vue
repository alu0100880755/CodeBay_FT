<template>

  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-left">
  <q-card class="my-card">

    <q-card-section vertical>
      <q-img
      :src="item_image"
      class="col-3 col-sm-3 item_image"
      spinner-color="white"
      ratio="4/3"
      height="200px"
    />
    </q-card-section>

      <q-card-section vertical>
        <div class="text-h6">{{item_name}}</div>
        <div class="text-subtitle2">{{item_category}}</div>
      </q-card-section>

      <q-card-section vertical class="q-pt-none">
        {{ item_price }} {{ $t('coin') }}
      </q-card-section>

    </q-card>
  </div>

</template>

<script>
export default {
  name: 'Item',
  data () {
    return {
    }
  },
  // Child props for card
  props: {
    item_image: {
      type: String,
      required: true
    },
    item_name: {
      type: String,
      required: true
    },
    item_category: {
      type: String,
      required: true
    },
    item_price: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.my-card {
  /* font-size: calc(5px + 6 * ((100vw - 20px) / 680)); */
  overflow: auto;
}
</style>
