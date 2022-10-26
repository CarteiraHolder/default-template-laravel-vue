<template>
  <nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
    <div class="-mt-px w-0 flex-1 flex">
      <button @click="back" class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
        <ArrowNarrowLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        Voltar
      </button>
    </div>
    <div class="hidden md:-mt-px md:flex">
        <div 
            v-for="(index) in Math.ceil(props.store.state.list.length /  props.store.state.rowsPerPage)"
            :key="index"
        >
            <button
                v-if="
                    index < 4 || index == props.store.state.page ||
                    index > Math.ceil(props.store.state.list.length / props.store.state.rowsPerPage) - 3 ||
                    (
                        index <= Math.ceil(props.store.state.list.length / props.store.state.rowsPerPage) / 2 + 1 &&
                        index >= Math.ceil(props.store.state.list.length / props.store.state.rowsPerPage) / 2 - 1
                    )
                "
                @click="props.store.state.page = index"
                :class="props.store.state.page == index ? 'border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'"> 
                {{index}}
            </button>
            <span v-if="index == 4 || index == Math.ceil(props.store.state.list.length /  props.store.state.rowsPerPage) - 3" class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> ... </span>
        </div>
    </div>
    <div class="-mt-px w-0 flex-1 flex justify-end">
      <button @click="next" class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
        Próximo
        <ArrowNarrowRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/vue/solid'

const props = defineProps({
    store: Object,
})

function back() {
    if(props.store.state.page > 1) props.store.state.page--
}

function next() {
    if (props.store.state.page < Math.ceil(props.store.state.list.length / props.store.state.rowsPerPage)) props.store.state.page++
}


</script>

<style>

</style>