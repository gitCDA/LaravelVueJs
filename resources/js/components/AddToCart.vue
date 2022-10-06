<template>

    <div class="flex items-center justify-between py-4 h-5 w-5" id="app">
        <button class="bg-indigo-500 text-white p-2"
            v-on:click.prevent="addToCart">
            Ajouter au panier
        </button>
    </div>

</template>

<script>

    // const addToCart = () => {
    //     console.log('added');
    // }

    export default {
        addToCart() {
            console.log('added');
        }
    }
    
</script>