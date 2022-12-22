<template>
    <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div>
            <!--具名插槽 用于触发弹层-->
            <slot name="reference" />
        </div>

        <Transition name="popover">
            <div v-show="isVisible" class="absolute p-1 z-20 bg-white border rounded-md">
                <!--匿名插槽 弹层-->
                <slot />
            </div>
        </Transition>
    </div>
</template>

<script>
const PROP_TOP_LEFT = 'top-left'
const PROP_TOP_RIGHT = 'top-right'
const PROP_BOTTOM_LEFT = 'bottom-left'
const PROP_BOTTOM_RIGHT = 'bottom-right'

// 定义指定位置的 Enum
const placementEnum = [
    PROP_TOP_LEFT,
    PROP_TOP_RIGHT,
    PROP_BOTTOM_LEFT,
    PROP_BOTTOM_RIGHT
]
</script>

<script setup>
import { ref } from "vue"
const props = defineProps({
    placement: {
        type: String,
        default: 'bottom-left',
        validator(val) {
            const result = placementEnum.includes(val)
            if (!result) {
                throw new Error(`placement属性必须是${placementEnum.join(',')}中的一项`)
            }
            return result
        }
    }
})
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