import { createRouter, createWebHistory } from 'vue-router'
import mobileRoutes from '@/router/module/mobile'
import PCRoutes from '@/router/module/pc'
import { isMobileTerminal } from '@/utils/utils'

const router = createRouter({
    history: createWebHistory(),
    routes: isMobileTerminal.value ? mobileRoutes : PCRoutes
})

export default router