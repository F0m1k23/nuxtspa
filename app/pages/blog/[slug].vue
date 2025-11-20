<script setup>
import { cards } from '../../data/posts.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug
const data = cards.find(card => card.slug === slug)

// Если статья не найдена - показываем 404
if (!data) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Article not found',
	})
}
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

		<div class="w-full lg:w-3/4 mx-auto bg-gray-900 p-7 rounded-2xl">
			<!-- Metadata -->
			<p class="text-white/50 text-sm">
				{{ data.data.split('|')[0].trim() }}
			</p>
			<p class="text-white/40 text-xs mb-4">
				{{ data.data.split('|')[1].trim() }} • ~3 min read
			</p>

			<div class="h-px bg-white/10 mb-6"></div>

			<!-- Image -->
			<NuxtImg
				:src="data.img"
				:alt="data.title"
				class="w-full rounded-2xl mb-6"
			/>

			<!-- Title -->
			<h2 class="text-xl md:text-4xl font-extrabold tracking-tight mb-6">
				{{ data.title }}
			</h2>

			<!-- Content -->
			<p class="text-base md:text-lg text-white/70 leading-relaxed space-y-4">
				{{ data.description }}
			</p>
		</div>
	</section>
</template>
