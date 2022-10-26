import { createStore } from 'vuex'
import axios from '../plugins/axios'
import Swal from './swal'
import Config from './index'
import sweetalert2 from 'sweetalert2'

// Create a new store instance.
const store = createStore({
    state: {
        fields: {
            id: '',
            cnpj: '',
            corporateName: '',
            fantasyName: '',
            responsible: '',
            email: '',
            phone: '',
            cep: '',
            address: '',
            number: '',
            district: '',
            state: '',
            city: '',
        },
        list: [],
        edit: {},
        page: 1,
        rowsPerPage: Config.state.rowsPerPage,
        errors: []
    },
    getters: {},
    actions: {
        save({ commit }) {
            let url = ''
            let post = { ... this.state.fields }
            if (this.state.fields.id != '') {
                url = '/' + this.state.fields.id
                post._method = 'put'
            }

            axios.post('clients' + url, post)
                .then(({ data }) => {
                    const notification = {
                        icon: 'success',
                        title: 'Operação foi salva com sucesso!'
                    }
                    Swal.commit('notification', notification)
                    this.commit('clear')
                    this.dispatch('get')
                }).catch((err) => {
                    commit('setError', err.response.data.errors)
                })
        },
        get({ commit }) {
            return axios.get("clients")
                .then(({ data }) => {
                    return commit("setList", data)
                })
        },
        getBySearch({ commit }, Search) {
            return axios.post("clients/search", { Search })
                .then(({ data }) => {
                    return commit("setList", data)
                })
        },
        delete({ commit }, id) {
            sweetalert2.fire({
                title: 'Tem certeza?',
                text: "Você não será capaz de reverter isso!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, exclua!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('clients/' + id)
                        .then(({ data }) => {
                            const fields = {
                                icon: 'success',
                                title: 'Excluido com sucesso!'
                            }
                            Swal.commit('notification', fields)
                            this.dispatch("get")
                        }).catch(() => {
                            const fields = {
                                icon: 'error',
                                title: 'Não foi possível realizar essa exclusão'
                            }
                            Swal.commit('notification', fields)
                            this.dispatch("get")
                        })
                }
            })

        },
    },
    mutations: {
        setEdit: (state, id) => {
            state.fields = { ...state.list.filter(item => item.id == id)[0] }
            return true
        },
        setError: (state, data) => {
            state.errors = data
            return data
        },
        setList: (state, data) => {
            state.page = 1
            state.rowsPerPage = Config.state.rowsPerPage
            state.list = data
            return data
        },
        clear: (state) => {
            state.errors = []
            for (let index = 0; index < Object.keys(state.fields).length; index++) {
                const key = Object.keys(state.fields)[index];
                state.fields[key] = ''
            }
        }
    },
    modules: {},
})

export default store