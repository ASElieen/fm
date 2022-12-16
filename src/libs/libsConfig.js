import SvgIcon from './SvgIcon/SvgIcon.vue'
import Popup from './Popup/Popup.vue'

export default {
    install(app) {
        app.component('SvgIcon', SvgIcon)
        app.component('Popup', Popup)
    }
}