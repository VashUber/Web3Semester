<template>
  <div class="pa-5">
    <nuxt-link to="/news" class="text-decoration-none">
      <v-icon large class="mb-5">mdi-arrow-left</v-icon>
    </nuxt-link>
    <div class="d-flex">
      <img :src="'/' + news.full_image" alt="" width="400px" height="260px" />
      <v-container fluid class="d-flex flex-column">
        <h2 class="text-center">{{ news.name }}</h2>
        <p>{{ news.desc }}</p>
        <div class="mt-auto ml-auto">{{ news.date }}</div>
      </v-container>
    </div>
    <v-container fluid class="pt-5">
      <v-text-field
        label="Enter your name"
        hide-details="auto"
        style="width: 540px"
        v-model="input"
      ></v-text-field>
      <v-textarea
        style="width: 540px"
        rows="3"
        label="Enter comment"
        no-resize
        v-model="textarea"
      ></v-textarea>
      <v-btn color="primary" elevation="1" @click="addComment">Send</v-btn>
    </v-container>
    <v-container fluid class="pt-5">
      <h2>Comments</h2>
      <v-card v-for="(item, i) in comments" :key="i" class="mt-5">
        <v-card-title>
          <span class="text-h6 font-weight-light">{{ item.name }}</span>
        </v-card-title>
        <v-card-text class="text-h5 font-weight-bold">
          {{ item.comment }}
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: "SomeNews",
    data() {
      return {
        newsId: this.$route.params.news,
        input: "",
        textarea: "",
        comments: [],
      }
    },
    methods: {
      addComment() {
        this.comments.push({ name: this.input, comment: this.textarea })
        this.input = ""
        this.textarea = ""
      },
    },
    computed: {
      getNewsById() {
        return this.$store.getters.getNews
      },
      news() {
        return this.getNewsById(+this.newsId)
      },
    },
  }
</script>
<style scoped></style>
