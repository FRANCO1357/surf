<template>
    <main>

        <!-- jumbotron -->
        <div id="jumbotron">
            <JumboSlider/>
        </div>

        <!-- about -->
        <div id="about" class="container pt-5 text-center">
            <h2>Non siamo solo Bartenders:<br> siamo creatori di esperienze.</h2>
            <p class="mt-4">Soul Events Bar Catering</p>
            <a href="" class="btn btn-danger my-5">CHI SIAMO</a>
            <AboutSlider/>
            <div class="row py-5">
                <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
                    <div class="card border-0">
                        <h3>Scopri la qualità<br> del servizio</h3>
                        <a class="text-danger" href="">SCOPRI DI PIÙ</a>
                    </div>
                </div>
                <div class="col-12 col-md-4 my-5 d-flex align-items-center justify-content-center">
                    <div class="card border-0 flex-row">
                        <a href=""><i class="fa-brands fa-facebook-f text-danger p-3 mr-2 border border-danger"></i></a>
                        <a href=""><i class="fa-brands fa-instagram text-danger p-3 ml-2 border border-danger"></i></a>
                    </div>
                </div>
                <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
                    <div class="card border-0">
                        <h3>Vuoi venire a<br> trovarci?</h3>
                        <a class="text-danger" href="">VIA PAOLO ORSI, 47 00178 ROMA</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- event -->
        <div id="event" class="py-5 d-flex flex-column align-items-center">
            <div class="container py-4 d-flex flex-column align-items-center">
                <h5 class="bg-danger p-2 text-white text-center d-inline">IL TUO EVENTO</h5>
                <h2 class="text-center text-white my-3 d-none d-sm-block">Scopri i servizi di FBS Bar Catering</h2>
                <h3 class="text-center text-white my-3 d-sm-none">Scopri i servizi di FBS Bar Catering</h3>
                <p class="text-center text-white my-5">Ogni evento ha la sua ragione e le sue esigenze, ma con gli esclusivi servizi di Fbs Barcatering ogni evento sarà esattamente come immaginato e voluto. Scegliere un Open bar Fbs Barcatering significa scegliere un servizio di altissima qualità ed efficienza, svolto da soli Barman professionisti e soltanto con i migliori prodotti.</p>
            <div class="row pt-4 px-4">
                    <div class="col-12 col-md-4 p-0">
                        <img src="../../../public/images/test/barman-1.jpg" class="img-fluid" alt="...">
                    </div>
                    <div class="col-12 col-md-4 py-5 p-lg-5 bg-white d-flex flex-column align-items-center justify-content-around">
                        <a class="text-danger mb-3 mb-md-0" href="">SERVIZIO BAR</a>
                        <h4 class="text-center">Easy Bar Catering</h4>
                        <p class="text-center d-md-none d-lg-block">Una formula studiata per piccoli eventi, con grandi risultati.</p>
                        <a class="btn btn-danger mt-3 mt-md-0" href="">VISUALIZZA DETTAGLI</a>
                    </div>
                    <div class="col-12 col-md-4 p-0">
                        <img src="../../../public/images/test/barman-1.jpg" class="img-fluid" alt="...">
                    </div>
                    <div class="col-12 col-md-4 py-5 p-lg-5 bg-white d-flex flex-column align-items-center justify-content-around">
                        <a class="text-danger mb-3 mb-md-0" href="">SERVIZIO BAR</a>
                        <h4 class="text-center">Easy Bar Catering</h4>
                        <p class="text-center d-md-none d-lg-block">Una formula studiata per piccoli eventi, con grandi risultati.</p>
                        <a class="btn btn-danger mt-3 mt-md-0" href="">VISUALIZZA DETTAGLI</a>
                    </div>
                    <div class="col-12 col-md-4 p-0">
                        <img src="../../../public/images/test/barman-1.jpg" class="img-fluid" alt="...">
                    </div>
                    <div class="col-12 col-md-4 py-5 p-lg-5 bg-white d-flex flex-column align-items-center justify-content-around">
                        <a class="text-danger mb-3 mb-md-0" href="">SERVIZIO BAR</a>
                        <h4 class="text-center">Easy Bar Catering</h4>
                        <p class="text-center d-md-none d-lg-block">Una formula studiata per piccoli eventi, con grandi risultati.</p>
                        <a class="btn btn-danger mt-3 mt-md-0" href="">VISUALIZZA DETTAGLI</a>
                    </div>
                </div> 
            </div> 
            <a href="" class="btn btn-danger my-5 text-center">SCOPRI DI PIU'</a>          
        </div>

        <!-- services -->
        <div id="services">
            <div class="container py-5">
                <ThreeSlider/>
            </div>
        </div>

        <!-- counters -->
        <div id="counters">
            <div class="container py-5 d-flex flex-column align-items-center">
                <h5 class="bg-danger p-2 text-white text-center d-inline">I NOSTRI ALLESTIMENTI</h5>
                <h2 class="text-center text-white my-3 d-none d-sm-block">Adattabili a qualsiasi tipologia di Evento</h2>
                <h3 class="text-center text-white my-3 d-sm-none">Adattabili a qualsiasi tipologia di Evento</h3>
                <p class="text-center text-white my-4">FBS Bar Catering disponine di diverse tipologie di allestimento per riuscire ad accontentare tutti i gusti. Le nostre idee di allestimento originali potranno dare il tocco in più alla tua festa sia privata che aziendale.</p>
                <CounterSlider/>
                <a href="" class="btn btn-danger my-5 text-center">TUTTI GLI ALLESTIMENTI</a>    
            </div>
        </div>

        <section id="form">
            <AppForm/>
        </section>

        <footer>
            <AppFooter/>
            <div class="footer-bottom p-4 d-flex flex-column align-items-center">
                <p class="m-0">FBS Bar Catering © 2022. Tutti i diritti riservati.</p>
                <p class="m-0">Crafted with love by: <strong>Francesco Melani</strong></p>
            </div>
        </footer>
    </main>
</template>

<script>
import AboutSlider from './AboutSlider.vue';
import JumboSlider from './JumboSlider.vue';
import ThreeSlider from './ThreeSlider.vue';
import CounterSlider from './CounterSlider.vue';
import AppForm from './AppForm.vue';
import AppFooter from './AppFooter.vue';

export default{
    name: "HomePage",
    components: { JumboSlider, AboutSlider, ThreeSlider, CounterSlider, AppForm, AppFooter }
}
</script>

<style scoped lang="scss">
h2{
    font-size: 56px;
}
.btn-danger{
    border-radius: 0;
    padding: 12px 40px;
    font-size: 18px;
}

.row{
    .btn-danger{
        font-size: 12px;
        padding: 10px 15px;
    }
}

#event{
    background-image: url('../../../public/images/test/event-1.jpg');
    background-position: top;
    background-size: auto 100vh;
    background-repeat: no-repeat;
    min-height: 800px;
    background-color: #EDEAE6;
}

#counters{
    background-image: url(https://fbsbarcatering.it/wp-content/uploads/2019/11/background-lista-allestimenti.jpg?id=1197);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #EDEAE6;
}

footer{
    background-color: #252222;
    color: white;

    .footer-bottom{
        background-color: #1D1B1B;
    }
}
</style>