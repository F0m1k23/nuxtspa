// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: '2025-07-15',
				css: ['~/assets/tailwind.css'],
				devtools: { enabled: true },
				modules: [
				 '@nuxt/image',
				 '@nuxt/eslint',
				 '@nuxt/ui',
				 '@nuxt/icon',
				 '@nuxtjs/seo',
				 '@nuxtjs/sitemap',
				 'nuxt-aos',
				],
				runtimeConfig: {
								public: {
												EMAILJS_PUBLIC_KEY: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
												EMAILJS_SERVICE_ID: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
												EMAILJS_TEMPLATE_ID: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
								},
				},
})