<script setup>
const error =
	useRequestEvent()?.node?.req?.statusCode ||
	useRequestEvent()?.statusCode ||
	404

useSeoMeta({
	title: `Page ${error} - Natural Excellence`,
	description: 'The page you are looking for could not be found.',
})

const errorMessages = {
	404: 'Страница не найдена',
	403: 'Доступ запрещён',
	500: 'Внутренняя ошибка сервера',
}

const getErrorMessage = code => {
	return errorMessages[code] || 'Произошла ошибка'
}
</script>

<template>
	<div
		class="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4"
	>
		<div class="text-center max-w-md">
			<div class="mb-8">
				<h1 class="text-6xl font-bold text-amber-400 mb-4">{{ error }}</h1>
				<h2 class="text-2xl font-semibold mb-4">
					{{ getErrorMessage(error) }}
				</h2>
				<p class="text-white/70 mb-8">
					Извините, но страница, которую вы ищете, не существует или была
					перемещена.
				</p>
			</div>

			<div class="space-y-4">
				<NuxtLink
					to="/"
					class="inline-block bg-amber-400 text-slate-900 px-6 py-3 rounded-2xl hover:bg-amber-500 transition duration-300 font-medium"
				>
					Вернуться на главную
				</NuxtLink>

				<div class="block">
					<button
						@click="$router.back()"
						class="text-amber-400 hover:text-amber-300 transition duration-300 underline"
					>
						Назад
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
