<script lang="ts">
	import { onMount } from 'svelte';
	import type { Collection } from 'src/types/Collection';

	export let collections: Collection[] = [];

	// Holds table sort state.  Initialized to reflect table sorted by id column ascending.
	const sortBy = { col: 'id', ascending: true };
	let sortableCols: Element[] = [];

	// for whatever reason adding classes for styling doesn't work in prod
	// workaround: have all columns be active headers and remove them on mount (except for the name col)
	// collections array should be sorted by name upon initialization
	onMount(() => {
		sortableCols = Array.from(document.querySelectorAll('.table th:not(:last-child)'));
		sortableCols.forEach((c) => {
			if (c.innerHTML !== 'name') c.classList.remove('active-header');
		});
	});

	$: sort = (column: any) => {
		const currActiveCol: Element = sortableCols.filter((c) =>
			c.classList.contains('active-header')
		)[0];
		const newActiveCol: Element = sortableCols.filter((c) => c.innerHTML == column)[0];
		if (currActiveCol === newActiveCol) {
			// do nothing
		} else {
			currActiveCol.classList.remove('active-header');
			newActiveCol.classList.add('active-header');
		}

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
		<div class="w-full mt-4 flex justify-evenly md:mt-0 md:w-1/2 lg:w-1/3 xl:w-1/4">
			<!-- TODO: Replace daisyUI option selects with something nicer -->
			<select class="select select-ghost bg-base-200 select-sm">
				<option selected>All networks</option>
			</select>
			<select class="select bg-base-200 select-sm">
				<option selected>Last 7 Days</option>
			</select>
		</div>
	</div>

	<table class="table w-full mt-2">
		<thead class="text-gray-500">
			<tr>
				<th on:click={() => sort('name')} class="text-base active-header transition duration-150"
					>name</th
				>
				<th
					on:click={() => sort('network')}
					class="text-base text-center hidden active-header sm:table-cell transition duration-150"
					>network</th
				>
				<th
					on:click={() => sort('volume')}
					class="text-base text-end active-header sm:text-center transition duration-150">volume</th
				>
				<th
					on:click={() => sort('floor')}
					class="text-base text-center hidden active-header lg:table-cell transition duration-150"
					>floor</th
				>
				<th
					on:click={() => sort('tvl')}
					class="text-base text-center hidden active-header sm:table-cell sm:text-end xl:text-center transition duration-150"
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
								<div class="mask mask-square w-20 h-20 cursor-pointer transition duration-150 hover:scale-95">
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
							<div class="mask mask-square w-20 h-20 cursor-pointer transition duration-150 hover:scale-95">
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
