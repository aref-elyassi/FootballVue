<template>
   <div class="container-fluid">
        <div class="row d-flex align-items-center justify-content-center">

            <h1 class="text-center text-white">Leagues</h1>
            <div v-for="team in teams" :key="team.id" class="col-md-4 col-sm-6 ">
                <TeamComponent :team="team" />
            </div>
        </div>
    </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import TeamComponent from '@/components/TeamComponent.vue'
export default {
    setup() {
        const store = useStore();
        const teams = computed(() => store.getters.allTeams);
        return { teams };
    },
    components: { TeamComponent }
}
</script>

<style  scoped>
.container-fluid{
    background: #1C3F60;
}
</style>