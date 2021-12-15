<template>
  <div>
    {{ news }}
  </div>
</template>
<script>
  export default {
    name: "SomeNews",
    data() {
      return {
        newsId: this.$route.params.news,
      }
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
