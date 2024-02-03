<script setup>
import Rupee from './Rupee.vue'
import Marquee from './Marquee.vue'
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  config: {
    type: Object,
    default: {}
  }
});
</script>

<template>
  <div class="obj-2-wrapper c1">
    <div class="message-field">
      <Marquee :text="config.message" text-class="message-field"/>
    </div>
  </div>
</template>
