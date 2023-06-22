<template>
    <section>
        <img class="img-fluid layer" data-speed="1" :class="{'d-none' : isLight}" src="../../../public/images/immagini/html.png" alt="Francesco Melani HTML" @mousemove="parallax">
        <img class="img-fluid layer" data-speed="1" :class="{'d-none' : !isLight}" src="../../../public/images/immagini/html-light.png" alt="Francesco Melani HTML" @mousemove="parallax">
        <img class="img-fluid layer" data-speed="2" :class="{'d-none' : isLight}" src="../../../public/images/immagini/css.png" alt="Francesco Melani CSS" @mousemove="parallax">
        <img class="img-fluid layer" data-speed="2" :class="{'d-none' : !isLight}" src="../../../public/images/immagini/css-light.png" alt="Francesco Melani CSS" @mousemove="parallax">
        <img class="img-fluid layer" data-speed="4" src="../../../public/images/immagini/sass.png" alt="Francesco Melani SASS" @mousemove="parallax">
        <img class="img-fluid layer" data-speed="2" src="../../../public/images/immagini/bootstrap.png" alt="Francesco Melani BOOTSTRAP" @mousemove="parallax">
        <img class="img-fluid layer" data-speed="2" src="../../../public/images/immagini/javascript.png" alt="Francesco Melani JAVASCRIPT" @mousemove="parallax">
        <img class="img-fluid layer" data-speed="2" src="../../../public/images/immagini/vue.png" alt="Francesco Melani VUE" @mousemove="parallax"> 
        <img class="img-fluid layer" data-speed="4" src="../../../public/images/immagini/php.png" alt="Francesco Melani PHP" @mousemove="parallax"> 
        <img class="img-fluid layer" data-speed="2" src="../../../public/images/immagini/laravel.png" alt="Francesco Melani LARAVEL" @mousemove="parallax"> 
        <img class="img-fluid layer" data-speed="3" src="../../../public/images/immagini/mysql.png" alt="Francesco Melani MYSQL" @mousemove="parallax"> 
    </section>
</template>

<script>
export default{
    name: 'AppParallax',
    data() {
        return {
            isLight: false,
            parallax(e){
            document.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed')

                const x = (window.innerWidth - e.pageX*speed)/50
                const y = (window.innerHeight - e.pageY*speed)/50

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
            },

        };
    },
    props: {
        isLight: {
            type: Boolean,
        },
    },
}
</script>

<style lang="scss" scoped>
    section{
        height: 100%;
        width: 100%;
        position: relative;

        img:nth-of-type(1), img:nth-of-type(2){
            width: calc(10% + 60px);
            position: absolute;
            top: 9%;
            left: 4%;
        }

        img:nth-of-type(3), img:nth-of-type(4){
            width: calc(10% + 60px);
            position: absolute;
            top: 14%;
            left: 22%;
        }

        img:nth-of-type(5){
            width: calc(10% + 60px);
            position: absolute;
            top: 5%;
            left: 40%;
        }

        img:nth-of-type(6){
            width: calc(10% + 50px);
            position: absolute;
            top: 16%;
            left: 59%;
        }

        img:nth-of-type(7){
            width: calc(8% + 60px);
            position: absolute;
            top: 6%;
            left: 78%;
        }

        img:nth-of-type(8){
            width: calc(10% + 60px);
            position: absolute;
            top: 48%;
            left: 5%;
        }

        img:nth-of-type(9){
            width: calc(15% + 60px);
            position: absolute;
            top: 48%;
            left: 23%;
        }

        img:nth-of-type(10){
            width: calc(22% + 80px);
            position: absolute;
            top: 30%;
            left: 45%;
        }

        img:nth-of-type(11){
            width: calc(22% + 80px);
            position: absolute;
            top: 40%;
            left: 65%;
        }

        // sotto i 900px
        @media (max-width: 900px){
            img:nth-of-type(1), img:nth-of-type(2){
            width: calc(22% + 60px);
            position: absolute;
            top: 6%;
            left: 5%;
        }

        img:nth-of-type(3), img:nth-of-type(4){
            width: calc(22% + 60px);
            position: absolute;
            top: 9%;
            left: 34%;
        }

        img:nth-of-type(5){
            width: calc(22% + 60px);
            position: absolute;
            top: 5%;
            left: 65%;
        }

        img:nth-of-type(6){
            width: calc(22% + 50px);
            position: absolute;
            top: 30%;
            left: 7%;
        }

        img:nth-of-type(7){
            width: calc(18% + 60px);
            position: absolute;
            top: 53%;
            left: 5%;
        }

        img:nth-of-type(8){
            width: calc(20% + 60px);
            position: absolute;
            top: 51%;
            left: 36%;
        }

        img:nth-of-type(9){
            width: calc(25% + 60px);
            position: absolute;
            top: 53%;
            left: 64%;
        }

        img:nth-of-type(10){
            width: calc(70% + 80px);
            position: absolute;
            top: 53%;
            left: 10%;
        }

        img:nth-of-type(11){
            width: calc(40% + 80px);
            position: absolute;
            top: 20%;
            left: 45%;
        }
        }

        // sotto i 540
        @media (max-width: 540px){
        img:nth-of-type(1), img:nth-of-type(2){
            width: calc(20% + 60px);
            position: absolute;
            top: 3%;
            left: 4%;
        }

        img:nth-of-type(3), img:nth-of-type(4){
            width: calc(20% + 60px);
            position: absolute;
            top: 5%;
            left: 32%;
        }

        img:nth-of-type(5){
            width: calc(20% + 60px);
            position: absolute;
            top: 2%;
            left: 63%;
        }

        img:nth-of-type(6){
            width: calc(20% + 50px);
            position: absolute;
            top: 27%;
            left: 7%;
        }

        img:nth-of-type(7){
            width: calc(14% + 60px);
            position: absolute;
            top: 50%;
            left: 4%;
        }

        img:nth-of-type(8){
            width: calc(18% + 60px);
            position: absolute;
            top: 51%;
            left: 36%;
        }

        img:nth-of-type(9){
            width: calc(22% + 60px);
            position: absolute;
            top: 50%;
            left: 64%;
        }

        img:nth-of-type(10){
            width: calc(65% + 80px);
            position: absolute;
            top: 49%;
            left: 8%;
        }

        img:nth-of-type(11){
            width: calc(40% + 80px);
            position: absolute;
            top: 16%;
            left: 41%;
        }
        }

        // sotto i 400
        @media (max-width: 420px){
        img:nth-of-type(1), img:nth-of-type(2){
            width: calc(35% + 55px);
            position: absolute;
            top: 3%;
            left: 2%;
        }

        img:nth-of-type(3), img:nth-of-type(4){
            width: calc(35% + 55px);
            position: absolute;
            top: 4%;
            left: 47%;
        }

        img:nth-of-type(5){
            width: calc(32% + 60px);
            position: absolute;
            top: 25%;
            left: 5%;
        }

        img:nth-of-type(6){
            width: calc(27% + 50px);
            position: absolute;
            top: 27%;
            left: 54%;
        }

        img:nth-of-type(7){
            width: calc(20% + 60px);
            position: absolute;
            top: 47%;
            left: 8%;
        }

        img:nth-of-type(8){
            width: calc(25% + 60px);
            position: absolute;
            top: 46%;
            left: 50%;
        }

        img:nth-of-type(9){
            width: calc(26% + 60px);
            position: absolute;
            top: 61%;
            left: 6%;
        }

        img:nth-of-type(10){
            width: calc(62% + 80px);
            position: absolute;
            top: 65%;
            left: 8%;
        }

        img:nth-of-type(11){
            width: calc(26% + 80px);
            position: absolute;
            top: 61%;
            left: 49%;
        }
    }

        // sotto i 390
        @media (max-width: 390px){
        img:nth-of-type(1), img:nth-of-type(2){
            width: calc(35% + 30px);
            position: absolute;
            top: 3%;
            left: 5%;
        }

        img:nth-of-type(3), img:nth-of-type(4){
            width: calc(35% + 30px);
            position: absolute;
            top: 4%;
            left: 50%;
        }

        img:nth-of-type(5){
            width: calc(32% + 30px);
            position: absolute;
            top: 25%;
            left: 8%;
        }

        img:nth-of-type(6){
            width: calc(27% + 30px);
            position: absolute;
            top: 27%;
            left: 56%;
        }

        img:nth-of-type(7){
            width: calc(20% + 30px);
            position: absolute;
            top: 47%;
            left: 10%;
        }

        img:nth-of-type(8){
            width: calc(25% + 30px);
            position: absolute;
            top: 46%;
            left: 53%;
        }

        img:nth-of-type(9){
            width: calc(26% + 40px);
            position: absolute;
            top: 60%;
            left: 7%;
        }

        img:nth-of-type(10){
            width: calc(62% + 50px);
            position: absolute;
            top: 62%;
            left: 9%;
        }

        img:nth-of-type(11){
            width: calc(26% + 60px);
            position: absolute;
            top: 60%;
            left: 50%;
        }
    }

}

        
    
</style>