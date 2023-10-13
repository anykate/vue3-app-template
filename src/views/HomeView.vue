<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
    <div>
        <h1>Home</h1>

        <!-- {{ store.doubleCount }} -->

        <button @click="store.increment">+</button>
        {{ store.count }}
        <button @click="store.decrement">-</button>
    </div>
</template>
