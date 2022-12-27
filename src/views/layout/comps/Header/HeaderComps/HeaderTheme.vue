<template>
    <PopoverVue>
        <!--触发区-->
        <template #reference>
            <SvgIconVue :name="iconName"
                class="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
                fillClass="fill-zinc-900 dark:fill-zinc-300" />
        </template>
        <!--展示区-->
        <div class="w-[140px] overflow-hidden">
            <div class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
                v-for="item in themeArr" :key="item.id" @click="onItemClick(item)">
                <SvgIconVue :name="item.icon" class="w-1.5 h-1.5 mr-1" fillClass="fill-zinc-900 dark:fill-zinc-300" />
                <span class="text-zinc-800 dark:text-zinc-300 text-sm">{{ item.name }}</span>
            </div>
        </div>
    </PopoverVue>
</template>

<script>
const themeArr = [
    {
        id: '0',
        type: THEME_LIGHT,
        icon: 'theme-light',
        name: '极简白'
    },
    {
        id: '1',
        type: THEME_DARK,
        icon: 'theme-dark',
        name: '极夜黑'
    },
    {
        id: '2',
        type: THEME_SYSTEM,
        icon: 'theme-system',
        name: '跟随系统'
    }
]
</script>

<script setup>
import { computed } from "vue"
import PopoverVue from "@/libs/Popover/Popover.vue";
import SvgIconVue from "@/libs/SvgIcon/SvgIcon.vue";
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants/constants'
import { useStore } from 'vuex';
const store = useStore()

//主题切换事件
const onItemClick = (theme) => {
    store.commit('theme/changeThemeType', theme.type)
}

//展示图标控制
const iconName = computed(() => {
    const findname = themeArr.find(item => {
        return item.type === store.getters.themeType
    })
    return findname?.icon
})
</script>

<style lang="scss" scoped>

</style>