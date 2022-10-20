<template>
<div>
          <div class="bg-secondary rounded-lg px-6 py-8">
            <h2 class="text-primary text-[15px] uppercase font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
            </h2>
            <div class="mt-10">
              <div class="grid grid-cols-2 gap-[100px]">
                <ul>
                  <li v-for="item in list" :key="item" class="font-normal pl-4 mb-4 text-[14px] relative">
                    <div class="w-2 h-2 border-2 border-red rounded-full top-[50%] translate-y-[-50%] absolute left-0"></div>
                    {{ item }}</li>
                </ul>
                <div class="grid grid-cols-2 gap-4">
                  <img class="object-cover h-full w-full" src="~/assets/images/img-1.jpg" alt="" />
                  <img class="object-cover h-full w-full rounded-tr-[50px]" src="~/assets/images/img-2.jpg" alt="" />
                  <img class="object-cover h-full w-full rounded-bl-[50px]" src="~/assets/images/img-3.jpg" alt="" />
                  <img class="object-cover h-full w-full" src="~/assets/images/img-4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'Incididunt ut labore et dolore magna aliqua',
        'Incididunt ut labore et',
        'Incididnt ut labore et dolore',
        'Inididunt ut labore et dolore',
        'Incididunt ut laore et dolore',
        'Incididunt ut labore et dolre',
        'Incididunt ut labore et doloree',
      ],
    }
  },
}
</script>

<style>

</style>
