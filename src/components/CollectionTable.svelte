<script lang="ts">
	import type { Collection } from 'src/types/Collection';

	export let collections: Collection[] = [];

	// Holds table sort state.  Initialized to reflect table sorted by id column ascending.
	let sortBy = { col: 'id', ascending: true };

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

<div
	class="flex flex-col md:flex-row md:justify-evenly lg:justify-between items-center mt-4 space-y-4 md:space-y-0"
>
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

<table class="table w-full mt-2">
	<thead class="text-gray-400">
		<tr>
			<th on:click={() => sort('name')} class="text-base">collection</th>
			<th on:click={() => sort('network')} class="text-base text-center hidden sm:table-cell"
				>network</th
			>
			<th on:click={() => sort('volume')} class="text-base text-end sm:text-center">volume</th>
			<th on:click={() => sort('floor')} class="text-base text-center hidden lg:table-cell"
				>floor</th
			>
			<th
				on:click={() => sort('tvl')}
				class="text-base text-center hidden sm:table-cell sm:text-end xl:text-center">tvl</th
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
							<div class="mask mask-square w-20 h-20">
								<img src={collection.imgUrl} alt={`${collection.name} NFT Collection`} />
							</div>
						</div>
						<div>
							<div class="font-bold">{collection.name}</div>
						</div>
					</div>
				</td>
				<td class="text-center hidden sm:table-cell font-medium">{collection.network}</td>
				<td class="text-end sm:text-center">${collection.volume}</td>
				<td class="text-center hidden lg:table-cell font-medium">${collection.floor}</td>
				<td class="text-center hidden sm:table-cell sm:text-end xl:text-center font-medium"
					>${collection.tvl}</td
				>
				<td class="hidden xl:flex items-center justify-center space-x-4">
					{#each collection.more as imgUrl, i}
						<div class="mask mask-square w-20 h-20">
							<img src={imgUrl} alt={`${collection.name} Sample #${i}`} />
						</div>
					{/each}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	.table th:not(:last-child):active {
		@apply text-primary;
	}
</style>
