<script lang="ts">
	import { slide } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	export let options: string[] = [];
	export let sortOrder: boolean = false;
	let selected: string = '';
	let open = false;

	onMount(() => {
		if (sortOrder) options.sort();
		selected = options[0];
	});

	const dropdownHandler = (e: any) => {
		selected = e.currentTarget.innerText;
		open = !open;
	};

	const focusOutHandler = (e: any) => {
		const relatedTarget = e.relatedTarget;
		const currentTarget = e.currentTarget;
		if (
			relatedTarget instanceof HTMLElement &&
			currentTarget instanceof HTMLElement &&
			currentTarget.contains(relatedTarget)
		)
			return;
		open = false;
	};
</script>

<div on:focusout={(e) => focusOutHandler(e)} class="relative inline-block text-left">
	<div>
		<button
			on:click={(e) => dropdownHandler(e)}
			type="button"
			class="
				inline-flex w-36 justify-center border border-gray-300 bg-white px-2 py-1 text-sm font-bold
				text-neutral shadow-sm hover:bg-gray-50 sm:px-4 sm:py-2
			"
		>
			<p class="relative top-[2px]">{selected}</p>
			<svg
				class="-mr-1 ml-2 h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="
						M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 
						0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z
					"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
	{#if open}
		<div
			transition:slide={{ duration: 300, easing: elasticInOut }}
			class="absolute right-0 z-10 mt-1 w-24 origin-top-right bg-white shadow-lg sm:w-36"
		>
			<div class="py-1" role="none">
				{#each options as option}
					<button
						on:click={dropdownHandler}
						class="w-full text-sm px-4 py-2 text-left font-medium text-neutral hover:bg-gray-50"
					>
						{option}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
