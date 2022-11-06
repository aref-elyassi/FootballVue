<template>
    
    <div class="card m-3">
        <div class="image d-flex align-items-center justify-content-center">

            <img :src="require(`@/assets/images/${leagues.image}`)" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h2 class="card-title">{{leagues.name}}</h2>
            <h6 class="card-text">Established Year:{{leagues.establishedـyear}}</h6>
                <router-link class="router" :to="{name:'leagueId',params:{name:leagues.name}}">Details Of {{leagues.name}}</router-link>
           
        </div>
    </div>
</template>

<script>
export default {
    props: ['leagues']
}
</script>

<style  scoped>
.card{
    background: #B1D4E0;
}
img{
    height: 15rem;
  width: 15rem;
 
 
}
.router{
    text-decoration: none;
    color: rgb(128, 128, 128);
}
.router:hover{
    color: rgb(253, 5, 5);
    text-decoration: underline;
}
</style>