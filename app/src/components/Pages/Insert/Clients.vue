<template>
  <form class="space-y-8 divide-y divide-gray-200" @submit="save">
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Informações</h3>
          <!-- <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p> -->
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div v-if="store.state.fields.id == ''" class="sm:col-span-2">
            <label for="CNPJ" class="block text-sm font-medium text-gray-700"> CNPJ </label>
            <div class="mt-1">
              <input @change="getCNPJ" v-model="store.state.fields.cnpj" type="text" name="CNPJ" id="CNPJ" autocomplete="cnpj" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div v-else class="sm:col-span-2">
            <label for="CNPJ" class="block text-sm font-medium text-gray-700"> CNPJ </label>
            <div class="mt-1">
              <input :value="store.state.fields.cnpj" readonly type="text" name="CNPJ" id="CNPJ" autocomplete="cnpj" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="corporate-name" class="block text-sm font-medium text-gray-700"> Razão Social </label>
            <div class="mt-1">
              <input v-model="store.state.fields.corporateName" type="text" name="corporate-name" id="corporate-name" autocomplete="corporate-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="fantasy-name" class="block text-sm font-medium text-gray-700"> Nome Fantasia </label>
            <div class="mt-1">
              <input v-model="store.state.fields.fantasyName" type="text" name="fantasy-name" id="fantasy-name" autocomplete="fantasy-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="responsible" class="block text-sm font-medium text-gray-700"> Responsável </label>
            <div class="mt-1">
              <input v-model="store.state.fields.responsible" type="text" name="responsible" id="responsible" autocomplete="responsible" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="e-mail" class="block text-sm font-medium text-gray-700"> E-mail </label>
            <div class="mt-1">
              <input v-model="store.state.fields.email" type="text" name="e-mail" id="e-mail" autocomplete="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="phone" class="block text-sm font-medium text-gray-700"> Telefone / Celular</label>
            <div class="mt-1">
              <input v-model="store.state.fields.phone" type="text" name="phone" id="phone" autocomplete="phone" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

        </div>
      </div>

      <div class="pt-8">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Endereço</h3>
          <!-- <p class="mt-1 text-sm text-gray-500">Informe o endereço do seu cliente.</p> -->
        </div>
        
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

          <div class="sm:col-span-2">
            <label for="CEP" class="block text-sm font-medium text-gray-700"> CEP </label>
            <div class="mt-1">
              <input v-model="store.state.fields.cep" type="number" name="CEP" id="CEP" autocomplete="cep" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="address" class="block text-sm font-medium text-gray-700"> Logradouro </label>
            <div class="mt-1">
              <input v-model="store.state.fields.address" type="text" name="address" id="address" autocomplete="address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          
          <div class="sm:col-span-1">
            <label for="number" class="block text-sm font-medium text-gray-700"> Número </label>
            <div class="mt-1">
              <input v-model="store.state.fields.number" type="number" name="number" id="number" autocomplete="number" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          
          <div class="sm:col-span-2">
            <label for="district" class="block text-sm font-medium text-gray-700"> Bairro </label>
            <div class="mt-1">
              <input v-model="store.state.fields.district" type="text" name="district" id="district" autocomplete="district" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="state" class="block text-sm font-medium text-gray-700"> UF </label>
            <div class="mt-1">
                <select v-model="store.state.fields.state" id="state" name="state" autocomplete="state-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    <option v-for="(uf, index) in ufs" :key="index" :value="uf.initials"  >{{uf.name}}</option>
                </select>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="city" class="block text-sm font-medium text-gray-700"> Município </label>
            <div class="mt-1">
              <input v-model="store.state.fields.city" type="text" name="city" id="city" autocomplete="city" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <AlertError :errors="store.state.errors"/>

    <div class="pt-5">
      <div class="flex justify-end">
        <button @click="clear" type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancelar
        </button>
        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Salvar
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import store from '../../../store/clients'
import AlertError from '../../AlertError.vue'
import consultarCNPJ from 'consultar-cnpj'

function save(ev) {
    ev.preventDefault()
    store.dispatch('save')
    
}

function clear() {
    store.commit('clear')
    store.dispatch('get')
}

async function getCNPJ() {
    try {
        const company = await consultarCNPJ(store.state.fields.cnpj);
     
        store.state.fields.cnpj = company.estabelecimento.cnpj
        store.state.fields.corporateName = company.razao_social
        store.state.fields.fantasyName = company.estabelecimento.nome_fantasia
        store.state.fields.email = company.estabelecimento.email
        store.state.fields.phone = company.estabelecimento.ddd1 + company.estabelecimento.telefone1
        store.state.fields.cep = company.estabelecimento.cep
        store.state.fields.address = company.estabelecimento.logradouro
        store.state.fields.district = company.estabelecimento.bairro
        store.state.fields.state = company.estabelecimento.estado.sigla
        store.state.fields.city = company.estabelecimento.cidade.nome
        store.state.fields.number = parseInt(company.estabelecimento.numero)
        
    } catch (e) {
        
    }
}

const ufs = [
    {"name": "Acre", "initials": "AC"},
    {"name": "Alagoas", "initials": "AL"},
    {"name": "Amapá", "initials": "AP"},
    {"name": "Amazonas", "initials": "AM"},
    {"name": "Bahia", "initials": "BA"},
    {"name": "Ceará", "initials": "CE"},
    {"name": "Distrito Federal", "initials": "DF"},
    {"name": "Espírito Santo", "initials": "ES"},
    {"name": "Goiás", "initials": "GO"},
    {"name": "Maranhão", "initials": "MA"},
    {"name": "Mato Grosso", "initials": "MT"},
    {"name": "Mato Grosso do Sul", "initials": "MS"},
    {"name": "Minas Gerais", "initials": "MG"},
    {"name": "Pará", "initials": "PA"},
    {"name": "Paraíba", "initials": "PB"},
    {"name": "Paraná", "initials": "PR"},
    {"name": "Pernambuco", "initials": "PE"},
    {"name": "Piauí", "initials": "PI"},
    {"name": "Rio de Janeiro", "initials": "RJ"},
    {"name": "Rio Grande do Norte", "initials": "RN"},
    {"name": "Rio Grande do Sul", "initials": "RS"},
    {"name": "Rondônia", "initials": "RO"},
    {"name": "Roraima", "initials": "RR"},
    {"name": "Santa Catarina", "initials": "SC"},
    {"name": "São Paulo", "initials": "SP"},
    {"name": "Sergipe", "initials": "SE"},
    {"name": "Tocantins", "initials": "TO"}
]

</script>


