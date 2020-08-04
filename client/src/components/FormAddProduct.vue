<template>
  <div class="container-fluid bg-dark">
    <div class="row justify-content-center ">
      <div class="col-12 text-center text-white p-5">
        <h4> 
          <i class="fas fa-plus mr-2"></i>Ajouter un produit
        </h4>
      </div>
      <div class="col-12 col-md-8 col-lg-4 text-white">
        <form @submit="trySubmit">
           <!-- <div v-if ="formErrors.length" class=" alert alert-danger rounded p-3 text-center">
                <h6  v-for="error in formErrors" :key="error"> {{ error }}</h6>
            </div>
            <div v-if ="success.length" class=" alert alert-success rounded p-3 text-center">
                <h6  v-for="success in success" :key="success"> {{ success }}</h6>
            </div> -->
          <div class="form-group">
            <label for="formGroupExampleInput"><i class="fas fa-image "></i> Image du produit</label>
            <input v-model="form.img" type="text" name="img" class="form-control" id="formGroupExampleInput" placeholder="Image du produit">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2"><i class="fas fa-signature"></i> Nom du produit</label>
            <input v-model="form.title" type="text" name="title" class="form-control" id="formGroupExampleInput2" placeholder="Nom du produit">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput3"><i class="fas fa-tag"></i> Prix du produit</label>
            <input v-model.number="form.price" type="number" name="price" step="any" class="form-control" id="formGroupExampleInput3" placeholder="Prix du produit">
          </div>
          <div class="text-center mt-5">
            <button  :class="{'disabled' : isLoading }">Ajouter le produit</button>
          </div>
        </form>
      </div>  
    </div>      
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data () {
        return {
            form: {
                img: '',
                title : '',
                price: ''
            },
            formErrors: [],
            success: []
        }
    },
    computed: {
      ...mapGetters('product', ['isLoading'])
    },
    methods: {
        trySubmit(e){
            e.preventDefault();
            if (this.formIsValide()){
               console.log(this.form)
                this.$store.dispatch('product/addProduct', { ...this.form} ) 
                this.resetForm();
                this.success.push('Produit ajouté')
            }   
        },
        resetForm(){
            this.form = {
                img: '',
                title : '',
                price: ''
            }
        },
        formIsValide(){
            this.formErrors = []
            if (!this.form.img) {
                this.formErrors.push('img required')
            }
            if (!this.form.title) {
                this.formErrors.push('title required')
            }
            if (!this.form.price) {
                this.formErrors.push('price required')
            }
            return this.formErrors.length ? false : true
        }
    }
}
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