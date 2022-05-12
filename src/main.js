import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// import { library } from '@fortawesome/fontawesome-svg-core'

// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



// library.add(faHatWizard)


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
// const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkdWxraGFrIiwiYSI6ImNsMjd1ZTN5ejAxODIzY3AzcTRjc2sxcHAifQ.5NyEXgxDRXYrFwLhn7zW5Q';





const app = createApp(App)

// app.use(FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
