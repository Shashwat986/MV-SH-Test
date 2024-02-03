<script setup>
import ProductBase from '../components/ProductBase.vue';
import { ref } from 'vue'

const config = ref({
  product_name: "Product Name",
  rupee: true,
  primary_field: "1,00,000",
  heading_2: "Rewards Earned",
  c2_color: "green",
  field_2: "₹1,000",
  message_2: "Next EMI",
  field_cta: "Pay Now",
  third_field_type: 'Bottom',
  field_3: "₹37/day",
  message: "Large message that goes to 2 lines\nThis is the second paragraph"
})

const tabList = ref(['Data Points', 'Data + CTA', 'Message'])
const activeTab = ref(tabList.value[0])

function configuration () {
  return {
    "Data Points": "C1",
    "Data + CTA": "C2",
    "Message": "C3"
  }[activeTab.value]
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
          :class="{'is-active': activeTab == tab}"
          @click="activeTab = tab"
        >
          <a>{{ tab }}</a>
        </li>
      </ul>
    </div>
    <div class="field">
      <label class="label">Product Name</label>
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
          <input class="input" type="text" v-model="config.product_name">
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Primary Field</label>
      <div class="control">
        <input class="input" type="text" v-model="config.primary_field">
      </div>
    </div>
    <hr>
    <template v-if="activeTab == 'Data Points'">
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
    <template v-if="activeTab == 'Data + CTA'">
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
    <template v-if="activeTab == 'Data Points'">
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
    <template v-if="activeTab == 'Message'">
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" v-model="config.message" placeholder="e.g. Hello world" rows="2"></textarea>
        </div>
      </div>
    </template>
  </div>
  <div class="column is-6">
    <main class="main">
      <div class="header">
        My Products
      </div>
      <ProductBase configuration="C1" :config="config" v-if="activeTab == 'Data Points'"/>
      <ProductBase configuration="C2" :config="config" v-if="activeTab == 'Data + CTA'"/>
      <ProductBase configuration="C3" :config="config" v-if="activeTab == 'Message'"/>
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
