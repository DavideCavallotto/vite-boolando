<script>

export default {
    data() {
        return {
            
            
        }
    },
    props: {
        card:Object
    },
    
    methods: {

    },
    
}

</script>

<template>

<div class="col-3">
    <div class="card img-dimension">
        <div class="card-figure">
            <figure class="img-dimension"><img class="img-dimension prima" :src="/img/ + card.frontImage" alt=""></figure>
            <figure class="img-dimension"><img class="img-dimension dopo" :src="/img/ + card.backImage" alt=""></figure>
            <span class="hearth" :class="card.isInFavorites===false ? 'green-heart': true">&hearts;</span>
            <span class="hearth red-hearth">&hearts;</span>
            <div class="badges">
                <p v-for="badge in card.badges" class="red-box" :class="badge.type==='tag' ? 'green-box' : 'Sostenibilità'">{{ badge.value }}</p>
                <!-- <p class="red-box">ciao</p>
                <p class="green-box">ciao</p> -->
            </div>
        </div>

        <div class="product-information">
            <p class="brand">{{card.brand}}</p>
            <p class="fit">{{card.name}}</p>
            <p class="prize">{{card.price}}<span class="old-prize"></span></p>
        </div>
    </div>
</div>
  

</template>

<style lang="scss" scoped>
.col-3 {   
    flex-basis: calc((100% * 3) /12);
    position: relative; 
}

.card-figure {
    position: relative;
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

.badges {
    display: flex;
    gap: 5px;
    position: absolute;
    bottom: 20px;
    left: 0; 
}
.red-box {
    background-color: red;
    color: white;  
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

.green-heart {
    color: greenyellow;
}
</style>