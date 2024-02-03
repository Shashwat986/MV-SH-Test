<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  text: {
    type: String,
  },
  textClass: {
    type: String,
  }
});

function messageSplit(text) {
  return text.split("\n").slice(0, 2)
}
</script>

<template>
  <Vue3Marquee :vertical="true" :duration="2" v-if="messageSplit(text).length > 1">
    <div v-for="t in messageSplit(text)" :class="['mb-3', textClass]">
      {{ t }}
    </div>
  </Vue3Marquee>
  <div v-else>
    {{ text }}
  </div>
</template>

<style>
.vue3-marquee.vertical>.marquee {
  align-items: normal !important;
  & > .message-field,
  & > .second-heading {
    align-items: normal !important;
  }
}
</style>
