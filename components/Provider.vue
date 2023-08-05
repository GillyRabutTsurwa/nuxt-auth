<script setup lang="ts">
interface Props {
    id: string; //NOTE: this is just the name property all in lowercase. so if name is Github, id is github
    name: string;
}

const props = defineProps<Props>()
const { signIn } = useAuth();
</script>
<template>
    <button
        class="flex items-center border border-gray-500 px-4 py-2 mx-auto my-5 rounded-lg text-gray-500 text-sm font-medium hover:text-black hover:bg-gray-100"
        @click="signIn(`${props.id}`)">
        <Icon :name="props.id" class="mr-4 h-6 w-6" />
        Log in with {{ props.name }}
    </button>
</template>


<style scoped></style>