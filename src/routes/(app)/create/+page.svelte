<script lang="ts">
</script>

<main class="flex flex-col p-2 sm:p-4 md:p-8 h-[calc(100vh_-_4rem)]">
	<section>
		<h2 class="mb-4 text-3xl font-bold text-center sm:text-left">Select your network</h2>
		<p class="text-lg text-center sm:text-left">
			PIX will help you mint your collection on any network - it'll be easy. We'll walk you through it.
		</p>
	</section>

	<section class="mt-8 space-y-4">
		<button class="btn btn-outline w-full sm:justify-start">Hedera</button>
		<button class="btn btn-outline w-full sm:justify-start">Ethereum</button>
		<button class="btn btn-outline w-full sm:justify-start">Polygon</button>
		<button class="btn btn-outline w-full sm:justify-start">Solana</button>
	</section>

	<section class="flex align-bottom flex-col justify-center items-center space-y-4 mt-auto sm:flex-row sm:justify-between sm:space-y-0">
		<p>Step 1 of 5</p>
		<progress class="progress w-48 sm:w-64 md:w-72 lg:w-[24rem]" value="20" max="100" />
		<div class="flex justify-center items-center">
			<button class="btn btn-ghost gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
				Prev
			</button>
			<button class="btn btn-ghost gap-2">
				Next
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
			</button>
		</div>
	</section>
</main>