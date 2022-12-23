import { createStore } from 'vuex'
import { createVuexPersistedState } from "vue-persistedstate"
import getters from './getters'
import category from './modules/category'

const store = createStore({
    getters,
    modules: {
        category
    },
    plugins: [
        createVuexPersistedState({
            key: 'category',
            storage: window.localStorage
        })
    ]
})

export default store
