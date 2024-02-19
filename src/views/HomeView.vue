<script setup>
import ProductBase from '../components/ProductBase.vue';
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()

import { useDatabaseList, useDatabaseObject } from 'vuefire'
import { firebaseWriter } from '../firebase.js'
const dbVals = useDatabaseList(firebaseWriter.ref('/cards'))
const loaded = useDatabaseObject(firebaseWriter.ref('/status'))

import { useConfigStore, baseState } from '../stores/config.js'
const config = useConfigStore()

const tabList = ref(['Data Points', 'Data + CTA', 'Message'])

function resetState () {
  config.$patch(baseState)
  router.push('/cards')
}

function relevantData () {
  let keys = ['type', 'product_name', 'rupee', 'primary_field', 'notif_dot'].concat({
    "Data Points": ['heading_2', 'field_2', 'third_field_type', 'field_3'],
    "Data + CTA": ['message_2', 'field_cta', 'c2_color'],
    "Message": ['message']
  }[config.type])

  let newObj = {}

  keys.forEach((key) => {
    newObj[key] = config[key]
  })

  if (newObj.type == 'Data + CTA' && ['orange', 'red'].includes(newObj.c2_color)) {
    newObj.notif_dot = false
  }

  return newObj
}

function saveRelevantData () {
  let d = relevantData()
  console.log(JSON.stringify(relevantData()))
  if (route.params.id) {
    firebaseWriter.set(`/cards/${route.params.id}`, relevantData())
  } else {
    firebaseWriter.push('/cards', relevantData())
  }
}

function getSavedCards (product) {
  return dbVals.value.filter((v) => v.product_name.toLowerCase() == product.toLowerCase())
}

function delCard(val) {
  firebaseWriter.del(`/cards/${val}`)
  router.push('/cards')
}

function goTo (val) {
  config.$patch(val)
  router.push(`/cards/edit/${val.id}`)
}
</script>

<template>
<div class="container">
<div class="columns">
  <div class="column is-6">
    <div class="tabs is-centered">
      <ul>
        <li
          v-for="tab in tabList"
          :class="{'is-active': config.type == tab}"
          @click="config.type = tab; config.type = tab"
        >
          <a>{{ tab }}</a>
        </li>
      </ul>
    </div>
    <h1 class="title is-5">
      SuperHome My Products Card Builder
    </h1>
    <h2 class="subtitle is-6">
      Here, you can play around with text lengths and copy for creating "My Products" cards. The first card on the right-hand side will change instanteously to show the current scenario. Additionally, you can choose from the 3 configurations using the tabs above. When you click on "Save" at the bottom of the screen, the card is saved. You can see all saved card for that specific product on this page, but the entire list of saved cards is visible in the "Browse" section.
    </h2>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control is-expanded">
        <input class="input" type="text" v-model="config.product_name">
      </div>
    </div>
    <div class="field">
      <label class="label">Primary Field</label>
      <div class="field has-addons">
        <p class="control">
          <span class="select">
            <select v-model="config.rupee">
              <option :value="false"> </option>
              <option :value="true">&#x20B9;</option>
            </select>
          </span>
        </p>
        <div class="control is-expanded">
          <input class="input" type="text" v-model="config.primary_field">
        </div>
      </div>
    </div>
    <div class="field">
      <label class="checkbox label" :disabled="config.type == 'Data + CTA' && (config.c2_color == 'orange' || config.c2_color == 'red')">
        <input type="checkbox" v-model="config.notif_dot" :disabled="config.type == 'Data + CTA' && (config.c2_color == 'orange' || config.c2_color == 'red')">
        Notification Dot?
      </label>
    </div>
    <hr>
    <template v-if="config.type == 'Data Points'">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Secondary Field Title</label>
            <div class="control">
              <input class="input" type="text" v-model="config.heading_2">
            </div>
          </div>
          <div class="field">
            <label class="label">Secondary Field Value</label>
            <div class="control">
              <input class="input" type="text" v-model="config.field_2">
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="config.type == 'Data + CTA'">
      <div class="field">
        <label class="label">Status</label>
        <div class="control">
          <label class="radio">
            <input type="radio" v-model="config.c2_color" :value="'green'">
            Green
          </label>
          <label class="radio">
            <input type="radio" v-model="config.c2_color" :value="'orange'">
            Orange
          </label>
          <label class="radio">
            <input type="radio" v-model="config.c2_color" :value="'red'">
            Red
          </label>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" v-model="config.message_2" rows="2"></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">CTA Text</label>
            <div class="control">
              <input class="input" type="text" v-model="config.field_cta">
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="config.type == 'Data Points'">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Third Field?</label>
            <div class="control">
              <label class="radio">
                <input type="radio" v-model="config.third_field_type" :value="null">
                No
              </label>
              <label class="radio">
                <input type="radio" v-model="config.third_field_type" :value="'Top'">
                On Top
              </label>
              <label class="radio">
                <input type="radio" v-model="config.third_field_type" :value="'Bottom'">
                On Bottom
              </label>
            </div>
          </div>
          <div class="field">
            <label class="label">Third Field Value</label>
            <div class="control">
              <input class="input" type="text" v-model="config.field_3" :disabled="!config.third_field_type">
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="config.type == 'Message'">
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" v-model="config.message" placeholder="e.g. Hello world" rows="2"></textarea>
        </div>
      </div>
    </template>
    <div class="buttons">
      <button class="button is-primary is-fullwidth" @click="saveRelevantData" v-if="!route.params.id">Save</button>
      <button class="button is-warning is-fullwidth" @click="saveRelevantData" v-if="route.params.id">Update</button>
      <button class="button is-outlined is-danger is-fullwidth" @click="delCard(route.params.id)" v-if="route.params.id">Delete</button>
      <button class="button is-default text-right" @click="resetState()">Reset</button>
    </div>
  </div>
  <div class="column is-6">
    <main class="main">
      <div class="header">
        My Products
      </div>
      <div @click="router.push('/cards')">
        <ProductBase :config="config"/>
      </div>
      <div class="header mt-5" v-if="getSavedCards(config.product_name).length > 0">
        Saved Cards
      </div>
      <button class="button is-loading is-fullwidth" v-if="!loaded">Loading</button>
      <div v-for="val in getSavedCards(config.product_name)" @click="goTo(val)">
        <ProductBase :config="val"/>
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

.header {
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 8px;
}
</style>
