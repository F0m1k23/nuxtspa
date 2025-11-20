<script setup>
import { cards } from '../../data/posts.js'
</script>
<template>
	<section id="news" class="py-10 sm:py-20 bg-gray-800 text-white">
		<div class="w-full px-2 sm:px-0 sm:w-3/4 mx-auto px-2">
			<div
				class="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4"
			>
				<div data-aos="fade-right">
					<h2 data-aos="fade-up" class="text-xl md:text-3xl font-bold mb-1">
						News & Resources
					</h2>
					<p
						data-aos="fade-up"
						data-aos-delay="200"
						class="text-base md:text-lg mb-4 md:mb-7 tracking-wide text-white/70"
					>
						Stay informed with the latest updates from Natural Excellence and
						the wider industry.
					</p>
				</div>
				<NuxtLink
					data-aos="fade-left"
					data-aos-delay="400"
					to="/blog"
					class="border border-gray-950 py-2 px-4 rounded-2xl bg-transparent hover:bg-amber-500 hover:border-amber-500 transition duration-300 text-nowrap"
					>View All Resources</NuxtLink
				>
			</div>
			<div
				data-aos="fade-up"
				data-aos-delay="600"
				class="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
			>
				<UiCard
					:data-aos="'flip-left'"
					:data-aos-delay="600 + index * 150"
					v-for="(item, index) in cards.slice(0, 3)"
					:key="item.title"
					:card="item"
					:isBlog="true"
				>
					<template #top>
						<p class="text-white/60 mb-3">{{ item.data }}</p>
					</template>

					<template #bottom>
						<NuxtLink
							:to="{
								name: 'blog-slug',
								params: { slug: item.slug },
							}"
							class="text-amber-400 font-medium flex items-center gap-1"
						>
							Read More →
						</NuxtLink>
					</template>
				</UiCard>
			</div>
		</div>
	</section>
</template>
