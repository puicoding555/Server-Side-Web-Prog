import { createRouter, createWebHistory } from 'vue-router'

// Menu
import MenuIndex from '../components/Menus/Index.vue'
import MenuCreate from '../components/Menus/CreateMenu.vue'
import MenuEdit from '../components/Menus/EditMenu.vue'
import MenuShow from '../components/Menus/ShowMenu.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
  path: '/menus',
  component: MenuIndex
},
{
  path: '/menu/create',
  component: MenuCreate
},
{
  path: '/menu/edit',
  component: MenuEdit
},
{
  path: '/menu',
  component: MenuShow
}

  ]
})

export default router
