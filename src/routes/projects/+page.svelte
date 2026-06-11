<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Section from '$lib/components/Section.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<Section title="Projects">
	<div class="grid gap-4">
		<div class="p-4 border rounded-lg bg-card">
			<h3 class="font-bold">Project 1</h3>
			<p class="text-sm text-muted-foreground">Minimalist CV builder</p>
		</div>
		<div class="p-4 border rounded-lg bg-card">
			<h3 class="font-bold">Project 2</h3>
			<p class="text-sm text-muted-foreground">SvelteKit Admin Dashboard</p>
		</div>
	</div>
</Section>

<Footer />
