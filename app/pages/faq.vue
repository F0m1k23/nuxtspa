<script setup>
useSeoMeta({
	title: 'FAQ - Frequently Asked Questions | Natural Excellence',
	description:
		'Answers to the most popular questions about our products and services.',
})
</script>

<template>
	<section class="w-full px-2 sm:px-0 sm:w-3/4 mx-auto py-10 text-white">
		<a
			@click="$router.go(-1)"
			class="inline-flex items-center gap-2 justify-center p-3 rounded-xl bg-gray-800/60 backdrop-blur-sm hover:bg-gray-800 transition shadow-lg shadow-black/10 cursor-pointer mb-6"
		>
			<Icon name="lucide:arrow-left" class="w-5 h-5" />
			<span class="text-white/80 text-sm">Back</span>
		</a>

		<div class="max-w-4xl mx-auto">
			<h1
				data-aos="fade-up"
				class="text-3xl md:text-4xl font-bold mb-8 text-center"
			>
				Frequently Asked Questions
			</h1>

			<div class="space-y-6">
				<!-- Question 1 -->
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					class="bg-slate-900 p-6 rounded-2xl"
				>
					<h3 class="text-xl font-semibold mb-3 text-amber-400">
						What is Liquefied Gas?
					</h3>
					<p class="text-white/80 leading-relaxed">
						Liquefied gas (LNG/LPG) is natural gas that is cooled to liquid form
						for convenient storage and transportation. It is a more
						environmentally friendly alternative to traditional fuels.
					</p>
				</div>

				<!-- Question 2 -->
				<div
					data-aos="fade-up"
					data-aos-delay="200"
					class="bg-slate-900 p-6 rounded-2xl"
				>
					<h3 class="text-xl font-semibold mb-3 text-amber-400">
						Where does your timber come from?
					</h3>
					<p class="text-white/80 leading-relaxed">
						We work only with certified forestry operations that follow
						sustainable forest management principles. Our timber comes from
						managed forests with complete origin documentation.
					</p>
				</div>

				<!-- Question 3 -->
				<div
					data-aos="fade-up"
					data-aos-delay="300"
					class="bg-slate-900 p-6 rounded-2xl"
				>
					<h3 class="text-xl font-semibold mb-3 text-amber-400">
						How long does product delivery take?
					</h3>
					<p class="text-white/80 leading-relaxed">
						Delivery time depends on the type of product and location.
						Typically, liquefied gas is delivered within 24-48 hours, and timber
						within 3-7 business days. Exact timing is specified when placing an
						order.
					</p>
				</div>

				<!-- Question 4 -->
				<div
					data-aos="fade-up"
					data-aos-delay="400"
					class="bg-slate-900 p-6 rounded-2xl"
				>
					<h3 class="text-xl font-semibold mb-3 text-amber-400">
						What certifications do you have?
					</h3>
					<p class="text-white/80 leading-relaxed">
						Our company has all necessary quality and environmental safety
						certifications, including ISO 9001, ISO 14001, and FSC
						certifications for timber.
					</p>
				</div>

				<!-- Question 5 -->
				<div
					data-aos="fade-up"
					data-aos-delay="500"
					class="bg-slate-900 p-6 rounded-2xl"
				>
					<h3 class="text-xl font-semibold mb-3 text-amber-400">
						How do I place an order?
					</h3>
					<p class="text-white/80 leading-relaxed">
						You can contact us through the contact form on the website, call us,
						or email us. Our managers will help you choose suitable products and
						place an order.
					</p>
				</div>

				<!-- Question 6 -->
				<div
					data-aos="fade-up"
					data-aos-delay="600"
					class="bg-slate-900 p-6 rounded-2xl"
				>
					<h3 class="text-xl font-semibold mb-3 text-amber-400">
						Do you provide installation services?
					</h3>
					<p class="text-white/80 leading-relaxed">
						Yes, we provide a full range of services for the installation and
						maintenance of our equipment. Our certified specialists will perform
						installation and setup of systems of any complexity.
					</p>
				</div>
			</div>

			<!-- Contact information -->
			<div
				data-aos="fade-up"
				data-aos-delay="700"
				class="mt-12 text-center bg-gray-800 p-8 rounded-2xl"
			>
				<h2 class="text-2xl font-bold mb-4">
					Can't find the answer to your question?
				</h2>
				<p class="text-white/80 mb-6">
					Contact us, and we'll help you with any questions about our products
					and services.
				</p>
				<NuxtLink
					to="/#contact"
					class="inline-block bg-amber-400 text-slate-900 px-6 py-3 rounded-2xl hover:bg-amber-500 transition duration-300 font-medium"
				>
					Contact Us
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
