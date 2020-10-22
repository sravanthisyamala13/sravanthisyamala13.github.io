import Vue from 'vue';
import Router from 'vue-router';
import RecipieList from '../components/recipieList'
import Header from '../components/Header'
import Register from '../components/register'
import Nutrition from '../components/nutrition'

Vue.use(Router)


export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/recipies',
      name: 'RecipieList',
      component: RecipieList,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/nutrition',
      name: 'Nutrition',
      component: Nutrition,
    },
  ]
})


