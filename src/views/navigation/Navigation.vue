<template>
    <MobileNavVue v-if="isMobileTerminal" />
</template>

<script setup>
import MobileNavVue from "./MobileNav.vue";
import { isMobileTerminal } from '@/utils/utils'
import { useStore } from 'vuex'
const store = useStore()
//触发category获取数据
store.dispatch('category/useCategoryData')

</script>

<style lang="scss" scoped>

</style>