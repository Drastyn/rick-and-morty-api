<template>
  <div id="app">
    <Banner
      title="Rick and Morty API"
      subtitle="Practice project with Rick and Morty Character's"
    />
    <router-view />
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name: "app",
  components: {
    Banner,
  },
};
</script>

<style lang="scss">
@import "@/assets/application.scss";
</style>
