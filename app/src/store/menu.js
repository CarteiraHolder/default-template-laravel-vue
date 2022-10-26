import { createStore } from 'vuex'
import { HomeIcon, UsersIcon, BookOpenIcon } from '@heroicons/vue/outline'

// Create a new store instance.
const store = createStore({
    state: {
        sidebarOpen: false,
        userNavigation: [
            // { name: 'Seu Perfil', to: '/profile' },
            // { name: 'Configuração', to: '#' },
        ],
        navigation: [
            { name: 'Dashboard', icon: HomeIcon, to: '/dashboard' },
            {
                name: 'Cadastros',
                icon: BookOpenIcon,
                children: [
                    { name: 'Clientes', to: '/clients?pag=list' },
                    // { name: 'Pessoas', to: '/person' },
                ],
            },

        ]
    },
    getters: {},
    actions: {
    },
    mutations: {
    },
    modules: {},
})

export default store