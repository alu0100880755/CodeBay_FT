<template>
  <div>
    <!-- External design for search -->
    <!-- Text input -->
    <q-input
      dark
      dense
      standout
      rounded
      v-model="text"
      input-class="text-right"
      class="q-ml-md"
    >

      <!-- Features -->
      <template v-slot:append>
        <q-icon v-if="text === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      text: ''
    }
  }
}
</script>
