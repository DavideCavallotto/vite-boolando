<script>

export default {
    data() {
        return {
            imgs: [
                {
                    imgFirst: '/img/1.webp',
                    imgSecond: '/img/1b.webp',
                    brand: 'Levi\'s',
                    price: '14,99 €',
                    oldPrice: '29,99 €',
                    sustainable: 'sostenibilità',
                    discountPrice: '50%',
                    fit: 'Relaxed fit tee unisex'

                },
                {
                    imgFirst: '/img/2.webp',  
                    imgSecond: '/img/2b.webp',
                    brand: 'Guess',
                    price: '20,99 €',
                    oldPrice: '29,99 €',
                    sustainable: '',
                    discountPrice: '30%',
                    fit: 'Roses tee'
                },
                {
                    imgFirst: '/img/3.webp',
                    imgSecond: '/img/3b.webp',
                    brand: 'Come Zucchero Filato',
                    price: '129,99 €',
                    oldPrice: '184,99 €',
                    sustainable: '',
                    discountPrice: '30%',
                    fit: 'Voglia di colori pastello'
                },
                {
                    imgFirst: '/img/4.webp',
                    imgSecond: '/img/4b.webp',
                    brand: 'Levi\'s',
                    price: '14,99 €',
                    oldPrice: '29,99 €',
                    sustainable: 'sostenibilità',
                    discountPrice: '50%',
                    fit: 'Tee unisex'
                },
                {
                    imgFirst: '/img/5.webp',
                    imgSecond: '/img/5b.webp',
                    brand: 'Maya Deluxe',
                    price: '99,99 €',
                    oldPrice: '',
                    sustainable: '',
                    discountPrice: '',
                    fit: 'Stripe body'
                },
                {
                    imgFirst: '/img/6.webp',
                    imgSecond: '/img/6b.webp',
                    brand: 'Esprit',
                    price: '29,99 €',
                    oldPrice: '',
                    sustainable: 'sostenibilità',
                    discountPrice: '',
                    fit: 'Maglione black'
                    
                }               
                                
            ],            
            
        }
    },
    methods: {

    }
}

</script>

<template>

    <div class="main-section">
        <div class="container">
            <div class="row">
                <div class="col-3" v-for="(item,index) in imgs">
                    <div class="card img-dimension">
                        <div class="card-figure">
                            <figure class="img-dimension"><img class="img-dimension prima" :src="item.imgFirst" alt=""></figure>
                            <figure class="img-dimension"><img class="img-dimension dopo" :src="item.imgSecond" alt=""></figure>
                            <span class="hearth">&hearts;</span>
                            <span class="hearth red-hearth">&hearts;</span>
                            <p class="red-box">{{item.discountPrice}}</p>
                            <p class="green-box">{{item.sustainable}}</p>
                        </div>

                        <div class="product-information">
                            <p class="brand">{{ item.brand }}</p>
                            <p class="fit">{{item.fit}}</p>
                            <p class="prize">{{ item.price }} <span class="old-prize">{{item.oldPrice}}</span></p>
                        </div>
                    </div>
                </div>

                
            </div>                
            
        </div>
            
    </div>    

</template>

<style lang="scss" scoped>

.col-3 {   
    flex-basis: calc((100% * 3) /12);
    position: relative; 
}
.container { 
    margin: 0 auto;
    padding: 100px 0;
}
.card-figure {
    position: relative;
}
.row {
    display: flex;
    justify-content: center;   
    gap: 20px;   
    flex-wrap: wrap;
    column-gap: 15px;    
}
.hearth {
    display: inline-block;
    font-size: 30px;
    text-align: center;
    width: 35px;
    height: 35px;
    background-color: white;
    position: absolute;
    right: 0;
    top: 10px;
}
.red-box {
    background-color: red;
    color: white;
    position: absolute;   
    bottom: 20px;
    left: 0; 
    line-height: 20px;
    font-size: 15px;
    font-weight: bold;
    padding: 0 10px;
    letter-spacing: 1px;
}
.discount {
    display: flex;
}
.green-box {
    background-color: greenyellow;
    color: white;
    position: absolute;
    bottom: 20px;
    left: 65px;
    font-size: 15px;
    font-weight: bold;
    padding: 0 10px;
    letter-spacing: 1px;
    line-height: 20px;

}
.no-discount {
    left: 0;
}
.brand {
    font-size: 12px;
    color: rgb(102, 102, 102);
}
.fit {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
}
.prize {
    font-size: 11px;
    color: red;
    font-weight: bold;
}
.old-prize {
    color: rgb(102, 102, 102);
    text-decoration: line-through;
}
.card:hover .dopo {
    opacity: 1;
}
.dopo {
    position: absolute;
    top: 0;
    opacity: 0;
}
.red-hearth {
    color: red;
    opacity: 0;
}
.red-hearth:hover {
    opacity: 1;
}

</style>