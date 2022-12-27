import { createStore } from 'vuex'
import { createVuexPersistedState } from "vue-persistedstate"
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'

const store = createStore({
    getters,
    modules: {
        category,
        theme
    },
    plugins: [
        createVuexPersistedState({
            key: 'vuex',
            storage: window.localStorage
        })
    ]
})

export default store
