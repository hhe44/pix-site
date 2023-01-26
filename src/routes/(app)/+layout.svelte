<script context="module">
	import '$src/app.postcss';
	import { register, init, getLocaleFromNavigator, waitLocale, isLoading } from 'svelte-i18n';

	register('en', () => import('$lib/locales/en.json'));
	register('sv', () => import('$lib/locales/sv.json'));

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});

	export async function preload() {
		// awaits for the loading of 'en' dictionaries
		return waitLocale();
	}
</script>

{#if $isLoading}
	Loading
{:else}
	<slot />
{/if}
