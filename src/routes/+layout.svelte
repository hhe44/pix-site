<script>
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar itemCount={0} />
<slot />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* Override daisyUI's CSS below: */
	.btn, .select {
		border-radius: 0px;
	}

	.btn-circle {
		border-radius: 9999px;
	}

	.select:focus {
		outline: none;
	}

	.table th {
		background-color: transparent;
	}
</style>
