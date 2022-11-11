<script lang="ts">
	import CollectionTable from '../components/CollectionTable.svelte';
	import Hero from '../components/Hero.svelte';
	import NftDisplay from '../components/NftDisplay.svelte';
	import type { Collection } from 'src/types/Collection';

	const collections: Collection[] = [
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
		}
	];
	const upcomingDropsTitle: string = 'Upcoming Drops';
	const upcomingDropsNftImgUrls: string[] = [
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch'
	];
	const newMintsTitle: string = 'New Mints';
	const newMintsNftImgUrls: string[] = [
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch',
		'https://placeimg.com/400/400/arch'
	];
</script>

<Hero />
<div class="sm:p-4 md:p-8">
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

	<div class="overflow-x-auto">
		<CollectionTable {collections} />
	</div>
	<div class="text-center">
		<h5 class="text-med font-bold">View All Collections ❯</h5>
	</div>
	
	<NftDisplay title={upcomingDropsTitle} nftImgUrls={upcomingDropsNftImgUrls} />
	<div class="text-center">
		<h5 class="mt-2 text-med font-bold">View All Drops ❯</h5>
	</div>

	<NftDisplay title={newMintsTitle} nftImgUrls={newMintsNftImgUrls} />
	<div class="text-center">
		<h5 class="mt-2 text-med font-bold">View All Mints ❯</h5>
	</div>
</div>
