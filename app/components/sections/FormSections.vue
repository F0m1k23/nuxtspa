<script setup>
const adress = {
	name: 'Natural Excellence',
	adress: '123 Sustainability Avenue, Greentown, 12345',
	email: 'info@naturalexcellence.com',
	phone: '+1 (234) 567-890',
	zip: '12345',
}
</script>

<template>
	<section id="contact" class="py-10 sm:py-20 bg-gray-800 text-white">
		<div class="w-full px-2 sm:px-0 sm:w-3/4 mx-auto px-2">
			<h2
				data-aos="fade-up"
				class="text-xl md:text-3xl font-bold text-center mb-1"
			>
				Connect With Us
			</h2>
			<p
				data-aos="fade-up"
				data-aos-delay="200"
				class="text-base md:text-lg mb-4 md:mb-7 text-center tracking-wide text-white/70"
			>
				Whether you're interested in our products, membership, or have a general
				inquiry, we're here to help. Reach out to our team or subscribe to our
				newsletter for the latest updates.
			</p>
			<div class="flex flex-col-reverse md:flex-row gap-3">
				<div data-aos="fade-right" class="flex-1/2">
					<div class="flex flex-col gap-3 mb-4">
						<h3
							data-aos="fade-up"
							data-aos-delay="400"
							class="font-bold text-xl"
						>
							Contact Information
						</h3>
						<p data-aos="fade-up" data-aos-delay="500" class="text-white/70">
							{{ adress.name }}
						</p>
						<p data-aos="fade-up" data-aos-delay="550" class="text-white/70">
							{{ adress.adress }}
						</p>
						<p data-aos="fade-up" data-aos-delay="600" class="text-amber-400">
							<b class="text-white/80">Email: </b>{{ adress.email }}
						</p>
						<p data-aos="fade-up" data-aos-delay="650" class="text-amber-400">
							<b class="text-white/80">Phone: </b>{{ adress.phone }}
						</p>
					</div>
					<div>
						<h3
							data-aos="fade-up"
							data-aos-delay="700"
							class="font-bold text-xl mb-4"
						>
							Newsletter
						</h3>
						<div
							data-aos="fade-up"
							data-aos-delay="800"
							class="flex items-center gap-2 h-10 w-full"
						>
							<input
								class="w-50 xl:w-100 border py-2 px-4 rounded-2xl bg-gray-900 border-gray-800 text-white/70"
								type="email"
								placeholder="Enter your email"
							/>
							<UiButton>Subscribe</UiButton>
						</div>
					</div>
				</div>
				<UiForm data-aos="fade-left" data-aos-delay="400" />
			</div>
		</div>
	</section>
</template>
