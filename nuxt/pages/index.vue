<template>
  <div>
    <v-carousel cycle height="650" hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="item in news" :key="item.id">
        <img width="100%" :src="item.full_image" alt="" />
      </v-carousel-item>
    </v-carousel>
    <h2 class="mt-5 text-center">News portal</h2>
  </div>
</template>

<script>
  export default {
    name: "IndexPage",
    computed: {
      news() {
        return this.$store.getters.getListNews
      },
    },
  }
</script>
