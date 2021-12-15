<template>
  <v-container>
    <v-data-table dense :headers="headers" :items="news" item-key="name" class="elevation-1">
      <template v-slot:[`item.name`]="{ item }">
        <router-link :to="/news/ + item.id">
          {{ item.name }}
        </router-link>
      </template>
    </v-data-table>
  </v-container>
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
