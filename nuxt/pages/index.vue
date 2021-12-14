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
    data() {
      return {
        colors: ["indigo", "warning", "pink darken-2", "red lighten-1", "deep-purple accent-4"],
        slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      }
    },
    computed: {
      news() {
        return this.$store.state.news
      },
    },
  }
</script>
