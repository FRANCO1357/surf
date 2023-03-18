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

        .btn-soft {
            --clr-font-main: hsla(0 0% 20% / 100);
            --btn-bg-1: rgb(142, 142, 142);
            --btn-bg-2: rgb(49, 49, 55);
            --btn-bg-color: hsla(360 100% 100% / 1);
            --radii: 0.5em;
            cursor: pointer;
            padding: 10px 40px;
            font-size: 20px;
            transition: 0.8s;
            background-size: 280% auto;
            background-image: linear-gradient(325deg, var(--btn-bg-2) 0%, var(--btn-bg-1) 55%, var(--btn-bg-2) 90%);
            border: 2px solid white;
            border-radius: 0px;
            color: var(--btn-bg-color);
            box-shadow: 0px 0px 20px rgba(56, 56, 56, 0.5), 0px 5px 5px -1px rgba(84, 84, 84, 0.25), inset 4px 4px 8px rgba(62, 62, 62, 0.5), inset -4px -4px 8px rgba(44, 44, 44, 0.35);

            &:hover{
                background-position: right top;
            }
        }

.btn-soft:is(:focus, :focus-within,:active) {
  outline: none;
  box-shadow: 0 0 0 3px var(--btn-bg-color), 0 0 0 6px var(--btn-bg-2);
}

@media (prefers-reduced-motion: reduce) {
  .btn-soft {
    transition: linear;
  }
}
    }
}

.carousel-indicators{
    z-index: 3;
}

@media (max-width: 600px){

    .carousel-inner{
        .carousel-caption{
            width: 80%;
        h2{
            font-size: 32px;
        }
    }
    }
    
}


</style>