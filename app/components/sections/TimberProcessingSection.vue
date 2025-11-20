<script setup>
const cards = [
	{
		img: '/photo-1635405038683-39ac9c4c70c7.avif',
		title: 'Hardwood',
		description:
			'Durable and versatile hardwoods like Oak, Maple, and Cherry, sourced from responsibly managed forests.',
	},
	{
		img: '/photo-1635405038683-39ac9c4c70c7.avif',
		title: 'Softwood',
		description:
			'Economical and flexible woods like Pine, Spruce, and Fir, ideal for construction and manufacturing.',
	},
	{
		img: '/photo-1635405038683-39ac9c4c70c7.avif',
		title: 'Engineered Products',
		description:
			'High-performance products like plywood, MDF, and laminate veneer lumber for specialized applications.',
	},
]
</script>

<template>
	<section id="timber" class="py-10 sm:py-20 bg-slate-900 text-white">
		<div class="w-3/4 mx-auto px-2">
			<h2
				data-aos="fade-up"
				class="text-xl md:text-3xl font-bold text-center mb-1"
			>
				Sustainable Timber Processing
			</h2>
			<p
				data-aos="fade-up"
				data-aos-delay="200"
				class="text-base md:text-lg mb-4 md:mb-7 text-center tracking-wide text-white/70"
			>
				From forest to final product, we ensure every stage of timber processing
				is done sustainably, responsibly, and to the highest quality.
			</p>
			<div
				data-aos="fade-up"
				data-aos-delay="400"
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3"
			>
				<UiTimberCard
					v-for="(card, index) in cards"
					:key="card.title"
					:card="card"
					:data-aos="'zoom-in'"
					:data-aos-delay="index * 150"
				/>
			</div>
			<div data-aos="fade-up" data-aos-delay="600" class="flex justify-center">
				<UiButton>View Our Timber Products</UiButton>
			</div>
		</div>
	</section>
</template>
