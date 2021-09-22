<template>
  <header>
    <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        :default-selected-keys="[currentPath]"
        class="menu"
    >
      <a-menu-item key="home">
        <router-link to="/" class="link">Home</router-link>
      </a-menu-item>
      <a-menu-item key="news">
        <router-link to="/news" class="link">News</router-link>
      </a-menu-item>
    </a-menu>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {currentPath: this.$route.name.toLowerCase()}
  },
}

</script>

<style lang="scss" scoped>

</style>