<template>
  <div class="category-list">
    <div class="categories">
      <div
        class="category"
        v-for="category in categories"
        :key="category.id"
        @click="redirectToProductList(category)"
      >

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  methods: {
    redirectToProductList (category) {
      // так как action - sendProductQuery работает с данными к конкретном формате
      // нужно привести данные в этот формат и закомитить его в state
      this.$store.commit(
        'products/setFilterProducts',
        {categories: [{id: category.id, checkValue: true}], companies: [], fromInput: 0, toInput: 0}
      )
      this.$store.dispatch('products/sendProductQuery')

      this.$router.push({path: 'products/'})
    }
  }
}
</script>

<style scoped>

</style>