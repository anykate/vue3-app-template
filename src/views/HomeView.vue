<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'

const mask = ref('+91')
const store = useCounterStore()
</script>

<template>
    <div>
        <h1>Home</h1>

        <!-- {{ store.doubleCount }} -->

        <div class="row align-items-center">
            <div class="col-md-2">
                <div
                    class="d-flex justify-content-between align-items-center fs-4"
                >
                    <i
                        class="bi bi-plus-circle-fill"
                        @click="store.increment"
                    ></i>

                    {{ store.count }}

                    <i
                        class="bi bi-dash-circle-fill"
                        @click="store.decrement"
                    ></i>
                </div>
            </div>
            <div class="col-md-10 p-2">
                <input
                    v-model="mask"
                    v-mask="'+##-##########'"
                    type="tel"
                    name="mask"
                    maxlength="14"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.bi {
    cursor: pointer;
}
</style>
