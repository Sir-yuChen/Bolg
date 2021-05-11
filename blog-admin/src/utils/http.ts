import axios, { AxiosError } from 'axios'
import {ipUrl} from '../config/apiUrl'
// import store from '@/store'
import { message, notification } from 'antd'
// import { logout } from '@/store/actions'

interface RespData {
  success: boolean
  errorCode: number
  msg?: string
  data?: any
  [key: string]: any
}

let exiting = false

function handleError(error: AxiosError) {
  if (axios.isCancel(error)) {//取消请求
    console.log(error)
  } else {
    const response = error.response
    notification.error({
      message: `Error Code: ${response?.status ?? -1}`,
      description: response?.statusText ?? '服务器出小差'
    })
  }
}

const httpInstance = axios.create({
  timeout: 60000,
  baseURL: ipUrl
})

httpInstance.defaults.headers.common.isLoading = true
httpInstance.defaults.headers.common.successAlert = false
httpInstance.defaults.headers.common.errorAlert = true
Object.setPrototypeOf(httpInstance, axios)

httpInstance.interceptors.request.use(function (config) {
  const method = config.method
  // const userState = store.getState().user.userInfo //获取用户登录信息

  // config.headers.token = userState.token //用户登录token

  const data: { [k: string]: any } = {}

  if (method === 'post' || method === 'put') {
    if (config.data instanceof FormData) {
      for (let key in data) {
        config.data.append(key, data[key])
      }
    } else {
      config.data = Object.assign(data, config.data)
    }
  }

  return config
}, function (error) {
  handleError(error)
  return Promise.reject(error)
})


httpInstance.interceptors.response.use(function (res) {
  const headers = res.config.headers
  const success: RespData = res.data

  if (!success && headers.errorAlert) {
    console.log(`请求===》`,success, headers.errorAlert )
    notification.error({
      message: `错误码: -1`,
      description:'服务器出小差'
    })
  }

  if (success && headers.successAlert) {
    message.success( 'Success')
  }

  // if (data.errorCode === 401 && !exiting) {
  //   exiting = true
  //   setTimeout(()=>console.log(`返回401`,'登录注销接口' ), 2000)
  // }

  return res
}, function (error) {
 
  handleError(error)
  return Promise.reject(error)
})

export default httpInstance
