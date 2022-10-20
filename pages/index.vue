<template>
  <div>
    <div class="py-10">
      <h1 class="text-primary text-[34px] font-medium">Валютный калькулятор</h1>
      <div class="flex">
        <the-form :valutes="valutes" />
        <main-list />
      </div>
    </div>
    <main-footer />
  </div>
</template>

<script>
import MainFooter from '../components/main/MainFooter.vue'
import MainList from '../components/main/MainList.vue'
import TheForm from '../components/main/TheForm.vue'
export default {
  components: { TheForm, MainFooter, MainList },
  name: 'Index-page',
  async fetch({store}){
    if(store.getters['currency/currency'].length === 0){
      await store.dispatch('currency/fetch')
    }
  },
  computed: {
    valutes(){
      return this.$store.getters['currency/searchedCurrency']
    }
  }
}
</script>
