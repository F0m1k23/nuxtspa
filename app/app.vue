<script setup>
import { useNotifications } from '~/composables/useNotifications.ts'

useHead({
	link: [
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Playfair+Display:wght@400;700&display=swap',
		},
	],
})

const { notifications, removeNotification } = useNotifications()
</script>
<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>

		<!-- Контейнер уведомлений -->
		<div class="fixed top-4 right-4 z-50 space-y-2 max-w-sm w-full">
			<TransitionGroup name="notification" tag="div" class="space-y-2">
				<UiNotification
					v-for="notification in notifications"
					:key="notification.id"
					:type="notification.type"
					:message="notification.message"
					:duration="notification.duration"
					@close="removeNotification(notification.id)"
				/>
			</TransitionGroup>
		</div>
	</div>
</template>
<style global>
body {
	background: rgb(10, 7, 33);
	font-family: 'Roboto', sans-serif;
	height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Playfair Display', serif;
}
html {
	scroll-behavior: smooth;
	height: 100%;
}

/* Анимации уведомлений */
.notification-enter-active,
.notification-leave-active {
	transition: all 0.3s ease;
}

.notification-enter-from {
	opacity: 0;
	transform: translateX(100%);
}

.notification-leave-to {
	opacity: 0;
	transform: translateX(100%);
}

.notification-move {
	transition: transform 0.3s ease;
}
</style>
