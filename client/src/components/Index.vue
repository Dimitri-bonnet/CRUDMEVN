<template>
  <div class="container-fluid bg-dark p-5  ">
    <div class="middle">
    <div class="row text-center text-white ">
      <div class="col-xs-12 col-md-12">
        <h4>Application CRUD stack <span>MEVN</span> (MongodDB, Express, Vue(X) et node) :</h4>
        <h6>Utilisation et création d'une API REST</h6>
        <div class="pt-4">
          <h6><span>BACKEND</span> (MongoDB, Express et Node)</h6>
          <p>
            Ajouter un produit dans la BDD via un formulaire ( <span class="font-italic">create</span> ),
            <br />Lire les produits en BDD ( <span class="font-italic">read</span> ),
            <br />Modifier un produit en BDD via un formulaire ( <span class="font-italic">update</span> ).
            <br />Supprimer un produit via la list des produits ( <span class="font-italic">delete</span> ),
          </p>
        </div>
      </div>
      <div class="col-xs-12 col-md-12">
        <h6><span>FRONTEND</span> (Vue(x))</h6>
        <p class="text-center">
          Utilisation de bootstrap pour le systéme de grille (responsive)
          <br />
Icône = Librairie Font-awesome
        </p>
      </div>
    </div>
    <div class="row justify-content-center text-center text-white">
      <div class="col-xs-8 col-md-3 col-lg-1">
        <p>Mon LinkedIn : </p>
        <a href="https://www.linkedin.com/in/dimitri-bonnet18" class="mr-2" target="_blank"><i class="fab fa-linkedin-in fa-5x text-white"></i></a>
      </div>
       <div class="col-xs-8 col-md-3 col-lg-1">
        <p>Mon GitHub :</p>
        <a href="https://github.com/Dimitri-bonnet"  target="_blank"><i class="fab fa-github fa-5x text-white"></i></a>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {}
};
</script>

<style scoped>
h6 span, h4 span{
  color: #2ecc71;
}
a i:hover{
  color: #2ecc71 !important;
}
/*  .middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
   
  }  */
</style>