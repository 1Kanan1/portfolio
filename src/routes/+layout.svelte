<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import { ModeWatcher } from "mode-watcher";
    import { onNavigate } from "$app/navigation";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let { children } = $props();

    // page-to-page animation by crossfading old picture into new one
    onNavigate((navigation) => {
        if (!document.startViewTransition) return; // if browser doesn't support

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve(); // pauses the animation
                await navigation.complete; // swaps DOM to new page
            });
        });
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link
        rel="stylesheet"
        href="https://esm.sh/devicon@latest/devicon.min.css"
    />
</svelte:head>

<ModeWatcher />

<main
    class="max-w-3xl mx-auto px-8 pt-10 pb-16 min-h-screen antialiased selection:bg-muted"
>
    {@render children()}
</main>
