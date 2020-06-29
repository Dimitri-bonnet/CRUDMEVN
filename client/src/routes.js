import Vue from "vue"
import VueRouter from "vue-router"
import Index from "./components/Index.vue"
import FormAddProduct from "./components/FormAddProduct.vue"
import ProdutsList from "./components/ProductsList.vue"
import EditProduct from "./components/EditProduct.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "abstract",
  routes: [
    { path: "/", component: Index },
    { path: "/FormAddProduct", component: FormAddProduct },
    { path: "/ProductsList", component: ProdutsList },
    {
      path: "/EditProduct/:id",
      name: "editProduct",
      component: EditProduct,
    },
  ],
})

export default router
