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
            // infoCards: boolandoJson.products,
            open: false,
            selectedInfo: {},
        }
    },    
    methods: {
        openModal(card) {
            this.selectedInfo = card
            this.open = true
        },
        // showModal(information) {
        //     this.selectedInfo = information
        //     this.open = true
        // },
        closeModal() {
            this.open = false
        }

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
                <AppCard v-for="(infoCard,i) in store.infoProducts" :card="infoCard" @show="openModal"/>
                
            </div>                
            
            <div v-if="open" class="modal">
                <div class="card">
                    <div>
                        {{ selectedInfo.brand }}
                    </div> 
                    <div>
                        <img class="img-product" :src="/img/ + selectedInfo.frontImage" alt="">

                    </div>                             
                    <span @click="closeModal()">
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-xmark" /></a>
                    </span>
                </div>

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

.modal::after {
  content: '';
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background-color: rgba(0,0,0,0.5);
}
.modal .card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img-product {
    width: 200px;
}

</style>