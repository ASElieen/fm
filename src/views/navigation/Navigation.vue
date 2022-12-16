<template>
    <MobileNavVue v-if="isMobileTerminal" :data="categoryData" />
</template>

<script setup>
import { ref } from "vue"
import MobileNavVue from "./MobileNav.vue";
import { isMobileTerminal } from '@/utils/utils'
import { getCategory } from '@/api/api'
import { ALL_CATEGORY_ITEM } from '@/constants/constants'

const categoryData = ref([])

const getCategoryData = async () => {
    const res = await getCategory()
    categoryData.value = res.categorys
    categoryData.value.unshift(ALL_CATEGORY_ITEM)
}
getCategoryData()
</script>

<style lang="scss" scoped>

</style>