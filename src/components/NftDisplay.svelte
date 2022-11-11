<script lang="ts">
	export let title: string = 'Upcoming Drops';
	export let nftImgUrls: string[] = [
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch'
	];
</script>

<div class="flex flex-col items-center align-center mt-8">
	<h3 class="text-2xl font-bold">{title}</h3>
	<div class="w-4/5 carousel carousel-center mt-2" data-target="#myCarousel">
		{#each nftImgUrls as imgUrl, i}
			<div id="slide#{i}" class="carousel-item relative w-full">
				<img src={imgUrl} alt="NFT Display #{i}" class="w-full" />
				{#if i == 0}
					<div class="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 justify-end">
						<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
					</div>
				{:else if i == nftImgUrls.length - 1}
					<div class="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 justify-start">
						<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
					</div>
				{:else}
					<div class="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 justify-between">
						<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
						<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
