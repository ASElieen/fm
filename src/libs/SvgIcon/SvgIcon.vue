<template>
    <svg aria-hidden="true">
        <use :class="fillClass" :xlink:href="symbolID" :fill="color" />
    </svg>
</template>

<script setup>
import { computed } from "vue"
const props = defineProps({
    //svg图标名
    name: {
        type: String,
        required: true
    },
    //填充的tailwindCSS
    fillClass: {
        type: String
    },
    //图标颜色
    color: {
        type: String
    }
})

//为vite解析svg做准备
const symbolID = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped>

</style>