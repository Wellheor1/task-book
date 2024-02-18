import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import './styles/index.scss'
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'
createApp(App)
    .use(PrimeVue)
    .use(Toast, {
        transition: "Vue-Toastification__bounce",
        maxToasts: 20,
        newestOnTop: true,
        position: POSITION.BOTTOM_RIGHT
    })
    .mount('#app')
