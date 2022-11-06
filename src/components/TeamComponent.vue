<template>
   <div class="card m-3">
        <div class="image d-flex align-items-center justify-content-center">

            <img :src="require(`@/assets/images/${team.logo}`)" class="card-img-top mt-2" alt="...">
        </div>
        <div class="card-body">
            <h2 class="card-title">{{team.name}}</h2>
            <h6 class="card-text">Established Year:{{team.founded}}</h6>
                <router-link class="router" :to="{name:'teamId',params:{name:team.name}}">Details Of {{team.name}}</router-link>
           
        </div>
    </div>
</template>

<script>
    export default {
        props:['team']
    }
</script>

<style  scoped>
img{
    height: 12rem;
  width: 12rem;
 
 
}
.router{
    text-decoration: none;
    color: rgb(128, 128, 128);
}
.router:hover{
    color: rgb(253, 5, 5);
    text-decoration: underline;
}
.card{
    background: #B1D4E0;
}
</style>