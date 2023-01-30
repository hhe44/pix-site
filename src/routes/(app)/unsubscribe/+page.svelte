<script lang="ts">
	import { TwitterIcon } from '$lib/icons';
	import { supabase } from '$src/lib/supabaseClient';
	const videoUrl: string = 'videos/hero-video.mp4';
	const currentYear: number = new Date().getFullYear();
	const SNACKBAR_MESSAGES = {
		ALREADY_REMOVED: "That email may have already been removed.",
		FAIL: "Something went wrong!\nPlease try again!",
		REGEX_FAIL: "That doesn't look right...\nPlease try again!",
		SUCCESS: 'Email has been removed from mail list!'
	};
	let snackbarMessage: string = '';
	let isSnackbarVisible: boolean = false;
	let inputElement: HTMLInputElement;
	let email: string = '';

	const submitForm = async () => {
		email = email.toLocaleLowerCase();
		// email address length & regex check
		if (email.length < 255 && /\S+@\S+\.\S+/.test(email)) {
			const res = await supabase.functions.invoke("unsubscribe-email", { body: { email } });
			if (res.error) {
				console.error(await res.error.context.text());
				if (res.error.context.status == 400) {
					snackbarMessage = SNACKBAR_MESSAGES.ALREADY_REMOVED;
				} else {
					snackbarMessage = SNACKBAR_MESSAGES.FAIL
				}
			} else {
				snackbarMessage = SNACKBAR_MESSAGES.SUCCESS;
				inputElement.value = "";
			}
		} else {
			snackbarMessage = SNACKBAR_MESSAGES.REGEX_FAIL;
		}
		isSnackbarVisible = true;
		setTimeout(() => {
			isSnackbarVisible = false;
		}, 5000);
	};
</script>

<main>
	{#if isSnackbarVisible}
		<div class="toast toast-center toast-top w-64 p-0 top-[24px] md:top-[40px]  z-50">
			<div class="alert bg-white justify-center">
				<div>
					<p class="text-center font-medium">{snackbarMessage}</p>
				</div>
			</div>
		</div>
	{/if}
	<header
		class="flex justify-between items-center fixed z-10 w-full px-3 md:px-10 py-3 bg-transparent"
	>
		<img class="w-28" src="images/pix/pix-logo-white.png" alt="Pix logo" />
		<a href="https://twitter.com/pixfiio" rel="noreferrer" target="_blank"
			><img src={TwitterIcon} alt="Twitter" /></a
		>
	</header>
	<section class="hero h-[85vh] relative bg-black">
		<div class="flex flex-col items-center gap-6 max-w-3xl relative z-10 text-white px-3">
			<div class="flex flex-col">
				<h1 class="text-4xl md:text-6xl font-bold text-center">All your favorite NFTs.</h1>
				<h1 class="text-4xl md:text-6xl font-bold text-center">All in one place.</h1>
			</div>

			<div class="max-w-lg">
				<p class="text-center text-md font-medium md:text-lg">
					PixFi is a frictionless multi-chain NFT aggregator, taking your NFT and DeFi experiece to
					the next level.
				</p>
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

	<section class="sign-up-gradient px-6 md:px-10 py-9">
		<div class="flex flex-col items-center">
			<div class="flex flex-col gap-6">
				<h1 class="text-4xl md:text-6xl font-bold text-center">We're sorry to see you go!</h1>
				<p class="text-center text-lg font-medium">
					Unsubscribe from the latest developments from PixFi.
				</p>
			</div>
			<div class="flex flex-col items-center gap-2 w-full max-w-md mt-2">
				<input
					bind:this={inputElement}
					bind:value={email}
					class="w-full"
					type="text"
					placeholder="Enter your email"
				/>
				<button
					on:click={submitForm}
					class="w-full rounded-[6px] bg-black text-white font-bold text-[14px] px-2 py-[10px]"
				>
					Cancel my subscription
				</button>
			</div>
		</div>
	</section>

	<footer class="py-3 bg-black">
		<div class="flex justify-center items-center gap-3 text-white">
			<img src="images/pix/pix-logo-white.png" alt="Pix logo" />
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
