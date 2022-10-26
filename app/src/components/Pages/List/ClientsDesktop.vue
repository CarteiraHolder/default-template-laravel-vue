<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Empresa</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contato</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Endereço</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr 
                  v-for="(client, index) in store.state.list" 
                  :key="client.cnpj" 
                  v-show="
                    index < (store.state.rowsPerPage * store.state.page) &&
                    index >= (store.state.page * store.state.rowsPerPage - store.state.rowsPerPage)
                  "
                >
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button @click="edit(client.id)" type="button" class="inline-flex items-center p-1 border border-transparent rounded-l shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <PencilIcon class="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button  @click="del(client.id)" type="button" class="inline-flex items-center p-1 border border-transparent rounded-r shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      <TrashIcon class="h-4 w-4" aria-hidden="true" />
                    </button>
                  </td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <!-- <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" :src="client.image" alt="" />
                      </div> -->
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{ client.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5') }}</div>
                        <div class="text-gray-500">{{ client.corporateName }}</div>
                        <div class="text-gray-500">{{ client.fantasyName }}</div>
                        <div class="text-gray-500">{{ client.responsible }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900">{{ client.email }}</div>
                    <div class="text-gray-500">{{ client.phone.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3') }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-500">{{ String(client.cep).replace(/^(\d{5})(\d{0})/, '$1-$2') }}</div>
                    <div class="text-gray-900">{{ client.address }}, {{client.number}}</div>
                    <div class="text-gray-500">{{client.city}} / {{client.state}}</div>
                    <div class="text-gray-500">{{ client.district }}</div>
                  </td>
                  <!-- <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Active</span>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { TrashIcon, PencilIcon } from '@heroicons/vue/solid'
import store from '../../../store/clients'
import { useRoute } from "vue-router";
import router from '../../../router/index'

const route = useRoute();
store.commit('clear')
         
function del(id) {
  store.dispatch('delete', id)
}

function edit(id) {
  store.commit('setEdit', id)
  router.push({ path: route.path, query: { pag: 'insert' } });
}
</script>