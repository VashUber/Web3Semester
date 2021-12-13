<template>
  <v-app>
    <div>
      <v-app-bar
        elevation="3"
        dense
        class="d-flex align-center"
        color="grey darken-4"
        height="50px"
      >
        <nuxt-link to="/" class="text-decoration-none">
          <v-icon large class="icon white--text">mdi-home</v-icon>
        </nuxt-link>
        <nuxt-link to="/news" class="text-decoration-none ml-3"
          ><v-btn text class="white--text" height="50px">News</v-btn></nuxt-link
        >
        <nuxt-link to="/gallery" class="text-decoration-none"
          ><v-btn text class="white--text" height="50px">Gallery</v-btn></nuxt-link
        >
      </v-app-bar>
    </div>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer class="d-flex justify-center" color="grey darken-4">
      <a href="https://github.com/VashUber" class="text-decoration-none white--text">GitHub</a>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: "DefaultLayout",
  }
</script>

<style scoped>
  .nuxt-link-exact-active:not(:first-child) {
    background: #000;
  }
</style>
