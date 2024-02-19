<script setup>
import CarouselMarker from '../components/CarouselMarker.vue';
import MVLogo from '../components/MVLogo.vue';
import ProductBase from '../components/ProductBase.vue';
import BannerBase from '../components/BannerBase.vue';

import { ref } from 'vue'
import router from '../router'

import { useConfigStore } from '../stores/config.js'
const config = useConfigStore()

import { useDatabaseList, useDatabaseObject } from 'vuefire'
import { firebaseWriter } from '../firebase.js'
const dbVals = useDatabaseList(firebaseWriter.ref('/cards'))
const bannerVals = useDatabaseList(firebaseWriter.ref('/banners'))
const loaded = useDatabaseObject(firebaseWriter.ref('/status'))

function getSavedCards (product) {
  return dbVals.value.filter((v) => v.product_name.toLowerCase() == product.toLowerCase())
}

function getSavedBanners (product) {
  return bannerVals.value.filter((v) => v.product_name.toLowerCase() == product.toLowerCase())
}

function getProducts () {
  let products = ["Example"]
  dbVals.value.forEach((v) => {
    if (!products.includes(v.product_name.toLowerCase())) {
      products.push(v.product_name.toLowerCase())
    }
  })

  bannerVals.value.forEach((v) => {
    if (!products.includes(v.product_name.toLowerCase())) {
      products.push(v.product_name.toLowerCase())
    }
  })

  return products
}

function goTo (val) {
  config.$patch(val)
  router.push(`/edit/${val.id}`)
}

function goToBanner (val) {
  config.$patch(val)
  router.push(`/banners/edit/${val.id}`)
}
</script>

<template>
<div class="container">
<div class="columns is-multiline" v-if="loaded">
  <div class="column is-4" v-for="product in getProducts()">
    <main class="main browse">
      <MVLogo/>
      <div v-for="val in getSavedBanners(product)" @click="goToBanner(val)" style="position: relative">
        <BannerBase :config="val"/>
      </div>
      <CarouselMarker v-if="getSavedBanners(product).length > 0"/>
      <div class="header mt-5">
        My Products ({{ product }})
      </div>
      <button class="button is-loading is-fullwidth" v-if="!loaded">Loading</button>
      <div v-for="val in getSavedCards(product)" @click="goTo(val)" style="position: relative">
        <ProductBase :config="val"/>
      </div>
    </main>
  </div>
</div>
<button class="button is-loading is-fullwidth" v-if="!loaded">Loading</button>
</div>
</template>

<style>
main.main.browse {
  height: 325px;
  overflow-y: scroll;
}

button.close {
  position: absolute;
  right: -10px;
  top: 0px;
  z-index: 100;
  font-size: 10px;
}
</style>
