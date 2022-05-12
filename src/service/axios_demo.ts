import axios from 'axios'

//axios的实例对象，模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
// //get请求传递参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// //post请求
// axios
//   .post('http://httpbin.org/post', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// Promise 本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res.length)
// })

// axios的配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000 //配置全局超时时间

//get请求传递参数
// axios
//   .get('/get', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     },
//     timeout: 5000
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// //post请求
// axios
//   .post('/post', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios.all -> 多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'coderwhy', age: 18 } }),
    axios.post('/post', { data: { name: 'kobe', age: 28 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

//axios的拦截器
//fn1: 请求发送成功执行的函数
//fn2：请求发送失败执行的函数
axios.interceptors.request.use(
  (config) => {
    //想执行的操作
    //1.给请求添加token
    //2.isloading动画
    console.log('请求拦截成功')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)

// fn1: 数据响应成功（服务器正常的返回数据）
axios.interceptors.response.use(
  (res) => {
    console.log('响应拦截成功')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
