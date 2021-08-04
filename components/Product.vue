<template>
  <div class="w-full md:w-1/3 lg:w-1/4 sm:w-1/2 px-2 mb-4">
    <div class="relative">
      <img class="w-full h-56" :src="product.image" />
      <div
        class="
          text-center
          w-full
          absolute
          z-10
          transparent_bg
          p-0.5
          -bottom-0.5
        "
      >
        <h3 class="text-white">{{ product.name }}</h3>
        <span class="text-white">${{ product.price }}.00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: false, default: null },
  },
}
</script>
