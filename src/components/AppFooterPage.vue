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
    <div class="footer-container">
        <div class="row-footer">
            <div class="col">
                <h3>Booleando s.r.l</h3>
                <ul class="information-company">
                    <li>Informazioni legali</li>
                    <li>Informativa sulla privacy</li>
                    <li>Diritto di recesso</li>
                </ul>
            </div>
            <div class="social">
                <p>Trovaci anche su</p>
                <ul class="information-network">
                    <li><img class="social-size" src="/img/facebook.png" alt=""></li>
                    <li><img class="social-size" src="/img/instagram.png" alt=""></li>
                    <li><img class="social-size" src="/img/twitter.png" alt=""></li>
                    <li><img class="social-size" src="/img/youtube.png" alt=""></li>
                   
                </ul>
            </div>

        </div>
    
    </div>    
</template>

<style lang="scss" scoped>
.footer-container {
background-color: black;   
color: white;

.row-footer {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
}
.social-size {
    width: 30px;    
    filter: invert(1);
}

.social {
    text-align: center;
}
.information-company, .information-network {    
    margin-top: 10px;
    display: flex; 
    gap: 10px; 
        
}

}


</style>