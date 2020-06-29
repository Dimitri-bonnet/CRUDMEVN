<template>
  <div class="container-fluid bg-dark">
    <div class="row text-center text-white p-5">
      <div class="col-12">
        <h4>Application CRUD avec la stack MEVN (MongodDB, Express, Vue(X) et node) :</h4>
        <h6>Utilisation d'une API REST</h6>
        <div class="pt-4">
          <h6>BACKEND (MongoDB, Express et Node)</h6>
          <p>
            Ajouter un produit dans la BDD via un formulaire (create),
            <br />Lire les produits en BDD (read),
            <br />Supprimer un produit via la list des produits (delete),
            <br />Modifier un produit en BDD via un formulaire (update).
          </p>
        </div>
      </div>
      <div class="col-12">
        <h6>FRONTEND (Vue(x))</h6>
        <p class="text-center">
          Utilisation de bootstrap pour le systéme de grille (responsive)
          <br />
Icône = Librairie Font-awesome
        </p>
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
.container-fluid {
  height: 100vh;
}
</style>