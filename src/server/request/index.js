import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class AXLRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config)
        .then(response => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(new Error(`Request failed with status code ${response.status}`));
          }
        })
        .catch(error => {
          if (error.response) {
            reject(new Error(`Request failed with status code ${error.response.status}: ${error.response.data}`));
          } else if (error.request) {
            reject(new Error('No response received from server'));
          } else {
            reject(new Error(`Error in request setup: ${error.message}`));
          }
        });
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get' });
  }

  post(config) { 
    return this.request({ ...config, method: 'post' });
  }
}

export default new AXLRequest(BASE_URL, TIMEOUT);