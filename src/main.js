import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import './styles/index.scss'
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'
const app = createApp(App).use(PrimeVue).mount('#app')
