<template>
  <div class="product-list">
    <div class="product-container"
         v-for="product in products" :key="product.id"
         @click="$router.push({path: `products/${product.slug}`})"
    >
      <div class="product">
        <div class="img-container">
          <img class="favorite-button" src="#" @click.stop="addProductToFavorites(product)">
          <img class="product-img" :src="product.photo">
        </div>
        <span class="product-price">{{ product.price }}</span>
        <span class="product-name">{{ product.name }}</span>
        <div class="rating-container">
<!--          должна быть реализованна функция, которая вернёт -->
          <img alt="rating">
          <span>{{ product.rating }}</span>
<!--          в продукте должно быть общее количество отзывов и сам рейтинг-->
        </div>
        <button @click.stop="addProductToCart(product)">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import urls from "@/api/apiUrlPatterns.json";
import {authAxios} from "@/api/apiData";
import {mapState} from "vuex";
import localStorageList from "@/mixins/localStorageList";

export default {
  name: "ProductList",
  mixins: [localStorageList],
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    async addProductToCart (product) {
      if (this.$store.state.auth.access) {
        // возможно нужно изменить запрос с post на get
        await authAxios.post(urls.products.product_to_cart, {slug: product.slug})
      } else {
        this.addElementToStorage('cart', product.slug)
      }
      this.$router.push({path: `cart/`})
    },
    async addProductToFavorites (product) {
      if (this.$store.state.auth.access) {
        // возможно нужно изменить запрос с post на get
        await authAxios.post(urls.products.add_product_to_favorites, {slug: product.slug})
      } else {
        this.addElementToStorage('favorites', product.slug)
      }
      this.$router.push({path: 'favorites/'})
    }
  }
}
</script>

<style scoped>

</style>