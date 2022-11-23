<script lang="ts">
	export let alt: string = '';
	export let cardDetails: [string, string | number][];
	export let name: string = '';
	export let url: string = '';
</script>

<div class="group w-full cursor-pointer">
	<img class="w-full transition duration-150 group-hover:opacity-75" src={url} alt={alt} />
	<div>
		<p class="m-2 font-bold text-center">{name}</p>
		<div class="flex justify-around">
			{#each cardDetails as detail}
				<div>
					<p class="text-sm font-semibold text-gray-500">{detail[0]}</p>
					<p class="text-sm">{detail[1]}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class="absolute top-[50%] left-[50%] translate-x-[-50%]">
		<div
			class="btn-hidden opacity-0 flex space-x-4 transition duration-300 group-hover:opacity-100"
		>
			<button class="btn btn-square w-24 text-base-100">Buy Now</button>
			<button class="btn btn-square w-12">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 stroke-neutral invert"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
				</div>
			</button>
		</div>
	</div>
</div>
