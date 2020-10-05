<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

      <!-- Language selector -->
      <Language/>
      <q-space/>

      <!-- Nightmode selector -->
      <NightMode/>
      <q-space/>

      <!-- Shopping cart -->
      <Cart/>
      <q-space/>

      <!-- Account -->
      <Account/>
      <q-space/>

        <!-- Search -->
      <Search/>

      </q-toolbar>
    </q-header>

    <!-- Navigation section -->
    <br/><br/>
    <Navigation/>

    <!-- Web section -->
    <q-page-container class="page">
      <router-view />
    </q-page-container>

    <!-- Footer section -->
    <Footer/>

  </q-layout>
</template>

<script>
import Footer from 'components/Layout/Footer'
import Language from 'components/Layout/Language'
import NightMode from 'components/Layout/NightMode'
import Navigation from 'components/Layout/Navigation'
import Account from 'components/Layout/Account'
import Cart from 'components/Layout/Cart'
import Search from 'components/Layout/Search'

export default {
  name: 'MainLayout',
  components: { Footer, Language, Navigation, Account, Cart, Search, NightMode },
  data () {
    return {
    }
  }
}
</script>

<style>

.page{
  margin-top: -2%;
}

</style>
