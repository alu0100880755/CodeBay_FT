<template>

  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-left">
  <q-card class="my-card">

    <!-- Item image section -->
    <q-card-section vertical>
      <q-img
      :src="item_image"
      class="col-3 col-sm-3 item_image"
      spinner-color="white"
      ratio="4/3"
      :height="height_device + unit"
    />
    </q-card-section>

      <!-- Item name section -->
      <q-card-section vertical class="item_name">
        <div class="text-h6">{{item_name}}</div>
        <div class="text-subtitle2">{{item_category}}</div>
      </q-card-section>

      <!-- Item price section -->
      <q-card-section vertical class="item_price q-pt-none">
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
      height_device: 55,
      unit: 'vh'
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
  },
  mounted () {
    if (this.$q.platform.is.mobile) {
      this.height_device = 25
    }
  }
}
</script>

<style>
.my-card {
  overflow: auto;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 6%;
  margin-bottom: 6%;
}

.item_image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
