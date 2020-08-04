<template>
  <div id="app">
    <div>
      <the-header></the-header>
       <router-view ></router-view>
    </div>
  </div>
</template>

<script>

import TheHeader from './components/TheHeader';
export default {
  name: 'App',
  components: {
   TheHeader
  }
}
</script>

<style lang="scss">
@import "./assets/style/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
html, body{
  margin: 0;
  padding: 0;
}
</style>
