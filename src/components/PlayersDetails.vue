<template>
    <div class="container-fluid">
        <div class="row ">
            <section class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center mt-3">
                <h1 class="text">{{player.name}}</h1>
            </section>
            <figure class="col-md-6 col-sm-12 mt-3">
                <img :src="require(`@/assets/images/${player.image}`)" alt="">
            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        props:['player']
    }
</script>

<style  scoped>
.text{
    color: #c2c2c2;
}
.container-fluid{
    background:#1C3F60;
    height: 100vh;
}
img{
    width: 40vw;
    height: 80vh;
    border-radius: 50%;
}
</style>