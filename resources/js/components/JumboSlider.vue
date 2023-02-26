<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../../../public/images/test/IMG-20220922-WA0023.jpg" class="d-block img-fluid w-100" alt="...">
            <div class="carousel-caption">
                <h2>Un viaggio nella miscelazione alla ricerca di nuovi sapori</h2>
                <p></p>
                <a href="#anchor-preventivo" class="btn btn-soft">Contattaci</a>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../../../public/images/test/IMG-20220922-WA0097.jpg" class="d-block img-fluid w-100" alt="...">
            <div class="carousel-caption">
                <h2>Realizziamo il tuo evento in qualcosa di unico</h2>
                <p></p>
                <a href="#anchor-preventivo" class="btn btn-soft">Contattaci</a>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../../../public/images/test/IMG-20220922-WA0046.jpg" class="d-block img-fluid w-100" alt="...">
            <div class="carousel-caption">
                <h2>Compleanni,feste, matrimoni, quello che manacava al tuo evento!</h2>
                <p></p>
                <a href="#anchor-preventivo" class="btn btn-soft">Contattaci</a>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>
</template>

<script>
export default{
    name: 'JumboSlider',
}
</script>

<style scoped lang="scss">
.carousel-inner{
    height: 100vh;
    position: relative;

    img{
        height: 100vh;
        object-fit: cover;
    }

    .carousel-caption{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            font-size: 42px;
            text-shadow: 0 0 4px rgb(65, 65, 65);
        }

        .btn-soft{
            background-color: #b48c80;
            border: 2px solid white;
            border-radius: 0;
            padding: 12px 40px;
            font-size: 18px;
            color: white;
        }
    }
}

.carousel-indicators{
        z-index: 3;
    }
</style>