<script setup>
import BannerBase from '../components/BannerBase.vue';
import CarouselMarker from '../components/CarouselMarker.vue';
import MVLogo from '../components/MVLogo.vue';
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()

import { useDatabaseList, useDatabaseObject } from 'vuefire'
import { firebaseWriter } from '../firebase.js'
const dbVals = useDatabaseList(firebaseWriter.ref('/banners'))
const loaded = useDatabaseObject(firebaseWriter.ref('/status'))

import { useBannerConfigStore, bannerBaseState } from '../stores/config.js'
const config = useBannerConfigStore()

const tabList = ref(['Data Points', 'Data + CTA', 'Message'])

function resetState () {
  config.$patch(bannerBaseState)
  router.push('/banner')
}

function relevantData () {
  let keys = ['product_name', 'title', 'subtitle', 'color', 'cta']

  let newObj = {}

  keys.forEach((key) => {
    newObj[key] = config[key]
  })

  if (newObj['cta'] == "" || !newObj['cta']) {
    newObj['cta'] = null
  }

  return newObj
}

function saveRelevantData () {
  let d = relevantData()
  console.log(JSON.stringify(relevantData()))
  if (route.params.id) {
    firebaseWriter.set(`/banners/${route.params.id}`, relevantData())
  } else {
    firebaseWriter.push('/banners', relevantData())
  }
}

function getSavedCards (product) {
  return dbVals.value.filter((v) => v.product_name.toLowerCase() == product.toLowerCase())
}

function delCard(val) {
  firebaseWriter.del(`/banners/${val}`)
  router.push('/banners')
}

function goTo (val) {
  config.$patch(val)
  router.push(`/banners/edit/${val.id}`)
}
</script>

<template>
<div class="container">
<div class="columns">
  <div class="column is-6">
    <h1 class="title is-5">
      SuperHome Product Banner Builder
    </h1>
    <h2 class="subtitle is-6">
      Here, you can play around with text lengths and copy for creating Status banners. The first banner on the right-hand side will change instanteously to show the current scenario. When you click on "Save" at the bottom of the screen, the banner is saved. You can see all saved banners for that specific product on this page, but the entire list of saved cards and banners is visible in the "Browse" section.
    </h2>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control is-expanded">
        <input class="input" type="text" v-model="config.product_name">
      </div>
    </div>
    <hr>
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <textarea class="textarea" v-model="config.title" placeholder="e.g. Hello world" rows="2"></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" v-model="config.subtitle" placeholder="e.g. Hello world" rows="2"></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Status</label>
      <div class="control">
        <label class="radio">
          <input type="radio" v-model="config.color" :value="'blue'">
          Blue
        </label>
        <label class="radio">
          <input type="radio" v-model="config.color" :value="'yellow'">
          Yellow
        </label>
        <label class="radio">
          <input type="radio" v-model="config.color" :value="'red'">
          Red
        </label>
      </div>
    </div>
    <div class="field">
      <label class="label">CTA</label>
      <div class="control">
        <input type="text" class="input" v-model="config.cta">
      </div>
    </div>
    <div class="buttons">
      <button class="button is-primary is-fullwidth" @click="saveRelevantData" v-if="!route.params.id">Save</button>
      <button class="button is-warning is-fullwidth" @click="saveRelevantData" v-if="route.params.id">Update</button>
      <button class="button is-outlined is-danger is-fullwidth" @click="delCard(route.params.id)" v-if="route.params.id">Delete</button>
      <button class="button is-default text-right" @click="resetState()">Reset</button>
    </div>
  </div>
  <div class="column is-6">
    <main class="main">
      <MVLogo/>
      <div @click="router.push('/banners')">
        <BannerBase :config="config"/>
      </div>
      <CarouselMarker/>
      <button class="button is-loading is-fullwidth" v-if="!loaded">Loading</button>
      <div v-for="val in getSavedCards(config.product_name)" @click="goTo(val)">
        <BannerBase :config="val"/>
      </div>
    </main>
  </div>
</div>
</div>
</template>

<style>
main.main {
  width: 360px;
  height: 925px;
  padding: 16px;
  background-color: #F2F2F7;
  margin: auto;
  overflow: hidden;
  word-wrap: break-word;
}
</style>
