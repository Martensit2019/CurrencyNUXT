<template>
  <header class="header bg-gray py-4">
    <nav class="nav"></nav>
    <ul class="nav flex container mx-auto">

      <!-- <li v-for="nav in navigation" class="mr-8"><router-link to="/">{{ nav }}</router-link></li> -->
      <li class="mr-8"><nuxt-link to="/" exact>Калькурятор</nuxt-link></li>
      <li class="mr-8"><nuxt-link to="/rouble">Курс рубля</nuxt-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigation: ['Калькурятор', 'Курс рубля'],
    }
  },
}
</script>
