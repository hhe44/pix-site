<script lang="ts">
	export let title: string = 'Upcoming Drops';
	export let nftImgUrls: string[] = [];
</script>

<div class="flex flex-col items-center align-center mt-8">
	<h3 class="text-2xl font-bold">{title}</h3>
	<div class="w-4/5 carousel carousel-center mt-2 sm:w-full sm:flex-wrap sm:justify-evenly" data-target="#myCarousel">
		{#each nftImgUrls as imgUrl, i}
			<div id="slide#{i}" class="carousel-item relative w-full sm:w-2/5 sm:pt-8 md:w-[29%] lg:w-[15%] lg:pt-0">
				<img src={imgUrl} alt="NFT Display #{i}" class="w-full" />
				{#if i == 0}
					<div class="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 justify-end sm:hidden">
						<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
					</div>
				{:else if i == nftImgUrls.length - 1}
					<div class="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 justify-start sm:hidden">
						<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
					</div>
				{:else}
					<div class="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2 justify-between sm:hidden">
						<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
						<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
