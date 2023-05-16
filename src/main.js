import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { vuetify } from './vuetify/vuetify'
import VueGoogleMaps from 'vue-google-maps-community-fork'

import './assets/normalize.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDIDTNl5kMmX80LF6uxpAVilzubOgoXIR4'
  }
})

app.mount('#app')
