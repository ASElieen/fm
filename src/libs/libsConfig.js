import { defineAsyncComponent } from 'vue'

export default {
    install(app) {
        const components = import.meta.glob('./*/*.vue')
        for (const [fullpath, fn] of Object.entries(components)) {
            //拼接组件
            const componentName = fullpath.split('/')[1]
            app.component(componentName, defineAsyncComponent(fn))
        }
    }
}