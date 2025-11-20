export interface Notification {
	id: string
	type: 'success' | 'error' | 'warning' | 'info'
	message: string
	duration?: number
}

export const useNotifications = () => {
	const notifications = useState<Notification[]>('notifications', () => [])

	const addNotification = (notification: Omit<Notification, 'id'>) => {
		const id = Date.now().toString()
		const newNotification: Notification = {
			id,
			duration: 5000,
			...notification,
		}

		notifications.value.push(newNotification)

		// Автоматически удаляем уведомление
		if (newNotification.duration && newNotification.duration > 0) {
			setTimeout(() => {
				removeNotification(id)
			}, newNotification.duration)
		}

		return id
	}

	const removeNotification = (id: string) => {
		const index = notifications.value.findIndex(n => n.id === id)
		if (index > -1) {
			notifications.value.splice(index, 1)
		}
	}

	// Удобные методы
	const success = (message: string, duration?: number) => {
		return addNotification({ type: 'success', message, duration })
	}

	const error = (message: string, duration?: number) => {
		return addNotification({ type: 'error', message, duration })
	}

	const warning = (message: string, duration?: number) => {
		return addNotification({ type: 'warning', message, duration })
	}

	const info = (message: string, duration?: number) => {
		return addNotification({ type: 'info', message, duration })
	}

	const clear = () => {
		notifications.value = []
	}

	return {
		notifications: readonly(notifications),
		addNotification,
		removeNotification,
		success,
		error,
		warning,
		info,
		clear,
	}
}
