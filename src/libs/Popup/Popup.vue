<template>
    <div>
        <Teleport to="body">
            <!--蒙版-->
            <Transition name="fade">
                <div class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0" v-if="isOpen"
                    @click="isOpen = false">
                </div>
            </Transition>
            <!--内容-->
            <Transition name="popup">
                <div :="$attrs" class="w-screen bg-white z-50 fixed bottom-0" v-if="isOpen">
                    <slot />
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
import { watch } from "vue"
import { useScrollLock, useVModel } from '@vueuse/core'
const props = defineProps({
    modelValue: {
        required: true,
        type: Boolean
    }
})

defineEmits(['update:modelValue'])

const isOpen = useVModel(props)

//锁定滚动
const isLocked = useScrollLock(document.body)
watch(isOpen, (val) => {
    isLocked.value = val
},
    {
        immediate: true
    })
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s;
}

//准备进度和离开完成
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.popup-enter-active,
.popup-leave-active {
    transition: all .3;
}

.popup-enter-from,
.popup-leave-to {
    transform: translateY(100%);
}
</style>