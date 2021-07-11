import axios from 'axios'

axios.defaults.baseURL = '/api/'

console.log(import.meta.env.VITE_TOKEN_KEY)
axios.defaults.headers = {
  Authorization: `Bearer ${
    localStorage.getItem(import.meta.env.VITE_TOKEN_KEY + '') || ''
  }`,
}

export default axios
