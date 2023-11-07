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
                <li v-for="item in nav"><a href="#">{{ item }}</a></li>
                  

            </ul>
            
            <div class="boolean-logo">
                <img src="/img/boolean-logo.png" alt="">
            </div>
            <div class="icons">
                <span class="e-code"><font-awesome-icon :icon="['fas', 'basket-shopping']" /></span><span class="e-code"><font-awesome-icon :icon="['fas', 'user']" /></span><span class="e-code"><font-awesome-icon :icon="['fas', 'heart']" /></span>
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

        .e-code {
        padding: 0 5px;
    }
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


