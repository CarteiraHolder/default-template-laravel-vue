<template>
    <div>
        <div v-if="route.query.pag != 'list'">
            <Insert/>
        </div>
        <div v-else>
            <Filter :store="store"/>
            <Pagination v-if="store.state.list.length > 0" class="mt-4" :store="store"/>
            <ListDesktop v-if="!mobile()" />
            <ListMobile v-if="mobile()"/>
            <Pagination v-if="store.state.list.length > 0" class="mt-4" :store="store"/>
        </div>
    </div>
</template>

<script setup>
import ListDesktop from '../components/Pages/List/ClientsDesktop.vue'
import ListMobile from '../components/Pages/List/ClientsMobile.vue'
import Insert from '../components/Pages/Insert/Clients.vue'
import Filter from '../components/Pages/Filter.vue'
import Pagination from '../components/Pages/Pagination.vue'
import store from '../store/clients'
import mobile from 'is-mobile'


import { useRoute } from "vue-router";
const route = useRoute();

store.dispatch('get')

</script>

<style>

</style>