<template>
  <div class="Page_content">
    <!-- <q-page class="flex flex-center"> -->

    <Carousel></Carousel>
    <div class="row">
    <Item
      v-for="item in available_items"
      :key="item.item_name"
      v-bind="item"
    />

    </div>

    <!-- </q-page> -->
  </div>
</template>

<script>
import Carousel from '../components/Index/Carousel'
import Item from '../components/Index/Item'

export default {
  name: 'PageIndex',
  components: {
    Carousel,
    Item
  },
  data () {
    return {
      available_items: [
        {
          item_image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFROUOGAt6R58jU0JUVDpN7WfEEClI78b4ZozLHZYbnRnNueVPF2U&usqp=CAc',
          item_name: 'Samsung Note 20',
          item_category: 'Mobile',
          item_price: '1200 $'
        },
        {
          item_image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiaq-L2RIIZmZQJZ1fn6wydkO3W_wElzStKFsX8lAFJfliC59reA8&usqp=CAc',
          item_name: 'Apple Iphone 11',
          item_category: 'Mobile',
          item_price: '1300 $'
        },
        {
          item_image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4r1Y5QHUWNC1v03hdMLNotfPBWSluTYICfPUKzGHLILTf58LKuq8&usqp=CAc',
          item_name: 'Xiaomi Mi 10',
          item_category: 'Mobile',
          item_price: '1200 $'
        },
        {
          item_image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPfXGd1o0kSNyLnqiFMNcMKD9_gbpGZj1GGcxeJNbfHIHo8DxgPmQ&usqp=CAc',
          item_name: 'Oneplus 8',
          item_category: 'Mobile',
          item_price: '1200 $'
        }
      ]
    }
  }
}
</script>
