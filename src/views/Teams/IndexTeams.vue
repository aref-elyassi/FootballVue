<template>
    <div >
     <TeamDetails :teamDetails="teams"/>
    </div>
</template>

<script>

import TeamDetails from '@/components/TeamDetails.vue'
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
export default {
    setup() {
    const router = useRoute()
    const store=useStore()
    const teams=computed(()=>store.getters.getTeamsById(router.params.name))
    return{teams}
    },
    components: { TeamDetails }
}
</script>

<style lang="scss" scoped>

</style>