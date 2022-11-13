<script lang="ts">
	import CollectionTable from '../components/CollectionTable.svelte';
	import Hero from '../components/Hero.svelte';
	import NftDisplay from '../components/NftDisplay.svelte';
	import type { Collection } from 'src/types/Collection';

	const collections: Collection[] = [
		{
			imgUrl: 'https://placeimg.com/160/160/any',
			name: 'A Sample',
			network: 'Hedera',
			volume: 1,
			floor: 2,
			tvl: 3,
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
			name: 'B Sample',
			network: 'Ethereum',
			volume: 2,
			floor: 3,
			tvl: 4,
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
			name: 'C Sample',
			network: 'BTC',
			volume: 3,
			floor: 4,
			tvl: 5,
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
			name: 'D Sample',
			network: 'Solana',
			volume: 4,
			floor: 5,
			tvl: 6,
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
			name: 'E Sample',
			network: 'Near',
			volume: 5,
			floor: 6,
			tvl: 7,
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
			name: 'F Sample',
			network: 'EOS',
			volume: 6,
			floor: 7,
			tvl: 8,
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
			name: 'H Sample',
			network: 'VeChain',
			volume: 7,
			floor: 8,
			tvl: 9,
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
			name: 'I Sample',
			network: 'Cardano',
			volume: 8,
			floor: 9,
			tvl: 0,
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
			name: 'J Sample',
			network: 'Monero',
			volume: 9,
			floor: 0,
			tvl: 1,
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
			name: 'K Sample',
			network: 'Luna',
			volume: 0,
			floor: 1,
			tvl: 2,
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
<main class="p-2 sm:p-4 md:p-8 space-y-8">
	<CollectionTable {collections} />
	<NftDisplay caption={"View All Drops ❯"} title={upcomingDropsTitle} nftImgUrls={upcomingDropsNftImgUrls} />
	<NftDisplay caption={"View All Mints ❯"} title={newMintsTitle} nftImgUrls={newMintsNftImgUrls} />
</main>
