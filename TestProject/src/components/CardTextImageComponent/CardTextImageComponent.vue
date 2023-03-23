<template>
  <div
    class="card-text-image"
    :style="
      backgroundGradient && `--cardBackgroundColor: ${backgroundGradient}`
    "
    v-motion
    :initial="{ opacity: 0, x: -100 }"
    :visibleOnce="{
      opacity: 1,
      x: 0,
      transition: {
        delay: 300,
      },
    }"
  >
    <div class="card-text-image__container">
      <div class="text-container">
        <div
          class="text-container__header"
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: {
              delay: 400,
            },
          }"
        >
          {{ headerText }}
        </div>
        <div
          class="text-container__description"
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: {
              delay: 500,
            },
          }"
        >
          {{ descriptionText }}
        </div>
        <div class="text-container__button">
          <SimpleButtonComponent
            :buttonText="`See more`"
            :buttonLink="`#`"
            v-motion
            :initial="{
              opacity: 0,
            }"
            :visibleOnce="{
              opacity: 1,
              transition: {
                delay: 600,
              },
            }"
          />
        </div>
      </div>
      <div class="image-container">
        <div
          class="image-container__main-image"
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: {
              delay: 500,
            },
          }"
        >
          <img :src="mainImgUrl" alt="main image" />
        </div>
      </div>
      <div class="info-images-container" v-if="infoimages">
        <div
          v-for="(image, index) in infoimages"
          :key="index"
          class="info-images-container__image"
          v-motion
          :initial="{
            opacity: 0,
          }"
          :visibleOnce="{
            opacity: 1,
            transition: {
              delay: (index + 1) * 300,
            },
          }"
        >
          <img :src="image.imgUrl" :alt="image.imgLabel" />
          <p class="info-image-label">{{ image.imgLabel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SimpleButtonComponent } from "@components";

interface IMainImage {
  imgUrl: string;
  imgLabel: string;
}

defineProps<{
  headerText: string;
  descriptionText: string;
  buttonText: string;
  buttonLink: string;
  buttonColor?: string;
  buttonBackgroundColor?: string;
  mainImgUrl: string;
  infoimages?: IMainImage[];
  backgroundGradient?: string;
}>();
</script>

<style lang="scss">
@import "./CardTextImageComponent.scss";
</style>
