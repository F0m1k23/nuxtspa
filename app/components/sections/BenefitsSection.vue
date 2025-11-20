<script setup>
const cards = [
	{
		title: 'Industrial & Commercial Use',
		description:
			'Improving operational efficiency in industrial, commercial, heating, storage, and manufacturing.',
	},
	{
		title: 'Transportation Fuel',
		description:
			'A reliable, cleaner fuel offering significant benefits including reduced emissions and operational costs.',
	},
	{
		title: 'Residential & Domestic',
		description:
			'Providing safe and efficient energy for grid heating, cooking, and cooling.',
	},
]
</script>
<template>
	<section id="benefits" class="py-10 sm:py-20 bg-gray-800 text-white">
		<div class="w-full px-2 sm:px-0 sm:w-3/4 mx-auto px-2">
			<h2 class="text-xl md:text-3xl font-bold mb-1">
				Benefits of Liquefied Gases
			</h2>
			<p class="text-base md:text-lg mb-3 md:mb-7 tracking-wide text-white/70">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
			</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
				<UiCard
					data-aos="fade-down-up"
					v-for="(card, index) in cards"
					:key="card.title"
					:card="card"
					:data-aos-delay="index * 150"
				/>
			</div>
		</div>
	</section>
</template>
