<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  text: {
    type: String,
  },
  textClass: {
    type: String,
  },
  badge: {
    type: Boolean,
    default: false
  }
});

const { text, badge } = toRefs(props)

function messageSplit(text) {
  console.log(badge.value, text)
  if (badge.value) {
    return text.split("\n").slice(0, 2).map((str) => {
      let newStr = str.replace('#', '<strong>').replace('#', '</strong>')
      console.log(newStr)
      return newStr
    })
  } else {
    return text.split("\n").slice(0, 2)
  }
}

console.log(messageSplit(text.value))
</script>

<template>
  <Vue3Marquee :vertical="true" :duration="2" v-if="messageSplit(text).length > 1">
    <div v-for="t in messageSplit(text)" :class="['mb-3', textClass]">
      <span v-html="t"/>
    </div>
  </Vue3Marquee>
  <div v-else>
    <span v-html="messageSplit(text)[0]"/>
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
