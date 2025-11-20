export default {
	async scrollBehavior(to, from, savedPosition) {
		// если есть якорь (#about, #news и т.д.)
		if (to.hash) {
			// пробуем найти элемент не сразу, а подождать пока DOM смонтируется
			return new Promise(resolve => {
				const checkExists = () => {
					const el = document.querySelector(to.hash)
					if (el) {
						resolve({
							el,
							behavior: 'smooth',
							top: 80, // отступ под шапку
						})
					} else {
						// если элемента нет — пробуем снова через 50ms
						setTimeout(checkExists, 50)
					}
				}

				checkExists()
			})
		}

		// обычный скролл
		return savedPosition || { top: 0 }
	},
}
