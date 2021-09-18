<template>
  <div>
    <Table :newsItems="newsItems" />
  </div>
</template>

<script>
  import axios from "axios";
  import Table from "@/components/Table"
  export default {
    name: 'News',
    components: {
      Table,
    },
    mounted() {
      axios.get('http://localhost:8081/articles.json').then(response => this.newsItems = response.data)
    },
    data() {
      return {
        newsItems: []
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>