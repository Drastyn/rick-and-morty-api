<template>
  <button id="my-button">
    <span class="icon" v-if="leftIcon">
      <i :class="leftIcon"></i>
    </span>
    <span>
      {{ text }}
    </span>
    <span class="icon" v-if="rightIcon">
      <i :class="rightIcon"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: ["buttonClass", "text", "leftIcon", "rightIcon"],
};
</script>

<style></style>
