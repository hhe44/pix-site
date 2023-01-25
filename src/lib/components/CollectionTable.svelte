<script lang="ts">
	import type { Collection } from '$lib/types/';
	import { _ } from 'svelte-i18n';

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
	<div
		class="flex flex-col items-center md:flex-row md:justify-evenly lg:justify-between mb-[42px]"
	>
		<h2 class="text-2xl font-bold">{$_('CollectionTable.Most popular collections')}</h2>
		<div class="flex gap-2">
			<select class="select select-sm bg-accent ">
				<option selected>{$_('CollectionTable.All networks')}</option>
				<option>Hedera</option>
				<option>Ethereum</option>
				<option>Binance</option>
			</select>
			<select class="select select-sm bg-accent ">
				<option selected>{$_('CollectionTable.7 days')}</option>
				<option>{$_('CollectionTable.Month')}</option>
				<option>{$_('CollectionTable.Year')}</option>
			</select>
		</div>
	</div>

	<table class="table w-full">
		<thead class="text-gray-500">
			<tr>
				<th
					class:active-header={sortBy.col === 'name'}
					on:click={() => sort('name')}
					class="text-base transition duration-150">{$_('CollectionTable.Collection')}</th
				>
				<th
					class:active-header={sortBy.col === 'network'}
					on:click={() => sort('network')}
					class="text-base text-center hidden sm:table-cell transition duration-150"
					>{$_('CollectionTable.Network')}</th
				>
				<th
					class:active-header={sortBy.col === 'volume'}
					on:click={() => sort('volume')}
					class="text-base text-end transition duration-150">{$_('CollectionTable.7D Vol')}</th
				>
				<th
					class:active-header={sortBy.col === 'floor'}
					on:click={() => sort('floor')}
					class="text-base text-end hidden lg:table-cell transition duration-150"
					>{$_('CollectionTable.Floor price')}</th
				>
				<th
					class:active-header={sortBy.col === 'tvl'}
					on:click={() => sort('tvl')}
					class="text-base text-end hidden sm:table-cell transition duration-150"
					>{$_('CollectionTable.Total value locked')}</th
				>
				<th />
				<th class="text-base hidden xl:table-cell"
					>{$_('CollectionTable.More from this collection')}</th
				>
			</tr>
		</thead>
		<tbody>
			{#each collections as collection}
				<tr>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-square w-[88px] cursor-pointer transition duration-150">
									<img src={collection.imgUrl} alt={`${collection.name} NFT Collection`} />
								</div>
							</div>
							<div>
								<div class="font-bold">{collection.name}</div>
							</div>
						</div>
					</td>
					<td class="text-center hidden font-medium sm:table-cell ">{collection.network}</td>
					<td class="text-end">${collection.volume}</td>
					<td class="text-end hidden font-medium lg:table-cell">${collection.floor}</td>
					<td class="text-end hidden font-medium sm:table-cell ">${collection.tvl}</td>
					<td />
					<td class="hidden gap-2 xl:flex">
						{#each collection.more as imgUrl, i}
							<div class="mask mask-square w-[88px] cursor-pointer transition duration-150">
								<img src={imgUrl} alt={`${collection.name} Sample #${i}`} />
							</div>
						{/each}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="text-center">
		<h5 class="text-med font-bold cursor-pointer">
			{$_('CollectionTable.View all collections')} ❯
		</h5>
	</div>
</section>

<style lang="postcss">
	.active-header {
		@apply text-primary;
	}
</style>
