<script>

export default {
  data() {
    return {
      nav: [
        'Uomo',
        'Donna',
        'Bambino'
      ],
    }
  }, 
  methods: {
    
  }
}

</script>

<template>
    <div class="page-header">
        <div class="row-header">              
            
            <ul class="menu">
                <li v-for="items in nav"><a href="#">{{ items }}</a></li>
                  

            </ul>
            
            <div class="boolean-logo">
                <img src="/img/boolean-logo.png" alt="">
            </div>
            <div class="icons">
                <span class="e-code">&#x1F45C;</span><span class="e-code">&#128100;</span><span class="e-code">&#10084;</span>
            </div>               

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.page-header {
    background-color: $header_color;

    .row-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    .icons {
        color: white;
    }

    .boolean-logo {
        width: 200px;
    }
    .menu {
    display: flex;

    a {
        color: white;
        margin: 0 10px;
    }
    
    }
}
   
}



</style>
