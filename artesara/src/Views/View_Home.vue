<template>
    <div>

        <div class="container-fluid">

            <div class="sidebar">

                <img src="../assets/logo.png" style="height: 100px" />

                <h3 style="padding-top: 20px;">Artesara</h3>
                <h5>Inh. Sarah Giesler</h5>

                <ul class="sidebar-list">
                    <li 
                        v-for="item in menuitems"
                        :key="item"
                        class="sidebar-item"
                    >
                        <router-link :to="item.link">
                            <p class="sidebar-item-text">{{ item.title }}</p>
                        </router-link>
                    </li>
                    <li style="margin-top: 50px;">
                        <i style="margin-right: 30px" class="bi bi-instagram"></i>
                        <i style="margin-right: 10px" class="bi bi-share"></i>
                    </li>
                </ul>
    
            </div>

            <div class="content">
                <router-view/>
            </div>

            <div class="sidebar-right">
                <h2 class="events-title">Upcoming Events and Exhibitions</h2>
                <p class="events-text">Currently are no events planned.</p>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        menuitems: [
            { title: ' Gallery', link: '/home/gallery' },
            { title: 'Kontakt', link: '/home/contact' },
            { title: 'Impressum', link: '/home/impressum' }
        ]
    })
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');

h2 {
    font-family: 'Raleway', sans-serif;
}

h3 {
    font-family: 'Raleway', sans-serif;
}

h5 {
    font-family: 'Raleway', sans-serif;
}

.events-text {
    color: #4f4e4e;
    font-family: Raleway, sans-serif;
    font-weight: 400;
    line-height: 1.8em;
    letter-spacing: .02em;
    fill: #4f4e4e;
    font-size: 18px;
}

.events-title {
    color: #2d2d2d;
    font-family: Raleway, sans-serif;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: .01em;
    font-size: 40px;
    margin-top: 0;
}

a.router-link-exact-active {
    text-decoration: underline 0.15em!important;
    color: purple !important;
}
.container-fluid{
    display: flex;
    padding-left: 8vw;
    padding-right: 8vw;
    padding-top: 10vh;
    height: 100vh;
    /* background-color: red; */
    /* overflow-y: hidden; */
    flex-wrap: wrap;
}

.sidebar-right {
    height: 100vh;
    width: 10vw;
    margin-left: 70vw;
    position: fixed;
}

.sidebar {
    height: 100vh;
    width: 10vw;
    /* background-color: green; */
    position: fixed;
}

.sidebar-item {
    color: black;
}

.sidebar-item-text {
    color: black;
}

.content {
    /* display: flex; */
    margin-left: 10vw;
    padding-left: 1vw;
    margin-right: 2vw;
    width: 55vw;
}

.sidebar-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    padding-top: 20px;
}

.sidebar-list a {
    text-decoration: none;
}

/*Vue JS CSS Components*/
.fade-enter-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from {
    transition: opacity 0.5s ease;
}

.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>