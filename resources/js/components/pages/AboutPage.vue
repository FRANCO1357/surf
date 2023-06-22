<template>
    <main :class="[isLight ? 'bg-white' : 'bg-black']">
        <div class="container py-4 h-100">
            <div class="row h-100">
                <div class="left col-12 col-md-6 h-100">
                    <p>Benvenuti nella mia pagina "Chi Siamo"! Mi presento, io sono Francesco Melani e sono uno sviluppatore web appassionato con anni di esperienza nella progettazione e sviluppo di siti web e applicazioni web complesse. Ho lavorato con un'ampia gamma di clienti, dalle piccole imprese locali alle grandi aziende internazionali, aiutandoli a raggiungere i loro obiettivi online attraverso soluzioni personalizzate e innovative. <br><br>

                        La mia passione per lo sviluppo web è nata molti anni fa, quando ho deciso di creare il mio primo sito web. Da allora, ho continuato a coltivare questa passione, acquisendo sempre più conoscenze e competenze nel campo della programmazione web. Oggi, sono orgoglioso di essere in grado di offrire ai miei clienti soluzioni all'avanguardia che li aiutino ad avere successo online. <br><br>

                        Sono un professionista altamente qualificato, con una solida formazione accademica in informatica. Ho acquisito molte competenze e conoscenze attraverso anni di esperienza, ma sono sempre alla ricerca di nuove sfide e opportunità per crescere professionalmente. Mi piace lavorare con i miei clienti per capire le loro esigenze e offrire loro soluzioni personalizzate che soddisfino le loro aspettative e superino le loro aspettative. <br><br>

                        Il mio approccio allo sviluppo web è basato sull'attenzione ai dettagli e sulla qualità del lavoro. Credo che la chiave per un sito web di successo sia la capacità di fornire ai propri utenti un'esperienza d'uso eccellente. Per questo motivo, mi concentro su ogni aspetto del progetto, dalla progettazione dell'interfaccia utente alla scrittura del codice, per assicurarmi che il risultato finale sia perfetto sotto ogni aspetto. <br><br>

                        Oltre alla mia esperienza e alle mie competenze tecniche, offro anche un'ottima capacità di problem solving e di comunicazione. Mi piace lavorare con i miei clienti per comprendere le loro esigenze e offrire loro soluzioni personalizzate che soddisfino le loro aspettative e superino le loro aspettative. <br><br>

                        Sono appassionato di ciò che faccio e cerco sempre di migliorarmi. Mi tengo costantemente aggiornato sulle ultime tendenze e tecnologie nel campo dello sviluppo web, in modo da offrire ai miei clienti le soluzioni più innovative e all'avanguardia. <br><br>

                        Se stai cercando un professionista esperto e appassionato per il tuo prossimo progetto web, non esitare a contattarmi. Sarei lieto di discutere con te delle tue esigenze e di come posso aiutarti a raggiungere i tuoi obiettivi online. Grazie per aver visitato il mio sito web portfolio!
                    </p>
                </div>
                <div class="right col-12 col-md-6 d-flex justify-content-center align-items-center h-100">
                    <figure>
                        <img class="img-fluid" src="../../../../public/images/immagini/avatar.webp" alt="Francesco Melani Avatar">
                    </figure>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default{
    name: 'ProjectsPage',
    props: {
        isLight: {
            type: Boolean,
        },
    },
}
</script>

<style scoped lang="scss">
main{
    background-color: black;
    position: relative;
    z-index: 1;
    height: calc(100vh - 298px);
    overflow: hidden;

    .left{
        overflow: scroll;
    }
}

@media (max-width: 767px){
    main{
        height: auto;

        .row{
            flex-direction: column-reverse;
        }
    }
}
</style>