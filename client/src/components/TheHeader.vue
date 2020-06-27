<template>
  <div>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand href="#">CRUD</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  to="/ProductsList">Liste des produits</b-nav-item>
        <b-nav-item to="/FormAddProduct" >Ajouter un produit</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <!-- <div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="navBarToggler()">
    <i class="fa fa-bars"></i>
  </a>
</div> -->

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
/* a{
  color: black;
  text-decoration: none;
}

a:hover{
    color: gray;
    text-shadow: 0 0 .65px #333, 0 0 .65px #333;
} */
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>