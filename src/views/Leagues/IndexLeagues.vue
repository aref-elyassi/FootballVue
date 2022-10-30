<template>
    <LeaguesDetail :detailsLeague="leagues" />

</template>

<script>

import LeaguesDetail from '@/components/LeaguesDetail.vue';
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
    setup() {
        const store = useStore()
        const router=useRoute()
        const leagues = computed(() => store.getters.getLeaguesById(router.params.name))
        return{leagues}
    },

    components: { LeaguesDetail }
}
</script>

<style lang="scss" scoped>

</style>