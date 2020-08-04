<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <router-link class="nav-link" to="/#">CRUD MEVN</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>
          <div class="navbar-brand d-block d-sm-none " href="index">
    </div> 
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto mt-2 mt-md-0">
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ProductsList">Liste des produits</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/FormAddProduct">Ajouter un produit</router-link>
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link" to="/IndexShop">Boutique</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mt-2 d-none d-sm-block mr-4 ">
        <li class="nav-item">
          <a href="https://www.linkedin.com/in/dimitri-bonnet18" class="mr-2" target="_blank"><i class="fab fa-linkedin-in fa-lg"></i></a>
          <a href="https://github.com/Dimitri-bonnet"  target="_blank"><i class="fab fa-github fa-lg"></i></a>
        </li>
      </ul>
    </div>
    
    </nav>
    
  </div> 
</template>

<script>

export default {
  name: 'TheHeader',
  components: {
   
  }
}
</script>

<style scoped>
a{
  color: #2ecc71 !important;
}
a:hover{
  color: #292b2c !important;
  font-weight: bold;
}
button span{
 background: blue;
}

</style>