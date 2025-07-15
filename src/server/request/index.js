import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import useMainStore from "@/store/modules/main";

// 在所有的网络请求中,对加载页面的显示控制
const mainStore = useMainStore()

class AXLRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
    
    // 网络请求的拦截器
    //1. 请求拦截器
    this.instance.interceptors.request.use((config) => {
      mainStore.isLoading = true
      return config
    }, (err) => {
      return err
    })
    //2. 响应拦截器
    this.instance.interceptors.response.use((res) => {
      mainStore.isLoading = false
      return res
    }, (err) => {
      mainStore.isLoading = false
      return err
    })
  }

  AXLrequest(config) {
    // mainStore.isLoading = true
    return new Promise((resolve, reject) => {
        this.instance.request(config)
        .then(response => {
          if (response.status === 200) {
            resolve(response.data);
            // mainStore.isLoading = false
          } else {
            reject(new Error(`Request failed with status code ${response.status}`));
            // mainStore.isLoading = false
          }
        })
        .catch(error => {
          if (error.response) {
            reject(new Error(`Request failed with status code ${error.response.status}: ${error.response.data}`));
            // mainStore.isLoading = true
          } else if (error.request) {
            reject(new Error('No response received from server'));
            // mainStore.isLoading = true
          } else {
            reject(new Error(`Error in request setup: ${error.message}`));
            // mainStore.isLoading = true
          }
        });
    })
  }

  get(config) {
    return this.AXLrequest({ ...config, method: 'get' });
  }

  post(config) { 
    return this.AXLrequest({ ...config, method: 'post' });
  }
}

export default new AXLRequest(BASE_URL, TIMEOUT);