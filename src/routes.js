import Home from './components/Home.vue'
import User from './components/User/User.vue'
import UserDetail from './components/User/UserDetail.vue'
import UserDetailsPage from './components/User/UserDetailsPage.vue'
import UserEdit from './components/User/UserEdit.vue'
import UserStart from './components/User/UserStart.vue'
import Header from './components/Header.vue'

export const routes = [
 { path: '', components: {
    default: Home,
    'header-Top': Header
} },
 { path: '/user', components: {
     default: User,
     'header-Bottom': Header
 }, children: [
     { path: '', component: UserStart },
     { path: ':id', component: UserDetailsPage },
     { path: ':id/edit', component: UserEdit, name: 'userEdit' }
 ] },
 { path: '/userDetails', component: UserDetail },
 { path: '/redirect-me', component: Home },
 { path: '*', redirect: '/'}
];