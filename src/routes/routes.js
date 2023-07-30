import Login from "../components/Login.vue"
import Home from "../components/Home.vue"
import Buscador from "../components/Buscador.vue"
import {createRouter, createWebHashHistory} from "vue-router"

const routes =[
    {path: "/" , component: Home},
    {path:"/login", component:Login},
    {path:"/buscador", component:Buscador}

]
export const router =createRouter({
    history : createWebHashHistory(),
    routes
})

// a