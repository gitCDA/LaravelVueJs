import './bootstrap';

import Alpine from 'alpinejs';
import { createApp } from 'vue';
import addToCart from './components/AddToCart.vue'

window.Alpine = Alpine;

Alpine.start();

const app = createApp();

new app.component('addToCart', addToCart);

app.mount('#root');
