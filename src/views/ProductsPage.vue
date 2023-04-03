<template>
  <hea-der/>
  <div class="products-view">
    <products-bar/>
    <product-list :products="selectedProducts"/>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import ProductsBar from "@/components/ProductsBar";
import {mapState} from 'vuex'
import HeaDer from "@/components/HeaDer";

export default {
  components: {HeaDer, ProductList, ProductsBar},
  computed: {
    ...mapState({
      selectedProducts: state => state.products.selectedProducts,
    })
  },
  unmounted () {
    this.$store.commit('products/setFilterProducts', {})
  }
}
</script>

<style scoped>

</style>