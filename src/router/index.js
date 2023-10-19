import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'default',
        component: () => import('@/layouts/DefaultLayout.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/HomeView.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/AboutView.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: () => import('@/views/NotFoundView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: 'smooth' })
            }, 100)
        })
    },
})

router.beforeEach((to, from, next) => {
    const store = useUserStore()

    if (to.meta.requiresAuth && !store.getToken) {
        next({ name: 'login' })
    } else if (!to.meta.requiresAuth && store.getToken) {
        next({ name: 'home' })
    } else {
        next()
    }
})

export default router
