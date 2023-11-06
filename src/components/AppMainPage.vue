<script>

export default {
    data() {
        return {
           
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
                <div class="col-3">
                    <div class="card img-dimension">
                        <div class="card-figure">
                            <figure class="img-dimension"><img class="img-dimension prima" src="/img/1.webp" alt=""></figure>
                            <figure class="img-dimension"><img class="img-dimension dopo" src="/img/1b.webp" alt=""></figure>
                            <span class="hearth">&hearts;</span>
                            <span class="hearth red-hearth">&hearts;</span>
                            <p class="red-box">-50%</p>
                            <p class="green-box">Sostenibilità</p>
                        </div>

                        <div class="product-information">
                            <p class="brand">Levi's</p>
                            <p class="fit">Relaxed fit tee unisex</p>
                            <p class="prize">14,99 $ <span class="old-prize">29,99 $</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-3">
                    <div class="card img-dimension">
                        <div class="card-figure">
                            <figure class="img-dimension"><img class="img-dimension prima" src="/img/2.webp" alt=""></figure>
                            <figure class="img-dimension"><img class="img-dimension dopo" src="/img/2b.webp" alt=""></figure>
                            <span class="hearth">&hearts;</span>
                            <span class="hearth red-hearth">&hearts;</span>
                            <p class="red-box">-30%</p>
                            
                        </div>

                        <div class="product-information">
                            <p class="brand">Guess</p>
                            <p class="fit">roses tea</p>
                            <p class="prize">20,99 $ <span class="old-prize">29,99 $</span></p>
                        </div>                   
                    </div>

                </div>

                <div class="col-3">
                    <div class="card img-dimension">
                        <div class="card-figure">
                            <figure class="img-dimension"><img class="img-dimension prima" src="/img/3.webp" alt=""></figure>
                            <figure class="img-dimension"><img class="img-dimension dopo" src="/img/3b.webp" alt=""></figure>
                            <span class="hearth">&hearts;</span>
                            <span class="hearth red-hearth">&hearts;</span>
                            <p class="red-box">-30%</p> 
                            
                        </div>

                        <div class="product-information">
                            <p class="brand">Come Zucchero Filato</p>
                            <p class="fit">voglia di colori pastello</p>
                            <p class="prize">129,99 $ <span class="old-prize">184,99 $</span></p>
                        </div>                                                
                    </div>
                </div>

                <div class="col-3">
                    <div class="card img-dimension">
                        <div class="card-figure">
                            <figure class="img-dimension"><img class="img-dimension prima" src="/img/4.webp" alt=""></figure>
                            <figure class="img-dimension"><img class="img-dimension dopo" src="/img/4b.webp" alt=""></figure>                            
                            <span class="hearth">&hearts;</span>
                            <span class="hearth red-hearth">&hearts;</span>
                            <p class="red-box">-50%</p>
                            <p class="green-box">Sostenibilità</p>
                            
                        </div>

                        <div class="product-information">
                            <p class="brand">Levi's</p>
                            <p class="fit">tee unisex</p>
                            <p class="prize">14,99 $ <span class="old-prize">29,99 $</span></p>
                        </div>                    
                    </div>
                </div>

                <div class="col-3">
                    <div class="card img-dimension">
                        <div class="card-figure">
                            <figure class="img-dimension"><img class="img-dimension prima" src="/img/5.webp" alt=""></figure>
                            <figure class="img-dimension"><img class="img-dimension dopo" src="/img/5b.webp" alt=""></figure>                            
                            <span class="hearth">&hearts;</span>
                            <span class="hearth red-hearth">&hearts;</span> 
                            
                        </div>

                        <div class="product-information">
                            <p class="brand">Maya Deluxe</p>
                            <p class="fit">Stripe bodies</p>
                            <p class="prize">99,99 $</p>
                        </div>                     
                    </div>                                 
                </div>

                <div class="col-3">
                    <div class="card img-dimension">
                        <div class="card-figure">
                            <figure class="img-dimension"><img class="img-dimension prima" src="/img/6.webp" alt=""></figure>
                            <figure class="img-dimension"><img class="img-dimension dopo" src="/img/6b.webp" alt=""></figure>                            
                            <span class="hearth">&hearts;</span>
                            <span class="hearth red-hearth">&hearts;</span>                        
                            <p class="green-box no-discount">Sostenibilità</p>
                            
                        </div>

                        <div class="product-information">
                            <p class="brand">Esprit</p>
                            <p class="fit">Maglione black</p>
                            <p class="prize">29,99 $</p>
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