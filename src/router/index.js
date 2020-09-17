import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () =>
  import(/* webpackChunkName: "User" */ '../components/Login.vue')

const UserList = () =>
  import(/* webpackChunkName: "User" */ '../components/UserList.vue')

const AddUser = () =>
  import(/* webpackChunkName: "User" */ '../components/AddUser.vue')

const Home = () =>
  import(/* webpackChunkName: "Home" */ '../components/Home.vue')

const SchedulingQuery = () =>
  import(
    /* webpackChunkName: "Scheduling" */ '../components/scheduling/SchedulingQuery.vue'
  )
const RegimentView = () =>
  import(
    /* webpackChunkName: "Scheduling" */ '../components/scheduling/RegimentView.vue'
  )
const SchedulingChoose = () =>
  import(
    /* webpackChunkName: "Scheduling" */ '../components/scheduling/SchedulingChoose.vue'
  )
const SchedulingFilter = () =>
  import(
    /* webpackChunkName: "Scheduling" */ '../components/scheduling/SchedulingFilter.vue'
  )

const PaymentChoose = () =>
  import(
    /* webpackChunkName: "Scheduling" */ '../components/scheduling/PaymentChoose.vue'
  )

const SchedulingList = () =>
  import(
    /* webpackChunkName: "Scheduling" */ '../components/scheduling/SchedulingList.vue'
  )

//SchedulingContent.vue
const SchedulingContent = () =>
  import(
    /* webpackChunkName: "Scheduling" */ '../components/scheduling/SchedulingContent.vue'
  )

//SchedulingContent.vue
const SchedulingFunction = () =>
  import(
    /* webpackChunkName: "Scheduling" */ '../components/scheduling/SchedulingFunction.vue'
  )
const SchedulingChooseItems = () =>
  import(
    /* webpackChunkName: "Scheduling" */ '../components/scheduling/SchedulingChooseItems.vue'
  )

const Error403 = () =>
  import(/* webpackChunkName: "Error" */ '../components/exception/403.vue')
const Error404 = () =>
  import(/* webpackChunkName: "Error" */ '../components/exception/404.vue')
const Error500 = () =>
  import(/* webpackChunkName: "Error" */ '../components/exception/500.vue')

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/schedulingQuery', component: SchedulingQuery },
  { path: '/regimentView', component: RegimentView },
  { path: '/paymentChoose', component: PaymentChoose },
  { path: '/schedulingChoose', component: SchedulingChoose },
  { path: '/schedulingFilter', component: SchedulingFilter },
  {
    path: '/schedulingList/:data',
    name: 'schedulingList',
    component: SchedulingList,
  },
  {
    path: '/schedulingChooseItems',
    component: SchedulingChooseItems,
    props: 'items',
  },
  {
    path: '/schedulingContent',
    name: 'SchedulingContent',
    component: SchedulingContent,
  },
  { path: '/schedulingFunction', component: SchedulingFunction },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/addUser',
        name: 'addUser',
        component: AddUser,
      },
      {
        path: '/users',
        name: 'users',
        component: UserList,
      },
    ],
  },

  { path: '/403', component: Error403 },
  { path: '/404', component: Error404 },
  { path: '/500', component: Error500 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
