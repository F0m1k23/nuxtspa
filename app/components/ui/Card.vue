<script setup>
defineProps({
	card: Object,
	isBlog: {
		type: Boolean,
		default: false,
	},
})
const shortText = (text, words = 20) => {
	return text.split(' ').slice(0, words).join(' ') + '...'
}
</script>
<template>
	<div
		class="bg-slate-900 py-3 px-4 rounded-2xl gap-3 flex flex-col hover:translate-y-1 transition duration-300"
	>
		<!-- Top slot (meta info) -->
		<slot name="top"></slot>
		<h3 class="text-base font-medium sm:text-lg text-amber-400 mb-3">
			{{ card.title }}
		</h3>
		<p class="text-white/80 flex-1 tracking-wide">
			{{ isBlog ? shortText(card.description) : card.description }}
		</p>
		<!-- Bottom slot (buttons, links, etc.) -->
		<slot name="bottom"></slot>
	</div>
</template>
