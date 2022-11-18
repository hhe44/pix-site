<script lang="ts">
	export let accountId: string = '0.0.000000';
	export let itemCount: number = 0;
</script>

<nav class="navbar bg-transparent">
	<div class="navbar-start lg:pl-8">
		<a href="/" class="btn btn-ghost rounded mr-4">LOGO</a>
		<input
			type="text"
			placeholder="&#x1F50E;&#xFE0E; Search"
			class="hidden lg:block input input-ghost focus:outline-0"
		/>
	</div>
	<div class="navbar-center hidden sm:block">
		<ul class="menu menu-horizontal lg:space-x-2 text-sm font-bold">
			<li><a href="/discover">Discover</a></li>
			<li><a href="/create">Create</a></li>
			<li><a href="/">Drops</a></li>
			<li><a href="/">Stats</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle lg:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
		<button class="btn btn-ghost btn-circle ml-2">
			<div class="indicator">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 stroke-neutral"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
				<span class="badge badge-sm indicator-item">{itemCount}</span>
			</div>
		</button>
		<p class="hidden md:block text-sm font-bold mx-4">{accountId}</p>
		<div class="dropdown dropdown-end sm:hidden">
			<button class="btn btn-square btn-ghost ml-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-neutral"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
			<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
				<p class="hidden md:block text-sm font-bold mx-4">{accountId}</p>
				<li><a href="/discover">Discover</a></li>
				<li><a href="/create">Create</a></li>
				<li><a href="/">Drops</a></li>
				<li><a href="/">Stats</a></li>
			</ul>
		</div>
	</div>
</nav>
