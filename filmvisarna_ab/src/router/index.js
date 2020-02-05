import Vue from "vue";
import VueRouter from "vue-router";
import MovieList from "../views/movieList.vue";
import Movie from "../views/movieShowing.vue";
import aboutPage from "@/views/aboutPage.vue";
import homePage from "@/views/Home.vue";
import ticketBooking from "@/views/ticketBooking.vue";
import createUser from "@/views/createUser.vue"
import Dashboard from '@/components/Dashboard'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homePage",
    component: homePage
  },
  {
    path: "/about",
    name: "aboutPage",
    component: aboutPage
  },
  {
    path: "/movies",
    name: "movielist",
    component: MovieList
  },
  {
    path: "/tickets/:screening",
    name: "ticketBooking",
    component: ticketBooking
  },
  {
    path: "/movies/:movie",
    name: "movie",
    component: Movie
  },
  {
    path: "/User",
    name: "createUser",
    component: createUser
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
},
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

export default router;
