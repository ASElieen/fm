<template>
    <button class="text-sm text-center rounded duration-150 flex justify-center items-center" :class="[
        typeEnum[type],
        sizeEnum[sizeKey].button,
        { 'active:scale-105': isActiveAni }
    ]" @click.stop="onBtnClick">
        <!--loading-->
        <SvgIconVue v-if="loading" name="loading" class="w-2 h-2 animate-spin mr-1" />
        <!--icon按钮-->
        <SvgIconVue v-if="icon" :name="icon" class="m-auto" :class="sizeEnum[sizeKey].icon" :color="iconColor"
            :fillClass="iconClass" />
        <!--文字按钮-->
        <slot v-else />
    </button>
</template>

<script>
//按钮风格
const typeEnum = {
    primary: 'text-white bg-zinc-800 dark:bg-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-700 active:bg-zinc-800 dark:active:bg-zinc-700',
    main: 'text-white bg-main dark:bg-zinc-900 hover:bg-hover-main dark:hover:bg-zinc-700 active:bg-main dark:active:bg-zinc-700',
    info: 'text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-700'
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

const EMITS_CLICK = 'click'
</script>

<script setup>
import { computed } from "vue"
import SvgIconVue from "../SvgIcon/SvgIcon.vue";
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
    },
    //是否需要点击动画
    isActiveAni: {
        type: Boolean,
        default: true
    },
    //加载状态
    loading: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits([EMITS_CLICK])

//如果是icon图标 校验后补充icon前缀
const sizeKey = computed(() => {
    return props.icon ? 'icon-' + props.size : props.size
})

//点击事件
const onBtnClick = () => {
    if (props.loading) return
    emits(EMITS_CLICK)
}
</script>

<style lang="scss" scoped>

</style>