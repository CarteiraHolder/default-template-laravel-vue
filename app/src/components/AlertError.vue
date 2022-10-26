<template>
    <div v-if="Object.keys(errors).length > 0" class="rounded-md bg-red-50 p-4">
        <div class="rounded-md bg-red-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">Encontramos {{Object.keys(errors).length}} erros ao tentar realizar o cadastro.</h3>
                    <div class="mt-2 text-sm text-red-700">
                        <ul role="list" class="list-disc pl-5 space-y-1">
                            <li v-for="(key, index) in Object.keys(errors)" :key="index">{{errors[key][0]}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { XCircleIcon } from '@heroicons/vue/solid'
const props = defineProps({
    errors: Object,
})
</script>

<style>
</style>