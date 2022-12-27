import { computed, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { PC_DEVICE_WIDTH } from '../constants/constants'
import store from '@/store/vuex'
import { THEME_DARK, THEME_LIGHT } from '@/constants/constants'

const { width } = useWindowSize()
export const isMobileTerminal = computed(() => {
    return width.value < PC_DEVICE_WIDTH
})

export const useRem = () => {
    const MAX_FONT_SIZE = 40
    document.addEventListener('DOMContentLoaded', () => {
        const html = document.querySelector('html')
        //根元素fontsize标准为屏幕宽度/10
        let fontSize = window.innerWidth / 10
        fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
        html.style.fontSize = fontSize + 'px'
    })
}

//初始化主题
export const useTheme = () => {
    watch(() => store.getters.themeType, (val) => {
        let themeClass = ''
        switch (val) {
            case THEME_LIGHT:
                themeClass = 'light'
                break
            case THEME_DARK:
                themeClass = 'dark'
                break
        }

        document.querySelector('html').className = themeClass
    }, {
        immediate: true
    })
}