<template>
    <div class="relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40">
        <!--搜索图标-->
        <SvgIconVue class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2" name="search" color="#707070" />

        <!--输入框-->
        <input type="text"
            class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400 rounded-xl text-zinc-900 text-sm tracking-wide font-semibold border border-zinc-100 focus:border-red-300 duration-500"
            placeholder="搜索">

        <!--删除按钮-->
        <SvgIconVue name="input-delete"
            class="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 cursor-pointer duration-500" />

        <!--分割线-->
        <div
            class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200">
        </div>

        <!--搜索按钮-->
    </div>
</template>

<script setup>
import { } from "vue"
import SvgIconVue from "../SvgIcon/SvgIcon.vue";
</script>

<style lang="scss" scoped>

</style>