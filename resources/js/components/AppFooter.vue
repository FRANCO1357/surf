<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                <h3 class="text-center my-4">Links rapidi</h3>
                <ul class="d-flex flex-column align-items-center p-0">
                    <li><a class="text-white" href="">Chi Siamo</a></li>
                    <li><a class="text-white" href="">Soluzioni Bar Catering</a></li>
                    <li><a class="text-white" href="">Allestimenti Bar</a></li>
                    <li><a class="text-white" href="">Configura il tuo Bar Catering</a></li>
                    <li><a class="text-white" href="">Cocktails</a></li>
                </ul>
            </div>
            <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                <h3 class="text-center mt-4">Social</h3>
                <a class="btn" href="https://instagram.com/tenerezaeventi?igshid=YmMyMTA2M2Y="><h3 class="text-soft mb-4">@tenerezaeventi</h3></a>
                <a class="px-5" href="https://instagram.com/tenerezaeventi?igshid=YmMyMTA2M2Y=">
                    <img class="img-fluid" src="../../../public/images/test/IMG-20220922-WA0066.jpg" alt="">
                </a>
            </div>
            <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                <h3 class="text-center my-4">Informazioni</h3>
                <ul class="d-flex flex-column align-items-center p-0">
                    
                    <li><a class="text-white" href="">Contatti</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'AppFooter',
}
</script>

<style scoped lang="scss">
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
</style>