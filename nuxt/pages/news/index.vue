<template>
  <div class="pt-5">
    <v-data-table dense :headers="headers" :items="news" item-key="name">
      <template v-slot:[`item.id`]="{ item }">
        <router-link :to="/news/ + item.id">
          {{ item.id }}
        </router-link>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    name: "News",
    data() {
      return {
        headers: [
          { text: "№", value: "id" },
          { text: "Title", value: "name" },
          { text: "Short Description", value: "shortDesc" },
          { text: "Date", value: "date" },
        ],
      }
    },
    computed: {
      news() {
        return this.$store.state.news
      },
    },
  }
</script>
<style scoped></style>
