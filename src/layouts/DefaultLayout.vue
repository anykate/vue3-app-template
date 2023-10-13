<template>
    <div class="container">
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-view />
    </div>
</template>

<style scoped></style>
