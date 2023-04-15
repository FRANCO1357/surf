<template>
    <main :class="[isLight ? 'bg-white' : 'bg-black']">
        <div class="container py-5 h-100">
            <div class="row h-100">
                <div class="left col-12 col-md-6 h-100">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, recusandae ullam explicabo obcaecati itaque voluptatem. Perferendis sapiente fuga temporibus expedita excepturi ut provident, autem veniam libero alias aliquid qui dolores?
                    Dolorem nobis deserunt dolores eaque necessitatibus cum. Velit repudiandae neque animi natus perspiciatis iure incidunt facere minima, fugit iste quas autem soluta, odit, facilis obcaecati rem excepturi voluptatibus porro. Quibusdam?
                    Rem ea nostrum voluptas ipsum quos, non excepturi, fugiat error eligendi dignissimos aspernatur odio laudantium quae quas, cumque temporibus doloremque? Facere sapiente consequatur libero temporibus tenetur ipsum reprehenderit accusantium velit.
                    Accusamus explicabo ab odit animi obcaecati rem natus quos expedita dolorum est velit perferendis esse, repudiandae fugiat soluta rerum quibusdam! Obcaecati, quidem. Sint sapiente ipsa reprehenderit, facere saepe maxime ipsam!
                    Eligendi natus, unde nemo consequuntur, harum commodi eum earum incidunt minus dolorem dolorum maiores explicabo esse aspernatur qui optio quasi consequatur non hic, ipsam veritatis voluptatem! Soluta illum consequatur magni?
                    Sunt, nobis doloremque placeat, quod nemo magni suscipit voluptatibus fuga voluptatum laudantium quis tenetur. Commodi aliquid illo sint eum optio nulla. Accusamus dolorum officiis delectus blanditiis ratione porro, aspernatur qui.
                    Aliquam sapiente architecto ad quasi dolores. Soluta dolorum numquam maiores iure ad in aliquam quibusdam praesentium? Nihil, voluptatem commodi fuga voluptates, sint officiis quo unde vero ex culpa dicta distinctio.
                    Eius dolorem asperiores ipsa voluptatem magni, sit nihil omnis nulla exercitationem minus iure rem inventore numquam in accusantium ea sed itaque dignissimos natus porro accusamus commodi, fugiat, et libero. Dolor.
                    Sapiente hic maiores expedita illo dolores, reiciendis voluptate quis, voluptatibus eos odio praesentium? Sequi sapiente, nihil repudiandae debitis dolorum, at eligendi totam hic ad enim veritatis reprehenderit tenetur autem quibusdam?
                    Quam, doloribus! Voluptatum animi nemo nulla expedita architecto totam. Nihil vel nemo repellendus deserunt voluptate quis, alias dolorum tempore eum commodi quaerat dolor eos officia? Deserunt, repudiandae! Cupiditate, cumque aperiam?
                    Repellat consequatur velit perferendis. Illo fugiat officiis qui similique, assumenda unde nemo a. In soluta ipsa cumque aliquid, dolores architecto. Odit harum inventore et modi id ullam repellendus qui excepturi.
                    Error repudiandae quae perferendis at laudantium id odio ex? Rerum eius fugiat inventore? Incidunt mollitia consequuntur rerum, asperiores, qui est vel impedit eligendi earum illum suscipit inventore aperiam veniam perferendis.
                    Omnis nulla sed eveniet perspiciatis impedit quod qui ducimus minus. Dolorem, provident totam, exercitationem nulla culpa ad voluptatum aut deserunt quo harum, molestias a doloribus nam ipsam architecto minus molestiae?
                    Saepe molestiae similique error dolorum! Magnam, reprehenderit illum laudantium iste maiores ad distinctio vitae unde beatae dicta impedit possimus enim! Pariatur excepturi fugit iste modi impedit explicabo ab aliquam? Quidem!
                    Obcaecati inventore hic consectetur neque recusandae reprehenderit nisi perspiciatis molestias ratione quod aut, culpa maxime nemo, minima asperiores, amet impedit eum consequatur illo dolore quidem magni ducimus. Neque, asperiores perferendis.
                    Ad illum unde amet beatae doloremque labore tempore eligendi delectus fugit veritatis minima eius placeat, ipsa obcaecati quibusdam necessitatibus vero, incidunt sequi. Voluptates sapiente dicta odio labore dolor molestias corporis?
                    Ipsa earum voluptatibus optio in maxime, ad officia eaque animi magnam inventore aliquam neque cum aut molestias. Deleniti et voluptates ducimus dolore, explicabo quasi illo. Doloremque fugiat voluptas unde harum!
                    Officia at illo quis tempora. Ex placeat corrupti minima recusandae non, pariatur iusto adipisci culpa odio molestiae voluptatum corporis autem tenetur ipsa facilis odit omnis dicta illo praesentium blanditiis atque.
                    Voluptate minima reiciendis aliquam odit minus recusandae ratione quia, repellendus voluptates alias. Quisquam, reprehenderit ratione, ipsa, ipsam rem quam quia aperiam error vero aliquam nulla culpa consectetur saepe tempore quo!
                    Delectus, ducimus ratione dolorum, incidunt, similique fugit quia nesciunt neque porro soluta ipsum dolore quas laudantium mollitia optio odit? Eos earum vel magni beatae molestiae deserunt eius dolorem minima explicabo.</p>
                </div>
                <div class="right col-12 col-md-6 d-flex justify-content-center align-items-center h-100">
                    <figure class="col-12 col-sm-4">
                        <img class="img-fluid" src="../../../../public/images/immagini/avatar.webp" alt="">
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
    z-index: 2;
    height: 60vh;
    overflow: hidden;

    .left{
        overflow: scroll;
    }
}
</style>