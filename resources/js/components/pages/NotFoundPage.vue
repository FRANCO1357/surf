<template>
    <div id="not-found-page" class="flex-column d-flex align-items-center justify-content-center">
        <h2>404</h2>
        <p>Not found page</p>
    </div>
    </template>
    
<script>
    export default{
    name: "NotFoundPage",
    mounted(){
        
    }
    }
</script>
    
<style scoped lang="scss">
    #not-found-page{
        color: white;
        height: 80vh;
        background-size: cover;
        text-shadow: 0 0 10px rgb(0, 0, 0, 0.5);

        h2{
            font-size: 150px;
        }

        p{
            font-size: 38px;
        }
    }
</style>