import axios from 'axios'

const BASE_URL = 'http://192.168.100.86:3333'

export const api = axios.create({
    baseURL: BASE_URL,
})
