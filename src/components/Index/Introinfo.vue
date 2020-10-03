<template>
  <div>
    <div class="text-h4 title">
      <h2>{{ $t("mobile_phones") }}</h2>
    </div>
    <div class="text-body1 text-justify info">
      <p>
        {{ $t("mobile_info") }}
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introinfo',
  data () {
    return {}
  }
}
</script>

<style>
.title {
  margin-left: 5%;
}

.info {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
