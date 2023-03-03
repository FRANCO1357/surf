<template>
    <footer>
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <h3 class="text-center my-4">Links rapidi</h3>
                    <ul class="d-flex flex-column align-items-center p-0">
                        <li><a class="text-white" href="#anchor-about">Chi Siamo</a></li>
                        <li><a class="text-white" href="#anchor-service">Bar Service</a></li>
                        <li><a class="text-white" href="#anchor-gallery">Gallery</a></li>
                        <li><a class="text-white" href="#anchor-aggiuntivi">Servizi Aggiuntivi</a></li>
                        <li><a class="text-white" href="#anchor-preventivo">Preventivo</a></li>
                    </ul>
                </div>
                <div id="social" class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <h3 class="text-center mt-4">Social</h3>
                    <div class="row my-3">
                        <a class="btn text-white" href="https://instagram.com/tenerezaeventi?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-instagram fa-2x"></i></a>
                        <a class="btn text-white" href="https://instagram.com/tenerezaeventi?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-facebook fa-2x"></i></a>
                        <a class="btn text-white" href="https://instagram.com/tenerezaeventi?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-tiktok fa-2x"></i></a>
                    </div>
                    <a class="px-5" href="https://instagram.com/tenerezaeventi?igshid=YmMyMTA2M2Y=">
                        <img class="img-fluid" src="../../../public/images/test/IMG-20220922-WA0066.jpg" alt="">
                    </a>
                </div>
                <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <h3 class="text-center my-4">Contatti</h3>
                    <ul class="d-flex flex-column align-items-center p-0">
                        <li><a class="text-white" href="tel:+393347540892"><i class="fa-solid fa-phone"></i> +39 3347540892</a></li>
                        <li><a class="text-white" href="mailto:info@tnzbarcatering.com"><i class="fa-solid fa-envelope"></i> info@tnzbarcatering.com</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom p-4 d-flex flex-column align-items-center">
            <p class="m-0">Tenereza Eventi © 2023. Tutti i diritti riservati.</p>
            <p class="m-0">Created with love by: <strong>Francesco Melani</strong></p>
        </div>
        
    </footer>
    
</template>

<script>
export default{
    name: 'AppFooter',
}
</script>

<style scoped lang="scss">

footer{
    background-image: url('../../../public/images/test/black-marble.jpg');
    background-size: cover;
    color: white;

    .footer-bottom{
        background-color: rgba(0, 0, 0, 0.5);
    }

    div{
    color: white;

    ul{
        text-decoration: none;
        list-style-type: none;
    }
}

.text-soft{
    color: #b48c80;
}

#social i{
    background-color: #b48c80;
    display: inline-block;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    &:hover{
        background-color: white;
        color: #b48c80;
    }
}
}

</style>