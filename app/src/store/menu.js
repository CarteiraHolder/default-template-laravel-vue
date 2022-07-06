import { createStore } from 'vuex'
import { HomeIcon, UsersIcon, GlobeIcon, CashIcon, StarIcon, PresentationChartBarIcon } from '@heroicons/vue/outline'

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
            // {
            //     name: 'Usuários',
            //     icon: UsersIcon,
            //     children: [
            //         { name: 'Empresas', to: '/company' },
            //         { name: 'Pessoas', to: '/person' },
            //     ],
            // },

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