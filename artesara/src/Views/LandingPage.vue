<template>
    <div class="container">
        <router-link to="/home">
            <img src="../assets/logo.png" class="logo"/>
        </router-link>
        <router-link to="/home" class="landing-link">
            <h2>Weiter</h2>
        </router-link>
        <router-link to="/home/impressum" class="landing-link">
            <h2>Impressum</h2>
        </router-link>
    </div>
</template>

<style scoped>
.logo{
    height: 50vh;
    animation: fadeIn 5s;
}

.landing-link {
    animation: fadeIn 6s;
    text-decoration: none;
    color: grey;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>