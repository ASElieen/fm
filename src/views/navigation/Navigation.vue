<template>
    <MobileNavVue v-if="isMobileTerminal" />
    <PCNavVue v-else />
</template>

<script setup>
import MobileNavVue from "./MobileNav.vue";
import PCNavVue from "./PCNav.vue";
import { isMobileTerminal } from '@/utils/utils'
import { useStore } from 'vuex'
const store = useStore()
//触发category获取数据
store.dispatch('category/useCategoryData')

</script>

<style lang="scss" scoped>

</style>