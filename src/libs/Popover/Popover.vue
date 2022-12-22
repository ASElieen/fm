<template>
    <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div>
            <!--具名插槽 用于触发弹层-->
            <slot name="reference" />
        </div>
    </div>
    <Transition name="popover">
        <div v-show="isVisible" class="absolute p-1 z-20 bg-white border rounded-md">
            <!--匿名插槽 弹层-->
            <slot />
        </div>
    </Transition>
</template>

<script setup>
import { ref } from "vue"
const isVisible = ref(false)

//鼠标移入和移出行为
const onMouseEnter = () => {
    isVisible.value = true
}

const onMouseLeave = () => {
    isVisible.value = false
}
</script>

<style lang="scss" scoped>
.popover-enter-active,
.popover-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.popover-enter-from,
.popover-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>