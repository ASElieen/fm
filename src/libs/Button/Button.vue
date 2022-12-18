<template>
    <div></div>
</template>

<script>
//按钮风格
const typeEnum = {
    primary: 'text-white bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-800',
    main: 'text-white bg-main hover:bg-hover-main active:bg-main',
    info: 'text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200'
}
//size可选项(区分文字按钮和icon按钮)
const sizeEnum = {
    default: {
        button: 'w-8 h-4 text-base',
        icon: ''
    },
    'icon-default': {
        button: 'w-4 h-4',
        icon: 'w-1.5 h-1.5'
    },
    small: {
        button: 'w-7 h-3 text-base',
        icon: ''
    },
    'icon-small': {
        button: 'w-3 h-3',
        icon: 'w-1.5 h-1.5'
    }
}
</script>

<script setup>
import { } from "vue"
//通过props控制按钮
const props = defineProps({
    icon: {
        type: String
    },
    iconColor: {
        type: String
    },
    //icon图标类名
    iconClass: {
        type: String
    },
    //按钮风格
    type: {
        type: String,
        default: 'main',
        validator(val) {
            //获取所有可选按钮风格
            const keys = Object.keys(typeEnum)
            const res = keys.includes(val)
            if (!res) throw new Error(`type必须是${keys.join(',')}中的一个`)
            return res
        }
    },
    //按钮大小
    size: {
        type: String,
        default: 'default',
        //大小校验
        validator(val) {
            //获取所有可以输入的大小(筛掉icon图标)
            const keys = Object.keys(sizeEnum).filter((key) => {
                return !key.includes('icon')
            })
            const result = keys.includes(val)
            if (!result) throw new Error(`size必须是${keys.join(',')}中的一个`)
            return result
        }
    }
})
//区分icon和text

//根据数据实现视图

//点击事件
</script>

<style lang="scss" scoped>

</style>