<script lang="ts">
	import { Icon, Label } from '@smui/common';
	import Button from '@smui/button/src/Button.svelte';
  import Textfield from '@smui/textfield';
	import TopAppBar, { Row, Section } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
  let search = '';
</script>

<TopAppBar variant="static" color="primary">
	<Row>

		<Section>
			<a href="/"><img class="min-w-[80px]" src="./images/pix-logo.svg" alt="Pix logo" /></a>
		</Section>

		<Section align="end" toolbar>
			<IconButton style="margin-right: 1rem" class="material-icons" aria-label="Checkout Items">
        shopping_bag
      </IconButton>
			<Button variant="unelevated">
				<Label>Sign In</Label>
			</Button>
		</Section>
	</Row>
</TopAppBar>
<slot />