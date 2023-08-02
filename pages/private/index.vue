<script setup lang="ts">
/**
 * NOTE: 
 * i see. upon inspecting using the nuxt devtools,
 * j'ai découvert que ce middleware vient du package @sidebase/nuxt-auth
 * je comprenais pas parce que je savais pas d'ou il venait, et on a pas écrit de middleware
 */
definePageMeta({
    middleware: "auth" // NOTE: encore une fois, ce middleware est une produit de @sidebase/nuxt-auth
})
</script>
<template>
    <div>
        <h2>Protected Page. Authourised Users Only.</h2>
    </div>
</template>


<style lang="scss" scoped></style>