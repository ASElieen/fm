import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})

service.interceptors.request.use((config) => {
    config.headers.icode = 'BFF697B0C0083731'
    return config
})

service.interceptors.response.use((res) => {
    const { success, message, data } = res.data
    if (success) {
        return data
    } else {
        return Promise.reject(new Error(message))
    }
})

export default service