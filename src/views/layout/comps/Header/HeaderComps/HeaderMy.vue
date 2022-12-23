<template>
    <PopoverVue class="flex items-center" placement="bottom-left">
        <template #reference>
            <div
                class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100">

                <!--头像-->
                <img src="@/assets/images/IMG_2439(20220927-194034).JPG" alt="" class="w-3 h-3 rounded-sm">
                <!--下拉箭头-->
                <SvgIconVue class="h-1.5 w-1.5 ml-0.5" name="down-arrow" fillClass="fill-zinc-900" />
                <!-- VIP标记 -->
                <SvgIconVue class="w-1.5 h-1.5 absolute right-[16px] bottom-0" name="vip" />

            </div>
        </template>

        <div class="w-[140px] overflow-hidden">
            <div class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60" v-for="item in menuArr"
                :key="item.id">
                <SvgIconVue :name="item.icon" class="w-1.5 h-1.5 mr-1" fillClass="fill-zinc-900" />
                <span class="text-zinc-800 text-sm">
                    {{ item.title }}
                </span>
            </div>
        </div>
    </PopoverVue>
</template>

<script>
const menuArr = [
    {
        id: 0,
        title: '个人资料',
        icon: 'profile',
        path: '/profile'
    },
    {
        id: 1,
        title: '升级 VIP',
        icon: 'vip-profile',
        path: '/member'
    },
    {
        id: 2,
        title: '退出登录',
        icon: 'logout',
        path: ''
    }
]
</script>

<script setup>
import { } from "vue"
import PopoverVue from "@/libs/Popover/Popover.vue";
import SvgIconVue from "@/libs/SvgIcon/SvgIcon.vue";
</script>

<style lang="scss" scoped>

</style>