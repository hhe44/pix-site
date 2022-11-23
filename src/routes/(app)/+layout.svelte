<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import "$src/app.postcss";
</script>

<Navbar />
<slot></slot>
<Footer />