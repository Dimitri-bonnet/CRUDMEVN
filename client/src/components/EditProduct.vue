<template>
  <div class="container-fluid bg-dark">
    <div class="row justify-content-center ">
      <div class="col-12 text-center text-white p-5">
        <h4>
          <i class="fas fa-edit mr-2"></i>Modifier le produit
        </h4>
      </div>
    
    <div class="col-12 col-md-8 col-lg-4 text-white">
        <form @submit.prevent="handleUpdateForm"> 
          <!-- <div v-if ="formErrors.length" class=" alert alert-danger rounded p-3 text-center">
                <h6  v-for="error in formErrors" :key="error"> {{ error }}</h6>
            </div>
            <div v-if ="success.length" class=" alert alert-success rounded p-3 text-center">
                <h6  v-for="success in success" :key="success"> {{ success }}</h6>
          </div>-->
           <div class="form-group">
            <label for="formGroupExampleInput"><i class="fas fa-image "></i> Image du produit</label>
            <input v-model="product.img"  type="text" name="img" id="formGroupExampleInput" class="form-control" />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2"><i class="fas fa-signature"></i> Nom du produit</label>
            <input v-model="product.title" id="formGroupExampleInput2" type="text" name="title" class="form-control" />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput3"><i class="fas fa-tag"></i> Prix du produit</label>
            <input v-model.number="product.price" type="number" name="price" step="any" class="form-control" id="formGroupExampleInput3"/>
          </div>
          <div class="row justify-conten-center text-center ">
            <div class="col-6">
              <button >retour</button>
            </div>
            <div class="col-6">
              <button type="submit">Modifier le produit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../routes";
export default {
  data() {
    return {
      product: {}
    };
  },
  methods: {
    handleUpdateForm() {
      console.log("hello")
      axios
        .post(
          `api/products/update-product/${this.$route.params.id}`,
          this.product
        )
        .then(res => {
          router.push("/ProductsList")
          console.log(res);
          console.log('coucou')
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
button{
  width: 140px;
  height: 45px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
button:hover{
  background-color: #2ecc71;
  box-shadow: 0px 2px 4px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(1px);
}

i{
  color: #2ecc71 ;
}

input:focus {
  background-color: white  !important;
  border: 1px #2ecc71 solid;
  box-shadow: none !important;
}
input {
  border: none;
  background: #e7e7e7 ;
  font-family: 'Roboto', sans-serif;
}
</style>