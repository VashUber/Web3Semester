<template>
  <div>
    <v-carousel cycle height="600" hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="(item, i) in news" :key="i">
        <img class="" width="100%" :src="item.full_image" alt="" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    name: "IndexPage",
    computed: {
      news() {
        return this.$store.state.news
      },
    },
  }
</script>
