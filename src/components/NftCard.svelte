<script lang="ts">
	export let imgUrl: string = '';
	export let imgAlt: string = '';
  export let name: string = '';
  export let cardDetails: [string, string | number][]
</script>

<div class="w-full cursor-pointer transition duration-150 hover:scale-95">
	<img class="w-full" src={imgUrl} alt={imgAlt} />
	<div>
		<p class="m-2 font-bold text-center">{name}</p>
		<div class="flex justify-around">
      {#each cardDetails as detail}
			<div>
				<p class="text-sm font-semibold text-gray-500">{detail[0]}</p>
				<p class="text-sm">{detail[1]}</p>
			</div>
			{/each}
		</div>
	</div>
</div>
