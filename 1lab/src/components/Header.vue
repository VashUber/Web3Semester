<template>
  <a-menu
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
      :default-selected-keys="[currentPath]"
  >
    <a-menu-item key="home">
      <router-link to="/" class="link">Home</router-link>
    </a-menu-item>
    <a-menu-item key="news">
      <router-link to="/news" class="link">News</router-link>
    </a-menu-item>
    <a-menu-item key="newsitem" v-if="isNewsIte">
      <router-link to="/news" class="link">Back</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {currentPath: this.$route.name.toLowerCase()}
  },
  computed: {
    isNewsIte() {
      return this.$route.name.toLowerCase() === 'newsitem'
    }
  }
}

</script>

<style lang="scss" scoped>

</style>