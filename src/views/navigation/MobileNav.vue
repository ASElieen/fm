<template>
    <div class="bg-white sticky top-0 left-0 z-10">
        <ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden" ref="ulTarget">
            <!--右侧按钮-->
            <li class="fixed top-0 right-[-1px] h-5 px-1 py-0.5 ml-4 flex items-center bg-white z-20 shadow-l-white"
                @click="onShowPopUp">
                <SvgIcon class="w-3 h-4" name="hamburger" />
            </li>

            <!--滑块-->
            <li ref='sliderTarget' :style="sliderStyle"
                class="absolute h-[19px] bg-zinc-900 rounded-lg duration-200 top-0 mt-[0.5px]">
            </li>


            <li v-for="(item, index) in data" :key="item.id"
                class="shrink-0 px-1.5 py-1 pb-2 z-10 duration-200 last:mr-5" :ref="setItemRef"
                @click="onItemClick(index)" :class="{
                    'text-zinc-100 ': currentItemIndex === index
                }">
                {{ item.name }}
            </li>
        </ul>
        <Popup v-model="isVisible">
            <MenuVue :categorys="data" @on-item-click="onItemClick" />
        </Popup>
    </div>
</template>

<script setup>
import { ref, watch, onBeforeUpdate } from "vue"
import { useScroll } from '@vueuse/core'
import MenuVue from "@/components/Menu/Menu.vue";

const sliderStyle = ref({
    transform: 'translateX(0px)',
    width: '36px'
})

defineProps({
    data: {
        type: Array,
        required: true
    }
})

//获取选中的item下标
const currentItemIndex = ref(0)
//获取填充的Item元素
let itemRefs = []
const setItemRef = (el) => {
    if (el) itemRefs.push(el)
}

//DOM更新前
onBeforeUpdate(() => {
    itemRefs = []
})

//获取ul元素来计算偏移位置
const ulTarget = ref(null)
const { x: ulScrollLeft } = useScroll(ulTarget)
watch(currentItemIndex, (val) => {
    //获取选中元素的left和width
    const { left, width } = itemRefs[val].getBoundingClientRect()
    //设置sliderStyle
    sliderStyle.value = {
        // ul 横向滚动位置 + 当前元素的 left 偏移量
        transform: `translateX(${ulScrollLeft.value + left - 4 + 'px'})`,
        width: width + 'px'
    }
})

//item点击事件
const onItemClick = (index) => {
    currentItemIndex.value = index
    isVisible.value = false
}

//控制popup展示
const isVisible = ref(false)

//汉堡按钮点击事件
const onShowPopUp = () => {
    isVisible.value = true
}

</script>

<style lang="scss" scoped>

</style>