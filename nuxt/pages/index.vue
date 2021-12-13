<template>
  <div class="primary">
    {{ news }}
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
