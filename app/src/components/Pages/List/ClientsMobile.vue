<template>
  <div class="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="(client, index) in store.state.list" :key="client.cnpj"
        v-show="
          index < (store.state.rowsPerPage * store.state.page) &&
          index >= (store.state.page * store.state.rowsPerPage - store.state.rowsPerPage)
        "
      >
        <a :href="client.href" class="block hover:bg-gray-50">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <!-- <div class="flex-shrink-0">
                <img class="h-12 w-12 rounded-full" :src="client.applicant.imageUrl" alt="" />
              </div> -->
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-indigo-600 truncate">{{ client.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5') }}</p>
                  <p class="text-sm font-medium text-gray-800 truncate">{{ client.corporateName }}</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <PhoneIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="truncate">{{ client.phone.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3') }}</span>
                  </p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <MailIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="truncate">{{ client.email }}</span>
                  </p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    {{ client.address }}, {{client.number}} - {{client.city}}/{{client.state}}
                  </p>
                </div>

                

                <div class="mt-2  grid grid-cols-2 gap-4 ">
                  <div class="col-span-1">
                    <button @click="edit(client.id)" type="button" class=" inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <PencilIcon class="h-6 w-6 mr-3 ml-3 " aria-hidden="true" />
                      <span class="mr-6">Editar</span>
                    </button>
                  </div>
                  <div class="col-span-1 text-right">
                    <button  @click="del(client.id)" type="button" class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      <TrashIcon class="h-6 w-6r mr-3 ml-3" aria-hidden="true" />
                      <span class="mr-6 ">Excluir</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div>
              <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div> -->
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { CheckCircleIcon, ChevronRightIcon, MailIcon,PhoneIcon, TrashIcon, PencilIcon } from '@heroicons/vue/solid'
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