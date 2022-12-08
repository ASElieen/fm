<template>
    <MobileNavVue v-if="isMobileTerminal" :data="categoryData" />
</template>

<script setup>
import { ref } from "vue"
import MobileNavVue from "./MobileNav.vue";
import { isMobileTerminal } from '@/utils/utils'
import { getCategory } from '@/api/api'

const categoryData = ref([])

const getCategoryData = async () => {
    const res = await getCategory()
    categoryData.value = res.categorys
}
getCategoryData()
</script>

<style lang="scss" scoped>

</style>