import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { PC_DEVICE_WIDTH } from '../constants/constants'

const { width } = useWindowSize()
export const isMobileTerminal = computed(() => {
    return width.value < PC_DEVICE_WIDTH
})