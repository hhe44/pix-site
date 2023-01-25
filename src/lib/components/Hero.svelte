<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { HeroImage } from '../types/';

	export let heroImages: Array<HeroImage> = [
		{ alt: 'NFT 1', src: 'https://placeimg.com/160/160/any' },
		{ alt: 'NFT 2', src: 'https://placeimg.com/160/160/any' },
		{ alt: 'NFT 3', src: 'https://placeimg.com/160/160/any' },
		{ alt: 'NFT 4', src: 'https://placeimg.com/160/160/any' },
		{ alt: 'NFT 5', src: 'https://placeimg.com/160/160/any' },
		{ alt: 'NFT 6', src: 'https://placeimg.com/160/160/any' }
	];
</script>

<section
	class="relative flex items-center h-screen max-h-[480px] px-6 md:px-[132px]"
	style="background: radial-gradient(100% 100% at 0% 0%, #27272A 0%, #18181B 100%);"
>
	<div class="text-neutral-content relative z-10">
		<div class="text-base-100">
			<h3 class="text-5xl font-light text-glow">{$_('Hero.All your favorite NFTs')}</h3>
			<p class="text-[48px] font-light text-glow">
				{$_('Hero.All in')} <span class="text-glow-intense font-bold">{$_('Hero.one place')} </span>
			</p>
		</div>
	</div>

	<div class="hero-images absolute inset-0 w-[100%] h-[100%] overflow-hidden">
		{#each heroImages as heroImage, i}
			<!-- svelte-ignore a11y-missing-attribute -->
			<img {...heroImage} style="animation-delay: {(i + 1) * 1.5}s;" class="image-glow-intense" />
		{/each}
	</div>
</section>

<style>
	@keyframes float {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10%);
		}
		100% {
			transform: translateY(0);
		}
	}

	.text-glow {
		text-shadow: 0px 0px 10px white;
	}

	.text-glow-intense {
		text-shadow: 0px 0px 25px white;
	}

	.image-glow-intense {
		filter: drop-shadow(0px 4px 20px rgba(255, 255, 255, 0.5));
	}

	.hero-images {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	.hero-images img {
		flex: 1;
		max-width: 150px;
		aspect-ratio: 1/1;
		width: 100%;
		object-fit: cover;
		animation-name: float;
		animation-iteration-count: infinite;
		animation-duration: 20s;
		animation-timing-function: linear;
	}

	.hero-images img:nth-of-type(1) {
		align-self: start;
		margin-top: 32px;
		margin-left: -5%;
	}

	.hero-images img:nth-of-type(2) {
		align-self: start;
		margin-top: -5%;
		max-width: 120px;
	}

	.hero-images img:nth-of-type(3) {
		align-self: end;
		margin-bottom: -5%;
		max-width: 202px;
	}

	.hero-images img:nth-of-type(4) {
		align-self: center;
		max-width: 264px;
	}

	.hero-images img:nth-of-type(5) {
		align-self: end;
		margin-bottom: 3%;
	}

	.hero-images img:nth-of-type(6) {
		align-self: start;
		margin-top: 32px;
		margin-right: -3%;
	}
</style>
