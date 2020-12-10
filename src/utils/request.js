
import axios from 'axios';

export default function request({ method, url }) {
  
    return axios.request({
      method,
      url,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
  }