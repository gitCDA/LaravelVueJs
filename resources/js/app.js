import './bootstrap';
import '../css/app.css';

import Alpine from 'alpinejs';
import { createApp } from 'vue';
import AddToCart from './components/AddToCart.vue'

window.Alpine = Alpine;

Alpine.start();

const app = createApp(AddToCart);

app.mount('#app');