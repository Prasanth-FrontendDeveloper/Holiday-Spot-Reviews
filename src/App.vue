<template>
  <!-- <app-servers></app-servers> -->
  <div class="container">
    <div class="row">
       <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
         <h2>Routing</h2>
         <hr>
         <!-- <app-header></app-header> -->
         <router-view name="header-Top"></router-view>
         <router-view></router-view>
         <router-view name="header-Bottom"></router-view>
       </div>
    </div>
  </div>
</template>

<script>
// import Header from './components/Header'
//   export default {
//     components: {
//       appHeader: Header
//     }
//   }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
