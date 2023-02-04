<script lang="ts">
	import AOS from 'aos';
	import { SuccessIcon, TwitterIcon } from '$lib/icons';
	import { onMount } from 'svelte';
	import { supabase } from '$src/lib/supabaseClient';

	const networks: Array<{ icon: string; image: string }> = [
		{ icon: 'images/logos/Algorand-Icon-White.svg', image: 'images/nfts/Algorand-NFT.svg' },
		{ icon: 'images/logos/Avalanche-Icon-White.svg', image: 'images/nfts/Avalanche-NFT.svg' },
		{ icon: 'images/logos/BSC-Icon-White.svg', image: 'images/nfts/BSC-NFT.svg' },
		{ icon: 'images/logos/Ethereum-Icon-White.svg', image: 'images/nfts/Ethereum-NFT.svg' },
		{ icon: 'images/logos/Fantom-Icon-White.svg', image: 'images/nfts/Fantom-NFT.svg' },
		{ icon: 'images/logos/Hedera-Icon-White.svg', image: 'images/nfts/Hedera-NFT-2.svg' },
		{ icon: 'images/logos/Moonbeam-Icon-White.svg', image: 'images/nfts/Moonbeam-NFT.svg' },
		{ icon: 'images/logos/Near-Icon-White.svg', image: 'images/nfts/Near-NFT.svg' },
		{ icon: 'images/logos/Polygon-Icon-White.svg', image: 'images/nfts/Polygon-NFT.svg' },
		{ icon: 'images/logos/Solana-Icon-White.svg', image: 'images/nfts/Solana-NFT.svg' }
	];
	const videoUrl: string = 'videos/hero-video.mov';
	const currentYear: number = new Date().getFullYear();
	const SNACKBAR_MESSAGES = {
		DUP_EMAIL: 'We already got you added. Thanks!',
		FAIL: 'Something went wrong!\nPlease try again!',
		REGEX_FAIL: "That doesn't look right...\nPlease try again!",
		SUCCESS: "Thanks! We'll email you updates soon!"
	};
	let snackbarMessage: string = '';
	let inputElement: HTMLInputElement;
	let email: string = '';
	let isSnackbarVisible: boolean = false;
	let isSubmitBtnDisabled: boolean = false;
	let isSubmitSuccessful: boolean = false;

	const submitForm = async () => {
		email = email.toLocaleLowerCase();
		// email address length & regex check
		if (email.length < 255 && /\S+@\S+\.\S+/.test(email)) {
			const res = await supabase.functions.invoke('subscribe-email', { body: { email } });
			if (res.error) {
				console.error(await res.error.context?.text());
				isSubmitSuccessful = false;
				if (res.error.context?.status == 400) {
					snackbarMessage = SNACKBAR_MESSAGES.DUP_EMAIL;
				} else {
					snackbarMessage = SNACKBAR_MESSAGES.FAIL;
				}
			} else {
				isSubmitSuccessful = true;
				snackbarMessage = SNACKBAR_MESSAGES.SUCCESS;
				inputElement.value = '';
			}
		} else {
			isSubmitSuccessful = false;
			snackbarMessage = SNACKBAR_MESSAGES.REGEX_FAIL;
		}
		isSnackbarVisible = true;
		isSubmitBtnDisabled = true;
		setTimeout(() => {
			isSnackbarVisible = false;
			isSubmitBtnDisabled = false;
		}, 5000);
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
		<div class="toast toast-center toast-top w-64 p-0 top-[24px] md:top-[40px]  z-50">
			<div
				class={`
				alert justify-center rounded-[6px]
				${isSubmitSuccessful ? 'bg-green-200' : 'bg-red-200'}
			`}
			>
				<div class="flex items-center">
					<img src={!isSubmitSuccessful ? SuccessIcon : ''} alt="toast icon" />
					<p class="text-center font-medium">{snackbarMessage}</p>
				</div>
			</div>
		</div>
	{/if}
	<header
		class="
			flex justify-between items-center fixed z-10 w-full px-3 md:px-10 py-3 
			bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]
		"
	>
		<img class="w-28" src="images/pix/pix-logo-white.png" alt="Pix logo" />
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
					class="text-3xl sm:text-4xl md:text-6xl font-bold text-center"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					All your favorite NFTs.
				</h1>
				<h1
					class="text-3xl sm:text-4xl md:text-6xl md:pt-2 font-bold text-center "
					data-aos="fade-up"
					data-aos-delay="400"
				>
					All in one place.
				</h1>
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
		<div class="flex flex-col items-center gap-4">
			<p class="text-xl md:text-2xl text-center" data-aos="slide-right" data-aos-offset="-100">
				Web3 is fragmented...
			</p>
			<div data-aos="fade-up">
				<h1 class="text-center text-3xl sm:text-4xl md:text-6xl font-bold">we make it seamless.</h1>
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
						src="images/pix/pix-logo-white.png"
						alt="Pix logo"
					/>
				</div>
			</div>
		</div>
	</section>

	<section class="sign-up-gradient px-6 md:px-10 py-9">
		<div class="flex flex-col items-center" data-aos="fade-up">
			<div class="flex flex-col gap-6 md:flex-row">
				<h1 class="text-4xl md:text-6xl font-bold text-center text-black">
					Join the PixFi community
				</h1>
			</div>
			<div
				class="flex flex-col md:flex-row items-center gap-2 w-full max-w-md mt-2"
				data-aos="fade-right"
				data-aos-delay="300"
			>
				<input
					bind:this={inputElement}
					bind:value={email}
					class="w-full"
					type="text"
					placeholder="Enter your email"
				/>
				<button
					on:click={submitForm}
					disabled={isSubmitBtnDisabled}
					class={`
						w-48 max-w-xs rounded-[6px] bg-black font-bold text-[14px] px-2 py-[10px] 
						${isSubmitBtnDisabled ? 'text-gray-200' : 'text-white'}
					`}
				>
					Sign me up!
				</button>
			</div>
		</div>
	</section>

	<footer class="py-3 bg-black">
		<div class="flex flex-col justify-center items-center gap-1">
			<div class="flex justify-center items-center gap-3 text-white">
				<img src="images/pix/pix-logo-white.png" alt="Pix logo" />
				<p>&copy; {currentYear} PixFi</p>
			</div>
			<p class="italic text-gray-200 text-xs">coming H2 2023</p>
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
		grid-template-columns: repeat(5, 37px);
		grid-template-rows: repeat(6, 37px);
		gap: 9px;
		place-items: center;
		position: relative;
		width: 225px;
		height: 225px;
		margin: 48px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
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
		width: 15px;
		bottom: -20px;
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
		width: 100px;
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

	@media screen and (min-width: 400px) {
		.network-circle {
			width: 300px;
			height: 300px;
			margin: 64px;
			gap: 12px;
			grid-template-columns: repeat(5, 50px);
			grid-template-rows: repeat(6, 50px);
		}

		.network-circle-item-wrapper img.icon {
			width: 20px;
			bottom: -30px;
		}

		.network-circle .pix-logo {
			width: 150px;
		}
	}

	@media screen and (min-width: 768px) {
		.network-circle {
			width: 600px;
			height: 600px;
			margin: 128px;
			gap: 25px;
			grid-template-columns: repeat(5, 100px);
			grid-template-rows: repeat(6, 100px);
		}

		.network-circle-item-wrapper img.icon {
			width: 30px;
			bottom: -40px;
		}
	}
</style>
