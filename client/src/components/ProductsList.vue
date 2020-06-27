<template>
  <div class="container-fluid bg-dark">
      <div class="row  p-3">
        <div class="col-12 text-white text-center">
            <h4> <i class="fas fa-list-ul mr-2"></i>Listes des produits</h4>
        </div>
      </div>
      <div class="row justify-content-center searchProduct">
          <div class=" my-4">
            <input class="bg-dark" type="search" placeholder="Search" aria-label="Search" >
          </div>
      </div>
      <div class="row justify-content-center">
        <table class="table table-striped table-dark">
            <thead>
                <tr class="text-center">
                    <th scope="col">Image</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Prix (€)</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-white text-center" v-for="product in Products" :key="product._id">
                    <td>{{ product.img }}</td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.price }} €</td>
                    <td>
                        <router-link :to="{name: 'editProduct', params: { id: product._id }}" class="btn btn-success mr-2"><i class="fas fa-edit"></i></router-link>
                        <button @click.prevent="deleteProduct(product._id)" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
    name: 'ProductsList',
  data() {
      return {
          Products: [],
          Success:[]
      }
  },
  created() {
      axios.get("/api/products").then(res => {
          this.Products = res.data;
          console.log(res.data)
      }).catch(error => {
          console.log(error)
      });
  },
  methods: {
       deleteProduct(id){
            let indexOfArrayItem = this.Products.findIndex(i => i._id === id);
            axios.delete(`/api/products/delete-product/${id}`).then(() =>{
                this.Products.splice(indexOfArrayItem, 1);
                this.Success.push('Produit supprimé');
               
            }).catch(error => {
                console.log(error)
            })
      }
  },
} 
</script>

<style scoped>
.searchProduct input {
    border: 0 !important;
    border-bottom: 1px solid white !important;
    color: white;
    font-family: FontAwesome, "Open Sans", Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
}
.searchProduct input:focus{
    outline: 0 none;
    background:#ffffff;
    box-shadow: none;
}

.searchProduct ::placeholder {
    color: white;
}
</style>