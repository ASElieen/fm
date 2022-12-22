<template>
    <div class="relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" ref="referenceTarget">
        <div>
            <!--具名插槽 用于触发弹层-->
            <slot name="reference" />
        </div>

        <Transition name="popover">
            <div v-show="isVisible" class="absolute p-1 z-20 bg-white border rounded-md" ref="contentTarget"
                :style="contentStyle">
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

const DELAY_TIME = 100

// 定义指定位置的 Enum
const placementEnum = [
    PROP_TOP_LEFT,
    PROP_TOP_RIGHT,
    PROP_BOTTOM_LEFT,
    PROP_BOTTOM_RIGHT
]
</script>

<script setup>
import { ref, watch, nextTick } from "vue"
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
let timeout = null

//鼠标移入和移出行为
const onMouseEnter = () => {
    isVisible.value = true
    if (timeout) clearTimeout(timeout)
}

const onMouseLeave = () => {
    timeout = setTimeout(() => {
        isVisible.value = false
        timeout = null
    }, DELAY_TIME)
}

//计算元素尺寸 控制气泡相对位置
const referenceTarget = ref(null)
const contentTarget = ref(null)

const useElementSize = (target) => {
    if (!target) return
    return {
        width: target.offsetWidth,
        height: target.offsetHeight
    }
}

//弹层位置计算
const contentStyle = ref({
    top: 0,
    left: 0
})

//展示时计算气泡位置
watch(isVisible, (val) => {
    if (!val) return
    nextTick(() => {
        switch (props.placement) {
            // 左上
            case PROP_TOP_LEFT:
                contentStyle.value.top = 0
                contentStyle.value.left =
                    -useElementSize(contentTarget.value).width + 'px'
                break
            // 右上
            case PROP_TOP_RIGHT:
                contentStyle.value.top = 0
                contentStyle.value.left =
                    useElementSize(referenceTarget.value).width + 'px'
                break
            // 左下
            case PROP_BOTTOM_LEFT:
                contentStyle.value.top =
                    useElementSize(referenceTarget.value).height + 'px'
                contentStyle.value.left =
                    -useElementSize(contentTarget.value).width + 'px'
                break
            // 右下
            case PROP_BOTTOM_RIGHT:
                contentStyle.value.top =
                    useElementSize(referenceTarget.value).height + 'px'
                contentStyle.value.left =
                    useElementSize(referenceTarget.value).width + 'px'
                break

        }
    })
})

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