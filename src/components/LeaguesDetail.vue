<template>
    <div class="container-fluid">
        <div class="row rounded border p-5">
            <img class="col-md-4 detailsLeagueimage" :src="require(`@/assets/images/${detailsLeague.image}`)" alt="">
            <div class="content col-md-8 d-flex align-items-start flex-column">
                <h1 class="text">{{detailsLeague.name}}</h1>
                <hr>
                <h5 class="text">established Year:{{detailsLeague.establishedـyear}}</h5>
                <h5 class="text">Country:{{detailsLeague.country}}</h5>
                <h5 class="text">Number Of Teams:{{detailsLeague.number_of_teams}}</h5>
                <h3 class="mt-3 text">Best Teams</h3>
                <div class="teams d-flex align-items-center justify-content-center flex-wrap">
                    <div v-for="bestteams in detailsLeague.bestTeams" :key="bestteams.id" class="col-md-6 col-sm-12 mt-3
                    d-flex align-items-center justify-content-center flex-column">
                        <img class="bestteamsimage" :src="require(`@/assets/images/${bestteams.logo}`)" alt="">
                        <router-link class="text-decoration-none text txt"
                            :to="{name:'teamId',params:{name:bestteams.name}}">{{bestteams.name}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['detailsLeague']
}
</script>

<style  scoped>
.container-fluid {
    background: #1C3F60;
}

.row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;

}

.bestteamsimage {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: contain;
}

.detailsLeagueimage {
    width: 24rem;
    height: 23rem;
    object-fit: cover;
}

.content>h1 {
    font-size: 3rem;
}

.txt:hover {
    color: red;
}
.text{
    color: #c2c2c2;
}
</style>