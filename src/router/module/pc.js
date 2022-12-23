export default [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/layout/PCEntry.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/navigation/Navigation.vue')
            }
        ]
    }
]