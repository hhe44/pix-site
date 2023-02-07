<script lang="ts">
	import { FailIcon, SuccessIcon, TwitterIcon } from '$lib/icons';
	import { supabase } from '$lib/supabaseClient';
	const videoUrl: string = 'videos/hero-video.mp4';
	const currentYear: number = new Date().getFullYear();
	const SNACKBAR_MESSAGES = {
		ALREADY_REMOVED: "That email may have already been removed.",
		FAIL: "Something went wrong!\nPlease try again!",
		REGEX_FAIL: "That doesn't look right...\nPlease try again!",
		SUCCESS: 'Email has been removed from mail list!'
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
			const res = await supabase.functions.invoke("unsubscribe-email", { body: { email } });
			if (res.error) {
				console.error(await res.error.context?.text());
				isSubmitSuccessful = false;
				if (res.error.context?.status == 400) {
					snackbarMessage = SNACKBAR_MESSAGES.ALREADY_REMOVED;
				} else {
					snackbarMessage = SNACKBAR_MESSAGES.FAIL;
				}
			} else {
				isSubmitSuccessful = true;
				snackbarMessage = SNACKBAR_MESSAGES.SUCCESS;
				inputElement.value = "";
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
</script>

<main>
	{#if isSnackbarVisible}
		<div class="toast toast-center toast-top w-64 p-0 top-[24px] md:top-[40px]  z-50">
			<div
				class={`
					alert justify-center rounded-[6px]
					${isSubmitSuccessful ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}
				`}
			>
				<div class="flex items-center">
					<img src={isSubmitSuccessful ? SuccessIcon : FailIcon} alt="toast icon" />
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
	<section class="hero h-[85vh] relative bg-black z-0">
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
					class="pt-2 sm:text-4xl md:text-6xl md:pt-3 text-3xl font-bold text-center "
					data-aos="fade-up"
					data-aos-delay="400"
				>
					All in one place.
				</h1>
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
		<div class="flex flex-col items-center" data-aos="fade-up">
			<div class="flex flex-col">
				<h1 class="text-4xl md:text-6xl font-bold text-center text-black">
					Sorry to see you go!
				</h1>
			</div>
			<div
				class="flex flex-col sm:flex-row items-center w-full max-w-md"
				data-aos="fade-right"
				data-aos-delay="300"
			>
				<input
					bind:this={inputElement}
					bind:value={email}
					class="w-full my-2 sm:my-3 sm:mr-3"
					type="text"
					placeholder="Enter your email"
				/>
				<button
					on:click={submitForm}
					disabled={isSubmitBtnDisabled}
					class={`
						w-full rounded-[6px] bg-black font-bold text-[14px] px-2 py-[10px] sm:w-40
						${isSubmitBtnDisabled ? 'text-gray-200' : 'text-white'}
					`}
				>
					Unsubscribe
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
