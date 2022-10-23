<script>
	import Hero from '../components/Hero.svelte';
</script>

<Hero />
<div class="space-y-4">

	<div class="flex flex-col md:flex-row md:justify-evenly items-center mt-4 space-y-4 md:space-y-0">
		<h3 class="text-2xl font-bold">Most Popular Collections</h3>
		<div class="w-full flex justify-evenly md:w-1/2">
			<select class="select bg-base-200 select-sm">
				<option selected>All networks</option>
			</select>
			<select class="select bg-base-200 select-sm">
				<option selected>Last 7 Days</option>
			</select>
		</div>
	</div>

	<div class="overflow-x-auto">
		<table class="table w-full mt-4">
			<!-- head -->
			<thead class="text-gray-500">
				<tr>
					<th>Collection</th>
					<th class="text-end">Volume</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				<tr>
					<td class="font-medium">Cy Ganderton</td>
					<td class="text-end font-medium">123</td>
				</tr>
			</tbody>
		</table>
	</div>

</div>
