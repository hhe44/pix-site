<script lang="ts">
	export let caption: string = '';
	export let title: string = '';
	export let nftImgUrls: string[] = [];
</script>

<section class="flex flex-col items-center">
	<h2 class="text-2xl font-bold lg:self-start lg:pl-4">{title}</h2>
	<div class="w-4/5 carousel carousel-center sm:w-full sm:flex-wrap sm:justify-evenly" data-target="#myDisplay">
		{#each nftImgUrls as imgUrl, i}
			<div id="displayItem#{i}" class="carousel-item relative w-full sm:w-2/5 sm:mt-4 md:w-[29%] lg:w-[15%]">
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
	{#if caption}
	<div class="text-center">
		<h3 class="mt-4 font-bold">{caption}</h3>
	</div>
	{/if}
</section>
