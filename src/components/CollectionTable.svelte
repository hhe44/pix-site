<script lang="ts">
	import type { Collection } from 'src/types/Collection';

	export let collections: Collection[] = [];
</script>

<table class="table w-full mt-2">
	<thead class="text-gray-400">
		<tr>
			<th class="text-base">collection</th>
			<th class="text-base text-center hidden sm:table-cell">network</th>
			<th class="text-base text-end sm:text-center">volume</th>
			<th class="text-base text-center hidden lg:table-cell">floor</th>
			<th class="text-base text-center hidden sm:table-cell sm:text-end xl:text-center">tvl</th>
			<th class="text-base text-center hidden xl:table-cell">More</th>
		</tr>
	</thead>
	<tbody>
		{#each collections as collection}
			<tr>
				<td>
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-square w-16 h-16">
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
						<div class="mask mask-square w-16 h-16">
							<img src={imgUrl} alt={`${collection.name} Sample #${i}`} />
						</div>
					{/each}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
