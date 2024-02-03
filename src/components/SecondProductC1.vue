<script setup>
import Rupee from './Rupee.vue'
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  config: {
    type: Object,
    default: {}
  }
});

const { heading2, field2, field3 } = toRefs(props);
</script>

<template>
  <div class="obj-2-wrapper c1">
    <div class="second-heading">
      {{ config.heading_2 }}
      <span class="third-field" v-if="config.third_field_type == 'Top'">
        {{ config.field_3 }}
      </span>
    </div>
    <div class="second-field">
      {{ config.field_2 }}
      <span class="third-field" v-if="config.third_field_type == 'Bottom'">
        {{ config.field_3 }}
      </span>
    </div>
  </div>
</template>

<style lang="scss">

.obj-2-wrapper.c1 {
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background-color: #ededee;
  }
}
</style>

