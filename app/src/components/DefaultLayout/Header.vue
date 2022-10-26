<template>
    <main class="flex-1">
         <div class="py-6">
            <div class="px-4 sm:px-6 lg:px-8">
                <div class="sm:flex sm:items-center">
                    <div class="sm:flex-auto">
                        <h1 class="text-xl font-semibold text-gray-900">{{title}}</h1>
                        <p class="mt-2 text-sm text-gray-700">{{descriptionr}}</p>
                    </div>
                    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button @click="changePag" type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            {{route.query.pag == 'list' ? 'Adicionar' : 'Listar'}}
                        </button>
                    </div>
                </div>
            </div>
             <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div class="py-4">
                    <slot></slot>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRoute } from "vue-router";
import router from '../../router/index'

const route = useRoute();
const props = defineProps({
    title: String,
    description: String,
})

function changePag() {
    if (route.query.pag == 'list')
        router.push({ path: route.path, query: { pag: 'insert' }});
    else
        router.push({ path: route.path, query: { pag: 'list' }});
}

</script>

<style>
</style>