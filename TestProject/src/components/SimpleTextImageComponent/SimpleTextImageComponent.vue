<template>
    <div class="simple-text-image" :class="{'orientation-right' : orientationRight}">
        <div class="simple-text-image__container">
            <div class="text-container">
                <div class="text-container__header">{{ headerText }}</div>
                <div class="text-container__description">{{ descriptionText }}</div>
                <div class="text-container__images">
                    <div class="small-image">
                        <img :src="smallImgUrl" alt="buildings image" />
                    </div>
                    <div class="big-image">
                        <img :src="bigImgUrl" alt="buildings image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    smallImgUrl: string ;
    bigImgUrl: string ;
    headerText: string;
    descriptionText: string;
    orientationRight?: boolean;
  }>();
  </script>
  
  <style lang="scss">
  @import './SimpleTextImageComponent.scss';
  </style>
  