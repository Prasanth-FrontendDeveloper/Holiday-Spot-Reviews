<template>
    <div>
       <h1>The User Page</h1>
       <hr>
       <!-- <p>Loaded ID: {{ id }}</p> -->
       <button @click="navigateToHome" class="btn btn-primary">Go to Page</button>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    // data() {
    //   return {
    //       id: this.$route.params.id
    //   }
    // },
    // watch: {
    //    '$route'(to) {
    //        this.id = to.params.id;
    //    }
    // },
    methods: {
        navigateToHome: function() {
            this.$router.push({path: '/'});
           // this.$router.push('/');
        }
    }
}
</script>