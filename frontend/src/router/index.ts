import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue"
import GalleryPage from "../views/GalleryPage.vue"
import Contact from "../views/Contact.vue"

const routes = [
    {"path": "/home", component: Home},
    {"path": "/gallery", component: GalleryPage},
    {"path": "/contact", component: Contact}

]; 

export default createRouter({
    history: createWebHistory(), 
    routes,
})