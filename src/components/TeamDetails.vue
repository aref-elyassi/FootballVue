<template>
    <div class="container">
        <div class="row border rounded p-5 d-flex align-items-center justify-content-between">
            <h1 class="text-center">{{teamDetails.name}}</h1>
            <img class="stadium col-md-4 col-sm-12" :src="require(`@/assets/images/${teamDetails.stadium_image}`)"
                alt="">
            <div class="col-md-4 col-sm-12 d-flex align-items-center justify-content-center flex-column">
                <img class="team-logo col-md-4 col-sm-12 mb-2" :src="require(`@/assets/images/${teamDetails.logo}`)"
                    alt="">
                <h5>Founded in:{{teamDetails.founded}}</h5>
                <h5>Stadium:{{teamDetails.stadium}}</h5>
                <h5>Capacity: {{teamDetails.capacity}} person</h5>
            </div>
            <h3 class="text-center">Players</h3>
            <hr>
            <div class="teams d-flex align-items-center justify-content-center flex-wrap">
                    <div v-for="player in teamDetails.players" :key="player.id" class="col-md-2 col-sm-12 mt-3
                    d-flex align-items-center justify-content-center flex-column">
                        <img class="playerImage" :src="require(`@/assets/images/${player.image}`)" alt="" >
                        <router-link class="text-decoration-none text-dark txt"
                            :to="{name:'playerId',params:{name:player.name}}">{{player.name}}
                        </router-link>
                    </div>
                </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['teamDetails']
}
</script>

<style  scoped>
h1 {
    font-size: 3.2rem;
    border-bottom: 2px solid #000;
}

h5 {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(7, 142, 195);
}

.team-logo {
    width: 10rem;
}

.stadium {

    border-radius: 10px;
}

.playerImage {
    width: 10rem;
    height: 10rem;
    border-radius: 10px;
}
</style>