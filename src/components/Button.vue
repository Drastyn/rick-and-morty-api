<template>
  <button id="my-button">
    <span>
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: ["buttonClass", "text"],
};
</script>

<style></style>
