<template>
  <div>
    <label for="search" class="block text-sm font-medium text-gray-700">Filtro</label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input @change="get" @keyup="get" @keyup.enter="filter" v-model="Search" type="text" name="search" id="search" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" placeholder="Digite um texto para filtrar" />
      </div>
      <button @click="filter" type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <SearchCircleIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        <span>Procurar</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { SearchCircleIcon, SearchIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'

const props = defineProps({
    store: Object,
})


const Search = ref("")

function filter() {
  if (Search.value == "") {
      get()
      return
  } 
  props.store.dispatch("getBySearch", Search.value)
}

function get() {
    if (Search.value == "") props.store.dispatch('get')
}


</script>