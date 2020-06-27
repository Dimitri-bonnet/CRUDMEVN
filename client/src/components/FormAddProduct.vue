<template>
  <div class="container-fluid bg-dark p-3">
    <div class="row  ">
      <div class="col-12 text-center text-white">
        <h4> <i class="fas fa-plus mr-2"></i>Ajouter un produit</h4>
      </div>
    </div>
    <div class="row justify-content-center p-4">
      <div class="col-10 col-md-8 col-lg-6 text-white">
        <form @submit="trySubmit">
           <div v-if ="formErrors.length" class=" alert alert-danger rounded p-3 text-center">
                <h6  v-for="error in formErrors" :key="error"> {{ error }}</h6>
            </div>
            <div v-if ="success.length" class=" alert alert-success rounded p-3 text-center">
                <h6  v-for="success in success" :key="success"> {{ success }}</h6>
            </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Image du produit</label>
            <input v-model="form.img" type="text" name="img" class="form-control" placeholder="Image du produit">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Nom du produit</label>
            <input v-model="form.title" type="text" name="title" class="form-control" id="formGroupExampleInput2" placeholder="Nom du produit">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Prix du produit</label>
            <input v-model.number="form.price" type="number" name="price" step="any" class="form-control" id="formGroupExampleInput2" placeholder="Prix du produit">
          </div>
          <button class="btn btn-primary" :class="{'disabled' : isLoading }">Ajouter le produit</button>
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

</style>