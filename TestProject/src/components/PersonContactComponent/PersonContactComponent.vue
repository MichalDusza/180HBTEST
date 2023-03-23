<template>
  <div class="person-contact">
    <div class="person-contact__container">
      <div class="images-container">
        <div class="images-container__main-image">
          <img :src="personImgUrl" alt="main image" />
        </div>
      </div>
      <div
        class="text-container"
        :style="
          backgroundGradient && `--cardBackgroundColor: ${backgroundGradient}`
        "
      >
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
            :buttonBackgroundColorRgb="buttonBackgroundColorRgb"
          />
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
  personImgUrl: string;
  buttonBackgroundColorRgb?: string;
  buttonColor?: string;
  backgroundGradient?: string;
}>();
</script>

<style lang="scss">
@import "./PersonContactComponent.scss";
</style>
