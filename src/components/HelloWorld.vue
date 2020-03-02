<template>
  <div id="app1">
    <app-server-status></app-server-status>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus'
export default {
  components: {
    'app-server-status': ServerStatus
  }
}

// Vue.component('my-cmp',{
//   data: function() {
//     return {
//       status: 'Critical'
//     }
//   },
//   template: '<h1>Hello My Component: {{ status }}</h2>'
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  float: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
