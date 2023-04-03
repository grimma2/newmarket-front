<template>
  <div class="customer-home-page">
    <div class="objects-wrapper">
      <div v-for="objects in $store.getters['products/getJoinObjects']" :key="objects">
        <product-list :products="objects.products"/>
        <category-list :categories="objects.categories"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import CategoryList from "@/components/CategoryList.vue";

export default {
  name: "CustomerHomePage",
  components: {CategoryList, ProductList},
  beforeMount() {
    let productsModule = this.$store.state.products
    if (!(productsModule.targetProducts.length && productsModule.targetCategories.length)) {
      this.$store.dispatch('products/requestTargetObjects')
    }
  },
}
</script>

<style scoped>
.customer-home-page {
  margin: 0;
}
.objects-wrapper {
  min-height: 100vh;
}
.products {
  display: flex;
  flex-wrap: wrap;
}
.products > * {
  margin: 10px;
}
</style>