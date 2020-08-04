<template>
  <div>
        <shop-header></shop-header>
        <shop-carousel-header></shop-carousel-header>
        <shop-list></shop-list>
        <shop-footer></shop-footer>
  </div>
</template>

<script>
import ShopHeader from "../shop/ShopHeader"
import ShopCarouselHeader from "../shop/ShopCarouselHeader"
import ShopList from "../shop/ShopList"
import ShopFooter from "../shop/ShopFooter"
export default {
 name:'IndexShop',
  components: {
      ShopHeader,
      ShopCarouselHeader,
      ShopList,
      ShopFooter
  }
};
</script>

<style scoped>

</style>