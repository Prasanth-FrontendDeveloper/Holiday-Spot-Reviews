<template>
  <div id="app1">
    <p v-once>{{ title }}</p> <p>Vue.js is pretty cool- {{ name }} ({{ age }})</p>
    <p><a href="http://google.com" target="blank">Google it</a></p> <p>{{ sayHello() }} - <a v:bind:href="link" target="blank">Google it</a></p>
    <p v-html="finishedLink"></p><p>{{ age*5 }}</p><p>{{ random() }}</p>
    <div>
      <img v-bind:src="image">
    </div>
    <button v-on:click="increase(2);alertMe()">Click Me</button> <button v-on:click="counter++">Click Me</button><p>{{ counter }}</p>
    <p v-on:mousemove="updateCoordinates">Hover your mouse: {{ x }}/{{ y }} - <span v-on:mousemove.stop="">DEAD SPOT</span></p>
    <input type="text" v-on:keyup.enter.space="alertMe"> <input type="text" v-on:keydown="keyValue = $event.target.value"> <p>{{ keyValue }}</p> <input type="text" v-model="bindValue"><p>{{ bindValue }}</p>
    <button v-on:click="increased++">Increase</button><button v-on:click="increased--">Decrease Second</button>
    <p>Increase: {{ increased }} | Decrease Second: {{ increased }}</p> <p>Result: {{ result() }} | Output:{{ output }}</p>
    <p v-if="show">You can see me.</p><p v-else>Now you see me!</p><p v-show="show">Do you also see me</p><button @click="show = !show">Switch</button>
    <template v-if="show">
        <h1>Heading</h1>
        <p>Inside a template</p>
    </template>
    <ul>
      <ol v-for="(ingredient, i) in ingredients" v-bind:key="ingredient">{{ ingredient }} ({{ i }})</ol>
    </ul>
    <button @click="ingredients.push('spices')">Add New</button>
    <ul>
      <ol v-for="person in persons" v-bind:key="person">{{ person.name }}</ol>
    </ul>
    <ul>
      <ol v-for="person in persons" v-bind:key="person">
        <span v-for="value in person" v-bind:key="value">{{ value }}</span>
      </ol>
    </ul>
    <ul>
      <li v-for="person in persons" v-bind:key="person">
        <div v-for="(value, key, index) in person" v-bind:key="value">{{ key }} : {{ value }} ({{ index }})</div>
      </li>
    </ul>
    <span v-for="n in 10" v-bind:key="n">{{ n + 1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'app1',
  data() {
    return {
      title: 'Hello Vue.js',
      name: 'Prasanth',
      age: 25,
      link:'http://google.com',
      finishedLink: '<a href="http://google.com" target="blank">Dynamic Google it</a>',
      image: './assets/logo.png',
      counter: 0,
      x: 0,
      y: 0,
      keyValue: '',
      bindValue: 'Hey!',
      increased: 0,
      show: true,
      ingredients:['Meat','Fruit','Cookies'],
      persons: [
        {name: 'Prasanth', age: 25, color: 'White'},
        {name: 'Abinav', age:30, color: 'Red'}
      ]
    }
  },
  computed: {
     output: function() {
        return this.increased > 5 ? 'Greater than 5' : 'Smaller than 5';
     }
  },
  watch: {
    increased: function() {
      var vm = this;
      setTimeout(() => {
        vm.increased = 0;
      }, 2000);
    } 
  },
  methods: {
    random: function() {
      return Math.random();
    },
    increase: function(step) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    sayHello: function() {
      this.name = 'Abinav';
      return this.name;
    },
    alertMe: function() {
      alert('ALERT!');
    },
    result: function() {
      return this.increased > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
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
