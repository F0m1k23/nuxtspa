<script setup>
const list = [
	{
		id: 1,
		title: 'Future Fuels Now:  ',
		description:
			'Advocating for policy support for liquefied gases in the transport sector.',
	},
	{
		id: 2,
		title: 'Forests for Tomorrow:',
		description:
			'A reforestation program aimed at planting one million trees by 2030.',
	},
	{
		id: 3,
		title: 'Community Energy Fund:',
		description:
			'Supporting local communities with grants for clean energy projects.',
	},
]
</script>

<template>
	<section id="camping" class="py-10 sm:py-20 bg-slate-900 text-white">
		<div
			class="w-3/4 mx-auto px-2 flex flex-col justify-between lg:flex-row items-center gap-4"
		>
			<div data-aos="fade-right" class="mb-4 lg:mb-0 w-full md:w-1/2">
				<h2 data-aos="fade-up" class="text-xl md:text-3xl font-bold mb-1">
					Campaigns & Initiatives
				</h2>
				<p
					data-aos="fade-up"
					data-aos-delay="200"
					class="text-base md:text-lg mb-4 md:mb-7 tracking-wide text-white/70"
				>
					We actively engage in campaigns that promote our vision for a
					sustainable future. Join us in making a difference.
				</p>
				<ul data-aos="fade-up" data-aos-delay="400" class="mb-8 md:mb-12">
					<li
						data-aos="fade-left"
						:data-aos-delay="400 + index * 150"
						class="mb-3 not-last:mb-3"
						v-for="(item, index) in list"
						:key="item.id"
					>
						<p class="relative pl-10 max-w-md">
							<Icon
								name="iconamoon:check-bold"
								class="w-6 h-6 mr-3 absolute top-1 left-0 text-amber-400"
							/>
							<b>{{ item.title }}</b>
							{{ item.description }}
						</p>
					</li>
				</ul>
				<UiButton data-aos="fade-up" data-aos-delay="800"
					>Get Involved</UiButton
				>
			</div>
			<div
				data-aos="fade-left"
				class="flex flex-col sm:flex-row justify-center gap-5"
			>
				<NuxtImg
					data-aos="zoom-in"
					data-aos-delay="300"
					class="rounded-2xl w-full h-auto sm:w-[200px] sm:h-80 object-cover hover:scale-105 transition-transform duration-300"
					src="/photo-1496171367470-9ed9a91ea931.avif"
					alt="Camping"
				/>
				<NuxtImg
					data-aos="zoom-in"
					data-aos-delay="450"
					class="rounded-2xl w-full h-auto sm:w-[200px] sm:h-80 object-cover hover:scale-105 transition-transform duration-300"
					src="/photo-1496171367470-9ed9a91ea931.avif"
					alt="Camping"
				/>
			</div>
		</div>
	</section>
</template>
