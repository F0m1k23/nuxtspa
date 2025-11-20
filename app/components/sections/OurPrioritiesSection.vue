<script setup>
const cards = [
	{
		title: 'Fair Taxation',
		description:
			'Advocating for tax policies that encourage investment in clean energy and sustainable industries.',
	},
	{
		title: 'Efficient Heating',
		description:
			'Promoting the use of low-carbon liquefied gases for residential and commercial heating.',
	},
	{
		title: 'Clean Transport',
		description:
			'Supporting the transition to liquefied gas as a cleaner alternative fuel for transportation.',
	},
	{
		title: 'Renewable Integration',
		description:
			'Exploring synergies between liquefied gases and renewable energy sources like wind and solar.',
	},
	{
		title: 'Uncompromising Safety',
		description:
			'Implementing rigorous safety protocols across all operations to protect our people and the environment.',
	},
	{
		title: 'Total Sustainability',
		description:
			'Committing to a circular economy model, minimizing waste and maximizing resource efficiency.',
	},
]
</script>
<template>
	<section id="priorities" class="py-10 sm:py-20 bg-gray-800 text-white">
		<div class="w-full px-2 sm:px-0 sm:w-3/4 mx-auto px-2">
			<h2
				data-aos="fade-up"
				class="text-xl md:text-3xl font-bold text-center mb-1"
			>
				Our Core Priorities
			</h2>
			<p
				data-aos="fade-up"
				data-aos-delay="200"
				class="text-base md:text-lg mb-4 md:mb-7 text-center tracking-wide text-white/70"
			>
				We are dedicated to policies and practices that support a sustainable
				and prosperous future for all.
			</p>
			<div
				data-aos="fade-up"
				data-aos-delay="400"
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
			>
				<UiCard
					v-for="(card, index) in cards"
					:key="card.title"
					:card="card"
					:data-aos="'slide-up'"
					:data-aos-delay="400 + index * 150"
				/>
			</div>
		</div>
	</section>
</template>
