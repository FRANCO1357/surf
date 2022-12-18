<template>
    <div class="container py-5 d-flex flex-column align-items-center">
        <h5 class="bg-danger p-2 text-white text-center d-inline">PREVENTIVO</h5>
        <h2 class="text-center d-none d-md-block">Vuoi un preventivo?</h2>
        <h3 class="text-center d-md-none">Vuoi un preventivo?</h3>
        <p>Se desideri ricevere un preventivo lascia qua sotto i tuoi dati e ti ricontatteremo il prima possibile!</p>
        <form class="mt-5">
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="name">Nome</label>
                    <input type="text" class="form-control" id="name">
                </div>
                <div class="form-group col-md-4">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group col-md-4">
                    <label for="phone">Numero di telefono</label>
                    <input type="phone" class="form-control" id="phone">
                </div>
            </div>
            <button type="submit" class="btn btn-danger rounded-0">Invia</button>
        </form>
    </div>

</template>

<script>
export default{
    name: 'AppForm',
}
</script>

<style scoped lang="scss">
h2{
    font-size: 56px;
}
form{
    width: 100%;

    .btn-danger{
        font-size: 18px;
        padding: 10px 20px;
    }
}
</style>