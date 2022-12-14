<template>
    <div class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40" ref="containerTarget">
        <!--搜索图标-->
        <SvgIconVue class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2" name="search" color="#707070" />

        <!--输入框-->
        <input type="text"
            class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 dark:bg-zinc-800 caret-zinc-400 rounded-xl text-zinc-900 text-sm tracking-wide font-semibold border border-zinc-100 dark:border-zinc-700 focus:border-red-300 duration-500 group-hover:bg-white group-hover:border-zinc-200"
            placeholder="搜索" v-model="inputValue" @keyup.enter="onSearchHandler" @focus="onFocusHandler"
            @blur="onBlurHandler">

        <!--删除按钮-->
        <SvgIconVue name="input-delete"
            class="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 cursor-pointer duration-500"
            v-show="inputValue" @click="clearInputValue" />

        <!--分割线-->
        <div
            class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200">
        </div>

        <!--搜索按钮-->
        <ButtonVue
            class="opacity-0 absolute translate-y-[-50%] top-[50%] right-1 rounded-full group-hover:opacity-100 duration-500"
            icon="search" iconColor="#ffffff" @click="onSearchHandler">
        </ButtonVue>

        <!--下拉卡片-->
        <Transition name="slide">
            <div class="max-h-[368px] w-full text-base overflow-auto bg-white dark:bg-zinc-800 absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 dark:border-zinc-600 duration-200 hover:shadow-3xl"
                v-if="$slots.dropdown" v-show="isFocus">
                <slot name="dropdown" />
            </div>
        </Transition>
    </div>
</template>

<script>
//双向绑定
const EMIT_UPDATE_MODELVALUE = 'update:modelValue'
//搜索
const EMIT_SEARCH = 'search'
// 删除所有文本事件
const EMIT_CLEAR = 'clear'
// 输入事件
const EMIT_INPUT = 'input'
// 获取焦点事件
const EMIT_FOCUS = 'focus'
// 失去焦点事件
const EMIT_BLUR = 'blur'
</script>

<script setup>
import { ref, watch } from "vue"
import { useVModel, onClickOutside } from '@vueuse/core'
import SvgIconVue from "../SvgIcon/SvgIcon.vue";
import ButtonVue from "../Button/Button.vue";

const props = defineProps({
    modelValue: {
        required: true,
        type: String
    }
})

const emits = defineEmits([EMIT_UPDATE_MODELVALUE, EMIT_SEARCH, EMIT_BLUR, EMIT_FOCUS, EMIT_INPUT, EMIT_CLEAR])

const inputValue = useVModel(props)
//监听用户输入行为
watch(inputValue, (val) => {
    emits(EMIT_INPUT, val)
})

//清除输入框
const clearInputValue = () => {
    inputValue.value = ''
    emits(EMIT_CLEAR, '')
}

//搜索
const onSearchHandler = () => {
    emits(EMIT_SEARCH, inputValue.value)
}

//input是否获取到焦点
const isFocus = ref(false)
const containerTarget = ref('')
const onFocusHandler = () => {
    isFocus.value = true
    emits(EMIT_FOCUS)
}

//失去焦点
const onBlurHandler = () => {
    emits(EMIT_BLUR)
}

//点击下拉弹层之外隐藏弹层
onClickOutside(containerTarget, () => {
    isFocus.value = false
})


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