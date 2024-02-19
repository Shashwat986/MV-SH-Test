<script setup>
import { defineProps, toRefs, ref, onMounted } from 'vue'

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
  if (badge.value) {
    return text.split("\n").slice(0, 2).map((str) => {
      let newStr = str.replace('#', '<strong>').replace('#', '</strong>')
      return newStr
    })
  } else {
    return text.split("\n").slice(0, 2)
  }
}

const intervalId = ref(null)
const pauseMarquee = ref(false)
onMounted( () => {
  intervalId.value = setInterval(() => {
    pauseMarquee.value = true
    setTimeout(() => pauseMarquee.value = false, 300)
  }, 2300)

})
</script>

<template>
  <Vue3Marquee :vertical="true" :duration="4" v-if="messageSplit(text).length > 1" :pause="pauseMarquee">
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
