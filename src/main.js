import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/routerConfig'
import '../style.css'
import { useRem } from '@/utils/utils'
import libs from '@/libs/libsConfig'
import 'virtual:svg-icons-register'

useRem()
createApp(App).use(router).use(libs).mount('#app')
