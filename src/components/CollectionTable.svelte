<script lang="ts">
	interface Collection {
		imgUrl: string;
    name: string;
		network: string;
		volume: number;
		floor: number;
		tvl: number;
		more: string[];
	}

	const Collections: Collection[] = [
		{
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
    {
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
    {
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
    {
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
    {
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
    {
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
    {
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
    {
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
    {
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
    {
			imgUrl: 'https://placeimg.com/160/160/any',
      name: 'Sample',
			network: 'Hedera',
			volume: 123,
			floor: 123,
			tvl: 123,
			more: [
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any',
				'https://placeimg.com/160/160/any'
			]
		},
	];
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
		{#each Collections as Collection}
			<tr>
				<td>
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-square w-16 h-16">
								<img src={Collection.imgUrl} alt={`${Collection.name} NFT Collection`} />
							</div>
						</div>
						<div>
							<div class="font-bold">{Collection.name}</div>
						</div>
					</div>
				</td>
				<td class="text-center hidden sm:table-cell font-medium">{Collection.network}</td>
				<td class="text-end sm:text-center">${Collection.volume}</td>
				<td class="text-center hidden lg:table-cell font-medium">${Collection.floor}</td>
				<td class="text-center hidden sm:table-cell sm:text-end xl:text-center font-medium">${Collection.tvl}</td>
				<td class="hidden xl:flex items-center justify-center space-x-4">
          {#each Collection.more as imgUrl, i} 
            <div class="mask mask-square w-16 h-16">
              <img src={imgUrl} alt={`${Collection.name} Sample #${i}`} />
            </div>
          {/each}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
