import axios from 'axios'
export function request(config) {
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/hy66',
            timeout: 5000
        })
        // axios拦截器
        // 请求拦截
    instance.interceptors.request.use(
            // 请求成功来到这里
            config => {
                // console.log(config)
                // 拦截成功只会要返回
                return config
            },
            // 请求失败来到这里
            err => {
                // console.log(err)
            })
        // 响应拦截
    instance.interceptors.response.use(res => {
                // console.log(res)
                return res.data
            },
            err => {
                // console.log(err)
            })
        // 发送真正的网络请求,返回Promise可以在别的地方直接使用它的.then函数 

    return instance(config)
}