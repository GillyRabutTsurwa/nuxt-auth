<template>
    <div class="relative bg-gray-50 dark:bg-gray-900 h-screen w-screen overflow-hidden">
        <Navbar />
        <slot />
        <Logo class="absolute bottom-5 right-7" />
    </div>
</template>