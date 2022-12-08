import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})

service.interceptors.request.use((config) => {
    config.headers.icode = 'BFF697B0C0083731'
    return config
})

export default service