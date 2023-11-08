<script>
import AppCard from './AppCard.vue'
// import boolandoJson from '../db.json';
import { store } from '../store'
import axios from 'axios'

export default {
    data() {
        return {
            // imgs: [
            //     {
            //         imgFirst: '/img/1.webp',
            //         imgSecond: '/img/1b.webp',
            //         brand: 'Levi\'s',
            //         price: '14,99 €',
            //         oldPrice: '29,99 €',
            //         sustainable: 'sostenibilità',
            //         discountPrice: '50%',
            //         fit: 'Relaxed fit tee unisex'

            //     },
            //     {
            //         imgFirst: '/img/2.webp',  
            //         imgSecond: '/img/2b.webp',
            //         brand: 'Guess',
            //         price: '20,99 €',
            //         oldPrice: '29,99 €',
            //         sustainable: '',
            //         discountPrice: '30%',
            //         fit: 'Roses tee'
            //     },
            //     {
            //         imgFirst: '/img/3.webp',
            //         imgSecond: '/img/3b.webp',
            //         brand: 'Come Zucchero Filato',
            //         price: '129,99 €',
            //         oldPrice: '184,99 €',
            //         sustainable: '',
            //         discountPrice: '30%',
            //         fit: 'Voglia di colori pastello'
            //     },
            //     {
            //         imgFirst: '/img/4.webp',
            //         imgSecond: '/img/4b.webp',
            //         brand: 'Levi\'s',
            //         price: '14,99 €',
            //         oldPrice: '29,99 €',
            //         sustainable: 'sostenibilità',
            //         discountPrice: '50%',
            //         fit: 'Tee unisex'
            //     },
            //     {
            //         imgFirst: '/img/5.webp',
            //         imgSecond: '/img/5b.webp',
            //         brand: 'Maya Deluxe',
            //         price: '99,99 €',
            //         oldPrice: '',
            //         sustainable: '',
            //         discountPrice: '',
            //         fit: 'Stripe body'
            //     },
            //     {
            //         imgFirst: '/img/6.webp',
            //         imgSecond: '/img/6b.webp',
            //         brand: 'Esprit',
            //         price: '29,99 €',
            //         oldPrice: '',
            //         sustainable: 'sostenibilità',
            //         discountPrice: '',
            //         fit: 'Maglione black'
                    
            //     }               
                                
            // ],
            store: store,           
            // infoCards: boolandoJson.products
        }
    },    
    methods: {

    },
    components: {
        AppCard
    },
    created() {
        axios.get('http://localhost:3000/products')
        .then(res => {
            const infoProducts = res.data
            // console.log(infoProdutcs)
            this.store.infoProducts = infoProducts
        })
    }
}

</script>

<template>

    <div class="main-section">
        <div class="container">
            <div class="row">
                <AppCard v-for="infoCard in store.infoProducts" :card="infoCard"/>
                
            </div>                
            
        </div>
            
    </div>    

</template>

<style lang="scss" scoped>
.container { 
    margin: 0 auto;
    padding: 100px 0;
}
.row {
    display: flex;
    justify-content: center;   
    gap: 20px;   
    flex-wrap: wrap;
    column-gap: 15px;    
}

</style>