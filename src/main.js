import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import './styles/index.scss'
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'
createApp(App)
    .use(PrimeVue)
    .component('Toast', Toast)
    .use(ToastService)
    .mount('#app')
