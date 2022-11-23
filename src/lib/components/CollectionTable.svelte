<script lang="ts">
	import type { Collection } from '$lib/types/Collection';

	export let collections: Collection[] = [];
	// Holds table sort state.  Initialized to reflect table sorted by id column ascending.
	const sortBy = { col: 'name', ascending: true };

	$: sort = (column: any) => {
		if (sortBy.col == column) {
			sortBy.ascending = !sortBy.ascending;
		} else {
			sortBy.col = column;
			sortBy.ascending = true;
		}

		// Modifier to sorting function for ascending or descending
		let sortModifier = sortBy.ascending ? 1 : -1;
		let sort = (a: any, b: any) =>
			a[column] < b[column] ? -1 * sortModifier : a[column] > b[column] ? 1 * sortModifier : 0;
		collections = collections.sort(sort);
	};
</script>

<section>
	<div class="flex flex-col items-center md:flex-row md:justify-evenly lg:justify-between">
		<h2 class="text-2xl font-bold">Most Popular Collections</h2>
		<div class="w-32 flex justify-evenly md:mt-0 md:w-1/2 lg:w-1/3 xl:w-1/4">
			<select class="select bg-accent">
				<option selected>All</option>
				<option>Hedera</option>
				<option>Ethereum</option>
				<option>Binance</option>
			</select>
			<select class="select bg-accent">
				<option selected>Week</option>
				<option>Month</option>
				<option>Year</option>
			</select>
		</div>
	</div>

	<table class="table w-full mt-2">
		<thead class="text-gray-500">
			<tr>
				<th
					class:active-header={sortBy.col === 'name'}
					on:click={() => sort('name')}
					class="text-base transition duration-150">name</th
				>
				<th
					class:active-header={sortBy.col === 'network'}
					on:click={() => sort('network')}
					class="text-base text-center hidden sm:table-cell transition duration-150">network</th
				>
				<th
					class:active-header={sortBy.col === 'volume'}
					on:click={() => sort('volume')}
					class="text-base text-end sm:text-center transition duration-150">volume</th
				>
				<th
					class:active-header={sortBy.col === 'floor'}
					on:click={() => sort('floor')}
					class="text-base text-center hidden lg:table-cell transition duration-150">floor</th
				>
				<th
					class:active-header={sortBy.col === 'tvl'}
					on:click={() => sort('tvl')}
					class="text-base text-center hidden sm:table-cell sm:text-end xl:text-center transition duration-150"
					>tvl</th
				>
				<th class="text-base text-center hidden xl:table-cell">More</th>
			</tr>
		</thead>
		<tbody>
			{#each collections as collection}
				<tr>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div
									class="mask mask-square w-20 h-20 cursor-pointer transition duration-150 hover:scale-95"
								>
									<img src={collection.imgUrl} alt={`${collection.name} NFT Collection`} />
								</div>
							</div>
							<div>
								<div class="font-bold">{collection.name}</div>
							</div>
						</div>
					</td>
					<td class="text-center hidden font-medium sm:table-cell ">{collection.network}</td>
					<td class="text-end sm:text-center">${collection.volume}</td>
					<td class="text-center hidden font-medium lg:table-cell">${collection.floor}</td>
					<td class="text-center hidden font-medium sm:table-cell sm:text-end xl:text-center"
						>${collection.tvl}</td
					>
					<td class="hidden items-center justify-center space-x-4 xl:flex">
						{#each collection.more as imgUrl, i}
							<div
								class="mask mask-square w-20 h-20 cursor-pointer transition duration-150 hover:scale-95"
							>
								<img src={imgUrl} alt={`${collection.name} Sample #${i}`} />
							</div>
						{/each}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="text-center">
		<h5 class="text-med font-bold cursor-pointer">View All Collections ❯</h5>
	</div>
</section>

<style lang="postcss">
	.active-header {
		@apply text-primary;
	}
</style>
