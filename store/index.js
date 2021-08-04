export const state = () => ({
  products: [],
  category: [],
  searchResult: [],
})

export const mutations = {
  addProduct(state, data) {
    state.products.push({ data })
  },
  addCategory(state, data) {
    data.forEach((product) => {
      const uniqueCategories = state.category
      if (!uniqueCategories.includes(product.catname)) {
        state.category.push(product.catname)
      }
    })
  },
  updateProduct(state, data) {
    state.searchResult = data
  },
}
