//navigationBar中的category数据
import { ALL_CATEGORY_ITEM, CATEGORY_NORMAL_DATA } from '@/constants/constants'
import { getCategory } from '@/api/api'
export default {
    //独立作用域
    namespaced: true,
    //等价于()=>{ return {} }
    state: () => ({
        //用每次获得的数据作为下一次初始化数据 解决刷新时PCNav组件闪烁的问题
        categorys: [CATEGORY_NORMAL_DATA]
    }),
    mutations: {
        //给category赋值的唯一参数
        setCategorys(state, newCategorys) {
            state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
        }
    },
    actions: {
        //获取category数据并保存到vuex中
        async useCategoryData(context) {
            const { categorys } = await getCategory()
            context.commit('setCategorys', categorys)
        }
    }
}