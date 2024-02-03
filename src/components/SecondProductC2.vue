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

function messageSplit(text) {
  return text.split("\n")
}

</script>

<template>
  <div :class="'obj-2-wrapper c2 ' + config.c2_color">
    <div class="second-heading">
      <Marquee :text="config.message_2" text-class="second-heading" :badge="true"/>
    </div>
    <div class="second-field cta">
      {{ config.field_cta }}
    </div>
  </div>
</template>

<style lang="scss">

.obj-2-wrapper.c2.green {
  background: linear-gradient(99.63deg, rgba(130, 225, 76, 0.16) 0%, rgba(130, 225, 76, 0.04) 61.92%);

  & .second-heading strong {
    background-color: #EDEDEE;
  }
}

.obj-2-wrapper.c2.orange {
  background: linear-gradient(270deg, #FFE7D5 0%, #FFB681 100%);

  & .second-heading strong {
    background-color: #FFE7D5;
    color: #DD640C;
  }
}

.obj-2-wrapper.c2.red {
  background: linear-gradient(270deg, rgba(255, 227, 231, 0) 0%, #FF8F9C 100%);

  & .second-heading strong {
    background-color: #FFE3E7;
    color: #D6273C;
  }
}
</style>
