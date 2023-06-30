<template>
    <header>
        <div class="container px-4">
            <div class="row justify-content-between align-items-center">
                <div class="col-6 col-md-3">
                    <img src="../../../public/images/surf/surf-logo.png" alt="" class="img-fluid">
                </div>
                <div class="col-6 col-md-9 d-flex d-md-block justify-content-end">
                    <i class="fa-solid fa-bars fa-2x d-block d-md-none"></i>
                    <div class="nav row text-right d-none d-md-flex">
                        <div class="col-2">link</div>
                        <div class="col-2">link</div>
                        <div class="col-2">link</div>
                        <div class="col-2">link</div>
                        <div class="col-2">link</div>
                        <div class="col-2">link</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "AppHeader",
}
</script>

<style scoped lang="scss">
header {
    width: 100%;
    height: 80px;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style> 