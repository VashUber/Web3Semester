<template>
  <div>
    <h2>{{item.name}}</h2>
    <div>{{item.desc}}</div>
    <div>{{item.date}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsItem",
  data() {
    return {item: {}}
  },
  mounted() {
    axios.get('http://localhost:8081/articles.json').then(response => {
      this.item = response.data.filter(elem => elem.id === +this.$route.params.id)[0]
    })
  },
}

</script>

<style scoped>

</style>