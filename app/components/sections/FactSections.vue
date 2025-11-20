<script setup>
const cards = [
	{
		title: '30%',
		description: 'Lower Emissions with our Liquefied Gas',
	},
	{
		title: '5M',
		description: 'Hectares of Certified Sustainable Forest',
	},
	{
		title: '99.8%',
		description: 'Operational Safety Record',
	},
	{
		title: '10,000+',
		description: 'Homes Powered by Our Energy',
	},
]
</script>

<template>
	<section id="facts" class="py-10 sm:py-20 bg-slate-900 text-white">
		<div class="w-full px-2 sm:px-0 sm:w-3/4 mx-auto px-2">
			<div data-aos="zoom-in" class="border border-gray-950 p-12 rounded-2xl">
				<h2
					data-aos="fade-up"
					class="text-xl text-center md:text-3xl font-bold mb-1"
				>
					Facts & Figures
				</h2>
				<p
					data-aos="fade-up"
					data-aos-delay="200"
					class="text-base text-center md:text-lg mb-4 md:mb-7 tracking-wide text-white/70"
				>
					Our commitment to excellence is reflected in our performance and
					impact.
				</p>
				<div
					data-aos="fade-up"
					data-aos-delay="400"
					class="grid gap-3 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4"
				>
					<div
						:data-aos="'fade-up'"
						:data-aos-delay="400 + index * 150"
						v-for="(item, index) in cards"
						:key="item.title"
					>
						<h3
							:data-aos="'zoom-in'"
							:data-aos-delay="400 + index * 150"
							class="text-2xl sm:text-3xl md:text-4xl text-amber-400 text-center font-black mb-3"
						>
							{{ item.title }}
						</h3>
						<p class="text-white/70 text-center">{{ item.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
