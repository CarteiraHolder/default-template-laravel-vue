import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import DefaultLayout from '../components/DefaultLayout/DefaultLayout.vue'
import Dashboard from '../view/Dashboard.vue'

import AuthLayout from '../components/AuthLayout.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
import Forgot from '../view/Forgot.vue'
import Reset from '../view/Reset.vue'

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard,
                meta: { name: 'Dashboard' }
            },
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        component: AuthLayout,
        meta: { isGuest: true },
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
            {
                path: '/forgot',
                name: 'Forgot',
                component: Forgot
            },
            {
                path: '/reset',
                name: 'Reset',
                component: Reset
            },
        ]
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {

    if (to.meta.requiresAuth && !store.state.user.token)
        next({ name: 'Login' })
    else if (store.state.user.token && to.meta.isGuest)
        next({ name: 'Dashboard' })
    else
        next()
})

export default router