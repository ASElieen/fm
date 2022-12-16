export default [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/layout/PCEntry.vue'),
        children: []
    }
]