<script setup>
const props = defineProps({
	type: {
		type: String,
		default: 'info',
		validator: value => ['success', 'error', 'warning', 'info'].includes(value),
	},
	message: {
		type: String,
		required: true,
	},
	duration: {
		type: Number,
		default: 5000,
	},
})

const emit = defineEmits(['close'])

const icons = {
	success: 'iconamoon:check-bold',
	error: 'material-symbols:error-outline',
	warning: 'iconamoon:warning',
	info: 'material-symbols:info-outline',
}

const colors = {
	success: 'text-green-400 bg-green-400/10 border-green-400/20',
	error: 'text-red-400 bg-red-400/10 border-red-400/20',
	warning: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
	info: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
}

const handleClose = () => {
	emit('close')
}

onMounted(() => {
	if (props.duration > 0) {
		const timer = setTimeout(() => {
			handleClose()
		}, props.duration)

		// Очищаем таймер если компонент размонтируется раньше
		return () => clearTimeout(timer)
	}
})
</script>

<template>
	<div
		:class="[
			'flex items-center gap-3 p-4 rounded-xl border backdrop-blur-sm transform transition-all duration-300 ease-in-out',
			'translate-x-0 opacity-100',
			colors[type],
		]"
		role="alert"
	>
		<Icon :name="icons[type]" class="w-5 h-5 flex-shrink-0" />
		<p class="flex-1">{{ message }}</p>
		<button
			@click="handleClose"
			type="button"
			class="flex-shrink-0 hover:opacity-70 transition opacity-50 hover:opacity-100 p-1 rounded hover:bg-white/10"
			aria-label="Закрыть уведомление"
		>
			<Icon name="material-symbols:close" class="w-4 h-4" />
		</button>
	</div>
</template>
