import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'
Vue.use(ElementUI);
Vue.prototype.$http = Axios;
// Axios.defaults.baseURL = 'http://vue.mengxuegu.com/pro-api/'

// 路由守卫
// router.beforeEach((to, from, next) => {
//   next()
//   var token = sessionStorage.getItem('token')
//   if (!token) return next('/')
// })



// 树形表格
import TreeTable from 'vue-table-with-tree-grid'

Vue.use(TreeTable)
// 注册树形表格组件
Vue.component('tree-table', TreeTable)
// 拦截器
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.Authorization = sessionStorage.getItem('token')

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
