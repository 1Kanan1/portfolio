<script lang="ts">
    import LinkIcon from "@lucide/svelte/icons/link";
    import Check from "@lucide/svelte/icons/check";
    import { reveal } from "$lib/actions/reveal";

    let { id, title, children } = $props<{
        id?: string;
        title?: string;
        children: any;
    }>();

    let copied = $state(false);

    function copyLink() {
        if (!id) return;
        const url = new URL(window.location.href);
        url.hash = id;
        navigator.clipboard.writeText(url.toString());
        copied = true;
        setTimeout(() => {
            copied = false;
        }, 2000);
    }
</script>

<section {id} class="mb-12 scroll-mt-28 opacity-0 translate-y-8" use:reveal>
    <h2
        class="group flex items-center gap-2 w-full text-xs font-bold tracking-widest uppercase text-slate-400 mb-6"
    >
        {title}
        {#if id}
            <button
                onclick={copyLink}
                class="relative ml-1 w-7 h-7 rounded-md hover:bg-muted text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 active:scale-[0.98] will-change-transform"
                aria-label="Copy link"
            >
                <div
                    class="absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out {copied
                        ? 'opacity-0 scale-75 blur-[2px]'
                        : 'opacity-100 scale-100 blur-0'}"
                >
                    <LinkIcon class="w-3.5 h-3.5" />
                </div>
                <div
                    class="absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out {copied
                        ? 'opacity-100 scale-100 blur-0'
                        : 'opacity-0 scale-75 blur-[2px]'}"
                >
                    <Check class="w-3.5 h-3.5" />
                </div>
            </button>
        {/if}
    </h2>
    <div class="prose prose-slate">
        {@render children()}
    </div>
</section>
