<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      :padding="false"
      arrows
      infinite
      dark
      :autoplay="autoplay"
    >

      <!-- IMAGE 1 -->
      <q-carousel-slide :name="1">
      <q-img
          src="https://images.samsung.com/is/image/samsung/p5/uy/business/smartphones/galaxy-s20/images/05_banner_1440.jpg?$ORIGIN_JPG$"
          height="100%"
          width="100%"
        >
       <div class="absolute-bottom text-subtitle2 text-center">
            SAMSUNG
          </div>
      </q-img>
      </q-carousel-slide>

      <!-- IMAGE 2 -->
      <q-carousel-slide :name="2">
      <q-img
          src="https://cdn.shopify.com/s/files/1/0108/1062/articles/iphone11bannernew.jpg?v=1568163752"
          height="100%"
          width="100%"
        >
       <div class="absolute-bottom text-subtitle2 text-center">
            IPHONE
          </div>
      </q-img>
      </q-carousel-slide>

      <!-- IMAGE 3 -->
      <q-carousel-slide :name="3">
      <q-img
          src="https://wwwhatsnew.com/wp-content/uploads/2020/04/captura124.jpg"
          height="100%"
          width="100%"
        >
       <div class="absolute-bottom text-subtitle2 text-center">
            HUAWEI
          </div>
      </q-img>
      </q-carousel-slide>

      <!-- IMAGE 4 -->
      <q-carousel-slide :name="4">
      <q-img
          src="https://tuxiaomi.es/wp-content/uploads/2019/08/Banner-TuXiaomi-WEB.jpg"
          height="100%"
          width="100%"
        >
       <div class="absolute-bottom text-subtitle2 text-center">
            ONEPLUS
          </div>
      </q-img>
      </q-carousel-slide>

    </q-carousel>

  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>
