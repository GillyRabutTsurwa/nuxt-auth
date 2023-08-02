<script lang="ts" setup>
//NOTE: this code works perfectly for redirects
const { status } = useAuth();
if (status.value === "authenticated") await navigateTo("/private")
</script>
<template>
    <Login />
</template>

