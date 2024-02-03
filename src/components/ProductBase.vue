<script setup>
import Rupee from './Rupee.vue'

import SecondProductC1 from './SecondProductC1.vue'
import SecondProductC2 from './SecondProductC2.vue'
import SecondProductC3 from './SecondProductC3.vue'

import { defineProps, toRefs } from 'vue'

const props = defineProps({
  config: {
    type: Object,
    default: {}
  }
});

</script>
<template>
  <div class="product-base">
    <div class="notif-dot" v-if="config.notif_dot && !(config.type == 'Data + CTA' && (config.c2_color == 'orange' || config.c2_color == 'red'))"></div>
    <img class="img" src="../assets/img/logo.png">
    <span class="obj-1">
      <div class="prod-heading">{{ config.product_name }}</div>
      <div class="main-field"><Rupee v-if="config.rupee"/><span class="main-field-content">{{ config.primary_field }}</span></div>
    </span>
    <span class="obj-2">
      <template v-if="config.type == 'Data Points'">
        <SecondProductC1 :config="config"/>
      </template>
      <template v-else-if="config.type == 'Data + CTA'">
        <SecondProductC2 :config="config"/>
      </template>
      <template v-else-if="config.type == 'Message'">
        <SecondProductC3 :config="config"/>
      </template>
      <template v-else>
      </template>
    </span>
  </div>
</template>

<style lang="scss">
.product-base {
  background-color: white;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 12px;
  position: relative;
  height: 70px;
  cursor: pointer;
}

.notif-dot {
  position: absolute;
  z-index: 3;
  right: -8px;
  top: calc(50% - 8px);
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 4px solid #F0F0F7;
  background-color: #E12B1D;
}

img.img {
  width: 44px;
  height: 44px;
  margin-right: 12px;
}

.obj-1 {
  position: absolute;
  top: 12px;
  display: inline-block;
  left: 68px;
  width: 110px;

  .main-field {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    height: 24px;
    overflow: hidden;
  }
}

.obj-2 {
  position: absolute;
  top: 1px;
  left: 182px;
  right: 0;
  bottom: 1px;

  .obj-2-wrapper {
    position: relative;
    height: 100%;
    padding: 11px 12px;
  }
}

.prod-heading {
  font-size: 11px;
  color: #006332;
  font-weight: 600;
  line-height: 16px;
  height: 16px;
  margin-bottom: 6px;
  text-transform: uppercase;
  overflow: hidden;
}

.second-heading {
  font-weight: 400;
  font-size: 12px;
  color: #585b7d;
  overflow: hidden;
  line-height: 20px;
  height: 20px;
  margin-bottom: 4px;
  overflow: hidden;

  strong {
    font-weight: 500;
  }
}

.second-field {
  font-weight: 500;
  font-size: 14px;
  height: 22px;
  line-height: 22px;
  color: #585b7d;
  overflow: hidden;
}

.second-field.cta {
  font-weight: 600;
  color: #09733e;
}

.second-heading strong,
.third-field {
  background-color: #EDEDEE;
  color: #585b7d;
  border-radius: 3px;
  font-size: 11px;
  padding: 2px 5px;
  margin-left: 6px;
  font-weight: 500;
}

.message-field {
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 12px;
  line-height: 20px;
  height: 40px;
  color: #585b7d;
  font-weight: 400;
  overflow: hidden;
  display: flex;
  align-items: center;
}

</style>

