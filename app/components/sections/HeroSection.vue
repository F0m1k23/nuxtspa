<script setup>
import { useMediaQuery } from '@vueuse/core'
const isMobile = useMediaQuery('(max-width: 868px)')
</script>

<template>
	<section
		class="relative text-white h-[65vh] md:h-[80vh]"
		:style="{
			backgroundImage: `url('/photo-1635405038683-39ac9c4c70c7.avif')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundAttachment: isMobile ? 'scroll' : 'fixed',
		}"
	>
		<div
			class="absolute top-[40px] sm:top-[60px] md:top-[80px] lg:top-[120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-[90%] md:w-auto px-4"
		>
			<h1
				data-aos="fade-up"
				class="text-xl md:text-3xl font-bold mb-3 text-center"
			>
				Pioneering a Sustainable Future with Liquefied Gas & Timber
			</h1>

			<p
				data-aos="fade-down-right"
				class="text-center text-base md:text-lg text-white/80 mb-3"
			>
				Natural Excellence is a leader in the production of liquefied gases and
				the processing of sustainable timber. Our mission is to provide clean
				energy solutions and high-quality wood products while upholding the
				highest standards of environmental responsibility and innovation.
			</p>

			<div class="flex gap-4 md:gap-5 w-auto md:w-auto">
				<UiButton data-aos="fade-down-right" class="w-full md:w-auto">
					{{ isMobile ? 'Discover' : 'Discover Our Products' }}
				</UiButton>

				<UiButtonOpacity data-aos="fade-down-left" class="w-full md:w-auto">
					{{ isMobile ? 'Join' : 'Join Our Mission' }}
				</UiButtonOpacity>
			</div>
		</div>
	</section>
</template>
