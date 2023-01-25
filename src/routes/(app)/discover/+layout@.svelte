<script lang="ts">
	import { Footer, Navbar } from '$lib/components/';
	import '$src/app.postcss';
	import {
		cubicIn,
		elasticIn,
		elasticInOut,
		expoIn,
		expoOut,
		quadIn,
		quadInOut,
		quadOut,
		sineIn,
		sineOut
	} from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';

	let openSidebar: boolean = false;
	$: toggleSidebar = () => {
		openSidebar = !openSidebar;
	};
</script>

<Navbar />
<div class="flex w-full px-2 sm:px-4 md:px-8 justify-around items-center sm:justify-between">
	<button on:click={toggleSidebar} class="btn btn-sm btn-accent">Filter</button>
	<select class="select">
		<option selected>Recently</option>
	</select>
</div>
<div class="flex">
	{#if openSidebar}
		<div
			in:slide={{ delay: 50, duration: 150, easing: expoIn }}
			out:fade={{ delay: 50, duration: 150, easing: expoOut }}
			class={`absolute block z-[1] w-full max-w-[20rem] min-h-screen pt-4 pl-6 space-y-8  bg-base-100  sm:static
	`}
		>
			<div>
				<p class="font-bold">Status</p>
				<div class="form-control">
					<label class="label cursor-pointer justify-start items-center">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Buy Now</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Has Offers</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">New</span>
					</label>
				</div>
			</div>

			<div>
				<p class="font-bold">Price</p>
				<input type="text" placeholder="Min" class="input w-20 focus:outline-0" />
				<input type="text" placeholder="Max" class="input w-20 focus:outline-0" />
				<select class="select">
					<option selected>USD</option>
					<option>PIX</option>
					<option>HBAR</option>
					<option>ETH</option>
				</select>
			</div>

			<div>
				<p class="font-bold">Network</p>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Hedera</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Ethereum</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Binance</span>
					</label>
				</div>
			</div>

			<div>
				<p class="font-bold">Collections</p>
				<input
					type="text"
					placeholder="&#x1F50E;&#xFE0E; Search Collections"
					class="input input-ghost focus:outline-0"
				/>
			</div>
		</div>
	{/if}
	<main class={`w-full p-2 sm:p-4 md:p-8 space-y-8`}>
		<slot />
	</main>
</div>
<Footer />

<style lang="postcss">
	.open {
		@apply absolute block z-[1] w-full max-w-[20rem] min-h-screen sm:static;
	}
</style>
