<template>
  <div class="text-center">
    <h2 class="text-xl p-2 font-semibold text-red-800">Products</h2>
    <select class="w-10/12 p-1" @change="filter">
      <option selected disabled>Search Product by Category</option>
      <option v-for="(item, i) in category" :key="i">{{ item }}</option>
    </select>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      categoty: '',
    }
  },
  computed: mapState(['category']),
  methods: {
    filter(e) {
      this.$emit(
        'changed',
        e.target.options[e.target.options.selectedIndex].text
      )
    },
  },
}
</script>
