<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const mask = ref('+91')
const store = useCounterStore()

const { increment, decrement } = store
const { getDoubleCount, getCount } = storeToRefs(store)
</script>

<template>
	<div class="container mt-5">
		<h1>Home</h1>

		<!-- <div class="fs-4">
			{{ getDoubleCount }}
		</div> -->

		<div class="row p-2">
			<div class="col-md-2">
				<div class="d-flex justify-content-between align-items-center fs-4">
					<i
						class="bi bi-plus-circle-fill"
						@click="increment"
					></i>

					{{ getCount }}

					<i
						class="bi bi-dash-circle-fill"
						@click="decrement"
					></i>
				</div>
			</div>
			<div class="col-md-10 ms-auto w-50">
				<input
					v-model="mask"
					v-mask="'+##-##########'"
					type="tel"
					name="mask"
					maxlength="14"
					class="form-control"
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
