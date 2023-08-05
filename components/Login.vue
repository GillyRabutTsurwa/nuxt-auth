<script setup lang="ts">
/**
 * NEW: using nuxt-auth's (really next-auth's) REST API to render dynamic provider login buttons
 * https://sidebase.io/nuxt-auth/server-side/rest-api very simple and abstract documentation
 * https://next-auth.js.org/getting-started/rest-api#post-apiauthsigninprovider has the documentation i really want to read
 */
const { data: providers } = useFetch("/api/auth/providers");
console.log(providers.value);
// NOTE: want data for oauth providers only / 
// don't want to make an email for traditional email password because we already have a form for that
const oauthProviders = computed(() => {
  const providersObj: any = providers.value
  for (var property in providersObj) {
    //NOTE: souviens-toi que the property (usually named key) is an object not a primitive value
    if (providersObj[property].type === "credentials") {
      delete providersObj[property];
    }
  }
  return providersObj;
});
console.log(oauthProviders.value);
</script>

<template>
  <section>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <Logo class="mb-6" />
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Welcome back
          </h1>

          <div>
            <Provider v-for="(currentProvider, property) in oauthProviders" :key="property" :id="currentProvider.id"
              :name="currentProvider.name" />
          </div>

          <div class="flex items-center">
            <div class="bg-gray-500 h-[.125rem] w-full"></div>
            <p class="mx-8 text-medium text-gray-500">or</p>
            <div class="bg-gray-500 h-[.125rem] w-full"></div>
          </div>

          <Form />
        </div>
      </div>
    </div>
  </section>
</template>
