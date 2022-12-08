<template>
    <MobileNavVue v-if="isMobileTerminal" />
</template>

<script setup>
import { } from "vue"
import MobileNavVue from "./MobileNav.vue";
import { isMobileTerminal } from '@/utils/utils'
import { getCategory } from '@/api/api'

const getCategoryData = async () => {
    const res = await getCategory()
    console.log(res)
}
getCategoryData()
</script>

<style lang="scss" scoped>

</style>