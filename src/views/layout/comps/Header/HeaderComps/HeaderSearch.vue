<template>
    <SearchBarVue v-model="inputValue">
        <template #dropdown>
            <div>
                dropdown
            </div>
        </template>
    </SearchBarVue>
</template>

<script setup>
import { ref } from "vue"
import SearchBarVue from "@/libs/SearchBar/SearchBar.vue";
const inputValue = ref('')
</script>

<style lang="scss" scoped>

</style>