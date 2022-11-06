<template>
    <div class="container-fluid">
        <div class="row d-flex align-items-center justify-content-center">

            <h1 class="text-center">Leagues</h1>
            <div v-for="league in leagues" :key="league.id" class="col-md-3 col-sm-6 ">
                <LeaguesComponent :leagues="league" />
            </div>
        </div>
    </div>
</template>

<script>

import LeaguesComponent from '@/components/LeaguesComponent.vue';
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {

        const store = useStore()
        const leagues = computed(() => store.getters.allLeagues)
        return { leagues }
    },

    components: { LeaguesComponent }
}
</script>

<style  scoped>
.container-fluid{
    background: #1C3F60;
}
</style>