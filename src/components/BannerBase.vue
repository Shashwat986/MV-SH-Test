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
  <div :class="'banner-base ' + config.color">
    <img class="banner-img" src="../assets/img/banner-red.png" v-if="config.color == 'red'">
    <img class="banner-img" src="../assets/img/banner-yellow.png" v-if="config.color == 'yellow'">
    <img class="banner-img" src="../assets/img/banner-blue.png" v-if="config.color == 'blue'">
    <div class="banner-content-parent">
      <div class="banner-content">
        <div class="banner-title">
          {{ config.title }}
        </div>
        <div class="banner-subtitle">
          {{ config.subtitle }}
        </div>
        <div class="banner-cta" v-if="config.cta">
          {{ config.cta }} &nbsp;&nbsp;&nbsp;&#x2192;
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.banner-base {
  margin-top: 12px;
  height: 160px;
  position: relative;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 24px;
  padding-left: 88px;

  &.blue {
    background: linear-gradient(0deg, #E3EDFF, #E3EDFF) padding-box,
                linear-gradient(180deg, #C8DBFF 0%, #ACC8FF 100%) border-box;

    & .banner-cta {
      color: #2d63cc;
    }
  }

  &.yellow {
    background: linear-gradient(0deg, #FFE7D5, #FFE7D5) padding-box,
                linear-gradient(180deg, #FFCEAB 0%, #FFB681 100%) border-box;
  }

  &.red {
    background:
      linear-gradient(#FFE3E7 0 0) padding-box,
      linear-gradient(180deg, #FFACB6 0%, #FF8F9C 100%) border-box;
  }

  .banner-img {
    position: absolute;
    left: 0;
    top: 38px;
    height: 80px;
  }
}

.banner-content-parent {
  display: flex;
  align-items: center;
  height: 100%;

  .banner-content {
    display: block;
    width: 100%;
  }
}

.banner-title {
  font-family: MVCash;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  padding-top: 2px;
  max-height: 38px;
  overflow: hidden;
}

.banner-subtitle {
  font-family: MVCash;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding-top: 8px;
  max-height: 44px;
  overflow: hidden;

  letter-spacing: 0.3px;
}

.banner-cta {
  padding-top: 12px;
  font-family: MVCash;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  max-height: 32px;
  overflow: hidden;
  letter-spacing: 0.2px;
}

</style>

