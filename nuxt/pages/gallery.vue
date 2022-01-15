<template>
  <v-container fluid >
    <v-row>
      <v-col v-for="item in news" :key="item.id" justify="center" align="center">
        <img :src="item.full_image" alt="" width="400" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: "Gallery",
    computed: {
      news() {
        return this.$store.getters.getListNews
      },
    },
  }
</script>
<style></style>
