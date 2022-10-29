<template>
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <h1 class="navbar-brand" href="#">Football Project</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                   
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                           
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                           
                            <router-link to="/players" class="nav-link">Players</router-link>
                        </li>
                        <li class="nav-item">
                           
                            <router-link to="/teams" class="nav-link">Teams</router-link>
                        </li>
                        <li class="nav-item">
                           
                            <router-link to="/leagues" class="nav-link">Leagues</router-link>
                        </li>
                        <li class="nav-item">
                           
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                       
                       
                    </ul>
                  
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