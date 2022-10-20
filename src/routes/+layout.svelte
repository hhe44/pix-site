<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar itemCount={0} />
<slot></slot>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
