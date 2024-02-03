import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Marquee from 'vue3-marquee'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { VueFire } from 'vuefire'
import { firebaseApp } from './firebase.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(Vue3Marquee)
app.use(router)

app.use(VueFire, {
    firebaseApp
})

app.mount('#app')
