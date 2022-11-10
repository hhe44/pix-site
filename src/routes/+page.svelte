<script>
	import Hero from '../components/Hero.svelte';
	import CollectionTable from '../components/CollectionTable.svelte';
</script>

<Hero />
<div class="sm:p-4 md:p-8">

	<div class="flex flex-col md:flex-row md:justify-evenly lg:justify-between items-center mt-4 space-y-4 md:space-y-0">
		<h3 class="text-2xl font-bold">Most Popular Collections</h3>
		<div class="w-full flex justify-evenly md:w-1/2 lg:w-1/3 xl:w-1/4">
			<select class="select select-ghost bg-base-200 select-sm">
				<option selected>All networks</option>
			</select>
			<select class="select bg-base-200 select-sm">
				<option selected>Last 7 Days</option>
			</select>
		</div>
	</div>

	<div class="overflow-x-auto">
		<CollectionTable />
	</div>
	<div class="text-center">
		<h5 class="text-med font-bold">View All Collections ❯</h5>
	</div>

	<div class="flex flex-col items-center align-center mt-8">
		<h3 class="text-2xl font-bold">Upcoming Drops</h3>
		<div class="w-4/5 carousel carousel-center mt-2" data-target="#myCarousel">
			<div id="slide1" class="carousel-item relative w-full">
				<img src="https://placeimg.com/400/400/arch" alt="nft" class="w-full" />
				<div class="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
				</div>
			</div> 
			<div id="slide2" class="carousel-item relative w-full">
				<img src="https://placeimg.com/400/400/arch" alt="nft" class="w-full" />
				<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
				</div>
			</div> 
			<div id="slide3" class="carousel-item relative w-full">
				<img src="https://placeimg.com/400/400/arch" alt="nft" class="w-full" />
				<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
				</div>
			</div> 
			<div id="slide4" class="carousel-item relative w-full">
				<img src="https://placeimg.com/400/400/arch"alt="nft" class="w-full" />
				<div class="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
				</div>
			</div>
		</div>
	</div>
	<div class="text-center">
		<h5 class="mt-2 text-med font-bold">View All Drops ❯</h5>
	</div>

	<div class="flex flex-col items-center align-center mt-8">
		<h3 class="text-2xl font-bold">New Mints</h3>
		<div class="w-4/5 carousel mt-2">
			<div id="slideA1" class="carousel-item relative w-full">
				<img src="https://placeimg.com/400/400/arch" alt="nft" class="w-full" />
				<div class="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
				</div>
			</div> 
			<div id="slideA2" class="carousel-item relative w-full">
				<img src="https://placeimg.com/400/400/arch" alt="nft" class="w-full" />
				<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
				</div>
			</div> 
			<div id="slideA3" class="carousel-item relative w-full">
				<img src="https://placeimg.com/400/400/arch" alt="nft" class="w-full" />
				<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❯</div>
				</div>
			</div> 
			<div id="slideA4" class="carousel-item relative w-full">
				<img src="https://placeimg.com/400/400/arch"alt="nft" class="w-full" />
				<img src="https://placeimg.com/400/400/arch"alt="nft" class="w-full" />
				<div class="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
					<div class="text-2xl font-extrabold w-8 text-center bg-neutral text-gray-300">❮</div>
				</div>
			</div>
		</div>
	</div>
	<div class="text-center">
		<h5 class="mt-2 text-med font-bold">View All Mints ❯</h5>
	</div>

</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* Override daisyUI's CSS below: */
	.btn, .select {
		border-radius: 0px;
	}

	.btn-circle {
		border-radius: 9999px;
	}

	.menu-horizontal li a:active {
		background-color: transparent;
		color: #191D24;
	}

	.outline-none {
		outline: none;
	}

	.menu-horizontal li a:hover {
		background-color: transparent;
		opacity: 0.7;
	}

	.select:focus {
		outline: none;
	}

	.table th {
		background-color: transparent;
	}
</style>