<template>
  <div class="container-fluid bg-dark p-3">
    <div class="row ">
      <div class="col-12 text-center text-white">
        <h4> <i class="fas fa-plus mr-2"></i>Modifier le produit</h4>
      </div>
    </div>
    <div class="row justify-content-center p-4">
      <div class="col-6 text-white">
        <form @submit.prevent="handleUpdateForm">
           <!-- <div v-if ="formErrors.length" class=" alert alert-danger rounded p-3 text-center">
                <h6  v-for="error in formErrors" :key="error"> {{ error }}</h6>
            </div>
            <div v-if ="success.length" class=" alert alert-success rounded p-3 text-center">
                <h6  v-for="success in success" :key="success"> {{ success }}</h6>
            </div> -->
          <div class="form-group">
            <label for="formGroupExampleInput">Image du produit</label>
            <input v-model="product.img" id="img" type="text" name="img" class="form-control" >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Nom du produit </label>
            <input v-model="product.title" id="title" type="text" name="title" class="form-control"  >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Prix du produit</label>
            <input v-model.number="product.price" id='price' type="number" name="price" step="any" class="form-control"  >
          </div>
          <button class="btn btn-primary">Modifier le produit</button>
        </form>
      </div>  
    </div>      
  </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return{
            product: { }
        }
    },
    created() {
         axios.get(`api/products/edit-product/${this.$route.params.id}`  ).then(res =>{
            console.log(res)
            console.log(this.$route.params.id)
            this.product = res.data
         })
    },
    methods: {
        handleUpdateForm() {
            axios.post(`api/products/update-product/${this.$route.params.id}`, this.product).then((res) => {
                console.log(res)
                this.$router.push('./ProductsList')
            }).catch(error => {
                console.log(error)
            });
        }
    },
}
</script>