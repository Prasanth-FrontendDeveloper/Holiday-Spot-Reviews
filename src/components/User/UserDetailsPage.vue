<template>
    <div>
        <p>User Details Page</p>
        <p>Location Details ID: {{ $route.params.id }}</p>
        <router-link tag="button" :to="'/user/' + $route.params.id + '/edit'" class="btn btn-primary">Edit User</router-link>
        <router-link tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id }, query: {
            locale: 'en', q:105
        }}" class="btn btn-primary">Edit User</router-link>
    </div>
</template>