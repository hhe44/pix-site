<script>
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import "../app.postcss";
</script>

<Navbar />
<slot></slot>
<Footer />