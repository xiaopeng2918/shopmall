import axios from "axios"

export function request(config) {
  return new Promise((resolve, reject) => {
    const instance1 = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000,
    })

    // 请求拦截
    instance1.interceptors.request.use(config => {
      // 这里可以把拦截到的信息进行处理
      // 处理结束记得抛出config请求
      return config;
    }, err => {
      console.log(err);
    })

    // 响应拦截
    instance1.interceptors.response.use(rel => {
      // 拦截处理;
      // 返回响应数据
      return rel.data;
    }, err => {
      console.log(err);
    })


    instance1(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// export function request(config) {
//   const instance1 = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000,
//   })
//   return instance1(config);
// }