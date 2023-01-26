<script lang="ts">
	import AOS from 'aos';
	import { TwitterIcon } from '$lib/icons';
	import { onMount } from 'svelte';

	export const networks: Array<{ icon: string; image: string }> = [
		{ icon: './images/logos/Algorand-Icon-White.svg', image: './images/nfts/Algorand-NFT.svg' },
		{ icon: './images/logos/Avalanche-Icon-White.svg', image: './images/nfts/Avalanche-NFT.svg' },
		{ icon: './images/logos/BSC-Icon-White.svg', image: './images/nfts/BSC-NFT.svg' },
		{ icon: './images/logos/Ethereum-Icon-White.svg', image: './images/nfts/Ethereum-NFT.svg' },
		{ icon: './images/logos/Fantom-Icon-White.svg', image: './images/nfts/Fantom-NFT.svg' },
		{ icon: './images/logos/Hedera-Icon-White.svg', image: './images/nfts/Hedera-NFT.svg' },
		{ icon: './images/logos/Moonbeam-Icon-White.svg', image: './images/nfts/Moonbeam-NFT.svg' },
		{ icon: './images/logos/Near-Icon-White.svg', image: './images/nfts/Near-NFT.svg' },
		{ icon: './images/logos/Polygon-Icon-White.svg', image: './images/nfts/Polygon-NFT.svg' },
		{ icon: './images/logos/Solana-Icon-White.svg', image: './images/nfts/Solana-NFT.svg' }
	];
	export const videoUrl: string = './videos/hero-video.mp4';
	export const currentYear: number = new Date().getFullYear();
	export let isSnackbarVisible: boolean = false;

	export const submitForm = () => {
		isSnackbarVisible = true;
		setTimeout(() => {
			isSnackbarVisible = false;
		}, 7000);
	};

	onMount(() => {
		AOS.init();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<main>
	{#if isSnackbarVisible}
		<div class="toast toast-center toast-top  w-32 p-0 top-[24px] md:top-[40px]  z-50">
			<div class="alert bg-white justify-center">
				<div>
					<p class="text-center font-medium">Thank you!</p>
				</div>
			</div>
		</div>
	{/if}
	<header
		class="flex justify-between items-center fixed z-10 w-full px-3 md:px-10 py-3 bg-transparent"
	>
		<img class="w-28" src="./images/pix/pix-logo-white.png" alt="Pix logo" />
		<a href="https://twitter.com/pixfiio" rel="noreferrer" target="_blank"
			><img src={TwitterIcon} alt="Twitter" /></a
		>
	</header>
	<section class="hero h-[85vh] relative bg-black">
		<div
			class="flex flex-col items-center gap-6 max-w-3xl relative z-10 text-white px-3"
			data-aos="fade-up"
		>
			<div class="flex flex-col">
				<h1
					class="text-4xl md:text-6xl font-bold text-center"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					All your favorite NFTs.
				</h1>
				<h1
					class="text-4xl md:text-6xl font-bold text-center"
					data-aos="fade-up"
					data-aos-delay="400"
				>
					All in one place.
				</h1>
			</div>

			<div class="max-w-lg" data-aos="fade-up" data-aos-delay="600">
				<p class="text-center text-md font-medium md:text-lg">
					PixFi is a frictionless multi-chain NFT aggregator, taking your NFT and DeFi experiece to
					the next level.
				</p>
			</div>

			<div class="flex gap-2 justify-center flex-wrap md:gap-3 ">
				{#each networks as network, i}
					<img
						data-aos="fade-up"
						data-aos-delay={700 + 100 * i}
						src={network.icon}
						alt={network.icon}
					/>
				{/each}
			</div>
		</div>

		<video
			class="absolute w-full h-full object-cover"
			src={videoUrl}
			muted={true}
			autoplay={true}
			controls={false}
			loop={true}
		/>
	</section>

	<section class="px-3 md:px-10 py-9 bg-black text-white">
		<div class="flex flex-col items-center gap-6">
			<h1
				class="text-4xl md:text-6xl font-bold text-center"
				data-aos="slide-right"
				data-aos-offset="-100"
			>
				What PixFi is building
			</h1>
			<div class="max-w-xl" data-aos="fade-up">
				<p class="text-center text-lg font-medium">
					The NFT experience in Web3 is fragmented. We're bringing it all together in one seamless
					experience for everyone.
				</p>
			</div>

			<div class="network-circle">
				{#each networks as network, i}
					<div class="network-circle-item-wrapper">
						<div
							class="network-circle-item"
							data-aos="zoom-in"
							data-aos-delay={100 * i}
							data-aos-offset={i >= 5 && -250}
						>
							<img class="nft" src={network.image} alt={network.icon} />
							<img class="icon" src={network.icon} alt={network.icon} />
						</div>
					</div>
				{/each}
				<div class="pix-logo">
					<img
						data-aos="zoom-in"
						data-aos-delay="1100"
						src="./images/pix/pix-logo-white.png"
						alt="Pix logo"
					/>
				</div>
			</div>
		</div>
	</section>

	<section class="sign-up-gradient px-6 md:px-10 py-9">
		<div class="flex flex-col items-center" data-aos="fade-up">
			<div class="flex flex-col gap-6">
				<h1 class="text-4xl md:text-6xl font-bold text-center">Join the PixFi community</h1>
				<p class="text-center text-lg font-medium">
					Sign up to get the latest developments from PixFi.
				</p>
			</div>
			<div
				class="flex flex-col items-center gap-2 w-full max-w-md mt-2"
				data-aos="fade-up"
				data-aos-delay="300"
			>
				<input class="w-full " type="text" placeholder="Enter your email" />
				<button
					on:click={submitForm}
					class="w-full rounded-[6px] bg-black text-white font-bold text-[14px] px-2 py-[10px]"
				>
					Join the hype
				</button>
			</div>
		</div>
	</section>

	<footer class="py-3 bg-black">
		<div class="flex justify-center items-center gap-3 text-white">
			<img src="./images/pix/pix-logo-white.png" alt="Pix logo" />
			<p>&copy; {currentYear} PixFi</p>
		</div>
	</footer>
</main>

<style>
	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.network-circle {
		display: grid;
		grid-template-columns: repeat(5, 50px);
		grid-template-rows: repeat(6, 50px);
		gap: 12px;
		place-items: center;
		position: relative;
		width: 300px;
		height: 300px;
		margin: 112px 0;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
	}

	@media screen and (min-width: 768px) {
		.network-circle {
			width: 600px;
			height: 600px;
			gap: 25px;
			grid-template-columns: repeat(5, 100px);
			grid-template-rows: repeat(6, 100px);
		}
	}

	.network-circle-item-wrapper {
		width: 100%;
	}

	.network-circle-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.network-circle-item-wrapper img.nft {
		width: 100%;
		filter: drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.5));
	}

	.network-circle-item-wrapper img.icon {
		position: absolute;
		aspect-ratio: 1/1;
		width: 30px;
		bottom: -40px;
	}

	.network-circle-item-wrapper:nth-of-type(1) {
		grid-column: 1;
		grid-row: 2;
		transform: translate(-50%, 30%);
	}

	.network-circle-item-wrapper:nth-of-type(2) {
		grid-column: 2;
		grid-row: 1;
		transform: translateX(-50%);
	}

	.network-circle-item-wrapper:nth-of-type(3) {
		grid-column: 3;
		grid-row: 1;
		transform: translateY(-50%);
	}

	.network-circle-item-wrapper:nth-of-type(4) {
		grid-column: 4;
		grid-row: 1;
		transform: translateX(50%);
	}

	.network-circle-item-wrapper:nth-of-type(5) {
		grid-column: 5;
		grid-row: 2;
		transform: translate(50%, 30%);
	}

	.network-circle-item-wrapper:nth-of-type(6) {
		grid-column: 5;
		grid-row: 4;
		transform: translate(50%, -30%);
	}

	.network-circle-item-wrapper:nth-of-type(7) {
		grid-column: 4;
		grid-row: 5;
		transform: translateX(50%);
	}

	.network-circle-item-wrapper:nth-of-type(8) {
		grid-column: 3;
		grid-row: 5;
		transform: translateY(50%);
	}

	.network-circle-item-wrapper:nth-of-type(9) {
		grid-column: 2;
		grid-row: 5;
		transform: translateX(-50%);
	}

	.network-circle-item-wrapper:nth-of-type(10) {
		grid-column: 1;
		grid-row: 4;
		transform: translate(-50%, -30%);
	}

	.network-circle .pix-logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 150px;
	}

	.sign-up-gradient {
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(255, 255, 255, 1) 3%,
			rgba(255, 255, 255, 1) 97%,
			rgba(0, 0, 0, 1) 100%
		);
	}

	footer img {
		width: 100px;
	}
</style>
