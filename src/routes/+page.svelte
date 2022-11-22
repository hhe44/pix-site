<script lang="ts">
	import CollectionTable from '$lib/components/CollectionTable.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import NftDisplay from '$lib/components/NftDisplay.svelte';
	import type { Collection } from '$lib/types/Collection';
	import type { Card } from '$lib/types/Card';

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

	const upcomingDropsCaption: string = 'View All Drops ❯';
	const upcomingDropsTitle: string = 'Upcoming Drops';
	const upcomingDropsCardData: Card[] = [
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'Loco Lizards',
			cardDetails: [
				['Mint Price', 123],
				['Supply', 1200]
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'Sloth Society',
			cardDetails: [
				['Mint Price', 123],
				['Supply', 1200]
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'CloneX',
			cardDetails: [
				['Mint Price', 123],
				['Supply', 1200]
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'Pixelmon',
			cardDetails: [
				['Mint Price', 123],
				['Supply', 1200]
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'HGraphPunks',
			cardDetails: [
				['Mint Price', 123],
				['Supply', 1200]
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'Degen Ape Academy',
			cardDetails: [
				['Mint Price', 123],
				['Supply', 1200]
			]
		}
	];

	const newMintsCaption: string = 'View All Mints ❯';
	const newMintsTitle: string = 'New Mints';
	const newMintsNftImgUrls: Card[] = [
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'My Pet Hooligan',
			cardDetails: [
				['Volume', 123],
				['Listed', '10/10']
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'Hashcrab Gen 2.0',
			cardDetails: [
				['Volume', 123],
				['Listed', '10/10']
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'Kitaro World',
			cardDetails: [
				['Volume', 123],
				['Listed', '10/10']
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'Hedera Monkeys',
			cardDetails: [
				['Volume', 123],
				['Listed', '10/10']
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'OK Bears',
			cardDetails: [
				['Volume', 123],
				['Listed', '10/10']
			]
		},
		{
			url: 'https://placeimg.com/400/400/arch',
			name: 'Bionic Ducks',
			cardDetails: [
				['Volume', 123],
				['Listed', '10/10']
			]
		}
	];
</script>

<Hero />
<main class="p-2 sm:p-4 md:p-8 space-y-8">
	<CollectionTable {collections} />
	<NftDisplay
		caption={upcomingDropsCaption}
		title={upcomingDropsTitle}
		cardsData={upcomingDropsCardData}
	/>
	<NftDisplay 
		caption={newMintsCaption} 
		title={newMintsTitle} 
		cardsData={newMintsNftImgUrls} 
	/>
</main>
