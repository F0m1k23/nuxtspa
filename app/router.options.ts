export default {
	async scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return new Promise(resolve => {
				const checkExists = () => {
					const el = document.querySelector(to.hash)
					if (el) {
						resolve({
							el,
							behavior: 'smooth',
							top: 80,
						})
					} else {
						setTimeout(checkExists, 50)
					}
				}

				checkExists()
			})
		}

		return savedPosition || { top: 0 }
	},
}
