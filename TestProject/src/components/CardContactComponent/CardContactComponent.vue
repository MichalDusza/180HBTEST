<template>
  <div
    class="card-contact"
    :style="
      backgroundGradient && `--cardBackgroundColor: ${backgroundGradient}`
    "
    v-motion
    :initial="{ opacity: 0, x: -100 }"
    :visibleOnce="{
      opacity: 1,
      x: 0,
      transition: {
        delay: 200,
      },
    }"
  >
    <div class="card-contact__container">
      <div class="text-container">
        <div
          class="text-container__header"
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
              delay: 300,
            },
          }"
        >
          <div class="desc-title">{{ descriptionTextTitle }}</div>
          <div class="desc-text" v-html="descriptionText"></div>
        </div>
        <div
          class="text-container__description opening-hours"
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
          <div class="desc-title">{{ descriptionTextOpeningHoursTitle }}</div>
          <div class="desc-text grid-text">
            <p
              v-for="(item, index) in descriptionTextOpeningHours"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
        </div>
        <div class="text-container__button">
          <SimpleButtonComponent
            :buttonText="buttonText"
            :buttonLink="buttonLink"
            :buttonColor="buttonColor"
            :buttonBackgroundColorRgb="buttonBackgroundColorRgb"
            v-motion
            :initial="{ opacity: 0 }"
            :visibleOnce="{
              opacity: 1,
              transition: {
                delay: 300,
              },
            }"
          />
        </div>
      </div>
      <div
        class="image-container"
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
        <div class="image-container__main-image">
          <img :src="mainImgUrl" alt="main image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SimpleButtonComponent } from "@components";
defineProps<{
  headerText: string;
  descriptionTextTitle: string;
  descriptionText: string;
  descriptionTextOpeningHoursTitle: string;
  descriptionTextOpeningHours: string[];
  buttonText: string;
  buttonLink: string;
  buttonColor?: string;
  buttonBackgroundColorRgb?: string;
  mainImgUrl: string;
  backgroundGradient?: string;
}>();
</script>

<style lang="scss">
@import "./CardContactComponent.scss";
</style>
