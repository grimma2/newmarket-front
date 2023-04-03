<template>
  <form @submit.prevent>
    <div class="checkboxes">
      <div class="categories">
        <div class="category" v-for="(category, i) in categories" :key="category.id">
          <input
              :checked="category.checkValue"
              @input="categoryUpdate($event, i)"
              type="checkbox"
          >{{ category.name }}
        </div>
      </div>
      <div class="companies">
        <div class="company" v-for="(company, i) in companies" :key="company.id">
          <input
              :checked="company.checkValue"
              @input="companyUpdate($event, i)"
              type="checkbox"
          >{{ company.username }}
        </div>
      </div>
    </div>
    <div class="price-inputs">
      <input
          type="number"
          :value="fromInput"
          @input="updatePriceGap($event, 'fromInput')"
          placeholder="от"
      />
      <input
          type="number"
          :value="toInput"
          @input="updatePriceGap($event, 'toInput')"
          placeholder="до"
      />
      <button>Применить</button>
    </div>
  </form>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ProductsBar",
  computed: {
    ...mapState({
      companies: state => state.products.filterProducts.companies,
      categories: state => state.products.filterProducts.categories,
      fromInput: state => state.products.filterProducts.fromInput,
      toInput: state => state.products.filterProducts.toInput
    })
  },
  methods: {
    companyUpdate (event, i) {
      let productsCopy = {...this.$store.state.products.filterProducts}
      productsCopy.companies[i].checkValue = event.target.checked
      this.$store.commit('products/setFilterProducts', productsCopy)
    },
    categoryUpdate (event, i) {
      let productsCopy = {...this.$store.state.products.filterProducts}
      productsCopy.categories[i].checkValue = event.target.checked
      this.$store.commit('products/setFilterProducts', productsCopy)
    },
    updatePriceGap (event, priceType) {
      if (event.keyCode === 13) {
        // если пользользователь нажал enter. то присваиваем скопированому объекту фильтра
        // соответствующие значения и комитим всё в state
        let productsCopy = {...this.$store.state.products.filterProducts}
        productsCopy.fromInput = this.fromInput
        productsCopy.toInput = this.toInput
        this.$store.commit('products/setFilterProducts', productsCopy)
      } else {
        // если пользователь не нажал enter значит он печатает,
        // поэтому присваиваем полю значение из инпута
        if (priceType === 'toInput') {
          this.toInput = event.target.value
        } else if (priceType === 'fromInput') {
          this.fromInput = event.target.value
        }
      }
    }
  }
}
</script>

<style scoped>

</style>