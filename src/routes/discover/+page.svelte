<script lang="ts">
	import Footer from '../../components/Footer.svelte'
</script>

<div class="drawer">
	<input id="discover-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<main class="p-2 sm:p-4 md:p-8 space-y-8">
			<section class="flex justify-end">
				<label for="discover-drawer" class="btn btn-primary drawer-button">Filter</label>
			</section>
		</main>
		<Footer />
	</div>
	<div class="drawer-side">
		<label for="discover-drawer" class="drawer-overlay" />
		<div class="menu w-[80%] max-w-xs p-4 bg-base-100 text-base-content pl-8 space-y-8">
			<div>
        <p class="font-bold">Status</p>
				<div class="form-control">
					<label class="label cursor-pointer justify-start items-center">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Buy Now</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Has Offers</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">New</span>
					</label>
				</div>
			</div>

      <div>
        <p class="font-bold">Price</p>
        <input type="text" placeholder="Min" class="input w-20 focus:outline-0" />
        <input type="text" placeholder="Max" class="input w-20 focus:outline-0" />
        <select class="select">
					<option selected>USD</option>
					<option>PIX</option>
					<option>HBAR</option>
					<option>ETH</option>
				</select>
      </div>

      <div>
        <p class="font-bold">Network</p>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Hedera</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Ethereum</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer justify-start">
						<input type="checkbox" class="checkbox checkbox-xs mr-1" />
						<span class="label-text mt-0.5">Binance</span>
					</label>
				</div>
			</div>

      <div>
        <p class="font-bold">Collections</p>
        <input
			type="text"
			placeholder="&#x1F50E;&#xFE0E; Search Collections"
			class="input input-ghost focus:outline-0"
		/>
      </div>

		</div>
	</div>
</div>
