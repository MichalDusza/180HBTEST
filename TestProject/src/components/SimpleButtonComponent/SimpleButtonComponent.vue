<template>
  <a
    :href="buttonLink"
    class="simple-button"
    :style="`${buttonColor && `--buttonColor: ${buttonColor}`}; ${
      buttonBackgroundColorRgb &&
      `--buttonBackgroundColorRgb: ${buttonBackgroundColorRgb}`
    }`"
    >{{ buttonText }}</a
  >
</template>

<script setup lang="ts">
defineProps<{
  buttonText: string;
  buttonLink: string;
  buttonColor?: string;
  buttonBackgroundColorRgb?: string;
}>();
</script>

<style lang="scss">
@import "./SimpleButtonComponent.scss";
</style>
