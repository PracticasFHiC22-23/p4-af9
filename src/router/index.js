import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue'
import RoomView from '../views/RoomView.vue'
import ExamView from '../views/ExamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/book',
      name: 'book',
      component: BookView
    },
    {
      path: '/room',
      name: 'room',
      component: RoomView
    },
    {
      path: '/exam',
      name: 'exam',
      component: ExamView
    }
  ]
})

export default router
