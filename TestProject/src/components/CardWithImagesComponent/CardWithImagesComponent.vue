<template>
  <div
    class="card-with-images"
    :style="
      backgroundGradient && `--cardBackgroundColor: ${backgroundGradient}`
    "
  >
    <div class="card-with-images__container">
      <div class="text-container">
        <div class="text-container__header">
          {{ headerText }}
        </div>
        <div class="text-container__description">
          <div class="desc-text">{{ descriptionText }}</div>
        </div>
        <div class="text-container__button">
          <SimpleButtonComponent
            :buttonText="buttonText"
            :buttonLink="buttonLink"
          />
        </div>
      </div>
      <div class="images-container">
        <div class="images-container__upper-image">
          <img :src="upperImgUrl" alt="main image" />
        </div>
        <div class="images-container__lower-image">
          <img :src="lowerImgUrl" alt="main image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SimpleButtonComponent } from "@components";
defineProps<{
  headerText: string;
  descriptionText: string;
  buttonText: string;
  buttonLink: string;
  upperImgUrl: string;
  lowerImgUrl: string;
  buttonBackgroundColorRgb?: string;
  buttonColor?: string;
  backgroundGradient?: string;
}>();
</script>

<style lang="scss">
@import "./CardWithImagesComponent.scss";
</style>
