<script lang="ts">
	import type { MenuItem } from '../types/';
	import { _ } from 'svelte-i18n';

	export let accountId: string = '0.0.000000';
	export let itemCount: number = 0;
	export let menuItems: Array<MenuItem> = [
		{ label: $_('Navbar.Discover'), link: '/discover' },
		{ label: $_('Navbar.Collections'), link: '/collections' }
	];
</script>

<nav class="flex justify-between items-center px-5 py-1.5">
	<div class="flex justify-between items-center gap-3">
		<a href="/"><img class="min-w-[80px]" src="./images/pix-logo.svg" alt="Pix logo" /></a>
		<input
			type="text"
			placeholder="&#x1F50E;&#xFE0E; {$_('Navbar.Search for an NFT, collection or artist')}"
			class="hidden lg:block"
		/>

		<div class="hidden sm:flex ml-1">
			<ul class="flex text-sm font-bold gap-5">
				{#each menuItems as menuItem}
					<li><a href={menuItem.link}>{menuItem.label}</a></li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="flex items-center gap-2">
		<button class="btn btn-ghost btn-circle p-1.5">
			<div class="indicator">
				<svg
					width="16"
					height="20"
					viewBox="0 0 16 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z"
						fill="#18181B"
					/>
				</svg>
				{#if itemCount}
					<span class="badge badge-sm indicator-item">{itemCount}</span>
				{/if}
			</div>
		</button>

		<!-- <p class="hidden md:block text-sm font-bold ml-4">{accountId}</p> -->
		<button class="rounded-[6px] bg-black text-white font-bold text-[14px] px-2 py-[10px]">
			{$_('Navbar.Sign in')}
			<!-- <svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z"
					fill="#18181B"
				/>
			</svg> -->
		</button>

		<div class="dropdown dropdown-end sm:hidden">
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-3 h-3 stroke-neutral"
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
				{#each menuItems as menuItem}
					<li><a href={menuItem.link}>{menuItem.label}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
