<template>
	<div class="container">
		<router-link
			:to="{ name: 'Home' }"
			active-class="active"
			>Home</router-link
		>
		|
		<router-link
			:to="{ name: 'About' }"
			active-class="active"
			>About</router-link
		>
		<router-view />
	</div>
</template>

<style scoped>
.active {
	color: green;
	text-decoration: none !important;
}
</style>
