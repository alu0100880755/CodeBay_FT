<template>

  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-left">
  <q-card class="my-card-item">

    <!-- Item image section -->
    <q-card-section vertical>
      <q-img
      :src="item_image"
      class="col-3 col-sm-3 item_image"
      spinner-color="white"

    />
    </q-card-section>

      <!-- Item name section -->
      <q-card-section vertical class="item_name">
        <div class="text-h6">{{item_name}}</div>
        <div class="text-subtitle2">{{$t(item_category)}}</div>
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
  }
}
</script>

<style>
.my-card-item {
  overflow: auto;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 6%;
  margin-bottom: 6%;
  transition: 2s;
}

.item_name{
  overflow: auto;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 6%;
  margin-bottom: 6%;
  transition: 2s;
}

.item_image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  min-width: 12vh;
  width: 12vh;
  max-width: 55vh;
  max-height: 40vh;
  height: 16vh;
  min-height: 16vh;
}

.my-card-item:hover {opacity: 0.65; zoom: 0.95;}
</style>
