<template>
  <div class="container">
    <BackgroundLinesComponent />
    <SimpleTextImageComponent
      :smallImgUrl="state.info.info_1.imageSmall"
      :bigImgUrl="state.info.info_1.imageBig"
      :headerText="state.info.info_1.title"
      :descriptionText="state.info.info_1.description"
    />
    <SimpleTextImageComponent
      :smallImgUrl="state.info.info_2.imageSmall"
      :bigImgUrl="state.info.info_2.imageBig"
      :headerText="state.info.info_2.title"
      :descriptionText="state.info.info_2.description"
      :orientationRight="true"
    />
    <CardTextImageComponent
      :headerText="state.info.info_3.headerText"
      :descriptionText="state.info.info_3.descriptionText"
      :buttonText="state.info.info_3.buttonText"
      :buttonLink="state.info.info_3.buttonLink"
      :mainImgUrl="state.info.info_3.mainImgUrl"
      :infoimages="state.info.info_3.infoimages"
    />
    <CardContactComponent
      :headerText="state.info.info_4.headerText"
      :descriptionTextTitle="state.info.info_4.descriptionTextTitle"
      :descriptionText="state.info.info_4.descriptionText"
      :descriptionTextOpeningHoursTitle="
        state.info.info_4.descriptionTextOpeningHoursTitle
      "
      :descriptionTextOpeningHours="
        state.info.info_4.descriptionTextOpeningHours
      "
      :buttonText="state.info.info_4.buttonText"
      :buttonLink="state.info.info_4.buttonLink"
      :buttonColor="state.info.info_4.buttonColor"
      :buttonBackgroundColorRgb="state.info.info_4.buttonBackgroundColorRgb"
      :mainImgUrl="state.info.info_4.mainImgUrl"
      :backgroundGradient="state.info.info_4.backgroundGradient"
    />
    <CardWithImagesComponent
      :headerText="state.info.info_5.headerText"
      :descriptionText="state.info.info_5.descriptionText"
      :buttonText="state.info.info_5.buttonText"
      :buttonLink="state.info.info_5.buttonLink"
      :upperImgUrl="state.info.info_5.upperImgUrl"
      :lowerImgUrl="state.info.info_5.lowerImgUrl"
    />
    <PersonContactComponent
      :headerText="state.info.info_6.headerText"
      :descriptionText="state.info.info_6.descriptionText"
      :buttonText="state.info.info_6.buttonText"
      :buttonLink="state.info.info_6.buttonLink"
      :personImgUrl="state.info.info_6.personImgUrl"
      :buttonBackgroundColorRgb="state.info.info_6.buttonBackgroundColorRgb"
      :buttonColor="state.info.info_6.buttonColor"
      :backgroundGradient="state.info.info_6.backgroundGradient"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import config from "./config";
import {
  SimpleTextImageComponent,
  BackgroundLinesComponent,
  CardTextImageComponent,
  CardContactComponent,
  CardWithImagesComponent,
  PersonContactComponent,
} from "@components";

//state
const state = reactive<any>({
  info: config.getCmsInfo(),
});

</script>
