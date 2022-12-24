<template>
    <div class="bg-white dark:bg-zinc-800 sticky top-0 left-0 w-full z-10">
        <ul class="w-[800px] relative flex flex-wrap justify-center overflow-x-auto px-[10px] py-1 text-xs text-zinc-600 duration-300 overflow-hidden mx-auto"
            :class="[isOpen ? 'h-[206px]' : 'h-[56px]']">

            <!-- lg下展开箭头 -->
            <div class="absolute right-1 bottom-1 z-20 p-1 rounded cursor-pointer duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-900"
                @click="triggerState">
                <SvgIconVue :name="isOpen ? 'fold' : 'unfold'" class="w-1 h-1"
                    fillClass="fill-zinc-900 dark:fill-zinc-300" />
            </div>

            <!-- category item -->
            <li v-for="(item, index) in $store.getters.categorys" :key="item.id"
                class="shrink-0 px-1.5 py-0 z-10 duration-200 last:mr-4 text-zinc-900 text-base font-bold h-4 leading-4 cursor-pointer hover:bg-zinc-200 rounded mr-1 mb-1 dark:text-zinc-500 dark:hover:text-zinc-300 dark:hover:bg-zinc-900"
                :class="{
                    'text-zinc-900 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-900 ': currentIndex === index
                }" @click="onItemClick(index)">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue"
import SvgIconVue from "@/libs/SvgIcon/SvgIcon.vue";

//状态切换处理
const isOpen = ref(false)
const triggerState = () => {
    isOpen.value = !isOpen.value
}

//选中状态
const currentIndex = ref(0)
const onItemClick = (index) => {
    currentIndex.value = index
}
</script>

<style lang="scss" scoped>

</style>