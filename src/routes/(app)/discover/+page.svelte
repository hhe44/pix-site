<script lang="ts">
	import NftCard from '$lib/components/NftCard.svelte';
	import type { Card } from '$lib/types/Card';
	const dummyDetails: [string, string | number][] = [
		['Mint Price', 123]
	];
	const dummyCard: Card = {
		url: 'https://placeimg.com/400/400/arch',
		name: 'dummy',
		cardDetails: dummyDetails
	};
</script>

<section>
	<div class="flex flex-wrap justify-around">
		{#each Array(24) as _}
			<NftCard class="mt-2 w-[45%] sm:w-[30%] md:w-[23%] lg:w-[18%] xl:w-[15%]" {...dummyCard} />
		{/each}
	</div>
</section>
