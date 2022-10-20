<template>
  <div class="py-8">
    <h1 class="text-primary text-[34px] font-medium">Курс рубля</h1>
    <div class="grid grid-cols-3 gap-4 mt-10 mb-4">
      <currency-card v-for="(item, idx) in valutes" :valute="item" :key="item.ID" :idx="idx"/>
    </div>
    <rouble-footer />
  </div>
</template>

<script>
import CurrencyCard from "../components/rouble/CurrencyCard.vue";
import RoubleFooter from '../components/rouble/RoubleFooter.vue';
export default {
  components: { CurrencyCard, RoubleFooter },
  async fetch({store}){
    if(store.getters['currency/currency'].length === 0){
      await store.dispatch('currency/fetch')
    }
  },
  computed: {
    valutes(){
      return this.$store.getters['currency/currency']
    }
  }
};
</script>

<style>
</style>






