<template>
  <div class="items">
    <q-card class="my-card">
      <q-card-section horizontal>

        <!-- Item image section -->
        <q-card-section vertical class="text-center">
        <q-img
          :src="item_image"
          class="item_cart_image"
          spinner-color="white"
          ratio="4/3"
        />
        </q-card-section>

        <!-- Item name section -->
        <q-card-section vertical class="item_cart_name text-center">
          <div class="text-h6">{{ item_name }}</div>
          <div class="text-subtitle2">{{ $t(item_category) }}</div>
        </q-card-section>

        <!-- Item price section -->
        <q-card-section vertical class="item_cart_price text-center">
          {{ item_price }} {{ $t('coin') }}
        </q-card-section>

        <!-- Delete items section -->
        <q-btn class="item_cart_delete" flat color="primary" icon="close" @click="deleteItem"/>

      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  data () {
    return {}
  },
  methods: {
    deleteItem () {
      this.$emit('clicked', this.item_name)
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
.item_cart_image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 60px;
  height: 60px;
  max-width:100%;
  max-height:100%;
}

.item_cart_price{
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

.item_cart_name{
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
