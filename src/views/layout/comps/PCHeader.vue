<template>
    <div class="w-full bg-white border-b border-b-zinc-200 px-2 py-1 dark:bg-zinc-800 dark:border-b-zinc-700">
        <div class="flex items-center w-full">
            <img class="h-4 cursor-pointer mr-2" src="@/assets/images/IMG_2418.GIF" alt="" @click="onToHome">

            <HeaderSearchVue class="mr-1 flex-grow"></HeaderSearchVue>
            <HeaderThemeVue class="mr-1"></HeaderThemeVue>
            <HeaderMyVue></HeaderMyVue>
        </div>
    </div>
</template>

<script setup>
import { } from "vue"
import { useRouter } from "vue-router";
import HeaderSearchVue from "./Header/HeaderComps/HeaderSearch.vue";
import HeaderThemeVue from "./Header/HeaderComps/HeaderTheme.vue";
import HeaderMyVue from "./Header/HeaderComps/HeaderMy.vue";

const route = useRouter()
const onToHome = () => {
    route.push('/')
}
</script>

<style lang="scss" scoped>

</style>