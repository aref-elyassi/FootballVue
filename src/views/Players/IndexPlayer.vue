<template>
    <div>
        <PlayerComponent :player="leagues"/>
    </div>
</template>

<script>


import { computed } from 'vue'
import { useStore } from 'vuex'
import PlayerComponent from '@/components/PlayerComponent.vue'
export default {
    setup() {
        const store = useStore()
        const router=useRoute()
        const leagues = computed(() => store.getters.allLeagues)
        return{leagues}
    },

    components: { PlayerComponent }
}
</script>


<style lang="scss" scoped>

</style>