<script setup>
import { cards } from '../../data/posts.js'
</script>

<template>
	<section class="w-full px-2 sm:px-0 sm:w-3/4 mx-auto py-10 text-white">
		<a
			@click="$router.go(-1)"
			class="inline-flex items-center gap-2 justify-center p-3 rounded-xl bg-gray-800/60 backdrop-blur-sm hover:bg-gray-800 transition shadow-lg shadow-black/10 cursor-pointer mb-3"
		>
			<Icon name="lucide:arrow-left" class="w-5 h-5" />
			<span class="text-white/80 text-sm">Back</span>
		</a>
		<h2 class="text-3xl font-bold mb-4 text-center">Blog</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<UiCard
				v-for="post in cards"
				:key="post.slug"
				:card="post"
				isBlog="false"
			>
				<template #top>
					<p class="text-white/60 mb-3">
						{{ post.data }}
					</p>
				</template>

				<template #bottom>
					<NuxtLink
						:to="{
							name: 'blog-slug',
							params: { slug: post.slug },
						}"
						class="text-amber-400 font-medium flex items-center gap-1"
					>
						Read More →
					</NuxtLink>
				</template>
			</UiCard>
		</div>
	</section>
</template>
