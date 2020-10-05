<template>
  <div class="cart text-center">
    <div class="col-3 col-sm-3 text-center usuario">
      <q-btn size="100%" flat round>

        <!-- External design for cart -->
        <q-item-label>{{ cart_items_quantity }}</q-item-label>
        <q-icon name="shopping_cart" />

        <!-- Internal design for cart -->
        <q-menu fit :offset="[150,5]" persistent transition-show="jump-down" transition-hide="jump-up">

        <!-- Introduction section -->
        <q-card-section vertical class="text-center">
          <div class="text-h6">{{ $t('cart') }}</div>
        </q-card-section>

        <!-- Items section -->
          <q-separator/>
          <CartItem
            v-for="item in cart_items"
            :key="item.item_name"
            v-bind="item"
            @clicked="onClickChild"
          />
          <q-separator/>

        <!-- Payment section -->
        <q-card-section vertical class="text-center">
          <div class="text-h6">{{ $t('units') }} {{ cart_items_quantity }} </div>
          <div class="text-h6">{{ $t('payment') }} {{ full_payment }} {{ $t('coin')}} </div>
          <br/>
          <q-btn class='pay_button' :label="$t('pay')" :loading="loading" color="primary" @click="simulateLoading" style="width: 100%">
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
                {{ $t('loading') }}
              </template></q-btn>
            </q-card-section>

        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<script>
import CartItem from '../Layout/CartItem'
export default {
  name: 'Cart',
  components: { CartItem },
  data () {
    return {
      loading: false,
      full_payment: 0,
      cart_items_quantity: 2,
      cart_items: [
        {
          item_image:
            'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFROUOGAt6R58jU0JUVDpN7WfEEClI78b4ZozLHZYbnRnNueVPF2U&usqp=CAc',
          item_name: 'Samsung Note 20',
          item_category: 'mobile',
          item_price: 1200
        },
        {
          item_image:
            'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiaq-L2RIIZmZQJZ1fn6wydkO3W_wElzStKFsX8lAFJfliC59reA8&usqp=CAc',
          item_name: 'Apple Iphone 11',
          item_category: 'mobile',
          item_price: 1300
        }
      ]
    }
  },
  mounted () {
    this.calculatePayment()
  },
  methods: {
    deleteItem (position) {
      this.cart_items.splice(position, 1)
      this.cart_items_quantity--
      this.calculatePayment()
    },
    addItem (item) {
      this.cart_items.push(item)
      this.calculatePayment()
    },
    calculatePayment () {
      this.full_payment = 0

      for (let i = 0; i < this.cart_items.length; i++) {
        this.full_payment += this.cart_items[i].item_price
      }
    },
    onClickChild (name) {
      let position

      for (let i = 0; i < this.cart_items.length; i++) {
        if (name === this.cart_items[i].item_name) {
          position = i
          break
        }
      }

      this.deleteItem(position)
    },
    simulateLoading (number) {
      this.loading = true

      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
}
</script>
