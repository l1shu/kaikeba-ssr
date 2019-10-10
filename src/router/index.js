import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import detail from '../components/detail'

Vue.use(Router)

// 每次用户请求都需要创建router实例
export default function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/', component: index},
      {path: '/detail', component: detail}
    ]
  })
}