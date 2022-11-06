<template>
    <div>
        <PlayersDetails :player="player"/>
    </div>
</template>

<script>


import { computed } from 'vue'
import { useStore } from 'vuex'
import {useRoute} from 'vue-router'
import PlayersDetails from '@/components/PlayersDetails.vue'
export default {
    setup() {
        const store = useStore()
        const router=useRoute()
        const player = computed(() => store.getters.getPlayerById(router.params.name))
        return{player}
    },

    components: {  PlayersDetails }
}
</script>


<style lang="scss" scoped>

</style>