import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import './service/axios_demo'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from '@/store/index'
import { globalRegister } from '@/global'

const app = createApp(App)

// app.component(ElButton.name, ElButton)
app.use(globalRegister)
app.use(ElementPlus)
app.use(store)
setupStore()
//path: /user => user
app.use(router)

app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

//单独使用拦截
// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })
