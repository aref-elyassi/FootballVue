<template>
    

    <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
           
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link to="/" class="nav-link">Home</router-link>
                        <router-link to="/leagues" class="nav-link">Leagues</router-link>
                        <router-link to="/teams" class="nav-link">Teams</router-link>
                        <router-link to="/players" class="nav-link">Players</router-link>
                        <router-link to="/login" class="nav-link">Login</router-link>

                    </div>
                </div>
        </div>
    </nav>


</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>