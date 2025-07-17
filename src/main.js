import { createApp } from 'vue';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import { i18n } from './i18n';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App);
app.use(i18n);
app.use(router); 
app.use(BootstrapVue3);       
app.mount('#app');   
