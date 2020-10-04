<template>
  <div>
    <!-- Footer -->
    <br /><br />
    <footer>
      <div class="row footer">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-left">
          <div class="q-pa-md" align="center">

            <!-- Section 1 -->
            <q-list class="quick_links">
              <q-item>
                <q-item-section class="bold-text">{{
                  $t("quick_links")
                }}</q-item-section>
              </q-item>

              <q-separator inset style="max-width: 200px " />

              <!-- Links -->
              <div class="links">
                <q-item clickable v-ripple to="/home">
                  <q-item-section>
                    <q-item-label>{{ $t("home") }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/event">
                  <q-item-section>
                    <q-item-label>{{ $t("event") }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/support">
                  <q-item-section>
                    <q-item-label>{{ $t("support") }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple to="/contact">
                  <q-item-section>
                    <q-item-label>{{ $t("contact") }}</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </q-list>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-left">
          <div class="q-pa-md" align="center">
            <q-list class="promoted">
              <q-item>
                <q-item-section class="bold-text">{{
                  $t("promoted")
                }}</q-item-section>
              </q-item>
              <q-separator inset style="max-width: 200px " />

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>{{ $t("promoted_info") }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <!-- Section 3 -->
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-left">
          <div class="q-pa-md" align="center">
            <q-list class="comingsoon">
              <q-item>
                <q-item-section class="bold-text">{{
                  $t("soon")
                }}</q-item-section>
              </q-item>
              <q-separator inset style="max-width: 200px " />

              <q-item-section>
                <!-- Image for new content -->
                <q-img
                  src="https://www.teknofilo.com/wp-content/uploads/2020/03/iPhone-12.jpg"
                  height="100%"
                  width="100%"
                  style="max-width: 50%; display:block; margin:auto; margin-top: 3%"
                >
                  <div class="absolute-bottom text-subtitle2 text-center">
                    IPHONE 12
                  </div>
                </q-img>
              </q-item-section>
            </q-list>
          </div>
        </div>
      </div>
    </footer>

    <!-- Copyright -->
    <div class="text-caption copyright text-center">
      <br/>
      {{ $t("copyright") }}
      <br/><br/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style>
div {
  display: block;
}
footer {
  display: block;
  font-family: Arial, Helvetica, Sans-serif;
  background-color: #8581815b;
}
.links{
  color: blue;
}

.bold-text {
  font-weight: bold;
  font-size: 120%;
}

.copyright{
  margin-left: 20%;
  margin-right: 20%;
}
</style>
