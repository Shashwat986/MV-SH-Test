<script setup>
import ProductBase from '../components/ProductBase.vue';
import { ref } from 'vue'
import router from '../router'

import { useConfigStore } from '../stores/config.js'
const config = useConfigStore()

import { useDatabaseList, useDatabaseObject } from 'vuefire'
import { firebaseWriter } from '../firebase.js'
const dbVals = useDatabaseList(firebaseWriter.ref('/cards'))
const loaded = useDatabaseObject(firebaseWriter.ref('/status'))

function getSavedCards (product) {
  return dbVals.value.filter((v) => v.product_name.toLowerCase() == product.toLowerCase())
}

function getProducts () {
  let products = []
  dbVals.value.forEach((v) => {
    if (!products.includes(v.product_name.toLowerCase())) {
      products.push(v.product_name.toLowerCase())
    }
  })

  return products
}

function delCard(val) {
  firebaseWriter.del(`/cards/${val}`)
}

function goTo (val) {
  config.$patch(val)
  router.push(`/edit/${val.id}`)
}
</script>

<template>
<div class="container">
<div class="columns is-multiline" v-if="loaded">
  <div class="column is-4" v-for="product in getProducts()">
    <main class="main browse">
      <div class="header mt-5">
        My Products ({{ product }})
      </div>
      <button class="button is-loading is-fullwidth" v-if="!loaded">Loading</button>
      <div v-for="val in getSavedCards(product)" @click="goTo(val)" style="position: relative">
        <button class="button is-danger close" @click.stop="delCard(val.id)">
        x
        </button>
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
