import axios from "axios"

const AXIOS = axios.create({
  baseURL: '/api',
  headers: { "Content-Type": "application/json", Accept: 'application/json' },
});

export default AXIOS