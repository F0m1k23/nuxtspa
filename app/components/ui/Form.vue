<script setup>
import { reactive, ref, onMounted } from 'vue'
import emailjs from 'emailjs-com'
import { useNotifications } from '~/composables/useNotifications.ts'

const form = reactive({
	name: '',
	email: '',
	message: '',
	hiddenField: '', // honeypot
})

const sending = ref(false)
const success = ref(false)
const error = ref(false)
const startTime = ref(0)

const config = useRuntimeConfig()
const { success: showSuccess, error: showError } = useNotifications()

onMounted(() => {
	startTime.value = Date.now()
})

function validateEmail(email) {
	return /\S+@\S+\.\S+/.test(email)
}

function validateForm() {
	// 2. Honeypot
	if (form.hiddenField !== '') {
		console.warn('Bot detected (honeypot)')
		return false
	}

	// 3. Человек не может заполнить за 1–2 сек
	const duration = Date.now() - startTime.value
	if (duration < 2000) {
		console.warn('Bot detected (too fast)')
		return false
	}

	// 4. Проверка заполнения
	if (!form.name || !form.email || !form.message) {
		showError('Пожалуйста, заполните все поля')
		return false
	}

	// 5. Email проверка
	if (!validateEmail(form.email)) {
		showError('Неверный формат email адреса')
		return false
	}

	return true
}

const sendForm = async () => {
	if (!validateForm()) return

	sending.value = true
	success.value = false
	error.value = false

	try {
		await emailjs.send(
			config.public.EMAILJS_SERVICE_ID,
			config.public.EMAILJS_TEMPLATE_ID,
			{
				from_name: form.name,
				from_email: form.email,
				message: form.message,
			},
			config.public.EMAILJS_PUBLIC_KEY
		)

		success.value = true
		showSuccess('Сообщение успешно отправлено!')

		// очистка формы
		form.name = ''
		form.email = ''
		form.message = ''
		startTime.value = Date.now()
	} catch (e) {
		console.error('EMAILJS ERROR:', e)
		error.value = true
		showError('Ошибка при отправке. Попробуйте позже.')
	}

	sending.value = false
}
</script>

<template>
	<div class="flex flex-col gap-1 flex-1/2">
		<!-- Honeypot: скрытое поле -->
		<input v-model="form.hiddenField" type="text" class="hidden" />

		<label for="name">Name</label>
		<input
			v-model="form.name"
			id="name"
			class="border py-2 px-4 rounded-2xl bg-gray-900 border-gray-800 text-white/70 mb-1"
		/>

		<label for="email">Email</label>
		<input
			v-model="form.email"
			id="email"
			type="email"
			class="border py-2 px-4 rounded-2xl bg-gray-900 border-gray-800 text-white/70 mb-1"
		/>

		<label for="message">Message</label>
		<textarea
			v-model="form.message"
			id="message"
			rows="4"
			class="border py-2 px-4 rounded-2xl bg-gray-900 border-gray-800 text-white/70 mb-4"
		></textarea>

		<UiButton @click="sendForm">
			{{ sending ? 'Sending...' : 'Send Message' }}
		</UiButton>

		<p v-if="success" class="text-green-500 mt-2">
			Your message has been sent!
		</p>
		<p v-if="error" class="text-red-500 mt-2">Error sending. Try later.</p>
	</div>
</template>
