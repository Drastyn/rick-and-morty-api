<template>
  <button id="my-button">
    <span class="icon" v-if="leftIcon">
      <em :class="leftIcon"></em>
    </span>
    <span>
      {{ text }}
    </span>
    <span class="icon" v-if="rightIcon">
      <em :class="rightIcon"></em>
    </span>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: ["buttonClass", "text", "leftIcon", "rightIcon"],
};
</script>
