<script lang="ts">
	import Dropdown from "../../components/Dropdown.svelte";

</script>

<div class="drawer">
	<input id="discover-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
    <label for="discover-drawer" class="btn btn-primary drawer-button">Filter</label>
		<main class="p-2 sm:p-4 md:p-8 space-y-8"></main>
	</div>
	<div class="drawer-side">
		<label for="discover-drawer" class="drawer-overlay" />
		<div class="menu p-4 w-[80%] max-w-xs bg-base-100 text-base-content">

			<div>
        <p class="font-bold">Status</p>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs" />
						<span class="label-text">Buy Now</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs" />
						<span class="label-text">Has Offers</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs" />
						<span class="label-text">New</span>
					</label>
				</div>
			</div>

      <div>
        <p class="font-bold">Price</p>
        <input type="text" placeholder="Min" class="input w-20 max-w-xs" />
        <input type="text" placeholder="Max" class="input w-20 max-w-xs" />
        <Dropdown options={['HBAR', 'ETH']} />
      </div>

      <div>
        <p class="font-bold">Network</p>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs" />
						<span class="label-text">Buy Now</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs" />
						<span class="label-text">Has Offers</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs" />
						<span class="label-text">New</span>
					</label>
				</div>
			</div>

      <div>
        <p class="font-bold">Collections</p>
        <input
			type="text"
			placeholder="&#x1F50E;&#xFE0E; Search Collections"
			class="hidden lg:block input input-ghost focus:outline-0"
		/>
      </div>

		</div>
	</div>
</div>
