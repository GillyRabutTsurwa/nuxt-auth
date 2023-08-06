<script setup lang="ts">
interface Form {
    email: string;
    password: string
}

const form: Form = reactive({
    email: "",
    password: ""
});

const userFormSubmit = async () => {
    const { data: user } = await useFetch("/api/user", {
        method: "POST",
        body: {
            email: form.email,
            password: form.password
        }
    })
    console.log(user.value)
}
</script>

<template>
    <form @submit.prevent="userFormSubmit" class="space-y-4 md:space-y-6" action="#">
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input v-model="form.email" type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com" required />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input v-model="form.password" type="password" name="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
        </div>
        <button type="submit"
            class="border border-gray-500 px-4 py-2 rounded-lg text-gray-500 text-sm font-medium hover:text-black hover:bg-gray-100">
            Register
        </button>
    </form>
</template>


<style lang="scss" scoped></style>