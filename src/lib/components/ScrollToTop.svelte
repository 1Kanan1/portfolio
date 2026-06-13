<script lang="ts">
    import ArrowUp from "@lucide/svelte/icons/arrow-up";

    let scrollY = $state(0);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
</script>

<svelte:window bind:scrollY />

<button
    onclick={scrollToTop}
    class="cursor-pointer fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 p-3 rounded-2xl bg-secondary/80 backdrop-blur-md hover:bg-secondary border border-border text-secondary-foreground shadow-lg transition-all duration-300 {scrollY >
    300
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 translate-y-4 pointer-events-none'}"
    aria-label="Scroll to top"
>
    <ArrowUp class="w-5 h-5" />
</button>
