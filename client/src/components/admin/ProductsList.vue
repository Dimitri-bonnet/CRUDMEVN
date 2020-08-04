<template>

  <div class="container-fluid bg-dark">
    <div class="row p-3">
      <div class="col-12 text-white text-center p-3">
        <h4>
          <i class="fas fa-list-ul mr-2"></i>Listes des produits
        </h4>
      </div>
      <div class="col-12 text-white text-center p-3 ">
        <button  class="ButtonAddProduct  mr-2"  data-toggle="modal" data-target="#AddProductModal">
            Ajouter un produit
         </button> 
      </div>
    </div>
    <div v-if ="formErrors.length" class="ErrorMsg rounded p-3 text-center">
      <h6>Le formulaire n'est pas rempli correctement :</h6> 
      <ul v-for="error in formErrors" :key="error" class="list-group">
      <li><i class="fas fa-exclamation-triangle"></i> {{ error }}</li>
      </ul>
    </div>
    <div v-if ="success.length" class="SuccessMsg rounded p-3 text-center">
      <h6  v-for="success in success" :key="success"><i class="fas fa-check"></i> {{ success }}</h6>
    </div>
    <!-- <div class="row justify-content-center searchProduct p-3">
      <div class="form-group">
        <input class="bg-dark" type="search" placeholder="Rechercher un produit" aria-label="Search" v-model="productSearch" v-on:keyup="searchProducts"/>
      </div>
    </div>   -->
    <div class="row justify-content-center overflow-auto ">
      <table class="table table-striped table-dark col-12 ">
        <thead>
          <tr class="text-center">
            <th scope="col">Image</th>
            <th scope="col">Nom</th>
            <th scope="col">Prix (€)</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-white text-center " v-for="product in Products" :key="product._id">
            <td class="align-middle"><img class="img-fluid" :src="product.img" alt="" height="40" width="40"></td>
            <td class="align-middle">{{ product.title }}</td>
            <td class="align-middle">{{ product.price }} €</td>
            <td class="align-middle">
              <button  class="ButtonViewProduct btn tooltip-test mr-2" title="Voir"  data-toggle="modal"  @click="sendInfoForModal(product)">
                <i class="far fa-eye"></i>
              </button> 
             <!-- <router-link :to="{name: 'editProduct', params: { id: product._id }}"  class="ButtonEditProduct btn tooltip-test mr-2" title="Modifier">
                 <i class="fas fa-edit"></i> 
              </router-link> -->
              <!-- Button trigger modal EditProduct -->
              <button  class="ButtonEditProduct btn tooltip-test mr-2" title="Modifier"  data-toggle="modal" data-target="#EditProductModal" @click="sendInfoForModal(product)">
                <i class="fas fa-pen"></i> 
              </button> 
              <!-- Button trigger modal DeleteProduct -->
               <button  class="ButtonDeleteProductOpenModal btn  tooltip-test mr-2" title="Supprimer"  data-toggle="modal" data-target="#DeleteProductModal" @click="sendInfoForModal(product)">
                <i class="fas fa-trash-alt"></i>
              </button> 
            </td>
            <!--Modal DeleteProduct by id -->
            <div class="modal fade text-dark"   id="DeleteProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-body text-center">
                     <h4 class="text-center  py-4" ><i class="fas fa-trash-alt mr-2 "></i>Supprimer le produit</h4>
                    <h5 >Voulez-vous vraiment supprimer le produit <span>{{ selectedProduct.title}}</span> ?</h5>
                  </div>
                  <div class="row justify-content-center text-center p-2">
                    <div class=" col-xs-6 col-md-4">
                      <button type="button" class="ButtonCloseModal mr-2" data-dismiss="modal">Fermer</button>
                    </div>
                    <div class=" col-xs-6 col-md-4">
                      <button type="button" @click.prevent="deleteProductByModal(selectedProduct._id)" data-dismiss="modal" class="ButtonDeleteProductModal">Supprimer</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
     <!--Modal EditProduct by id -->
            <div class="modal fade text-dark"   id="AddProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                   <h4 class="text-center py-3" > <i class="fas fa-plus mr-2"></i>Ajouter un produit</h4>              
                      <div v-if ="formErrors.length" class="ErrorMsg rounded p-3 text-center">
                        <h6>Le formulaire n'est pas rempli correctement :</h6> 
                        <ul v-for="error in formErrors" :key="error" class="list-group">
                          <li><i class="fas fa-exclamation-triangle"></i> {{ error }}</li>
                        </ul>
                      </div>
                      <form @submit="trySubmit" class="p-3"> 
                      <div class="form-group">
                        <label for="formGroupExampleInput"><i class="fas fa-image "></i> Image du produit</label>
                        <input v-model="form.img"   type="text" name="img"  class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="formGroupExampleInput2"><i class="fas fa-signature"></i> Nom du produit</label>
                        <input v-model="form.title"  type="text" name="title" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="formGroupExampleInput3"><i class="fas fa-tag"></i> Prix du produit</label>
                        <input  v-model.number="form.price" type="number" name="price" step="any" class="form-control"/>
                      </div>
                        <div class="row justify-content-center text-center p-2">
                    <div class=" col-xs-6 col-md-4">
                      <button type="button" class="ButtonCloseModal" data-dismiss="modal" @click="resetForm()">Fermer</button>
                    </div>
                    <div class="col-xs-6 col-md-4">
                      <button type="submit"  class="ButtonEditProductModal">Ajouter</button>
                    </div>
                  </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> 
            <!--  -->
            <!--Modal Add Product   -->
                <div class="modal fade text-dark"   id="EditProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                   <h4 class="text-center" ><i class="fas fa-edit mr-2 py-4 "></i>Modifier le produit</h4>
                    <form @submit.prevent="handleUpdateFormByModal"> 
                      <div class="form-group">
                        <label for="formGroupExampleInput"><i class="fas fa-image "></i> Image du produit</label>
                        <input v-model="selectedProduct.img"   type="text" name="img"  class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="formGroupExampleInput2"><i class="fas fa-signature"></i> Nom du produit</label>
                        <input v-model="selectedProduct.title"  type="text" name="title" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="formGroupExampleInput3"><i class="fas fa-tag"></i> Prix du produit</label>
                        <input  v-model.number="selectedProduct.price" type="number" name="price" step="any" class="form-control"/>
                      </div>
                      
                          <div class="row justify-content-center text-center p-2">
                             <h5 class="my-2 text-center ">Voulez-vous vraiment modifier le produit <span>{{ selectedProduct.title}}</span> ?</h5>
                    <div class=" col-xs-6 col-md-4">
                      <button type="button" class="ButtonCloseModal" data-dismiss="modal" @click="fetchProductData()">Fermer</button>
                    </div>
                    <div class="col-xs-6 col-md-4">
                      <button type="submit"  class="ButtonEditProductModal">Modifier</button>
                    </div>
                  </div>
                    </form>
                    
                  </div>
                </div>
              </div>
            </div> 
  </div>
 
</template>

<script>
import axios from "axios";

export default {
  name: "ProductsList",
  data() {
    return {
      Products: [],
      originalProducts: [],
      productSearch: '' ,
      selectedProduct: '',
      form: {
          img: '',
          title : '',
          price: ''
        },
      formErrors: [],
      success: [], 
    };
  },
  created() {
    this.fetchProductData();
  },

  methods: {
      fetchProductData(){
      axios
      .get("/api/products")
      .then(res => {
        this.Products = res.data;
        this.originalProducts = this.products;
         console.log(res.data); 
      })
      .catch(error => {
        console.log(error);
      });
    },
    trySubmit(e){
      e.preventDefault();
      if (this.formIsValide()){
          console.log(this.form)
          this.$store.dispatch('product/addProduct', { ...this.form} ) 
          this.resetForm();
          this.success.push('Produit ajouté !');
          this.closeModal();
          setTimeout(()=>{
            this.success = []
          },1500); 
         this.fetchProductData()
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
            this.formErrors.push('Image obligatoire')
        }
        if (!this.form.title) {
            this.formErrors.push('Nom obligatoire')
        }
        if (!this.form.price) {
            this.formErrors.push('Prix obligatoire')
        }
        return this.formErrors.length ? false : true
    },
    deleteProductByModal(id) {
      let indexOfArrayItem = this.Products.findIndex(i => i._id === id);
       axios
        .delete(`/api/products/delete-product/${id}`)
        .then(() => {
          this.Products.splice(indexOfArrayItem, 1);
          this.success.push('Produit supprimé !')
           setTimeout(()=>{
            this.success = []
          },1500);
        })
        .catch(error => {
          console.log(error);
        });
    }, 
    handleUpdateFormByModal() {
        axios
        .post(
          `api/products/update-product/${this.selectedProduct._id}`,
          this.selectedProduct
        )
        .then(res => {
          this.closeModal();
          this.success.push('Produit modifié !')
           setTimeout(()=>{
            this.success = []
          },1500);
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    closeModal(){
        const modals = document.getElementsByClassName("modal")
        for(let i=0; i<modals.length; i++) {
        modals[i].classList.remove('show');
        modals[i].setAttribute('aria-hidden', 'true');
        modals[i].setAttribute('style', 'display: none');
      }
     // get modal backdrops
     const modalsBackdrops = document.getElementsByClassName('modal-backdrop');
     // remove every modal backdrop
     for(let i=0; i<modalsBackdrops.length; i++) {
       document.body.removeChild(modalsBackdrops[i]);
     }
    },
     sendInfoForModal(product) {
      this.selectedProduct = product;
    }
  }
};
   

</script>

<style scoped>
.searchProduct input {
  border: 0 !important;
  border-bottom: 1px solid white !important;
  color: white;
}
.searchProduct input:focus {
  outline: 0 none;
  background: #ffffff;
  box-shadow: none;
}
.searchProduct ::placeholder {
  color: white;
}
.searchProduct input:hover{
  border-bottom: 1px solid #2ecc71 !important;
}
td {
    text-align: center;
}
.table td {
   text-align: center;   
}

tbody tr:hover {
background:#a2a3a3 !important;
font-weight: 800;
}

.ButtonAddProduct{
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
.ButtonAddProduct:hover{
  background-color: #2ecc71;
  box-shadow: 0px 2px 4px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(1px);
}
/* Button action  PRODUCT */
.ButtonViewProduct{
  color: white;
  background-color: #292b2c;
  border-radius: 50%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
}
.ButtonViewProduct:hover{
  transform: translateY(2px);
}
.ButtonEditProduct{
  color: white;
  background-color: #2ecc71;
  border-radius: 50%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
}
.ButtonEditProduct:hover{
  transform: translateY(2px);
}
.ButtonDeleteProductOpenModal{
   color: white;
  background-color: #d63031;
  border-radius: 50%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
}
.ButtonDeleteProductOpenModal:hover{
  transform: translateY(2px);
}
/* Button Modal product */
.ButtonCloseModal{
  width: 140px;
  height: 45px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: #292b2c;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.ButtonCloseModal:hover{
  background-color: #2ecc71;
  box-shadow: 0px 2px 4px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(2px);
}
.ButtonDeleteProductModal{
  width: 140px;
  height: 45px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: #292b2c;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.ButtonDeleteProductModal:hover{
  background-color: #d63031;
  box-shadow: 0px 2px 4px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(2px);
}
.ButtonEditProductModal{
  width: 140px;
  height: 45px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: #292b2c;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.ButtonEditProductModal:hover{
  background-color: #2ecc71;
  box-shadow: 0px 2px 4px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(2px);
}
span{
  color: #2ecc71;
  font-weight: bold;
}

label i {
  color: #2ecc71;
}

.modal input:focus {
  background-color: white  !important;
  border: 1px #2ecc71 solid;
  box-shadow: none !important;
}
.modal input {
  border: none;
  background: #e7e7e7 ;
  font-family: 'Roboto', sans-serif;
}
.ErrorMsg ul li, h6{
  list-style: none;
  color: #d63031;
  font-weight: 500;
}
.SuccessMsg h6{
  color: #2ecc71;
}
</style>