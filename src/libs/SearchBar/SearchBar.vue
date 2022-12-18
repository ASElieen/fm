<template>
    <div class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40">
        <!--搜索图标-->
        <SvgIconVue class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2" name="search" color="#707070" />

        <!--输入框-->
        <input type="text"
            class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400 rounded-xl text-zinc-900 text-sm tracking-wide font-semibold border border-zinc-100 focus:border-red-300 duration-500 group-hover:bg-white group-hover:border-zinc-200"
            placeholder="搜索">

        <!--删除按钮-->
        <SvgIconVue name="input-delete"
            class="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 cursor-pointer duration-500" />

        <!--分割线-->
        <div
            class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200">
        </div>

        <!--搜索按钮-->
        <div></div>

        <!--下拉卡片-->
        <Transition name="slide">
            <div
                class="max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 duration-200 hover:shadow-3xl">
                <slot name="dropdown" />
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { } from "vue"
import SvgIconVue from "../SvgIcon/SvgIcon.vue";
</script>

<style lang="scss" scoped>
.slider-enter-active {
    transition: all .5s;
}

.slider-leave-active {
    transition: all .5s;
}

.slider-enter-from,
.slider-leave-to {
    transform: translateY(40px);
    opacity: 0;
}
</style>