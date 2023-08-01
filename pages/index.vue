<script lang="ts" setup>
const { status, signIn, signOut } = useAuth();

async function handleSignIn(): Promise<void> {
    await signIn();
}

async function handleSignOut(): Promise<void> {
    await signOut();
}

const isLoggedIn: ComputedRef<boolean> = computed(() => status.value === "authenticated");

</script>
<template>
    <div>
        <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
        <button @click="handleSignIn" v-else>Sign In</button>
        <pre>{{ status }}</pre>
    </div>
</template>