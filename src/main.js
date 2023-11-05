import App from '@/App.vue'
import router from '@/router'

import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import 'bootstrap'
import 'vue-toastification/dist/index.css'

import '@/assets/css/style.css'

import VueMask from '@devindex/vue-mask'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'

createApp(App)
    .use(router)
    .use(Toast, {
        // Setting the global default position
        position: POSITION.BOTTOM_RIGHT,
    })
    .use(createPinia())
    .use(VueMask)
    .mount('#app')
