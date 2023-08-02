<script lang="ts" setup>
definePageMeta({
    middleware: "auth"
})
</script>

<template>
    <div class="w-full h-full grid place-items-center">
        <h2 class="text-2xl font-bold">Private Page / Authourised Users Only</h2>
    </div>
</template>