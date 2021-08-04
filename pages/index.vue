<template>
  <div class="max-w-6xl m-auto">
    <Top @changed="search" />
    <div class="flex flex-wrap my-5">
      <Product v-for="(item, i) in products" :key="i" :product="item" />
    </div>
    {{ pagination }}
    <div class="text-center">
      <Button
        v-for="(val, i) in pagination"
        :key="i"
        :value="i + 1"
        @click.native="fetchData(i + 1)"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, store, $config }) {
    const products = await $axios.$get(`/Edgewood-API/public/api/products`)
    store.commit('addProduct', products.data)
    store.commit('addCategory', products.data)
    return {
      pagination: products.last_page,
    }
  },
  computed: {
    products() {
      const products = this.$store.state.products
      const searchResult = this.$store.state.searchResult
      if (searchResult.length === 0) {
        return products[0].data
      } else {
        return searchResult.products
      }
    },
  },
  methods: {
    search(value) {
      let products = this.$store.state.products
      if (value !== '') {
        products = products[0].data.filter((item) => {
          return item.catname.toUpperCase().includes(value.toUpperCase())
        })
      }
      this.$store.commit('updateProduct', { products })
    },
    async fetchData(query) {
      if (query) {
        const data = await this.$axios.$get(
          `/Edgewood-API/public/api/products?page=` + query
        )
        const products = data.data
        this.$store.commit('updateProduct', { products })
      } else {
        const data = await this.$axios.$get(
          `/Edgewood-API/public/api/products?page=`
        )
        const products = data.data
        this.$store.commit('updateProduct', { products })
      }
    },
  },
}
</script>
