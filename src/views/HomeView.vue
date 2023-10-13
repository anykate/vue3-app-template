<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
    <div>
        <h1>Home</h1>

        <!-- {{ store.doubleCount }} -->

        <div class="row">
            <div class="col-md-2">
                <div
                    class="d-flex justify-content-between align-items-center fs-4"
                >
                    <i
                        @click="store.increment"
                        class="bi bi-plus-circle-fill"
                    ></i>

                    {{ store.count }}

                    <i
                        @click="store.decrement"
                        class="bi bi-dash-circle-fill"
                    ></i>
                </div>
            </div>
            <div class="col-md-10"></div>
        </div>
    </div>
</template>

<style scoped>
.bi {
    cursor: pointer;
}
</style>
