import axios from 'axios'

import { BASE_URL } from '@/constants/api'
import { AppError } from '@/utils/appError'

const api = axios.create({
    baseURL: BASE_URL,
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.data) {
            return Promise.reject(new AppError(error.response.data.message))
        } else {
            return Promise.reject(error)
        }
    },
)

export { api }
