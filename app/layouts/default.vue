<script setup>
import { useMediaQuery } from '@vueuse/core'
const isMobile = useMediaQuery('(max-width: 868px)')
const menuOpen = ref(false)
const links = [
	{
		title: 'About Us',
		link: '/#about',
	},
	{
		title: 'Liquefied Gas',
		link: '/#benefits',
	},
	{
		title: 'Timber',
		link: '/#timber',
	},
	{
		title: 'Priorities',
		link: '/#priorities',
	},
	{
		title: 'News',
		link: '/#news',
	},
	{
		title: 'FAQ',
		link: '/faq',
	},
]
</script>
<template>
	<div class="flex flex-col min-h-screen">
		<header class="w-full mx-auto px-4 py-3 bg-gray-900 text-white">
			<div class="flex justify-between items-center gap-3">
				<a href="/" class="text-xl font-bold flex items-center gap-2">
					<Icon name="mdi:pine-tree" class="w-10 h-10 text-amber-400" />
					<h1
						class="text-2xl md:text-3xl font-bold font-serif tracking-wide text-white"
					>
						Natural Excellence
					</h1>
				</a>
				<nav v-if="!isMobile" class="flex gap-5 items-center">
					<ul class="flex gap-4">
						<li v-for="item in links" :key="item.title">
							<a
								class="hover:text-amber-400 transition duration-300"
								:href="item.link"
								>{{ item.title }}</a
							>
						</li>
					</ul>
					<UiButton>Membership</UiButton>
				</nav>
				<Icon
					v-if="isMobile"
					name="tabler:menu-2"
					class="w-8 h-8 cursor-pointer"
					@click="menuOpen = true"
				/>
				<transition name="slide">
					<nav
						v-if="menuOpen"
						class="fixed top-0 right-0 flex flex-col gap-5 items-center justify-center bg-slate-900 p-3 z-10 w-full sm:w-1/2 h-full duration-300"
					>
						<ul class="flex flex-col gap-4 items-center">
							<li v-for="item in links" :key="item.title">
								<a
									class="hover:text-amber-400 transition duration-300"
									:href="item.link"
									>{{ item.title }}</a
								>
							</li>
						</ul>
						<UiButton>Membership</UiButton>
						<Icon
							class="absolute top-3 right-3 hover:text-red-500 transition cursor-pointer duration-300"
							name="material-symbols:close-rounded"
							size="40"
							color="white"
							@click="menuOpen = false"
						></Icon>
					</nav>
				</transition>
			</div>
		</header>
		<main class="flex-1">
			<slot />
		</main>
		<footer class="py-5 border-t border-gray-600 bg-gray-800">
			<div class="w-full px-2 sm:px-0 sm:w-3/4 mx-auto">
				<div class="w-full mx-auto px-4 py-3 text-white">
					<nav
						class="flex flex-col-reverse md:flex-row gap-5 items-start md:items-center justify-between"
					>
						<ul class="flex flex-col lg:flex-row gap-4">
							<li v-for="item in links" :key="item.title">
								<a
									class="hover:text-amber-400 transition duration-300"
									:href="item.link"
									>{{ item.title }}</a
								>
							</li>
						</ul>
						<p>&copy; 2023 Natural Excellence. All rights reserved.</p>
					</nav>
				</div>
			</div>
		</footer>
	</div>
</template>
<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
	transform: translateX(100%);
}
</style>
