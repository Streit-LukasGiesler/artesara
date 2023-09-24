import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../Views/LandingPage.vue'
import HomeView from '../Views/View_Home.vue'
import ImpressumView from '../Views/View_Impressum.vue'
import GalleryView from '../Views/View_Gallery.vue'
import ContactView from '../Views/View_Contact.vue'

const routes = [{
    path: '/',
    component: LandingPage
}, {
    path: '/home',
    component: HomeView,
    redirect: '/home/gallery',
    children: [
        { path: 'gallery', component: GalleryView },
        { path: 'impressum', component: ImpressumView },
        { path: 'contact', component: ContactView }
    ]
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router