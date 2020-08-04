<template>
<div>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-6 text-center p-3">
        <h3>Les produits</h3>
          <div class="input-group input-group-sm p-2">
            <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
            <input type="text" class="form-control" placeholder="Rechercher... ">
          </div>
      </div>
    </div>
<!-- Section produits -->
    <section>
      <div class="row justify-content-center align-items-center">
        <div class=" col-10 col-sm-6 col-md-6 col-lg-3 " v-for="product in Products" :key="product._id">
          <div class="card text-center m-2 mb-5" >
            <img  :src="product.img" alt="Card image cap" height="100%" width="100%">
            <div class="card-body ">
              <h6 class="card-title">{{ product.title }}</h6>
              <p class="card-text ">{{ product.price }} €</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
<!-- Paralax effect -->
  <section>
    <div class="imgSection  d-flex justify-content-center">
        <div class="text-center  col-6">
          <div>
            <h4>Inscrivez-vous à notre newsletter !</h4>
            <p>On vous tiendra au courant de toutes les dernières sorties sneakers, de nos prochains tirages au sort et de tous nos concours en avant-première.</p>
            <input type="text" class=" col-6" placeholder="Saisissez votre adresse e-mail...">
          </div>
        </div>
    </div>  
  </section>
  <div class="container-fluid">
     <div class="row justify-content-center p-5">
        <div class="col-md-3 text-center">
          <i class="fas fa-box-open fa-3x"></i>
          <h4 class="card-title">Livraison et retours gratuits</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolorem fugiat quibusdam suscipit debitis laudantium, recusandae excepturi vel quae praesentium.</p>
        </div>
        <div class="col-md-3 text-center"> 
          <i class="fas fa-handshake fa-3x"></i>
          <h4 class="card-title">100% neufs et authentiques</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolorem fugiat quibusdam suscipit debitis laudantium, recusandae excepturi vel quae praesentium.</p>
        </div>
        <div class="col-md-3 text-center">
            <i class="fas fa-comments fa-3x"></i>
            <h4 class="card-title">Service client français réactif</h4>
            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolorem fugiat quibusdam suscipit debitis laudantium, recusandae excepturi vel quae praesentium.</p>
        </div>
      </div>
<!-- Section nouveaux produits -->
    <div class=" text-center p-5">
      <h3>Les dernières nouveautés</h3>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class=" col-10 col-sm-6 col-md-6 col-lg-3 " v-for="product in Products.slice(5,9)" :key="product._id">
        <div class="card text-center m-2 " >
          <img  :src="product.img" alt="Card image cap" height="100%" width="100%">
          <div class="card-body ">
            <h6 class="card-title">{{ product.title }}</h6>
            <p class="card-text ">{{ product.price }} €</p>
          </div>
        </div>
      </div>
    </div>
<!-- Section bestseller produits -->
      <div class=" text-center p-5">
      <h3>Les plus populaires</h3>
      </div>
      <div class="row justify-content-center align-items-center pb-5">
       <div class="col-10 col-sm-6 col-md-6 col-lg-3 " v-for="product in Products.slice(0,4)" :key="product._id">
            <div class="card text-center m-2" >
              <img  :src="product.img" alt="Card image cap" height="100%" width="100%">
              <div class="card-body">
                <h6 class="card-title">{{ product.title }}</h6>
                <p class="card-text ">{{ product.price }} €</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
 name:'ShopList',
  data() {
    return {
      Products: [],
    }
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
  },
};
</script>

<style scoped>

.container-fluid{
  min-height: 100vh;
  background-color:#f1f2f6;
}
.card{
  max-height: 500px;
  text-transform: uppercase ;
  letter-spacing: 0.3px;
  cursor: pointer;
}
.card:hover img{
  zoom: 1;
  opacity: 0.65;
 
  }
  .card:hover div{
     background: black;
  }
.card:hover p {
  color: white;
  font-weight: bold;
}
.card:hover h6 {
  color:white;
}
.imgSection{
  min-height:45vh;
  background: url(../../assets/img/shoes.jpg) center center/cover;
  background-attachment:fixed; 
  display: flex;
  align-items: center;
}

</style>