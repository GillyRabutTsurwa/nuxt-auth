<script lang="ts" setup>
const { status, signIn, signOut } = useAuth();
/**
 * NOTE:
 * using this exact same code elsewhere
 * mais pour apprendre, il me faut pas créer une fonction de composable,
 * mais si j'ai envie de le faire plus tard, je vais le faire
 */
const isLoggedIn = computed(() => status.value === "authenticated"); 
</script>

<template>
  <nav class="border-gray-200 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Logo />
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex items-center border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
          <li>
            <NuxtLink to="/"
              class="block py-2 pl-3 pr-4 md:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500"
              aria-current="page">Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/public"
              class="block py-2 pl-3 pr-4 md:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500"
              aria-current="page">
              Public
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/private"
              class="block py-2 pl-3 pr-4 md:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500"
              aria-current="page">
              Private
            </NuxtLink>
          </li>
          <li v-if="!isLoggedIn">
            <button
              class="block py-2 pl-3 pr-4 md:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500"
              @click="signIn()">
              Sign In
            </button>
          </li>
          <li v-else>
            <button
              class="block py-2 pl-3 pr-4 md:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500"
              @click="signOut()">
              Sign Out
            </button>
          </li>

          <li>
            <span>Status:</span>
            <span>&nbsp;</span>
            <span class="capitalize">{{ status }}</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>