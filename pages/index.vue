<script setup lang="ts">
const { data } = useFetch("/api/session");
</script>

<template>
    <div class="w-full h-full grid place-items-center">
        <h2 class="text-2xl font-bold">Home Page</h2>
        <pre>{{ data }}</pre>
    </div>
</template>