<template>
  <button
    v-if="value == 0"
    :class="{ 'text-red-500': activeClass === value }"
    class="border p-2 m-1 my-2.5"
    @click="activeClass = value"
  >
    >>
  </button>
  <button
    v-else
    :class="{ 'text-red-500': activeClass === value }"
    class="border p-2 m-1 my-2.5"
    @click="activeClass = value"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  props: {
    value: { type: Number, required: false, default: null },
  },
  data() {
    return {
      activeClass: 1,
    }
  },
}
</script>
