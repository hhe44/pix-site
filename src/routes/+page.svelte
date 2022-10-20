<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
  import Navbar from './Navbar.svelte';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<Navbar itemCount={0}/>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
