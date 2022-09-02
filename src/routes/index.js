import { createRouter, createWebHashHistory } from "vue-router";

import DashBoard from '../views/DashBoard'
import BlankPage from '../views/BlankPage'
import PageNotFound from '../views/PageNotFound'

const routes =[
    { path:'/', component:DashBoard },
    { path:'/blank', component:BlankPage },
    { path:'/pagenotfound', component:PageNotFound },
    
];

export const router = createRouter({
    history:createWebHashHistory(),
    routes,
})