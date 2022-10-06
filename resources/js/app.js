import './bootstrap';
import '../css/app.css';

import Alpine from 'alpinejs';
import { createApp } from 'vue';
import AddToCart from './components/AddToCart.vue'

window.Alpine = Alpine;

Alpine.start();

const app = createApp();
// createApp({
//     data() {
//         console.log('first')
//       return {
//         count: 0
//       }
//     }
//   }).mount('#app')

// const btnClick = () => { 
//     console.log('2nd')
//  }

app._component('AddToCart', AddToCart);

app.mount('#app');
