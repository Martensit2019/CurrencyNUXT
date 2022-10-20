<template>
  <div class="min-w-[50%] mr-8">
    <form class="bg-white rounded pb-8">
      <div class="">
        <label class="block text-dark text-[14px] font-medium mb-1" for="currency1"> Валюта 1 </label>
        <input
          v-model="cur1"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px]"
          id="currency1"
          type="text"
          placeholder="Введите название или код"
        />
        <ul v-show="cur1">
          <li v-for="item in searchedCarrencyArr1" class="hover:bg-secondary cursor-pointer" @click="selected1(item.ID)">
            {{ item.TotalName }}
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <label class="block text-dark text-[14px] font-medium mb-1" for="currency2"> Валюта 2 </label>
        <input
          v-model="cur2"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px]"
          id="currency2"
          type="text"
          placeholder="Введите название или код"
        />
        <ul v-show="cur2">
          <li v-for="item in searchedCarrencyArr2" class="hover:bg-secondary cursor-pointer" @click="selected2(item.ID)">
            {{ item.TotalName }}
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <label class="block text-dark text-[14px] font-medium mb-1" for="amount"> Количество </label>
        <input
          v-model="amount"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px]"
          id="amount"
          type="number"
          placeholder="Введите число"
        />
      </div>
    </form>
    <div class="flex items-center bg-secondary rounded-lg p-8">
      <img src="~/assets/images/total.svg" alt="" />
      <span class="ml-10 text-primary text-[20px] font-bold">Итого: {{ total }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    valutes: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      cur1: null,
      curArr1: {},
      cur2: null,
      curArr2: {},
      amount: null
    }
  },
  methods: {
    filtered(id, num) {
      const obj = this.valutes.filter((item) => item.ID === id)[0]
      num === 1 ? (this.curArr1 = obj) : (this.curArr2 = obj)

      return `${obj.Name} - ${obj.CharCode}`
    },
    selected1(data) {
      this.cur1 = this.filtered(data, 1)
      console.log(data)
    },
    selected2(data) {
      this.cur2 = this.filtered(data, 2)
      console.log(data)
    },
  },
  computed: {
    total() {
      const notEmpty = !!Object.keys(this.curArr1).length && !!Object.keys(this.curArr2).length
      console.log('notEmpty', notEmpty)
      if (notEmpty && this.amount) {
        return ((this.curArr1.Value / this.curArr1.Nominal / (this.curArr2.Value / this.curArr2.Nominal)) * this.amount).toFixed(4)
      } else {
        return '...'
      }
    },
    searchedCarrencyArr1() {
      return this.valutes.filter((item) => {
        const str = item.TotalName.toLowerCase()
        const search = this.cur1 ? this.cur1.toLowerCase() : this.cur1
        return str.indexOf(search) !== -1
      })
    },
    searchedCarrencyArr2() {
      return this.valutes.filter((item) => {
        const str = item.TotalName.toLowerCase()
        const search = this.cur2 ? this.cur2.toLowerCase() : this.cur2
        return str.indexOf(search) !== -1
      })
    },
  },
}
</script>
