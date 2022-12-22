<template>
    <div class="w-full bg-white border-b border-b-zinc-200 px-2 py-1">
        <div class="flex items-center w-full">
            <!--https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png-->
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
import HeaderSearchVue from "./HeaderComps/HeaderSearch.vue";
import HeaderThemeVue from "./HeaderComps/HeaderTheme.vue";
import HeaderMyVue from "./HeaderComps/HeaderMy.vue";

const route = useRouter()
const onToHome = () => {
    route.push('/')
}
</script>

<style lang="scss" scoped>

</style>