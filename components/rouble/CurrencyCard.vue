<template>
  <div class="bg-gray rounded-lg px-8 py-10 cursor-pointer hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
    <img
      :src="
        require(`~/assets/images/money-${idx % 2 === 0 ? 'blue' : 'red'}.svg`)
      "
      alt=""
    />
    <h2 class="mt-9 mb-7 text-primary text-[20px] font-bold">
      {{ valute.CharCode }}
    </h2>
    <h3 class="mb-10 text-gray-950 text-[16px] font-normal">
      {{ valute.Name }}
    </h3>
    <ul>
      <li class="pl-4 relative text-gray-900 text-[16px] font-medium">
        <div
          class="
            w-2
            h-2
            border-2 border-red
            rounded-full
            top-[50%]
            translate-y-[-50%]
            absolute
            left-0
          "
        ></div>
        Номинал: {{ valute.Nominal }}
      </li>
      <li class="pl-4 relative text-gray-900 text-[16px] font-medium">
        <div
          class="
            w-2
            h-2
            border-2 border-red
            rounded-full
            top-[50%]
            translate-y-[-50%]
            absolute
            left-0
          "
        ></div>
        Номинал: {{ valute.Value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    valute: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },
};
</script>
