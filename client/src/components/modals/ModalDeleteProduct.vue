<template>
    
   <div class="modal fade text-dark"   id="DeleteProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-body text-center">
                    <h5 >Voulez vous vraiment supprimer le produit <span>{{ product._id}} {{ product.title }} NOM DU PRODUIT (PROBLEME D'ID !)</span> ?</h5>
                  </div>
                  <div class="text-center p-2">
                    <button type="button" class="ButtonCloseModal mr-2" data-dismiss="modal">Fermer</button>
                    <button type="button" @click.prevent="deleteProduct(product._id)" data-dismiss="modal" class="ButtonDeleteProductModal">Supprimer</button>
                  </div>
                </div>
              </div>
            </div>
   
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>