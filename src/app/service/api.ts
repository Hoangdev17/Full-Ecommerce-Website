import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}` 
    },
    timeout: 10000,
    withCredentials: true 
});

export default api;