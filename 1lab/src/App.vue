<template>
  <div class="app">
    <a-layout>
      <Header/>
      <a-layout-content style="min-height: calc(100vh - 124px); padding: 20px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer"><a href="https://github.com/VashUber">GitHub</a></a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Header
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@500&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Arimo', sans-serif;
}
.app {
  font-size: 24px;
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #001529;
    height: 60px;
    a {
      color: #fff;
    }
  }
}
</style>
