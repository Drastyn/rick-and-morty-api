<template>
  <header id="banner">
    <section class="section has-text-centered background-banner">
      <h1 class="title is-1 shlop">{{ title }}</h1>
      <hr />
      <p class="subtitle is-1 shlop">
        {{ subtitle }}
      </p>
    </section>
  </header>
</template>

<script>
export default {
  name: "banner",
  props: ["title", "subtitle"],
};
</script>

<style>
@font-face {
  font-family: Shlop;
  src: url("../fonts/shlop.ttf");
}
</style>
