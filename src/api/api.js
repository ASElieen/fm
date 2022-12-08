import request from '@/api/request'

//请求nav栏的分类列表
export const getCategory = () => {
    return request({
        url: '/category'
    })
}