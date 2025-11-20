<script setup>
defineProps(['card'])
</script>
<template>
	<div class="w-[270px]">
		<NuxtImg
			class="rounded-2xl hover:scale-105 transition duration-300"
			:src="card.img"
			:alt="card.title"
		/>
		<h3 class="text-xl py-2 text-amber-400">
			{{ card.title }}
		</h3>
		<p class="mb-10 text-white/70">
			{{ card.description }}
		</p>
	</div>
</template>
