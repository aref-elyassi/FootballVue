<template>
    <div class="container">
        <div class="row rounded border">          
            <div class="content col-md-8 d-flex align-items-start flex-column">
                <h1>{{detailsLeague.name}}</h1>
                <h1>established Year:{{detailsLeague.establishedـyear}}</h1>
                <h3>Best Teams</h3>
                
                <div v-for="bestteams in detailsLeague.bestTeams" :key="bestteams.id" class="d-flex align-items-center justify-content-center mt-3">
                    <img class="bestteamsimage" :src="require(`@/assets/images/${bestteams.logo}`)" alt="">
                    <h5>{{bestteams.name}}</h5>
                </div>
            </div>
            <img class="col-md-4 detailsLeagueimage" :src="require(`@/assets/images/${detailsLeague.image}`)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ['detailsLeague']
}
</script>

<style  scoped>
.row {
    display: flex;
    align-items: center;
    justify-content: center;
}
.bestteamsimage{
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
.content>h1{
    font-size: 3rem;
}
</style>