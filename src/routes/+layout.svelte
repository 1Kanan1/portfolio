<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="max-w-3xl mx-auto px-8 py-16 min-h-screen antialiased selection:bg-muted">
    {@render children()}
</main>
