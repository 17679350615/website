import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/Student'
import Home from '../views/Home'
import Login from '../views/Login'
import Teacher from '../views/Teacher'
import Website from '../views/Website'
import Journalism from "../views/Journalism";
import Subject from "../views/Subject";
import Science from "@/views/Science";
import Message from "@/views/Message";
import Special from "@/views/Special";
import Evangel from "@/views/Evangel";
import Detail from "@/views/Detail";
import List from "@/views/List";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'Website',
    component: Website,
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    hidden: true
  },
  {
    path: '/home',
    name: '导航一',
    component: Home,
    children:[
      {
        path: '/student',
        name: '学生管理',
        component: Student
      },
      {
        path: '/teacher',
        name: '教师管理',
        component: Teacher
      },
      {
        path: '/journalism',
        name: '重师要闻',
        component: Journalism
      },
      {
        path: '/evangel',
        name: '佳音在线',
        component: Evangel

      },
      {
        path: '/special',
        name: '专题聚焦',
        component: Special
      },
      {
        path: '/science',
        name: '学术动态',
        component: Science
      },
      {
        path: '/subject',
        name: '学科建设',
        component: Subject
      },
      {
        path: '/message',
        name: '通知公告',
        component: Message
      },

    ]
  },
  {
    path: '/detail',
    name: '详情',
    component: Detail,
    hidden: true
  },
  {
    path:'/list',
    name: '列表',
    component: List,
    hidden: true
  }
]

const router = new VueRouter({
  routes
})

export default router
